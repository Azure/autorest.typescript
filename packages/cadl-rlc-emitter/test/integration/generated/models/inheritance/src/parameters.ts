import { RequestParameters } from "@azure-rest/core-client";
import { BaseClass, ModelWithPolymorphicProperty } from "./models";

export interface BasicPolymorphicModelsSetValueBodyParam {
  body: BaseClass;
}

export type BasicPolymorphicModelsSetValueParameters =
  BasicPolymorphicModelsSetValueBodyParam & RequestParameters;

export interface BasicPolymorphicModelsSetValueWithPolymorphicPropertyBodyParam {
  body: ModelWithPolymorphicProperty;
}

export type BasicPolymorphicModelsSetValueWithPolymorphicPropertyParameters =
  BasicPolymorphicModelsSetValueWithPolymorphicPropertyBodyParam &
    RequestParameters;
