// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { RoundTripModel } from "./models";

export type GetOptionalPropertyModelParameters = RequestParameters;

export interface SetOptionalPropertyModelBodyParam {
  body: RoundTripModel;
}

export type SetOptionalPropertyModelParameters =
  SetOptionalPropertyModelBodyParam & RequestParameters;
