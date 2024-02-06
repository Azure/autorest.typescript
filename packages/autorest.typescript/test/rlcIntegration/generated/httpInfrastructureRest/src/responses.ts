// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";
import {
  ErrorModelOutput,
  MyExceptionOutput,
  BOutput,
  COutput,
  DOutput,
} from "./outputModels";

/** Get empty error form server */
export interface HttpFailureGetEmptyError200Response extends HttpResponse {
  status: "200";
  body: boolean;
}

/** Get empty error form server */
export interface HttpFailureGetEmptyErrorDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get empty error form server */
export interface HttpFailureGetNoModelError200Response extends HttpResponse {
  status: "200";
  body: boolean;
}

/** Get empty response from server */
export interface HttpFailureGetNoModelEmpty200Response extends HttpResponse {
  status: "200";
  body: boolean;
}

/** Return 200 status code if successful */
export interface HttpSuccessHead200200Response extends HttpResponse {
  status: "200";
}

/** Return 200 status code if successful */
export interface HttpSuccessHead200DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get 200 success */
export interface HttpSuccessGet200200Response extends HttpResponse {
  status: "200";
  body: boolean;
}

/** Get 200 success */
export interface HttpSuccessGet200DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Options 200 success */
export interface HttpSuccessOptions200200Response extends HttpResponse {
  status: "200";
  body: boolean;
}

/** Options 200 success */
export interface HttpSuccessOptions200DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put boolean value true returning 200 success */
export interface HttpSuccessPut200200Response extends HttpResponse {
  status: "200";
}

/** Put boolean value true returning 200 success */
export interface HttpSuccessPut200DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Patch true Boolean value in request returning 200 */
export interface HttpSuccessPatch200200Response extends HttpResponse {
  status: "200";
}

/** Patch true Boolean value in request returning 200 */
export interface HttpSuccessPatch200DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Post bollean value true in request that returns a 200 */
export interface HttpSuccessPost200200Response extends HttpResponse {
  status: "200";
}

/** Post bollean value true in request that returns a 200 */
export interface HttpSuccessPost200DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Delete simple boolean value true returns 200 */
export interface HttpSuccessDelete200200Response extends HttpResponse {
  status: "200";
}

/** Delete simple boolean value true returns 200 */
export interface HttpSuccessDelete200DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put true Boolean value in request returns 201 */
export interface HttpSuccessPut201201Response extends HttpResponse {
  status: "201";
}

/** Put true Boolean value in request returns 201 */
export interface HttpSuccessPut201DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Post true Boolean value in request returns 201 (Created) */
export interface HttpSuccessPost201201Response extends HttpResponse {
  status: "201";
}

/** Post true Boolean value in request returns 201 (Created) */
export interface HttpSuccessPost201DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put true Boolean value in request returns 202 (Accepted) */
export interface HttpSuccessPut202202Response extends HttpResponse {
  status: "202";
}

/** Put true Boolean value in request returns 202 (Accepted) */
export interface HttpSuccessPut202DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Patch true Boolean value in request returns 202 */
export interface HttpSuccessPatch202202Response extends HttpResponse {
  status: "202";
}

/** Patch true Boolean value in request returns 202 */
export interface HttpSuccessPatch202DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Post true Boolean value in request returns 202 (Accepted) */
export interface HttpSuccessPost202202Response extends HttpResponse {
  status: "202";
}

/** Post true Boolean value in request returns 202 (Accepted) */
export interface HttpSuccessPost202DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Delete true Boolean value in request returns 202 (accepted) */
export interface HttpSuccessDelete202202Response extends HttpResponse {
  status: "202";
}

/** Delete true Boolean value in request returns 202 (accepted) */
export interface HttpSuccessDelete202DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 204 status code if successful */
export interface HttpSuccessHead204204Response extends HttpResponse {
  status: "204";
}

/** Return 204 status code if successful */
export interface HttpSuccessHead204DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put true Boolean value in request returns 204 (no content) */
export interface HttpSuccessPut204204Response extends HttpResponse {
  status: "204";
}

/** Put true Boolean value in request returns 204 (no content) */
export interface HttpSuccessPut204DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Patch true Boolean value in request returns 204 (no content) */
export interface HttpSuccessPatch204204Response extends HttpResponse {
  status: "204";
}

