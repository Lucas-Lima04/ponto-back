//import { context } from "@/shared/infra/database/Context";
import { context } from "../../../../shared/infra/database/Context";
import { PrismaClient, User as PrismaUser } from "@prisma/client";
import { IPrismaUserFactory } from "../../factories/implementations/UserPrismaFactory";
import { IUserFactory } from "../../factories/IUserFactory";
import { IUser } from "../../model/IUser";
import {
    ICreateUserDTO,
    IUserRepository,
    IUpdateUserDTO,
} from "../IUsersRepository";

class UsersPrismaRepository implements IUserRepository {
    private prismaClient: PrismaClient;

    constructor(
        private readonly userFactory: IUserFactory<IPrismaUserFactory>
    ) {
        this.prismaClient = context.prisma;
    }
    async list(activeUsers: boolean): Promise<IUser[]> {
        const users = await this.prismaClient.user.findMany({
            orderBy: [
                {isActive: "desc"},
                {name: "asc"}
            ]
        });

        if (activeUsers) {
            const activeUsers: PrismaUser[] = [];

            for (let i = 0; i < users.length; i++) {
                const clockIns = await this.prismaClient.clockIn.count({
                    where: {
                        guid: users[i].guid
                    }
                });

                if (clockIns % 2 !== 0) {
                    activeUsers.push(users[i]);
                }
            }
            return activeUsers.map(user => this.userFactory.generateFactoryObject(user));
        } else {
            return users.map(user => this.userFactory.generateFactoryObject(user));
        }
    }
    
    async deleteAccount(guid: string): Promise<IUser | undefined> {
        const user = await this.prismaClient.user.update({
            where: {guid},
            data: {
                isActive: false,
            }
        });
        
        if (!user) {
            return undefined;
        }
        return user;
    }

    async create({
        name,
        login,
        encryptedPassword,
        birthDate,
        cpf,
        ctps,
        register,
        sex
    }: ICreateUserDTO): Promise<IUser> {

        const userP = await this.prismaClient.user.create({
            data: {
                name,
                login,
                birthDate,
                cpf,
                ctps,
                register,
                sex,
                encryptedPassword,
                createdAt: new Date(),
                updatedAt: new Date(),
                isActive: true,
                isSuperAdmin: false,
            }
        });

        return this.userFactory.generateFactoryObject(userP);
    }

    async update({
        guid,
        name,
        login,
        birthDate,
        cpf,
        ctps,
        register,
        sex,
        encryptedPassword,
        isActive,
        authToken,
    }: IUpdateUserDTO): Promise<IUser> {

        const user = await this.prismaClient.user.update({
            where: { guid },
            data: {
                guid,
                name,
                login,
                birthDate,
                cpf,
                ctps,
                register,
                sex,
                encryptedPassword,
                isActive,
                authToken,
                updatedAt: new Date(),
            },
        });

        return this.userFactory.generateFactoryObject(user);
    }


    async delete(userGuid: string): Promise<void> {
        if (userGuid) {
            await this.prismaClient.user.delete({
                where: { guid: userGuid },
            });
        }
    }

    async findByGuid(guid: string): Promise<IUser | undefined> {
        if (!guid) {
            return undefined;
        }

        const user = await this.prismaClient.user.findFirst({
            where: { guid },
        });

        return user ? this.userFactory.generateFactoryObject(user) : undefined;
    }

    async validateAuth(guid: string, authToken: string): Promise<boolean> {
        
        if (!guid) {
            return false;
        }

        const user = await this.prismaClient.user.findFirst({
            where: { 
                guid,
                authToken
            }
        });

        return user ? true : false;
    }

    async findByLogin(login: string): Promise<IUser | undefined> {
        if (!login) {
            return undefined;
        }

        const user = await this.prismaClient.user.findFirst({
            where: { login },
        });

        return user ? this.userFactory.generateFactoryObject(user) : undefined;
    }

}
export { UsersPrismaRepository };
