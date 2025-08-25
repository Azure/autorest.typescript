// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { GetUrlOptionalParams, GetUrlResponse } from "../models";

/** Interface representing a Get. */
export interface Get {
  /**
   * @param testUrl
   * @param options The options parameters.
   */
  url(testUrl: string, options?: GetUrlOptionalParams): Promise<GetUrlResponse>;
}
