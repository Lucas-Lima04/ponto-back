/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/naming-convention */
import { IUser } from "../../../modules/users/model/IUser";

declare module "express-serve-static-core" {
    interface Request {
        user?: IUser;
        role?: "user" | "admin" | "superAdmin";
    }
}
