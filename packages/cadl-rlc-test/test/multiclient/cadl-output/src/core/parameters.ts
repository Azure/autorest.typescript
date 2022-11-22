// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { Resource } from "./models";

export interface CadlCoreOpCreateOrUpdateBodyParam {
  body?: Resource;
}

export type CadlCoreOpCreateOrUpdateParameters =
  CadlCoreOpCreateOrUpdateBodyParam & RequestParameters;
export type CadlCoreOpGetParameters = RequestParameters;
export type CadlCoreOpDeleteParameters = RequestParameters;
export type CadlCoreOpListParameters = RequestParameters;
