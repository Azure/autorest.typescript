import { HttpResponse } from "@azure-rest/core-client";
import {
  ErrorResponseOutput,
  OutputModelOutput,
  RoundTripModelOutput,
} from "./outputModels";

/** The request has succeeded. */
export interface EnumPropertiesBasicSendEnumPropertyModel200Response
  extends HttpResponse {
  status: "200";
}

export interface EnumPropertiesBasicSendEnumPropertyModelDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface EnumPropertiesBasicGetEnumPropertModel200Response
  extends HttpResponse {
  status: "200";
  body: OutputModelOutput;
}

export interface EnumPropertiesBasicGetEnumPropertModelDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface EnumPropertiesBasicSetEnumPropertModel200Response
  extends HttpResponse {
  status: "200";
  body: RoundTripModelOutput;
}

export interface EnumPropertiesBasicSetEnumPropertModelDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
