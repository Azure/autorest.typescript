import { HttpResponse } from "@azure-rest/core-client";
import {
  OutputModelOutput,
  ErrorResponseOutput,
  RoundTripModelOutput,
} from "./outputModels";

/** The request has succeeded. */
export interface ReadonlyPropertiesGetOptionalPropertyModel200Response
  extends HttpResponse {
  status: "200";
  body: OutputModelOutput;
}

export interface ReadonlyPropertiesGetOptionalPropertyModelDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ReadonlyPropertiesSetOptionalPropertyModel200Response
  extends HttpResponse {
  status: "200";
  body: RoundTripModelOutput;
}

export interface ReadonlyPropertiesSetOptionalPropertyModelDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
