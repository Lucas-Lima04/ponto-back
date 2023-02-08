import { IUser } from "@/modules/users/model/IUser";

export interface IClockIn {
    guid: string;
    observation: String;
    date: Date;

    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;

    user?: IUser;
    userGuid: string;
}
