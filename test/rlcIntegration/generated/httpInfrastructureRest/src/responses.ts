// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";
import {
  ErrorModelOutput,
  MyExceptionOutput,
  BOutput,
  COutput,
  DOutput
} from "./outputModels";

/** Get empty error form server */
export interface HttpFailureGetEmptyError200Response extends HttpResponse {
  status: "200";
  body: boolean;
}

/** Get empty error form server */
export interface HttpFailureGetEmptyErrordefaultResponse extends HttpResponse {
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
  body: Record<string, unknown>;
}

/** Return 200 status code if successful */
export interface HttpSuccessHead200defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get 200 success */
export interface HttpSuccessGet200200Response extends HttpResponse {
  status: "200";
  body: boolean;
}

/** Get 200 success */
export interface HttpSuccessGet200defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Options 200 success */
export interface HttpSuccessOptions200200Response extends HttpResponse {
  status: "200";
  body: boolean;
}

/** Options 200 success */
export interface HttpSuccessOptions200defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put boolean value true returning 200 success */
export interface HttpSuccessPut200200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put boolean value true returning 200 success */
export interface HttpSuccessPut200defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Patch true Boolean value in request returning 200 */
export interface HttpSuccessPatch200200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Patch true Boolean value in request returning 200 */
export interface HttpSuccessPatch200defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Post bollean value true in request that returns a 200 */
export interface HttpSuccessPost200200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Post bollean value true in request that returns a 200 */
export interface HttpSuccessPost200defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Delete simple boolean value true returns 200 */
export interface HttpSuccessDelete200200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Delete simple boolean value true returns 200 */
export interface HttpSuccessDelete200defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put true Boolean value in request returns 201 */
export interface HttpSuccessPut201201Response extends HttpResponse {
  status: "201";
  body: Record<string, unknown>;
}

/** Put true Boolean value in request returns 201 */
export interface HttpSuccessPut201defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Post true Boolean value in request returns 201 (Created) */
export interface HttpSuccessPost201201Response extends HttpResponse {
  status: "201";
  body: Record<string, unknown>;
}

/** Post true Boolean value in request returns 201 (Created) */
export interface HttpSuccessPost201defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put true Boolean value in request returns 202 (Accepted) */
export interface HttpSuccessPut202202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
}

/** Put true Boolean value in request returns 202 (Accepted) */
export interface HttpSuccessPut202defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Patch true Boolean value in request returns 202 */
export interface HttpSuccessPatch202202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
}

/** Patch true Boolean value in request returns 202 */
export interface HttpSuccessPatch202defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Post true Boolean value in request returns 202 (Accepted) */
export interface HttpSuccessPost202202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
}

/** Post true Boolean value in request returns 202 (Accepted) */
export interface HttpSuccessPost202defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Delete true Boolean value in request returns 202 (accepted) */
export interface HttpSuccessDelete202202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
}

/** Delete true Boolean value in request returns 202 (accepted) */
export interface HttpSuccessDelete202defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 204 status code if successful */
export interface HttpSuccessHead204204Response extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

/** Return 204 status code if successful */
export interface HttpSuccessHead204defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put true Boolean value in request returns 204 (no content) */
export interface HttpSuccessPut204204Response extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

/** Put true Boolean value in request returns 204 (no content) */
export interface HttpSuccessPut204defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Patch true Boolean value in request returns 204 (no content) */
export interface HttpSuccessPatch204204Response extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

/** Patch true Boolean value in request returns 204 (no content) */
export interface HttpSuccessPatch204defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Post true Boolean value in request returns 204 (no content) */
export interface HttpSuccessPost204204Response extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

/** Post true Boolean value in request returns 204 (no content) */
export interface HttpSuccessPost204defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Delete true Boolean value in request returns 204 (no content) */
export interface HttpSuccessDelete204204Response extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

/** Delete true Boolean value in request returns 204 (no content) */
export interface HttpSuccessDelete204defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 404 status code */
export interface HttpSuccessHead404204Response extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

/** Return 404 status code */
export interface HttpSuccessHead404404Response extends HttpResponse {
  status: "404";
  body: Record<string, unknown>;
}

/** Return 404 status code */
export interface HttpSuccessHead404defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 300 status code and redirect to /http/success/200 */
export interface HttpRedirectsHead300200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

export interface HttpRedirectsHead300300Headers {
  /** The redirect location for this request */
  location?: "/http/success/head/200";
}