/** Patch true Boolean value in request returns 204 (no content) */
export interface HttpSuccessPatch204DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Post true Boolean value in request returns 204 (no content) */
export interface HttpSuccessPost204204Response extends HttpResponse {
  status: "204";
}

/** Post true Boolean value in request returns 204 (no content) */
export interface HttpSuccessPost204DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Delete true Boolean value in request returns 204 (no content) */
export interface HttpSuccessDelete204204Response extends HttpResponse {
  status: "204";
}

/** Delete true Boolean value in request returns 204 (no content) */
export interface HttpSuccessDelete204DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 404 status code */
export interface HttpSuccessHead404204Response extends HttpResponse {
  status: "204";
}

/** Return 404 status code */
export interface HttpSuccessHead404404Response extends HttpResponse {
  status: "404";
}

/** Return 404 status code */
export interface HttpSuccessHead404DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 300 status code and redirect to /http/success/200 */
export interface HttpRedirectsHead300200Response extends HttpResponse {
  status: "200";
}

export interface HttpRedirectsHead300300Headers {
  /** The redirect location for this request */
  location?: "/http/success/head/200";
}

/** Return 300 status code and redirect to /http/success/200 */
export interface HttpRedirectsHead300300Response extends HttpResponse {
  status: "300";
  headers: RawHttpHeaders & HttpRedirectsHead300300Headers;
}

/** Return 300 status code and redirect to /http/success/200 */
export interface HttpRedirectsHead300DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 300 status code and redirect to /http/success/200 */
export interface HttpRedirectsGet300200Response extends HttpResponse {
  status: "200";
}

export interface HttpRedirectsGet300300Headers {
  /** The redirect location for this request */
  location?: "/http/success/get/200";
}

/** Return 300 status code and redirect to /http/success/200 */
export interface HttpRedirectsGet300300Response extends HttpResponse {
  status: "300";
  body: Array<string>;
  headers: RawHttpHeaders & HttpRedirectsGet300300Headers;
}

/** Return 300 status code and redirect to /http/success/200 */
export interface HttpRedirectsGet300DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 301 status code and redirect to /http/success/200 */
export interface HttpRedirectsHead301200Response extends HttpResponse {
  status: "200";
}

export interface HttpRedirectsHead301301Headers {
  /** The redirect location for this request */
  location?: "/http/success/head/200";
}

/** Return 301 status code and redirect to /http/success/200 */
export interface HttpRedirectsHead301301Response extends HttpResponse {
  status: "301";
  headers: RawHttpHeaders & HttpRedirectsHead301301Headers;
}

/** Return 301 status code and redirect to /http/success/200 */
export interface HttpRedirectsHead301DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 301 status code and redirect to /http/success/200 */
export interface HttpRedirectsGet301200Response extends HttpResponse {
  status: "200";
}

export interface HttpRedirectsGet301301Headers {
  /** The redirect location for this request */
  location?: "/http/success/get/200";
}

/** Return 301 status code and redirect to /http/success/200 */
export interface HttpRedirectsGet301301Response extends HttpResponse {
  status: "301";
  headers: RawHttpHeaders & HttpRedirectsGet301301Headers;
}

/** Return 301 status code and redirect to /http/success/200 */
export interface HttpRedirectsGet301DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

export interface HttpRedirectsPut301301Headers {
  /** The redirect location for this request */
  location?: "/http/failure/500";
}

/** Put true Boolean value in request returns 301.  This request should not be automatically redirected, but should return the received 301 to the caller for evaluation */
export interface HttpRedirectsPut301301Response extends HttpResponse {
  status: "301";
  headers: RawHttpHeaders & HttpRedirectsPut301301Headers;
}

/** Put true Boolean value in request returns 301.  This request should not be automatically redirected, but should return the received 301 to the caller for evaluation */
export interface HttpRedirectsPut301DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 302 status code and redirect to /http/success/200 */
export interface HttpRedirectsHead302200Response extends HttpResponse {
  status: "200";
}

export interface HttpRedirectsHead302302Headers {
  /** The redirect location for this request */
  location?: "/http/success/head/200";
}

/** Return 302 status code and redirect to /http/success/200 */
export interface HttpRedirectsHead302302Response extends HttpResponse {
  status: "302";
  headers: RawHttpHeaders & HttpRedirectsHead302302Headers;
}

