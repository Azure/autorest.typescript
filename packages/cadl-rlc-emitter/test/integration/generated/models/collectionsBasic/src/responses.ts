import { HttpResponse } from "@azure-rest/core-client";
import {
  ErrorResponseOutput,
  OutputModelOutput,
  RoundTripModelOutput,
} from "./outputModels";

/** The request has succeeded. */
export interface CollectionPropertiesBasicSendCollectionModel200Response
  extends HttpResponse {
  status: "200";
}

export interface CollectionPropertiesBasicSendCollectionModelDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface CollectionPropertiesBasicGetCollectionModel200Response
  extends HttpResponse {
  status: "200";
  body: OutputModelOutput;
}

export interface CollectionPropertiesBasicGetCollectionModelDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface CollectionPropertiesBasicSetCollectionModel200Response
  extends HttpResponse {
  status: "200";
  body: RoundTripModelOutput;
}

export interface CollectionPropertiesBasicSetCollectionModelDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