/** Return 300 status code and redirect to /http/success/200 */
export interface HttpRedirectsHead300300Response extends HttpResponse {
  status: "300";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & HttpRedirectsHead300300Headers;
}

/** Return 300 status code and redirect to /http/success/200 */
export interface HttpRedirectsHead300defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 300 status code and redirect to /http/success/200 */
export interface HttpRedirectsGet300200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
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
export interface HttpRedirectsGet300defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 301 status code and redirect to /http/success/200 */
export interface HttpRedirectsHead301200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

export interface HttpRedirectsHead301301Headers {
  /** The redirect location for this request */
  location?: "/http/success/head/200";
}

/** Return 301 status code and redirect to /http/success/200 */
export interface HttpRedirectsHead301301Response extends HttpResponse {
  status: "301";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & HttpRedirectsHead301301Headers;
}

/** Return 301 status code and redirect to /http/success/200 */
export interface HttpRedirectsHead301defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 301 status code and redirect to /http/success/200 */
export interface HttpRedirectsGet301200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

export interface HttpRedirectsGet301301Headers {
  /** The redirect location for this request */
  location?: "/http/success/get/200";
}

/** Return 301 status code and redirect to /http/success/200 */
export interface HttpRedirectsGet301301Response extends HttpResponse {
  status: "301";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & HttpRedirectsGet301301Headers;
}

/** Return 301 status code and redirect to /http/success/200 */
export interface HttpRedirectsGet301defaultResponse extends HttpResponse {
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
  body: Record<string, unknown>;
  headers: RawHttpHeaders & HttpRedirectsPut301301Headers;
}

/** Put true Boolean value in request returns 301.  This request should not be automatically redirected, but should return the received 301 to the caller for evaluation */
export interface HttpRedirectsPut301defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 302 status code and redirect to /http/success/200 */
export interface HttpRedirectsHead302200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

export interface HttpRedirectsHead302302Headers {
  /** The redirect location for this request */
  location?: "/http/success/head/200";
}

/** Return 302 status code and redirect to /http/success/200 */
export interface HttpRedirectsHead302302Response extends HttpResponse {
  status: "302";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & HttpRedirectsHead302302Headers;
}

/** Return 302 status code and redirect to /http/success/200 */
export interface HttpRedirectsHead302defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 302 status code and redirect to /http/success/200 */
export interface HttpRedirectsGet302200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

export interface HttpRedirectsGet302302Headers {
  /** The redirect location for this request */
  location?: "/http/success/get/200";
}

/** Return 302 status code and redirect to /http/success/200 */
export interface HttpRedirectsGet302302Response extends HttpResponse {
  status: "302";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & HttpRedirectsGet302302Headers;
}

/** Return 302 status code and redirect to /http/success/200 */
export interface HttpRedirectsGet302defaultResponse extends HttpResponse {
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
  body: Record<string, unknown>;
  headers: RawHttpHeaders & HttpRedirectsPatch302302Headers;
}

/** Patch true Boolean value in request returns 302.  This request should not be automatically redirected, but should return the received 302 to the caller for evaluation */
export interface HttpRedirectsPatch302defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Post true Boolean value in request returns 303.  This request should be automatically redirected usign a get, ultimately returning a 200 status code */
export interface HttpRedirectsPost303200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

export interface HttpRedirectsPost303303Headers {
  /** The redirect location for this request */
  location?: "/http/success/get/200";
}

/** Post true Boolean value in request returns 303.  This request should be automatically redirected usign a get, ultimately returning a 200 status code */
export interface HttpRedirectsPost303303Response extends HttpResponse {
  status: "303";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & HttpRedirectsPost303303Headers;
}

/** Post true Boolean value in request returns 303.  This request should be automatically redirected usign a get, ultimately returning a 200 status code */
export interface HttpRedirectsPost303defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Redirect with 307, resulting in a 200 success */
export interface HttpRedirectsHead307200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

export interface HttpRedirectsHead307307Headers {
  /** The redirect location for this request */
  location?: "/http/success/head/200";
}

/** Redirect with 307, resulting in a 200 success */
export interface HttpRedirectsHead307307Response extends HttpResponse {
  status: "307";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & HttpRedirectsHead307307Headers;
}

/** Redirect with 307, resulting in a 200 success */
export interface HttpRedirectsHead307defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Redirect get with 307, resulting in a 200 success */
export interface HttpRedirectsGet307200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

export interface HttpRedirectsGet307307Headers {
  /** The redirect location for this request */
  location?: "/http/success/get/200";
}

