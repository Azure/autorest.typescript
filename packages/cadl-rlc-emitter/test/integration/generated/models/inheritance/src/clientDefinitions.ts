import {
  BasicPolymorphicModelsSetValueParameters,
  BasicPolymorphicModelsSetValueWithPolymorphicPropertyParameters,
} from "./parameters";
import {
  BasicPolymorphicModelsSetValue200Response,
  BasicPolymorphicModelsSetValueWithPolymorphicProperty200Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for BasicPolymorphicModels operations */
export interface BasicPolymorphicModelsOperations {
  setValue(
    options: BasicPolymorphicModelsSetValueParameters
  ): StreamableMethod<BasicPolymorphicModelsSetValue200Response>;
  setValueWithPolymorphicProperty(
    options: BasicPolymorphicModelsSetValueWithPolymorphicPropertyParameters
  ): StreamableMethod<BasicPolymorphicModelsSetValueWithPolymorphicProperty200Response>;
}

export interface SetValue {
  put(
    options: BasicPolymorphicModelsSetValueParameters
  ): StreamableMethod<BasicPolymorphicModelsSetValue200Response>;
}

export interface SetValueWithPolymorphicProperty {
  put(
    options: BasicPolymorphicModelsSetValueWithPolymorphicPropertyParameters
  ): StreamableMethod<BasicPolymorphicModelsSetValueWithPolymorphicProperty200Response>;
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
