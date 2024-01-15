// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  HttpFailureGetEmptyErrorParameters,
  HttpFailureGetNoModelErrorParameters,
  HttpFailureGetNoModelEmptyParameters,
  HttpSuccessHead200Parameters,
  HttpSuccessGet200Parameters,
  HttpSuccessOptions200Parameters,
  HttpSuccessPut200Parameters,
  HttpSuccessPatch200Parameters,
  HttpSuccessPost200Parameters,
  HttpSuccessDelete200Parameters,
  HttpSuccessPut201Parameters,
  HttpSuccessPost201Parameters,
  HttpSuccessPut202Parameters,
  HttpSuccessPatch202Parameters,
  HttpSuccessPost202Parameters,
  HttpSuccessDelete202Parameters,
  HttpSuccessHead204Parameters,
  HttpSuccessPut204Parameters,
  HttpSuccessPatch204Parameters,
  HttpSuccessPost204Parameters,
  HttpSuccessDelete204Parameters,
  HttpSuccessHead404Parameters,
  HttpRedirectsHead300Parameters,
  HttpRedirectsGet300Parameters,
  HttpRedirectsHead301Parameters,
  HttpRedirectsGet301Parameters,
  HttpRedirectsPut301Parameters,
  HttpRedirectsHead302Parameters,
  HttpRedirectsGet302Parameters,
  HttpRedirectsPatch302Parameters,
  HttpRedirectsPost303Parameters,
  HttpRedirectsHead307Parameters,
  HttpRedirectsGet307Parameters,
  HttpRedirectsOptions307Parameters,
  HttpRedirectsPut307Parameters,
  HttpRedirectsPatch307Parameters,
  HttpRedirectsPost307Parameters,
  HttpRedirectsDelete307Parameters,
  HttpClientFailureHead400Parameters,
  HttpClientFailureGet400Parameters,
  HttpClientFailureOptions400Parameters,
  HttpClientFailurePut400Parameters,
  HttpClientFailurePatch400Parameters,
  HttpClientFailurePost400Parameters,
  HttpClientFailureDelete400Parameters,
  HttpClientFailureHead401Parameters,
  HttpClientFailureGet402Parameters,
  HttpClientFailureOptions403Parameters,
  HttpClientFailureGet403Parameters,
  HttpClientFailurePut404Parameters,
  HttpClientFailurePatch405Parameters,
  HttpClientFailurePost406Parameters,
  HttpClientFailureDelete407Parameters,
  HttpClientFailurePut409Parameters,
  HttpClientFailureHead410Parameters,
  HttpClientFailureGet411Parameters,
  HttpClientFailureOptions412Parameters,
  HttpClientFailureGet412Parameters,
  HttpClientFailurePut413Parameters,
  HttpClientFailurePatch414Parameters,
  HttpClientFailurePost415Parameters,
  HttpClientFailureGet416Parameters,
  HttpClientFailureDelete417Parameters,
  HttpClientFailureHead429Parameters,
  HttpServerFailureHead501Parameters,
  HttpServerFailureGet501Parameters,
  HttpServerFailurePost505Parameters,
  HttpServerFailureDelete505Parameters,
  HttpRetryHead408Parameters,
  HttpRetryPut500Parameters,
  HttpRetryPatch500Parameters,
  HttpRetryGet502Parameters,
  HttpRetryOptions502Parameters,
  HttpRetryPost503Parameters,
  HttpRetryDelete503Parameters,
  HttpRetryPut504Parameters,
  HttpRetryPatch504Parameters,
  MultipleResponsesGet200Model204NoModelDefaultError200ValidParameters,
  MultipleResponsesGet200Model204NoModelDefaultError204ValidParameters,
  MultipleResponsesGet200Model204NoModelDefaultError201InvalidParameters,
  MultipleResponsesGet200Model204NoModelDefaultError202NoneParameters,
  MultipleResponsesGet200Model204NoModelDefaultError400ValidParameters,
  MultipleResponsesGet200Model201ModelDefaultError200ValidParameters,
  MultipleResponsesGet200Model201ModelDefaultError201ValidParameters,
  MultipleResponsesGet200Model201ModelDefaultError400ValidParameters,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200ValidParameters,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201ValidParameters,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404ValidParameters,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400ValidParameters,
  MultipleResponsesGet202None204NoneDefaultError202NoneParameters,
  MultipleResponsesGet202None204NoneDefaultError204NoneParameters,
  MultipleResponsesGet202None204NoneDefaultError400ValidParameters,
  MultipleResponsesGet202None204NoneDefaultNone202InvalidParameters,
  MultipleResponsesGet202None204NoneDefaultNone204NoneParameters,
  MultipleResponsesGet202None204NoneDefaultNone400NoneParameters,
  MultipleResponsesGet202None204NoneDefaultNone400InvalidParameters,
  MultipleResponsesGetDefaultModelA200ValidParameters,
  MultipleResponsesGetDefaultModelA200NoneParameters,
  MultipleResponsesGetDefaultModelA400ValidParameters,
  MultipleResponsesGetDefaultModelA400NoneParameters,
  MultipleResponsesGetDefaultNone200InvalidParameters,
  MultipleResponsesGetDefaultNone200NoneParameters,
  MultipleResponsesGetDefaultNone400InvalidParameters,
  MultipleResponsesGetDefaultNone400NoneParameters,
  MultipleResponsesGet200ModelA200NoneParameters,
  MultipleResponsesGet200ModelA200ValidParameters,
  MultipleResponsesGet200ModelA200InvalidParameters,
  MultipleResponsesGet200ModelA400NoneParameters,
  MultipleResponsesGet200ModelA400ValidParameters,
  MultipleResponsesGet200ModelA400InvalidParameters,
  MultipleResponsesGet200ModelA202ValidParameters,
} from "./parameters";
import {
  HttpFailureGetEmptyError200Response,
  HttpFailureGetEmptyErrorDefaultResponse,
  HttpFailureGetNoModelError200Response,
  HttpFailureGetNoModelEmpty200Response,
  HttpSuccessHead200200Response,
  HttpSuccessHead200DefaultResponse,
  HttpSuccessGet200200Response,
  HttpSuccessGet200DefaultResponse,
  HttpSuccessOptions200200Response,
  HttpSuccessOptions200DefaultResponse,
  HttpSuccessPut200200Response,
  HttpSuccessPut200DefaultResponse,
  HttpSuccessPatch200200Response,
  HttpSuccessPatch200DefaultResponse,
  HttpSuccessPost200200Response,
  HttpSuccessPost200DefaultResponse,
  HttpSuccessDelete200200Response,
  HttpSuccessDelete200DefaultResponse,
  HttpSuccessPut201201Response,
  HttpSuccessPut201DefaultResponse,
  HttpSuccessPost201201Response,
  HttpSuccessPost201DefaultResponse,
  HttpSuccessPut202202Response,
  HttpSuccessPut202DefaultResponse,
  HttpSuccessPatch202202Response,
  HttpSuccessPatch202DefaultResponse,
  HttpSuccessPost202202Response,
  HttpSuccessPost202DefaultResponse,
  HttpSuccessDelete202202Response,
  HttpSuccessDelete202DefaultResponse,
  HttpSuccessHead204204Response,
  HttpSuccessHead204DefaultResponse,
  HttpSuccessPut204204Response,
  HttpSuccessPut204DefaultResponse,
  HttpSuccessPatch204204Response,
  HttpSuccessPatch204DefaultResponse,
  HttpSuccessPost204204Response,
  HttpSuccessPost204DefaultResponse,
  HttpSuccessDelete204204Response,
  HttpSuccessDelete204DefaultResponse,
  HttpSuccessHead404204Response,
  HttpSuccessHead404404Response,
  HttpSuccessHead404DefaultResponse,
  HttpRedirectsHead300200Response,
  HttpRedirectsHead300300Response,
  HttpRedirectsHead300DefaultResponse,
  HttpRedirectsGet300200Response,
  HttpRedirectsGet300300Response,
  HttpRedirectsGet300DefaultResponse,
  HttpRedirectsHead301200Response,
  HttpRedirectsHead301301Response,
  HttpRedirectsHead301DefaultResponse,
  HttpRedirectsGet301200Response,
  HttpRedirectsGet301301Response,
  HttpRedirectsGet301DefaultResponse,
  HttpRedirectsPut301301Response,
  HttpRedirectsPut301DefaultResponse,
  HttpRedirectsHead302200Response,
  HttpRedirectsHead302302Response,
  HttpRedirectsHead302DefaultResponse,
  HttpRedirectsGet302200Response,
  HttpRedirectsGet302302Response,
  HttpRedirectsGet302DefaultResponse,
  HttpRedirectsPatch302302Response,
  HttpRedirectsPatch302DefaultResponse,
  HttpRedirectsPost303200Response,
  HttpRedirectsPost303303Response,
  HttpRedirectsPost303DefaultResponse,
  HttpRedirectsHead307200Response,
  HttpRedirectsHead307307Response,
  HttpRedirectsHead307DefaultResponse,
  HttpRedirectsGet307200Response,
  HttpRedirectsGet307307Response,
  HttpRedirectsGet307DefaultResponse,
  HttpRedirectsOptions307200Response,
  HttpRedirectsOptions307307Response,
  HttpRedirectsOptions307DefaultResponse,
  HttpRedirectsPut307200Response,
  HttpRedirectsPut307307Response,
  HttpRedirectsPut307DefaultResponse,
  HttpRedirectsPatch307200Response,
  HttpRedirectsPatch307307Response,
  HttpRedirectsPatch307DefaultResponse,
  HttpRedirectsPost307200Response,
  HttpRedirectsPost307307Response,
  HttpRedirectsPost307DefaultResponse,
  HttpRedirectsDelete307200Response,
  HttpRedirectsDelete307307Response,
  HttpRedirectsDelete307DefaultResponse,
  HttpClientFailureHead400DefaultResponse,
  HttpClientFailureGet400DefaultResponse,
  HttpClientFailureOptions400DefaultResponse,
  HttpClientFailurePut400DefaultResponse,
  HttpClientFailurePatch400DefaultResponse,
  HttpClientFailurePost400DefaultResponse,
  HttpClientFailureDelete400DefaultResponse,
  HttpClientFailureHead401DefaultResponse,
  HttpClientFailureGet402DefaultResponse,
  HttpClientFailureOptions403DefaultResponse,
  HttpClientFailureGet403DefaultResponse,
  HttpClientFailurePut404DefaultResponse,
  HttpClientFailurePatch405DefaultResponse,
  HttpClientFailurePost406DefaultResponse,
  HttpClientFailureDelete407DefaultResponse,
  HttpClientFailurePut409DefaultResponse,
  HttpClientFailureHead410DefaultResponse,
  HttpClientFailureGet411DefaultResponse,
  HttpClientFailureOptions412DefaultResponse,
  HttpClientFailureGet412DefaultResponse,
  HttpClientFailurePut413DefaultResponse,
  HttpClientFailurePatch414DefaultResponse,
  HttpClientFailurePost415DefaultResponse,
  HttpClientFailureGet416DefaultResponse,
  HttpClientFailureDelete417DefaultResponse,
  HttpClientFailureHead429DefaultResponse,
  HttpServerFailureHead501DefaultResponse,
  HttpServerFailureGet501DefaultResponse,
  HttpServerFailurePost505DefaultResponse,
  HttpServerFailureDelete505DefaultResponse,
  HttpRetryHead408200Response,
  HttpRetryHead408DefaultResponse,
  HttpRetryPut500200Response,
  HttpRetryPut500DefaultResponse,
  HttpRetryPatch500200Response,
  HttpRetryPatch500DefaultResponse,
  HttpRetryGet502200Response,
  HttpRetryGet502DefaultResponse,
  HttpRetryOptions502200Response,
  HttpRetryOptions502DefaultResponse,
  HttpRetryPost503200Response,
  HttpRetryPost503DefaultResponse,
  HttpRetryDelete503200Response,
  HttpRetryDelete503DefaultResponse,
  HttpRetryPut504200Response,
  HttpRetryPut504DefaultResponse,
  HttpRetryPatch504200Response,
  HttpRetryPatch504DefaultResponse,
  MultipleResponsesGet200Model204NoModelDefaultError200Valid200Response,
  MultipleResponsesGet200Model204NoModelDefaultError200Valid204Response,
  MultipleResponsesGet200Model204NoModelDefaultError200ValidDefaultResponse,
  MultipleResponsesGet200Model204NoModelDefaultError204Valid200Response,
  MultipleResponsesGet200Model204NoModelDefaultError204Valid204Response,
  MultipleResponsesGet200Model204NoModelDefaultError204ValidDefaultResponse,
  MultipleResponsesGet200Model204NoModelDefaultError201Invalid200Response,
  MultipleResponsesGet200Model204NoModelDefaultError201Invalid204Response,
  MultipleResponsesGet200Model204NoModelDefaultError201InvalidDefaultResponse,
  MultipleResponsesGet200Model204NoModelDefaultError202None200Response,
  MultipleResponsesGet200Model204NoModelDefaultError202None204Response,
  MultipleResponsesGet200Model204NoModelDefaultError202NoneDefaultResponse,
  MultipleResponsesGet200Model204NoModelDefaultError400Valid200Response,
  MultipleResponsesGet200Model204NoModelDefaultError400Valid204Response,
  MultipleResponsesGet200Model204NoModelDefaultError400ValidDefaultResponse,
  MultipleResponsesGet200Model201ModelDefaultError200Valid200Response,
  MultipleResponsesGet200Model201ModelDefaultError200Valid201Response,
  MultipleResponsesGet200Model201ModelDefaultError200ValidDefaultResponse,
  MultipleResponsesGet200Model201ModelDefaultError201Valid200Response,
  MultipleResponsesGet200Model201ModelDefaultError201Valid201Response,
  MultipleResponsesGet200Model201ModelDefaultError201ValidDefaultResponse,
  MultipleResponsesGet200Model201ModelDefaultError400Valid200Response,
  MultipleResponsesGet200Model201ModelDefaultError400Valid201Response,
  MultipleResponsesGet200Model201ModelDefaultError400ValidDefaultResponse,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200Valid200Response,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200Valid201Response,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200Valid404Response,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200ValidDefaultResponse,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201Valid200Response,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201Valid201Response,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201Valid404Response,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201ValidDefaultResponse,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404Valid200Response,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404Valid201Response,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404Valid404Response,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404ValidDefaultResponse,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400Valid200Response,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400Valid201Response,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400Valid404Response,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400ValidDefaultResponse,
  MultipleResponsesGet202None204NoneDefaultError202None202Response,
  MultipleResponsesGet202None204NoneDefaultError202None204Response,
  MultipleResponsesGet202None204NoneDefaultError202NoneDefaultResponse,
  MultipleResponsesGet202None204NoneDefaultError204None202Response,
  MultipleResponsesGet202None204NoneDefaultError204None204Response,
  MultipleResponsesGet202None204NoneDefaultError204NoneDefaultResponse,
  MultipleResponsesGet202None204NoneDefaultError400Valid202Response,
  MultipleResponsesGet202None204NoneDefaultError400Valid204Response,
  MultipleResponsesGet202None204NoneDefaultError400ValidDefaultResponse,
  MultipleResponsesGet202None204NoneDefaultNone202Invalid202Response,
  MultipleResponsesGet202None204NoneDefaultNone202Invalid204Response,
  MultipleResponsesGet202None204NoneDefaultNone202InvalidDefaultResponse,
  MultipleResponsesGet202None204NoneDefaultNone204None202Response,
  MultipleResponsesGet202None204NoneDefaultNone204None204Response,
  MultipleResponsesGet202None204NoneDefaultNone204NoneDefaultResponse,
  MultipleResponsesGet202None204NoneDefaultNone400None202Response,
  MultipleResponsesGet202None204NoneDefaultNone400None204Response,
  MultipleResponsesGet202None204NoneDefaultNone400NoneDefaultResponse,
  MultipleResponsesGet202None204NoneDefaultNone400Invalid202Response,
  MultipleResponsesGet202None204NoneDefaultNone400Invalid204Response,
  MultipleResponsesGet202None204NoneDefaultNone400InvalidDefaultResponse,
  MultipleResponsesGetDefaultModelA200Valid200Response,
  MultipleResponsesGetDefaultModelA200None200Response,
  MultipleResponsesGetDefaultModelA400Valid200Response,
  MultipleResponsesGetDefaultModelA400ValidDefaultResponse,
  MultipleResponsesGetDefaultModelA400None200Response,
  MultipleResponsesGetDefaultModelA400NoneDefaultResponse,
  MultipleResponsesGetDefaultNone200Invalid200Response,
  MultipleResponsesGetDefaultNone200None200Response,
  MultipleResponsesGetDefaultNone400Invalid200Response,
  MultipleResponsesGetDefaultNone400InvalidDefaultResponse,
  MultipleResponsesGetDefaultNone400None200Response,
  MultipleResponsesGetDefaultNone400NoneDefaultResponse,
  MultipleResponsesGet200ModelA200None200Response,
  MultipleResponsesGet200ModelA200Valid200Response,
  MultipleResponsesGet200ModelA200Invalid200Response,
  MultipleResponsesGet200ModelA400None200Response,
  MultipleResponsesGet200ModelA400Valid200Response,
  MultipleResponsesGet200ModelA400Invalid200Response,
  MultipleResponsesGet200ModelA202Valid200Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for HttpFailure operations */
export interface HttpFailureOperations {
  /** Get empty error form server */
  getEmptyError(
    options?: HttpFailureGetEmptyErrorParameters,
  ): StreamableMethod<
    | HttpFailureGetEmptyError200Response
    | HttpFailureGetEmptyErrorDefaultResponse
  >;
  /** Get empty error form server */
  getNoModelError(
    options?: HttpFailureGetNoModelErrorParameters,
  ): StreamableMethod<HttpFailureGetNoModelError200Response>;
  /** Get empty response from server */
  getNoModelEmpty(
    options?: HttpFailureGetNoModelEmptyParameters,
  ): StreamableMethod<HttpFailureGetNoModelEmpty200Response>;
}

/** Contains operations for HttpSuccess operations */
export interface HttpSuccessOperations {
  /** Return 200 status code if successful */
  head200(
    options?: HttpSuccessHead200Parameters,
  ): StreamableMethod<
    HttpSuccessHead200200Response | HttpSuccessHead200DefaultResponse
  >;
  /** Get 200 success */
  get200(
    options?: HttpSuccessGet200Parameters,
  ): StreamableMethod<
    HttpSuccessGet200200Response | HttpSuccessGet200DefaultResponse
  >;
  /** Options 200 success */
  options200(
    options?: HttpSuccessOptions200Parameters,
  ): StreamableMethod<
    HttpSuccessOptions200200Response | HttpSuccessOptions200DefaultResponse
  >;
  /** Put boolean value true returning 200 success */
  put200(
    options?: HttpSuccessPut200Parameters,
  ): StreamableMethod<
    HttpSuccessPut200200Response | HttpSuccessPut200DefaultResponse
  >;
  /** Patch true Boolean value in request returning 200 */
  patch200(
    options?: HttpSuccessPatch200Parameters,
  ): StreamableMethod<
    HttpSuccessPatch200200Response | HttpSuccessPatch200DefaultResponse
  >;
  /** Post bollean value true in request that returns a 200 */
  post200(
    options?: HttpSuccessPost200Parameters,
  ): StreamableMethod<
    HttpSuccessPost200200Response | HttpSuccessPost200DefaultResponse
  >;
  /** Delete simple boolean value true returns 200 */
  delete200(
    options?: HttpSuccessDelete200Parameters,
  ): StreamableMethod<
    HttpSuccessDelete200200Response | HttpSuccessDelete200DefaultResponse
  >;
  /** Put true Boolean value in request returns 201 */
  put201(
    options?: HttpSuccessPut201Parameters,
  ): StreamableMethod<
    HttpSuccessPut201201Response | HttpSuccessPut201DefaultResponse
  >;
  /** Post true Boolean value in request returns 201 (Created) */
  post201(
    options?: HttpSuccessPost201Parameters,
  ): StreamableMethod<
    HttpSuccessPost201201Response | HttpSuccessPost201DefaultResponse
  >;
  /** Put true Boolean value in request returns 202 (Accepted) */
  put202(
    options?: HttpSuccessPut202Parameters,
  ): StreamableMethod<
    HttpSuccessPut202202Response | HttpSuccessPut202DefaultResponse
  >;
  /** Patch true Boolean value in request returns 202 */
  patch202(
    options?: HttpSuccessPatch202Parameters,
  ): StreamableMethod<
    HttpSuccessPatch202202Response | HttpSuccessPatch202DefaultResponse
  >;
  /** Post true Boolean value in request returns 202 (Accepted) */
  post202(
    options?: HttpSuccessPost202Parameters,
  ): StreamableMethod<
    HttpSuccessPost202202Response | HttpSuccessPost202DefaultResponse
  >;
  /** Delete true Boolean value in request returns 202 (accepted) */
  delete202(
    options?: HttpSuccessDelete202Parameters,
  ): StreamableMethod<
    HttpSuccessDelete202202Response | HttpSuccessDelete202DefaultResponse
  >;
  /** Return 204 status code if successful */
  head204(
    options?: HttpSuccessHead204Parameters,
  ): StreamableMethod<
    HttpSuccessHead204204Response | HttpSuccessHead204DefaultResponse
  >;
  /** Put true Boolean value in request returns 204 (no content) */
  put204(
    options?: HttpSuccessPut204Parameters,
  ): StreamableMethod<
    HttpSuccessPut204204Response | HttpSuccessPut204DefaultResponse
  >;
  /** Patch true Boolean value in request returns 204 (no content) */
  patch204(
    options?: HttpSuccessPatch204Parameters,
  ): StreamableMethod<
    HttpSuccessPatch204204Response | HttpSuccessPatch204DefaultResponse
  >;
  /** Post true Boolean value in request returns 204 (no content) */
  post204(
    options?: HttpSuccessPost204Parameters,
  ): StreamableMethod<
    HttpSuccessPost204204Response | HttpSuccessPost204DefaultResponse
  >;
  /** Delete true Boolean value in request returns 204 (no content) */
  delete204(
    options?: HttpSuccessDelete204Parameters,
  ): StreamableMethod<
    HttpSuccessDelete204204Response | HttpSuccessDelete204DefaultResponse
  >;
  /** Return 404 status code */
  head404(
    options?: HttpSuccessHead404Parameters,
  ): StreamableMethod<
    | HttpSuccessHead404204Response
    | HttpSuccessHead404404Response
    | HttpSuccessHead404DefaultResponse
  >;
}

/** Contains operations for HttpRedirects operations */
export interface HttpRedirectsOperations {
  /** Return 300 status code and redirect to /http/success/200 */
  head300(
    options?: HttpRedirectsHead300Parameters,
  ): StreamableMethod<
    | HttpRedirectsHead300200Response
    | HttpRedirectsHead300300Response
    | HttpRedirectsHead300DefaultResponse
  >;
  /** Return 300 status code and redirect to /http/success/200 */
  get300(
    options?: HttpRedirectsGet300Parameters,
  ): StreamableMethod<
    | HttpRedirectsGet300200Response
    | HttpRedirectsGet300300Response
    | HttpRedirectsGet300DefaultResponse
  >;
  /** Return 301 status code and redirect to /http/success/200 */
  head301(
    options?: HttpRedirectsHead301Parameters,
  ): StreamableMethod<
    | HttpRedirectsHead301200Response
    | HttpRedirectsHead301301Response
    | HttpRedirectsHead301DefaultResponse
  >;
  /** Return 301 status code and redirect to /http/success/200 */
  get301(
    options?: HttpRedirectsGet301Parameters,
  ): StreamableMethod<
    | HttpRedirectsGet301200Response
    | HttpRedirectsGet301301Response
    | HttpRedirectsGet301DefaultResponse
  >;
  /** Put true Boolean value in request returns 301.  This request should not be automatically redirected, but should return the received 301 to the caller for evaluation */
  put301(
    options?: HttpRedirectsPut301Parameters,
  ): StreamableMethod<
    HttpRedirectsPut301301Response | HttpRedirectsPut301DefaultResponse
  >;
  /** Return 302 status code and redirect to /http/success/200 */
  head302(
    options?: HttpRedirectsHead302Parameters,
  ): StreamableMethod<
    | HttpRedirectsHead302200Response
    | HttpRedirectsHead302302Response
    | HttpRedirectsHead302DefaultResponse
  >;
  /** Return 302 status code and redirect to /http/success/200 */
  get302(
    options?: HttpRedirectsGet302Parameters,
  ): StreamableMethod<
    | HttpRedirectsGet302200Response
    | HttpRedirectsGet302302Response
    | HttpRedirectsGet302DefaultResponse
  >;
  /** Patch true Boolean value in request returns 302.  This request should not be automatically redirected, but should return the received 302 to the caller for evaluation */
  patch302(
    options?: HttpRedirectsPatch302Parameters,
  ): StreamableMethod<
    HttpRedirectsPatch302302Response | HttpRedirectsPatch302DefaultResponse
  >;
  /** Post true Boolean value in request returns 303.  This request should be automatically redirected usign a get, ultimately returning a 200 status code */
  post303(
    options?: HttpRedirectsPost303Parameters,
  ): StreamableMethod<
    | HttpRedirectsPost303200Response
    | HttpRedirectsPost303303Response
    | HttpRedirectsPost303DefaultResponse
  >;
  /** Redirect with 307, resulting in a 200 success */
  head307(
    options?: HttpRedirectsHead307Parameters,
  ): StreamableMethod<
    | HttpRedirectsHead307200Response
    | HttpRedirectsHead307307Response
    | HttpRedirectsHead307DefaultResponse
  >;
  /** Redirect get with 307, resulting in a 200 success */
  get307(
    options?: HttpRedirectsGet307Parameters,
  ): StreamableMethod<
    | HttpRedirectsGet307200Response
    | HttpRedirectsGet307307Response
    | HttpRedirectsGet307DefaultResponse
  >;
  /** options redirected with 307, resulting in a 200 after redirect */
  options307(
    options?: HttpRedirectsOptions307Parameters,
  ): StreamableMethod<
    | HttpRedirectsOptions307200Response
    | HttpRedirectsOptions307307Response
    | HttpRedirectsOptions307DefaultResponse
  >;
  /** Put redirected with 307, resulting in a 200 after redirect */
  put307(
    options?: HttpRedirectsPut307Parameters,
  ): StreamableMethod<
    | HttpRedirectsPut307200Response
    | HttpRedirectsPut307307Response
    | HttpRedirectsPut307DefaultResponse
  >;
  /** Patch redirected with 307, resulting in a 200 after redirect */
  patch307(
    options?: HttpRedirectsPatch307Parameters,
  ): StreamableMethod<
    | HttpRedirectsPatch307200Response
    | HttpRedirectsPatch307307Response
    | HttpRedirectsPatch307DefaultResponse
  >;
  /** Post redirected with 307, resulting in a 200 after redirect */
  post307(
    options?: HttpRedirectsPost307Parameters,
  ): StreamableMethod<
    | HttpRedirectsPost307200Response
    | HttpRedirectsPost307307Response
    | HttpRedirectsPost307DefaultResponse
  >;
  /** Delete redirected with 307, resulting in a 200 after redirect */
  delete307(
    options?: HttpRedirectsDelete307Parameters,
  ): StreamableMethod<
    | HttpRedirectsDelete307200Response
    | HttpRedirectsDelete307307Response
    | HttpRedirectsDelete307DefaultResponse
  >;
}

/** Contains operations for HttpClientFailure operations */
export interface HttpClientFailureOperations {
  /** Return 400 status code - should be represented in the client as an error */
  head400(
    options?: HttpClientFailureHead400Parameters,
  ): StreamableMethod<HttpClientFailureHead400DefaultResponse>;
  /** Return 400 status code - should be represented in the client as an error */
  get400(
    options?: HttpClientFailureGet400Parameters,
  ): StreamableMethod<HttpClientFailureGet400DefaultResponse>;
  /** Return 400 status code - should be represented in the client as an error */
  options400(
    options?: HttpClientFailureOptions400Parameters,
  ): StreamableMethod<HttpClientFailureOptions400DefaultResponse>;
  /** Return 400 status code - should be represented in the client as an error */
  put400(
    options?: HttpClientFailurePut400Parameters,
  ): StreamableMethod<HttpClientFailurePut400DefaultResponse>;
  /** Return 400 status code - should be represented in the client as an error */
  patch400(
    options?: HttpClientFailurePatch400Parameters,
  ): StreamableMethod<HttpClientFailurePatch400DefaultResponse>;
  /** Return 400 status code - should be represented in the client as an error */
  post400(
    options?: HttpClientFailurePost400Parameters,
  ): StreamableMethod<HttpClientFailurePost400DefaultResponse>;
  /** Return 400 status code - should be represented in the client as an error */
  delete400(
    options?: HttpClientFailureDelete400Parameters,
  ): StreamableMethod<HttpClientFailureDelete400DefaultResponse>;
  /** Return 401 status code - should be represented in the client as an error */
  head401(
    options?: HttpClientFailureHead401Parameters,
  ): StreamableMethod<HttpClientFailureHead401DefaultResponse>;
  /** Return 402 status code - should be represented in the client as an error */
  get402(
    options?: HttpClientFailureGet402Parameters,
  ): StreamableMethod<HttpClientFailureGet402DefaultResponse>;
  /** Return 403 status code - should be represented in the client as an error */
  options403(
    options?: HttpClientFailureOptions403Parameters,
  ): StreamableMethod<HttpClientFailureOptions403DefaultResponse>;
  /** Return 403 status code - should be represented in the client as an error */
  get403(
    options?: HttpClientFailureGet403Parameters,
  ): StreamableMethod<HttpClientFailureGet403DefaultResponse>;
  /** Return 404 status code - should be represented in the client as an error */
  put404(
    options?: HttpClientFailurePut404Parameters,
  ): StreamableMethod<HttpClientFailurePut404DefaultResponse>;
  /** Return 405 status code - should be represented in the client as an error */
  patch405(
    options?: HttpClientFailurePatch405Parameters,
  ): StreamableMethod<HttpClientFailurePatch405DefaultResponse>;
  /** Return 406 status code - should be represented in the client as an error */
  post406(
    options?: HttpClientFailurePost406Parameters,
  ): StreamableMethod<HttpClientFailurePost406DefaultResponse>;
  /** Return 407 status code - should be represented in the client as an error */
  delete407(
    options?: HttpClientFailureDelete407Parameters,
  ): StreamableMethod<HttpClientFailureDelete407DefaultResponse>;
  /** Return 409 status code - should be represented in the client as an error */
  put409(
    options?: HttpClientFailurePut409Parameters,
  ): StreamableMethod<HttpClientFailurePut409DefaultResponse>;
  /** Return 410 status code - should be represented in the client as an error */
  head410(
    options?: HttpClientFailureHead410Parameters,
  ): StreamableMethod<HttpClientFailureHead410DefaultResponse>;
  /** Return 411 status code - should be represented in the client as an error */
  get411(
    options?: HttpClientFailureGet411Parameters,
  ): StreamableMethod<HttpClientFailureGet411DefaultResponse>;
  /** Return 412 status code - should be represented in the client as an error */
  options412(
    options?: HttpClientFailureOptions412Parameters,
  ): StreamableMethod<HttpClientFailureOptions412DefaultResponse>;
  /** Return 412 status code - should be represented in the client as an error */
  get412(
    options?: HttpClientFailureGet412Parameters,
  ): StreamableMethod<HttpClientFailureGet412DefaultResponse>;
  /** Return 413 status code - should be represented in the client as an error */
  put413(
    options?: HttpClientFailurePut413Parameters,
  ): StreamableMethod<HttpClientFailurePut413DefaultResponse>;
  /** Return 414 status code - should be represented in the client as an error */
  patch414(
    options?: HttpClientFailurePatch414Parameters,
  ): StreamableMethod<HttpClientFailurePatch414DefaultResponse>;
  /** Return 415 status code - should be represented in the client as an error */
  post415(
    options?: HttpClientFailurePost415Parameters,
  ): StreamableMethod<HttpClientFailurePost415DefaultResponse>;
  /** Return 416 status code - should be represented in the client as an error */
  get416(
    options?: HttpClientFailureGet416Parameters,
  ): StreamableMethod<HttpClientFailureGet416DefaultResponse>;
  /** Return 417 status code - should be represented in the client as an error */
  delete417(
    options?: HttpClientFailureDelete417Parameters,
  ): StreamableMethod<HttpClientFailureDelete417DefaultResponse>;
  /** Return 429 status code - should be represented in the client as an error */
  head429(
    options?: HttpClientFailureHead429Parameters,
  ): StreamableMethod<HttpClientFailureHead429DefaultResponse>;
}

/** Contains operations for HttpServerFailure operations */
export interface HttpServerFailureOperations {
  /** Return 501 status code - should be represented in the client as an error */
  head501(
    options?: HttpServerFailureHead501Parameters,
  ): StreamableMethod<HttpServerFailureHead501DefaultResponse>;
  /** Return 501 status code - should be represented in the client as an error */
  get501(
    options?: HttpServerFailureGet501Parameters,
  ): StreamableMethod<HttpServerFailureGet501DefaultResponse>;
  /** Return 505 status code - should be represented in the client as an error */
  post505(
    options?: HttpServerFailurePost505Parameters,
  ): StreamableMethod<HttpServerFailurePost505DefaultResponse>;
  /** Return 505 status code - should be represented in the client as an error */
  delete505(
    options?: HttpServerFailureDelete505Parameters,
  ): StreamableMethod<HttpServerFailureDelete505DefaultResponse>;
}

/** Contains operations for HttpRetry operations */
export interface HttpRetryOperations {
  /** Return 408 status code, then 200 after retry */
  head408(
    options?: HttpRetryHead408Parameters,
  ): StreamableMethod<
    HttpRetryHead408200Response | HttpRetryHead408DefaultResponse
  >;
  /** Return 500 status code, then 200 after retry */
  put500(
    options?: HttpRetryPut500Parameters,
  ): StreamableMethod<
    HttpRetryPut500200Response | HttpRetryPut500DefaultResponse
  >;
  /** Return 500 status code, then 200 after retry */
  patch500(
    options?: HttpRetryPatch500Parameters,
  ): StreamableMethod<
    HttpRetryPatch500200Response | HttpRetryPatch500DefaultResponse
  >;
  /** Return 502 status code, then 200 after retry */
  get502(
    options?: HttpRetryGet502Parameters,
  ): StreamableMethod<
    HttpRetryGet502200Response | HttpRetryGet502DefaultResponse
  >;
  /** Return 502 status code, then 200 after retry */
  options502(
    options?: HttpRetryOptions502Parameters,
  ): StreamableMethod<
    HttpRetryOptions502200Response | HttpRetryOptions502DefaultResponse
  >;
  /** Return 503 status code, then 200 after retry */
  post503(
    options?: HttpRetryPost503Parameters,
  ): StreamableMethod<
    HttpRetryPost503200Response | HttpRetryPost503DefaultResponse
  >;
  /** Return 503 status code, then 200 after retry */
  delete503(
    options?: HttpRetryDelete503Parameters,
  ): StreamableMethod<
    HttpRetryDelete503200Response | HttpRetryDelete503DefaultResponse
  >;
  /** Return 504 status code, then 200 after retry */
  put504(
    options?: HttpRetryPut504Parameters,
  ): StreamableMethod<
    HttpRetryPut504200Response | HttpRetryPut504DefaultResponse
  >;
  /** Return 504 status code, then 200 after retry */
  patch504(
    options?: HttpRetryPatch504Parameters,
  ): StreamableMethod<
    HttpRetryPatch504200Response | HttpRetryPatch504DefaultResponse
  >;
}

/** Contains operations for MultipleResponses operations */
export interface MultipleResponsesOperations {
  /** Send a 200 response with valid payload: {'statusCode': '200'} */
  get200Model204NoModelDefaultError200Valid(
    options?: MultipleResponsesGet200Model204NoModelDefaultError200ValidParameters,
  ): StreamableMethod<
    | MultipleResponsesGet200Model204NoModelDefaultError200Valid200Response
    | MultipleResponsesGet200Model204NoModelDefaultError200Valid204Response
    | MultipleResponsesGet200Model204NoModelDefaultError200ValidDefaultResponse
  >;
  /** Send a 204 response with no payload */
  get200Model204NoModelDefaultError204Valid(
    options?: MultipleResponsesGet200Model204NoModelDefaultError204ValidParameters,
  ): StreamableMethod<
    | MultipleResponsesGet200Model204NoModelDefaultError204Valid200Response
    | MultipleResponsesGet200Model204NoModelDefaultError204Valid204Response
    | MultipleResponsesGet200Model204NoModelDefaultError204ValidDefaultResponse
  >;
  /** Send a 201 response with valid payload: {'statusCode': '201'} */
  get200Model204NoModelDefaultError201Invalid(
    options?: MultipleResponsesGet200Model204NoModelDefaultError201InvalidParameters,
  ): StreamableMethod<
    | MultipleResponsesGet200Model204NoModelDefaultError201Invalid200Response
    | MultipleResponsesGet200Model204NoModelDefaultError201Invalid204Response
    | MultipleResponsesGet200Model204NoModelDefaultError201InvalidDefaultResponse
  >;
  /** Send a 202 response with no payload: */
  get200Model204NoModelDefaultError202None(
    options?: MultipleResponsesGet200Model204NoModelDefaultError202NoneParameters,
  ): StreamableMethod<
    | MultipleResponsesGet200Model204NoModelDefaultError202None200Response
    | MultipleResponsesGet200Model204NoModelDefaultError202None204Response
    | MultipleResponsesGet200Model204NoModelDefaultError202NoneDefaultResponse
  >;
  /** Send a 400 response with valid error payload: {'status': 400, 'message': 'client error'} */
  get200Model204NoModelDefaultError400Valid(
    options?: MultipleResponsesGet200Model204NoModelDefaultError400ValidParameters,
  ): StreamableMethod<
    | MultipleResponsesGet200Model204NoModelDefaultError400Valid200Response
    | MultipleResponsesGet200Model204NoModelDefaultError400Valid204Response
    | MultipleResponsesGet200Model204NoModelDefaultError400ValidDefaultResponse
  >;
  /** Send a 200 response with valid payload: {'statusCode': '200'} */
  get200Model201ModelDefaultError200Valid(
    options?: MultipleResponsesGet200Model201ModelDefaultError200ValidParameters,
  ): StreamableMethod<
    | MultipleResponsesGet200Model201ModelDefaultError200Valid200Response
    | MultipleResponsesGet200Model201ModelDefaultError200Valid201Response
    | MultipleResponsesGet200Model201ModelDefaultError200ValidDefaultResponse
  >;
  /** Send a 201 response with valid payload: {'statusCode': '201', 'textStatusCode': 'Created'} */
  get200Model201ModelDefaultError201Valid(
    options?: MultipleResponsesGet200Model201ModelDefaultError201ValidParameters,
  ): StreamableMethod<
    | MultipleResponsesGet200Model201ModelDefaultError201Valid200Response
    | MultipleResponsesGet200Model201ModelDefaultError201Valid201Response
    | MultipleResponsesGet200Model201ModelDefaultError201ValidDefaultResponse
  >;
  /** Send a 400 response with valid payload: {'code': '400', 'message': 'client error'} */
  get200Model201ModelDefaultError400Valid(
    options?: MultipleResponsesGet200Model201ModelDefaultError400ValidParameters,
  ): StreamableMethod<
    | MultipleResponsesGet200Model201ModelDefaultError400Valid200Response
    | MultipleResponsesGet200Model201ModelDefaultError400Valid201Response
    | MultipleResponsesGet200Model201ModelDefaultError400ValidDefaultResponse
  >;
  /** Send a 200 response with valid payload: {'statusCode': '200'} */
  get200ModelA201ModelC404ModelDDefaultError200Valid(
    options?: MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200ValidParameters,
  ): StreamableMethod<
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200Valid200Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200Valid201Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200Valid404Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200ValidDefaultResponse
  >;
  /** Send a 200 response with valid payload: {'httpCode': '201'} */
  get200ModelA201ModelC404ModelDDefaultError201Valid(
    options?: MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201ValidParameters,
  ): StreamableMethod<
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201Valid200Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201Valid201Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201Valid404Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201ValidDefaultResponse
  >;
  /** Send a 200 response with valid payload: {'httpStatusCode': '404'} */
  get200ModelA201ModelC404ModelDDefaultError404Valid(
    options?: MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404ValidParameters,
  ): StreamableMethod<
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404Valid200Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404Valid201Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404Valid404Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404ValidDefaultResponse
  >;
  /** Send a 400 response with valid payload: {'code': '400', 'message': 'client error'} */
  get200ModelA201ModelC404ModelDDefaultError400Valid(
    options?: MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400ValidParameters,
  ): StreamableMethod<
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400Valid200Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400Valid201Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400Valid404Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400ValidDefaultResponse
  >;
  /** Send a 202 response with no payload */
  get202None204NoneDefaultError202None(
    options?: MultipleResponsesGet202None204NoneDefaultError202NoneParameters,
  ): StreamableMethod<
    | MultipleResponsesGet202None204NoneDefaultError202None202Response
    | MultipleResponsesGet202None204NoneDefaultError202None204Response
    | MultipleResponsesGet202None204NoneDefaultError202NoneDefaultResponse
  >;
  /** Send a 204 response with no payload */
  get202None204NoneDefaultError204None(
    options?: MultipleResponsesGet202None204NoneDefaultError204NoneParameters,
  ): StreamableMethod<
    | MultipleResponsesGet202None204NoneDefaultError204None202Response
    | MultipleResponsesGet202None204NoneDefaultError204None204Response
    | MultipleResponsesGet202None204NoneDefaultError204NoneDefaultResponse
  >;
  /** Send a 400 response with valid payload: {'code': '400', 'message': 'client error'} */
  get202None204NoneDefaultError400Valid(
    options?: MultipleResponsesGet202None204NoneDefaultError400ValidParameters,
  ): StreamableMethod<
    | MultipleResponsesGet202None204NoneDefaultError400Valid202Response
    | MultipleResponsesGet202None204NoneDefaultError400Valid204Response
    | MultipleResponsesGet202None204NoneDefaultError400ValidDefaultResponse
  >;
  /** Send a 202 response with an unexpected payload {'property': 'value'} */
  get202None204NoneDefaultNone202Invalid(
    options?: MultipleResponsesGet202None204NoneDefaultNone202InvalidParameters,
  ): StreamableMethod<
    | MultipleResponsesGet202None204NoneDefaultNone202Invalid202Response
    | MultipleResponsesGet202None204NoneDefaultNone202Invalid204Response
    | MultipleResponsesGet202None204NoneDefaultNone202InvalidDefaultResponse
  >;
  /** Send a 204 response with no payload */
  get202None204NoneDefaultNone204None(
    options?: MultipleResponsesGet202None204NoneDefaultNone204NoneParameters,
  ): StreamableMethod<
    | MultipleResponsesGet202None204NoneDefaultNone204None202Response
    | MultipleResponsesGet202None204NoneDefaultNone204None204Response
    | MultipleResponsesGet202None204NoneDefaultNone204NoneDefaultResponse
  >;
  /** Send a 400 response with no payload */
  get202None204NoneDefaultNone400None(
    options?: MultipleResponsesGet202None204NoneDefaultNone400NoneParameters,
  ): StreamableMethod<
    | MultipleResponsesGet202None204NoneDefaultNone400None202Response
    | MultipleResponsesGet202None204NoneDefaultNone400None204Response
    | MultipleResponsesGet202None204NoneDefaultNone400NoneDefaultResponse
  >;
  /** Send a 400 response with an unexpected payload {'property': 'value'} */
  get202None204NoneDefaultNone400Invalid(
    options?: MultipleResponsesGet202None204NoneDefaultNone400InvalidParameters,
  ): StreamableMethod<
    | MultipleResponsesGet202None204NoneDefaultNone400Invalid202Response
    | MultipleResponsesGet202None204NoneDefaultNone400Invalid204Response
    | MultipleResponsesGet202None204NoneDefaultNone400InvalidDefaultResponse
  >;
  /** Send a 200 response with valid payload: {'statusCode': '200'} */
  getDefaultModelA200Valid(
    options?: MultipleResponsesGetDefaultModelA200ValidParameters,
  ): StreamableMethod<MultipleResponsesGetDefaultModelA200Valid200Response>;
  /** Send a 200 response with no payload */
  getDefaultModelA200None(
    options?: MultipleResponsesGetDefaultModelA200NoneParameters,
  ): StreamableMethod<MultipleResponsesGetDefaultModelA200None200Response>;
  /** Send a 400 response with valid payload: {'statusCode': '400'} */
  getDefaultModelA400Valid(
    options?: MultipleResponsesGetDefaultModelA400ValidParameters,
  ): StreamableMethod<
    | MultipleResponsesGetDefaultModelA400Valid200Response
    | MultipleResponsesGetDefaultModelA400ValidDefaultResponse
  >;
  /** Send a 400 response with no payload */
  getDefaultModelA400None(
    options?: MultipleResponsesGetDefaultModelA400NoneParameters,
  ): StreamableMethod<
    | MultipleResponsesGetDefaultModelA400None200Response
    | MultipleResponsesGetDefaultModelA400NoneDefaultResponse
  >;
  /** Send a 200 response with invalid payload: {'statusCode': '200'} */
  getDefaultNone200Invalid(
    options?: MultipleResponsesGetDefaultNone200InvalidParameters,
  ): StreamableMethod<MultipleResponsesGetDefaultNone200Invalid200Response>;
  /** Send a 200 response with no payload */
  getDefaultNone200None(
    options?: MultipleResponsesGetDefaultNone200NoneParameters,
  ): StreamableMethod<MultipleResponsesGetDefaultNone200None200Response>;
  /** Send a 400 response with valid payload: {'statusCode': '400'} */
  getDefaultNone400Invalid(
    options?: MultipleResponsesGetDefaultNone400InvalidParameters,
  ): StreamableMethod<
    | MultipleResponsesGetDefaultNone400Invalid200Response
    | MultipleResponsesGetDefaultNone400InvalidDefaultResponse
  >;
  /** Send a 400 response with no payload */
  getDefaultNone400None(
    options?: MultipleResponsesGetDefaultNone400NoneParameters,
  ): StreamableMethod<
    | MultipleResponsesGetDefaultNone400None200Response
    | MultipleResponsesGetDefaultNone400NoneDefaultResponse
  >;
  /** Send a 200 response with no payload, when a payload is expected - client should return a null object of thde type for model A */
  get200ModelA200None(
    options?: MultipleResponsesGet200ModelA200NoneParameters,
  ): StreamableMethod<MultipleResponsesGet200ModelA200None200Response>;
  /** Send a 200 response with payload {'statusCode': '200'} */
  get200ModelA200Valid(
    options?: MultipleResponsesGet200ModelA200ValidParameters,
  ): StreamableMethod<MultipleResponsesGet200ModelA200Valid200Response>;
  /** Send a 200 response with invalid payload {'statusCodeInvalid': '200'} */
  get200ModelA200Invalid(
    options?: MultipleResponsesGet200ModelA200InvalidParameters,
  ): StreamableMethod<MultipleResponsesGet200ModelA200Invalid200Response>;
  /** Send a 400 response with no payload client should treat as an http error with no error model */
  get200ModelA400None(
    options?: MultipleResponsesGet200ModelA400NoneParameters,
  ): StreamableMethod<MultipleResponsesGet200ModelA400None200Response>;
  /** Send a 200 response with payload {'statusCode': '400'} */
  get200ModelA400Valid(
    options?: MultipleResponsesGet200ModelA400ValidParameters,
  ): StreamableMethod<MultipleResponsesGet200ModelA400Valid200Response>;
  /** Send a 200 response with invalid payload {'statusCodeInvalid': '400'} */
  get200ModelA400Invalid(
    options?: MultipleResponsesGet200ModelA400InvalidParameters,
  ): StreamableMethod<MultipleResponsesGet200ModelA400Invalid200Response>;
  /** Send a 202 response with payload {'statusCode': '202'} */
  get200ModelA202Valid(
    options?: MultipleResponsesGet200ModelA202ValidParameters,
  ): StreamableMethod<MultipleResponsesGet200ModelA202Valid200Response>;
}

export interface HttpFailureGetEmptyError {
  /** Get empty error form server */
  get(
    options?: HttpFailureGetEmptyErrorParameters,
  ): StreamableMethod<
    | HttpFailureGetEmptyError200Response
    | HttpFailureGetEmptyErrorDefaultResponse
  >;
}

export interface HttpFailureGetNoModelError {
  /** Get empty error form server */
  get(
    options?: HttpFailureGetNoModelErrorParameters,
  ): StreamableMethod<HttpFailureGetNoModelError200Response>;
}

export interface HttpFailureGetNoModelEmpty {
  /** Get empty response from server */
  get(
    options?: HttpFailureGetNoModelEmptyParameters,
  ): StreamableMethod<HttpFailureGetNoModelEmpty200Response>;
}

export interface HttpSuccessHead200 {
  /** Return 200 status code if successful */
  head(
    options?: HttpSuccessHead200Parameters,
  ): StreamableMethod<
    HttpSuccessHead200200Response | HttpSuccessHead200DefaultResponse
  >;
  /** Get 200 success */
  get(
    options?: HttpSuccessGet200Parameters,
  ): StreamableMethod<
    HttpSuccessGet200200Response | HttpSuccessGet200DefaultResponse
  >;
  /** Options 200 success */
  options(
    options?: HttpSuccessOptions200Parameters,
  ): StreamableMethod<
    HttpSuccessOptions200200Response | HttpSuccessOptions200DefaultResponse
  >;
  /** Put boolean value true returning 200 success */
  put(
    options?: HttpSuccessPut200Parameters,
  ): StreamableMethod<
    HttpSuccessPut200200Response | HttpSuccessPut200DefaultResponse
  >;
  /** Patch true Boolean value in request returning 200 */
  patch(
    options?: HttpSuccessPatch200Parameters,
  ): StreamableMethod<
    HttpSuccessPatch200200Response | HttpSuccessPatch200DefaultResponse
  >;
  /** Post bollean value true in request that returns a 200 */
  post(
    options?: HttpSuccessPost200Parameters,
  ): StreamableMethod<
    HttpSuccessPost200200Response | HttpSuccessPost200DefaultResponse
  >;
  /** Delete simple boolean value true returns 200 */
  delete(
    options?: HttpSuccessDelete200Parameters,
  ): StreamableMethod<
    HttpSuccessDelete200200Response | HttpSuccessDelete200DefaultResponse
  >;
}

export interface HttpSuccessPut201 {
  /** Put true Boolean value in request returns 201 */
  put(
    options?: HttpSuccessPut201Parameters,
  ): StreamableMethod<
    HttpSuccessPut201201Response | HttpSuccessPut201DefaultResponse
  >;
  /** Post true Boolean value in request returns 201 (Created) */
  post(
    options?: HttpSuccessPost201Parameters,
  ): StreamableMethod<
    HttpSuccessPost201201Response | HttpSuccessPost201DefaultResponse
  >;
}

export interface HttpSuccessPut202 {
  /** Put true Boolean value in request returns 202 (Accepted) */
  put(
    options?: HttpSuccessPut202Parameters,
  ): StreamableMethod<
    HttpSuccessPut202202Response | HttpSuccessPut202DefaultResponse
  >;
  /** Patch true Boolean value in request returns 202 */
  patch(
    options?: HttpSuccessPatch202Parameters,
  ): StreamableMethod<
    HttpSuccessPatch202202Response | HttpSuccessPatch202DefaultResponse
  >;
  /** Post true Boolean value in request returns 202 (Accepted) */
  post(
    options?: HttpSuccessPost202Parameters,
  ): StreamableMethod<
    HttpSuccessPost202202Response | HttpSuccessPost202DefaultResponse
  >;
  /** Delete true Boolean value in request returns 202 (accepted) */
  delete(
    options?: HttpSuccessDelete202Parameters,
  ): StreamableMethod<
    HttpSuccessDelete202202Response | HttpSuccessDelete202DefaultResponse
  >;
}

export interface HttpSuccessHead204 {
  /** Return 204 status code if successful */
  head(
    options?: HttpSuccessHead204Parameters,
  ): StreamableMethod<
    HttpSuccessHead204204Response | HttpSuccessHead204DefaultResponse
  >;
  /** Put true Boolean value in request returns 204 (no content) */
  put(
    options?: HttpSuccessPut204Parameters,
  ): StreamableMethod<
    HttpSuccessPut204204Response | HttpSuccessPut204DefaultResponse
  >;
  /** Patch true Boolean value in request returns 204 (no content) */
  patch(
    options?: HttpSuccessPatch204Parameters,
  ): StreamableMethod<
    HttpSuccessPatch204204Response | HttpSuccessPatch204DefaultResponse
  >;
  /** Post true Boolean value in request returns 204 (no content) */
  post(
    options?: HttpSuccessPost204Parameters,
  ): StreamableMethod<
    HttpSuccessPost204204Response | HttpSuccessPost204DefaultResponse
  >;
  /** Delete true Boolean value in request returns 204 (no content) */
  delete(
    options?: HttpSuccessDelete204Parameters,
  ): StreamableMethod<
    HttpSuccessDelete204204Response | HttpSuccessDelete204DefaultResponse
  >;
}

export interface HttpSuccessHead404 {
  /** Return 404 status code */
  head(
    options?: HttpSuccessHead404Parameters,
  ): StreamableMethod<
    | HttpSuccessHead404204Response
    | HttpSuccessHead404404Response
    | HttpSuccessHead404DefaultResponse
  >;
}

export interface HttpRedirectsHead300 {
  /** Return 300 status code and redirect to /http/success/200 */
  head(
    options?: HttpRedirectsHead300Parameters,
  ): StreamableMethod<
    | HttpRedirectsHead300200Response
    | HttpRedirectsHead300300Response
    | HttpRedirectsHead300DefaultResponse
  >;
  /** Return 300 status code and redirect to /http/success/200 */
  get(
    options?: HttpRedirectsGet300Parameters,
  ): StreamableMethod<
    | HttpRedirectsGet300200Response
    | HttpRedirectsGet300300Response
    | HttpRedirectsGet300DefaultResponse
  >;
}

export interface HttpRedirectsHead301 {
  /** Return 301 status code and redirect to /http/success/200 */
  head(
    options?: HttpRedirectsHead301Parameters,
  ): StreamableMethod<
    | HttpRedirectsHead301200Response
    | HttpRedirectsHead301301Response
    | HttpRedirectsHead301DefaultResponse
  >;
  /** Return 301 status code and redirect to /http/success/200 */
  get(
    options?: HttpRedirectsGet301Parameters,
  ): StreamableMethod<
    | HttpRedirectsGet301200Response
    | HttpRedirectsGet301301Response
    | HttpRedirectsGet301DefaultResponse
  >;
  /** Put true Boolean value in request returns 301.  This request should not be automatically redirected, but should return the received 301 to the caller for evaluation */
  put(
    options?: HttpRedirectsPut301Parameters,
  ): StreamableMethod<
    HttpRedirectsPut301301Response | HttpRedirectsPut301DefaultResponse
  >;
}

export interface HttpRedirectsHead302 {
  /** Return 302 status code and redirect to /http/success/200 */
  head(
    options?: HttpRedirectsHead302Parameters,
  ): StreamableMethod<
    | HttpRedirectsHead302200Response
    | HttpRedirectsHead302302Response
    | HttpRedirectsHead302DefaultResponse
  >;
  /** Return 302 status code and redirect to /http/success/200 */
  get(
    options?: HttpRedirectsGet302Parameters,
  ): StreamableMethod<
    | HttpRedirectsGet302200Response
    | HttpRedirectsGet302302Response
    | HttpRedirectsGet302DefaultResponse
  >;
  /** Patch true Boolean value in request returns 302.  This request should not be automatically redirected, but should return the received 302 to the caller for evaluation */
  patch(
    options?: HttpRedirectsPatch302Parameters,
  ): StreamableMethod<
    HttpRedirectsPatch302302Response | HttpRedirectsPatch302DefaultResponse
  >;
}

export interface HttpRedirectsPost303 {
  /** Post true Boolean value in request returns 303.  This request should be automatically redirected usign a get, ultimately returning a 200 status code */
  post(
    options?: HttpRedirectsPost303Parameters,
  ): StreamableMethod<
    | HttpRedirectsPost303200Response
    | HttpRedirectsPost303303Response
    | HttpRedirectsPost303DefaultResponse
  >;
}

export interface HttpRedirectsHead307 {
  /** Redirect with 307, resulting in a 200 success */
  head(
    options?: HttpRedirectsHead307Parameters,
  ): StreamableMethod<
    | HttpRedirectsHead307200Response
    | HttpRedirectsHead307307Response
    | HttpRedirectsHead307DefaultResponse
  >;
  /** Redirect get with 307, resulting in a 200 success */
  get(
    options?: HttpRedirectsGet307Parameters,
  ): StreamableMethod<
    | HttpRedirectsGet307200Response
    | HttpRedirectsGet307307Response
    | HttpRedirectsGet307DefaultResponse
  >;
  /** options redirected with 307, resulting in a 200 after redirect */
  options(
    options?: HttpRedirectsOptions307Parameters,
  ): StreamableMethod<
    | HttpRedirectsOptions307200Response
    | HttpRedirectsOptions307307Response
    | HttpRedirectsOptions307DefaultResponse
  >;
  /** Put redirected with 307, resulting in a 200 after redirect */
  put(
    options?: HttpRedirectsPut307Parameters,
  ): StreamableMethod<
    | HttpRedirectsPut307200Response
    | HttpRedirectsPut307307Response
    | HttpRedirectsPut307DefaultResponse
  >;
  /** Patch redirected with 307, resulting in a 200 after redirect */
  patch(
    options?: HttpRedirectsPatch307Parameters,
  ): StreamableMethod<
    | HttpRedirectsPatch307200Response
    | HttpRedirectsPatch307307Response
    | HttpRedirectsPatch307DefaultResponse
  >;
  /** Post redirected with 307, resulting in a 200 after redirect */
  post(
    options?: HttpRedirectsPost307Parameters,
  ): StreamableMethod<
    | HttpRedirectsPost307200Response
    | HttpRedirectsPost307307Response
    | HttpRedirectsPost307DefaultResponse
  >;
  /** Delete redirected with 307, resulting in a 200 after redirect */
  delete(
    options?: HttpRedirectsDelete307Parameters,
  ): StreamableMethod<
    | HttpRedirectsDelete307200Response
    | HttpRedirectsDelete307307Response
    | HttpRedirectsDelete307DefaultResponse
  >;
}

export interface HttpClientFailureHead400 {
  /** Return 400 status code - should be represented in the client as an error */
  head(
    options?: HttpClientFailureHead400Parameters,
  ): StreamableMethod<HttpClientFailureHead400DefaultResponse>;
  /** Return 400 status code - should be represented in the client as an error */
  get(
    options?: HttpClientFailureGet400Parameters,
  ): StreamableMethod<HttpClientFailureGet400DefaultResponse>;
  /** Return 400 status code - should be represented in the client as an error */
  options(
    options?: HttpClientFailureOptions400Parameters,
  ): StreamableMethod<HttpClientFailureOptions400DefaultResponse>;
  /** Return 400 status code - should be represented in the client as an error */
  put(
    options?: HttpClientFailurePut400Parameters,
  ): StreamableMethod<HttpClientFailurePut400DefaultResponse>;
  /** Return 400 status code - should be represented in the client as an error */
  patch(
    options?: HttpClientFailurePatch400Parameters,
  ): StreamableMethod<HttpClientFailurePatch400DefaultResponse>;
  /** Return 400 status code - should be represented in the client as an error */
  post(
    options?: HttpClientFailurePost400Parameters,
  ): StreamableMethod<HttpClientFailurePost400DefaultResponse>;
  /** Return 400 status code - should be represented in the client as an error */
  delete(
    options?: HttpClientFailureDelete400Parameters,
  ): StreamableMethod<HttpClientFailureDelete400DefaultResponse>;
}

export interface HttpClientFailureHead401 {
  /** Return 401 status code - should be represented in the client as an error */
  head(
    options?: HttpClientFailureHead401Parameters,
  ): StreamableMethod<HttpClientFailureHead401DefaultResponse>;
}

export interface HttpClientFailureGet402 {
  /** Return 402 status code - should be represented in the client as an error */
  get(
    options?: HttpClientFailureGet402Parameters,
  ): StreamableMethod<HttpClientFailureGet402DefaultResponse>;
}

export interface HttpClientFailureOptions403 {
  /** Return 403 status code - should be represented in the client as an error */
  options(
    options?: HttpClientFailureOptions403Parameters,
  ): StreamableMethod<HttpClientFailureOptions403DefaultResponse>;
  /** Return 403 status code - should be represented in the client as an error */
  get(
    options?: HttpClientFailureGet403Parameters,
  ): StreamableMethod<HttpClientFailureGet403DefaultResponse>;
}

export interface HttpClientFailurePut404 {
  /** Return 404 status code - should be represented in the client as an error */
  put(
    options?: HttpClientFailurePut404Parameters,
  ): StreamableMethod<HttpClientFailurePut404DefaultResponse>;
}

export interface HttpClientFailurePatch405 {
  /** Return 405 status code - should be represented in the client as an error */
  patch(
    options?: HttpClientFailurePatch405Parameters,
  ): StreamableMethod<HttpClientFailurePatch405DefaultResponse>;
}

export interface HttpClientFailurePost406 {
  /** Return 406 status code - should be represented in the client as an error */
  post(
    options?: HttpClientFailurePost406Parameters,
  ): StreamableMethod<HttpClientFailurePost406DefaultResponse>;
}

export interface HttpClientFailureDelete407 {
  /** Return 407 status code - should be represented in the client as an error */
  delete(
    options?: HttpClientFailureDelete407Parameters,
  ): StreamableMethod<HttpClientFailureDelete407DefaultResponse>;
}

export interface HttpClientFailurePut409 {
  /** Return 409 status code - should be represented in the client as an error */
  put(
    options?: HttpClientFailurePut409Parameters,
  ): StreamableMethod<HttpClientFailurePut409DefaultResponse>;
}

export interface HttpClientFailureHead410 {
  /** Return 410 status code - should be represented in the client as an error */
  head(
    options?: HttpClientFailureHead410Parameters,
  ): StreamableMethod<HttpClientFailureHead410DefaultResponse>;
}

export interface HttpClientFailureGet411 {
  /** Return 411 status code - should be represented in the client as an error */
  get(
    options?: HttpClientFailureGet411Parameters,
  ): StreamableMethod<HttpClientFailureGet411DefaultResponse>;
}

export interface HttpClientFailureOptions412 {
  /** Return 412 status code - should be represented in the client as an error */
  options(
    options?: HttpClientFailureOptions412Parameters,
  ): StreamableMethod<HttpClientFailureOptions412DefaultResponse>;
  /** Return 412 status code - should be represented in the client as an error */
  get(
    options?: HttpClientFailureGet412Parameters,
  ): StreamableMethod<HttpClientFailureGet412DefaultResponse>;
}

export interface HttpClientFailurePut413 {
  /** Return 413 status code - should be represented in the client as an error */
  put(
    options?: HttpClientFailurePut413Parameters,
  ): StreamableMethod<HttpClientFailurePut413DefaultResponse>;
}

export interface HttpClientFailurePatch414 {
  /** Return 414 status code - should be represented in the client as an error */
  patch(
    options?: HttpClientFailurePatch414Parameters,
  ): StreamableMethod<HttpClientFailurePatch414DefaultResponse>;
}

export interface HttpClientFailurePost415 {
  /** Return 415 status code - should be represented in the client as an error */
  post(
    options?: HttpClientFailurePost415Parameters,
  ): StreamableMethod<HttpClientFailurePost415DefaultResponse>;
}

export interface HttpClientFailureGet416 {
  /** Return 416 status code - should be represented in the client as an error */
  get(
    options?: HttpClientFailureGet416Parameters,
  ): StreamableMethod<HttpClientFailureGet416DefaultResponse>;
}

export interface HttpClientFailureDelete417 {
  /** Return 417 status code - should be represented in the client as an error */
  delete(
    options?: HttpClientFailureDelete417Parameters,
  ): StreamableMethod<HttpClientFailureDelete417DefaultResponse>;
}

export interface HttpClientFailureHead429 {
  /** Return 429 status code - should be represented in the client as an error */
  head(
    options?: HttpClientFailureHead429Parameters,
  ): StreamableMethod<HttpClientFailureHead429DefaultResponse>;
}

export interface HttpServerFailureHead501 {
  /** Return 501 status code - should be represented in the client as an error */
  head(
    options?: HttpServerFailureHead501Parameters,
  ): StreamableMethod<HttpServerFailureHead501DefaultResponse>;
  /** Return 501 status code - should be represented in the client as an error */
  get(
    options?: HttpServerFailureGet501Parameters,
  ): StreamableMethod<HttpServerFailureGet501DefaultResponse>;
}

export interface HttpServerFailurePost505 {
  /** Return 505 status code - should be represented in the client as an error */
  post(
    options?: HttpServerFailurePost505Parameters,
  ): StreamableMethod<HttpServerFailurePost505DefaultResponse>;
  /** Return 505 status code - should be represented in the client as an error */
  delete(
    options?: HttpServerFailureDelete505Parameters,
  ): StreamableMethod<HttpServerFailureDelete505DefaultResponse>;
}

export interface HttpRetryHead408 {
  /** Return 408 status code, then 200 after retry */
  head(
    options?: HttpRetryHead408Parameters,
  ): StreamableMethod<
    HttpRetryHead408200Response | HttpRetryHead408DefaultResponse
  >;
}

export interface HttpRetryPut500 {
  /** Return 500 status code, then 200 after retry */
  put(
    options?: HttpRetryPut500Parameters,
  ): StreamableMethod<
    HttpRetryPut500200Response | HttpRetryPut500DefaultResponse
  >;
  /** Return 500 status code, then 200 after retry */
  patch(
    options?: HttpRetryPatch500Parameters,
  ): StreamableMethod<
    HttpRetryPatch500200Response | HttpRetryPatch500DefaultResponse
  >;
}

export interface HttpRetryGet502 {
  /** Return 502 status code, then 200 after retry */
  get(
    options?: HttpRetryGet502Parameters,
  ): StreamableMethod<
    HttpRetryGet502200Response | HttpRetryGet502DefaultResponse
  >;
  /** Return 502 status code, then 200 after retry */
  options(
    options?: HttpRetryOptions502Parameters,
  ): StreamableMethod<
    HttpRetryOptions502200Response | HttpRetryOptions502DefaultResponse
  >;
}

export interface HttpRetryPost503 {
  /** Return 503 status code, then 200 after retry */
  post(
    options?: HttpRetryPost503Parameters,
  ): StreamableMethod<
    HttpRetryPost503200Response | HttpRetryPost503DefaultResponse
  >;
  /** Return 503 status code, then 200 after retry */
  delete(
    options?: HttpRetryDelete503Parameters,
  ): StreamableMethod<
    HttpRetryDelete503200Response | HttpRetryDelete503DefaultResponse
  >;
}

export interface HttpRetryPut504 {
  /** Return 504 status code, then 200 after retry */
  put(
    options?: HttpRetryPut504Parameters,
  ): StreamableMethod<
    HttpRetryPut504200Response | HttpRetryPut504DefaultResponse
  >;
  /** Return 504 status code, then 200 after retry */
  patch(
    options?: HttpRetryPatch504Parameters,
  ): StreamableMethod<
    HttpRetryPatch504200Response | HttpRetryPatch504DefaultResponse
  >;
}

export interface MultipleResponsesGet200Model204NoModelDefaultError200Valid {
  /** Send a 200 response with valid payload: {'statusCode': '200'} */
  get(
    options?: MultipleResponsesGet200Model204NoModelDefaultError200ValidParameters,
  ): StreamableMethod<
    | MultipleResponsesGet200Model204NoModelDefaultError200Valid200Response
    | MultipleResponsesGet200Model204NoModelDefaultError200Valid204Response
    | MultipleResponsesGet200Model204NoModelDefaultError200ValidDefaultResponse
  >;
}

export interface MultipleResponsesGet200Model204NoModelDefaultError204Valid {
  /** Send a 204 response with no payload */
  get(
    options?: MultipleResponsesGet200Model204NoModelDefaultError204ValidParameters,
  ): StreamableMethod<
    | MultipleResponsesGet200Model204NoModelDefaultError204Valid200Response
    | MultipleResponsesGet200Model204NoModelDefaultError204Valid204Response
    | MultipleResponsesGet200Model204NoModelDefaultError204ValidDefaultResponse
  >;
}

export interface MultipleResponsesGet200Model204NoModelDefaultError201Invalid {
  /** Send a 201 response with valid payload: {'statusCode': '201'} */
  get(
    options?: MultipleResponsesGet200Model204NoModelDefaultError201InvalidParameters,
  ): StreamableMethod<
    | MultipleResponsesGet200Model204NoModelDefaultError201Invalid200Response
    | MultipleResponsesGet200Model204NoModelDefaultError201Invalid204Response
    | MultipleResponsesGet200Model204NoModelDefaultError201InvalidDefaultResponse
  >;
}

export interface MultipleResponsesGet200Model204NoModelDefaultError202None {
  /** Send a 202 response with no payload: */
  get(
    options?: MultipleResponsesGet200Model204NoModelDefaultError202NoneParameters,
  ): StreamableMethod<
    | MultipleResponsesGet200Model204NoModelDefaultError202None200Response
    | MultipleResponsesGet200Model204NoModelDefaultError202None204Response
    | MultipleResponsesGet200Model204NoModelDefaultError202NoneDefaultResponse
  >;
}

export interface MultipleResponsesGet200Model204NoModelDefaultError400Valid {
  /** Send a 400 response with valid error payload: {'status': 400, 'message': 'client error'} */
  get(
    options?: MultipleResponsesGet200Model204NoModelDefaultError400ValidParameters,
  ): StreamableMethod<
    | MultipleResponsesGet200Model204NoModelDefaultError400Valid200Response
    | MultipleResponsesGet200Model204NoModelDefaultError400Valid204Response
    | MultipleResponsesGet200Model204NoModelDefaultError400ValidDefaultResponse
  >;
}

export interface MultipleResponsesGet200Model201ModelDefaultError200Valid {
  /** Send a 200 response with valid payload: {'statusCode': '200'} */
  get(
    options?: MultipleResponsesGet200Model201ModelDefaultError200ValidParameters,
  ): StreamableMethod<
    | MultipleResponsesGet200Model201ModelDefaultError200Valid200Response
    | MultipleResponsesGet200Model201ModelDefaultError200Valid201Response
    | MultipleResponsesGet200Model201ModelDefaultError200ValidDefaultResponse
  >;
}

export interface MultipleResponsesGet200Model201ModelDefaultError201Valid {
  /** Send a 201 response with valid payload: {'statusCode': '201', 'textStatusCode': 'Created'} */
  get(
    options?: MultipleResponsesGet200Model201ModelDefaultError201ValidParameters,
  ): StreamableMethod<
    | MultipleResponsesGet200Model201ModelDefaultError201Valid200Response
    | MultipleResponsesGet200Model201ModelDefaultError201Valid201Response
    | MultipleResponsesGet200Model201ModelDefaultError201ValidDefaultResponse
  >;
}

export interface MultipleResponsesGet200Model201ModelDefaultError400Valid {
  /** Send a 400 response with valid payload: {'code': '400', 'message': 'client error'} */
  get(
    options?: MultipleResponsesGet200Model201ModelDefaultError400ValidParameters,
  ): StreamableMethod<
    | MultipleResponsesGet200Model201ModelDefaultError400Valid200Response
    | MultipleResponsesGet200Model201ModelDefaultError400Valid201Response
    | MultipleResponsesGet200Model201ModelDefaultError400ValidDefaultResponse
  >;
}

export interface MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200Valid {
  /** Send a 200 response with valid payload: {'statusCode': '200'} */
  get(
    options?: MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200ValidParameters,
  ): StreamableMethod<
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200Valid200Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200Valid201Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200Valid404Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200ValidDefaultResponse
  >;
}

export interface MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201Valid {
  /** Send a 200 response with valid payload: {'httpCode': '201'} */
  get(
    options?: MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201ValidParameters,
  ): StreamableMethod<
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201Valid200Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201Valid201Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201Valid404Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201ValidDefaultResponse
  >;
}

export interface MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404Valid {
  /** Send a 200 response with valid payload: {'httpStatusCode': '404'} */
  get(
    options?: MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404ValidParameters,
  ): StreamableMethod<
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404Valid200Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404Valid201Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404Valid404Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404ValidDefaultResponse
  >;
}

export interface MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400Valid {
  /** Send a 400 response with valid payload: {'code': '400', 'message': 'client error'} */
  get(
    options?: MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400ValidParameters,
  ): StreamableMethod<
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400Valid200Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400Valid201Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400Valid404Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400ValidDefaultResponse
  >;
}

export interface MultipleResponsesGet202None204NoneDefaultError202None {
  /** Send a 202 response with no payload */
  get(
    options?: MultipleResponsesGet202None204NoneDefaultError202NoneParameters,
  ): StreamableMethod<
    | MultipleResponsesGet202None204NoneDefaultError202None202Response
    | MultipleResponsesGet202None204NoneDefaultError202None204Response
    | MultipleResponsesGet202None204NoneDefaultError202NoneDefaultResponse
  >;
}

export interface MultipleResponsesGet202None204NoneDefaultError204None {
  /** Send a 204 response with no payload */
  get(
    options?: MultipleResponsesGet202None204NoneDefaultError204NoneParameters,
  ): StreamableMethod<
    | MultipleResponsesGet202None204NoneDefaultError204None202Response
    | MultipleResponsesGet202None204NoneDefaultError204None204Response
    | MultipleResponsesGet202None204NoneDefaultError204NoneDefaultResponse
  >;
}

export interface MultipleResponsesGet202None204NoneDefaultError400Valid {
  /** Send a 400 response with valid payload: {'code': '400', 'message': 'client error'} */
  get(
    options?: MultipleResponsesGet202None204NoneDefaultError400ValidParameters,
  ): StreamableMethod<
    | MultipleResponsesGet202None204NoneDefaultError400Valid202Response
    | MultipleResponsesGet202None204NoneDefaultError400Valid204Response
    | MultipleResponsesGet202None204NoneDefaultError400ValidDefaultResponse
  >;
}

export interface MultipleResponsesGet202None204NoneDefaultNone202Invalid {
  /** Send a 202 response with an unexpected payload {'property': 'value'} */
  get(
    options?: MultipleResponsesGet202None204NoneDefaultNone202InvalidParameters,
  ): StreamableMethod<
    | MultipleResponsesGet202None204NoneDefaultNone202Invalid202Response
    | MultipleResponsesGet202None204NoneDefaultNone202Invalid204Response
    | MultipleResponsesGet202None204NoneDefaultNone202InvalidDefaultResponse
  >;
}

export interface MultipleResponsesGet202None204NoneDefaultNone204None {
  /** Send a 204 response with no payload */
  get(
    options?: MultipleResponsesGet202None204NoneDefaultNone204NoneParameters,
  ): StreamableMethod<
    | MultipleResponsesGet202None204NoneDefaultNone204None202Response
    | MultipleResponsesGet202None204NoneDefaultNone204None204Response
    | MultipleResponsesGet202None204NoneDefaultNone204NoneDefaultResponse
  >;
}

export interface MultipleResponsesGet202None204NoneDefaultNone400None {
  /** Send a 400 response with no payload */
  get(
    options?: MultipleResponsesGet202None204NoneDefaultNone400NoneParameters,
  ): StreamableMethod<
    | MultipleResponsesGet202None204NoneDefaultNone400None202Response
    | MultipleResponsesGet202None204NoneDefaultNone400None204Response
    | MultipleResponsesGet202None204NoneDefaultNone400NoneDefaultResponse
  >;
}

export interface MultipleResponsesGet202None204NoneDefaultNone400Invalid {
  /** Send a 400 response with an unexpected payload {'property': 'value'} */
  get(
    options?: MultipleResponsesGet202None204NoneDefaultNone400InvalidParameters,
  ): StreamableMethod<
    | MultipleResponsesGet202None204NoneDefaultNone400Invalid202Response
    | MultipleResponsesGet202None204NoneDefaultNone400Invalid204Response
    | MultipleResponsesGet202None204NoneDefaultNone400InvalidDefaultResponse
  >;
}

export interface MultipleResponsesGetDefaultModelA200Valid {
  /** Send a 200 response with valid payload: {'statusCode': '200'} */
  get(
    options?: MultipleResponsesGetDefaultModelA200ValidParameters,
  ): StreamableMethod<MultipleResponsesGetDefaultModelA200Valid200Response>;
}

export interface MultipleResponsesGetDefaultModelA200None {
  /** Send a 200 response with no payload */
  get(
    options?: MultipleResponsesGetDefaultModelA200NoneParameters,
  ): StreamableMethod<MultipleResponsesGetDefaultModelA200None200Response>;
}

export interface MultipleResponsesGetDefaultModelA400Valid {
  /** Send a 400 response with valid payload: {'statusCode': '400'} */
  get(
    options?: MultipleResponsesGetDefaultModelA400ValidParameters,
  ): StreamableMethod<
    | MultipleResponsesGetDefaultModelA400Valid200Response
    | MultipleResponsesGetDefaultModelA400ValidDefaultResponse
  >;
}

export interface MultipleResponsesGetDefaultModelA400None {
  /** Send a 400 response with no payload */
  get(
    options?: MultipleResponsesGetDefaultModelA400NoneParameters,
  ): StreamableMethod<
    | MultipleResponsesGetDefaultModelA400None200Response
    | MultipleResponsesGetDefaultModelA400NoneDefaultResponse
  >;
}

export interface MultipleResponsesGetDefaultNone200Invalid {
  /** Send a 200 response with invalid payload: {'statusCode': '200'} */
  get(
    options?: MultipleResponsesGetDefaultNone200InvalidParameters,
  ): StreamableMethod<MultipleResponsesGetDefaultNone200Invalid200Response>;
}

export interface MultipleResponsesGetDefaultNone200None {
  /** Send a 200 response with no payload */
  get(
    options?: MultipleResponsesGetDefaultNone200NoneParameters,
  ): StreamableMethod<MultipleResponsesGetDefaultNone200None200Response>;
}

export interface MultipleResponsesGetDefaultNone400Invalid {
  /** Send a 400 response with valid payload: {'statusCode': '400'} */
  get(
    options?: MultipleResponsesGetDefaultNone400InvalidParameters,
  ): StreamableMethod<
    | MultipleResponsesGetDefaultNone400Invalid200Response
    | MultipleResponsesGetDefaultNone400InvalidDefaultResponse
  >;
}

export interface MultipleResponsesGetDefaultNone400None {
  /** Send a 400 response with no payload */
  get(
    options?: MultipleResponsesGetDefaultNone400NoneParameters,
  ): StreamableMethod<
    | MultipleResponsesGetDefaultNone400None200Response
    | MultipleResponsesGetDefaultNone400NoneDefaultResponse
  >;
}

export interface MultipleResponsesGet200ModelA200None {
  /** Send a 200 response with no payload, when a payload is expected - client should return a null object of thde type for model A */
  get(
    options?: MultipleResponsesGet200ModelA200NoneParameters,
  ): StreamableMethod<MultipleResponsesGet200ModelA200None200Response>;
}

export interface MultipleResponsesGet200ModelA200Valid {
  /** Send a 200 response with payload {'statusCode': '200'} */
  get(
    options?: MultipleResponsesGet200ModelA200ValidParameters,
  ): StreamableMethod<MultipleResponsesGet200ModelA200Valid200Response>;
}

export interface MultipleResponsesGet200ModelA200Invalid {
  /** Send a 200 response with invalid payload {'statusCodeInvalid': '200'} */
  get(
    options?: MultipleResponsesGet200ModelA200InvalidParameters,
  ): StreamableMethod<MultipleResponsesGet200ModelA200Invalid200Response>;
}

export interface MultipleResponsesGet200ModelA400None {
  /** Send a 400 response with no payload client should treat as an http error with no error model */
  get(
    options?: MultipleResponsesGet200ModelA400NoneParameters,
  ): StreamableMethod<MultipleResponsesGet200ModelA400None200Response>;
}

export interface MultipleResponsesGet200ModelA400Valid {
  /** Send a 200 response with payload {'statusCode': '400'} */
  get(
    options?: MultipleResponsesGet200ModelA400ValidParameters,
  ): StreamableMethod<MultipleResponsesGet200ModelA400Valid200Response>;
}

export interface MultipleResponsesGet200ModelA400Invalid {
  /** Send a 200 response with invalid payload {'statusCodeInvalid': '400'} */
  get(
    options?: MultipleResponsesGet200ModelA400InvalidParameters,
  ): StreamableMethod<MultipleResponsesGet200ModelA400Invalid200Response>;
}

export interface MultipleResponsesGet200ModelA202Valid {
  /** Send a 202 response with payload {'statusCode': '202'} */
  get(
    options?: MultipleResponsesGet200ModelA202ValidParameters,
  ): StreamableMethod<MultipleResponsesGet200ModelA202Valid200Response>;
}

export interface Routes {
  /** Resource for '/http/failure/emptybody/error' has methods for the following verbs: get */
  (path: "/http/failure/emptybody/error"): HttpFailureGetEmptyError;
  /** Resource for '/http/failure/nomodel/error' has methods for the following verbs: get */
  (path: "/http/failure/nomodel/error"): HttpFailureGetNoModelError;
  /** Resource for '/http/failure/nomodel/empty' has methods for the following verbs: get */
  (path: "/http/failure/nomodel/empty"): HttpFailureGetNoModelEmpty;
  /** Resource for '/http/success/200' has methods for the following verbs: head, get, options, put, patch, post, delete */
  (path: "/http/success/200"): HttpSuccessHead200;
  /** Resource for '/http/success/201' has methods for the following verbs: put, post */
  (path: "/http/success/201"): HttpSuccessPut201;
  /** Resource for '/http/success/202' has methods for the following verbs: put, patch, post, delete */
  (path: "/http/success/202"): HttpSuccessPut202;
  /** Resource for '/http/success/204' has methods for the following verbs: head, put, patch, post, delete */
  (path: "/http/success/204"): HttpSuccessHead204;
  /** Resource for '/http/success/404' has methods for the following verbs: head */
  (path: "/http/success/404"): HttpSuccessHead404;
  /** Resource for '/http/redirect/300' has methods for the following verbs: head, get */
  (path: "/http/redirect/300"): HttpRedirectsHead300;
  /** Resource for '/http/redirect/301' has methods for the following verbs: head, get, put */
  (path: "/http/redirect/301"): HttpRedirectsHead301;
  /** Resource for '/http/redirect/302' has methods for the following verbs: head, get, patch */
  (path: "/http/redirect/302"): HttpRedirectsHead302;
  /** Resource for '/http/redirect/303' has methods for the following verbs: post */
  (path: "/http/redirect/303"): HttpRedirectsPost303;
  /** Resource for '/http/redirect/307' has methods for the following verbs: head, get, options, put, patch, post, delete */
  (path: "/http/redirect/307"): HttpRedirectsHead307;
  /** Resource for '/http/failure/client/400' has methods for the following verbs: head, get, options, put, patch, post, delete */
  (path: "/http/failure/client/400"): HttpClientFailureHead400;
  /** Resource for '/http/failure/client/401' has methods for the following verbs: head */
  (path: "/http/failure/client/401"): HttpClientFailureHead401;
  /** Resource for '/http/failure/client/402' has methods for the following verbs: get */
  (path: "/http/failure/client/402"): HttpClientFailureGet402;
  /** Resource for '/http/failure/client/403' has methods for the following verbs: options, get */
  (path: "/http/failure/client/403"): HttpClientFailureOptions403;
  /** Resource for '/http/failure/client/404' has methods for the following verbs: put */
  (path: "/http/failure/client/404"): HttpClientFailurePut404;
  /** Resource for '/http/failure/client/405' has methods for the following verbs: patch */
  (path: "/http/failure/client/405"): HttpClientFailurePatch405;
  /** Resource for '/http/failure/client/406' has methods for the following verbs: post */
  (path: "/http/failure/client/406"): HttpClientFailurePost406;
  /** Resource for '/http/failure/client/407' has methods for the following verbs: delete */
  (path: "/http/failure/client/407"): HttpClientFailureDelete407;
  /** Resource for '/http/failure/client/409' has methods for the following verbs: put */
  (path: "/http/failure/client/409"): HttpClientFailurePut409;
  /** Resource for '/http/failure/client/410' has methods for the following verbs: head */
  (path: "/http/failure/client/410"): HttpClientFailureHead410;
  /** Resource for '/http/failure/client/411' has methods for the following verbs: get */
  (path: "/http/failure/client/411"): HttpClientFailureGet411;
  /** Resource for '/http/failure/client/412' has methods for the following verbs: options, get */
  (path: "/http/failure/client/412"): HttpClientFailureOptions412;
  /** Resource for '/http/failure/client/413' has methods for the following verbs: put */
  (path: "/http/failure/client/413"): HttpClientFailurePut413;
  /** Resource for '/http/failure/client/414' has methods for the following verbs: patch */
  (path: "/http/failure/client/414"): HttpClientFailurePatch414;
  /** Resource for '/http/failure/client/415' has methods for the following verbs: post */
  (path: "/http/failure/client/415"): HttpClientFailurePost415;
  /** Resource for '/http/failure/client/416' has methods for the following verbs: get */
  (path: "/http/failure/client/416"): HttpClientFailureGet416;
  /** Resource for '/http/failure/client/417' has methods for the following verbs: delete */
  (path: "/http/failure/client/417"): HttpClientFailureDelete417;
  /** Resource for '/http/failure/client/429' has methods for the following verbs: head */
  (path: "/http/failure/client/429"): HttpClientFailureHead429;
  /** Resource for '/http/failure/server/501' has methods for the following verbs: head, get */
  (path: "/http/failure/server/501"): HttpServerFailureHead501;
  /** Resource for '/http/failure/server/505' has methods for the following verbs: post, delete */
  (path: "/http/failure/server/505"): HttpServerFailurePost505;
  /** Resource for '/http/retry/408' has methods for the following verbs: head */
  (path: "/http/retry/408"): HttpRetryHead408;
  /** Resource for '/http/retry/500' has methods for the following verbs: put, patch */
  (path: "/http/retry/500"): HttpRetryPut500;
  /** Resource for '/http/retry/502' has methods for the following verbs: get, options */
  (path: "/http/retry/502"): HttpRetryGet502;
  /** Resource for '/http/retry/503' has methods for the following verbs: post, delete */
  (path: "/http/retry/503"): HttpRetryPost503;
  /** Resource for '/http/retry/504' has methods for the following verbs: put, patch */
  (path: "/http/retry/504"): HttpRetryPut504;
  /** Resource for '/http/payloads/200/A/204/none/default/Error/response/200/valid' has methods for the following verbs: get */
  (
    path: "/http/payloads/200/A/204/none/default/Error/response/200/valid",
  ): MultipleResponsesGet200Model204NoModelDefaultError200Valid;
  /** Resource for '/http/payloads/200/A/204/none/default/Error/response/204/none' has methods for the following verbs: get */
  (
    path: "/http/payloads/200/A/204/none/default/Error/response/204/none",
  ): MultipleResponsesGet200Model204NoModelDefaultError204Valid;
  /** Resource for '/http/payloads/200/A/204/none/default/Error/response/201/valid' has methods for the following verbs: get */
  (
    path: "/http/payloads/200/A/204/none/default/Error/response/201/valid",
  ): MultipleResponsesGet200Model204NoModelDefaultError201Invalid;
  /** Resource for '/http/payloads/200/A/204/none/default/Error/response/202/none' has methods for the following verbs: get */
  (
    path: "/http/payloads/200/A/204/none/default/Error/response/202/none",
  ): MultipleResponsesGet200Model204NoModelDefaultError202None;
  /** Resource for '/http/payloads/200/A/204/none/default/Error/response/400/valid' has methods for the following verbs: get */
  (
    path: "/http/payloads/200/A/204/none/default/Error/response/400/valid",
  ): MultipleResponsesGet200Model204NoModelDefaultError400Valid;
  /** Resource for '/http/payloads/200/A/201/B/default/Error/response/200/valid' has methods for the following verbs: get */
  (
    path: "/http/payloads/200/A/201/B/default/Error/response/200/valid",
  ): MultipleResponsesGet200Model201ModelDefaultError200Valid;
  /** Resource for '/http/payloads/200/A/201/B/default/Error/response/201/valid' has methods for the following verbs: get */
  (
    path: "/http/payloads/200/A/201/B/default/Error/response/201/valid",
  ): MultipleResponsesGet200Model201ModelDefaultError201Valid;
  /** Resource for '/http/payloads/200/A/201/B/default/Error/response/400/valid' has methods for the following verbs: get */
  (
    path: "/http/payloads/200/A/201/B/default/Error/response/400/valid",
  ): MultipleResponsesGet200Model201ModelDefaultError400Valid;
  /** Resource for '/http/payloads/200/A/201/C/404/D/default/Error/response/200/valid' has methods for the following verbs: get */
  (
    path: "/http/payloads/200/A/201/C/404/D/default/Error/response/200/valid",
  ): MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200Valid;
  /** Resource for '/http/payloads/200/A/201/C/404/D/default/Error/response/201/valid' has methods for the following verbs: get */
  (
    path: "/http/payloads/200/A/201/C/404/D/default/Error/response/201/valid",
  ): MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201Valid;
  /** Resource for '/http/payloads/200/A/201/C/404/D/default/Error/response/404/valid' has methods for the following verbs: get */
  (
    path: "/http/payloads/200/A/201/C/404/D/default/Error/response/404/valid",
  ): MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404Valid;
  /** Resource for '/http/payloads/200/A/201/C/404/D/default/Error/response/400/valid' has methods for the following verbs: get */
  (
    path: "/http/payloads/200/A/201/C/404/D/default/Error/response/400/valid",
  ): MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400Valid;
  /** Resource for '/http/payloads/202/none/204/none/default/Error/response/202/none' has methods for the following verbs: get */
  (
    path: "/http/payloads/202/none/204/none/default/Error/response/202/none",
  ): MultipleResponsesGet202None204NoneDefaultError202None;
  /** Resource for '/http/payloads/202/none/204/none/default/Error/response/204/none' has methods for the following verbs: get */
  (
    path: "/http/payloads/202/none/204/none/default/Error/response/204/none",
  ): MultipleResponsesGet202None204NoneDefaultError204None;
  /** Resource for '/http/payloads/202/none/204/none/default/Error/response/400/valid' has methods for the following verbs: get */
  (
    path: "/http/payloads/202/none/204/none/default/Error/response/400/valid",
  ): MultipleResponsesGet202None204NoneDefaultError400Valid;
  /** Resource for '/http/payloads/202/none/204/none/default/none/response/202/invalid' has methods for the following verbs: get */
  (
    path: "/http/payloads/202/none/204/none/default/none/response/202/invalid",
  ): MultipleResponsesGet202None204NoneDefaultNone202Invalid;
  /** Resource for '/http/payloads/202/none/204/none/default/none/response/204/none' has methods for the following verbs: get */
  (
    path: "/http/payloads/202/none/204/none/default/none/response/204/none",
  ): MultipleResponsesGet202None204NoneDefaultNone204None;
  /** Resource for '/http/payloads/202/none/204/none/default/none/response/400/none' has methods for the following verbs: get */
  (
    path: "/http/payloads/202/none/204/none/default/none/response/400/none",
  ): MultipleResponsesGet202None204NoneDefaultNone400None;
  /** Resource for '/http/payloads/202/none/204/none/default/none/response/400/invalid' has methods for the following verbs: get */
  (
    path: "/http/payloads/202/none/204/none/default/none/response/400/invalid",
  ): MultipleResponsesGet202None204NoneDefaultNone400Invalid;
  /** Resource for '/http/payloads/default/A/response/200/valid' has methods for the following verbs: get */
  (
    path: "/http/payloads/default/A/response/200/valid",
  ): MultipleResponsesGetDefaultModelA200Valid;
  /** Resource for '/http/payloads/default/A/response/200/none' has methods for the following verbs: get */
  (
    path: "/http/payloads/default/A/response/200/none",
  ): MultipleResponsesGetDefaultModelA200None;
  /** Resource for '/http/payloads/default/A/response/400/valid' has methods for the following verbs: get */
  (
    path: "/http/payloads/default/A/response/400/valid",
  ): MultipleResponsesGetDefaultModelA400Valid;
  /** Resource for '/http/payloads/default/A/response/400/none' has methods for the following verbs: get */
  (
    path: "/http/payloads/default/A/response/400/none",
  ): MultipleResponsesGetDefaultModelA400None;
  /** Resource for '/http/payloads/default/none/response/200/invalid' has methods for the following verbs: get */
  (
    path: "/http/payloads/default/none/response/200/invalid",
  ): MultipleResponsesGetDefaultNone200Invalid;
  /** Resource for '/http/payloads/default/none/response/200/none' has methods for the following verbs: get */
  (
    path: "/http/payloads/default/none/response/200/none",
  ): MultipleResponsesGetDefaultNone200None;
  /** Resource for '/http/payloads/default/none/response/400/invalid' has methods for the following verbs: get */
  (
    path: "/http/payloads/default/none/response/400/invalid",
  ): MultipleResponsesGetDefaultNone400Invalid;
  /** Resource for '/http/payloads/default/none/response/400/none' has methods for the following verbs: get */
  (
    path: "/http/payloads/default/none/response/400/none",
  ): MultipleResponsesGetDefaultNone400None;
  /** Resource for '/http/payloads/200/A/response/200/none' has methods for the following verbs: get */
  (
    path: "/http/payloads/200/A/response/200/none",
  ): MultipleResponsesGet200ModelA200None;
  /** Resource for '/http/payloads/200/A/response/200/valid' has methods for the following verbs: get */
  (
    path: "/http/payloads/200/A/response/200/valid",
  ): MultipleResponsesGet200ModelA200Valid;
  /** Resource for '/http/payloads/200/A/response/200/invalid' has methods for the following verbs: get */
  (
    path: "/http/payloads/200/A/response/200/invalid",
  ): MultipleResponsesGet200ModelA200Invalid;
  /** Resource for '/http/payloads/200/A/response/400/none' has methods for the following verbs: get */
  (
    path: "/http/payloads/200/A/response/400/none",
  ): MultipleResponsesGet200ModelA400None;
  /** Resource for '/http/payloads/200/A/response/400/valid' has methods for the following verbs: get */
  (
    path: "/http/payloads/200/A/response/400/valid",
  ): MultipleResponsesGet200ModelA400Valid;
  /** Resource for '/http/payloads/200/A/response/400/invalid' has methods for the following verbs: get */
  (
    path: "/http/payloads/200/A/response/400/invalid",
  ): MultipleResponsesGet200ModelA400Invalid;
  /** Resource for '/http/payloads/200/A/response/202/valid' has methods for the following verbs: get */
  (
    path: "/http/payloads/200/A/response/202/valid",
  ): MultipleResponsesGet200ModelA202Valid;
}

export type HttpInfrastructureRestClient = Client & {
  path: Routes;
  httpFailure: HttpFailureOperations;
  httpSuccess: HttpSuccessOperations;
  httpRedirects: HttpRedirectsOperations;
  httpClientFailure: HttpClientFailureOperations;
  httpServerFailure: HttpServerFailureOperations;
  httpRetry: HttpRetryOperations;
  multipleResponses: MultipleResponsesOperations;
};
