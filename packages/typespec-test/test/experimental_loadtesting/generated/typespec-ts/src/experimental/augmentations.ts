// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { TestProfileAdministrationOperations as ExperimentalTestProfileAdministrationOperations } from "./classic/testProfileAdministration/index.js";
import type { TestProfileRunAdministrationOperations as ExperimentalTestProfileRunAdministrationOperations } from "./classic/testProfileRunAdministration/index.js";
declare module "../index.js" {
  interface LoadTestServiceClient {
    /** @experimental Preview: testProfileAdministration operations. */
    readonly testProfileAdministration: ExperimentalTestProfileAdministrationOperations;
    /** @experimental Preview: testProfileRunAdministration operations. */
    readonly testProfileRunAdministration: ExperimentalTestProfileRunAdministrationOperations;
  }
}
