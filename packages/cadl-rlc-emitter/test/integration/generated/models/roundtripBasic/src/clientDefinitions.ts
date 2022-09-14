import { RoundTripBasicGetModelParameters } from "./parameters";
import { RoundTripBasicGetModel200Response } from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetModel {
  get(
    options: RoundTripBasicGetModelParameters
  ): StreamableMethod<RoundTripBasicGetModel200Response>;
}

export interface Routes {
  /** Resource for '/roundtrip-basic/models' has methods for the following verbs: get */
  (path: "/roundtrip-basic/models"): GetModel;
}

export type RoundTripBasicClient = Client & {
  path: Routes;
};
