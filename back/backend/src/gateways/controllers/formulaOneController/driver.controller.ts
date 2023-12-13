import { Controller, Get } from '@nestjs/common';
import { CriteriaDriver } from 'src/domains/models/criteriaDriver.model';
import { DriverUseCase } from 'src/domains/usecase/driver.usecase';

@Controller('drivers')
export class DriversController {
  constructor(private readonly driverUseCase: DriverUseCase) {}
  @Get()
  findAll(criteriaDriver: CriteriaDriver): any {
    return this.driverUseCase.getDrivers(criteriaDriver);
  }
}
