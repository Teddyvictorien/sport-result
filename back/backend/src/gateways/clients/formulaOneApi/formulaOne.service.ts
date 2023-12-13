import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';

export class FormulaOneService {
  private url = 'http://ergast.com/api/f1/';

  constructor(private readonly httpService: HttpService) {}

  getDriversByYear(year: string): Observable<any> {
    return this.httpService.get(this.url + year);
  }
}
