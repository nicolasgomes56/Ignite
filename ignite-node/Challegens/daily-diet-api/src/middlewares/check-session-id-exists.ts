import { FastifyReply, FastifyRequest } from 'fastify'
import knex from 'knex'

export async function checkSessionIdExists(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const sessionId = request.cookies.sessionId

  if (!sessionId) {
    return reply.status(401).send({ status: 'error', message: 'Unauthorized' })
  }

  const user = await knex('users').where({ sessionId }).first()

  if (!user) {
    return reply.status(401).send({ status: 'error', message: 'Unauthorized' })
  }
}
