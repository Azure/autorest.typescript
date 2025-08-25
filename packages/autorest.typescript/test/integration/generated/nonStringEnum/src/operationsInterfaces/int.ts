// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  IntPutOptionalParams,
  IntPutResponse,
  IntGetOptionalParams,
  IntGetResponse,
} from "../models";

/** Interface representing a Int. */
export interface Int {
  /**
   * Put an int enum
   * @param options The options parameters.
   */
  put(options?: IntPutOptionalParams): Promise<IntPutResponse>;
  /**
   * Get an int enum
   * @param options The options parameters.
   */
  get(options?: IntGetOptionalParams): Promise<IntGetResponse>;
}
