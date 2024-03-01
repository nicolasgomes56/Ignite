import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { RegisterUseCase } from '../register'

/** Factory Pattern
 * É uma fabrica de criação de coisas comuns que há muitas dependencias e que são usadas em muitos lugares do código.
 * Centralizador da criação do caso de uso.
 * Se o caso de uso precisar de mais dependencias, é só adicionar aqui.
 */

export function makeRegisterUSeCase() {
  const userRepository = new PrismaUsersRepository()
  const registerUseCase = new RegisterUseCase(userRepository)

  return registerUseCase
}
