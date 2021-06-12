import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";


interface IRequest extends Request {

  user_id: string
}
class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

  handle(request: IRequest, response: Response): Response {
    try {

      const user = this.showUserProfileUseCase.execute({ user_id: request.params.user_id })

      return response.json(user)

    } catch (error) {

      return response.status(404).send({error:error})

    }
  }
}

export { ShowUserProfileController };
