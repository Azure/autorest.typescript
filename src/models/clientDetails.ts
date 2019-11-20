// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ModelDetails } from "./modelDetails";
import { UnionDetails } from "./unionDetails";

export interface ClientDetails {
  models: ModelDetails[],
  unions: UnionDetails[]
}
