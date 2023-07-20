import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../services/base-service';
import { ApiConfiguration } from '../services/api-configuration';
import { StrictHttpResponse } from '../services/strict-http-response';
import { RequestBuilder } from '../services/request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { User } from '../models/user.model';

/**
 * Login Controller
 */
@Injectable({
  providedIn: 'root',
})
export class LoginControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
    config.rootUrl = 'http://localhost:8080'; // Imposta l'URL con la porta corretta
  }

  /**
   * Path part for operation loginUserUsingPost
   */
  static readonly LoginUserUsingPostPath = '/api/login';

  /**
   * loginUser.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loginUserUsingPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  loginUserUsingPost$Response(params: {
    /**
     * user
     */
    user: User;
  }, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, LoginControllerService.LoginUserUsingPostPath, 'post');
    if (params) {
      rb.body(params.user, undefined);
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
   * loginUser.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), use `loginUserUsingPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  loginUserUsingPost(params: {
    /**
     * user
     */
    user: User;
  }, context?: HttpContext): Observable<void> {
    return this.loginUserUsingPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }
}
