import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  profile() {
    return this.httpClient
      .get(`${environment.apiURL}/profiles`)
      .pipe(
        map((_item: any) => {
          const item = _item[0];
          return {
            full_name: item.full_name,
            avatar: item.avatar,
            area_served: item.area_served,
            company_name: item.company_name,
            facebook_url: item.facebook_url,
            linkedin_url: item.linkedin_url,
            twitter_url: item.twitter_url,
            website_url: item.website_url,
            email: item.email
          };
        })
      )
      .toPromise();
  }

  properties() {

    return this.httpClient
    .get(`${environment.apiURL}/properties`)
    .pipe(
      map((item: any) => item[0].hits.hits)
    );
  }

  articles() {

    return this.httpClient
      .get(`${environment.apiURL}/articles`)
      .pipe(
        map((item: any) => item[0].hits.hits)
      )
      .toPromise();
  }
}
