import { HttpResponse } from "@azure-rest/core-client";
import { InvalidAuthOutput } from "./outputModels";

/** There is no content to send for this request, but the headers may be useful. */
export interface OAuth2Valid204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface OAuth2Invalid204Response extends HttpResponse {
  status: "204";
}

/** Access is forbidden */
export interface OAuth2Invalid403Response extends HttpResponse {
  status: "403";
  body: InvalidAuthOutput;
}
