// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  FloatPutOptionalParams,
  FloatPutResponse,
  FloatGetOptionalParams,
  FloatGetResponse,
} from "../models";

/** Interface representing a Float. */
export interface Float {
  /**
   * Put a float enum
   * @param options The options parameters.
   */
  put(options?: FloatPutOptionalParams): Promise<FloatPutResponse>;
  /**
   * Get a float enum
   * @param options The options parameters.
   */
  get(options?: FloatGetOptionalParams): Promise<FloatGetResponse>;
}
