// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  QueriesArrayStringMultiNullOptionalParams,
  QueriesArrayStringMultiEmptyOptionalParams,
  QueriesArrayStringMultiValidOptionalParams,
} from "../models";

/** Interface representing a Queries. */
export interface Queries {
  /**
   * Get a null array of string using the multi-array format
   * @param options The options parameters.
   */
  arrayStringMultiNull(
    options?: QueriesArrayStringMultiNullOptionalParams,
  ): Promise<void>;
  /**
   * Get an empty array [] of string using the multi-array format
   * @param options The options parameters.
   */
  arrayStringMultiEmpty(
    options?: QueriesArrayStringMultiEmptyOptionalParams,
  ): Promise<void>;
  /**
   * Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the
   * mult-array format
   * @param options The options parameters.
   */
  arrayStringMultiValid(
    options?: QueriesArrayStringMultiValidOptionalParams,
  ): Promise<void>;
}