/** Return 302 status code and redirect to /http/success/200 */
export interface HttpRedirectsHead302DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 302 status code and redirect to /http/success/200 */
export interface HttpRedirectsGet302200Response extends HttpResponse {
  status: "200";
}

export interface HttpRedirectsGet302302Headers {
  /** The redirect location for this request */
  location?: "/http/success/get/200";
}

/** Return 302 status code and redirect to /http/success/200 */
export interface HttpRedirectsGet302302Response extends HttpResponse {
  status: "302";
  headers: RawHttpHeaders & HttpRedirectsGet302302Headers;
}

/** Return 302 status code and redirect to /http/success/200 */
export interface HttpRedirectsGet302DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

export interface HttpRedirectsPatch302302Headers {
  /** The redirect location for this request */
  location?: "/http/failure/500";
}

/** Patch true Boolean value in request returns 302.  This request should not be automatically redirected, but should return the received 302 to the caller for evaluation */
export interface HttpRedirectsPatch302302Response extends HttpResponse {
  status: "302";
  headers: RawHttpHeaders & HttpRedirectsPatch302302Headers;
}

/** Patch true Boolean value in request returns 302.  This request should not be automatically redirected, but should return the received 302 to the caller for evaluation */
export interface HttpRedirectsPatch302DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Post true Boolean value in request returns 303.  This request should be automatically redirected usign a get, ultimately returning a 200 status code */
export interface HttpRedirectsPost303200Response extends HttpResponse {
  status: "200";
}

export interface HttpRedirectsPost303303Headers {
  /** The redirect location for this request */
  location?: "/http/success/get/200";
}

/** Post true Boolean value in request returns 303.  This request should be automatically redirected usign a get, ultimately returning a 200 status code */
export interface HttpRedirectsPost303303Response extends HttpResponse {
  status: "303";
  headers: RawHttpHeaders & HttpRedirectsPost303303Headers;
}

/** Post true Boolean value in request returns 303.  This request should be automatically redirected usign a get, ultimately returning a 200 status code */
export interface HttpRedirectsPost303DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Redirect with 307, resulting in a 200 success */
export interface HttpRedirectsHead307200Response extends HttpResponse {
  status: "200";
}

export interface HttpRedirectsHead307307Headers {
  /** The redirect location for this request */
  location?: "/http/success/head/200";
}

/** Redirect with 307, resulting in a 200 success */
export interface HttpRedirectsHead307307Response extends HttpResponse {
  status: "307";
  headers: RawHttpHeaders & HttpRedirectsHead307307Headers;
}

/** Redirect with 307, resulting in a 200 success */
export interface HttpRedirectsHead307DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Redirect get with 307, resulting in a 200 success */
export interface HttpRedirectsGet307200Response extends HttpResponse {
  status: "200";
}

export interface HttpRedirectsGet307307Headers {
  /** The redirect location for this request */
  location?: "/http/success/get/200";
}

/** Redirect get with 307, resulting in a 200 success */
export interface HttpRedirectsGet307307Response extends HttpResponse {
  status: "307";
  headers: RawHttpHeaders & HttpRedirectsGet307307Headers;
}

/** Redirect get with 307, resulting in a 200 success */
export interface HttpRedirectsGet307DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** options redirected with 307, resulting in a 200 after redirect */
export interface HttpRedirectsOptions307200Response extends HttpResponse {
  status: "200";
}

export interface HttpRedirectsOptions307307Headers {
  /** The redirect location for this request */
  location?: "/http/success/options/200";
}

/** options redirected with 307, resulting in a 200 after redirect */
export interface HttpRedirectsOptions307307Response extends HttpResponse {
  status: "307";
  headers: RawHttpHeaders & HttpRedirectsOptions307307Headers;
}

/** options redirected with 307, resulting in a 200 after redirect */
export interface HttpRedirectsOptions307DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put redirected with 307, resulting in a 200 after redirect */
export interface HttpRedirectsPut307200Response extends HttpResponse {
  status: "200";
}

export interface HttpRedirectsPut307307Headers {
  /** The redirect location for this request */
  location?: "/http/success/put/200";
}

/** Put redirected with 307, resulting in a 200 after redirect */
export interface HttpRedirectsPut307307Response extends HttpResponse {
  status: "307";
  headers: RawHttpHeaders & HttpRedirectsPut307307Headers;
}

