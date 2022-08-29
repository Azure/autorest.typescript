import { HttpResponse } from "@azure-rest/core-client";
import { MessageOutput } from "./outputModels";

/** The request has succeeded. */
export interface ServiceDriven2HeadNoParams200Response extends HttpResponse {
  status: "200";
}

/** Answer from service */
export interface ServiceDriven2GetRequired200Response extends HttpResponse {
  status: "200";
  body: MessageOutput;
}

/** Answer from service */
export interface ServiceDriven2PutRequiredOptional200Response
  extends HttpResponse {
  status: "200";
  body: MessageOutput;
}

/** Answer from service */
export interface ServiceDriven2PostParameters200Response extends HttpResponse {
  status: "200";
  body: MessageOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ServiceDriven2DeleteParameters204Response
  extends HttpResponse {
  status: "204";
}

/** Answer from service */
export interface ServiceDriven2GetOptional200Response extends HttpResponse {
  status: "200";
  body: MessageOutput;
}

/** Answer from service */
export interface ServiceDriven2GetNewOperation200Response extends HttpResponse {
  status: "200";
  body: MessageOutput;
}
