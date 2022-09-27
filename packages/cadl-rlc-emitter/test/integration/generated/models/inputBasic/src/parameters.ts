import { RequestParameters } from "@azure-rest/core-client";
import { InputModel } from "./models";

export interface InputBasicGetModelBodyParam {
  body: InputModel;
}

export type InputBasicGetModelParameters = InputBasicGetModelBodyParam &
  RequestParameters;
