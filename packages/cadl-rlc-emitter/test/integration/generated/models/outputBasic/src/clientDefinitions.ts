import { OutputBasicGetModelParameters } from "./parameters";
import { OutputBasicGetModel200Response } from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for OutputBasic operations */
export interface OutputBasicOperations {
  getModel(
    options?: OutputBasicGetModelParameters
  ): StreamableMethod<OutputBasicGetModel200Response>;
}

export interface GetModel {
  get(
    options?: OutputBasicGetModelParameters
  ): StreamableMethod<OutputBasicGetModel200Response>;
}

export interface Routes {
  /** Resource for '/output-basic/models' has methods for the following verbs: get */
  (path: "/output-basic/models"): GetModel;
}

export type OutputBasicClient = Client & {
  path: Routes;
  outputBasic: OutputBasicOperations;
};
