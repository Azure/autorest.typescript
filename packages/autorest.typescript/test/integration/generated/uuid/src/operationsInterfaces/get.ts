// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { GetUuidOptionalParams, GetUuidResponse } from "../models";

/** Interface representing a Get. */
export interface Get {
  /**
   * @param testUuid
   * @param options The options parameters.
   */
  uuid(
    testUuid: string,
    options?: GetUuidOptionalParams,
  ): Promise<GetUuidResponse>;
}
