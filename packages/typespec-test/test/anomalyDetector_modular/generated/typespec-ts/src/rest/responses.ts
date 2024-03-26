// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";
import {
  UnivariateUnivariateEntireDetectionResultOutput,
  UnivariateAnomalyDetectorErrorOutput,
  UnivariateUnivariateLastDetectionResultOutput,
  UnivariateUnivariateChangePointDetectionResultOutput,
  MultivariateMultivariateDetectionResultOutput,
  MultivariateResponseErrorOutput,
  MultivariateAnomalyDetectionModelOutput,
  MultivariateModelListOutput,
  MultivariateMultivariateLastDetectionResultOutput,
} from "./outputModels.js";

/** The request has succeeded. */
export interface DetectUnivariateEntireSeries200Response extends HttpResponse {
  status: "200";
  body: UnivariateUnivariateEntireDetectionResultOutput;
}

export interface DetectUnivariateEntireSeriesDefaultHeaders {
  /** Error code. */
  "x-ms-error-code"?: string;
}

export interface DetectUnivariateEntireSeriesDefaultResponse
  extends HttpResponse {
  status: string;
  body: UnivariateAnomalyDetectorErrorOutput;
  headers: RawHttpHeaders & DetectUnivariateEntireSeriesDefaultHeaders;
}

/** The request has succeeded. */
export interface DetectUnivariateLastPoint200Response extends HttpResponse {
  status: "200";
  body: UnivariateUnivariateLastDetectionResultOutput;
}

export interface DetectUnivariateLastPointDefaultHeaders {
  /** Error code. */
  "x-ms-error-code"?: string;
}

export interface DetectUnivariateLastPointDefaultResponse extends HttpResponse {
  status: string;
  body: UnivariateAnomalyDetectorErrorOutput;
  headers: RawHttpHeaders & DetectUnivariateLastPointDefaultHeaders;
}

/** The request has succeeded. */
export interface DetectUnivariateChangePoint200Response extends HttpResponse {
  status: "200";
  body: UnivariateUnivariateChangePointDetectionResultOutput;
}

export interface DetectUnivariateChangePointDefaultHeaders {
  /** Error code. */
  "x-ms-error-code"?: string;
}

export interface DetectUnivariateChangePointDefaultResponse
  extends HttpResponse {
  status: string;
  body: UnivariateAnomalyDetectorErrorOutput;
  headers: RawHttpHeaders & DetectUnivariateChangePointDefaultHeaders;
}

/** The request has succeeded. */
export interface GetMultivariateBatchDetectionResult200Response
  extends HttpResponse {
  status: "200";
  body: MultivariateMultivariateDetectionResultOutput;
}

export interface GetMultivariateBatchDetectionResultDefaultHeaders {
  /** Error code. */
  "x-ms-error-code"?: string;
}

export interface GetMultivariateBatchDetectionResultDefaultResponse
  extends HttpResponse {
  status: string;
  body: MultivariateResponseErrorOutput;
  headers: RawHttpHeaders & GetMultivariateBatchDetectionResultDefaultHeaders;
}

export interface TrainMultivariateModel201Headers {
  /** Location and ID of the model. */
  location: string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface TrainMultivariateModel201Response extends HttpResponse {
  status: "201";
  body: MultivariateAnomalyDetectionModelOutput;
  headers: RawHttpHeaders & TrainMultivariateModel201Headers;
}

export interface TrainMultivariateModelDefaultHeaders {
  /** Error code. */
  "x-ms-error-code"?: string;
}

export interface TrainMultivariateModelDefaultResponse extends HttpResponse {
  status: string;
  body: MultivariateResponseErrorOutput;
  headers: RawHttpHeaders & TrainMultivariateModelDefaultHeaders;
}

/** The request has succeeded. */
export interface ListMultivariateModels200Response extends HttpResponse {
  status: "200";
  body: MultivariateModelListOutput;
}

export interface ListMultivariateModelsDefaultHeaders {
  /** Error code. */
  "x-ms-error-code"?: string;
}

export interface ListMultivariateModelsDefaultResponse extends HttpResponse {
  status: string;
  body: MultivariateResponseErrorOutput;
  headers: RawHttpHeaders & ListMultivariateModelsDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DeleteMultivariateModel204Response extends HttpResponse {
  status: "204";
}

export interface DeleteMultivariateModelDefaultHeaders {
  /** Error code. */
  "x-ms-error-code"?: string;
}

export interface DeleteMultivariateModelDefaultResponse extends HttpResponse {
  status: string;
  body: MultivariateResponseErrorOutput;
  headers: RawHttpHeaders & DeleteMultivariateModelDefaultHeaders;
}

/** The request has succeeded. */
export interface GetMultivariateModel200Response extends HttpResponse {
  status: "200";
  body: MultivariateAnomalyDetectionModelOutput;
}

export interface GetMultivariateModelDefaultHeaders {
  /** Error code. */
  "x-ms-error-code"?: string;
}

export interface GetMultivariateModelDefaultResponse extends HttpResponse {
  status: string;
  body: MultivariateResponseErrorOutput;
  headers: RawHttpHeaders & GetMultivariateModelDefaultHeaders;
}

export interface DetectMultivariateBatchAnomaly202Headers {
  /** Id of the detection result. */
  "operation-id": string;
  /** Location of the detection result. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface DetectMultivariateBatchAnomaly202Response
  extends HttpResponse {
  status: "202";
  body: MultivariateMultivariateDetectionResultOutput;
  headers: RawHttpHeaders & DetectMultivariateBatchAnomaly202Headers;
}

export interface DetectMultivariateBatchAnomalyDefaultHeaders {
  /** Error code. */
  "x-ms-error-code"?: string;
}

export interface DetectMultivariateBatchAnomalyDefaultResponse
  extends HttpResponse {
  status: string;
  body: MultivariateResponseErrorOutput;
  headers: RawHttpHeaders & DetectMultivariateBatchAnomalyDefaultHeaders;
}

/** The request has succeeded. */
export interface DetectMultivariateLastAnomaly200Response extends HttpResponse {
  status: "200";
  body: MultivariateMultivariateLastDetectionResultOutput;
}

export interface DetectMultivariateLastAnomalyDefaultHeaders {
  /** Error code. */
  "x-ms-error-code"?: string;
}

export interface DetectMultivariateLastAnomalyDefaultResponse
  extends HttpResponse {
  status: string;
  body: MultivariateResponseErrorOutput;
  headers: RawHttpHeaders & DetectMultivariateLastAnomalyDefaultHeaders;
}
