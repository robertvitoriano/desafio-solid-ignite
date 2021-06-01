import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {

    const 

   return response.json(this.listAllUsersUseCase.execute({user_id:request.user_id}))
  }
}

export { ListAllUsersController };
