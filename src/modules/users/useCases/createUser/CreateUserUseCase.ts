import { HttpStatusCode } from "@/shared/constants/HttpStatusCode";
import { ErrorHandler } from "@/shared/errors/ErrorHandler";
import { ICryptography } from "@/shared/infra/adapters/cryptography/ICryptography";
import { IUseCase } from "@/shared/protocols/IUseCase";
import validatePassword from "@/shared/utils/tools/validatePassword";

import { IUser } from "../../model/IUser";
import { IUserRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    name: string;
    login: string;
    cpf: string;
    birthDate: string;
    ctps: string;
    register: string;
    sex: string;
    password: string;
}

class CreateUserUseCase implements IUseCase<IRequest, IUser> {
    constructor(
        private usersRepository: IUserRepository,
        private cryptography: ICryptography
    ) { }

    async execute({
        name,
        login,
        password,
        cpf,
        birthDate,
        ctps,
        register,
        sex
    }: IRequest): Promise<IUser> {
        const userExists = await this.usersRepository.findByLogin(login);

        if (userExists && !userExists.isActive) {
            await this.usersRepository.delete(userExists.guid);
        }

        if (userExists && userExists.isActive) {
            throw new ErrorHandler(
                "Usuário já cadastrado",
                HttpStatusCode.CONFLICT
            );
        }
        if (!validatePassword(password)) {
            throw new ErrorHandler(
                "Password must have at least one letter and one number.",
                HttpStatusCode.BAD_REQUEST
            );
        }
        const encryptedPassword = await this.cryptography.encrypt(password);

        const user = await this.usersRepository.create({
            name,
            login,
            encryptedPassword,
            birthDate,
            cpf,
            ctps,
            register,
            sex
        });

        return user;
    }
}

export { CreateUserUseCase };
