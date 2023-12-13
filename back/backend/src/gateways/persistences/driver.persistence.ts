import { DriverContract } from 'src/domains/contracts/drivers.contract';
import { FormulaOneService } from '../clients/formulaOneApi/formulaOne.service';

export class DriverPersistence implements DriverContract {
  constructor(private readonly formulaOneService: FormulaOneService) {}

  getDriversByYear(year: string) {
    console.log(this.formulaOneService.getDriversByYear(year));
  }
}
