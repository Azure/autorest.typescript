// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  CapabilitiesListByLocationOptionalParams,
  CapabilitiesListByLocationResponse,
} from "../models/index.js";

/** Interface representing a Capabilities. */
export interface Capabilities {
  /**
   * Gets the subscription capabilities available for the specified location.
   * @param locationName The location name whose capabilities are retrieved.
   * @param options The options parameters.
   */
  listByLocation(
    locationName: string,
    options?: CapabilitiesListByLocationOptionalParams,
  ): Promise<CapabilitiesListByLocationResponse>;
}
