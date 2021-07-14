import { inject, injectable } from 'tsyringe';

import { ICreateUsersDTO } from '../../dtos/ICreateUsersDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    name, password, email, driver_license,
  }: ICreateUsersDTO): Promise<void> {
    await this.usersRepository.create({
      name, password, email, driver_license,
    });
  }
}

export { CreateUserUseCase };
