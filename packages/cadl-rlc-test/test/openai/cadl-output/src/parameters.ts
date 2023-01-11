// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";

export interface EmbeddingsBodyParam {
  body?;
}

export type EmbeddingsParameters = EmbeddingsBodyParam & RequestParameters;

export interface CompletionsBodyParam {
  body?;
}

export type CompletionsParameters = CompletionsBodyParam & RequestParameters;
