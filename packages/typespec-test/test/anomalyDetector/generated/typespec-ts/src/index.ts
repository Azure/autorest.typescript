// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { AnomalyDetectorClient } from "./anomalyDetectorClient.js";
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
  UnivariateDetectionOptions,
  TimeSeriesPoint,
  TimeGranularity,
  ImputeMode,
  UnivariateEntireDetectionResult,
  AnomalyDetectorError,
  AnomalyDetectorErrorCodes,
  UnivariateLastDetectionResult,
  UnivariateChangePointDetectionOptions,
  UnivariateChangePointDetectionResult,
  Versions,
} from "./models/index.js";
export {
  AnomalyDetectorClientOptionalParams,
  UnivariateDetectUnivariateEntireSeriesOptionalParams,
  UnivariateDetectUnivariateLastPointOptionalParams,
  UnivariateDetectUnivariateChangePointOptionalParams,
  MultivariateGetMultivariateBatchDetectionResultOptionalParams,
  MultivariateTrainMultivariateModelOptionalParams,
  MultivariateListMultivariateModelsOptionalParams,
  MultivariateDeleteMultivariateModelOptionalParams,
  MultivariateGetMultivariateModelOptionalParams,
  MultivariateDetectMultivariateBatchAnomalyOptionalParams,
  MultivariateDetectMultivariateLastAnomalyOptionalParams,
} from "./api/index.js";
export {
  MultivariateOperations,
  UnivariateOperations,
} from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
