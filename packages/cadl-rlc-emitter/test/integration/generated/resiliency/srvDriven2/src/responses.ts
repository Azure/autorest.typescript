import { HttpResponse } from "@azure-rest/core-client";
import { MessageOutput } from "./outputModels";

/** The request has succeeded. */
export interface ParamsHeadNoParams200Response extends HttpResponse {
  status: "200";
}

/** Answer from service */
export interface ParamsGetRequired200Response extends HttpResponse {
  status: "200";
  body: MessageOutput;
}

/** Answer from service */
export interface ParamsPutRequiredOptional200Response extends HttpResponse {
  status: "200";
  body: MessageOutput;
}

/** Answer from service */
export interface ParamsPostParameters200Response extends HttpResponse {
  status: "200";
  body: MessageOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ParamsDeleteParameters204Response extends HttpResponse {
  status: "204";
}

/** Answer from service */
export interface ParamsGetOptional200Response extends HttpResponse {
  status: "200";
  body: MessageOutput;
}

/** Answer from service */
export interface ParamsGetNewOperation200Response extends HttpResponse {
  status: "200";
  body: MessageOutput;
}
