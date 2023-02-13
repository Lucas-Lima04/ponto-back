import { NextFunction, Request, Response } from "express";

import { HttpStatusCode } from "@/shared/constants/HttpStatusCode";
import { ErrorHandler } from "@/shared/errors/ErrorHandler";
import { IController } from "@/shared/protocols";

import { ListUsersUseCase } from "./ListUsersUseCase";

class ListUsersController implements IController {
    constructor(
        private listUsersUseCase: ListUsersUseCase,
    ) {}

    async handle(
        request: Request,
        response: Response,
        next: NextFunction
    ): Promise<Response | void> {
        try {
            const guid = request.user?.guid || "";
            const { activeUsers } = request.query;

            const users = await this.listUsersUseCase.execute({ guid, activeUsers: activeUsers && activeUsers ? true : false });
            
            return response.status(HttpStatusCode.OK).json(users);
        } catch (err) {
            return next(err);
        }
    }
}

export { ListUsersController };
