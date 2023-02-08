import { IClockIn } from "@/modules/clockIns/model/IClockIn";

export interface IUser {
    guid: string;
    name: string
    login: string;
    cpf: string;
    birthDate: string;
    sex: string;
    ctps: string;
    register: string;

    encryptedPassword: string | null;
    
    authToken: string | null;
    
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
    isSuperAdmin: boolean;

    clockIns?: IClockIn[]
}
