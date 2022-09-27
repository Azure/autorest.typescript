import { InputBasicGetModelParameters } from "./parameters";
import { InputBasicGetModel200Response } from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for InputBasic operations */
export interface InputBasicOperations {
  getModel(
    options: InputBasicGetModelParameters
  ): StreamableMethod<InputBasicGetModel200Response>;
}

export interface GetModel {
  get(
    options: InputBasicGetModelParameters
  ): StreamableMethod<InputBasicGetModel200Response>;
}

export interface Routes {
  /** Resource for '/input-basic/models' has methods for the following verbs: get */
  (path: "/input-basic/models"): GetModel;
}

export type InputBasicClient = Client & {
  path: Routes;
  inputBasic: InputBasicOperations;
};
