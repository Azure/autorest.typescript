import { HttpResponse } from "@azure-rest/core-client";
import {
  ErrorResponseOutput,
  ModelCollectionModelOutput,
} from "./outputModels";

/** The request has succeeded. */
export interface ModelCollectionPropertiesSendCollectionModel200Response
  extends HttpResponse {
  status: "200";
}

export interface ModelCollectionPropertiesSendCollectionModelDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ModelCollectionPropertiesGetCollectionModel200Response
  extends HttpResponse {
  status: "200";
  body: ModelCollectionModelOutput;
}

export interface ModelCollectionPropertiesGetCollectionModelDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ModelCollectionPropertiesSetCollectionModel200Response
  extends HttpResponse {
  status: "200";
  body: ModelCollectionModelOutput;
}

export interface ModelCollectionPropertiesSetCollectionModelDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
