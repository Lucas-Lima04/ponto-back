import { Request, Response, NextFunction } from "express";
import * as Yup from "yup";

import { HttpStatusCode } from "@/shared/constants/HttpStatusCode";
import { IController } from "@/shared/protocols";

import { CreateClockInUseCase } from "./CreateClockInUseCase";
import { ErrorHandler } from "@/shared/errors/ErrorHandler";

class CreateClockInController implements IController {
    constructor(
        private createClockInUseCase: CreateClockInUseCase,
    ) {}

    private async validateBody(request: Request): Promise<void> {
        const schema = Yup.object({
            observation: Yup.string(),
        });

        await schema.validate(request.body);
    }

    async handle(
        request: Request,
        response: Response,
        next: NextFunction
    ): Promise<Response | void> {
        try {
            await this.validateBody(request);

            const { 
                observation
             } =
                request.body;

            const userGuid = request.user?.guid;

            if(!userGuid){
                throw new ErrorHandler(
                    "Invalid user.",
                    HttpStatusCode.UNAUTHORIZED
                );                
            }
            const clockIn = await this.createClockInUseCase.execute({
                userGuid,
                observation
            });


            return response.status(HttpStatusCode.CREATED).json({
                clockIn
            });
        } catch (err) {
            return next(err);
        }
    }
}

export { CreateClockInController };
