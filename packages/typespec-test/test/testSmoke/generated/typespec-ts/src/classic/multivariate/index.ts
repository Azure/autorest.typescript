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
} from "../../api/multivariate/operations.js";
import {
  MultivariateDetectMultivariateLastAnomalyOptionalParams,
  MultivariateDetectMultivariateBatchAnomalyOptionalParams,
  MultivariateGetMultivariateModelOptionalParams,
  MultivariateDeleteMultivariateModelOptionalParams,
  MultivariateListMultivariateModelsOptionalParams,
  MultivariateTrainMultivariateModelOptionalParams,
  MultivariateGetMultivariateBatchDetectionResultOptionalParams,
} from "../../api/multivariate/options.js";
import {
  MultivariateDetectionResult,
  MultivariateBatchDetectionOptions,
  ModelInfo,
  AnomalyDetectionModel,
  MultivariateLastDetectionOptions,
  MultivariateLastDetectionResult,
} from "../../models/multivariate/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a Multivariate operations. */
export interface MultivariateOperations {
  /**
   * Submit a multivariate anomaly detection task with the modelId value of a trained model
   * and inference data. The inference data should be put into the request body in
   * JSON format. The request will finish synchronously and return the detection
   * immediately in the response body.
   */
  detectMultivariateLastAnomaly: (
    modelId: string,
    options: MultivariateLastDetectionOptions,
    optionalParams?: MultivariateDetectMultivariateLastAnomalyOptionalParams,
  ) => Promise<MultivariateLastDetectionResult>;
  /**
   * Submit a multivariate anomaly detection task with the modelId value of a trained model
   * and inference data. The input schema should be the same with the training
   * request. The request will finish asynchronously and return a resultId value to
   * query the detection result. The request should be a source link to indicate an
   * externally accessible Azure Storage URI that either points to an Azure Blob
   * Storage folder or points to a CSV file in Azure Blob Storage.
   */
  detectMultivariateBatchAnomaly: (
    modelId: string,
    options: MultivariateBatchDetectionOptions,
    optionalParams?: MultivariateDetectMultivariateBatchAnomalyOptionalParams,
  ) => Promise<MultivariateDetectionResult>;
  /**
   * Get detailed information about the multivariate model, including the training status
   * and variables used in the model.
   */
  getMultivariateModel: (
    modelId: string,
    options?: MultivariateGetMultivariateModelOptionalParams,
  ) => Promise<AnomalyDetectionModel>;
  /** Delete an existing multivariate model according to the modelId value. */
  deleteMultivariateModel: (
    modelId: string,
    options?: MultivariateDeleteMultivariateModelOptionalParams,
  ) => Promise<void>;
  /** List models of a resource. */
  listMultivariateModels: (
    options?: MultivariateListMultivariateModelsOptionalParams,
  ) => PagedAsyncIterableIterator<AnomalyDetectionModel>;
  /**
   * Create and train a multivariate anomaly detection model. The request must
   * include a source parameter to indicate an Azure Blob
   * Storage URI that's accessible to the service. There are two types of data input. The Blob Storage URI can point to an Azure Blob
   * Storage folder that contains multiple CSV files, where each CSV file has
   * two columns, time stamp and variable. Or the Blob Storage URI can point to a single blob that contains a CSV file that has all the variables and a
   * time stamp column.
   * The model object will be created and returned in the response, but the
   * training process happens asynchronously. To check the training status, call
   * GetMultivariateModel with the modelId value and check the status field in the
   * modelInfo object.
   */
  trainMultivariateModel: (
    modelInfo: ModelInfo,
    options?: MultivariateTrainMultivariateModelOptionalParams,
  ) => Promise<AnomalyDetectionModel>;
  /**
   * For asynchronous inference, get a multivariate anomaly detection result based on the
   * resultId value that the BatchDetectAnomaly API returns.
   */
  getMultivariateBatchDetectionResult: (
    resultId: string,
    options?: MultivariateGetMultivariateBatchDetectionResultOptionalParams,
  ) => Promise<MultivariateDetectionResult>;
}

function _getMultivariate(context: AnomalyDetectorContext) {
  return {
    detectMultivariateLastAnomaly: (
      modelId: string,
      options: MultivariateLastDetectionOptions,
      optionalParams?: MultivariateDetectMultivariateLastAnomalyOptionalParams,
    ) =>
      detectMultivariateLastAnomaly(context, modelId, options, optionalParams),
    detectMultivariateBatchAnomaly: (
      modelId: string,
      options: MultivariateBatchDetectionOptions,
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
      modelInfo: ModelInfo,
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