/** Put redirected with 307, resulting in a 200 after redirect */
export interface HttpRedirectsPut307DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Patch redirected with 307, resulting in a 200 after redirect */
export interface HttpRedirectsPatch307200Response extends HttpResponse {
  status: "200";
}

export interface HttpRedirectsPatch307307Headers {
  /** The redirect location for this request */
  location?: "/http/success/patch/200";
}

/** Patch redirected with 307, resulting in a 200 after redirect */
export interface HttpRedirectsPatch307307Response extends HttpResponse {
  status: "307";
  headers: RawHttpHeaders & HttpRedirectsPatch307307Headers;
}

/** Patch redirected with 307, resulting in a 200 after redirect */
export interface HttpRedirectsPatch307DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Post redirected with 307, resulting in a 200 after redirect */
export interface HttpRedirectsPost307200Response extends HttpResponse {
  status: "200";
}

export interface HttpRedirectsPost307307Headers {
  /** The redirect location for this request */
  location?: "/http/success/post/200";
}

/** Post redirected with 307, resulting in a 200 after redirect */
export interface HttpRedirectsPost307307Response extends HttpResponse {
  status: "307";
  headers: RawHttpHeaders & HttpRedirectsPost307307Headers;
}

/** Post redirected with 307, resulting in a 200 after redirect */
export interface HttpRedirectsPost307DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Delete redirected with 307, resulting in a 200 after redirect */
export interface HttpRedirectsDelete307200Response extends HttpResponse {
  status: "200";
}

export interface HttpRedirectsDelete307307Headers {
  /** The redirect location for this request */
  location?: "/http/success/delete/200";
}

/** Delete redirected with 307, resulting in a 200 after redirect */
export interface HttpRedirectsDelete307307Response extends HttpResponse {
  status: "307";
  headers: RawHttpHeaders & HttpRedirectsDelete307307Headers;
}

/** Delete redirected with 307, resulting in a 200 after redirect */
export interface HttpRedirectsDelete307DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 400 status code - should be represented in the client as an error */
export interface HttpClientFailureHead400DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 400 status code - should be represented in the client as an error */
export interface HttpClientFailureGet400DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 400 status code - should be represented in the client as an error */
export interface HttpClientFailureOptions400DefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 400 status code - should be represented in the client as an error */
export interface HttpClientFailurePut400DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 400 status code - should be represented in the client as an error */
export interface HttpClientFailurePatch400DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 400 status code - should be represented in the client as an error */
export interface HttpClientFailurePost400DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 400 status code - should be represented in the client as an error */
export interface HttpClientFailureDelete400DefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 401 status code - should be represented in the client as an error */
export interface HttpClientFailureHead401DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 402 status code - should be represented in the client as an error */
export interface HttpClientFailureGet402DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 403 status code - should be represented in the client as an error */
export interface HttpClientFailureOptions403DefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 403 status code - should be represented in the client as an error */
export interface HttpClientFailureGet403DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 404 status code - should be represented in the client as an error */
export interface HttpClientFailurePut404DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 405 status code - should be represented in the client as an error */
export interface HttpClientFailurePatch405DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 406 status code - should be represented in the client as an error */
export interface HttpClientFailurePost406DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 407 status code - should be represented in the client as an error */
export interface HttpClientFailureDelete407DefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 409 status code - should be represented in the client as an error */
export interface HttpClientFailurePut409DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 410 status code - should be represented in the client as an error */
export interface HttpClientFailureHead410DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 411 status code - should be represented in the client as an error */
export interface HttpClientFailureGet411DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 412 status code - should be represented in the client as an error */
export interface HttpClientFailureOptions412DefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 412 status code - should be represented in the client as an error */
export interface HttpClientFailureGet412DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 413 status code - should be represented in the client as an error */
export interface HttpClientFailurePut413DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 414 status code - should be represented in the client as an error */
export interface HttpClientFailurePatch414DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 415 status code - should be represented in the client as an error */
export interface HttpClientFailurePost415DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 416 status code - should be represented in the client as an error */
export interface HttpClientFailureGet416DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 417 status code - should be represented in the client as an error */
export interface HttpClientFailureDelete417DefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 429 status code - should be represented in the client as an error */
export interface HttpClientFailureHead429DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 501 status code - should be represented in the client as an error */
export interface HttpServerFailureHead501DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 501 status code - should be represented in the client as an error */
export interface HttpServerFailureGet501DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 505 status code - should be represented in the client as an error */
export interface HttpServerFailurePost505DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 505 status code - should be represented in the client as an error */
export interface HttpServerFailureDelete505DefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 408 status code, then 200 after retry */
export interface HttpRetryHead408200Response extends HttpResponse {
  status: "200";
}

