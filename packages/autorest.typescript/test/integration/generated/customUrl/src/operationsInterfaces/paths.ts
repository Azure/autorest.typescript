// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { PathsGetEmptyOptionalParams } from "../models";

/** Interface representing a Paths. */
export interface Paths {
  /**
   * Get a 200 to test a valid base uri
   * @param accountName Account Name
   * @param options The options parameters.
   */
  getEmpty(
    accountName: string,
    options?: PathsGetEmptyOptionalParams,
  ): Promise<void>;
}
