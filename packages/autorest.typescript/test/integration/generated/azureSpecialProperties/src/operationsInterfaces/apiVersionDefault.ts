// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ApiVersionDefaultGetMethodGlobalValidOptionalParams,
  ApiVersionDefaultGetMethodGlobalNotProvidedValidOptionalParams,
  ApiVersionDefaultGetPathGlobalValidOptionalParams,
  ApiVersionDefaultGetSwaggerGlobalValidOptionalParams,
} from "../models";

/** Interface representing a ApiVersionDefault. */
export interface ApiVersionDefault {
  /**
   * GET method with api-version modeled in global settings.
   * @param options The options parameters.
   */
  getMethodGlobalValid(
    options?: ApiVersionDefaultGetMethodGlobalValidOptionalParams,
  ): Promise<void>;
  /**
   * GET method with api-version modeled in global settings.
   * @param options The options parameters.
   */
  getMethodGlobalNotProvidedValid(
    options?: ApiVersionDefaultGetMethodGlobalNotProvidedValidOptionalParams,
  ): Promise<void>;
  /**
   * GET method with api-version modeled in global settings.
   * @param options The options parameters.
   */
  getPathGlobalValid(
    options?: ApiVersionDefaultGetPathGlobalValidOptionalParams,
  ): Promise<void>;
  /**
   * GET method with api-version modeled in global settings.
   * @param options The options parameters.
   */
  getSwaggerGlobalValid(
    options?: ApiVersionDefaultGetSwaggerGlobalValidOptionalParams,
  ): Promise<void>;
}
