import { RequestParameters } from "@azure-rest/core-client";
import { InputModel, RoundTripModel } from "./models";

export interface EnumPropertiesBasicSendEnumPropertyModelBodyParam {
  body: InputModel;
}

export type EnumPropertiesBasicSendEnumPropertyModelParameters =
  EnumPropertiesBasicSendEnumPropertyModelBodyParam & RequestParameters;
export type EnumPropertiesBasicGetEnumPropertModelParameters =
  RequestParameters;

export interface EnumPropertiesBasicSetEnumPropertModelBodyParam {
  body: RoundTripModel;
}

export type EnumPropertiesBasicSetEnumPropertModelParameters =
  EnumPropertiesBasicSetEnumPropertModelBodyParam & RequestParameters;
