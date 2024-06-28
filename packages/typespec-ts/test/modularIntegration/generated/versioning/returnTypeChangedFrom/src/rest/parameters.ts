// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";

export interface TestBodyParam {
  body: string;
}

export type TestParameters = TestBodyParam & RequestParameters;
