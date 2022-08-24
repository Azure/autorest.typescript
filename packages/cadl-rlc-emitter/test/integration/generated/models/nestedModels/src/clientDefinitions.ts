import {
  NestedModelsBasicSendNestedModelParameters,
  NestedModelsBasicGetNestedModelParameters,
  NestedModelsBasicSetNestedModelParameters,
} from "./parameters";
import {
  NestedModelsBasicSendNestedModel200Response,
  NestedModelsBasicSendNestedModelDefaultResponse,
  NestedModelsBasicGetNestedModel200Response,
  NestedModelsBasicGetNestedModelDefaultResponse,
  NestedModelsBasicSetNestedModel200Response,
  NestedModelsBasicSetNestedModelDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for NestedModelsBasic operations */
export interface NestedModelsBasicOperations {
  sendNestedModel(
    options: NestedModelsBasicSendNestedModelParameters
  ): StreamableMethod<
    | NestedModelsBasicSendNestedModel200Response
    | NestedModelsBasicSendNestedModelDefaultResponse
  >;
  getNestedModel(
    options: NestedModelsBasicGetNestedModelParameters
  ): StreamableMethod<
    | NestedModelsBasicGetNestedModel200Response
    | NestedModelsBasicGetNestedModelDefaultResponse
  >;
  setNestedModel(
    options: NestedModelsBasicSetNestedModelParameters
  ): StreamableMethod<
    | NestedModelsBasicSetNestedModel200Response
    | NestedModelsBasicSetNestedModelDefaultResponse
  >;
}

export interface SendNestedModel {
  post(
    options: NestedModelsBasicSendNestedModelParameters
  ): StreamableMethod<
    | NestedModelsBasicSendNestedModel200Response
    | NestedModelsBasicSendNestedModelDefaultResponse
  >;
  get(
    options: NestedModelsBasicGetNestedModelParameters
  ): StreamableMethod<
    | NestedModelsBasicGetNestedModel200Response
    | NestedModelsBasicGetNestedModelDefaultResponse
  >;
  put(
    options: NestedModelsBasicSetNestedModelParameters
  ): StreamableMethod<
    | NestedModelsBasicSetNestedModel200Response
    | NestedModelsBasicSetNestedModelDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/nested-models/models' has methods for the following verbs: post, get, put */
  (path: "/nested-models/models"): SendNestedModel;
}

export type NestedModelsBasicClient = Client & {
  path: Routes;
  nestedModelsBasic: NestedModelsBasicOperations;
};
