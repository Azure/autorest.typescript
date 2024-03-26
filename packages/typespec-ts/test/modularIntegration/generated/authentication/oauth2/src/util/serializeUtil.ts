// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { InvalidAuth } from "../models/models.js";
import { InvalidAuthOutput as RestInvalidAuth } from "../rest/index.js";

export function deserializeInvalidAuth(o: RestInvalidAuth): InvalidAuth {
  return {
    error: o["error"],
  };
}
