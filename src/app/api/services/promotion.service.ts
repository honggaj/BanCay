/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiPromotionActivatePromotionPost$Json } from '../fn/promotion/api-promotion-activate-promotion-post-json';
import { ApiPromotionActivatePromotionPost$Json$Params } from '../fn/promotion/api-promotion-activate-promotion-post-json';
import { apiPromotionActivatePromotionPost$Plain } from '../fn/promotion/api-promotion-activate-promotion-post-plain';
import { ApiPromotionActivatePromotionPost$Plain$Params } from '../fn/promotion/api-promotion-activate-promotion-post-plain';
import { apiPromotionChangeActivePost$Json } from '../fn/promotion/api-promotion-change-active-post-json';
import { ApiPromotionChangeActivePost$Json$Params } from '../fn/promotion/api-promotion-change-active-post-json';
import { apiPromotionChangeActivePost$Plain } from '../fn/promotion/api-promotion-change-active-post-plain';
import { ApiPromotionChangeActivePost$Plain$Params } from '../fn/promotion/api-promotion-change-active-post-plain';
import { apiPromotionCheckPromotionCodePost$Json } from '../fn/promotion/api-promotion-check-promotion-code-post-json';
import { ApiPromotionCheckPromotionCodePost$Json$Params } from '../fn/promotion/api-promotion-check-promotion-code-post-json';
import { apiPromotionCheckPromotionCodePost$Plain } from '../fn/promotion/api-promotion-check-promotion-code-post-plain';
import { ApiPromotionCheckPromotionCodePost$Plain$Params } from '../fn/promotion/api-promotion-check-promotion-code-post-plain';
import { apiPromotionCreatePost$Json } from '../fn/promotion/api-promotion-create-post-json';
import { ApiPromotionCreatePost$Json$Params } from '../fn/promotion/api-promotion-create-post-json';
import { apiPromotionCreatePost$Plain } from '../fn/promotion/api-promotion-create-post-plain';
import { ApiPromotionCreatePost$Plain$Params } from '../fn/promotion/api-promotion-create-post-plain';
import { apiPromotionDeactivatePromotionPost } from '../fn/promotion/api-promotion-deactivate-promotion-post';
import { ApiPromotionDeactivatePromotionPost$Params } from '../fn/promotion/api-promotion-deactivate-promotion-post';
import { apiPromotionGetPromotionByCodeGet } from '../fn/promotion/api-promotion-get-promotion-by-code-get';
import { ApiPromotionGetPromotionByCodeGet$Params } from '../fn/promotion/api-promotion-get-promotion-by-code-get';
import { apiPromotionGetPromotionByIdPromotionCodeGet$Json } from '../fn/promotion/api-promotion-get-promotion-by-id-promotion-code-get-json';
import { ApiPromotionGetPromotionByIdPromotionCodeGet$Json$Params } from '../fn/promotion/api-promotion-get-promotion-by-id-promotion-code-get-json';
import { apiPromotionGetPromotionByIdPromotionCodeGet$Plain } from '../fn/promotion/api-promotion-get-promotion-by-id-promotion-code-get-plain';
import { ApiPromotionGetPromotionByIdPromotionCodeGet$Plain$Params } from '../fn/promotion/api-promotion-get-promotion-by-id-promotion-code-get-plain';
import { apiPromotionListPromotionGet$Json } from '../fn/promotion/api-promotion-list-promotion-get-json';
import { ApiPromotionListPromotionGet$Json$Params } from '../fn/promotion/api-promotion-list-promotion-get-json';
import { apiPromotionListPromotionGet$Plain } from '../fn/promotion/api-promotion-list-promotion-get-plain';
import { ApiPromotionListPromotionGet$Plain$Params } from '../fn/promotion/api-promotion-list-promotion-get-plain';
import { apiPromotionUpdatePromotionPut$Json } from '../fn/promotion/api-promotion-update-promotion-put-json';
import { ApiPromotionUpdatePromotionPut$Json$Params } from '../fn/promotion/api-promotion-update-promotion-put-json';
import { apiPromotionUpdatePromotionPut$Plain } from '../fn/promotion/api-promotion-update-promotion-put-plain';
import { ApiPromotionUpdatePromotionPut$Plain$Params } from '../fn/promotion/api-promotion-update-promotion-put-plain';
import { BooleanResultCustomModel } from '../models/boolean-result-custom-model';
import { PromotionResponseListResultCustomModel } from '../models/promotion-response-list-result-custom-model';
import { PromotionResponseResultCustomModel } from '../models/promotion-response-result-custom-model';
import { StringResultCustomModel } from '../models/string-result-custom-model';

