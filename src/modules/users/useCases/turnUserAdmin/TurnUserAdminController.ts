import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";


interface IRequest extends Request {

  user_id:string
}
class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: IRequest, response: Response): Response {

    try {

      const user = this.turnUserAdminUseCase.execute({user_id:request.params.user_id})

      return response.json(user)
      
    } catch (error) {
      
      return response.status(404).json({error:error.message})

    }


  }
}

export { TurnUserAdminController };
