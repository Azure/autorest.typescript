// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  FlattencomplexGetValidOptionalParams,
  FlattencomplexGetValidResponse,
} from "../models";

/** Interface representing a Flattencomplex. */
export interface Flattencomplex {
  /** @param options The options parameters. */
  getValid(
    options?: FlattencomplexGetValidOptionalParams,
  ): Promise<FlattencomplexGetValidResponse>;
}
