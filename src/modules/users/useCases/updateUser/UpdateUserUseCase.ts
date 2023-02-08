import { HttpStatusCode } from "@/shared/constants/HttpStatusCode";
import { ErrorHandler } from "@/shared/errors/ErrorHandler";
import { ICryptography } from "@/shared/infra/adapters/cryptography/ICryptography";
import { IUseCase } from "@/shared/protocols/IUseCase";

import { IUser } from "../../model/IUser";
import { IUserRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    guid: string;
    name: string;
    password?: string;
    cpf?: string;
    birthDate?: string;
    ctps?: string;
    register?: string;
    sex?: string;
    isActive?: boolean;
}

export class UpdateUserUseCase implements IUseCase<IRequest, IUser> {
    constructor(
        private usersRepository: IUserRepository,
        private cryptography: ICryptography
    ) { }

    async execute({
        guid,
        name,
        cpf,
        birthDate,
        ctps,
        register,
        sex,
        password,
        isActive
    }: IRequest): Promise<IUser> {
        const userExists = await this.usersRepository.findByGuid(guid);

        if (!userExists) {
            throw new ErrorHandler("User not found", HttpStatusCode.NOT_FOUND);
        }

        let encryptedPassword: string | undefined;

        encryptedPassword = password? await this.cryptography.encrypt(password) : undefined;

        const user = await this.usersRepository.update({
            guid,
            name: name?.trim(),
            cpf,
            birthDate,
            ctps,
            register,
            sex,
            encryptedPassword,
            isActive: isActive !== undefined ? isActive : true,
        });

        return user;
    }
}
