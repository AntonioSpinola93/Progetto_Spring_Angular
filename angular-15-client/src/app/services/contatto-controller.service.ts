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

import { Contatto } from '../models/contatto';
import { FiltriContatti } from '../models/filtri-contatti';


/**
 * Contatto Controller
 */
@Injectable({
  providedIn: 'root',
})
export class ContattoControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation creaUsingPost
   */
  static readonly CreaUsingPostPath = '/api/contatti';

  /**
   * crea.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `creaUsingPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  creaUsingPost$Response(params: {

    /**
     * contatto
     */
    contatto: Contatto;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ContattoControllerService.CreaUsingPostPath, 'post');
    if (params) {
      rb.body('contatto', params.contatto, {});
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
   * crea.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `creaUsingPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  creaUsingPost(params: {

    /**
     * contatto
     */
    contatto: Contatto;
  },
  context?: HttpContext

): Observable<void> {

    return this.creaUsingPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getContattiUsingGet
   */
  static readonly GetContattiUsingGetPath = '/api/contatti/contacts';

  /**
   * getContatti.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getContattiUsingGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getContattiUsingGet$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ContattoControllerService.GetContattiUsingGetPath, 'get');
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
   * getContatti.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getContattiUsingGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getContattiUsingGet(params?: {
  },
  context?: HttpContext

): Observable<void> {

    return this.getContattiUsingGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation creaContattoUsingPost
   */
  static readonly CreaContattoUsingPostPath = '/api/contatti/contacts';

  /**
   * creaContatto.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `creaContattoUsingPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  creaContattoUsingPost$Response(params: {

    /**
     * contatto
     */
    contatto: Contatto;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ContattoControllerService.CreaContattoUsingPostPath, 'post');
    if (params) {
      rb.body('contatto', params.contatto, {});
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
   * creaContatto.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `creaContattoUsingPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  creaContattoUsingPost(params: {

    /**
     * contatto
     */
    contatto: Contatto;
  },
  context?: HttpContext

): Observable<void> {

    return this.creaContattoUsingPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation handleOptionsUsingOptions
   */
  static readonly HandleOptionsUsingOptionsPath = '/api/contatti/contacts';

  /**
   * handleOptions.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `handleOptionsUsingOptions()` instead.
   *
   * This method doesn't expect any request body.
   */
  handleOptionsUsingOptions$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ContattoControllerService.HandleOptionsUsingOptionsPath, 'options');
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
   * handleOptions.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `handleOptionsUsingOptions$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  handleOptionsUsingOptions(params?: {
  },
  context?: HttpContext

): Observable<void> {

    return this.handleOptionsUsingOptions$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation filtrareContattiUsingPost
   */
  static readonly FiltrareContattiUsingPostPath = '/api/contatti/contacts/search';

  /**
   * filtrareContatti.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `filtrareContattiUsingPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  filtrareContattiUsingPost$Response(params: {

    /**
     * filtriContatti
     */
    filtriContatti: FiltriContatti;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ContattoControllerService.FiltrareContattiUsingPostPath, 'post');
    if (params) {
      rb.body('filtriContatti', params.filtriContatti, {});
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
   * filtrareContatti.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `filtrareContattiUsingPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  filtrareContattiUsingPost(params: {

    /**
     * filtriContatti
     */
    filtriContatti: FiltriContatti;
  },
  context?: HttpContext

): Observable<void> {

    return this.filtrareContattiUsingPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation eliminaContattoUsingDelete
   */
  static readonly EliminaContattoUsingDeletePath = '/api/contatti/contacts/{id}';

  /**
   * eliminaContatto.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eliminaContattoUsingDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  eliminaContattoUsingDelete$Response(params: {

    /**
     * id
     */
    id: any;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ContattoControllerService.EliminaContattoUsingDeletePath, 'delete');
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
   * eliminaContatto.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `eliminaContattoUsingDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  eliminaContattoUsingDelete(params: {

    /**
     * id
     */
    id: any;
  },
  context?: HttpContext

): Observable<void> {

    return this.eliminaContattoUsingDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
