import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

interface IRequest extends Request {
  user_id: string 
}
class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: IRequest, response: Response): Response {   

    try {
      
      const users = this.listAllUsersUseCase.execute({user_id:String(request.headers.user_id)})

      return response.json([...users])

    } catch (error) {

      return response.status(400).json({error:error.message})
      
    }
  }
}

export { ListAllUsersController };
