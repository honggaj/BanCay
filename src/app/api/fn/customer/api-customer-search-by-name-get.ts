/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ApiCustomerSearchByNameGet$Params {
  name?: string;
}

export function apiCustomerSearchByNameGet(http: HttpClient, rootUrl: string, params?: ApiCustomerSearchByNameGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiCustomerSearchByNameGet.PATH, 'get');
  if (params) {
    rb.query('name', params.name, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

apiCustomerSearchByNameGet.PATH = '/api/Customer/SearchByName';
