import { RequestParameters } from "@azure-rest/core-client";
import { PrimitivePropertyModel } from "./models";

export interface PrimitivePropertiesGetModelBodyParam {
  body: PrimitivePropertyModel;
}

export type PrimitivePropertiesGetModelParameters =
  PrimitivePropertiesGetModelBodyParam & RequestParameters;
