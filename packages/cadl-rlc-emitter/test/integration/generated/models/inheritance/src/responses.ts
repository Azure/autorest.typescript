import { HttpResponse } from "@azure-rest/core-client";
import {
  BaseClassOutput,
  ErrorResponseOutput,
  ModelWithPolymorphicPropertyOutput,
} from "./outputModels";

/** The request has succeeded. */
export interface BasicPolymorphicModelsSetValue200Response
  extends HttpResponse {
  status: "200";
  body: BaseClassOutput;
}

export interface BasicPolymorphicModelsSetValueDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface BasicPolymorphicModelsSetValueWithPolymorphicProperty200Response
  extends HttpResponse {
  status: "200";
  body: ModelWithPolymorphicPropertyOutput;
}

export interface BasicPolymorphicModelsSetValueWithPolymorphicPropertyDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
