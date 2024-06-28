// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { ModelV2 } from "./models.js";

export interface V2BodyParam {
  body: ModelV2;
}

export type V2Parameters = V2BodyParam & RequestParameters;
