import { Request, Response, NextFunction } from "express";
import * as Yup from "yup";

import { HttpStatusCode } from "@/shared/constants/HttpStatusCode";
import { IController } from "@/shared/protocols";
import { UserLoginUseCase } from "../login/UserLoginUseCase";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { ErrorHandler } from "@/shared/errors/ErrorHandler";

class CreateUserController implements IController {
    constructor(
        private createUserUseCase: CreateUserUseCase,
    ) { }

    private async validateBody(request: Request): Promise<void> {
        const schema = Yup.object({
            name: Yup.string().trim().required().max(191),
            login: Yup.string().trim().required(),
            password: Yup.string()
                .trim()
                .required()
                .min(6, "A senha deve ter no mínimo 6 caracteres"),
            cpf: Yup.string().required(),
            birthDate: Yup.string().required(),
            ctps: Yup.string().required(),
            register: Yup.string().required(),
            sex: Yup.string().required(),
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
                name,
                login,
                password,
                cpf,
                birthDate,
                ctps,
                register,
                sex
             } =
                request.body;

            const user = await this.createUserUseCase.execute({
                name,
                login,
                password,
                cpf,
                birthDate,
                ctps,
                register,
                sex,
            });

            return response.status(HttpStatusCode.CREATED).json(user);
        } catch (err) {
            return next(err);
        }
    }
}

export { CreateUserController };
