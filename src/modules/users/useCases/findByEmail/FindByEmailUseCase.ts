import { HttpStatusCode } from "@/shared/constants/HttpStatusCode";
import { ErrorHandler } from "@/shared/errors/ErrorHandler";
import { IUseCase } from "@/shared/protocols/IUseCase";

import { IUser } from "../../model/IUser";
import { IUserRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    login: string;
}

class FindByEmailUseCase implements IUseCase<IRequest, IUser | undefined> {
    constructor(
        private usersRepository: IUserRepository,
        ) {}

    async execute({ login }: IRequest): Promise<IUser | undefined> {
        const user = await this.usersRepository.findByLogin(login);
        return user;
    }
}

export { FindByEmailUseCase };
