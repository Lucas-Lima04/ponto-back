import { IUser } from "../model/IUser";

interface ICreateUserDTO {
    name: string
    login: string;
    cpf: string;
    birthDate: string;
    sex: string;
    ctps: string;
    register: string;
    encryptedPassword: string;
}

interface IUpdateUserDTO {
    guid: string;
    name?: string;
    login?: string;
    cpf?: string;
    birthDate?: string;
    sex?: string;
    ctps?: string;
    register?: string;
    encryptedPassword?: string;
    isActive?: boolean;
    authToken?: string;
}

interface IUserRepository {
    create(params: ICreateUserDTO): Promise<IUser>;
    update(params: IUpdateUserDTO): Promise<IUser>;
    delete(userGuid: string): Promise<void>;
    findByGuid(guid: string): Promise<IUser | undefined>;
    deleteAccount(guid: string): Promise<IUser | undefined>;
    findByLogin(login: string): Promise<IUser | undefined>;
    validateAuth(guid: string, authToken: string): Promise<boolean>
    list(): Promise<IUser[]>;
}

export {
    IUserRepository,
    ICreateUserDTO,
    IUpdateUserDTO,
};
