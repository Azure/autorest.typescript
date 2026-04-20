// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RLCModel } from "../interfaces.js";

export function getPackageName(model: RLCModel): string {
  return model.options?.packageDetails?.name ?? model.libraryName;
}
