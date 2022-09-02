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
  /** Resource for '/polymorphic/model' has methods for the following verbs: put */
  (path: "/polymorphic/model"): SetValue;
  /** Resource for '/polymorphic/property' has methods for the following verbs: put */
  (path: "/polymorphic/property"): SetValueWithPolymorphicProperty;
}

export type BasicPolymorphicModelsClient = Client & {
  path: Routes;
  basicPolymorphicModels: BasicPolymorphicModelsOperations;
};
