// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ApplicationGatewayWafDynamicManifestResult,
  ApplicationGatewayWafDynamicManifestsGetOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ApplicationGatewayWafDynamicManifests. */
export interface ApplicationGatewayWafDynamicManifests {
  /**
   * Gets the regional application gateway waf manifest.
   * @param location The region where the nrp are located at.
   * @param options The options parameters.
   */
  list(
    location: string,
    options?: ApplicationGatewayWafDynamicManifestsGetOptionalParams,
  ): PagedAsyncIterableIterator<ApplicationGatewayWafDynamicManifestResult>;
}
