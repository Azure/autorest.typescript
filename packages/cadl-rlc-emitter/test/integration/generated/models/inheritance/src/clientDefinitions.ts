import {
  BasicPolymorphicModelsSetValueParameters,
  BasicPolymorphicModelsSetValueWithPolymorphicPropertyParameters,
} from "./parameters";
import {
  BasicPolymorphicModelsSetValue200Response,
  BasicPolymorphicModelsSetValueDefaultResponse,
  BasicPolymorphicModelsSetValueWithPolymorphicProperty200Response,
  BasicPolymorphicModelsSetValueWithPolymorphicPropertyDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for BasicPolymorphicModels operations */
export interface BasicPolymorphicModelsOperations {
  setValue(
    options?: BasicPolymorphicModelsSetValueParameters
  ): StreamableMethod<
    | BasicPolymorphicModelsSetValue200Response
    | BasicPolymorphicModelsSetValueDefaultResponse
  >;
  setValueWithPolymorphicProperty(
    options?: BasicPolymorphicModelsSetValueWithPolymorphicPropertyParameters
  ): StreamableMethod<
    | BasicPolymorphicModelsSetValueWithPolymorphicProperty200Response
    | BasicPolymorphicModelsSetValueWithPolymorphicPropertyDefaultResponse
  >;
}

export interface SetValue {
  put(
    options?: BasicPolymorphicModelsSetValueParameters
  ): StreamableMethod<
    | BasicPolymorphicModelsSetValue200Response
    | BasicPolymorphicModelsSetValueDefaultResponse
  >;
}

export interface SetValueWithPolymorphicProperty {
  put(
    options?: BasicPolymorphicModelsSetValueWithPolymorphicPropertyParameters
  ): StreamableMethod<
    | BasicPolymorphicModelsSetValueWithPolymorphicProperty200Response
    | BasicPolymorphicModelsSetValueWithPolymorphicPropertyDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/model' has methods for the following verbs: put */
  (path: "/model"): SetValue;
  /** Resource for '/property' has methods for the following verbs: put */
  (path: "/property"): SetValueWithPolymorphicProperty;
}

export type InheritanceClient = Client & {
  path: Routes;
  basicPolymorphicModels: BasicPolymorphicModelsOperations;
};
