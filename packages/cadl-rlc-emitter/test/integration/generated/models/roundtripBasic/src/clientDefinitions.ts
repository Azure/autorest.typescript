import { RoundTripBasicGetModelParameters } from "./parameters";
import {
  RoundTripBasicGetModel200Response,
  RoundTripBasicGetModelDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for RoundTripBasic operations */
export interface RoundTripBasicOperations {
  getModel(
    options: RoundTripBasicGetModelParameters
  ): StreamableMethod<
    RoundTripBasicGetModel200Response | RoundTripBasicGetModelDefaultResponse
  >;
}

export interface GetModel {
  get(
    options: RoundTripBasicGetModelParameters
  ): StreamableMethod<
    RoundTripBasicGetModel200Response | RoundTripBasicGetModelDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/roundtrip-basic/models' has methods for the following verbs: get */
  (path: "/roundtrip-basic/models"): GetModel;
}

export type RoundTripBasicClient = Client & {
  path: Routes;
  roundTripBasic: RoundTripBasicOperations;
};
