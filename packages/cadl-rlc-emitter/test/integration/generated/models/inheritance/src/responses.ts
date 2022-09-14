import { HttpResponse } from "@azure-rest/core-client";
import {
  BaseClassOutput,
  ModelWithPolymorphicPropertyOutput,
} from "./outputModels";

/** The request has succeeded. */
export interface BasicPolymorphicModelsSetValue200Response
  extends HttpResponse {
  status: "200";
  body: BaseClassOutput;
}

/** The request has succeeded. */
export interface BasicPolymorphicModelsSetValueWithPolymorphicProperty200Response
  extends HttpResponse {
  status: "200";
  body: ModelWithPolymorphicPropertyOutput;
}
