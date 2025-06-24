// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { APIVersion } from "./models/index.js";
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
export {
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
export { AnomalyDetectorClient } from "./anomalyDetectorClient.js";
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
