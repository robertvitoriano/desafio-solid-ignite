import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {

    try{
      const user =  this.usersRepository.create({ email, name });

      return user

    }catch(e){


      throw new Error(e.message)

    }

  }
}

export { CreateUserUseCase };
