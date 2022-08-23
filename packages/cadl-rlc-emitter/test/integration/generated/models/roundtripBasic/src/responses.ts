import { HttpResponse } from "@azure-rest/core-client";
import { RoundTripModelOutput, ErrorResponseOutput } from "./outputModels";

/** The request has succeeded. */
export interface RoundTripBasicGetModel200Response extends HttpResponse {
  status: "200";
  body: RoundTripModelOutput;
}

export interface RoundTripBasicGetModelDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
