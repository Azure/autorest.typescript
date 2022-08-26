import {
  OptionalPropertiesSendOptionalPropertyModelParameters,
  OptionalPropertiesGetOptionalPropertyModelParameters,
  OptionalPropertiesSetOptionalPropertyModelParameters,
} from "./parameters";
import {
  OptionalPropertiesSendOptionalPropertyModel200Response,
  OptionalPropertiesSendOptionalPropertyModelDefaultResponse,
  OptionalPropertiesGetOptionalPropertyModel200Response,
  OptionalPropertiesGetOptionalPropertyModelDefaultResponse,
  OptionalPropertiesSetOptionalPropertyModel200Response,
  OptionalPropertiesSetOptionalPropertyModelDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for OptionalProperties operations */
export interface OptionalPropertiesOperations {
  sendOptionalPropertyModel(
    options?: OptionalPropertiesSendOptionalPropertyModelParameters
  ): StreamableMethod<
    | OptionalPropertiesSendOptionalPropertyModel200Response
    | OptionalPropertiesSendOptionalPropertyModelDefaultResponse
  >;
  getOptionalPropertyModel(
    options?: OptionalPropertiesGetOptionalPropertyModelParameters
  ): StreamableMethod<
    | OptionalPropertiesGetOptionalPropertyModel200Response
    | OptionalPropertiesGetOptionalPropertyModelDefaultResponse
  >;
  setOptionalPropertyModel(
    options?: OptionalPropertiesSetOptionalPropertyModelParameters
  ): StreamableMethod<
    | OptionalPropertiesSetOptionalPropertyModel200Response
    | OptionalPropertiesSetOptionalPropertyModelDefaultResponse
  >;
}

export interface SendOptionalPropertyModel {
  post(
    options?: OptionalPropertiesSendOptionalPropertyModelParameters
  ): StreamableMethod<
    | OptionalPropertiesSendOptionalPropertyModel200Response
    | OptionalPropertiesSendOptionalPropertyModelDefaultResponse
  >;
  get(
    options?: OptionalPropertiesGetOptionalPropertyModelParameters
  ): StreamableMethod<
    | OptionalPropertiesGetOptionalPropertyModel200Response
    | OptionalPropertiesGetOptionalPropertyModelDefaultResponse
  >;
  put(
    options?: OptionalPropertiesSetOptionalPropertyModelParameters
  ): StreamableMethod<
    | OptionalPropertiesSetOptionalPropertyModel200Response
    | OptionalPropertiesSetOptionalPropertyModelDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/optional-properties/models' has methods for the following verbs: post, get, put */
  (path: "/optional-properties/models"): SendOptionalPropertyModel;
}

export type OptionalPropertiesClient = Client & {
  path: Routes;
  optionalProperties: OptionalPropertiesOperations;
};
