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
  MultivariateMultivariateBatchDetectionStatus,
  MultivariateErrorResponse,
  MultivariateVariableState,
  MultivariateMultivariateBatchDetectionOptions,
  MultivariateAnomalyState,
  MultivariateAnomalyValue,
  MultivariateAnomalyInterpretation,
  MultivariateCorrelationChanges,
  MultivariateResponseError,
  MultivariateModelInfo,
  MultivariateDataSchema,
  MultivariateAlignPolicy,
  MultivariateAlignMode,
  MultivariateFillNAMethod,
  MultivariateModelStatus,
  MultivariateDiagnosticsInfo,
  MultivariateModelState,
  MultivariateAnomalyDetectionModel,
  MultivariateMultivariateLastDetectionOptions,
  MultivariateVariableValues,
  MultivariateMultivariateLastDetectionResult,
} from "./models/multivariate/index.js";
export type {
  UnivariateUnivariateDetectionOptions,
  UnivariateTimeSeriesPoint,
  UnivariateTimeGranularity,
  UnivariateImputeMode,
  UnivariateUnivariateEntireDetectionResult,
  UnivariateAnomalyDetectorError,
  UnivariateAnomalyDetectorErrorCodes,
  UnivariateUnivariateLastDetectionResult,
  UnivariateUnivariateChangePointDetectionOptions,
  UnivariateUnivariateChangePointDetectionResult,
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
