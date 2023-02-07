// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";
import {
  ApplicationListResultOutput,
  ErrorResponseOutput,
  ApplicationOutput,
  PoolUsageMetricsListOutput,
  PoolStatisticsOutput,
  BatchPoolListResultOutput,
  BatchPoolOutput,
  AutoScaleRunOutput,
  AccountListSupportedImagesResultOutput,
  PoolNodeCountsListResultOutput,
  JobStatisticsOutput,
  BatchJobOutput,
  BatchJobListResultOutput,
  BatchJobListPreparationAndReleaseTaskStatusResultOutput,
  TaskCountsResultOutput,
  CertificateListResultOutput,
  CertificateOutput,
  NodeFileListResultOutput,
  BatchJobScheduleOutput,
  BatchJobScheduleListResultOutput,
  BatchTaskListResultOutput,
  TaskAddCollectionResultOutput,
  BatchTaskOutput,
  BatchTaskListSubtasksResultOutput,
  ComputeNodeOutput,
  ComputeNodeGetRemoteLoginSettingsResultOutput,
  UploadBatchServiceLogsResultOutput,
  ComputeNodeListResultOutput,
  NodeVMExtensionOutput,
  NodeVMExtensionListOutput,
} from "./outputModels";

export interface ApplicationOperationsList200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** The request has succeeded. */
export interface ApplicationOperationsList200Response extends HttpResponse {
  status: "200";
  body: ApplicationListResultOutput;
  headers: RawHttpHeaders & ApplicationOperationsList200Headers;
}

export interface ApplicationOperationsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ApplicationOperationsGet200Response extends HttpResponse {
  status: "200";
  body: ApplicationOutput;
}

export interface ApplicationOperationsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface PoolListUsageMetrics200Response extends HttpResponse {
  status: "200";
  body: PoolUsageMetricsListOutput;
}

export interface PoolListUsageMetricsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface PoolGetAllLifetimeStatistics200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** The request has succeeded. */
export interface PoolGetAllLifetimeStatistics200Response extends HttpResponse {
  status: "200";
  body: PoolStatisticsOutput;
  headers: RawHttpHeaders & PoolGetAllLifetimeStatistics200Headers;
}

export interface PoolGetAllLifetimeStatisticsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface PoolAdd201Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid: string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface PoolAdd201Response extends HttpResponse {
  status: "201";
  headers: RawHttpHeaders & PoolAdd201Headers;
}

export interface PoolAddDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface PoolList200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** The request has succeeded. */
export interface PoolList200Response extends HttpResponse {
  status: "200";
  body: BatchPoolListResultOutput;
  headers: RawHttpHeaders & PoolList200Headers;
}

export interface PoolListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface PoolDelete202Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
}

/** The parameters for a widget status request */
export interface PoolDelete202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & PoolDelete202Headers;
}

export interface PoolDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The Pool does not exist. */
export interface PoolExists404Response extends HttpResponse {
  status: "404";
}

export interface PoolExistsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface PoolGet200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** The request has succeeded. */
export interface PoolGet200Response extends HttpResponse {
  status: "200";
  body: BatchPoolOutput;
  headers: RawHttpHeaders & PoolGet200Headers;
}

export interface PoolGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface PoolPatch200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied */
  dataserviceid: string;
}

/** The request has succeeded. */
export interface PoolPatch200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & PoolPatch200Headers;
}

export interface PoolPatchDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface PoolDisableAutoScale200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied */
  dataserviceid: string;
}

/** The request has succeeded. */
export interface PoolDisableAutoScale200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & PoolDisableAutoScale200Headers;
}

export interface PoolDisableAutoScaleDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface PoolEnableAutoScale200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied */
  dataserviceid: string;
}

/** The request has succeeded. */
export interface PoolEnableAutoScale200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & PoolEnableAutoScale200Headers;
}

export interface PoolEnableAutoScaleDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface PoolEvaluateAutoScale200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied */
  dataserviceid: string;
}

/** The request has succeeded. */
export interface PoolEvaluateAutoScale200Response extends HttpResponse {
  status: "200";
  body: AutoScaleRunOutput;
  headers: RawHttpHeaders & PoolEvaluateAutoScale200Headers;
}

export interface PoolEvaluateAutoScaleDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface PoolResize200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied */
  dataserviceid: string;
}

/** The request has succeeded. */
export interface PoolResize200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & PoolResize200Headers;
}

export interface PoolResizeDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface PoolStopResize200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied */
  dataserviceid: string;
}

