// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { Input } from "./models";

export type DevDrivenGetModelParameters = RequestParameters;

export interface DevDrivenPostModelBodyParam {
  /** Please put {'hello': 'world!'} */
  body: Input;
}

export type DevDrivenPostModelParameters = DevDrivenPostModelBodyParam &
  RequestParameters;
export type DevDrivenGetPagesParameters = RequestParameters;
export type DevDrivenLroParameters = RequestParameters;
