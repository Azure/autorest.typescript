// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createTracingClient } from "@azure/core-tracing";

export const tracingClient = createTracingClient({
  namespace: "Microsoft.Media.Types",
  packageName: "@msinternal/paging-service",
  packageVersion: "1.0.0-preview1",
});
