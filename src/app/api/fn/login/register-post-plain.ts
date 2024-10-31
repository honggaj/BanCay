/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RegisterRequest } from '../../models/register-request';
import { RegisterResponseResultCustomModel } from '../../models/register-response-result-custom-model';

export interface RegisterPost$Plain$Params {
      body?: RegisterRequest
}

export function registerPost$Plain(http: HttpClient, rootUrl: string, params?: RegisterPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<RegisterResponseResultCustomModel>> {
  const rb = new RequestBuilder(rootUrl, registerPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<RegisterResponseResultCustomModel>;
    })
  );
}

registerPost$Plain.PATH = '/Register';