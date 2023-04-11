// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import {
  InternalModelOutput,
  ModelOnlyUsedByInternalOperationOutput,
} from "./outputModels";

/** The request has succeeded. */
export interface GetInternal200Response extends HttpResponse {
  status: "200";
  body: InternalModelOutput;
}

/** The request has succeeded. */
export interface PostInternal200Response extends HttpResponse {
  status: "200";
  body: ModelOnlyUsedByInternalOperationOutput;
}
