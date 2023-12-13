import { Injectable } from '@nestjs/common';
import { DriverContract } from '../contracts/drivers.contract';
import { CriteriaDriver } from '../models/criteriaDriver.model';

@Injectable()
export class DriverUseCase {
  constructor(private readonly driverContract: DriverContract) {}
  getDrivers(criteriaDriver: CriteriaDriver) {
    let result = [];
    if (criteriaDriver.year != null) {
      result = this.driverContract.getDriversByYear(criteriaDriver.year);
    }
    return result;
  }
}
