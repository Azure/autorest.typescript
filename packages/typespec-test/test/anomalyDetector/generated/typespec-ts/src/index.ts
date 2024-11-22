// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { AnomalyDetectorClient } from "./anomalyDetectorClient.js";
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
  UnivariateUnivariateDetectionOptions,
  UnivariateTimeSeriesPoint,
  UnivariateTimeGranularity,
  UnivariateImputeMode,
  UnivariateUnivariateEntireDetectionResult,
  UnivariateUnivariateLastDetectionResult,
  UnivariateUnivariateChangePointDetectionOptions,
  UnivariateUnivariateChangePointDetectionResult,
  KnownVersions,
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