/** The request has succeeded. */
export interface PoolStopResize200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & PoolStopResize200Headers;
}

export interface PoolStopResizeDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface PoolUpdateProperties200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied */
  dataserviceid: string;
}

/** The request has succeeded. */
export interface PoolUpdateProperties200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & PoolUpdateProperties200Headers;
}

export interface PoolUpdatePropertiesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface PoolRemoveNodes200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied */
  dataserviceid: string;
}

/** The request has succeeded. */
export interface PoolRemoveNodes200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & PoolRemoveNodes200Headers;
}

export interface PoolRemoveNodesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface AccountListSupportedImages200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** The request has succeeded. */
export interface AccountListSupportedImages200Response extends HttpResponse {
  status: "200";
  body: AccountListSupportedImagesResultOutput;
  headers: RawHttpHeaders & AccountListSupportedImages200Headers;
}

export interface AccountListSupportedImagesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface AccountListPoolNodeCounts200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
}

/** The request has succeeded. */
export interface AccountListPoolNodeCounts200Response extends HttpResponse {
  status: "200";
  body: PoolNodeCountsListResultOutput;
  headers: RawHttpHeaders & AccountListPoolNodeCounts200Headers;
}

export interface AccountListPoolNodeCountsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface JobGetAllLifetimeStatistics200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** The request has succeeded. */
export interface JobGetAllLifetimeStatistics200Response extends HttpResponse {
  status: "200";
  body: JobStatisticsOutput;
  headers: RawHttpHeaders & JobGetAllLifetimeStatistics200Headers;
}

export interface JobGetAllLifetimeStatisticsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface JobDelete202Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
}

/** The parameters for a widget status request */
export interface JobDelete202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & JobDelete202Headers;
}

export interface JobDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface JobGet200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** The request has succeeded. */
export interface JobGet200Response extends HttpResponse {
  status: "200";
  body: BatchJobOutput;
  headers: RawHttpHeaders & JobGet200Headers;
}

export interface JobGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface JobPatch200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied */
  dataserviceid: string;
}

/** The request has succeeded. */
export interface JobPatch200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & JobPatch200Headers;
}

export interface JobPatchDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface JobUpdate200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied */
  dataserviceid: string;
}

/** The request has succeeded. */
export interface JobUpdate200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & JobUpdate200Headers;
}

export interface JobUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface JobDisable202Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied */
  dataserviceid: string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface JobDisable202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & JobDisable202Headers;
}

export interface JobDisableDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface JobEnable202Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied */
  dataserviceid: string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface JobEnable202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & JobEnable202Headers;
}

export interface JobEnableDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface JobTerminate202Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied */
  dataserviceid: string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface JobTerminate202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & JobTerminate202Headers;
}

export interface JobTerminateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface JobAdd201Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied */
  dataserviceid: string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface JobAdd201Response extends HttpResponse {
  status: "201";
  headers: RawHttpHeaders & JobAdd201Headers;
}

export interface JobAddDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface JobList200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** The request has succeeded. */
export interface JobList200Response extends HttpResponse {
  status: "200";
  body: BatchJobListResultOutput;
  headers: RawHttpHeaders & JobList200Headers;
}

export interface JobListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface JobListFromJobSchedule200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** The request has succeeded. */
export interface JobListFromJobSchedule200Response extends HttpResponse {
  status: "200";
  body: BatchJobListResultOutput;
  headers: RawHttpHeaders & JobListFromJobSchedule200Headers;
}

export interface JobListFromJobScheduleDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface JobListPreparationAndReleaseTaskStatus200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** The request has succeeded. */
export interface JobListPreparationAndReleaseTaskStatus200Response
  extends HttpResponse {
  status: "200";
  body: BatchJobListPreparationAndReleaseTaskStatusResultOutput;
  headers: RawHttpHeaders & JobListPreparationAndReleaseTaskStatus200Headers;
}

export interface JobListPreparationAndReleaseTaskStatusDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface JobGetTaskCounts200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
}

/** The request has succeeded. */
export interface JobGetTaskCounts200Response extends HttpResponse {
  status: "200";
  body: TaskCountsResultOutput;
  headers: RawHttpHeaders & JobGetTaskCounts200Headers;
}

export interface JobGetTaskCountsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface CertificateOperationsAdd201Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface CertificateOperationsAdd201Response extends HttpResponse {
  status: "201";
  headers: RawHttpHeaders & CertificateOperationsAdd201Headers;
}

