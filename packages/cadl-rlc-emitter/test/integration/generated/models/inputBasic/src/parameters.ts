import { RequestParameters } from "@azure-rest/core-client";
import { InputModel } from "./models";

export interface InputBasicGetModelBodyParam {
  /** Input Model */
  body: InputModel;
}

export type InputBasicGetModelParameters = InputBasicGetModelBodyParam &
  RequestParameters;
