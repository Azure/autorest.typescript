// Licensed under the MIT license.

import { KeyCredential } from "@typespec/ts-http-runtime";
import { ClientOptions } from "@typespec/ts-http-runtime";
import { TodoContext } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface TodoClientOptionalParams extends ClientOptions {}

export { TodoContext } from "../rest/index.js";

export function createTodo(
  endpoint: string,
  credential: KeyCredential,
  options: TodoClientOptionalParams = {},
): TodoContext {
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : "azsdk-js-api";

  const clientContext = getClient(endpoint, credential, {
    ...options,
    userAgentOptions: { userAgentPrefix },
  });
  return clientContext;
}
