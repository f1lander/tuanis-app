import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/do';

import {catchError} from 'rxjs/operators';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headers = {
            'Content-Type': 'application/json'
        };

        // const token = this.auth.getToken();

        // if (token) {
        //     headers['Authorization'] = `Bearer ${token}`;
        // }

        request = request.clone({
            setHeaders: headers
        });

        return next.handle(request).pipe(
          catchError(response => {
            if (response instanceof HttpErrorResponse) {
              console.log('Processing http error', response);
              if (response.status === 401) {
                // this.auth.logout();
              }
            }
            return Observable.throw(response);
          }));
    }
}
