import { IClockInFactory } from "@/modules/clockIns/factories/IClockInFactory";
import { IPrismaClockInFactory } from "@/modules/clockIns/factories/implementations/ClockInPrismaFactory";

import {
    User as PUser,
    ClockIn as PClockIn
} from "@prisma/client";
import { IUser } from "../../model/IUser";
import { IUserFactory } from "../IUserFactory";

export interface IPrismaUserFactory extends PUser {
    user?: PUser | null;
    clockIns?: PClockIn[]
}

export class UserPrismaFactory implements IUserFactory<IPrismaUserFactory> {
    constructor(
        private readonly clockInFactory?: IClockInFactory<IPrismaClockInFactory>,
    ) { }
    generateFactoryObject(user: IPrismaUserFactory): IUser {

        return {
            guid: user.guid,
            name: user.name,
            login: user.login,
            cpf: user.cpf,
            birthDate: user.birthDate,
            ctps: user.ctps,
            register: user.register,
            sex: user.sex,
            encryptedPassword: user.encryptedPassword,
            authToken: null,//user.authToken,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
            isActive: user.isActive,
            isSuperAdmin: user.isSuperAdmin,
            
            clockIns: user.clockIns && this.clockInFactory
                // @ts-ignore: Object is possibly 'null'.
                ? user.clockIns.map((clockIn) => this.clockInFactory.generateFactoryObject(
                    clockIn
                ))
                : undefined,
        }
    }
}
