import { HttpResponse } from "@azure-rest/core-client";
import { OutputModelOutput, RoundTripModelOutput } from "./outputModels";

/** The request has succeeded. */
export interface NestedModelsBasicSendNestedModel200Response
  extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface NestedModelsBasicGetNestedModel200Response
  extends HttpResponse {
  status: "200";
  body: OutputModelOutput;
}

/** The request has succeeded. */
export interface NestedModelsBasicSetNestedModel200Response
  extends HttpResponse {
  status: "200";
  body: RoundTripModelOutput;
}
