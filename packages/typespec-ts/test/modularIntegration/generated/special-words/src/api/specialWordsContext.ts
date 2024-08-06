// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions, Client, getClient } from "@azure-rest/core-client";
import { logger } from "../logger.js";

export interface SpecialWordsContext extends Client {}

/** Optional parameters for the client. */
export interface SpecialWordsClientOptionalParams extends ClientOptions {}

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
  options: SpecialWordsClientOptionalParams = {},
): SpecialWordsContext {
  const endpointUrl =
    options.endpoint ?? options.baseUrl ?? `http://localhost:3000`;

  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : "azsdk-js-api";
  const updatedOptions = {
    ...options,
    userAgentOptions: { userAgentPrefix },
    loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info },
  };
  const clientContext = getClient(endpointUrl, undefined, updatedOptions);
  clientContext.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  if (options.apiVersion) {
    logger.warning(
      "This client does not support client api-version, please change it at the operation level",
    );
  }
  return clientContext;
}
