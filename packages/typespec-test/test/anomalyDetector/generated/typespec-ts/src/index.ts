// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { AnomalyDetectorClient } from "./anomalyDetectorClient.js";
export { KnownVersions } from "./models/index.js";
export {
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
export {
  UnivariateUnivariateDetectionOptions,
  UnivariateTimeSeriesPoint,
  UnivariateTimeGranularity,
  UnivariateImputeMode,
  UnivariateUnivariateEntireDetectionResult,
  UnivariateUnivariateLastDetectionResult,
  UnivariateUnivariateChangePointDetectionOptions,
  UnivariateUnivariateChangePointDetectionResult,
} from "./models/univariate/index.js";
export {
  AnomalyDetectorClientOptionalParams,
  MultivariateDetectMultivariateLastAnomalyOptionalParams,
  MultivariateDetectMultivariateBatchAnomalyOptionalParams,
  MultivariateGetMultivariateModelOptionalParams,
  MultivariateDeleteMultivariateModelOptionalParams,
  MultivariateListMultivariateModelsOptionalParams,
  MultivariateTrainMultivariateModelOptionalParams,
  MultivariateGetMultivariateBatchDetectionResultOptionalParams,
  UnivariateDetectUnivariateChangePointOptionalParams,
  UnivariateDetectUnivariateLastPointOptionalParams,
  UnivariateDetectUnivariateEntireSeriesOptionalParams,
} from "./api/index.js";
export {
  MultivariateOperations,
  UnivariateOperations,
} from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
