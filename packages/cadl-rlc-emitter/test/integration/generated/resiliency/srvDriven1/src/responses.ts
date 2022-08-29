import { HttpResponse } from "@azure-rest/core-client";
import { MessageOutput } from "./outputModels";

/** The request has succeeded. */
export interface ServiceDriven1HeadNoParams200Response extends HttpResponse {
  status: "200";
}

/** Answer from service */
export interface ServiceDriven1GetRequired200Response extends HttpResponse {
  status: "200";
  body: MessageOutput;
}

/** Answer from service */
export interface ServiceDriven1PutRequiredOptional200Response
  extends HttpResponse {
  status: "200";
  body: MessageOutput;
}

/** Answer from service */
export interface ServiceDriven1PostParameters200Response extends HttpResponse {
  status: "200";
  body: MessageOutput;
}

/** Answer from service */
export interface ServiceDriven1GetOptional200Response extends HttpResponse {
  status: "200";
  body: MessageOutput;
}
