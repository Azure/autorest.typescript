// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { User } from "./models.js";

export interface ExplicitBodySimpleBodyParam {
  body: User;
}

export type ExplicitBodySimpleParameters = ExplicitBodySimpleBodyParam &
  RequestParameters;

export interface ImplicitBodySimpleBodyParam {
  body?: { name: string };
}

export type ImplicitBodySimpleParameters = ImplicitBodySimpleBodyParam &
  RequestParameters;