/** Redirect get with 307, resulting in a 200 success */
export interface HttpRedirectsGet307307Response extends HttpResponse {
  status: "307";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & HttpRedirectsGet307307Headers;
}

/** Redirect get with 307, resulting in a 200 success */
export interface HttpRedirectsGet307defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** options redirected with 307, resulting in a 200 after redirect */
export interface HttpRedirectsOptions307200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

export interface HttpRedirectsOptions307307Headers {
  /** The redirect location for this request */
  location?: "/http/success/options/200";
}

/** options redirected with 307, resulting in a 200 after redirect */
export interface HttpRedirectsOptions307307Response extends HttpResponse {
  status: "307";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & HttpRedirectsOptions307307Headers;
}

/** options redirected with 307, resulting in a 200 after redirect */
export interface HttpRedirectsOptions307defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put redirected with 307, resulting in a 200 after redirect */
export interface HttpRedirectsPut307200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

export interface HttpRedirectsPut307307Headers {
  /** The redirect location for this request */
  location?: "/http/success/put/200";
}

/** Put redirected with 307, resulting in a 200 after redirect */
export interface HttpRedirectsPut307307Response extends HttpResponse {
  status: "307";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & HttpRedirectsPut307307Headers;
}

/** Put redirected with 307, resulting in a 200 after redirect */
export interface HttpRedirectsPut307defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Patch redirected with 307, resulting in a 200 after redirect */
export interface HttpRedirectsPatch307200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

export interface HttpRedirectsPatch307307Headers {
  /** The redirect location for this request */
  location?: "/http/success/patch/200";
}

/** Patch redirected with 307, resulting in a 200 after redirect */
export interface HttpRedirectsPatch307307Response extends HttpResponse {
  status: "307";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & HttpRedirectsPatch307307Headers;
}

/** Patch redirected with 307, resulting in a 200 after redirect */
export interface HttpRedirectsPatch307defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Post redirected with 307, resulting in a 200 after redirect */
export interface HttpRedirectsPost307200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

export interface HttpRedirectsPost307307Headers {
  /** The redirect location for this request */
  location?: "/http/success/post/200";
}

/** Post redirected with 307, resulting in a 200 after redirect */
export interface HttpRedirectsPost307307Response extends HttpResponse {
  status: "307";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & HttpRedirectsPost307307Headers;
}

/** Post redirected with 307, resulting in a 200 after redirect */
export interface HttpRedirectsPost307defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Delete redirected with 307, resulting in a 200 after redirect */
export interface HttpRedirectsDelete307200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

export interface HttpRedirectsDelete307307Headers {
  /** The redirect location for this request */
  location?: "/http/success/delete/200";
}

/** Delete redirected with 307, resulting in a 200 after redirect */
export interface HttpRedirectsDelete307307Response extends HttpResponse {
  status: "307";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & HttpRedirectsDelete307307Headers;
}

