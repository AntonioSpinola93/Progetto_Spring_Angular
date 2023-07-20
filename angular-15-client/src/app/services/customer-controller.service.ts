/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '..//services/base-service';
import { ApiConfiguration } from '..//services/api-configuration';
import { StrictHttpResponse } from '..//services/strict-http-response';
import { RequestBuilder } from '..//services/request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CustomerDto } from '../models/customer-dto';


/**
 * Customer Controller
 */
@Injectable({
  providedIn: 'root',
})
export class CustomerControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation createCustomerUsingPost
   */
  static readonly CreateCustomerUsingPostPath = '/customers';

  /**
   * createCustomer.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createCustomerUsingPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  createCustomerUsingPost$Response(params: {

    /**
     * dto
     */
    dto: CustomerDto;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerControllerService.CreateCustomerUsingPostPath, 'post');
    if (params) {
      rb.body('dto', params.dto, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * createCustomer.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createCustomerUsingPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  createCustomerUsingPost(params: {

    /**
     * dto
     */
    dto: CustomerDto;
  },
  context?: HttpContext

): Observable<void> {

    return this.createCustomerUsingPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getCustomerUsingGet
   */
  static readonly GetCustomerUsingGetPath = '/customers/{id}';

  /**
   * getCustomer.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCustomerUsingGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCustomerUsingGet$Response(params: {

    /**
     * id
     */
    id: any;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerControllerService.GetCustomerUsingGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * getCustomer.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCustomerUsingGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCustomerUsingGet(params: {

    /**
     * id
     */
    id: any;
  },
  context?: HttpContext

): Observable<void> {

    return this.getCustomerUsingGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
