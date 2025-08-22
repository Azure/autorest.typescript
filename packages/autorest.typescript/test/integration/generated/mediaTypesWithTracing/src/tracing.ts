// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createTracingClient } from "@azure/core-tracing";

export const tracingClient = createTracingClient({
  namespace: "Microsoft.Media.Types",
  packageName: "@msinternal/media-types-service-tracing",
  packageVersion: "1.0.0-preview1",
});
