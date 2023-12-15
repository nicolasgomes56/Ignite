import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'

const prisma = new PrismaClient()

prisma.user.create({
  data: {
    name: 'Alice',
    email: '',
  },
})

export const app = fastify()
