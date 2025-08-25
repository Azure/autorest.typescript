// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  HeaderCustomNamedRequestIdOptionalParams,
  HeaderCustomNamedRequestIdResponse,
  HeaderCustomNamedRequestIdParamGroupingParameters,
  HeaderCustomNamedRequestIdParamGroupingOptionalParams,
  HeaderCustomNamedRequestIdParamGroupingResponse,
  HeaderCustomNamedRequestIdHeadOptionalParams,
  HeaderCustomNamedRequestIdHeadResponse,
} from "../models";

/** Interface representing a Header. */
export interface Header {
  /**
   * Send foo-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 in the header of the request
   * @param fooClientRequestId The fooRequestId
   * @param options The options parameters.
   */
  customNamedRequestId(
    fooClientRequestId: string,
    options?: HeaderCustomNamedRequestIdOptionalParams,
  ): Promise<HeaderCustomNamedRequestIdResponse>;
  /**
   * Send foo-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 in the header of the request, via
   * a parameter group
   * @param headerCustomNamedRequestIdParamGroupingParameters Parameter group
   * @param options The options parameters.
   */
  customNamedRequestIdParamGrouping(
    headerCustomNamedRequestIdParamGroupingParameters: HeaderCustomNamedRequestIdParamGroupingParameters,
    options?: HeaderCustomNamedRequestIdParamGroupingOptionalParams,
  ): Promise<HeaderCustomNamedRequestIdParamGroupingResponse>;
  /**
   * Send foo-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 in the header of the request
   * @param fooClientRequestId The fooRequestId
   * @param options The options parameters.
   */
  customNamedRequestIdHead(
    fooClientRequestId: string,
    options?: HeaderCustomNamedRequestIdHeadOptionalParams,
  ): Promise<HeaderCustomNamedRequestIdHeadResponse>;
}
