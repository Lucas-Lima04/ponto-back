import { IClockIn } from "../../model/IClockIn"
import { IClockInRepository } from "../../repositories/IClockInRepository"

export class ListClockInsUseCase {
  constructor (
    private readonly ClockInRepository: IClockInRepository,
  ) {}

  async execute({ userGuid, startDate, endDate }) {
    const clockIns = await this.ClockInRepository.listClockIns({userGuid, startDate, endDate})

    return clockIns
  }
}