/** Return 408 status code, then 200 after retry */
export interface HttpRetryHead408DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 500 status code, then 200 after retry */
export interface HttpRetryPut500200Response extends HttpResponse {
  status: "200";
}

/** Return 500 status code, then 200 after retry */
export interface HttpRetryPut500DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 500 status code, then 200 after retry */
export interface HttpRetryPatch500200Response extends HttpResponse {
  status: "200";
}

/** Return 500 status code, then 200 after retry */
export interface HttpRetryPatch500DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 502 status code, then 200 after retry */
export interface HttpRetryGet502200Response extends HttpResponse {
  status: "200";
}

/** Return 502 status code, then 200 after retry */
export interface HttpRetryGet502DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 502 status code, then 200 after retry */
export interface HttpRetryOptions502200Response extends HttpResponse {
  status: "200";
  body: boolean;
}

/** Return 502 status code, then 200 after retry */
export interface HttpRetryOptions502DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 503 status code, then 200 after retry */
export interface HttpRetryPost503200Response extends HttpResponse {
  status: "200";
}

/** Return 503 status code, then 200 after retry */
export interface HttpRetryPost503DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 503 status code, then 200 after retry */
export interface HttpRetryDelete503200Response extends HttpResponse {
  status: "200";
}

/** Return 503 status code, then 200 after retry */
export interface HttpRetryDelete503DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 504 status code, then 200 after retry */
export interface HttpRetryPut504200Response extends HttpResponse {
  status: "200";
}

/** Return 504 status code, then 200 after retry */
export interface HttpRetryPut504DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 504 status code, then 200 after retry */
export interface HttpRetryPatch504200Response extends HttpResponse {
  status: "200";
}

/** Return 504 status code, then 200 after retry */
export interface HttpRetryPatch504DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a 200 response with valid payload: {'statusCode': '200'} */
export interface MultipleResponsesGet200Model204NoModelDefaultError200Valid200Response
  extends HttpResponse {
  status: "200";
  body: MyExceptionOutput;
}

/** Send a 200 response with valid payload: {'statusCode': '200'} */
export interface MultipleResponsesGet200Model204NoModelDefaultError200Valid204Response
  extends HttpResponse {
  status: "204";
}

/** Send a 200 response with valid payload: {'statusCode': '200'} */
export interface MultipleResponsesGet200Model204NoModelDefaultError200ValidDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a 204 response with no payload */
export interface MultipleResponsesGet200Model204NoModelDefaultError204Valid200Response
  extends HttpResponse {
  status: "200";
  body: MyExceptionOutput;
}

/** Send a 204 response with no payload */
export interface MultipleResponsesGet200Model204NoModelDefaultError204Valid204Response
  extends HttpResponse {
  status: "204";
}

/** Send a 204 response with no payload */
export interface MultipleResponsesGet200Model204NoModelDefaultError204ValidDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a 201 response with valid payload: {'statusCode': '201'} */
export interface MultipleResponsesGet200Model204NoModelDefaultError201Invalid200Response
  extends HttpResponse {
  status: "200";
  body: MyExceptionOutput;
}

/** Send a 201 response with valid payload: {'statusCode': '201'} */
export interface MultipleResponsesGet200Model204NoModelDefaultError201Invalid204Response
  extends HttpResponse {
  status: "204";
}

/** Send a 201 response with valid payload: {'statusCode': '201'} */
export interface MultipleResponsesGet200Model204NoModelDefaultError201InvalidDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a 202 response with no payload: */
export interface MultipleResponsesGet200Model204NoModelDefaultError202None200Response
  extends HttpResponse {
  status: "200";
  body: MyExceptionOutput;
}

/** Send a 202 response with no payload: */
export interface MultipleResponsesGet200Model204NoModelDefaultError202None204Response
  extends HttpResponse {
  status: "204";
}

