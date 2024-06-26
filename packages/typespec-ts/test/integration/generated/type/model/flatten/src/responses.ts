// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import {
  FlattenModelOutput,
  NestedFlattenModelOutput,
} from "./outputModels.js";

/** The request has succeeded. */
export interface PutFlattenModel200Response extends HttpResponse {
  status: "200";
  body: FlattenModelOutput;
}

/** The request has succeeded. */
export interface PutNestedFlattenModel200Response extends HttpResponse {
  status: "200";
  body: NestedFlattenModelOutput;
}
