// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetMultivariateBatchDetectionResultParameters,
  CreateAndTrainMultivariateModelParameters,
  ListMultivariateModelsParameters,
  DeleteMultivariateModelParameters,
  GetMultivariateModelParameters,
  DetectMultivariateBatchAnomalyParameters,
  DetectMultivariateLastAnomalyParameters,
} from "./parameters";
import {
  GetMultivariateBatchDetectionResult200Response,
  GetMultivariateBatchDetectionResultDefaultResponse,
  CreateAndTrainMultivariateModel201Response,
  CreateAndTrainMultivariateModelDefaultResponse,
  ListMultivariateModels200Response,
  ListMultivariateModelsDefaultResponse,
  DeleteMultivariateModel204Response,
  DeleteMultivariateModelDefaultResponse,
  GetMultivariateModel200Response,
  GetMultivariateModelDefaultResponse,
  DetectMultivariateBatchAnomaly202Response,
  DetectMultivariateBatchAnomalyDefaultResponse,
  DetectMultivariateLastAnomaly200Response,
  DetectMultivariateLastAnomalyDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetMultivariateBatchDetectionResult {
  /** For asynchronous inference, get multivariate anomaly detection result based on resultId returned by the BatchDetectAnomaly api. */
  get(
    options?: GetMultivariateBatchDetectionResultParameters,
  ): StreamableMethod<
    | GetMultivariateBatchDetectionResult200Response
    | GetMultivariateBatchDetectionResultDefaultResponse
  >;
}

export interface CreateAndTrainMultivariateModel {
  /** Create and train a multivariate anomaly detection model. The request must include a source parameter to indicate an externally accessible Azure blob storage URI.There are two types of data input: An URI pointed to an Azure blob storage folder which contains multiple CSV files, and each CSV file contains two columns, timestamp and variable. Another type of input is an URI pointed to a CSV file in Azure blob storage, which contains all the variables and a timestamp column. */
  post(
    options: CreateAndTrainMultivariateModelParameters,
  ): StreamableMethod<
    | CreateAndTrainMultivariateModel201Response
    | CreateAndTrainMultivariateModelDefaultResponse
  >;
  /** List models of a resource. */
  get(
    options?: ListMultivariateModelsParameters,
  ): StreamableMethod<
    ListMultivariateModels200Response | ListMultivariateModelsDefaultResponse
  >;
}

export interface DeleteMultivariateModel {
  /** Delete an existing multivariate model according to the modelId */
  delete(
    options?: DeleteMultivariateModelParameters,
  ): StreamableMethod<
    DeleteMultivariateModel204Response | DeleteMultivariateModelDefaultResponse
  >;
  /** Get detailed information of multivariate model, including the training status and variables used in the model. */
  get(
    options?: GetMultivariateModelParameters,
  ): StreamableMethod<
    GetMultivariateModel200Response | GetMultivariateModelDefaultResponse
  >;
}

export interface DetectMultivariateBatchAnomaly {
  /** Submit multivariate anomaly detection task with the modelId of trained model and inference data, the input schema should be the same with the training request. The request will complete asynchronously and return a resultId to query the detection result.The request should be a source link to indicate an externally accessible Azure storage Uri, either pointed to an Azure blob storage folder, or pointed to a CSV file in Azure blob storage. */
  post(
    options: DetectMultivariateBatchAnomalyParameters,
  ): StreamableMethod<
    | DetectMultivariateBatchAnomaly202Response
    | DetectMultivariateBatchAnomalyDefaultResponse
  >;
}

export interface DetectMultivariateLastAnomaly {
  /** Submit multivariate anomaly detection task with the modelId of trained model and inference data, and the inference data should be put into request body in a JSON format. The request will complete synchronously and return the detection immediately in the response body. */
  post(
    options: DetectMultivariateLastAnomalyParameters,
  ): StreamableMethod<
    | DetectMultivariateLastAnomaly200Response
    | DetectMultivariateLastAnomalyDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/multivariate/detect-batch/\{resultId\}' has methods for the following verbs: get */
  (
    path: "/multivariate/detect-batch/{resultId}",
    resultId: string,
  ): GetMultivariateBatchDetectionResult;
  /** Resource for '/multivariate/models' has methods for the following verbs: post, get */
  (path: "/multivariate/models"): CreateAndTrainMultivariateModel;
  /** Resource for '/multivariate/models/\{modelId\}' has methods for the following verbs: delete, get */
  (
    path: "/multivariate/models/{modelId}",
    modelId: string,
  ): DeleteMultivariateModel;
  /** Resource for '/multivariate/models/\{modelId\}:detect-batch' has methods for the following verbs: post */
  (
    path: "/multivariate/models/{modelId}:detect-batch",
    modelId: string,
  ): DetectMultivariateBatchAnomaly;
  /** Resource for '/multivariate/models/\{modelId\}:detect-last' has methods for the following verbs: post */
  (
    path: "/multivariate/models/{modelId}:detect-last",
    modelId: string,
  ): DetectMultivariateLastAnomaly;
}

export type AnomalyDetectorMVClient = Client & {
  path: Routes;
};
