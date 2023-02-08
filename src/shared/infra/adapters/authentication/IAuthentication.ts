import { IUser } from "@/modules/users/model/IUser";

export interface IAuthentication {
    generateToken(agent: IUser): string;
    decodeToken(token: string): { guid: string; role: string };
}
