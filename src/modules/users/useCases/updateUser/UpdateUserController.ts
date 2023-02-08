import { Request, Response, NextFunction } from "express";
import * as Yup from "yup";

import { HttpStatusCode } from "@/shared/constants/HttpStatusCode";
import { ErrorHandler } from "@/shared/errors/ErrorHandler";
import { IController } from "@/shared/protocols";

import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController implements IController {
    constructor(private updateUserUseCase: UpdateUserUseCase) { }

    private async validateBody(request: Request): Promise<void> {
        const schema = Yup.object({
            name: Yup.string().trim().max(191).nullable(),
            password: Yup.string()
                .trim()
                .min(6, "A senha deve ter no mínimo 6 caracteres").nullable(),
            cpf: Yup.string(),
            birthDate: Yup.string(),
            ctps: Yup.string(),
            register: Yup.string(),
            sex: Yup.string(),
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

            const { user } = request;

            if (!user) {
                throw new ErrorHandler(
                    "Unauthorized. Authentication failed.",
                    HttpStatusCode.FORBIDDEN
                );
            }

            const {
                guid,
                name,
                password,
                isActive,
                cpf,
                birthDate,
                ctps,
                register,
                sex,
            } = request.body;

            const updatedUser = await this.updateUserUseCase.execute({
                guid,
                name,
                password,
                isActive,
                cpf,
                birthDate,
                ctps,
                register,
                sex
            });

            return response
                .status(HttpStatusCode.OK)
                .json(updatedUser);
        } catch (err) {
            return next(err);
        }
    }
}
