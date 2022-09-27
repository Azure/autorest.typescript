import {
  NestedModelsBasicSendNestedModelParameters,
  NestedModelsBasicGetNestedModelParameters,
  NestedModelsBasicSetNestedModelParameters,
} from "./parameters";
import {
  NestedModelsBasicSendNestedModel200Response,
  NestedModelsBasicGetNestedModel200Response,
  NestedModelsBasicSetNestedModel200Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for NestedModelsBasic operations */
export interface NestedModelsBasicOperations {
  sendNestedModel(
    options: NestedModelsBasicSendNestedModelParameters
  ): StreamableMethod<NestedModelsBasicSendNestedModel200Response>;
  getNestedModel(
    options?: NestedModelsBasicGetNestedModelParameters
  ): StreamableMethod<NestedModelsBasicGetNestedModel200Response>;
  setNestedModel(
    options: NestedModelsBasicSetNestedModelParameters
  ): StreamableMethod<NestedModelsBasicSetNestedModel200Response>;
}

export interface SendNestedModel {
  post(
    options: NestedModelsBasicSendNestedModelParameters
  ): StreamableMethod<NestedModelsBasicSendNestedModel200Response>;
  get(
    options?: NestedModelsBasicGetNestedModelParameters
  ): StreamableMethod<NestedModelsBasicGetNestedModel200Response>;
  put(
    options: NestedModelsBasicSetNestedModelParameters
  ): StreamableMethod<NestedModelsBasicSetNestedModel200Response>;
}

export interface Routes {
  /** Resource for '/nested-models/models' has methods for the following verbs: post, get, put */
  (path: "/nested-models/models"): SendNestedModel;
}

export type NestedModelsBasicClient = Client & {
  path: Routes;
  nestedModelsBasic: NestedModelsBasicOperations;
};
