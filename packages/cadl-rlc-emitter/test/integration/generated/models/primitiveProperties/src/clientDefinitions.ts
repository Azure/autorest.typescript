import { PrimitivePropertiesGetModelParameters } from "./parameters";
import {
  PrimitivePropertiesGetModel200Response,
  PrimitivePropertiesGetModelDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for PrimitiveProperties operations */
export interface PrimitivePropertiesOperations {
  getModel(
    options: PrimitivePropertiesGetModelParameters
  ): StreamableMethod<
    | PrimitivePropertiesGetModel200Response
    | PrimitivePropertiesGetModelDefaultResponse
  >;
}

export interface GetModel {
  get(
    options: PrimitivePropertiesGetModelParameters
  ): StreamableMethod<
    | PrimitivePropertiesGetModel200Response
    | PrimitivePropertiesGetModelDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/primitive-properties/models' has methods for the following verbs: get */
  (path: "/primitive-properties/models"): GetModel;
}

export type PrimitivePropertyClient = Client & {
  path: Routes;
  primitiveProperties: PrimitivePropertiesOperations;
};
