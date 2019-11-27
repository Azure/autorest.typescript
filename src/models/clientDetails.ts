// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ModelDetails } from "./modelDetails";
import { UnionDetails } from "./unionDetails";
import { OperationGroupDetails } from "./operationDetails";

export interface ClientDetails {
  name: string;
  className: string;
  description?: string;
  sourceFileName: string;
  models: ModelDetails[];
  unions: UnionDetails[];
  operationGroups: OperationGroupDetails[];
}
