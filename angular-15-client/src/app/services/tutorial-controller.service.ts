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

import { Tutorial } from '../models/tutorial';


/**
 * Tutorial Controller
 */
@Injectable({
  providedIn: 'root',
})
export class TutorialControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllTutorialsUsingGet
   */
  static readonly GetAllTutorialsUsingGetPath = '/api/tutorials';

  /**
   * getAllTutorials.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllTutorialsUsingGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTutorialsUsingGet$Response(params?: {

    /**
     * title
     */
    title?: any;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TutorialControllerService.GetAllTutorialsUsingGetPath, 'get');
    if (params) {
      rb.query('title', params.title, {});
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
   * getAllTutorials.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllTutorialsUsingGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTutorialsUsingGet(params?: {

    /**
     * title
     */
    title?: any;
  },
  context?: HttpContext

): Observable<void> {

    return this.getAllTutorialsUsingGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation createTutorialUsingPost
   */
  static readonly CreateTutorialUsingPostPath = '/api/tutorials';

  /**
   * createTutorial.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createTutorialUsingPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  createTutorialUsingPost$Response(params: {

    /**
     * tutorial
     */
    tutorial: Tutorial;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TutorialControllerService.CreateTutorialUsingPostPath, 'post');
    if (params) {
      rb.body('tutorial', params.tutorial, {});
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
   * createTutorial.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createTutorialUsingPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  createTutorialUsingPost(params: {

    /**
     * tutorial
     */
    tutorial: Tutorial;
  },
  context?: HttpContext

): Observable<void> {

    return this.createTutorialUsingPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteAllTutorialsUsingDelete
   */
  static readonly DeleteAllTutorialsUsingDeletePath = '/api/tutorials';

  /**
   * deleteAllTutorials.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteAllTutorialsUsingDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAllTutorialsUsingDelete$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TutorialControllerService.DeleteAllTutorialsUsingDeletePath, 'delete');
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
   * deleteAllTutorials.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteAllTutorialsUsingDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAllTutorialsUsingDelete(params?: {
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteAllTutorialsUsingDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation findByPublishedUsingGet
   */
  static readonly FindByPublishedUsingGetPath = '/api/tutorials/published';

  /**
   * findByPublished.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByPublishedUsingGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByPublishedUsingGet$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TutorialControllerService.FindByPublishedUsingGetPath, 'get');
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
   * findByPublished.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByPublishedUsingGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByPublishedUsingGet(params?: {
  },
  context?: HttpContext

): Observable<void> {

    return this.findByPublishedUsingGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getTutorialByIdUsingGet
   */
  static readonly GetTutorialByIdUsingGetPath = '/api/tutorials/{id}';

  /**
   * getTutorialById.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTutorialByIdUsingGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTutorialByIdUsingGet$Response(params: {

    /**
     * id
     */
    id: any;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TutorialControllerService.GetTutorialByIdUsingGetPath, 'get');
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
   * getTutorialById.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTutorialByIdUsingGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTutorialByIdUsingGet(params: {

    /**
     * id
     */
    id: any;
  },
  context?: HttpContext

): Observable<void> {

    return this.getTutorialByIdUsingGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation updateTutorialUsingPut
   */
  static readonly UpdateTutorialUsingPutPath = '/api/tutorials/{id}';

  /**
   * updateTutorial.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTutorialUsingPut()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateTutorialUsingPut$Response(params: {

    /**
     * id
     */
    id: any;

    /**
     * tutorial
     */
    tutorial: Tutorial;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TutorialControllerService.UpdateTutorialUsingPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body('tutorial', params.tutorial, {});
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
   * updateTutorial.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateTutorialUsingPut$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateTutorialUsingPut(params: {

    /**
     * id
     */
    id: any;

    /**
     * tutorial
     */
    tutorial: Tutorial;
  },
  context?: HttpContext

): Observable<void> {

    return this.updateTutorialUsingPut$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteTutorialUsingDelete
   */
  static readonly DeleteTutorialUsingDeletePath = '/api/tutorials/{id}';

  /**
   * deleteTutorial.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTutorialUsingDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTutorialUsingDelete$Response(params: {

    /**
     * id
     */
    id: any;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TutorialControllerService.DeleteTutorialUsingDeletePath, 'delete');
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
   * deleteTutorial.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteTutorialUsingDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTutorialUsingDelete(params: {

    /**
     * id
     */
    id: any;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteTutorialUsingDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