/** Send a 202 response with no payload: */
export interface MultipleResponsesGet200Model204NoModelDefaultError202NoneDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a 400 response with valid error payload: {'status': 400, 'message': 'client error'} */
export interface MultipleResponsesGet200Model204NoModelDefaultError400Valid200Response
  extends HttpResponse {
  status: "200";
  body: MyExceptionOutput;
}

/** Send a 400 response with valid error payload: {'status': 400, 'message': 'client error'} */
export interface MultipleResponsesGet200Model204NoModelDefaultError400Valid204Response
  extends HttpResponse {
  status: "204";
}

/** Send a 400 response with valid error payload: {'status': 400, 'message': 'client error'} */
export interface MultipleResponsesGet200Model204NoModelDefaultError400ValidDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a 200 response with valid payload: {'statusCode': '200'} */
export interface MultipleResponsesGet200Model201ModelDefaultError200Valid200Response
  extends HttpResponse {
  status: "200";
  body: MyExceptionOutput;
}

/** Send a 200 response with valid payload: {'statusCode': '200'} */
export interface MultipleResponsesGet200Model201ModelDefaultError200Valid201Response
  extends HttpResponse {
  status: "201";
  body: BOutput;
}

/** Send a 200 response with valid payload: {'statusCode': '200'} */
export interface MultipleResponsesGet200Model201ModelDefaultError200ValidDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a 201 response with valid payload: {'statusCode': '201', 'textStatusCode': 'Created'} */
export interface MultipleResponsesGet200Model201ModelDefaultError201Valid200Response
  extends HttpResponse {
  status: "200";
  body: MyExceptionOutput;
}

/** Send a 201 response with valid payload: {'statusCode': '201', 'textStatusCode': 'Created'} */
export interface MultipleResponsesGet200Model201ModelDefaultError201Valid201Response
  extends HttpResponse {
  status: "201";
  body: BOutput;
}

/** Send a 201 response with valid payload: {'statusCode': '201', 'textStatusCode': 'Created'} */
export interface MultipleResponsesGet200Model201ModelDefaultError201ValidDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a 400 response with valid payload: {'code': '400', 'message': 'client error'} */
export interface MultipleResponsesGet200Model201ModelDefaultError400Valid200Response
  extends HttpResponse {
  status: "200";
  body: MyExceptionOutput;
}

/** Send a 400 response with valid payload: {'code': '400', 'message': 'client error'} */
export interface MultipleResponsesGet200Model201ModelDefaultError400Valid201Response
  extends HttpResponse {
  status: "201";
  body: BOutput;
}

/** Send a 400 response with valid payload: {'code': '400', 'message': 'client error'} */
export interface MultipleResponsesGet200Model201ModelDefaultError400ValidDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a 200 response with valid payload: {'statusCode': '200'} */
export interface MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200Valid200Response
  extends HttpResponse {
  status: "200";
  body: MyExceptionOutput;
}

/** Send a 200 response with valid payload: {'statusCode': '200'} */
export interface MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200Valid201Response
  extends HttpResponse {
  status: "201";
  body: COutput;
}

/** Send a 200 response with valid payload: {'statusCode': '200'} */
export interface MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200Valid404Response
  extends HttpResponse {
  status: "404";
  body: DOutput;
}

/** Send a 200 response with valid payload: {'statusCode': '200'} */
export interface MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200ValidDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a 200 response with valid payload: {'httpCode': '201'} */
export interface MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201Valid200Response
  extends HttpResponse {
  status: "200";
  body: MyExceptionOutput;
}

/** Send a 200 response with valid payload: {'httpCode': '201'} */
export interface MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201Valid201Response
  extends HttpResponse {
  status: "201";
  body: COutput;
}

/** Send a 200 response with valid payload: {'httpCode': '201'} */
export interface MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201Valid404Response
  extends HttpResponse {
  status: "404";
  body: DOutput;
}

/** Send a 200 response with valid payload: {'httpCode': '201'} */
export interface MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201ValidDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a 200 response with valid payload: {'httpStatusCode': '404'} */
export interface MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404Valid200Response
  extends HttpResponse {
  status: "200";
  body: MyExceptionOutput;
}

/** Send a 200 response with valid payload: {'httpStatusCode': '404'} */
export interface MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404Valid201Response
  extends HttpResponse {
  status: "201";
  body: COutput;
}

