import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export abstract class BaseRepository {
  protected apiBaseUrl: string;

  protected constructor(protected httpClient: HttpClient) {
    this.apiBaseUrl = `https://dealeradvance-api-prod.azurewebsites.net`;
  }
}