export interface CertificateOperationsAddDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface CertificateOperationsList200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** The request has succeeded. */
export interface CertificateOperationsList200Response extends HttpResponse {
  status: "200";
  body: CertificateListResultOutput;
  headers: RawHttpHeaders & CertificateOperationsList200Headers;
}

export interface CertificateOperationsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface CertificateOperationsCancelDeletion204Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid: string;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface CertificateOperationsCancelDeletion204Response
  extends HttpResponse {
  status: "204";
  headers: RawHttpHeaders & CertificateOperationsCancelDeletion204Headers;
}

export interface CertificateOperationsCancelDeletionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface CertificateOperationsDelete202Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface CertificateOperationsDelete202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & CertificateOperationsDelete202Headers;
}

export interface CertificateOperationsDeleteDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface CertificateOperationsGet200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** The request has succeeded. */
export interface CertificateOperationsGet200Response extends HttpResponse {
  status: "200";
  body: CertificateOutput;
  headers: RawHttpHeaders & CertificateOperationsGet200Headers;
}

export interface CertificateOperationsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface FileDeleteFromTask200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
}

/** The request has succeeded. */
export interface FileDeleteFromTask200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & FileDeleteFromTask200Headers;
}

export interface FileDeleteFromTaskDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface FileGetFromTask200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The file creation time. */
  "ocp-creation-time"?: string;
  /** Whether the object represents a directory. */
  "ocp-batch-file-isdirectory": boolean;
  /** The URL of the file. */
  "ocp-batch-file-url": string;
  /** The file mode attribute in octal format. */
  "ocp-batch-file-mode": string;
  /** The length of the file. */
  "content-length": number;
}

/** The request has succeeded. */
export interface FileGetFromTask200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
  headers: RawHttpHeaders & FileGetFromTask200Headers;
}

export interface FileGetFromTaskDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface FileGetPropertiesFromTask200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The file creation time. */
  "ocp-creation-time"?: string;
  /** Whether the object represents a directory. */
  "ocp-batch-file-isdirectory": boolean;
  /** The URL of the file. */
  "ocp-batch-file-url": string;
  /** The file mode attribute in octal format. */
  "ocp-batch-file-mode": string;
  /** The length of the file. */
  "content-length": number;
}

/** The request has succeeded. */
export interface FileGetPropertiesFromTask200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & FileGetPropertiesFromTask200Headers;
}

export interface FileGetPropertiesFromTaskDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface FileDeleteFromComputeNode200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
}

/** The request has succeeded. */
export interface FileDeleteFromComputeNode200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & FileDeleteFromComputeNode200Headers;
}

export interface FileDeleteFromComputeNodeDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface FileGetFromComputeNode200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The file creation time. */
  "ocp-creation-time"?: string;
  /** Whether the object represents a directory. */
  "ocp-batch-file-isdirectory": boolean;
  /** The URL of the file. */
  "ocp-batch-file-url": string;
  /** The file mode attribute in octal format. */
  "ocp-batch-file-mode": string;
  /** The length of the file. */
  "content-length": number;
}

/** The request has succeeded. */
export interface FileGetFromComputeNode200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
  headers: RawHttpHeaders & FileGetFromComputeNode200Headers;
}

export interface FileGetFromComputeNodeDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface FileGetPropertiesFromComputeNode200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The file creation time. */
  "ocp-creation-time"?: string;
  /** Whether the object represents a directory. */
  "ocp-batch-file-isdirectory": boolean;
  /** The URL of the file. */
  "ocp-batch-file-url": string;
  /** The file mode attribute in octal format. */
  "ocp-batch-file-mode": string;
  /** The length of the file. */
  "content-length": number;
}

/** The request has succeeded. */
export interface FileGetPropertiesFromComputeNode200Response
  extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & FileGetPropertiesFromComputeNode200Headers;
}

export interface FileGetPropertiesFromComputeNodeDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface FileListFromTask200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** The request has succeeded. */
export interface FileListFromTask200Response extends HttpResponse {
  status: "200";
  body: NodeFileListResultOutput;
  headers: RawHttpHeaders & FileListFromTask200Headers;
}

export interface FileListFromTaskDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface FileListFromComputeNode200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** The request has succeeded. */
export interface FileListFromComputeNode200Response extends HttpResponse {
  status: "200";
  body: NodeFileListResultOutput;
  headers: RawHttpHeaders & FileListFromComputeNode200Headers;
}

export interface FileListFromComputeNodeDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface JobScheduleExists200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** The request has succeeded. */
export interface JobScheduleExists200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & JobScheduleExists200Headers;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface JobScheduleExists204Response extends HttpResponse {
  status: "204";
}