/** Send a 200 response with valid payload: {'httpStatusCode': '404'} */
export interface MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404Valid404Response
  extends HttpResponse {
  status: "404";
  body: DOutput;
}

/** Send a 200 response with valid payload: {'httpStatusCode': '404'} */
export interface MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404ValidDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a 400 response with valid payload: {'code': '400', 'message': 'client error'} */
export interface MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400Valid200Response
  extends HttpResponse {
  status: "200";
  body: MyExceptionOutput;
}

/** Send a 400 response with valid payload: {'code': '400', 'message': 'client error'} */
export interface MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400Valid201Response
  extends HttpResponse {
  status: "201";
  body: COutput;
}

/** Send a 400 response with valid payload: {'code': '400', 'message': 'client error'} */
export interface MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400Valid404Response
  extends HttpResponse {
  status: "404";
  body: DOutput;
}

/** Send a 400 response with valid payload: {'code': '400', 'message': 'client error'} */
export interface MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400ValidDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a 202 response with no payload */
export interface MultipleResponsesGet202None204NoneDefaultError202None202Response
  extends HttpResponse {
  status: "202";
}

/** Send a 202 response with no payload */
export interface MultipleResponsesGet202None204NoneDefaultError202None204Response
  extends HttpResponse {
  status: "204";
}

/** Send a 202 response with no payload */
export interface MultipleResponsesGet202None204NoneDefaultError202NoneDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a 204 response with no payload */
export interface MultipleResponsesGet202None204NoneDefaultError204None202Response
  extends HttpResponse {
  status: "202";
}

/** Send a 204 response with no payload */
export interface MultipleResponsesGet202None204NoneDefaultError204None204Response
  extends HttpResponse {
  status: "204";
}

/** Send a 204 response with no payload */
export interface MultipleResponsesGet202None204NoneDefaultError204NoneDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a 400 response with valid payload: {'code': '400', 'message': 'client error'} */
export interface MultipleResponsesGet202None204NoneDefaultError400Valid202Response
  extends HttpResponse {
  status: "202";
}

/** Send a 400 response with valid payload: {'code': '400', 'message': 'client error'} */
export interface MultipleResponsesGet202None204NoneDefaultError400Valid204Response
  extends HttpResponse {
  status: "204";
}

/** Send a 400 response with valid payload: {'code': '400', 'message': 'client error'} */
export interface MultipleResponsesGet202None204NoneDefaultError400ValidDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a 202 response with an unexpected payload {'property': 'value'} */
export interface MultipleResponsesGet202None204NoneDefaultNone202Invalid202Response
  extends HttpResponse {
  status: "202";
}

/** Send a 202 response with an unexpected payload {'property': 'value'} */
export interface MultipleResponsesGet202None204NoneDefaultNone202Invalid204Response
  extends HttpResponse {
  status: "204";
}

/** Send a 202 response with an unexpected payload {'property': 'value'} */
export interface MultipleResponsesGet202None204NoneDefaultNone202InvalidDefaultResponse
  extends HttpResponse {
  status: string;
}

/** Send a 204 response with no payload */
export interface MultipleResponsesGet202None204NoneDefaultNone204None202Response
  extends HttpResponse {
  status: "202";
}

/** Send a 204 response with no payload */
export interface MultipleResponsesGet202None204NoneDefaultNone204None204Response
  extends HttpResponse {
  status: "204";
}

/** Send a 204 response with no payload */
export interface MultipleResponsesGet202None204NoneDefaultNone204NoneDefaultResponse
  extends HttpResponse {
  status: string;
}

/** Send a 400 response with no payload */
export interface MultipleResponsesGet202None204NoneDefaultNone400None202Response
  extends HttpResponse {
  status: "202";
}

/** Send a 400 response with no payload */
export interface MultipleResponsesGet202None204NoneDefaultNone400None204Response
  extends HttpResponse {
  status: "204";
}

/** Send a 400 response with no payload */
export interface MultipleResponsesGet202None204NoneDefaultNone400NoneDefaultResponse
  extends HttpResponse {
  status: string;
}

/** Send a 400 response with an unexpected payload {'property': 'value'} */
export interface MultipleResponsesGet202None204NoneDefaultNone400Invalid202Response
  extends HttpResponse {
  status: "202";
}

