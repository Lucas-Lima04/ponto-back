import { IUser } from "@/modules/users/model/IUser";
export {};

declare global {
  namespace Express {
    interface Request {
      user: IUser;
    }
  }
}