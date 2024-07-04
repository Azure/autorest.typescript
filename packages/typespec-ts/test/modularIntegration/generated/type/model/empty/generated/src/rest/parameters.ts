// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { EmptyInput, EmptyInputOutput } from "./models.js";

export interface PutEmptyBodyParam {
  body: EmptyInput;
}

export type PutEmptyParameters = PutEmptyBodyParam & RequestParameters;
export type GetEmptyParameters = RequestParameters;

export interface PostRoundTripEmptyBodyParam {
  body: EmptyInputOutput;
}

export type PostRoundTripEmptyParameters = PostRoundTripEmptyBodyParam &
  RequestParameters;
