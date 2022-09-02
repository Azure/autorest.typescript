import { RequestParameters } from "@azure-rest/core-client";
import { InputModel, RoundTripModel } from "./models";

export interface NestedModelsBasicSendNestedModelBodyParam {
  /** Input model with nested model properties. */
  body: InputModel;
}

export type NestedModelsBasicSendNestedModelParameters =
  NestedModelsBasicSendNestedModelBodyParam & RequestParameters;
export type NestedModelsBasicGetNestedModelParameters = RequestParameters;

export interface NestedModelsBasicSetNestedModelBodyParam {
  /** Round-trip model with nested model properties */
  body: RoundTripModel;
}

export type NestedModelsBasicSetNestedModelParameters =
  NestedModelsBasicSetNestedModelBodyParam & RequestParameters;
