// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { OAuth2Context } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface OAuth2ClientOptions extends ClientOptions {}

export { OAuth2Context } from "../rest/index.js";

/** Illustrates clients generated with OAuth2 authentication. */
export function createOAuth2(
  credential: TokenCredential,
  options: OAuth2ClientOptions = {},
): OAuth2Context {
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-modular-api`
    : "azsdk-js-modular-api";

  const clientContext = getClient(credential, {
    ...options,
    userAgentOptions: { userAgentPrefix },
  });
  return clientContext;
}
