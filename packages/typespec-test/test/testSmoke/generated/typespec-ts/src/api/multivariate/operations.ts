// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AnomalyDetectorContext as Client } from "../index.js";
import {
  MultivariateDetectionResult,
  multivariateDetectionResultDeserializer,
  MultivariateBatchDetectionOptions,
  multivariateBatchDetectionOptionsSerializer,
  responseErrorDeserializer,
  ModelInfo,
  modelInfoSerializer,
  AnomalyDetectionModel,
  anomalyDetectionModelDeserializer,
  _ModelList,
  _modelListDeserializer,
  MultivariateLastDetectionOptions,
  multivariateLastDetectionOptionsSerializer,
  MultivariateLastDetectionResult,
  multivariateLastDetectionResultDeserializer,
} from "../../models/multivariate/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  MultivariateDetectMultivariateLastAnomalyOptionalParams,
  MultivariateDetectMultivariateBatchAnomalyOptionalParams,
  MultivariateGetMultivariateModelOptionalParams,
  MultivariateDeleteMultivariateModelOptionalParams,
  MultivariateListMultivariateModelsOptionalParams,
  MultivariateTrainMultivariateModelOptionalParams,
  MultivariateGetMultivariateBatchDetectionResultOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _detectMultivariateLastAnomalySend(
  context: Client,
  modelId: string,
  options: MultivariateLastDetectionOptions,
  optionalParams: MultivariateDetectMultivariateLastAnomalyOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/multivariate/models/{modelId}:detect-last",
    {
      modelId: modelId,
    },
    {
      allowReserved: optionalParams?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(optionalParams),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...optionalParams.requestOptions?.headers,
      },
      body: multivariateLastDetectionOptionsSerializer(options),
    });
}

export async function _detectMultivariateLastAnomalyDeserialize(
  result: PathUncheckedResponse,
): Promise<MultivariateLastDetectionResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = responseErrorDeserializer(result.body);
    throw error;
  }

  return multivariateLastDetectionResultDeserializer(result.body);
}

/**
 * Submit a multivariate anomaly detection task with the modelId value of a trained model
 * and inference data. The inference data should be put into the request body in
 * JSON format. The request will finish synchronously and return the detection
 * immediately in the response body.
 */
export async function detectMultivariateLastAnomaly(
  context: Client,
  modelId: string,
  options: MultivariateLastDetectionOptions,
  optionalParams: MultivariateDetectMultivariateLastAnomalyOptionalParams = {
    requestOptions: {},
  },
): Promise<MultivariateLastDetectionResult> {
  const result = await _detectMultivariateLastAnomalySend(
    context,
    modelId,
    options,
    optionalParams,
  );
  return _detectMultivariateLastAnomalyDeserialize(result);
}

export function _detectMultivariateBatchAnomalySend(
  context: Client,
  modelId: string,
  options: MultivariateBatchDetectionOptions,
  optionalParams: MultivariateDetectMultivariateBatchAnomalyOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/multivariate/models/{modelId}:detect-batch",
    {
      modelId: modelId,
    },
    {
      allowReserved: optionalParams?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(optionalParams),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...optionalParams.requestOptions?.headers,
      },
      body: multivariateBatchDetectionOptionsSerializer(options),
    });
}

export async function _detectMultivariateBatchAnomalyDeserialize(
  result: PathUncheckedResponse,
): Promise<MultivariateDetectionResult> {
  const expectedStatuses = ["202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = responseErrorDeserializer(result.body);
    throw error;
  }

  return multivariateDetectionResultDeserializer(result.body);
}

/**
 * Submit a multivariate anomaly detection task with the modelId value of a trained model
 * and inference data. The input schema should be the same with the training
 * request. The request will finish asynchronously and return a resultId value to
 * query the detection result. The request should be a source link to indicate an
 * externally accessible Azure Storage URI that either points to an Azure Blob
 * Storage folder or points to a CSV file in Azure Blob Storage.
 */
export async function detectMultivariateBatchAnomaly(
  context: Client,
  modelId: string,
  options: MultivariateBatchDetectionOptions,
  optionalParams: MultivariateDetectMultivariateBatchAnomalyOptionalParams = {
    requestOptions: {},
  },
): Promise<MultivariateDetectionResult> {
  const result = await _detectMultivariateBatchAnomalySend(
    context,
    modelId,
    options,
    optionalParams,
  );
  return _detectMultivariateBatchAnomalyDeserialize(result);
}