/** Delete redirected with 307, resulting in a 200 after redirect */
export interface HttpRedirectsDelete307defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 400 status code - should be represented in the client as an error */
export interface HttpClientFailureHead400defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 400 status code - should be represented in the client as an error */
export interface HttpClientFailureGet400defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 400 status code - should be represented in the client as an error */
export interface HttpClientFailureOptions400defaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 400 status code - should be represented in the client as an error */
export interface HttpClientFailurePut400defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 400 status code - should be represented in the client as an error */
export interface HttpClientFailurePatch400defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 400 status code - should be represented in the client as an error */
export interface HttpClientFailurePost400defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 400 status code - should be represented in the client as an error */
export interface HttpClientFailureDelete400defaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 401 status code - should be represented in the client as an error */
export interface HttpClientFailureHead401defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 402 status code - should be represented in the client as an error */
export interface HttpClientFailureGet402defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 403 status code - should be represented in the client as an error */
export interface HttpClientFailureOptions403defaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 403 status code - should be represented in the client as an error */
export interface HttpClientFailureGet403defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 404 status code - should be represented in the client as an error */
export interface HttpClientFailurePut404defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 405 status code - should be represented in the client as an error */
export interface HttpClientFailurePatch405defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 406 status code - should be represented in the client as an error */
export interface HttpClientFailurePost406defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 407 status code - should be represented in the client as an error */
export interface HttpClientFailureDelete407defaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 409 status code - should be represented in the client as an error */
export interface HttpClientFailurePut409defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 410 status code - should be represented in the client as an error */
export interface HttpClientFailureHead410defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 411 status code - should be represented in the client as an error */
export interface HttpClientFailureGet411defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 412 status code - should be represented in the client as an error */
export interface HttpClientFailureOptions412defaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 412 status code - should be represented in the client as an error */
export interface HttpClientFailureGet412defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 413 status code - should be represented in the client as an error */
export interface HttpClientFailurePut413defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 414 status code - should be represented in the client as an error */
export interface HttpClientFailurePatch414defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 415 status code - should be represented in the client as an error */
export interface HttpClientFailurePost415defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 416 status code - should be represented in the client as an error */
export interface HttpClientFailureGet416defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 417 status code - should be represented in the client as an error */
export interface HttpClientFailureDelete417defaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 429 status code - should be represented in the client as an error */
export interface HttpClientFailureHead429defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 501 status code - should be represented in the client as an error */
export interface HttpServerFailureHead501defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 501 status code - should be represented in the client as an error */
export interface HttpServerFailureGet501defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 505 status code - should be represented in the client as an error */
export interface HttpServerFailurePost505defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 505 status code - should be represented in the client as an error */
export interface HttpServerFailureDelete505defaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 408 status code, then 200 after retry */
export interface HttpRetryHead408200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Return 408 status code, then 200 after retry */
export interface HttpRetryHead408defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 500 status code, then 200 after retry */
export interface HttpRetryPut500200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Return 500 status code, then 200 after retry */
export interface HttpRetryPut500defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 500 status code, then 200 after retry */
export interface HttpRetryPatch500200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Return 500 status code, then 200 after retry */
export interface HttpRetryPatch500defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 502 status code, then 200 after retry */
export interface HttpRetryGet502200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Return 502 status code, then 200 after retry */
export interface HttpRetryGet502defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 502 status code, then 200 after retry */
export interface HttpRetryOptions502200Response extends HttpResponse {
  status: "200";
  body: boolean;
}

/** Return 502 status code, then 200 after retry */
export interface HttpRetryOptions502defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 503 status code, then 200 after retry */
export interface HttpRetryPost503200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Return 503 status code, then 200 after retry */
export interface HttpRetryPost503defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 503 status code, then 200 after retry */
export interface HttpRetryDelete503200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Return 503 status code, then 200 after retry */
export interface HttpRetryDelete503defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 504 status code, then 200 after retry */
export interface HttpRetryPut504200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Return 504 status code, then 200 after retry */
export interface HttpRetryPut504defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Return 504 status code, then 200 after retry */
export interface HttpRetryPatch504200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Return 504 status code, then 200 after retry */
export interface HttpRetryPatch504defaultResponse extends HttpResponse {
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
  body: Record<string, unknown>;
}

/** Send a 200 response with valid payload: {'statusCode': '200'} */
export interface MultipleResponsesGet200Model204NoModelDefaultError200ValiddefaultResponse
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
  body: Record<string, unknown>;
}

/** Send a 204 response with no payload */
export interface MultipleResponsesGet200Model204NoModelDefaultError204ValiddefaultResponse
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
  body: Record<string, unknown>;
}

/** Send a 201 response with valid payload: {'statusCode': '201'} */
export interface MultipleResponsesGet200Model204NoModelDefaultError201InvaliddefaultResponse
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
  body: Record<string, unknown>;
}

/** Send a 202 response with no payload: */
export interface MultipleResponsesGet200Model204NoModelDefaultError202NonedefaultResponse
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
  body: Record<string, unknown>;
}

/** Send a 400 response with valid error payload: {'status': 400, 'message': 'client error'} */
export interface MultipleResponsesGet200Model204NoModelDefaultError400ValiddefaultResponse
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
export interface MultipleResponsesGet200Model201ModelDefaultError200ValiddefaultResponse
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
export interface MultipleResponsesGet200Model201ModelDefaultError201ValiddefaultResponse
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
export interface MultipleResponsesGet200Model201ModelDefaultError400ValiddefaultResponse
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
export interface MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200ValiddefaultResponse
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
export interface MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201ValiddefaultResponse
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
export interface MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404ValiddefaultResponse
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
export interface MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400ValiddefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a 202 response with no payload */
export interface MultipleResponsesGet202None204NoneDefaultError202None202Response
  extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
}

/** Send a 202 response with no payload */
export interface MultipleResponsesGet202None204NoneDefaultError202None204Response
  extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

/** Send a 202 response with no payload */
export interface MultipleResponsesGet202None204NoneDefaultError202NonedefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a 204 response with no payload */
export interface MultipleResponsesGet202None204NoneDefaultError204None202Response
  extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
}

