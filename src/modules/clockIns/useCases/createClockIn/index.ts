import { UserPrismaFactory } from "@/modules/users/factories/implementations/UserPrismaFactory";

import { ClockInPrismaFactory } from "../../factories/implementations/ClockInPrismaFactory";
import { ClockInPrismaRepository } from "../../repositories/implementations/ClockInPrismaRepository";
import { CreateClockInController } from "./CreateClockInController";
import { CreateClockInUseCase } from "./CreateClockInUseCase";

const userPrismaFactory = new UserPrismaFactory();

const clockInFactory = new ClockInPrismaFactory(userPrismaFactory);
const clockInsRepository = new ClockInPrismaRepository(clockInFactory);

const createClockInUseCase = new CreateClockInUseCase(
    clockInsRepository
);

const createClockInController = new CreateClockInController(
    createClockInUseCase,
);

export { createClockInController };
