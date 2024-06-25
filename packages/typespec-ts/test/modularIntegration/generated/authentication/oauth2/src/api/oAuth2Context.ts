// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { OAuth2Context } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface OAuth2ClientOptions extends ClientOptions {}

export { OAuth2Context } from "../rest/index.js";

/** Illustrates clients generated with OAuth2 authentication. */
export function createOAuth2(
  credential: TokenCredential,
  options: OAuth2ClientOptions = {},
): OAuth2Context {
  const clientContext = getClient(credential, {
    userAgentOptions: {
      userAgentPrefix:
        options?.userAgentOptions?.userAgentPrefix ??
        "azsdk-js-azure-oauth2-api/1.0.0-beta.1",
    },
    ...options,
  });
  return clientContext;
}
