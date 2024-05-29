// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { AppComplianceAutomationContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface AppComplianceAutomationClientOptions extends ClientOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
}

export { AppComplianceAutomationContext } from "../rest/index.js";

/** App Compliance Automation Tool for Microsoft 365 API spec */
export function createAppComplianceAutomation(
  credential: TokenCredential,
  options: AppComplianceAutomationClientOptions = {},
): AppComplianceAutomationContext {
  const clientContext = getClient(credential, options);
  return clientContext;
}
