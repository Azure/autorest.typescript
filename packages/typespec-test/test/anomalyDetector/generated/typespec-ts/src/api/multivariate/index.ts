// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export {
  detectMultivariateLastAnomaly,
  detectMultivariateBatchAnomaly,
  getMultivariateModel,
  deleteMultivariateModel,
  listMultivariateModels,
  trainMultivariateModel,
  getMultivariateBatchDetectionResult,
} from "./operations.js";
export type {
  MultivariateDetectMultivariateLastAnomalyOptionalParams,
  MultivariateDetectMultivariateBatchAnomalyOptionalParams,
  MultivariateGetMultivariateModelOptionalParams,
  MultivariateDeleteMultivariateModelOptionalParams,
  MultivariateListMultivariateModelsOptionalParams,
  MultivariateTrainMultivariateModelOptionalParams,
  MultivariateGetMultivariateBatchDetectionResultOptionalParams,
} from "./options.js";
