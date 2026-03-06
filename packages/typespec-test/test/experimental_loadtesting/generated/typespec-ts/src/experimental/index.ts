// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import "./augmentations.js";
import { LoadTestServiceClient } from "../index.js";
import { _getTestProfileAdministrationOperations } from "./classic/testProfileAdministration/index.js";
import { _getTestProfileRunAdministrationOperations } from "./classic/testProfileRunAdministration/index.js";
Object.defineProperty(LoadTestServiceClient.prototype, "testProfileAdministration", {
  get(this: LoadTestServiceClient) {
    const key = Symbol.for("__experimental_testProfileAdministration");
    if (!(this as any)[key]) {
      (this as any)[key] = _getTestProfileAdministrationOperations((this as any)._client);
    }
    return (this as any)[key];
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(LoadTestServiceClient.prototype, "testProfileRunAdministration", {
  get(this: LoadTestServiceClient) {
    const key = Symbol.for("__experimental_testProfileRunAdministration");
    if (!(this as any)[key]) {
      (this as any)[key] = _getTestProfileRunAdministrationOperations((this as any)._client);
    }
    return (this as any)[key];
  },
  enumerable: true,
  configurable: true,
});

export type {
  TestProfileAdministrationOperations,
  TestProfileRunAdministrationOperations,
} from "./classic/index.js";
export type {
  TestProfile,
  TargetResourceConfigurations,
  TargetResourceConfigurationsUnion,
  ResourceKind,
  FunctionFlexConsumptionTargetResourceConfigurations,
  FunctionFlexConsumptionResourceConfiguration,
  TestProfileRun,
  TestProfileRunStatus,
  TestRunDetail,
  TestProfileRunRecommendation,
  RecommendationCategory,
} from "./models/index.js";
