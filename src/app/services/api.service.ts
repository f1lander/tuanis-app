import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  profile(_profile: string = 'lester') {
    return this.httpClient
      .get(`${environment.apiURL}/accounts/profile/${_profile}/`)
      .toPromise();
  }

  properties() {
    const params: any = {
      filter__listing_category_id: 2,
      lat: 34.066888,
      lon: -118.300592,
      limit: 200,
      min__list_price: 0,
      page: 1,
      sort: 'featured'
    };
    return this.httpClient
      .get(`${environment.apiURL}/listings/serp/search`, { params })
      .toPromise();
  }

  articles() {
    const params: any = {
      limit: 10,
      'must__author.id': 7869,
      page: 1,
      sort: 'last_updated_date__desc'

    };
    return this.httpClient
      .get(`${environment.apiURL}/tips/serp/search`, { params })
      .toPromise();
  }
}
