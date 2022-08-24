import { HttpResponse } from "@azure-rest/core-client";
import {
  PrimitivePropertyModelOutput,
  ErrorResponseOutput,
} from "./outputModels";

/** The request has succeeded. */
export interface PrimitivePropertiesGetModel200Response extends HttpResponse {
  status: "200";
  body: PrimitivePropertyModelOutput;
}

export interface PrimitivePropertiesGetModelDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
