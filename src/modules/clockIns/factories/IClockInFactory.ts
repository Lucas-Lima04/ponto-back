import { IClockIn } from "../model/IClockIn";

export interface IClockInFactory<ORM_ENTITY> {
    generateFactoryObject(clockIn: ORM_ENTITY): IClockIn;
}
