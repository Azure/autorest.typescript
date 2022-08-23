import { OutputBasicGetModelParameters } from "./parameters";
import {
  OutputBasicGetModel200Response,
  OutputBasicGetModelDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetModel {
  get(
    options: OutputBasicGetModelParameters
  ): StreamableMethod<
    OutputBasicGetModel200Response | OutputBasicGetModelDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/output-basic/models' has methods for the following verbs: get */
  (path: "/output-basic/models"): GetModel;
}

export type OutputBasicClient = Client & {
  path: Routes;
};
