import { FastifyInstance } from 'fastify'
import { authenticate } from './controllers/authenticate'
import { profile } from './controllers/profile'
import { register } from './controllers/register'
import { verifyJWT } from './middlewares/verify-jwt'

export async function appRoutes(app: FastifyInstance) {
  // Traduzir as rotas para formato de entidades (users -> users, sessions -> authenticate)
  app.post('/users', register)

  app.post('/sessions', authenticate)

  /** Authenticated */
  app.get('/me', { onRequest: [verifyJWT] }, profile)
}
