import { InputBasicGetModelParameters } from "./parameters";
import {
  InputBasicGetModel200Response,
  InputBasicGetModelDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetModel {
  get(
    options: InputBasicGetModelParameters
  ): StreamableMethod<
    InputBasicGetModel200Response | InputBasicGetModelDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/input-basic/models' has methods for the following verbs: get */
  (path: "/input-basic/models"): GetModel;
}

export type InputBasicClient = Client & {
  path: Routes;
};
