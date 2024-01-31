import { UsersRepository } from '@/repositories/users-repository'
import { hash } from 'bcryptjs'
import { UserAlreadyExists } from './errors/user-already-exists'

interface RegisterUseCaseRequest {
  name: string
  email: string
  password: string
}

/** Dependency Inversion Principle
 * Em vez de instanciar o repositório dentro da classe, recebemos como parâmetro no construtor
 * Assim, podemos passar qualquer repositório que implemente a interface UserRepository
 */

export class RegisterUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async handle({ name, email, password }: RegisterUseCaseRequest) {
    const password_hash = await hash(password, 6) // Salt é o número de vezes que o hash é executado

    const userWithSameEmail = await this.usersRepository.findByEmail(email)

    if (userWithSameEmail) {
      throw new UserAlreadyExists()
    }

    await this.usersRepository.create({
      name,
      email,
      password_hash,
    })
  }
}
