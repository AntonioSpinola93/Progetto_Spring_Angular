/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';



/**
 * Swagger Controller
 */
@Injectable({
  providedIn: 'root',
})
export class SwaggerControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation swaggerUiUsingGet
   */
  static readonly SwaggerUiUsingGetPath = '/swagger-ui';

  /**
   * swaggerUi.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `swaggerUiUsingGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  swaggerUiUsingGet$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SwaggerControllerService.SwaggerUiUsingGetPath, 'get');
    if (params) {
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
   * swaggerUi.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `swaggerUiUsingGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  swaggerUiUsingGet(params?: {
  },
  context?: HttpContext

): Observable<void> {

    return this.swaggerUiUsingGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
