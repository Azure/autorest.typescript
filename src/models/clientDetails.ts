// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ModelDetails } from "./modelDetails";
import { UnionDetails } from "./unionDetails";
import { OperationGroupDetails } from "./operationDetails";
import { CompositeMapper } from "@azure/core-http";

export interface ClientDetails {
  name: string;
  className: string;
  description?: string;
  sourceFileName: string;
  models: ModelDetails[];
  mappers: CompositeMapper[];
  unions: UnionDetails[];
  operationGroups: OperationGroupDetails[];
}
