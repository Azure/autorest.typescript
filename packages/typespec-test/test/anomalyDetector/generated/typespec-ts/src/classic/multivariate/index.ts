// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AnomalyDetectorContext } from "../../api/anomalyDetectorContext.js";
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
  MultivariateGetMultivariateBatchDetectionResultOptionalParams,
  MultivariateTrainMultivariateModelOptionalParams,
  MultivariateListMultivariateModelsOptionalParams,
  MultivariateDeleteMultivariateModelOptionalParams,
  MultivariateGetMultivariateModelOptionalParams,
  MultivariateDetectMultivariateBatchAnomalyOptionalParams,
  MultivariateDetectMultivariateLastAnomalyOptionalParams,
} from "../../models/options.js";

export interface MultivariateOperations {
  getMultivariateBatchDetectionResult: (
    resultId: string,
    options?: MultivariateGetMultivariateBatchDetectionResultOptionalParams,
  ) => Promise<MultivariateMultivariateDetectionResult>;
  trainMultivariateModel: (
    modelInfo: MultivariateModelInfo,
    options?: MultivariateTrainMultivariateModelOptionalParams,
  ) => Promise<MultivariateAnomalyDetectionModel>;
  listMultivariateModels: (
    options?: MultivariateListMultivariateModelsOptionalParams,
  ) => PagedAsyncIterableIterator<MultivariateAnomalyDetectionModel>;
  deleteMultivariateModel: (
    modelId: string,
    options?: MultivariateDeleteMultivariateModelOptionalParams,
  ) => Promise<void>;
  getMultivariateModel: (
    modelId: string,
    options?: MultivariateGetMultivariateModelOptionalParams,
  ) => Promise<MultivariateAnomalyDetectionModel>;
  detectMultivariateBatchAnomaly: (
    modelId: string,
    options: MultivariateMultivariateBatchDetectionOptions,
    optionalParams?: MultivariateDetectMultivariateBatchAnomalyOptionalParams,
  ) => Promise<MultivariateMultivariateDetectionResult>;
  detectMultivariateLastAnomaly: (
    modelId: string,
    options: MultivariateMultivariateLastDetectionOptions,
    optionalParams?: MultivariateDetectMultivariateLastAnomalyOptionalParams,
  ) => Promise<MultivariateMultivariateLastDetectionResult>;
}

export function getMultivariate(context: AnomalyDetectorContext) {
  return {
    getMultivariateBatchDetectionResult: (
      resultId: string,
      options?: MultivariateGetMultivariateBatchDetectionResultOptionalParams,
    ) => getMultivariateBatchDetectionResult(context, resultId, options),
    trainMultivariateModel: (
      modelInfo: MultivariateModelInfo,
      options?: MultivariateTrainMultivariateModelOptionalParams,
    ) => trainMultivariateModel(context, modelInfo, options),
    listMultivariateModels: (
      options?: MultivariateListMultivariateModelsOptionalParams,
    ) => listMultivariateModels(context, options),
    deleteMultivariateModel: (
      modelId: string,
      options?: MultivariateDeleteMultivariateModelOptionalParams,
    ) => deleteMultivariateModel(context, modelId, options),
    getMultivariateModel: (
      modelId: string,
      options?: MultivariateGetMultivariateModelOptionalParams,
    ) => getMultivariateModel(context, modelId, options),
    detectMultivariateBatchAnomaly: (
      modelId: string,
      options: MultivariateMultivariateBatchDetectionOptions,
      optionalParams?: MultivariateDetectMultivariateBatchAnomalyOptionalParams,
    ) =>
      detectMultivariateBatchAnomaly(context, modelId, options, optionalParams),
    detectMultivariateLastAnomaly: (
      modelId: string,
      options: MultivariateMultivariateLastDetectionOptions,
      optionalParams?: MultivariateDetectMultivariateLastAnomalyOptionalParams,
    ) =>
      detectMultivariateLastAnomaly(context, modelId, options, optionalParams),
  };
}

export function getMultivariateOperations(
  context: AnomalyDetectorContext,
): MultivariateOperations {
  return {
    ...getMultivariate(context),
  };
}
