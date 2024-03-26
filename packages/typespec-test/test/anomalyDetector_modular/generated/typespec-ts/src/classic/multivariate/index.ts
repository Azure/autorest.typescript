// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AnomalyDetectorContext } from "../../api/AnomalyDetectorContext.js";
import {
  MultivariateMultivariateDetectionResult,
  MultivariateMultivariateBatchDetectionOptions,
  MultivariateModelInfo,
  MultivariateAnomalyDetectionModel,
  MultivariateMultivariateLastDetectionOptions,
  MultivariateMultivariateLastDetectionResult,
} from "../../models/models.js";
import {
  getMultivariateBatchDetectionResult,
  trainMultivariateModel,
  listMultivariateModels,
  deleteMultivariateModel,
  getMultivariateModel,
  detectMultivariateBatchAnomaly,
  detectMultivariateLastAnomaly,
} from "../../api/multivariate/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  MultivariateGetMultivariateBatchDetectionResultOptions,
  MultivariateTrainMultivariateModelOptions,
  MultivariateListMultivariateModelsOptions,
  MultivariateDeleteMultivariateModelOptions,
  MultivariateGetMultivariateModelOptions,
  MultivariateDetectMultivariateBatchAnomalyOptions,
  MultivariateDetectMultivariateLastAnomalyOptions,
} from "../../models/options.js";

export interface MultivariateOperations {
  getMultivariateBatchDetectionResult: (
    resultId: string,
    options?: MultivariateGetMultivariateBatchDetectionResultOptions,
  ) => Promise<MultivariateMultivariateDetectionResult>;
  trainMultivariateModel: (
    modelInfo: MultivariateModelInfo,
    options?: MultivariateTrainMultivariateModelOptions,
  ) => Promise<MultivariateAnomalyDetectionModel>;
  listMultivariateModels: (
    options?: MultivariateListMultivariateModelsOptions,
  ) => PagedAsyncIterableIterator<MultivariateAnomalyDetectionModel>;
  deleteMultivariateModel: (
    modelId: string,
    options?: MultivariateDeleteMultivariateModelOptions,
  ) => Promise<void>;
  getMultivariateModel: (
    modelId: string,
    options?: MultivariateGetMultivariateModelOptions,
  ) => Promise<MultivariateAnomalyDetectionModel>;
  detectMultivariateBatchAnomaly: (
    modelId: string,
    options?: MultivariateMultivariateBatchDetectionOptions,
    options?: MultivariateDetectMultivariateBatchAnomalyOptions,
  ) => Promise<MultivariateMultivariateDetectionResult>;
  detectMultivariateLastAnomaly: (
    modelId: string,
    options?: MultivariateMultivariateLastDetectionOptions,
    options?: MultivariateDetectMultivariateLastAnomalyOptions,
  ) => Promise<MultivariateMultivariateLastDetectionResult>;
}

export function getMultivariate(context: AnomalyDetectorContext) {
  return {
    getMultivariateBatchDetectionResult: (
      resultId: string,
      options?: MultivariateGetMultivariateBatchDetectionResultOptions,
    ) => getMultivariateBatchDetectionResult(context, resultId, options),
    trainMultivariateModel: (
      modelInfo: MultivariateModelInfo,
      options?: MultivariateTrainMultivariateModelOptions,
    ) => trainMultivariateModel(context, modelInfo, options),
    listMultivariateModels: (
      options?: MultivariateListMultivariateModelsOptions,
    ) => listMultivariateModels(context, options),
    deleteMultivariateModel: (
      modelId: string,
      options?: MultivariateDeleteMultivariateModelOptions,
    ) => deleteMultivariateModel(context, modelId, options),
    getMultivariateModel: (
      modelId: string,
      options?: MultivariateGetMultivariateModelOptions,
    ) => getMultivariateModel(context, modelId, options),
    detectMultivariateBatchAnomaly: (
      modelId: string,
      options?: MultivariateMultivariateBatchDetectionOptions,
      options?: MultivariateDetectMultivariateBatchAnomalyOptions,
    ) => detectMultivariateBatchAnomaly(context, modelId, options, options),
    detectMultivariateLastAnomaly: (
      modelId: string,
      options?: MultivariateMultivariateLastDetectionOptions,
      options?: MultivariateDetectMultivariateLastAnomalyOptions,
    ) => detectMultivariateLastAnomaly(context, modelId, options, options),
  };
}

export function getMultivariateOperations(
  context: AnomalyDetectorContext,
): MultivariateOperations {
  return {
    ...getMultivariate(context),
  };
}
