import { HttpStatusCode } from "@/shared/constants/HttpStatusCode";
import { ErrorHandler } from "@/shared/errors/ErrorHandler";
import { IUseCase } from "@/shared/protocols/IUseCase";

import { IUser } from "../../model/IUser";
import { IUserRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    guid: string;
}

class DeleteAccountUseCase implements IUseCase<IRequest, IUser | undefined> {
    constructor(
        private usersRepository: IUserRepository,
        ) {}

    async execute({ guid }: IRequest): Promise<IUser | undefined> {
        const user = await this.usersRepository.findByGuid(guid);

        if (!user) {
            throw new ErrorHandler("User not found", HttpStatusCode.NOT_FOUND);
        }
        const deletedUser = await this.usersRepository.deleteAccount(guid);

        return deletedUser;
    }
}

export { DeleteAccountUseCase };