export interface JobScheduleExistsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface JobScheduleDelete202Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
}

/** The parameters for a widget status request */
export interface JobScheduleDelete202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & JobScheduleDelete202Headers;
}

export interface JobScheduleDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface JobScheduleGet200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** The request has succeeded. */
export interface JobScheduleGet200Response extends HttpResponse {
  status: "200";
  body: BatchJobScheduleOutput;
  headers: RawHttpHeaders & JobScheduleGet200Headers;
}

export interface JobScheduleGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface JobSchedulePatch200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid: string;
}

/** The request has succeeded. */
export interface JobSchedulePatch200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & JobSchedulePatch200Headers;
}

export interface JobSchedulePatchDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface JobScheduleUpdate200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid: string;
}

/** The request has succeeded. */
export interface JobScheduleUpdate200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & JobScheduleUpdate200Headers;
}

export interface JobScheduleUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface JobScheduleDisable204Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid: string;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface JobScheduleDisable204Response extends HttpResponse {
  status: "204";
  headers: RawHttpHeaders & JobScheduleDisable204Headers;
}

export interface JobScheduleDisableDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface JobScheduleEnable204Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid: string;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface JobScheduleEnable204Response extends HttpResponse {
  status: "204";
  headers: RawHttpHeaders & JobScheduleEnable204Headers;
}

export interface JobScheduleEnableDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface JobScheduleTerminate202Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid: string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface JobScheduleTerminate202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & JobScheduleTerminate202Headers;
}

export interface JobScheduleTerminateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface JobScheduleAdd201Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid: string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface JobScheduleAdd201Response extends HttpResponse {
  status: "201";
  headers: RawHttpHeaders & JobScheduleAdd201Headers;
}

export interface JobScheduleAddDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface JobScheduleList200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** The request has succeeded. */
export interface JobScheduleList200Response extends HttpResponse {
  status: "200";
  body: BatchJobScheduleListResultOutput;
  headers: RawHttpHeaders & JobScheduleList200Headers;
}

export interface JobScheduleListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface TaskAdd201Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid: string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface TaskAdd201Response extends HttpResponse {
  status: "201";
  headers: RawHttpHeaders & TaskAdd201Headers;
}

export interface TaskAddDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface TaskList200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** The request has succeeded. */
export interface TaskList200Response extends HttpResponse {
  status: "200";
  body: BatchTaskListResultOutput;
  headers: RawHttpHeaders & TaskList200Headers;
}

export interface TaskListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface TaskAddCollection200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
}

/** The request has succeeded. */
export interface TaskAddCollection200Response extends HttpResponse {
  status: "200";
  body: TaskAddCollectionResultOutput;
  headers: RawHttpHeaders & TaskAddCollection200Headers;
}

export interface TaskAddCollectionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface TaskDelete200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
}

/** The request has succeeded. */
export interface TaskDelete200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & TaskDelete200Headers;
}

export interface TaskDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface TaskGet200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid: string;
}

/** The request has succeeded. */
export interface TaskGet200Response extends HttpResponse {
  status: "200";
  body: BatchTaskOutput;
  headers: RawHttpHeaders & TaskGet200Headers;
}

export interface TaskGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface TaskUpdate200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid: string;
}

/** The request has succeeded. */
export interface TaskUpdate200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & TaskUpdate200Headers;
}

export interface TaskUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface TaskListSubtasks200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** The request has succeeded. */
export interface TaskListSubtasks200Response extends HttpResponse {
  status: "200";
  body: BatchTaskListSubtasksResultOutput;
  headers: RawHttpHeaders & TaskListSubtasks200Headers;
}

export interface TaskListSubtasksDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface TaskTerminate204Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid: string;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface TaskTerminate204Response extends HttpResponse {
  status: "204";
  headers: RawHttpHeaders & TaskTerminate204Headers;
}

export interface TaskTerminateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface TaskReactivate204Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid: string;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface TaskReactivate204Response extends HttpResponse {
  status: "204";
  headers: RawHttpHeaders & TaskReactivate204Headers;
}

export interface TaskReactivateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface ComputeNodeOperationsAddUser201Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid: string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface ComputeNodeOperationsAddUser201Response extends HttpResponse {
  status: "201";
  headers: RawHttpHeaders & ComputeNodeOperationsAddUser201Headers;
}

export interface ComputeNodeOperationsAddUserDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface ComputeNodeOperationsDeleteUser200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
}

