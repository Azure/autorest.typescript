// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  TokenGrantType,
  AuthenticationExchangeAcrRefreshTokenForAcrAccessTokenOptionalParams,
} from "../models";

/** Interface representing a Authentication. */
export interface Authentication {
  /**
   * Exchange ACR Refresh token for an ACR Access Token
   * @param grantType Grant type is expected to be refresh_token
   * @param options The options parameters.
   */
  exchangeAcrRefreshTokenForAcrAccessToken(
    grantType: TokenGrantType,
    options?: AuthenticationExchangeAcrRefreshTokenForAcrAccessTokenOptionalParams,
  ): Promise<void>;
}
