import { HttpResponse } from "@azure-rest/core-client";
import {
  ErrorResponseOutput,
  OutputModelOutput,
  RoundTripModelOutput,
} from "./outputModels";

/** The request has succeeded. */
export interface NestedModelsBasicSendNestedModel200Response
  extends HttpResponse {
  status: "200";
}

export interface NestedModelsBasicSendNestedModelDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface NestedModelsBasicGetNestedModel200Response
  extends HttpResponse {
  status: "200";
  body: OutputModelOutput;
}

export interface NestedModelsBasicGetNestedModelDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface NestedModelsBasicSetNestedModel200Response
  extends HttpResponse {
  status: "200";
  body: RoundTripModelOutput;
}

export interface NestedModelsBasicSetNestedModelDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
