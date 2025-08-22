// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createTracingClient } from "@azure/core-tracing";

export const tracingClient = createTracingClient({
  namespace: "Microsoft.Autorest.LRO",
  packageName: "@msinternal/lro",
  packageVersion: "1.0.0-preview1",
});
