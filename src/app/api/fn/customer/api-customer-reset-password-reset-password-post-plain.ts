/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StringResultCustomModel } from '../../models/string-result-custom-model';

export interface ApiCustomerResetPasswordResetPasswordPost$Plain$Params {
  otp?: string;
  newPassword?: string;
}

export function apiCustomerResetPasswordResetPasswordPost$Plain(http: HttpClient, rootUrl: string, params?: ApiCustomerResetPasswordResetPasswordPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringResultCustomModel>> {
  const rb = new RequestBuilder(rootUrl, apiCustomerResetPasswordResetPasswordPost$Plain.PATH, 'post');
  if (params) {
    rb.query('otp', params.otp, {});
    rb.query('newPassword', params.newPassword, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<StringResultCustomModel>;
    })
  );
}

apiCustomerResetPasswordResetPasswordPost$Plain.PATH = '/api/Customer/ResetPassword/ResetPassword';
