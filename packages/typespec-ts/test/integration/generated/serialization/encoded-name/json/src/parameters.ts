// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { JsonEncodedNameModel } from "./models.js";

export interface PropertySendBodyParam {
  body?: JsonEncodedNameModel;
}

export type PropertySendParameters = PropertySendBodyParam & RequestParameters;
export type PropertyGetParameters = RequestParameters;
