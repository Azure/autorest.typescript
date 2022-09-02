import { RequestParameters } from "@azure-rest/core-client";
import { InputModel, RoundTripModel } from "./models";

export interface OptionalPropertiesSendOptionalPropertyModelBodyParam {
  /** Input model with optional properties. */
  body: InputModel;
}

export type OptionalPropertiesSendOptionalPropertyModelParameters =
  OptionalPropertiesSendOptionalPropertyModelBodyParam & RequestParameters;
export type OptionalPropertiesGetOptionalPropertyModelParameters =
  RequestParameters;

export interface OptionalPropertiesSetOptionalPropertyModelBodyParam {
  /** Round-trip model with optional properties. */
  body: RoundTripModel;
}

export type OptionalPropertiesSetOptionalPropertyModelParameters =
  OptionalPropertiesSetOptionalPropertyModelBodyParam & RequestParameters;
