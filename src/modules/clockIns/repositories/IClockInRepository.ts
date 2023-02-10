import { IUser } from "@/modules/users/model/IUser";
import { Decimal } from "@prisma/client/runtime";
import internal from "stream";
import { IClockIn } from "../model/IClockIn";

interface ICreateClockInDTO {
    observation: string;
    userGuid: string;
    date: Date;
}

interface IUpdateClockInDTO {
    guid: string;
    isActive?: boolean;
    observation?: string;
    date?: Date;
}

interface IListClockInDTO {
    userGuid: string;
    startDate?: string;
    endDate?: string;
}

interface IClockInRepository {
    createClockIn(params: ICreateClockInDTO): Promise<IClockIn>;
    updateClockIn(params: IUpdateClockInDTO): Promise<IClockIn | undefined>;
    listClockIns(params: IListClockInDTO): Promise<IClockIn[]>;
}

export {
    ICreateClockInDTO,
    IUpdateClockInDTO,
    IListClockInDTO,
    IClockInRepository
};
