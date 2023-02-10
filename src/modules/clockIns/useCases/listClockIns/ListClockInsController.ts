import { HttpStatusCode } from "@/shared/constants/HttpStatusCode";
import { ErrorHandler } from "@/shared/errors/ErrorHandler";
import { IController } from "@/shared/protocols";
import { Request, Response, NextFunction } from "express";
import * as Yup from 'yup'
import { ListClockInsUseCase } from "./ListClockInsUseCase";

export class ListClockInsController implements IController {
  constructor (private readonly ListClockInsUseCase: ListClockInsUseCase) {}

  async handle (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {

      const userGuid = request.user?.guid;

      const { guid } = request.params;
      const { startDate, endDate } = request.query;

      if (guid && !request.user?.isSuperAdmin) {
        throw new ErrorHandler("Usuário sem permissão de realizar esta ação.", HttpStatusCode.BAD_REQUEST);
      }

      const clockIns = await this.ListClockInsUseCase.execute({
        userGuid: guid || userGuid,
        startDate,
        endDate
      })
      
      return response.status(HttpStatusCode.OK).json(clockIns)
    } catch (error) {
      return next(error)
    }
  }
}