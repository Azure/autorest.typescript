// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { GenerationOptions } from "./models.js";

export interface LongRunningRpcBodyParam {
  body?: GenerationOptions;
}

export type LongRunningRpcParameters = LongRunningRpcBodyParam &
  RequestParameters;
