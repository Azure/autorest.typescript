import { HttpResponse } from "@azure-rest/core-client";

/** The request has succeeded. */
export interface StringGetKnownValue200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** The request has succeeded. */
export interface StringGetUnknownValue200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface StringPutKnownValue204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface StringPutUnknownValue204Response extends HttpResponse {
  status: "204";
}
