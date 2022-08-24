import { HttpResponse } from "@azure-rest/core-client";
import {
  ErrorResponseOutput,
  OutputModelOutput,
  RoundTripModelOutput,
} from "./outputModels";

/** The request has succeeded. */
export interface OptionalPropertiesSendOptionalPropertyModel200Response
  extends HttpResponse {
  status: "200";
}

export interface OptionalPropertiesSendOptionalPropertyModelDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface OptionalPropertiesGetOptionalPropertyModel200Response
  extends HttpResponse {
  status: "200";
  body: OutputModelOutput;
}

export interface OptionalPropertiesGetOptionalPropertyModelDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface OptionalPropertiesSetOptionalPropertyModel200Response
  extends HttpResponse {
  status: "200";
  body: RoundTripModelOutput;
}

export interface OptionalPropertiesSetOptionalPropertyModelDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
