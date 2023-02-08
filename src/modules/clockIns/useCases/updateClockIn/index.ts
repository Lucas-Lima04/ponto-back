import { UserPrismaFactory } from "@/modules/users/factories/implementations/UserPrismaFactory";

import { ClockInPrismaFactory } from "../../factories/implementations/ClockInPrismaFactory";
import { ClockInPrismaRepository } from "../../repositories/implementations/ClockInPrismaRepository";
import { UpdateClockInController } from "./UpdateClockInController";
import { UpdateClockInUseCase } from "./UpdateClockInUseCase";

const userPrismaFactory = new UserPrismaFactory();

const clockInFactory = new ClockInPrismaFactory(userPrismaFactory);
const clockInsRepository = new ClockInPrismaRepository(clockInFactory);

const updateClockInUseCase = new UpdateClockInUseCase(
    clockInsRepository
);

const updateClockInController = new UpdateClockInController(
    updateClockInUseCase,
);

export { updateClockInController };
