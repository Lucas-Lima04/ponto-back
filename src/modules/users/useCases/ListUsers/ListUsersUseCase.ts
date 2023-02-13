import { HttpStatusCode } from "@/shared/constants/HttpStatusCode";
import { ErrorHandler } from "@/shared/errors/ErrorHandler";
import { IUseCase } from "@/shared/protocols/IUseCase";

import { IUser } from "../../model/IUser";
import { IUserRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    guid: string;
    activeUsers: boolean;
}

class ListUsersUseCase implements IUseCase<IRequest, IUser[]> {
    constructor(
        private usersRepository: IUserRepository,
        ) {}

    async execute({ guid, activeUsers }: IRequest): Promise<IUser[]> {
       
        const user = await this.usersRepository.findByGuid(guid);

        if (!user) {
            throw new ErrorHandler("User not found", HttpStatusCode.NOT_FOUND);
        }

        if (user && !user.isSuperAdmin) {
            throw new ErrorHandler(
                "User not allowed to do this request.",
                HttpStatusCode.UNAUTHORIZED
            );
        }

        const users = await this.usersRepository.list(activeUsers);

        return users;
    }
}

export { ListUsersUseCase };
