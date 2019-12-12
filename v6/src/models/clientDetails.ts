// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ModelDetails } from "./modelDetails";
import { UnionDetails } from "./unionDetails";
import { OperationGroupDetails } from "./operationDetails";
import { Mapper } from "@azure/core-http";

export interface ClientDetails {
  name: string;
  className: string;
  description?: string;
  sourceFileName: string;
  models: ModelDetails[];
  mappers: Mapper[];
  unions: UnionDetails[];
  operationGroups: OperationGroupDetails[];
}
