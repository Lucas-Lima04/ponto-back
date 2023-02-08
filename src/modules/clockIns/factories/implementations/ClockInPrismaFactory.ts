import { IPrismaUserFactory } from "@/modules/users/factories/implementations/UserPrismaFactory";
import { IUserFactory } from "@/modules/users/factories/IUserFactory";
import { 
    ClockIn as PClockIn,
    User as PUser
} from "@prisma/client";

import { IClockIn } from "../../model/IClockIn";
import { IClockInFactory } from "../IClockInFactory";

export interface IPrismaClockInFactory extends PClockIn {
    user?: PUser | null;
}

export class ClockInPrismaFactory implements IClockInFactory<IPrismaClockInFactory> {
    constructor(
        private readonly userFactory?: IUserFactory<IPrismaUserFactory>,
    ) {}
    generateFactoryObject(clockIn: IPrismaClockInFactory): IClockIn {
        return {      
            guid: clockIn.guid,
            observation: clockIn.observation,
            date: clockIn.date,

            createdAt: clockIn.createdAt,
            updatedAt: clockIn.updatedAt,
            isActive: clockIn.isActive,

            user: clockIn.user || undefined,
            userGuid: clockIn.userGuid,
        }
    }
}
