import { RequestParameters } from "@azure-rest/core-client";
import { InputModel, RoundTripModel } from "./models";

export interface OptionalPropertiesSendOptionalPropertyModelBodyParam {
  body: InputModel;
}

export type OptionalPropertiesSendOptionalPropertyModelParameters =
  OptionalPropertiesSendOptionalPropertyModelBodyParam & RequestParameters;
export type OptionalPropertiesGetOptionalPropertyModelParameters =
  RequestParameters;

export interface OptionalPropertiesSetOptionalPropertyModelBodyParam {
  body: RoundTripModel;
}

export type OptionalPropertiesSetOptionalPropertyModelParameters =
  OptionalPropertiesSetOptionalPropertyModelBodyParam & RequestParameters;