/** Send a 204 response with no payload */
export interface MultipleResponsesGet202None204NoneDefaultError204None204Response
  extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

/** Send a 204 response with no payload */
export interface MultipleResponsesGet202None204NoneDefaultError204NonedefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a 400 response with valid payload: {'code': '400', 'message': 'client error'} */
export interface MultipleResponsesGet202None204NoneDefaultError400Valid202Response
  extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
}

/** Send a 400 response with valid payload: {'code': '400', 'message': 'client error'} */
export interface MultipleResponsesGet202None204NoneDefaultError400Valid204Response
  extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

/** Send a 400 response with valid payload: {'code': '400', 'message': 'client error'} */
export interface MultipleResponsesGet202None204NoneDefaultError400ValiddefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a 202 response with an unexpected payload {'property': 'value'} */
export interface MultipleResponsesGet202None204NoneDefaultNone202Invalid202Response
  extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
}

/** Send a 202 response with an unexpected payload {'property': 'value'} */
export interface MultipleResponsesGet202None204NoneDefaultNone202Invalid204Response
  extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

/** Send a 202 response with an unexpected payload {'property': 'value'} */
export interface MultipleResponsesGet202None204NoneDefaultNone202InvaliddefaultResponse
  extends HttpResponse {
  status: string;
  body: Record<string, unknown>;
}

/** Send a 204 response with no payload */
export interface MultipleResponsesGet202None204NoneDefaultNone204None202Response
  extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
}

/** Send a 204 response with no payload */
export interface MultipleResponsesGet202None204NoneDefaultNone204None204Response
  extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

/** Send a 204 response with no payload */
export interface MultipleResponsesGet202None204NoneDefaultNone204NonedefaultResponse
  extends HttpResponse {
  status: string;
  body: Record<string, unknown>;
}

/** Send a 400 response with no payload */
export interface MultipleResponsesGet202None204NoneDefaultNone400None202Response
  extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
}

/** Send a 400 response with no payload */
export interface MultipleResponsesGet202None204NoneDefaultNone400None204Response
  extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

/** Send a 400 response with no payload */
export interface MultipleResponsesGet202None204NoneDefaultNone400NonedefaultResponse
  extends HttpResponse {
  status: string;
  body: Record<string, unknown>;
}

/** Send a 400 response with an unexpected payload {'property': 'value'} */
export interface MultipleResponsesGet202None204NoneDefaultNone400Invalid202Response
  extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
}

/** Send a 400 response with an unexpected payload {'property': 'value'} */
export interface MultipleResponsesGet202None204NoneDefaultNone400Invalid204Response
  extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

/** Send a 400 response with an unexpected payload {'property': 'value'} */
export interface MultipleResponsesGet202None204NoneDefaultNone400InvaliddefaultResponse
  extends HttpResponse {
  status: string;
  body: Record<string, unknown>;
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
  body: Record<string, unknown>;
}

/** Send a 400 response with valid payload: {'statusCode': '400'} */
export interface MultipleResponsesGetDefaultModelA400ValiddefaultResponse
  extends HttpResponse {
  status: string;
  body: MyExceptionOutput;
}

/** Send a 400 response with no payload */
export interface MultipleResponsesGetDefaultModelA400None200Response
  extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Send a 400 response with no payload */
export interface MultipleResponsesGetDefaultModelA400NonedefaultResponse
  extends HttpResponse {
  status: string;
  body: MyExceptionOutput;
}

/** Send a 200 response with invalid payload: {'statusCode': '200'} */
export interface MultipleResponsesGetDefaultNone200Invalid200Response
  extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Send a 200 response with no payload */
export interface MultipleResponsesGetDefaultNone200None200Response
  extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Send a 400 response with valid payload: {'statusCode': '400'} */
export interface MultipleResponsesGetDefaultNone400Invalid200Response
  extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Send a 400 response with valid payload: {'statusCode': '400'} */
export interface MultipleResponsesGetDefaultNone400InvaliddefaultResponse
  extends HttpResponse {
  status: string;
  body: Record<string, unknown>;
}

/** Send a 400 response with no payload */
export interface MultipleResponsesGetDefaultNone400None200Response
  extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Send a 400 response with no payload */
export interface MultipleResponsesGetDefaultNone400NonedefaultResponse
  extends HttpResponse {
  status: string;
  body: Record<string, unknown>;
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