/** The request has succeeded. */
export interface ComputeNodeOperationsDeleteUser200Response
  extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & ComputeNodeOperationsDeleteUser200Headers;
}

export interface ComputeNodeOperationsDeleteUserDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface ComputeNodeOperationsUpdateUser200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid: string;
}

/** The request has succeeded. */
export interface ComputeNodeOperationsUpdateUser200Response
  extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & ComputeNodeOperationsUpdateUser200Headers;
}

export interface ComputeNodeOperationsUpdateUserDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface ComputeNodeOperationsGet200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** The request has succeeded. */
export interface ComputeNodeOperationsGet200Response extends HttpResponse {
  status: "200";
  body: ComputeNodeOutput;
  headers: RawHttpHeaders & ComputeNodeOperationsGet200Headers;
}

export interface ComputeNodeOperationsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface ComputeNodeOperationsReboot202Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid: string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface ComputeNodeOperationsReboot202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & ComputeNodeOperationsReboot202Headers;
}

export interface ComputeNodeOperationsRebootDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface ComputeNodeOperationsReimage202Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid: string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface ComputeNodeOperationsReimage202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & ComputeNodeOperationsReimage202Headers;
}

export interface ComputeNodeOperationsReimageDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface ComputeNodeOperationsDisableScheduling200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid: string;
}

/** The request has succeeded. */
export interface ComputeNodeOperationsDisableScheduling200Response
  extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & ComputeNodeOperationsDisableScheduling200Headers;
}

export interface ComputeNodeOperationsDisableSchedulingDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface ComputeNodeOperationsEnableScheduling200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
  /** The OData ID of the resource to which the request applied. */
  dataserviceid: string;
}

/** The request has succeeded. */
export interface ComputeNodeOperationsEnableScheduling200Response
  extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & ComputeNodeOperationsEnableScheduling200Headers;
}

export interface ComputeNodeOperationsEnableSchedulingDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface ComputeNodeOperationsGetRemoteLoginSettings200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** The request has succeeded. */
export interface ComputeNodeOperationsGetRemoteLoginSettings200Response
  extends HttpResponse {
  status: "200";
  body: ComputeNodeGetRemoteLoginSettingsResultOutput;
  headers: RawHttpHeaders &
    ComputeNodeOperationsGetRemoteLoginSettings200Headers;
}

export interface ComputeNodeOperationsGetRemoteLoginSettingsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface ComputeNodeOperationsGetRemoteDesktop200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** The request has succeeded. */
export interface ComputeNodeOperationsGetRemoteDesktop200Response
  extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
  headers: RawHttpHeaders & ComputeNodeOperationsGetRemoteDesktop200Headers;
}

export interface ComputeNodeOperationsGetRemoteDesktopDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface ComputeNodeOperationsUploadBatchServiceLogs200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
}

/** The request has succeeded. */
export interface ComputeNodeOperationsUploadBatchServiceLogs200Response
  extends HttpResponse {
  status: "200";
  body: UploadBatchServiceLogsResultOutput;
  headers: RawHttpHeaders &
    ComputeNodeOperationsUploadBatchServiceLogs200Headers;
}

export interface ComputeNodeOperationsUploadBatchServiceLogsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface ComputeNodeOperationsList200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** The request has succeeded. */
export interface ComputeNodeOperationsList200Response extends HttpResponse {
  status: "200";
  body: ComputeNodeListResultOutput;
  headers: RawHttpHeaders & ComputeNodeOperationsList200Headers;
}

export interface ComputeNodeOperationsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface ComputeNodeExtensionOperationsGet200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** The request has succeeded. */
export interface ComputeNodeExtensionOperationsGet200Response
  extends HttpResponse {
  status: "200";
  body: NodeVMExtensionOutput;
  headers: RawHttpHeaders & ComputeNodeExtensionOperationsGet200Headers;
}

export interface ComputeNodeExtensionOperationsGetDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface ComputeNodeExtensionOperationsList200Headers {
  /** The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. */
  "client-request-id"?: string;
  /** A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. */
  "request-id"?: string;
  /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. */
  etag?: string;
  /** The time at which the resource was last modified. */
  "last-modified"?: string;
}

/** The request has succeeded. */
export interface ComputeNodeExtensionOperationsList200Response
  extends HttpResponse {
  status: "200";
  body: NodeVMExtensionListOutput;
  headers: RawHttpHeaders & ComputeNodeExtensionOperationsList200Headers;
}

export interface ComputeNodeExtensionOperationsListDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
