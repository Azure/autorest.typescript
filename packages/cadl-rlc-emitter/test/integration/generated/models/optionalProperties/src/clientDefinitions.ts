import {
  OptionalPropertiesSendOptionalPropertyModelParameters,
  OptionalPropertiesGetOptionalPropertyModelParameters,
  OptionalPropertiesSetOptionalPropertyModelParameters,
} from "./parameters";
import {
  OptionalPropertiesSendOptionalPropertyModel200Response,
  OptionalPropertiesGetOptionalPropertyModel200Response,
  OptionalPropertiesSetOptionalPropertyModel200Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for OptionalProperties operations */
export interface OptionalPropertiesOperations {
  sendOptionalPropertyModel(
    options?: OptionalPropertiesSendOptionalPropertyModelParameters
  ): StreamableMethod<OptionalPropertiesSendOptionalPropertyModel200Response>;
  getOptionalPropertyModel(
    options?: OptionalPropertiesGetOptionalPropertyModelParameters
  ): StreamableMethod<OptionalPropertiesGetOptionalPropertyModel200Response>;
  setOptionalPropertyModel(
    options?: OptionalPropertiesSetOptionalPropertyModelParameters
  ): StreamableMethod<OptionalPropertiesSetOptionalPropertyModel200Response>;
}

export interface SendOptionalPropertyModel {
  post(
    options?: OptionalPropertiesSendOptionalPropertyModelParameters
  ): StreamableMethod<OptionalPropertiesSendOptionalPropertyModel200Response>;
  get(
    options?: OptionalPropertiesGetOptionalPropertyModelParameters
  ): StreamableMethod<OptionalPropertiesGetOptionalPropertyModel200Response>;
  put(
    options?: OptionalPropertiesSetOptionalPropertyModelParameters
  ): StreamableMethod<OptionalPropertiesSetOptionalPropertyModel200Response>;
}

export interface Routes {
  /** Resource for '/optional-properties/models' has methods for the following verbs: post, get, put */
  (path: "/optional-properties/models"): SendOptionalPropertyModel;
}

export type OptionalPropertiesClient = Client & {
  path: Routes;
  optionalProperties: OptionalPropertiesOperations;
};
