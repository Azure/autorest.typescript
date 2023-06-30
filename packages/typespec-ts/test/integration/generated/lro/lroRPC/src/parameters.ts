// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { JobData } from "./models";

export interface CreateJobBodyParam {
  body?: JobData;
}

export type CreateJobParameters = CreateJobBodyParam & RequestParameters;
