import { randomUUID } from 'crypto'
import { FastifyInstance } from 'fastify'
import knex from 'knex'
import z from 'zod'

export async function UserController(app: FastifyInstance) {
  app.post('/', async (request, reply) => {
    const createUserBodySchema = z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string().min(6),
    })

    let sessionId = request.cookies.sessionId

    if (!sessionId) {
      sessionId = randomUUID()

      reply.setCookie('sessionId', sessionId, {
        path: '/',
        maxAge: 1000 * 60 * 60 * 24 * 7,
      })
    }

    const { name, email, password } = createUserBodySchema.parse(request.body)

    const user = await knex('users').where({ email }).first()

    if (user) {
      return reply.status(400).send({ error: 'User already exists' })
    }

    await knex('users').insert({
      id: randomUUID(),
      name,
      email,
      password,
      session_id: sessionId,
    })

    return reply.status(201).send()
  })
}
