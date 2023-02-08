import { IClockIn } from "../../model/IClockIn"
import { IClockInRepository } from "../../repositories/IClockInRepository"

export class ListClockInsUseCase {
  constructor (
    private readonly ClockInRepository: IClockInRepository,
  ) {}

  async execute({ userGuid }) {
    const clockIns = await this.ClockInRepository.listClockIns(userGuid)

    return clockIns
  }
}