// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { SpecialWordsContext } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface SpecialWordsClientOptions extends ClientOptions {}

export { SpecialWordsContext } from "../rest/index.js";

/**
 * Scenarios to verify that reserved words can be used in service and generators will handle it appropriately.
 *
 * Current list of special words
 * ```txt
 * and
 * as
 * assert
 * async
 * await
 * break
 * class
 * constructor
 * continue
 * def
 * del
 * elif
 * else
 * except
 * exec
 * finally
 * for
 * from
 * global
 * if
 * import
 * in
 * is
 * lambda
 * not
 * or
 * pass
 * raise
 * return
 * try
 * while
 * with
 * yield
 * ```
 */
export function createSpecialWords(
  options: SpecialWordsClientOptions = {},
): SpecialWordsContext {
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : "azsdk-js-api";

  const clientContext = getClient({
    ...options,
    userAgentOptions: { userAgentPrefix },
  });
  return clientContext;
}
