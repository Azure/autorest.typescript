// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AnomalyDetectorContext } from "../../api/anomalyDetectorContext.js";
import {
  detectMultivariateLastAnomaly,
  detectMultivariateBatchAnomaly,
  getMultivariateModel,
  deleteMultivariateModel,
  listMultivariateModels,
  trainMultivariateModel,
  getMultivariateBatchDetectionResult,
  MultivariateDetectMultivariateLastAnomalyOptionalParams,
  MultivariateDetectMultivariateBatchAnomalyOptionalParams,
  MultivariateGetMultivariateModelOptionalParams,
  MultivariateDeleteMultivariateModelOptionalParams,
  MultivariateListMultivariateModelsOptionalParams,
  MultivariateTrainMultivariateModelOptionalParams,
  MultivariateGetMultivariateBatchDetectionResultOptionalParams,
} from "../../api/multivariate/index.js";
import {
  MultivariateMultivariateDetectionResult,
  MultivariateMultivariateBatchDetectionOptions,
  MultivariateModelInfo,
  MultivariateAnomalyDetectionModel,
  MultivariateMultivariateLastDetectionOptions,
  MultivariateMultivariateLastDetectionResult,
} from "../../models/multivariate/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a Multivariate operations. */
export interface MultivariateOperations {
  /**
   * Submit multivariate anomaly detection task with the modelId of trained model
   * and inference data, and the inference data should be put into request body in a
   * JSON format. The request will complete synchronously and return the detection
   * immediately in the response body.
   */
  detectMultivariateLastAnomaly: (
    modelId: string,
    options: MultivariateMultivariateLastDetectionOptions,
    optionalParams?: MultivariateDetectMultivariateLastAnomalyOptionalParams,
  ) => Promise<MultivariateMultivariateLastDetectionResult>;
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
    options: MultivariateMultivariateBatchDetectionOptions,
    optionalParams?: MultivariateDetectMultivariateBatchAnomalyOptionalParams,
  ) => Promise<MultivariateMultivariateDetectionResult>;
  /**
   * Get detailed information of multivariate model, including the training status
   * and variables used in the model.
   */
  getMultivariateModel: (
    modelId: string,
    options?: MultivariateGetMultivariateModelOptionalParams,
  ) => Promise<MultivariateAnomalyDetectionModel>;
  /** Delete an existing multivariate model according to the modelId */
  deleteMultivariateModel: (
    modelId: string,
    options?: MultivariateDeleteMultivariateModelOptionalParams,
  ) => Promise<void>;
  /** List models of a resource. */
  listMultivariateModels: (
    options?: MultivariateListMultivariateModelsOptionalParams,
  ) => PagedAsyncIterableIterator<MultivariateAnomalyDetectionModel>;
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
    modelInfo: MultivariateModelInfo,
    options?: MultivariateTrainMultivariateModelOptionalParams,
  ) => Promise<MultivariateAnomalyDetectionModel>;
  /**
   * For asynchronous inference, get multivariate anomaly detection result based on
   * resultId returned by the BatchDetectAnomaly api.
   */
  getMultivariateBatchDetectionResult: (
    resultId: string,
    options?: MultivariateGetMultivariateBatchDetectionResultOptionalParams,
  ) => Promise<MultivariateMultivariateDetectionResult>;
}

function _getMultivariate(context: AnomalyDetectorContext) {
  return {
    detectMultivariateLastAnomaly: (
      modelId: string,
      options: MultivariateMultivariateLastDetectionOptions,
      optionalParams?: MultivariateDetectMultivariateLastAnomalyOptionalParams,
    ) =>
      detectMultivariateLastAnomaly(context, modelId, options, optionalParams),
    detectMultivariateBatchAnomaly: (
      modelId: string,
      options: MultivariateMultivariateBatchDetectionOptions,
      optionalParams?: MultivariateDetectMultivariateBatchAnomalyOptionalParams,
    ) =>
      detectMultivariateBatchAnomaly(context, modelId, options, optionalParams),
    getMultivariateModel: (
      modelId: string,
      options?: MultivariateGetMultivariateModelOptionalParams,
    ) => getMultivariateModel(context, modelId, options),
    deleteMultivariateModel: (
      modelId: string,
      options?: MultivariateDeleteMultivariateModelOptionalParams,
    ) => deleteMultivariateModel(context, modelId, options),
    listMultivariateModels: (
      options?: MultivariateListMultivariateModelsOptionalParams,
    ) => listMultivariateModels(context, options),
    trainMultivariateModel: (
      modelInfo: MultivariateModelInfo,
      options?: MultivariateTrainMultivariateModelOptionalParams,
    ) => trainMultivariateModel(context, modelInfo, options),
    getMultivariateBatchDetectionResult: (
      resultId: string,
      options?: MultivariateGetMultivariateBatchDetectionResultOptionalParams,
    ) => getMultivariateBatchDetectionResult(context, resultId, options),
  };
}

export function _getMultivariateOperations(
  context: AnomalyDetectorContext,
): MultivariateOperations {
  return {
    ..._getMultivariate(context),
  };
}
