import {
  ReadonlyPropertiesGetOptionalPropertyModelParameters,
  ReadonlyPropertiesSetOptionalPropertyModelParameters,
} from "./parameters";
import {
  ReadonlyPropertiesGetOptionalPropertyModel200Response,
  ReadonlyPropertiesSetOptionalPropertyModel200Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for ReadonlyProperties operations */
export interface ReadonlyPropertiesOperations {
  getOptionalPropertyModel(
    options?: ReadonlyPropertiesGetOptionalPropertyModelParameters
  ): StreamableMethod<ReadonlyPropertiesGetOptionalPropertyModel200Response>;
  setOptionalPropertyModel(
    options: ReadonlyPropertiesSetOptionalPropertyModelParameters
  ): StreamableMethod<ReadonlyPropertiesSetOptionalPropertyModel200Response>;
}

export interface GetOptionalPropertyModel {
  get(
    options?: ReadonlyPropertiesGetOptionalPropertyModelParameters
  ): StreamableMethod<ReadonlyPropertiesGetOptionalPropertyModel200Response>;
  put(
    options: ReadonlyPropertiesSetOptionalPropertyModelParameters
  ): StreamableMethod<ReadonlyPropertiesSetOptionalPropertyModel200Response>;
}

export interface Routes {
  /** Resource for '/readonly-properties/models' has methods for the following verbs: get, put */
  (path: "/readonly-properties/models"): GetOptionalPropertyModel;
}

export type ReadonlyPropertiesClient = Client & {
  path: Routes;
  readonlyProperties: ReadonlyPropertiesOperations;
};
