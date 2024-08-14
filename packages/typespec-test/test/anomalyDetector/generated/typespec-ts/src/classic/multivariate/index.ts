// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AnomalyDetectorContext } from "../../api/anomalyDetectorContext.js";
import {
  MultivariateDetectionResult,
  MultivariateBatchDetectionOptions,
  ModelInfo,
  AnomalyDetectionModel,
  MultivariateLastDetectionOptions,
  MultivariateLastDetectionResult,
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
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import {
  MultivariateGetMultivariateBatchDetectionResultOptionalParams,
  MultivariateTrainMultivariateModelOptionalParams,
  MultivariateListMultivariateModelsOptionalParams,
  MultivariateDeleteMultivariateModelOptionalParams,
  MultivariateGetMultivariateModelOptionalParams,
  MultivariateDetectMultivariateBatchAnomalyOptionalParams,
  MultivariateDetectMultivariateLastAnomalyOptionalParams,
} from "../../api/options.js";

/** Interface representing a Multivariate operations. */
export interface MultivariateOperations {
  /**
   * For asynchronous inference, get multivariate anomaly detection result based on
   * resultId returned by the BatchDetectAnomaly api.
   */
  getMultivariateBatchDetectionResult: (
    resultId: string,
    options?: MultivariateGetMultivariateBatchDetectionResultOptionalParams,
  ) => Promise<MultivariateDetectionResult>;
  /**
   * Create and train a multivariate anomaly detection model. The request must
   * include a source parameter to indicate an externally accessible Azure blob
   * storage URI.There are two types of data input: An URI pointed to an Azure blob
   * storage folder which contains multiple CSV files, and each CSV file contains
   * two columns, timestamp and variable. Another type of input is an URI pointed to
   * a CSV file in Azure blob storage, which contains all the variables and a
   * timestamp column.
   */
  trainMultivariateModel: (
    modelInfo: ModelInfo,
    options?: MultivariateTrainMultivariateModelOptionalParams,
  ) => Promise<AnomalyDetectionModel>;
  /** List models of a resource. */
  listMultivariateModels: (
    options?: MultivariateListMultivariateModelsOptionalParams,
  ) => PagedAsyncIterableIterator<AnomalyDetectionModel>;
  /** Delete an existing multivariate model according to the modelId */
  deleteMultivariateModel: (
    modelId: string,
    options?: MultivariateDeleteMultivariateModelOptionalParams,
  ) => Promise<void>;
  /**
   * Get detailed information of multivariate model, including the training status
   * and variables used in the model.
   */
  getMultivariateModel: (
    modelId: string,
    options?: MultivariateGetMultivariateModelOptionalParams,
  ) => Promise<AnomalyDetectionModel>;
  /**
   * Submit multivariate anomaly detection task with the modelId of trained model
   * and inference data, the input schema should be the same with the training
   * request. The request will complete asynchronously and return a resultId to
   * query the detection result.The request should be a source link to indicate an
   * externally accessible Azure storage Uri, either pointed to an Azure blob
   * storage folder, or pointed to a CSV file in Azure blob storage.
   */
  detectMultivariateBatchAnomaly: (
    modelId: string,
    options: MultivariateBatchDetectionOptions,
    optionalParams?: MultivariateDetectMultivariateBatchAnomalyOptionalParams,
  ) => Promise<MultivariateDetectionResult>;
  /**
   * Submit multivariate anomaly detection task with the modelId of trained model
   * and inference data, and the inference data should be put into request body in a
   * JSON format. The request will complete synchronously and return the detection
   * immediately in the response body.
   */
  detectMultivariateLastAnomaly: (
    modelId: string,
    options: MultivariateLastDetectionOptions,
    optionalParams?: MultivariateDetectMultivariateLastAnomalyOptionalParams,
  ) => Promise<MultivariateLastDetectionResult>;
}

export function getMultivariate(context: AnomalyDetectorContext) {
  return {
    getMultivariateBatchDetectionResult: (
      resultId: string,
      options?: MultivariateGetMultivariateBatchDetectionResultOptionalParams,
    ) => getMultivariateBatchDetectionResult(context, resultId, options),
    trainMultivariateModel: (
      modelInfo: ModelInfo,
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
      options: MultivariateBatchDetectionOptions,
      optionalParams?: MultivariateDetectMultivariateBatchAnomalyOptionalParams,
    ) =>
      detectMultivariateBatchAnomaly(context, modelId, options, optionalParams),
    detectMultivariateLastAnomaly: (
      modelId: string,
      options: MultivariateLastDetectionOptions,
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
