import { HttpStatusCode } from "@/shared/constants/HttpStatusCode";
import { ErrorHandler } from "@/shared/errors/ErrorHandler";
import { IUseCase } from "@/shared/protocols/IUseCase";

import { IUser } from "../../model/IUser";
import { IUserRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    guid: string;
}

class FindCurrentUserUseCase implements IUseCase<IRequest, IUser> {
    constructor(
        private usersRepository: IUserRepository,
        ) {}

    async execute({ guid }: IRequest): Promise<IUser> {
       
        const user = await this.usersRepository.findByGuid(guid);

        if (!user) {
            throw new ErrorHandler("User not found", HttpStatusCode.NOT_FOUND);
        }

        if (user && !user.isActive) {
            throw new ErrorHandler(
                "User is not active because his account's information are incomplete.",
                HttpStatusCode.UNAUTHORIZED
            );
        }

        return user;
    }
}

export { FindCurrentUserUseCase };
