/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomerResponseResultCustomModel } from '../../models/customer-response-result-custom-model';
import { UpdateCustomerRequest } from '../../models/update-customer-request';

export interface ApiCustomerUpdateCustomerPut$Json$Params {
      body?: UpdateCustomerRequest
}

export function apiCustomerUpdateCustomerPut$Json(http: HttpClient, rootUrl: string, params?: ApiCustomerUpdateCustomerPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomerResponseResultCustomModel>> {
  const rb = new RequestBuilder(rootUrl, apiCustomerUpdateCustomerPut$Json.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CustomerResponseResultCustomModel>;
    })
  );
}

apiCustomerUpdateCustomerPut$Json.PATH = '/api/Customer/UpdateCustomer';
