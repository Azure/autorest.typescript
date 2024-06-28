// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { DatetimeContext } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface DatetimeClientOptions extends ClientOptions {}

export { DatetimeContext } from "../rest/index.js";

/** Test for encode decorator on datetime. */
export function createDatetime(
  options: DatetimeClientOptions = {},
): DatetimeContext {
  const clientContext = getClient(options);
  return clientContext;
}