/** Send a 400 response with an unexpected payload {'property': 'value'} */
export interface MultipleResponsesGet202None204NoneDefaultNone400Invalid204Response
  extends HttpResponse {
  status: "204";
}

/** Send a 400 response with an unexpected payload {'property': 'value'} */
export interface MultipleResponsesGet202None204NoneDefaultNone400InvalidDefaultResponse
  extends HttpResponse {
  status: string;
}

/** Send a 200 response with valid payload: {'statusCode': '200'} */
export interface MultipleResponsesGetDefaultModelA200Valid200Response
  extends HttpResponse {
  status: "200";
  body: MyExceptionOutput;
}

/** Send a 200 response with no payload */
export interface MultipleResponsesGetDefaultModelA200None200Response
  extends HttpResponse {
  status: "200";
  body: MyExceptionOutput;
}

/** Send a 400 response with valid payload: {'statusCode': '400'} */
export interface MultipleResponsesGetDefaultModelA400Valid200Response
  extends HttpResponse {
  status: "200";
}

/** Send a 400 response with valid payload: {'statusCode': '400'} */
export interface MultipleResponsesGetDefaultModelA400ValidDefaultResponse
  extends HttpResponse {
  status: string;
  body: MyExceptionOutput;
}

/** Send a 400 response with no payload */
export interface MultipleResponsesGetDefaultModelA400None200Response
  extends HttpResponse {
  status: "200";
}

/** Send a 400 response with no payload */
export interface MultipleResponsesGetDefaultModelA400NoneDefaultResponse
  extends HttpResponse {
  status: string;
  body: MyExceptionOutput;
}

/** Send a 200 response with invalid payload: {'statusCode': '200'} */
export interface MultipleResponsesGetDefaultNone200Invalid200Response
  extends HttpResponse {
  status: "200";
}

/** Send a 200 response with no payload */
export interface MultipleResponsesGetDefaultNone200None200Response
  extends HttpResponse {
  status: "200";
}

/** Send a 400 response with valid payload: {'statusCode': '400'} */
export interface MultipleResponsesGetDefaultNone400Invalid200Response
  extends HttpResponse {
  status: "200";
}

/** Send a 400 response with valid payload: {'statusCode': '400'} */
export interface MultipleResponsesGetDefaultNone400InvalidDefaultResponse
  extends HttpResponse {
  status: string;
}

/** Send a 400 response with no payload */
export interface MultipleResponsesGetDefaultNone400None200Response
  extends HttpResponse {
  status: "200";
}

/** Send a 400 response with no payload */
export interface MultipleResponsesGetDefaultNone400NoneDefaultResponse
  extends HttpResponse {
  status: string;
}

/** Send a 200 response with no payload, when a payload is expected - client should return a null object of thde type for model A */
export interface MultipleResponsesGet200ModelA200None200Response
  extends HttpResponse {
  status: "200";
  body: MyExceptionOutput;
}

/** Send a 200 response with payload {'statusCode': '200'} */
export interface MultipleResponsesGet200ModelA200Valid200Response
  extends HttpResponse {
  status: "200";
  body: MyExceptionOutput;
}

/** Send a 200 response with invalid payload {'statusCodeInvalid': '200'} */
export interface MultipleResponsesGet200ModelA200Invalid200Response
  extends HttpResponse {
  status: "200";
  body: MyExceptionOutput;
}

/** Send a 400 response with no payload client should treat as an http error with no error model */
export interface MultipleResponsesGet200ModelA400None200Response
  extends HttpResponse {
  status: "200";
  body: MyExceptionOutput;
}

/** Send a 200 response with payload {'statusCode': '400'} */
export interface MultipleResponsesGet200ModelA400Valid200Response
  extends HttpResponse {
  status: "200";
  body: MyExceptionOutput;
}

/** Send a 200 response with invalid payload {'statusCodeInvalid': '400'} */
export interface MultipleResponsesGet200ModelA400Invalid200Response
  extends HttpResponse {
  status: "200";
  body: MyExceptionOutput;
}

/** Send a 202 response with payload {'statusCode': '202'} */
export interface MultipleResponsesGet200ModelA202Valid200Response
  extends HttpResponse {
  status: "200";
  body: MyExceptionOutput;
}
