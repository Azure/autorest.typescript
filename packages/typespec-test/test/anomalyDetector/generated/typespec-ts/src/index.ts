// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { AnomalyDetectorClient } from "./anomalyDetectorClient.js";
export type { APIVersion } from "./models/index.js";
export type {
  MultivariateMultivariateDetectionResult,
  MultivariateMultivariateBatchDetectionResultSummary,
  MultivariateErrorResponse,
  MultivariateVariableState,
  MultivariateMultivariateBatchDetectionOptions,
  MultivariateAnomalyState,
  MultivariateAnomalyValue,
  MultivariateAnomalyInterpretation,
  MultivariateCorrelationChanges,
  MultivariateResponseError,
  MultivariateModelInfo,
  MultivariateAlignPolicy,
  MultivariateDiagnosticsInfo,
  MultivariateModelState,
  MultivariateAnomalyDetectionModel,
  MultivariateMultivariateLastDetectionOptions,
  MultivariateVariableValues,
  MultivariateMultivariateLastDetectionResult,
  MultivariateMultivariateBatchDetectionStatus,
  MultivariateDataSchema,
  MultivariateAlignMode,
  MultivariateFillNAMethod,
  MultivariateModelStatus,
} from "./models/multivariate/index.js";
export type {
  UnivariateUnivariateDetectionOptions,
  UnivariateTimeSeriesPoint,
  UnivariateUnivariateEntireDetectionResult,
  UnivariateAnomalyDetectorError,
  UnivariateUnivariateLastDetectionResult,
  UnivariateUnivariateChangePointDetectionOptions,
  UnivariateUnivariateChangePointDetectionResult,
  UnivariateTimeGranularity,
  UnivariateImputeMode,
  UnivariateAnomalyDetectorErrorCodes,
} from "./models/univariate/index.js";
export type { AnomalyDetectorClientOptionalParams } from "./api/index.js";
export type {
  MultivariateDetectMultivariateLastAnomalyOptionalParams,
  MultivariateDetectMultivariateBatchAnomalyOptionalParams,
  MultivariateGetMultivariateModelOptionalParams,
  MultivariateDeleteMultivariateModelOptionalParams,
  MultivariateListMultivariateModelsOptionalParams,
  MultivariateTrainMultivariateModelOptionalParams,
  MultivariateGetMultivariateBatchDetectionResultOptionalParams,
} from "./api/multivariate/index.js";
export type {
  UnivariateDetectUnivariateChangePointOptionalParams,
  UnivariateDetectUnivariateLastPointOptionalParams,
  UnivariateDetectUnivariateEntireSeriesOptionalParams,
} from "./api/univariate/index.js";
export type { MultivariateOperations, UnivariateOperations } from "./classic/index.js";
export type { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
export { RestError, isRestError } from "@azure/core-rest-pipeline";