@Injectable({ providedIn: 'root' })
export class PromotionService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiPromotionListPromotionGet()` */
  static readonly ApiPromotionListPromotionGetPath = '/api/Promotion/ListPromotion';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPromotionListPromotionGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPromotionListPromotionGet$Plain$Response(params?: ApiPromotionListPromotionGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PromotionResponseListResultCustomModel>> {
    return apiPromotionListPromotionGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPromotionListPromotionGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPromotionListPromotionGet$Plain(params?: ApiPromotionListPromotionGet$Plain$Params, context?: HttpContext): Observable<PromotionResponseListResultCustomModel> {
    return this.apiPromotionListPromotionGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PromotionResponseListResultCustomModel>): PromotionResponseListResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPromotionListPromotionGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPromotionListPromotionGet$Json$Response(params?: ApiPromotionListPromotionGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PromotionResponseListResultCustomModel>> {
    return apiPromotionListPromotionGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPromotionListPromotionGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPromotionListPromotionGet$Json(params?: ApiPromotionListPromotionGet$Json$Params, context?: HttpContext): Observable<PromotionResponseListResultCustomModel> {
    return this.apiPromotionListPromotionGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PromotionResponseListResultCustomModel>): PromotionResponseListResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiPromotionGetPromotionByIdPromotionCodeGet()` */
  static readonly ApiPromotionGetPromotionByIdPromotionCodeGetPath = '/api/Promotion/GetPromotionById/{promotionCode}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPromotionGetPromotionByIdPromotionCodeGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPromotionGetPromotionByIdPromotionCodeGet$Plain$Response(params: ApiPromotionGetPromotionByIdPromotionCodeGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PromotionResponseResultCustomModel>> {
    return apiPromotionGetPromotionByIdPromotionCodeGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPromotionGetPromotionByIdPromotionCodeGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPromotionGetPromotionByIdPromotionCodeGet$Plain(params: ApiPromotionGetPromotionByIdPromotionCodeGet$Plain$Params, context?: HttpContext): Observable<PromotionResponseResultCustomModel> {
    return this.apiPromotionGetPromotionByIdPromotionCodeGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PromotionResponseResultCustomModel>): PromotionResponseResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPromotionGetPromotionByIdPromotionCodeGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPromotionGetPromotionByIdPromotionCodeGet$Json$Response(params: ApiPromotionGetPromotionByIdPromotionCodeGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PromotionResponseResultCustomModel>> {
    return apiPromotionGetPromotionByIdPromotionCodeGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPromotionGetPromotionByIdPromotionCodeGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPromotionGetPromotionByIdPromotionCodeGet$Json(params: ApiPromotionGetPromotionByIdPromotionCodeGet$Json$Params, context?: HttpContext): Observable<PromotionResponseResultCustomModel> {
    return this.apiPromotionGetPromotionByIdPromotionCodeGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PromotionResponseResultCustomModel>): PromotionResponseResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiPromotionGetPromotionByCodeGet()` */
  static readonly ApiPromotionGetPromotionByCodeGetPath = '/api/Promotion/GetPromotionByCode';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPromotionGetPromotionByCodeGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPromotionGetPromotionByCodeGet$Response(params?: ApiPromotionGetPromotionByCodeGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiPromotionGetPromotionByCodeGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPromotionGetPromotionByCodeGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPromotionGetPromotionByCodeGet(params?: ApiPromotionGetPromotionByCodeGet$Params, context?: HttpContext): Observable<void> {
    return this.apiPromotionGetPromotionByCodeGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiPromotionCheckPromotionCodePost()` */
  static readonly ApiPromotionCheckPromotionCodePostPath = '/api/Promotion/CheckPromotionCode';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPromotionCheckPromotionCodePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPromotionCheckPromotionCodePost$Plain$Response(params?: ApiPromotionCheckPromotionCodePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PromotionResponseResultCustomModel>> {
    return apiPromotionCheckPromotionCodePost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPromotionCheckPromotionCodePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPromotionCheckPromotionCodePost$Plain(params?: ApiPromotionCheckPromotionCodePost$Plain$Params, context?: HttpContext): Observable<PromotionResponseResultCustomModel> {
    return this.apiPromotionCheckPromotionCodePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PromotionResponseResultCustomModel>): PromotionResponseResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPromotionCheckPromotionCodePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPromotionCheckPromotionCodePost$Json$Response(params?: ApiPromotionCheckPromotionCodePost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PromotionResponseResultCustomModel>> {
    return apiPromotionCheckPromotionCodePost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPromotionCheckPromotionCodePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPromotionCheckPromotionCodePost$Json(params?: ApiPromotionCheckPromotionCodePost$Json$Params, context?: HttpContext): Observable<PromotionResponseResultCustomModel> {
    return this.apiPromotionCheckPromotionCodePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PromotionResponseResultCustomModel>): PromotionResponseResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiPromotionCreatePost()` */
  static readonly ApiPromotionCreatePostPath = '/api/Promotion/Create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPromotionCreatePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPromotionCreatePost$Plain$Response(params?: ApiPromotionCreatePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanResultCustomModel>> {
    return apiPromotionCreatePost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPromotionCreatePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPromotionCreatePost$Plain(params?: ApiPromotionCreatePost$Plain$Params, context?: HttpContext): Observable<BooleanResultCustomModel> {
    return this.apiPromotionCreatePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>): BooleanResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPromotionCreatePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPromotionCreatePost$Json$Response(params?: ApiPromotionCreatePost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanResultCustomModel>> {
    return apiPromotionCreatePost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPromotionCreatePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPromotionCreatePost$Json(params?: ApiPromotionCreatePost$Json$Params, context?: HttpContext): Observable<BooleanResultCustomModel> {
    return this.apiPromotionCreatePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>): BooleanResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiPromotionDeactivatePromotionPost()` */
  static readonly ApiPromotionDeactivatePromotionPostPath = '/api/Promotion/DeactivatePromotion';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPromotionDeactivatePromotionPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPromotionDeactivatePromotionPost$Response(params?: ApiPromotionDeactivatePromotionPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiPromotionDeactivatePromotionPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPromotionDeactivatePromotionPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPromotionDeactivatePromotionPost(params?: ApiPromotionDeactivatePromotionPost$Params, context?: HttpContext): Observable<void> {
    return this.apiPromotionDeactivatePromotionPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiPromotionActivatePromotionPost()` */
  static readonly ApiPromotionActivatePromotionPostPath = '/api/Promotion/ActivatePromotion';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPromotionActivatePromotionPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPromotionActivatePromotionPost$Plain$Response(params?: ApiPromotionActivatePromotionPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringResultCustomModel>> {
    return apiPromotionActivatePromotionPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPromotionActivatePromotionPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPromotionActivatePromotionPost$Plain(params?: ApiPromotionActivatePromotionPost$Plain$Params, context?: HttpContext): Observable<StringResultCustomModel> {
    return this.apiPromotionActivatePromotionPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringResultCustomModel>): StringResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPromotionActivatePromotionPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPromotionActivatePromotionPost$Json$Response(params?: ApiPromotionActivatePromotionPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringResultCustomModel>> {
    return apiPromotionActivatePromotionPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPromotionActivatePromotionPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPromotionActivatePromotionPost$Json(params?: ApiPromotionActivatePromotionPost$Json$Params, context?: HttpContext): Observable<StringResultCustomModel> {
    return this.apiPromotionActivatePromotionPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringResultCustomModel>): StringResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiPromotionChangeActivePost()` */
  static readonly ApiPromotionChangeActivePostPath = '/api/Promotion/ChangeActive';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPromotionChangeActivePost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPromotionChangeActivePost$Plain$Response(params?: ApiPromotionChangeActivePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanResultCustomModel>> {
    return apiPromotionChangeActivePost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPromotionChangeActivePost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPromotionChangeActivePost$Plain(params?: ApiPromotionChangeActivePost$Plain$Params, context?: HttpContext): Observable<BooleanResultCustomModel> {
    return this.apiPromotionChangeActivePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>): BooleanResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPromotionChangeActivePost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPromotionChangeActivePost$Json$Response(params?: ApiPromotionChangeActivePost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanResultCustomModel>> {
    return apiPromotionChangeActivePost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPromotionChangeActivePost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPromotionChangeActivePost$Json(params?: ApiPromotionChangeActivePost$Json$Params, context?: HttpContext): Observable<BooleanResultCustomModel> {
    return this.apiPromotionChangeActivePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>): BooleanResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiPromotionUpdatePromotionPut()` */
  static readonly ApiPromotionUpdatePromotionPutPath = '/api/Promotion/UpdatePromotion';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPromotionUpdatePromotionPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPromotionUpdatePromotionPut$Plain$Response(params?: ApiPromotionUpdatePromotionPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PromotionResponseResultCustomModel>> {
    return apiPromotionUpdatePromotionPut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPromotionUpdatePromotionPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPromotionUpdatePromotionPut$Plain(params?: ApiPromotionUpdatePromotionPut$Plain$Params, context?: HttpContext): Observable<PromotionResponseResultCustomModel> {
    return this.apiPromotionUpdatePromotionPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PromotionResponseResultCustomModel>): PromotionResponseResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPromotionUpdatePromotionPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPromotionUpdatePromotionPut$Json$Response(params?: ApiPromotionUpdatePromotionPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PromotionResponseResultCustomModel>> {
    return apiPromotionUpdatePromotionPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPromotionUpdatePromotionPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPromotionUpdatePromotionPut$Json(params?: ApiPromotionUpdatePromotionPut$Json$Params, context?: HttpContext): Observable<PromotionResponseResultCustomModel> {
    return this.apiPromotionUpdatePromotionPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PromotionResponseResultCustomModel>): PromotionResponseResultCustomModel => r.body)
    );
  }

}
