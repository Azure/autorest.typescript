import { RequestParameters } from "@azure-rest/core-client";
import { InputModel, RoundTripModel } from "./models";

export interface NestedModelsBasicSendNestedModelBodyParam {
  body: InputModel;
}

export type NestedModelsBasicSendNestedModelParameters =
  NestedModelsBasicSendNestedModelBodyParam & RequestParameters;
export type NestedModelsBasicGetNestedModelParameters = RequestParameters;

export interface NestedModelsBasicSetNestedModelBodyParam {
  body: RoundTripModel;
}

export type NestedModelsBasicSetNestedModelParameters =
  NestedModelsBasicSetNestedModelBodyParam & RequestParameters;
