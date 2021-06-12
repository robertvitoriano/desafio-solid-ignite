import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }): User {

    try {
      const user = this.usersRepository.findById(user_id)

      return user
      
    } catch (error) {


      throw new Error(error.meesage);
      
      
    }


   


  }
}

export { ShowUserProfileUseCase };
