import {
  ReadonlyPropertiesGetOptionalPropertyModelParameters,
  ReadonlyPropertiesSetOptionalPropertyModelParameters,
} from "./parameters";
import {
  ReadonlyPropertiesGetOptionalPropertyModel200Response,
  ReadonlyPropertiesGetOptionalPropertyModelDefaultResponse,
  ReadonlyPropertiesSetOptionalPropertyModel200Response,
  ReadonlyPropertiesSetOptionalPropertyModelDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetOptionalPropertyModel {
  get(
    options: ReadonlyPropertiesGetOptionalPropertyModelParameters
  ): StreamableMethod<
    | ReadonlyPropertiesGetOptionalPropertyModel200Response
    | ReadonlyPropertiesGetOptionalPropertyModelDefaultResponse
  >;
  put(
    options: ReadonlyPropertiesSetOptionalPropertyModelParameters
  ): StreamableMethod<
    | ReadonlyPropertiesSetOptionalPropertyModel200Response
    | ReadonlyPropertiesSetOptionalPropertyModelDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/readonly-properties/models' has methods for the following verbs: get, put */
  (path: "/readonly-properties/models"): GetOptionalPropertyModel;
}

export type ReadonlyPropertiesClient = Client & {
  path: Routes;
};
