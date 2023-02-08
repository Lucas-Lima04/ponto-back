import { IUseCase } from "@/shared/protocols/IUseCase";

import { IClockIn } from "../../model/IClockIn";
import { IClockInRepository } from "../../repositories/IClockInRepository";

interface IRequest {
    userGuid: string;
    observation: string;
}

class CreateClockInUseCase implements IUseCase<IRequest, IClockIn> {
    constructor(
        private ClockInsRepository: IClockInRepository,
    ) { }

    async execute({
        observation,
        userGuid,
    }: IRequest): Promise<IClockIn> {
        const clockIn = await this.ClockInsRepository.createClockIn({
            date: new Date(),
            observation,
            userGuid,
        });

        return clockIn;
    }
}

export { CreateClockInUseCase };
