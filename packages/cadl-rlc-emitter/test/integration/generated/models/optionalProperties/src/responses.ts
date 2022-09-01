import { HttpResponse } from "@azure-rest/core-client";
import { OutputModelOutput, RoundTripModelOutput } from "./outputModels";

/** The request has succeeded. */
export interface OptionalPropertiesSendOptionalPropertyModel200Response
  extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface OptionalPropertiesGetOptionalPropertyModel200Response
  extends HttpResponse {
  status: "200";
  body: OutputModelOutput;
}

/** The request has succeeded. */
export interface OptionalPropertiesSetOptionalPropertyModel200Response
  extends HttpResponse {
  status: "200";
  body: RoundTripModelOutput;
}
