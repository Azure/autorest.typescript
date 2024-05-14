// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DetectUnivariateEntireSeriesParameters,
  DetectUnivariateLastPointParameters,
  DetectUnivariateChangePointParameters,
  GetMultivariateBatchDetectionResultParameters,
  TrainMultivariateModelParameters,
  ListMultivariateModelsParameters,
  DeleteMultivariateModelParameters,
  GetMultivariateModelParameters,
  DetectMultivariateBatchAnomalyParameters,
  DetectMultivariateLastAnomalyParameters,
} from "./parameters.js";
import {
  DetectUnivariateEntireSeries200Response,
  DetectUnivariateEntireSeriesDefaultResponse,
  DetectUnivariateLastPoint200Response,
  DetectUnivariateLastPointDefaultResponse,
  DetectUnivariateChangePoint200Response,
  DetectUnivariateChangePointDefaultResponse,
  GetMultivariateBatchDetectionResult200Response,
  TrainMultivariateModel200Response,
  TrainMultivariateModel201Response,
  ListMultivariateModels200Response,
  DeleteMultivariateModel200Response,
  DeleteMultivariateModel204Response,
  GetMultivariateModel200Response,
  DetectMultivariateBatchAnomaly200Response,
  DetectMultivariateBatchAnomaly202Response,
  DetectMultivariateLastAnomaly200Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface DetectUnivariateEntireSeries {
  /**
   * This operation generates a model with an entire series, each point is detected
   * with the same model. With this method, points before and after a certain point
   * are used to determine whether it is an anomaly. The entire detection can give
   * user an overall status of the time series.
   */
  post(
    options: DetectUnivariateEntireSeriesParameters,
  ): StreamableMethod<
    | DetectUnivariateEntireSeries200Response
    | DetectUnivariateEntireSeriesDefaultResponse
  >;
}

export interface DetectUnivariateLastPoint {
  /**
   * This operation generates a model using the points that you sent into the API,
   * and based on all data to determine whether the last point is anomalous.
   */
  post(
    options: DetectUnivariateLastPointParameters,
  ): StreamableMethod<
    | DetectUnivariateLastPoint200Response
    | DetectUnivariateLastPointDefaultResponse
  >;
}

export interface DetectUnivariateChangePoint {
  /** Evaluate change point score of every series point */
  post(
    options: DetectUnivariateChangePointParameters,
  ): StreamableMethod<
    | DetectUnivariateChangePoint200Response
    | DetectUnivariateChangePointDefaultResponse
  >;
}

export interface GetMultivariateBatchDetectionResult {
  /**
   * For asynchronous inference, get multivariate anomaly detection result based on
   * resultId returned by the BatchDetectAnomaly api.
   */
  get(
    options?: GetMultivariateBatchDetectionResultParameters,
  ): StreamableMethod<GetMultivariateBatchDetectionResult200Response>;
}

export interface TrainMultivariateModel {
  /**
   * Create and train a multivariate anomaly detection model. The request must
   * include a source parameter to indicate an externally accessible Azure blob
   * storage URI.There are two types of data input: An URI pointed to an Azure blob
   * storage folder which contains multiple CSV files, and each CSV file contains
   * two columns, timestamp and variable. Another type of input is an URI pointed to
   * a CSV file in Azure blob storage, which contains all the variables and a
   * timestamp column.
   */
  post(
    options: TrainMultivariateModelParameters,
  ): StreamableMethod<
    TrainMultivariateModel200Response | TrainMultivariateModel201Response
  >;
  /** List models of a resource. */
  get(
    options?: ListMultivariateModelsParameters,
  ): StreamableMethod<ListMultivariateModels200Response>;
}

export interface DeleteMultivariateModel {
  /** Delete an existing multivariate model according to the modelId */
  delete(
    options?: DeleteMultivariateModelParameters,
  ): StreamableMethod<
    DeleteMultivariateModel200Response | DeleteMultivariateModel204Response
  >;
  /**
   * Get detailed information of multivariate model, including the training status
   * and variables used in the model.
   */
  get(
    options?: GetMultivariateModelParameters,
  ): StreamableMethod<GetMultivariateModel200Response>;
}

export interface DetectMultivariateBatchAnomaly {
  /**
   * Submit multivariate anomaly detection task with the modelId of trained model
   * and inference data, the input schema should be the same with the training
   * request. The request will complete asynchronously and return a resultId to
   * query the detection result.The request should be a source link to indicate an
   * externally accessible Azure storage Uri, either pointed to an Azure blob
   * storage folder, or pointed to a CSV file in Azure blob storage.
   */
  post(
    options: DetectMultivariateBatchAnomalyParameters,
  ): StreamableMethod<
    | DetectMultivariateBatchAnomaly200Response
    | DetectMultivariateBatchAnomaly202Response
  >;
}

export interface DetectMultivariateLastAnomaly {
  /**
   * Submit multivariate anomaly detection task with the modelId of trained model
   * and inference data, and the inference data should be put into request body in a
   * JSON format. The request will complete synchronously and return the detection
   * immediately in the response body.
   */
  post(
    options: DetectMultivariateLastAnomalyParameters,
  ): StreamableMethod<DetectMultivariateLastAnomaly200Response>;
}

export interface Routes {
  /** Resource for '/timeseries/entire/detect' has methods for the following verbs: post */
  (path: "/timeseries/entire/detect"): DetectUnivariateEntireSeries;
  /** Resource for '/timeseries/last/detect' has methods for the following verbs: post */
  (path: "/timeseries/last/detect"): DetectUnivariateLastPoint;
  /** Resource for '/timeseries/changepoint/detect' has methods for the following verbs: post */
  (path: "/timeseries/changepoint/detect"): DetectUnivariateChangePoint;
  /** Resource for '/multivariate/detect-batch/\{resultId\}' has methods for the following verbs: get */
  (
    path: "/multivariate/detect-batch/{resultId}",
    resultId: string,
  ): GetMultivariateBatchDetectionResult;
  /** Resource for '/multivariate/models' has methods for the following verbs: post, get */
  (path: "/multivariate/models"): TrainMultivariateModel;
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

export type AnomalyDetectorContext = Client & {
  path: Routes;
};
