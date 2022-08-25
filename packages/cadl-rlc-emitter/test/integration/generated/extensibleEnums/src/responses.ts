import { HttpResponse } from "@azure-rest/core-client";

/** The request has succeeded. */
export interface ExtensibleEnumsGetKnownValue200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** The request has succeeded. */
export interface ExtensibleEnumsGetUnknownValue200Response
  extends HttpResponse {
  status: "200";
  body: string;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ExtensibleEnumsPutKnownValue204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ExtensibleEnumsPutUnknownValue204Response
  extends HttpResponse {
  status: "204";
}
