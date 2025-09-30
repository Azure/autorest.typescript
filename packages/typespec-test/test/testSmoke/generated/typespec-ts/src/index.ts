// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { AnomalyDetectorClient } from "./anomalyDetectorClient.js";
export { APIVersion } from "./models/index.js";
export {
  MultivariateDetectionResult,
  MultivariateBatchDetectionResultSummary,
  MultivariateBatchDetectionStatus,
  ErrorResponse,
  VariableState,
  MultivariateBatchDetectionOptions,
  AnomalyState,
  AnomalyValue,
  AnomalyInterpretation,
  CorrelationChanges,
  ResponseError,
  ModelInfo,
  DataSchema,
  AlignPolicy,
  AlignMode,
  FillNAMethod,
  ModelStatus,
  DiagnosticsInfo,
  ModelState,
  AnomalyDetectionModel,
  MultivariateLastDetectionOptions,
  VariableValues,
  MultivariateLastDetectionResult,
} from "./models/multivariate/index.js";
export {
  UnivariateDetectionOptions,
  TimeSeriesPoint,
  TimeGranularity,
  ImputeMode,
  AnomalyDetectorError,
  AnomalyDetectorErrorCodes,
  UnivariateLastDetectionResult,
  UnivariateChangePointDetectionOptions,
  UnivariateChangePointDetectionResult,
} from "./models/univariate/index.js";
export { AnomalyDetectorClientOptionalParams } from "./api/index.js";
export {
  MultivariateDetectMultivariateLastAnomalyOptionalParams,
  MultivariateDetectMultivariateBatchAnomalyOptionalParams,
  MultivariateGetMultivariateModelOptionalParams,
  MultivariateDeleteMultivariateModelOptionalParams,
  MultivariateListMultivariateModelsOptionalParams,
  MultivariateTrainMultivariateModelOptionalParams,
  MultivariateGetMultivariateBatchDetectionResultOptionalParams,
} from "./api/multivariate/index.js";
export {
  UnivariateDetectUnivariateChangePointOptionalParams,
  UnivariateDetectUnivariateLastPointOptionalParams,
  UnivariateDetectUnivariateEntireSeriesOptionalParams,
} from "./api/univariate/index.js";
export {
  MultivariateOperations,
  UnivariateOperations,
} from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
