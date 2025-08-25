// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { PathsGetEmptyOptionalParams } from "../models";

/** Interface representing a Paths. */
export interface Paths {
  /**
   * Get a 200 to test a valid base uri
   * @param vault The vault name, e.g. https://myvault
   * @param secret Secret value.
   * @param keyName The key name with value 'key1'.
   * @param options The options parameters.
   */
  getEmpty(
    vault: string,
    secret: string,
    keyName: string,
    options?: PathsGetEmptyOptionalParams,
  ): Promise<void>;
}
