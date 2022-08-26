import { HttpResponse } from "@azure-rest/core-client";
import { ErrorResponseOutput } from "./outputModels";

/** The request has succeeded. */
export interface InputBasicGetModel200Response extends HttpResponse {
  status: "200";
}

export interface InputBasicGetModelDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
