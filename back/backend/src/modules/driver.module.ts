import { DriversController } from 'src/gateways/controllers/formulaOneController/driver.controller';
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { DriverPersistence } from 'src/gateways/persistences/driver.persistence';
import { DriverUseCase } from 'src/domains/usecase/driver.usecase';
import { FormulaOneService } from 'src/gateways/clients/formulaOneApi/formulaOne.service';

@Module({
  imports: [HttpModule],
  providers: [DriverUseCase, DriverPersistence, FormulaOneService],
  controllers: [DriversController],
})
export class DriverModule {}
