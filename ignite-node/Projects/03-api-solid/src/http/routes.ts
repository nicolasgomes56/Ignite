import { FastifyInstance } from 'fastify'
import { authenticate } from './controllers/authenticate'
import { register } from './controllers/register'

export async function appRoutes(app: FastifyInstance) {
  // Traduzir as rotas para formato de entidades (users -> users, sessions -> authenticate)
  app.post('/users', register)
  app.post('/sessions', authenticate)
}
