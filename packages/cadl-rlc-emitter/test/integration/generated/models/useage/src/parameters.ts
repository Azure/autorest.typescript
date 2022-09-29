import { RequestParameters } from "@azure-rest/core-client";
import { RoundTripModel } from "./models";

export interface RoundTripBasicGetModelBodyParam {
  body: RoundTripModel;
}

export type RoundTripBasicGetModelParameters = RoundTripBasicGetModelBodyParam &
  RequestParameters;