export function _getMultivariateModelSend(
  context: Client,
  modelId: string,
  options: MultivariateGetMultivariateModelOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/multivariate/models/{modelId}",
    {
      modelId: modelId,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getMultivariateModelDeserialize(
  result: PathUncheckedResponse,
): Promise<AnomalyDetectionModel> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = responseErrorDeserializer(result.body);
    throw error;
  }

  return anomalyDetectionModelDeserializer(result.body);
}

/**
 * Get detailed information about the multivariate model, including the training status
 * and variables used in the model.
 */
export async function getMultivariateModel(
  context: Client,
  modelId: string,
  options: MultivariateGetMultivariateModelOptionalParams = {
    requestOptions: {},
  },
): Promise<AnomalyDetectionModel> {
  const result = await _getMultivariateModelSend(context, modelId, options);
  return _getMultivariateModelDeserialize(result);
}

export function _deleteMultivariateModelSend(
  context: Client,
  modelId: string,
  options: MultivariateDeleteMultivariateModelOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/multivariate/models/{modelId}",
    {
      modelId: modelId,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteMultivariateModelDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = responseErrorDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete an existing multivariate model according to the modelId value. */
export async function deleteMultivariateModel(
  context: Client,
  modelId: string,
  options: MultivariateDeleteMultivariateModelOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _deleteMultivariateModelSend(context, modelId, options);
  return _deleteMultivariateModelDeserialize(result);
}

export function _listMultivariateModelsSend(
  context: Client,
  options: MultivariateListMultivariateModelsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/multivariate/models{?skip,top}",
    {
      skip: options?.skip,
      top: options?.top,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listMultivariateModelsDeserialize(
  result: PathUncheckedResponse,
): Promise<_ModelList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = responseErrorDeserializer(result.body);
    throw error;
  }

  return _modelListDeserializer(result.body);
}

/** List models of a resource. */
export function listMultivariateModels(
  context: Client,
  options: MultivariateListMultivariateModelsOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AnomalyDetectionModel> {
  return buildPagedAsyncIterator(
    context,
    () => _listMultivariateModelsSend(context, options),
    _listMultivariateModelsDeserialize,
    ["200"],
    { itemName: "models", nextLinkName: "nextLink" },
  );
}

export function _trainMultivariateModelSend(
  context: Client,
  modelInfo: ModelInfo,
  options: MultivariateTrainMultivariateModelOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/multivariate/models")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: modelInfoSerializer(modelInfo),
    });
}

export async function _trainMultivariateModelDeserialize(
  result: PathUncheckedResponse,
): Promise<AnomalyDetectionModel> {
  const expectedStatuses = ["201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = responseErrorDeserializer(result.body);
    throw error;
  }

  return anomalyDetectionModelDeserializer(result.body);
}

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
export async function trainMultivariateModel(
  context: Client,
  modelInfo: ModelInfo,
  options: MultivariateTrainMultivariateModelOptionalParams = {
    requestOptions: {},
  },
): Promise<AnomalyDetectionModel> {
  const result = await _trainMultivariateModelSend(context, modelInfo, options);
  return _trainMultivariateModelDeserialize(result);
}

export function _getMultivariateBatchDetectionResultSend(
  context: Client,
  resultId: string,
  options: MultivariateGetMultivariateBatchDetectionResultOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/multivariate/detect-batch/{resultId}",
    {
      resultId: resultId,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getMultivariateBatchDetectionResultDeserialize(
  result: PathUncheckedResponse,
): Promise<MultivariateDetectionResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = responseErrorDeserializer(result.body);
    throw error;
  }

  return multivariateDetectionResultDeserializer(result.body);
}

/**
 * For asynchronous inference, get a multivariate anomaly detection result based on the
 * resultId value that the BatchDetectAnomaly API returns.
 */
export async function getMultivariateBatchDetectionResult(
  context: Client,
  resultId: string,
  options: MultivariateGetMultivariateBatchDetectionResultOptionalParams = {
    requestOptions: {},
  },
): Promise<MultivariateDetectionResult> {
  const result = await _getMultivariateBatchDetectionResultSend(
    context,
    resultId,
    options,
  );
  return _getMultivariateBatchDetectionResultDeserialize(result);
}
