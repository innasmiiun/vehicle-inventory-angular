import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseRepository } from '../base.repository';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class VehicleRepository extends BaseRepository {
  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  public getItemsList(filters: any): Observable<any> {
    return this.httpClient.get(`${this.apiBaseUrl}/cars/search/?${filters}`).pipe(map(data => data));
  }

  public getVehicleData(id: string): Observable<any> {
    return this.httpClient.get(`${this.apiBaseUrl}/car/${id}`).pipe(map(data => data));
  }

}
