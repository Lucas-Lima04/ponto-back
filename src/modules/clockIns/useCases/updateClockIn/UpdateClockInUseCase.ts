import { IUseCase } from "@/shared/protocols/IUseCase";

import { IClockIn } from "../../model/IClockIn";
import { IClockInRepository } from "../../repositories/IClockInRepository";

interface IRequest {
    guid: string;
    isActive?: boolean;
    observation?: string;
}

class UpdateClockInUseCase implements IUseCase<IRequest, IClockIn | undefined> {
    constructor(
        private ClockInsRepository: IClockInRepository,
    ) { }

    async execute({
        guid,
        observation,
        isActive
    }: IRequest): Promise<IClockIn | undefined> {
        const clockIn = await this.ClockInsRepository.updateClockIn({
            guid, 
            isActive,
            observation,
        });

        return clockIn;
    }
}

export { UpdateClockInUseCase };
