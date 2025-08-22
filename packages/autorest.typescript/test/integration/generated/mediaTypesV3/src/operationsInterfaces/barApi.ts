// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  BarApiPostSendOnDefaultOptionalParams,
  BarApiPostSendOnDefaultResponse,
} from "../models";

/** Interface representing a BarApi. */
export interface BarApi {
  /**
   * Send payload to Foo service.
   * @param data simple string
   * @param options The options parameters.
   */
  postSendOnDefault(
    data: string,
    options?: BarApiPostSendOnDefaultOptionalParams,
  ): Promise<BarApiPostSendOnDefaultResponse>;
}
