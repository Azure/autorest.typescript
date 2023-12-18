// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { Widget1 } from "./models.js";

export interface CustomGet1BodyParam {
  body: Widget1;
}

export type CustomGet1Parameters = CustomGet1BodyParam & RequestParameters;
