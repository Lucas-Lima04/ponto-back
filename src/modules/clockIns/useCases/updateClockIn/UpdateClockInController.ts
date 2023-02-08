import { Request, Response, NextFunction } from "express";
import * as Yup from "yup";

import { HttpStatusCode } from "@/shared/constants/HttpStatusCode";
import { IController } from "@/shared/protocols";

import { UpdateClockInUseCase } from "./UpdateClockInUseCase";
import { ErrorHandler } from "@/shared/errors/ErrorHandler";

class UpdateClockInController implements IController {
    constructor(
        private updateClockInUseCase: UpdateClockInUseCase,
    ) {}

    private async validateBody(request: Request): Promise<void> {
        const schema = Yup.object({
            guid: Yup.string().required(),
            observation: Yup.string(),
            isActive: Yup.boolean()
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
                guid,
                observation,
                isActive
             } =
                request.body;

            const userGuid = request.user?.guid;

            if(!userGuid){
                throw new ErrorHandler(
                    "Invalid user.",
                    HttpStatusCode.UNAUTHORIZED
                );                
            }
            const clockIn = await this.updateClockInUseCase.execute({
                guid,
                isActive,
                observation
            });


            return response.status(HttpStatusCode.OK).json({
                clockIn
            });
        } catch (err) {
            return next(err);
        }
    }
}

export { UpdateClockInController };
