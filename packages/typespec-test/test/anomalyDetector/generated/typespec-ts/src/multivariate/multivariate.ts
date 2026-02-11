// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createMultivariate,
  MultivariateContext,
  MultivariateOptionalParams,
} from "./api/index.js";
import {
  MultivariateMultivariateDetectionResult,
  MultivariateMultivariateBatchDetectionOptions,
  MultivariateModelInfo,
  MultivariateAnomalyDetectionModel,
  MultivariateMultivariateLastDetectionOptions,
  MultivariateMultivariateLastDetectionResult,
} from "../models/multivariate/models.js";
import { PagedAsyncIterableIterator } from "../static-helpers/pagingHelpers.js";
import {
  detectMultivariateLastAnomaly,
  detectMultivariateBatchAnomaly,
  getMultivariateModel,
  deleteMultivariateModel,
  listMultivariateModels,
  trainMultivariateModel,
  getMultivariateBatchDetectionResult,
} from "./api/operations.js";
import {
  DetectMultivariateLastAnomalyOptionalParams,
  DetectMultivariateBatchAnomalyOptionalParams,
  GetMultivariateModelOptionalParams,
  DeleteMultivariateModelOptionalParams,
  ListMultivariateModelsOptionalParams,
  TrainMultivariateModelOptionalParams,
  GetMultivariateBatchDetectionResultOptionalParams,
} from "./api/options.js";
import { KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { MultivariateOptionalParams } from "./api/multivariateContext.js";

export class Multivariate {
  private _client: MultivariateContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: KeyCredential,
    options: MultivariateOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createMultivariate(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /**
   * Submit multivariate anomaly detection task with the modelId of trained model
   * and inference data, and the inference data should be put into request body in a
   * JSON format. The request will complete synchronously and return the detection
   * immediately in the response body.
   */
  detectMultivariateLastAnomaly(
    modelId: string,
    options: MultivariateMultivariateLastDetectionOptions,
    optionalParams: DetectMultivariateLastAnomalyOptionalParams = { requestOptions: {} },
  ): Promise<MultivariateMultivariateLastDetectionResult> {
    return detectMultivariateLastAnomaly(this._client, modelId, options, optionalParams);
  }

  /**
   * Submit multivariate anomaly detection task with the modelId of trained model
   * and inference data, the input schema should be the same with the training
   * request. The request will complete asynchronously and return a resultId to
   * query the detection result.The request should be a source link to indicate an
   * externally accessible Azure storage Uri, either pointed to an Azure blob
   * storage folder, or pointed to a CSV file in Azure blob storage.
   */
  detectMultivariateBatchAnomaly(
    modelId: string,
    options: MultivariateMultivariateBatchDetectionOptions,
    optionalParams: DetectMultivariateBatchAnomalyOptionalParams = { requestOptions: {} },
  ): Promise<MultivariateMultivariateDetectionResult> {
    return detectMultivariateBatchAnomaly(this._client, modelId, options, optionalParams);
  }

  /**
   * Get detailed information of multivariate model, including the training status
   * and variables used in the model.
   */
  getMultivariateModel(
    modelId: string,
    options: GetMultivariateModelOptionalParams = { requestOptions: {} },
  ): Promise<MultivariateAnomalyDetectionModel> {
    return getMultivariateModel(this._client, modelId, options);
  }

  /** Delete an existing multivariate model according to the modelId */
  deleteMultivariateModel(
    modelId: string,
    options: DeleteMultivariateModelOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return deleteMultivariateModel(this._client, modelId, options);
  }

  /** List models of a resource. */
  listMultivariateModels(
    options: ListMultivariateModelsOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<MultivariateAnomalyDetectionModel> {
    return listMultivariateModels(this._client, options);
  }

  /**
   * Create and train a multivariate anomaly detection model. The request must
   * include a source parameter to indicate an externally accessible Azure blob
   * storage URI.There are two types of data input: An URI pointed to an Azure blob
   * storage folder which contains multiple CSV files, and each CSV file contains
   * two columns, timestamp and variable. Another type of input is an URI pointed to
   * a CSV file in Azure blob storage, which contains all the variables and a
   * timestamp column.
   */
  trainMultivariateModel(
    modelInfo: MultivariateModelInfo,
    options: TrainMultivariateModelOptionalParams = { requestOptions: {} },
  ): Promise<MultivariateAnomalyDetectionModel> {
    return trainMultivariateModel(this._client, modelInfo, options);
  }

  /**
   * For asynchronous inference, get multivariate anomaly detection result based on
   * resultId returned by the BatchDetectAnomaly api.
   */
  getMultivariateBatchDetectionResult(
    resultId: string,
    options: GetMultivariateBatchDetectionResultOptionalParams = { requestOptions: {} },
  ): Promise<MultivariateMultivariateDetectionResult> {
    return getMultivariateBatchDetectionResult(this._client, resultId, options);
  }
}
