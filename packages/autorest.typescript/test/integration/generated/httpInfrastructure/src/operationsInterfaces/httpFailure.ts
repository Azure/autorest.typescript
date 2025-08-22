// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  HttpFailureGetEmptyErrorOptionalParams,
  HttpFailureGetEmptyErrorResponse,
  HttpFailureGetNoModelErrorOptionalParams,
  HttpFailureGetNoModelErrorResponse,
  HttpFailureGetNoModelEmptyOptionalParams,
  HttpFailureGetNoModelEmptyResponse,
} from "../models";

/** Interface representing a HttpFailure. */
export interface HttpFailure {
  /**
   * Get empty error form server
   * @param options The options parameters.
   */
  getEmptyError(
    options?: HttpFailureGetEmptyErrorOptionalParams,
  ): Promise<HttpFailureGetEmptyErrorResponse>;
  /**
   * Get empty error form server
   * @param options The options parameters.
   */
  getNoModelError(
    options?: HttpFailureGetNoModelErrorOptionalParams,
  ): Promise<HttpFailureGetNoModelErrorResponse>;
  /**
   * Get empty response from server
   * @param options The options parameters.
   */
  getNoModelEmpty(
    options?: HttpFailureGetNoModelEmptyOptionalParams,
  ): Promise<HttpFailureGetNoModelEmptyResponse>;
}
