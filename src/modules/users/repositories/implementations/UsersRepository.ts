import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {

    const usersExists = this.users.some(( user ) => user.email === email )

    if(usersExists) throw new Error("Email already taken !");
    

    const user = new User();



    Object.assign(user, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
      admin: false,
    });


    this.users.push(user);

    return user;
  }

  findById(id: string): User{
    const user = this.users.find((user)=>user.id === id)

    if(!user)  throw new Error('User not Found !')

    return user
  }

  findByEmail(email: string): User {

    const user = this.users.find((user)=>user.email === email)

    if(!user)  throw new Error('User not Found !')

    return user
  }

  turnAdmin(receivedUser: User): User {
 
    const userIndex = this.users.findIndex((user)=>user.id === receivedUser.id)

    const user = this.users[userIndex]

    user.admin = true

    return user 
     
  }

  list(): User[] {


    return this.users
  }
}

export { UsersRepository };
