import { RequestParameters } from "@azure-rest/core-client";
import { BaseClass, ModelWithPolymorphicProperty } from "./models";

export interface BasicPolymorphicModelsSetValueBodyParam {
  /** Example base type. */
  body: BaseClass;
}

export type BasicPolymorphicModelsSetValueParameters =
  BasicPolymorphicModelsSetValueBodyParam & RequestParameters;

export interface BasicPolymorphicModelsSetValueWithPolymorphicPropertyBodyParam {
  /** Illustrates case where a basic model has polymorphic properties. */
  body: ModelWithPolymorphicProperty;
}

export type BasicPolymorphicModelsSetValueWithPolymorphicPropertyParameters =
  BasicPolymorphicModelsSetValueWithPolymorphicPropertyBodyParam &
    RequestParameters;
