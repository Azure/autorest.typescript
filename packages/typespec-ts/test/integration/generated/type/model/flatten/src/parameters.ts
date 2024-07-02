// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { FlattenModel, NestedFlattenModel } from "./models.js";

export interface PutFlattenModelBodyParam {
  body: FlattenModel;
}

export type PutFlattenModelParameters = PutFlattenModelBodyParam &
  RequestParameters;

export interface PutNestedFlattenModelBodyParam {
  body: NestedFlattenModel;
}

export type PutNestedFlattenModelParameters = PutNestedFlattenModelBodyParam &
  RequestParameters;
