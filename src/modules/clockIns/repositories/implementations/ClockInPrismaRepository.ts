//import { context } from "@/shared/infra/database/Context";
import { context } from "../../../../shared/infra/database/Context";
import { PrismaClient } from "@prisma/client";

import { IClockInFactory } from "../../factories/IClockInFactory";
import { IClockIn } from "../../model/IClockIn";
import {
    IClockInRepository,
    ICreateClockInDTO,
    IUpdateClockInDTO
} from "../IClockInRepository";
import { IPrismaClockInFactory } from "../../factories/implementations/ClockInPrismaFactory";

class ClockInPrismaRepository implements IClockInRepository {
    private prismaClient: PrismaClient;

    constructor(
        private readonly clockInFactory: IClockInFactory<IPrismaClockInFactory>
    ) {
        this.prismaClient = context.prisma;
    }
    async createClockIn({
        date,
        observation,
        userGuid
    }: ICreateClockInDTO): Promise<IClockIn> {
        const clockIn = await this.prismaClient.clockIn.create({
            data: {
                date,
                observation,
                userGuid,
                createdAt: new Date(),
                updatedAt: new Date(),
                isActive: true,
            }
        });

        return this.clockInFactory.generateFactoryObject(clockIn);
    }

    async updateClockIn({
        guid,
        date,
        observation,
        isActive
    }: IUpdateClockInDTO): Promise<IClockIn | undefined> {
        const clockIn = await this.prismaClient.clockIn.update({
            where: {
                guid,
            },
            data: {
                date,
                observation,
                updatedAt: new Date(),
                isActive,
            }
        });

        return this.clockInFactory.generateFactoryObject(clockIn);
    }
    async listClockIns(userGuid: string): Promise<IClockIn[]> {
        const clockIns = await this.prismaClient.clockIn.findMany({
            where: {
                userGuid,
            }
        });

        return clockIns.map(clockIn => this.clockInFactory.generateFactoryObject(clockIn));
    }

}
export { ClockInPrismaRepository };
