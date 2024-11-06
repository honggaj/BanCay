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

import { apiOrderChangeStateOrderPost$Json } from '../fn/order/api-order-change-state-order-post-json';
import { ApiOrderChangeStateOrderPost$Json$Params } from '../fn/order/api-order-change-state-order-post-json';
import { apiOrderChangeStateOrderPost$Plain } from '../fn/order/api-order-change-state-order-post-plain';
import { ApiOrderChangeStateOrderPost$Plain$Params } from '../fn/order/api-order-change-state-order-post-plain';
import { apiOrderCreatePost$Json } from '../fn/order/api-order-create-post-json';
import { ApiOrderCreatePost$Json$Params } from '../fn/order/api-order-create-post-json';
import { apiOrderCreatePost$Plain } from '../fn/order/api-order-create-post-plain';
import { ApiOrderCreatePost$Plain$Params } from '../fn/order/api-order-create-post-plain';
import { apiOrderGetOrderByIdGet$Json } from '../fn/order/api-order-get-order-by-id-get-json';
import { ApiOrderGetOrderByIdGet$Json$Params } from '../fn/order/api-order-get-order-by-id-get-json';
import { apiOrderGetOrderByIdGet$Plain } from '../fn/order/api-order-get-order-by-id-get-plain';
import { ApiOrderGetOrderByIdGet$Plain$Params } from '../fn/order/api-order-get-order-by-id-get-plain';
import { apiOrderGetRevenueLast7DaysGet } from '../fn/order/api-order-get-revenue-last-7-days-get';
import { ApiOrderGetRevenueLast7DaysGet$Params } from '../fn/order/api-order-get-revenue-last-7-days-get';
import { apiOrderListDetailOrderGet$Json } from '../fn/order/api-order-list-detail-order-get-json';
import { ApiOrderListDetailOrderGet$Json$Params } from '../fn/order/api-order-list-detail-order-get-json';
import { apiOrderListDetailOrderGet$Plain } from '../fn/order/api-order-list-detail-order-get-plain';
import { ApiOrderListDetailOrderGet$Plain$Params } from '../fn/order/api-order-list-detail-order-get-plain';
import { apiOrderListOrderGet$Json } from '../fn/order/api-order-list-order-get-json';
import { ApiOrderListOrderGet$Json$Params } from '../fn/order/api-order-list-order-get-json';
import { apiOrderListOrderGet$Plain } from '../fn/order/api-order-list-order-get-plain';
import { ApiOrderListOrderGet$Plain$Params } from '../fn/order/api-order-list-order-get-plain';
import { BooleanResultCustomModel } from '../models/boolean-result-custom-model';
import { DetailOrderReponseResultCustomModel } from '../models/detail-order-reponse-result-custom-model';
import { GetListOrderSpResultListResultCustomModel } from '../models/get-list-order-sp-result-list-result-custom-model';
import { OrderReponseResultCustomModel } from '../models/order-reponse-result-custom-model';

