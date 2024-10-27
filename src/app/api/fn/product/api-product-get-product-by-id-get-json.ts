/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProductResponseResultCustomModel } from '../../models/product-response-result-custom-model';

export interface ApiProductGetProductByIdGet$Json$Params {
  productId?: number;
}

export function apiProductGetProductByIdGet$Json(http: HttpClient, rootUrl: string, params?: ApiProductGetProductByIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductResponseResultCustomModel>> {
  const rb = new RequestBuilder(rootUrl, apiProductGetProductByIdGet$Json.PATH, 'get');
  if (params) {
    rb.query('productId', params.productId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ProductResponseResultCustomModel>;
    })
  );
}

apiProductGetProductByIdGet$Json.PATH = '/api/Product/GetProductById';
