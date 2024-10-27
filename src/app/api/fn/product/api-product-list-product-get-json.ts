/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetListProductSpResultListResultCustomModel } from '../../models/get-list-product-sp-result-list-result-custom-model';

export interface ApiProductListProductGet$Json$Params {
}

export function apiProductListProductGet$Json(http: HttpClient, rootUrl: string, params?: ApiProductListProductGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<GetListProductSpResultListResultCustomModel>> {
  const rb = new RequestBuilder(rootUrl, apiProductListProductGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetListProductSpResultListResultCustomModel>;
    })
  );
}

apiProductListProductGet$Json.PATH = '/api/Product/ListProduct';
