import { UserPrismaFactory } from "@/modules/users/factories/implementations/UserPrismaFactory";

import { ClockInPrismaFactory } from "../../factories/implementations/ClockInPrismaFactory";
import { ClockInPrismaRepository } from "../../repositories/implementations/ClockInPrismaRepository";
import { ListClockInsController } from "./ListClockInsController";
import { ListClockInsUseCase } from "./ListClockInsUseCase";

const userPrismaFactory = new UserPrismaFactory();

const clockInFactory = new ClockInPrismaFactory(userPrismaFactory);
const clockInsRepository = new ClockInPrismaRepository(clockInFactory);

const listClockInsUseCase = new ListClockInsUseCase(
    clockInsRepository
);

const listClockInsController = new ListClockInsController(
    listClockInsUseCase,
);

export { listClockInsController };