@Injectable({ providedIn: 'root' })
export class OrderService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiOrderCreatePost()` */
  static readonly ApiOrderCreatePostPath = '/api/Order/Create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderCreatePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderCreatePost$Plain$Response(params?: ApiOrderCreatePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanResultCustomModel>> {
    return apiOrderCreatePost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderCreatePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderCreatePost$Plain(params?: ApiOrderCreatePost$Plain$Params, context?: HttpContext): Observable<BooleanResultCustomModel> {
    return this.apiOrderCreatePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>): BooleanResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderCreatePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderCreatePost$Json$Response(params?: ApiOrderCreatePost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanResultCustomModel>> {
    return apiOrderCreatePost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderCreatePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderCreatePost$Json(params?: ApiOrderCreatePost$Json$Params, context?: HttpContext): Observable<BooleanResultCustomModel> {
    return this.apiOrderCreatePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>): BooleanResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiOrderListOrderGet()` */
  static readonly ApiOrderListOrderGetPath = '/api/Order/ListOrder';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderListOrderGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderListOrderGet$Plain$Response(params?: ApiOrderListOrderGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetListOrderSpResultListResultCustomModel>> {
    return apiOrderListOrderGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderListOrderGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderListOrderGet$Plain(params?: ApiOrderListOrderGet$Plain$Params, context?: HttpContext): Observable<GetListOrderSpResultListResultCustomModel> {
    return this.apiOrderListOrderGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetListOrderSpResultListResultCustomModel>): GetListOrderSpResultListResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderListOrderGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderListOrderGet$Json$Response(params?: ApiOrderListOrderGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<GetListOrderSpResultListResultCustomModel>> {
    return apiOrderListOrderGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderListOrderGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderListOrderGet$Json(params?: ApiOrderListOrderGet$Json$Params, context?: HttpContext): Observable<GetListOrderSpResultListResultCustomModel> {
    return this.apiOrderListOrderGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetListOrderSpResultListResultCustomModel>): GetListOrderSpResultListResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiOrderListDetailOrderGet()` */
  static readonly ApiOrderListDetailOrderGetPath = '/api/Order/ListDetailOrder';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderListDetailOrderGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderListDetailOrderGet$Plain$Response(params?: ApiOrderListDetailOrderGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<DetailOrderReponseResultCustomModel>> {
    return apiOrderListDetailOrderGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderListDetailOrderGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderListDetailOrderGet$Plain(params?: ApiOrderListDetailOrderGet$Plain$Params, context?: HttpContext): Observable<DetailOrderReponseResultCustomModel> {
    return this.apiOrderListDetailOrderGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<DetailOrderReponseResultCustomModel>): DetailOrderReponseResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderListDetailOrderGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderListDetailOrderGet$Json$Response(params?: ApiOrderListDetailOrderGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<DetailOrderReponseResultCustomModel>> {
    return apiOrderListDetailOrderGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderListDetailOrderGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderListDetailOrderGet$Json(params?: ApiOrderListDetailOrderGet$Json$Params, context?: HttpContext): Observable<DetailOrderReponseResultCustomModel> {
    return this.apiOrderListDetailOrderGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<DetailOrderReponseResultCustomModel>): DetailOrderReponseResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiOrderGetOrderByIdGet()` */
  static readonly ApiOrderGetOrderByIdGetPath = '/api/Order/GetOrderById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderGetOrderByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderGetOrderByIdGet$Plain$Response(params?: ApiOrderGetOrderByIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<OrderReponseResultCustomModel>> {
    return apiOrderGetOrderByIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderGetOrderByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderGetOrderByIdGet$Plain(params?: ApiOrderGetOrderByIdGet$Plain$Params, context?: HttpContext): Observable<OrderReponseResultCustomModel> {
    return this.apiOrderGetOrderByIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrderReponseResultCustomModel>): OrderReponseResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderGetOrderByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderGetOrderByIdGet$Json$Response(params?: ApiOrderGetOrderByIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<OrderReponseResultCustomModel>> {
    return apiOrderGetOrderByIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderGetOrderByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderGetOrderByIdGet$Json(params?: ApiOrderGetOrderByIdGet$Json$Params, context?: HttpContext): Observable<OrderReponseResultCustomModel> {
    return this.apiOrderGetOrderByIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrderReponseResultCustomModel>): OrderReponseResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiOrderChangeStateOrderPost()` */
  static readonly ApiOrderChangeStateOrderPostPath = '/api/Order/ChangeStateOrder';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderChangeStateOrderPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderChangeStateOrderPost$Plain$Response(params?: ApiOrderChangeStateOrderPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanResultCustomModel>> {
    return apiOrderChangeStateOrderPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderChangeStateOrderPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderChangeStateOrderPost$Plain(params?: ApiOrderChangeStateOrderPost$Plain$Params, context?: HttpContext): Observable<BooleanResultCustomModel> {
    return this.apiOrderChangeStateOrderPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>): BooleanResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderChangeStateOrderPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderChangeStateOrderPost$Json$Response(params?: ApiOrderChangeStateOrderPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanResultCustomModel>> {
    return apiOrderChangeStateOrderPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderChangeStateOrderPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderChangeStateOrderPost$Json(params?: ApiOrderChangeStateOrderPost$Json$Params, context?: HttpContext): Observable<BooleanResultCustomModel> {
    return this.apiOrderChangeStateOrderPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>): BooleanResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiOrderGetRevenueLast7DaysGet()` */
  static readonly ApiOrderGetRevenueLast7DaysGetPath = '/api/Order/GetRevenueLast7Days';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderGetRevenueLast7DaysGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderGetRevenueLast7DaysGet$Response(params?: ApiOrderGetRevenueLast7DaysGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiOrderGetRevenueLast7DaysGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderGetRevenueLast7DaysGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderGetRevenueLast7DaysGet(params?: ApiOrderGetRevenueLast7DaysGet$Params, context?: HttpContext): Observable<void> {
    return this.apiOrderGetRevenueLast7DaysGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
