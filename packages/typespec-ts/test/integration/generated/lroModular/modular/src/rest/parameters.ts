// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { User } from "./models.js";

export interface CreateOrReplaceBodyParam {
  /** The resource instance. */
  body: User;
}

export type CreateOrReplaceParameters = CreateOrReplaceBodyParam &
  RequestParameters;
