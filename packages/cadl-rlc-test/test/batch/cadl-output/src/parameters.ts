// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import {
  BatchPool,
  BatchPoolUpdate,
  BatchPoolEnableAutoScaleParameters,
  BatchPoolEvaluateAutoScaleParameters,
  BatchPoolResizeParameters,
  NodeRemoveParameters,
  BatchJobUpdate,
  BatchJob,
  BatchJobDisableParameters,
  BatchJobTerminateParameters,
  Certificate,
  BatchJobScheduleUpdate,
  BatchJobSchedule,
  BatchTask,
  BatchTaskCollection,
  ComputeNodeUser,
  NodeUpdateUserParameters,
  NodeRebootParameters,
  NodeReimageParameters,
  NodeDisableSchedulingParameters,
  UploadBatchServiceLogsResult,
} from "./models";

export interface ApplicationOperationsListHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface ApplicationOperationsListQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  maxresults: number;
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface ApplicationOperationsListQueryParam {
  queryParameters: ApplicationOperationsListQueryParamProperties;
}

export interface ApplicationOperationsListHeaderParam {
  headers: RawHttpHeadersInput & ApplicationOperationsListHeaders;
}

export type ApplicationOperationsListParameters =
  ApplicationOperationsListQueryParam &
    ApplicationOperationsListHeaderParam &
    RequestParameters;

export interface ApplicationOperationsGetHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface ApplicationOperationsGetQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface ApplicationOperationsGetQueryParam {
  queryParameters: ApplicationOperationsGetQueryParamProperties;
}

export interface ApplicationOperationsGetHeaderParam {
  headers: RawHttpHeadersInput & ApplicationOperationsGetHeaders;
}

export type ApplicationOperationsGetParameters =
  ApplicationOperationsGetQueryParam &
    ApplicationOperationsGetHeaderParam &
    RequestParameters;

export interface PoolOperationsListUsageMetricsHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface PoolOperationsListUsageMetricsQueryParamProperties {
  /**
   * The earliest time from which to include metrics. This must be at least two and
   * a half hours before the current time. If not specified this defaults to the
   * start time of the last aggregation interval currently available.
   */
  starttime: string;
  /**
   * The latest time from which to include metrics. This must be at least two hours
   * before the current time. If not specified this defaults to the end time of the
   * last aggregation interval currently available.
   */
  endtime: string;
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-account-usage-metrics.
   */
  $filter: string;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * results will be returned.
   */
  maxresults: number;
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface PoolOperationsListUsageMetricsQueryParam {
  queryParameters: PoolOperationsListUsageMetricsQueryParamProperties;
}

export interface PoolOperationsListUsageMetricsHeaderParam {
  headers: RawHttpHeadersInput & PoolOperationsListUsageMetricsHeaders;
}

export type PoolOperationsListUsageMetricsParameters =
  PoolOperationsListUsageMetricsQueryParam &
    PoolOperationsListUsageMetricsHeaderParam &
    RequestParameters;

export interface PoolOperationsGetAllLifetimeStatisticsHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface PoolOperationsGetAllLifetimeStatisticsQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface PoolOperationsGetAllLifetimeStatisticsQueryParam {
  queryParameters: PoolOperationsGetAllLifetimeStatisticsQueryParamProperties;
}

export interface PoolOperationsGetAllLifetimeStatisticsHeaderParam {
  headers: RawHttpHeadersInput & PoolOperationsGetAllLifetimeStatisticsHeaders;
}

export type PoolOperationsGetAllLifetimeStatisticsParameters =
  PoolOperationsGetAllLifetimeStatisticsQueryParam &
    PoolOperationsGetAllLifetimeStatisticsHeaderParam &
    RequestParameters;

export interface PoolOperationsAddHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface PoolOperationsAddBodyParam {
  /** The Pool to be added. */
  body: BatchPool;
}

export interface PoolOperationsAddQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface PoolOperationsAddQueryParam {
  queryParameters: PoolOperationsAddQueryParamProperties;
}

export interface PoolOperationsAddHeaderParam {
  headers: RawHttpHeadersInput & PoolOperationsAddHeaders;
}

export type PoolOperationsAddParameters = PoolOperationsAddQueryParam &
  PoolOperationsAddHeaderParam &
  PoolOperationsAddBodyParam &
  RequestParameters;

export interface PoolOperationsListHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface PoolOperationsListQueryParamProperties {
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-pools.
   */
  $filter: string;
  /** An OData $select clause. */
  $select: string;
  /** An OData $expand clause. */
  $expand: string;
  /**
   * The maximum number of items to return in the response. A maximum of 1000 Pools
   * can be returned.
   */
  maxresults: number;
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface PoolOperationsListQueryParam {
  queryParameters: PoolOperationsListQueryParamProperties;
}

export interface PoolOperationsListHeaderParam {
  headers: RawHttpHeadersInput & PoolOperationsListHeaders;
}

export type PoolOperationsListParameters = PoolOperationsListQueryParam &
  PoolOperationsListHeaderParam &
  RequestParameters;

export interface PoolOperationsDeleteHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since": string;
}

export interface PoolOperationsDeleteQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface PoolOperationsDeleteQueryParam {
  queryParameters: PoolOperationsDeleteQueryParamProperties;
}

export interface PoolOperationsDeleteHeaderParam {
  headers: RawHttpHeadersInput & PoolOperationsDeleteHeaders;
}

export type PoolOperationsDeleteParameters = PoolOperationsDeleteQueryParam &
  PoolOperationsDeleteHeaderParam &
  RequestParameters;

export interface PoolOperationsExistsHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since": string;
}

export interface PoolOperationsExistsQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface PoolOperationsExistsQueryParam {
  queryParameters: PoolOperationsExistsQueryParamProperties;
}

export interface PoolOperationsExistsHeaderParam {
  headers: RawHttpHeadersInput & PoolOperationsExistsHeaders;
}

export type PoolOperationsExistsParameters = PoolOperationsExistsQueryParam &
  PoolOperationsExistsHeaderParam &
  RequestParameters;

export interface PoolOperationsGetHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since": string;
}

export interface PoolOperationsGetQueryParamProperties {
  /** An OData $select clause. */
  $select: string;
  /** An OData $expand clause. */
  $expand: string;
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface PoolOperationsGetQueryParam {
  queryParameters: PoolOperationsGetQueryParamProperties;
}

export interface PoolOperationsGetHeaderParam {
  headers: RawHttpHeadersInput & PoolOperationsGetHeaders;
}

export type PoolOperationsGetParameters = PoolOperationsGetQueryParam &
  PoolOperationsGetHeaderParam &
  RequestParameters;

export interface PoolOperationsPatchHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since": string;
}

export interface PoolOperationsPatchBodyParam {
  /** The parameters for the request. */
  body: BatchPoolUpdate;
}

export interface PoolOperationsPatchQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface PoolOperationsPatchQueryParam {
  queryParameters: PoolOperationsPatchQueryParamProperties;
}

export interface PoolOperationsPatchHeaderParam {
  headers: RawHttpHeadersInput & PoolOperationsPatchHeaders;
}

export type PoolOperationsPatchParameters = PoolOperationsPatchQueryParam &
  PoolOperationsPatchHeaderParam &
  PoolOperationsPatchBodyParam &
  RequestParameters;

export interface PoolOperationsDisableAutoScaleHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface PoolOperationsDisableAutoScaleQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface PoolOperationsDisableAutoScaleQueryParam {
  queryParameters: PoolOperationsDisableAutoScaleQueryParamProperties;
}

export interface PoolOperationsDisableAutoScaleHeaderParam {
  headers: RawHttpHeadersInput & PoolOperationsDisableAutoScaleHeaders;
}

export type PoolOperationsDisableAutoScaleParameters =
  PoolOperationsDisableAutoScaleQueryParam &
    PoolOperationsDisableAutoScaleHeaderParam &
    RequestParameters;

export interface PoolOperationsEnableAutoScaleHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since": string;
}

export interface PoolOperationsEnableAutoScaleBodyParam {
  /** The parameters for the request. */
  body: BatchPoolEnableAutoScaleParameters;
}

export interface PoolOperationsEnableAutoScaleQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface PoolOperationsEnableAutoScaleQueryParam {
  queryParameters: PoolOperationsEnableAutoScaleQueryParamProperties;
}

export interface PoolOperationsEnableAutoScaleHeaderParam {
  headers: RawHttpHeadersInput & PoolOperationsEnableAutoScaleHeaders;
}

export type PoolOperationsEnableAutoScaleParameters =
  PoolOperationsEnableAutoScaleQueryParam &
    PoolOperationsEnableAutoScaleHeaderParam &
    PoolOperationsEnableAutoScaleBodyParam &
    RequestParameters;

export interface PoolOperationsEvaluateAutoScaleHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface PoolOperationsEvaluateAutoScaleBodyParam {
  /** The parameters for the request. */
  body: BatchPoolEvaluateAutoScaleParameters;
}

export interface PoolOperationsEvaluateAutoScaleQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface PoolOperationsEvaluateAutoScaleQueryParam {
  queryParameters: PoolOperationsEvaluateAutoScaleQueryParamProperties;
}

export interface PoolOperationsEvaluateAutoScaleHeaderParam {
  headers: RawHttpHeadersInput & PoolOperationsEvaluateAutoScaleHeaders;
}

export type PoolOperationsEvaluateAutoScaleParameters =
  PoolOperationsEvaluateAutoScaleQueryParam &
    PoolOperationsEvaluateAutoScaleHeaderParam &
    PoolOperationsEvaluateAutoScaleBodyParam &
    RequestParameters;

export interface PoolOperationsResizeHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since": string;
}

export interface PoolOperationsResizeBodyParam {
  /** The parameters for the request. */
  body: BatchPoolResizeParameters;
}

export interface PoolOperationsResizeQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface PoolOperationsResizeQueryParam {
  queryParameters: PoolOperationsResizeQueryParamProperties;
}

export interface PoolOperationsResizeHeaderParam {
  headers: RawHttpHeadersInput & PoolOperationsResizeHeaders;
}

export type PoolOperationsResizeParameters = PoolOperationsResizeQueryParam &
  PoolOperationsResizeHeaderParam &
  PoolOperationsResizeBodyParam &
  RequestParameters;

export interface PoolOperationsStopResizeHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since": string;
}

export interface PoolOperationsStopResizeQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface PoolOperationsStopResizeQueryParam {
  queryParameters: PoolOperationsStopResizeQueryParamProperties;
}

export interface PoolOperationsStopResizeHeaderParam {
  headers: RawHttpHeadersInput & PoolOperationsStopResizeHeaders;
}

export type PoolOperationsStopResizeParameters =
  PoolOperationsStopResizeQueryParam &
    PoolOperationsStopResizeHeaderParam &
    RequestParameters;

export interface PoolOperationsUpdatePropertiesHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface PoolOperationsUpdatePropertiesBodyParam {
  /** The parameters for the request. */
  body: BatchPool;
}

export interface PoolOperationsUpdatePropertiesQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface PoolOperationsUpdatePropertiesQueryParam {
  queryParameters: PoolOperationsUpdatePropertiesQueryParamProperties;
}

export interface PoolOperationsUpdatePropertiesHeaderParam {
  headers: RawHttpHeadersInput & PoolOperationsUpdatePropertiesHeaders;
}

export type PoolOperationsUpdatePropertiesParameters =
  PoolOperationsUpdatePropertiesQueryParam &
    PoolOperationsUpdatePropertiesHeaderParam &
    PoolOperationsUpdatePropertiesBodyParam &
    RequestParameters;

export interface PoolOperationsRemoveNodesHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since": string;
}

export interface PoolOperationsRemoveNodesBodyParam {
  /** The parameters for the request. */
  body: NodeRemoveParameters;
}

export interface PoolOperationsRemoveNodesQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface PoolOperationsRemoveNodesQueryParam {
  queryParameters: PoolOperationsRemoveNodesQueryParamProperties;
}

export interface PoolOperationsRemoveNodesHeaderParam {
  headers: RawHttpHeadersInput & PoolOperationsRemoveNodesHeaders;
}

export type PoolOperationsRemoveNodesParameters =
  PoolOperationsRemoveNodesQueryParam &
    PoolOperationsRemoveNodesHeaderParam &
    PoolOperationsRemoveNodesBodyParam &
    RequestParameters;

export interface AccountOperationsListSupportedImagesHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface AccountOperationsListSupportedImagesQueryParamProperties {
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-support-images.
   */
  $filter: string;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * results will be returned.
   */
  maxresults: number;
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface AccountOperationsListSupportedImagesQueryParam {
  queryParameters: AccountOperationsListSupportedImagesQueryParamProperties;
}

export interface AccountOperationsListSupportedImagesHeaderParam {
  headers: RawHttpHeadersInput & AccountOperationsListSupportedImagesHeaders;
}

export type AccountOperationsListSupportedImagesParameters =
  AccountOperationsListSupportedImagesQueryParam &
    AccountOperationsListSupportedImagesHeaderParam &
    RequestParameters;

export interface AccountOperationsListPoolNodeCountsHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface AccountOperationsListPoolNodeCountsQueryParamProperties {
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch.
   */
  $filter: string;
  /** The maximum number of items to return in the response. */
  maxresults: number;
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface AccountOperationsListPoolNodeCountsQueryParam {
  queryParameters: AccountOperationsListPoolNodeCountsQueryParamProperties;
}

export interface AccountOperationsListPoolNodeCountsHeaderParam {
  headers: RawHttpHeadersInput & AccountOperationsListPoolNodeCountsHeaders;
}

export type AccountOperationsListPoolNodeCountsParameters =
  AccountOperationsListPoolNodeCountsQueryParam &
    AccountOperationsListPoolNodeCountsHeaderParam &
    RequestParameters;

export interface JobOperationsGetAllLifetimeStatisticsHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface JobOperationsGetAllLifetimeStatisticsQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface JobOperationsGetAllLifetimeStatisticsQueryParam {
  queryParameters: JobOperationsGetAllLifetimeStatisticsQueryParamProperties;
}

export interface JobOperationsGetAllLifetimeStatisticsHeaderParam {
  headers: RawHttpHeadersInput & JobOperationsGetAllLifetimeStatisticsHeaders;
}

export type JobOperationsGetAllLifetimeStatisticsParameters =
  JobOperationsGetAllLifetimeStatisticsQueryParam &
    JobOperationsGetAllLifetimeStatisticsHeaderParam &
    RequestParameters;

export interface JobOperationsDeleteHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since": string;
}

export interface JobOperationsDeleteQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface JobOperationsDeleteQueryParam {
  queryParameters: JobOperationsDeleteQueryParamProperties;
}

export interface JobOperationsDeleteHeaderParam {
  headers: RawHttpHeadersInput & JobOperationsDeleteHeaders;
}

export type JobOperationsDeleteParameters = JobOperationsDeleteQueryParam &
  JobOperationsDeleteHeaderParam &
  RequestParameters;

export interface JobOperationsGetHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since": string;
}

export interface JobOperationsGetQueryParamProperties {
  /** An OData $select clause. */
  $select: string;
  /** An OData $expand clause. */
  $expand: string;
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface JobOperationsGetQueryParam {
  queryParameters: JobOperationsGetQueryParamProperties;
}

export interface JobOperationsGetHeaderParam {
  headers: RawHttpHeadersInput & JobOperationsGetHeaders;
}

export type JobOperationsGetParameters = JobOperationsGetQueryParam &
  JobOperationsGetHeaderParam &
  RequestParameters;

export interface JobOperationsPatchHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since": string;
}

export interface JobOperationsPatchBodyParam {
  /** The parameters for the request. */
  body: BatchJobUpdate;
}

export interface JobOperationsPatchQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface JobOperationsPatchQueryParam {
  queryParameters: JobOperationsPatchQueryParamProperties;
}

export interface JobOperationsPatchHeaderParam {
  headers: RawHttpHeadersInput & JobOperationsPatchHeaders;
}

export type JobOperationsPatchParameters = JobOperationsPatchQueryParam &
  JobOperationsPatchHeaderParam &
  JobOperationsPatchBodyParam &
  RequestParameters;

export interface JobOperationsUpdateHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since": string;
}

export interface JobOperationsUpdateBodyParam {
  /** The parameters for the request. */
  body: BatchJob;
}

export interface JobOperationsUpdateQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface JobOperationsUpdateQueryParam {
  queryParameters: JobOperationsUpdateQueryParamProperties;
}

export interface JobOperationsUpdateHeaderParam {
  headers: RawHttpHeadersInput & JobOperationsUpdateHeaders;
}

export type JobOperationsUpdateParameters = JobOperationsUpdateQueryParam &
  JobOperationsUpdateHeaderParam &
  JobOperationsUpdateBodyParam &
  RequestParameters;

export interface JobOperationsDisableHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since": string;
}

export interface JobOperationsDisableBodyParam {
  /** The parameters for the request. */
  body: BatchJobDisableParameters;
}

export interface JobOperationsDisableQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface JobOperationsDisableQueryParam {
  queryParameters: JobOperationsDisableQueryParamProperties;
}

export interface JobOperationsDisableHeaderParam {
  headers: RawHttpHeadersInput & JobOperationsDisableHeaders;
}

export type JobOperationsDisableParameters = JobOperationsDisableQueryParam &
  JobOperationsDisableHeaderParam &
  JobOperationsDisableBodyParam &
  RequestParameters;

export interface JobOperationsEnableHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since": string;
}

export interface JobOperationsEnableQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface JobOperationsEnableQueryParam {
  queryParameters: JobOperationsEnableQueryParamProperties;
}

export interface JobOperationsEnableHeaderParam {
  headers: RawHttpHeadersInput & JobOperationsEnableHeaders;
}

export type JobOperationsEnableParameters = JobOperationsEnableQueryParam &
  JobOperationsEnableHeaderParam &
  RequestParameters;

export interface JobOperationsTerminateHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since": string;
}

export interface JobOperationsTerminateBodyParam {
  /** The parameters for the request. */
  body: BatchJobTerminateParameters;
}

export interface JobOperationsTerminateQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface JobOperationsTerminateQueryParam {
  queryParameters: JobOperationsTerminateQueryParamProperties;
}

export interface JobOperationsTerminateHeaderParam {
  headers: RawHttpHeadersInput & JobOperationsTerminateHeaders;
}

export type JobOperationsTerminateParameters =
  JobOperationsTerminateQueryParam &
    JobOperationsTerminateHeaderParam &
    JobOperationsTerminateBodyParam &
    RequestParameters;

export interface JobOperationsAddHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface JobOperationsAddBodyParam {
  /** The Job to be added. */
  body: BatchJob;
}

export interface JobOperationsAddQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface JobOperationsAddQueryParam {
  queryParameters: JobOperationsAddQueryParamProperties;
}

export interface JobOperationsAddHeaderParam {
  headers: RawHttpHeadersInput & JobOperationsAddHeaders;
}

export type JobOperationsAddParameters = JobOperationsAddQueryParam &
  JobOperationsAddHeaderParam &
  JobOperationsAddBodyParam &
  RequestParameters;

export interface JobOperationsListHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface JobOperationsListQueryParamProperties {
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-jobs.
   */
  $filter: string;
  /** An OData $select clause. */
  $select: string;
  /** An OData $expand clause. */
  $expand: string;
  /**
   * The maximum number of items to return in the response. A maximum of 1000 Jobs
   * can be returned.
   */
  maxresults: number;
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface JobOperationsListQueryParam {
  queryParameters: JobOperationsListQueryParamProperties;
}

export interface JobOperationsListHeaderParam {
  headers: RawHttpHeadersInput & JobOperationsListHeaders;
}

export type JobOperationsListParameters = JobOperationsListQueryParam &
  JobOperationsListHeaderParam &
  RequestParameters;

export interface JobOperationsListFromJobScheduleHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface JobOperationsListFromJobScheduleQueryParamProperties {
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-jobs-in-a-job-schedule.
   */
  $filter: string;
  /** An OData $select clause. */
  $select: string;
  /** An OData $expand clause. */
  $expand: string;
  /**
   * The maximum number of items to return in the response. A maximum of 1000 Jobs
   * can be returned.
   */
  maxresults: number;
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface JobOperationsListFromJobScheduleQueryParam {
  queryParameters: JobOperationsListFromJobScheduleQueryParamProperties;
}

export interface JobOperationsListFromJobScheduleHeaderParam {
  headers: RawHttpHeadersInput & JobOperationsListFromJobScheduleHeaders;
}

export type JobOperationsListFromJobScheduleParameters =
  JobOperationsListFromJobScheduleQueryParam &
    JobOperationsListFromJobScheduleHeaderParam &
    RequestParameters;

export interface JobOperationsListPreparationAndReleaseTaskStatusHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface JobOperationsListPreparationAndReleaseTaskStatusQueryParamProperties {
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-job-preparation-and-release-status.
   */
  $filter: string;
  /** An OData $select clause. */
  $select: string;
  /**
   * The maximum number of items to return in the response. A maximum of 1000 Tasks
   * can be returned.
   */
  maxresults: number;
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface JobOperationsListPreparationAndReleaseTaskStatusQueryParam {
  queryParameters: JobOperationsListPreparationAndReleaseTaskStatusQueryParamProperties;
}

export interface JobOperationsListPreparationAndReleaseTaskStatusHeaderParam {
  headers: RawHttpHeadersInput &
    JobOperationsListPreparationAndReleaseTaskStatusHeaders;
}

export type JobOperationsListPreparationAndReleaseTaskStatusParameters =
  JobOperationsListPreparationAndReleaseTaskStatusQueryParam &
    JobOperationsListPreparationAndReleaseTaskStatusHeaderParam &
    RequestParameters;

export interface JobOperationsGetTaskCountsHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface JobOperationsGetTaskCountsQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface JobOperationsGetTaskCountsQueryParam {
  queryParameters: JobOperationsGetTaskCountsQueryParamProperties;
}

export interface JobOperationsGetTaskCountsHeaderParam {
  headers: RawHttpHeadersInput & JobOperationsGetTaskCountsHeaders;
}

export type JobOperationsGetTaskCountsParameters =
  JobOperationsGetTaskCountsQueryParam &
    JobOperationsGetTaskCountsHeaderParam &
    RequestParameters;

export interface CertificateOperationsAddHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface CertificateOperationsAddBodyParam {
  /** The Certificate to be added. */
  body: Certificate;
}

export interface CertificateOperationsAddQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface CertificateOperationsAddQueryParam {
  queryParameters: CertificateOperationsAddQueryParamProperties;
}

export interface CertificateOperationsAddHeaderParam {
  headers: RawHttpHeadersInput & CertificateOperationsAddHeaders;
}

export type CertificateOperationsAddParameters =
  CertificateOperationsAddQueryParam &
    CertificateOperationsAddHeaderParam &
    CertificateOperationsAddBodyParam &
    RequestParameters;

export interface CertificateOperationsListHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface CertificateOperationsListQueryParamProperties {
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-certificates.
   */
  $filter: string;
  /** An OData $select clause. */
  $select: string;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * Certificates can be returned.
   */
  maxresults: number;
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface CertificateOperationsListQueryParam {
  queryParameters: CertificateOperationsListQueryParamProperties;
}

export interface CertificateOperationsListHeaderParam {
  headers: RawHttpHeadersInput & CertificateOperationsListHeaders;
}

export type CertificateOperationsListParameters =
  CertificateOperationsListQueryParam &
    CertificateOperationsListHeaderParam &
    RequestParameters;

export interface CertificateOperationsCancelDeletionHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface CertificateOperationsCancelDeletionQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface CertificateOperationsCancelDeletionQueryParam {
  queryParameters: CertificateOperationsCancelDeletionQueryParamProperties;
}

export interface CertificateOperationsCancelDeletionHeaderParam {
  headers: RawHttpHeadersInput & CertificateOperationsCancelDeletionHeaders;
}

export type CertificateOperationsCancelDeletionParameters =
  CertificateOperationsCancelDeletionQueryParam &
    CertificateOperationsCancelDeletionHeaderParam &
    RequestParameters;

export interface CertificateOperationsDeleteHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface CertificateOperationsDeleteQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface CertificateOperationsDeleteQueryParam {
  queryParameters: CertificateOperationsDeleteQueryParamProperties;
}

export interface CertificateOperationsDeleteHeaderParam {
  headers: RawHttpHeadersInput & CertificateOperationsDeleteHeaders;
}

export type CertificateOperationsDeleteParameters =
  CertificateOperationsDeleteQueryParam &
    CertificateOperationsDeleteHeaderParam &
    RequestParameters;

export interface CertificateOperationsGetHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface CertificateOperationsGetQueryParamProperties {
  /** An OData $select clause. */
  $select: string;
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface CertificateOperationsGetQueryParam {
  queryParameters: CertificateOperationsGetQueryParamProperties;
}

export interface CertificateOperationsGetHeaderParam {
  headers: RawHttpHeadersInput & CertificateOperationsGetHeaders;
}

export type CertificateOperationsGetParameters =
  CertificateOperationsGetQueryParam &
    CertificateOperationsGetHeaderParam &
    RequestParameters;

export interface FileOperationsDeleteFromTaskHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface FileOperationsDeleteFromTaskQueryParamProperties {
  /**
   * Whether to delete children of a directory. If the filePath parameter represents
   * a directory instead of a file, you can set recursive to true to delete the
   * directory and all of the files and subdirectories in it. If recursive is false
   * then the directory must be empty or deletion will fail.
   */
  recursive: boolean;
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface FileOperationsDeleteFromTaskQueryParam {
  queryParameters: FileOperationsDeleteFromTaskQueryParamProperties;
}

export interface FileOperationsDeleteFromTaskHeaderParam {
  headers: RawHttpHeadersInput & FileOperationsDeleteFromTaskHeaders;
}

export type FileOperationsDeleteFromTaskParameters =
  FileOperationsDeleteFromTaskQueryParam &
    FileOperationsDeleteFromTaskHeaderParam &
    RequestParameters;

export interface FileOperationsGetFromTaskHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
  /**
   * The byte range to be retrieved. The default is to retrieve the entire file. The
   * format is bytes=startRange-endRange.
   */
  "ocp-range": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since": string;
  /** Accept header */
  accept: "application/json, application/octet-stream";
}

export interface FileOperationsGetFromTaskQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface FileOperationsGetFromTaskQueryParam {
  queryParameters: FileOperationsGetFromTaskQueryParamProperties;
}

export interface FileOperationsGetFromTaskHeaderParam {
  headers: RawHttpHeadersInput & FileOperationsGetFromTaskHeaders;
}

export type FileOperationsGetFromTaskParameters =
  FileOperationsGetFromTaskQueryParam &
    FileOperationsGetFromTaskHeaderParam &
    RequestParameters;

export interface FileOperationsGetPropertiesFromTaskHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since": string;
}

export interface FileOperationsGetPropertiesFromTaskQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface FileOperationsGetPropertiesFromTaskQueryParam {
  queryParameters: FileOperationsGetPropertiesFromTaskQueryParamProperties;
}

export interface FileOperationsGetPropertiesFromTaskHeaderParam {
  headers: RawHttpHeadersInput & FileOperationsGetPropertiesFromTaskHeaders;
}

export type FileOperationsGetPropertiesFromTaskParameters =
  FileOperationsGetPropertiesFromTaskQueryParam &
    FileOperationsGetPropertiesFromTaskHeaderParam &
    RequestParameters;

export interface FileOperationsDeleteFromComputeNodeHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface FileOperationsDeleteFromComputeNodeQueryParamProperties {
  /**
   * Whether to delete children of a directory. If the filePath parameter represents
   * a directory instead of a file, you can set recursive to true to delete the
   * directory and all of the files and subdirectories in it. If recursive is false
   * then the directory must be empty or deletion will fail.
   */
  recursive: boolean;
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface FileOperationsDeleteFromComputeNodeQueryParam {
  queryParameters: FileOperationsDeleteFromComputeNodeQueryParamProperties;
}

export interface FileOperationsDeleteFromComputeNodeHeaderParam {
  headers: RawHttpHeadersInput & FileOperationsDeleteFromComputeNodeHeaders;
}

export type FileOperationsDeleteFromComputeNodeParameters =
  FileOperationsDeleteFromComputeNodeQueryParam &
    FileOperationsDeleteFromComputeNodeHeaderParam &
    RequestParameters;

export interface FileOperationsGetFromComputeNodeHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
  /**
   * The byte range to be retrieved. The default is to retrieve the entire file. The
   * format is bytes=startRange-endRange.
   */
  "ocp-range": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since": string;
  /** Accept header */
  accept: "application/json, application/octet-stream";
}

export interface FileOperationsGetFromComputeNodeQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface FileOperationsGetFromComputeNodeQueryParam {
  queryParameters: FileOperationsGetFromComputeNodeQueryParamProperties;
}

export interface FileOperationsGetFromComputeNodeHeaderParam {
  headers: RawHttpHeadersInput & FileOperationsGetFromComputeNodeHeaders;
}

export type FileOperationsGetFromComputeNodeParameters =
  FileOperationsGetFromComputeNodeQueryParam &
    FileOperationsGetFromComputeNodeHeaderParam &
    RequestParameters;

export interface FileOperationsGetPropertiesFromComputeNodeHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since": string;
}

export interface FileOperationsGetPropertiesFromComputeNodeQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface FileOperationsGetPropertiesFromComputeNodeQueryParam {
  queryParameters: FileOperationsGetPropertiesFromComputeNodeQueryParamProperties;
}

export interface FileOperationsGetPropertiesFromComputeNodeHeaderParam {
  headers: RawHttpHeadersInput &
    FileOperationsGetPropertiesFromComputeNodeHeaders;
}

export type FileOperationsGetPropertiesFromComputeNodeParameters =
  FileOperationsGetPropertiesFromComputeNodeQueryParam &
    FileOperationsGetPropertiesFromComputeNodeHeaderParam &
    RequestParameters;

export interface FileOperationsListFromTaskHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface FileOperationsListFromTaskQueryParamProperties {
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-task-files.
   */
  $filter: string;
  /**
   * Whether to list children of the Task directory. This parameter can be used in
   * combination with the filter parameter to list specific type of files.
   */
  recursive: boolean;
  /**
   * The maximum number of items to return in the response. A maximum of 1000 files
   * can be returned.
   */
  maxresults: number;
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface FileOperationsListFromTaskQueryParam {
  queryParameters: FileOperationsListFromTaskQueryParamProperties;
}

export interface FileOperationsListFromTaskHeaderParam {
  headers: RawHttpHeadersInput & FileOperationsListFromTaskHeaders;
}

export type FileOperationsListFromTaskParameters =
  FileOperationsListFromTaskQueryParam &
    FileOperationsListFromTaskHeaderParam &
    RequestParameters;

export interface FileOperationsListFromComputeNodeHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface FileOperationsListFromComputeNodeQueryParamProperties {
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-compute-node-files.
   */
  $filter: string;
  /** Whether to list children of a directory. */
  recursive: boolean;
  /**
   * The maximum number of items to return in the response. A maximum of 1000 files
   * can be returned.
   */
  maxresults: number;
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface FileOperationsListFromComputeNodeQueryParam {
  queryParameters: FileOperationsListFromComputeNodeQueryParamProperties;
}

export interface FileOperationsListFromComputeNodeHeaderParam {
  headers: RawHttpHeadersInput & FileOperationsListFromComputeNodeHeaders;
}

export type FileOperationsListFromComputeNodeParameters =
  FileOperationsListFromComputeNodeQueryParam &
    FileOperationsListFromComputeNodeHeaderParam &
    RequestParameters;

export interface JobScheduleOperationsExistsHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since": string;
}

export interface JobScheduleOperationsExistsQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface JobScheduleOperationsExistsQueryParam {
  queryParameters: JobScheduleOperationsExistsQueryParamProperties;
}

export interface JobScheduleOperationsExistsHeaderParam {
  headers: RawHttpHeadersInput & JobScheduleOperationsExistsHeaders;
}

export type JobScheduleOperationsExistsParameters =
  JobScheduleOperationsExistsQueryParam &
    JobScheduleOperationsExistsHeaderParam &
    RequestParameters;

export interface JobScheduleOperationsDeleteHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since": string;
}

export interface JobScheduleOperationsDeleteQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface JobScheduleOperationsDeleteQueryParam {
  queryParameters: JobScheduleOperationsDeleteQueryParamProperties;
}

export interface JobScheduleOperationsDeleteHeaderParam {
  headers: RawHttpHeadersInput & JobScheduleOperationsDeleteHeaders;
}

export type JobScheduleOperationsDeleteParameters =
  JobScheduleOperationsDeleteQueryParam &
    JobScheduleOperationsDeleteHeaderParam &
    RequestParameters;

export interface JobScheduleOperationsGetHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since": string;
}

export interface JobScheduleOperationsGetQueryParamProperties {
  /** An OData $select clause. */
  $select: string;
  /** An OData $expand clause. */
  $expand: string;
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface JobScheduleOperationsGetQueryParam {
  queryParameters: JobScheduleOperationsGetQueryParamProperties;
}

export interface JobScheduleOperationsGetHeaderParam {
  headers: RawHttpHeadersInput & JobScheduleOperationsGetHeaders;
}

export type JobScheduleOperationsGetParameters =
  JobScheduleOperationsGetQueryParam &
    JobScheduleOperationsGetHeaderParam &
    RequestParameters;

export interface JobScheduleOperationsPatchHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since": string;
}

export interface JobScheduleOperationsPatchBodyParam {
  /** The parameters for the request. */
  body: BatchJobScheduleUpdate;
}

export interface JobScheduleOperationsPatchQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface JobScheduleOperationsPatchQueryParam {
  queryParameters: JobScheduleOperationsPatchQueryParamProperties;
}

export interface JobScheduleOperationsPatchHeaderParam {
  headers: RawHttpHeadersInput & JobScheduleOperationsPatchHeaders;
}

export type JobScheduleOperationsPatchParameters =
  JobScheduleOperationsPatchQueryParam &
    JobScheduleOperationsPatchHeaderParam &
    JobScheduleOperationsPatchBodyParam &
    RequestParameters;

export interface JobScheduleOperationsUpdateHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since": string;
}

export interface JobScheduleOperationsUpdateBodyParam {
  /** The parameters for the request. */
  body: BatchJobSchedule;
}

export interface JobScheduleOperationsUpdateQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface JobScheduleOperationsUpdateQueryParam {
  queryParameters: JobScheduleOperationsUpdateQueryParamProperties;
}

export interface JobScheduleOperationsUpdateHeaderParam {
  headers: RawHttpHeadersInput & JobScheduleOperationsUpdateHeaders;
}

export type JobScheduleOperationsUpdateParameters =
  JobScheduleOperationsUpdateQueryParam &
    JobScheduleOperationsUpdateHeaderParam &
    JobScheduleOperationsUpdateBodyParam &
    RequestParameters;

export interface JobScheduleOperationsDisableHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since": string;
}

export interface JobScheduleOperationsDisableQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface JobScheduleOperationsDisableQueryParam {
  queryParameters: JobScheduleOperationsDisableQueryParamProperties;
}

export interface JobScheduleOperationsDisableHeaderParam {
  headers: RawHttpHeadersInput & JobScheduleOperationsDisableHeaders;
}

export type JobScheduleOperationsDisableParameters =
  JobScheduleOperationsDisableQueryParam &
    JobScheduleOperationsDisableHeaderParam &
    RequestParameters;

export interface JobScheduleOperationsEnableHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since": string;
}

export interface JobScheduleOperationsEnableQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface JobScheduleOperationsEnableQueryParam {
  queryParameters: JobScheduleOperationsEnableQueryParamProperties;
}

export interface JobScheduleOperationsEnableHeaderParam {
  headers: RawHttpHeadersInput & JobScheduleOperationsEnableHeaders;
}

export type JobScheduleOperationsEnableParameters =
  JobScheduleOperationsEnableQueryParam &
    JobScheduleOperationsEnableHeaderParam &
    RequestParameters;

export interface JobScheduleOperationsTerminateHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since": string;
}

export interface JobScheduleOperationsTerminateQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface JobScheduleOperationsTerminateQueryParam {
  queryParameters: JobScheduleOperationsTerminateQueryParamProperties;
}

export interface JobScheduleOperationsTerminateHeaderParam {
  headers: RawHttpHeadersInput & JobScheduleOperationsTerminateHeaders;
}

export type JobScheduleOperationsTerminateParameters =
  JobScheduleOperationsTerminateQueryParam &
    JobScheduleOperationsTerminateHeaderParam &
    RequestParameters;

export interface JobScheduleOperationsAddHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface JobScheduleOperationsAddBodyParam {
  /** The Job Schedule to be added. */
  body: BatchJobSchedule;
}

export interface JobScheduleOperationsAddQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface JobScheduleOperationsAddQueryParam {
  queryParameters: JobScheduleOperationsAddQueryParamProperties;
}

export interface JobScheduleOperationsAddHeaderParam {
  headers: RawHttpHeadersInput & JobScheduleOperationsAddHeaders;
}

export type JobScheduleOperationsAddParameters =
  JobScheduleOperationsAddQueryParam &
    JobScheduleOperationsAddHeaderParam &
    JobScheduleOperationsAddBodyParam &
    RequestParameters;

export interface JobScheduleOperationsListHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface JobScheduleOperationsListQueryParamProperties {
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-job-schedules.
   */
  $filter: string;
  /** An OData $select clause. */
  $select: string;
  /** An OData $expand clause. */
  $expand: string;
  /**
   * The maximum number of items to return in the response. A maximum of 1000 Job
   * Schedules can be returned.
   */
  maxresults: number;
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface JobScheduleOperationsListQueryParam {
  queryParameters: JobScheduleOperationsListQueryParamProperties;
}

export interface JobScheduleOperationsListHeaderParam {
  headers: RawHttpHeadersInput & JobScheduleOperationsListHeaders;
}

export type JobScheduleOperationsListParameters =
  JobScheduleOperationsListQueryParam &
    JobScheduleOperationsListHeaderParam &
    RequestParameters;

export interface TaskOperationsAddHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface TaskOperationsAddBodyParam {
  /** The Task to be added. */
  body: BatchTask;
}

export interface TaskOperationsAddQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface TaskOperationsAddQueryParam {
  queryParameters: TaskOperationsAddQueryParamProperties;
}

export interface TaskOperationsAddHeaderParam {
  headers: RawHttpHeadersInput & TaskOperationsAddHeaders;
}

export type TaskOperationsAddParameters = TaskOperationsAddQueryParam &
  TaskOperationsAddHeaderParam &
  TaskOperationsAddBodyParam &
  RequestParameters;

export interface TaskOperationsListHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface TaskOperationsListQueryParamProperties {
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-tasks.
   */
  $filter: string;
  /** An OData $select clause. */
  $select: string;
  /** An OData $expand clause. */
  $expand: string;
  /**
   * The maximum number of items to return in the response. A maximum of 1000 Tasks
   * can be returned.
   */
  maxresults: number;
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface TaskOperationsListQueryParam {
  queryParameters: TaskOperationsListQueryParamProperties;
}

export interface TaskOperationsListHeaderParam {
  headers: RawHttpHeadersInput & TaskOperationsListHeaders;
}

export type TaskOperationsListParameters = TaskOperationsListQueryParam &
  TaskOperationsListHeaderParam &
  RequestParameters;

export interface TaskOperationsAddCollectionHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface TaskOperationsAddCollectionBodyParam {
  /** The Tasks to be added. */
  body: BatchTaskCollection;
}

export interface TaskOperationsAddCollectionQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface TaskOperationsAddCollectionQueryParam {
  queryParameters: TaskOperationsAddCollectionQueryParamProperties;
}

export interface TaskOperationsAddCollectionHeaderParam {
  headers: RawHttpHeadersInput & TaskOperationsAddCollectionHeaders;
}

export type TaskOperationsAddCollectionParameters =
  TaskOperationsAddCollectionQueryParam &
    TaskOperationsAddCollectionHeaderParam &
    TaskOperationsAddCollectionBodyParam &
    RequestParameters;

export interface TaskOperationsDeleteHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since": string;
}

export interface TaskOperationsDeleteQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface TaskOperationsDeleteQueryParam {
  queryParameters: TaskOperationsDeleteQueryParamProperties;
}

export interface TaskOperationsDeleteHeaderParam {
  headers: RawHttpHeadersInput & TaskOperationsDeleteHeaders;
}

export type TaskOperationsDeleteParameters = TaskOperationsDeleteQueryParam &
  TaskOperationsDeleteHeaderParam &
  RequestParameters;

export interface TaskOperationsGetHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since": string;
}

export interface TaskOperationsGetQueryParamProperties {
  /** An OData $select clause. */
  $select: string;
  /** An OData $expand clause. */
  $expand: string;
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface TaskOperationsGetQueryParam {
  queryParameters: TaskOperationsGetQueryParamProperties;
}

export interface TaskOperationsGetHeaderParam {
  headers: RawHttpHeadersInput & TaskOperationsGetHeaders;
}

export type TaskOperationsGetParameters = TaskOperationsGetQueryParam &
  TaskOperationsGetHeaderParam &
  RequestParameters;

export interface TaskOperationsUpdateHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since": string;
}

export interface TaskOperationsUpdateBodyParam {
  /** The parameters for the request. */
  body: BatchTask;
}

export interface TaskOperationsUpdateQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface TaskOperationsUpdateQueryParam {
  queryParameters: TaskOperationsUpdateQueryParamProperties;
}

export interface TaskOperationsUpdateHeaderParam {
  headers: RawHttpHeadersInput & TaskOperationsUpdateHeaders;
}

export type TaskOperationsUpdateParameters = TaskOperationsUpdateQueryParam &
  TaskOperationsUpdateHeaderParam &
  TaskOperationsUpdateBodyParam &
  RequestParameters;

export interface TaskOperationsListSubtasksHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface TaskOperationsListSubtasksQueryParamProperties {
  /** An OData $select clause. */
  $select: string;
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface TaskOperationsListSubtasksQueryParam {
  queryParameters: TaskOperationsListSubtasksQueryParamProperties;
}

export interface TaskOperationsListSubtasksHeaderParam {
  headers: RawHttpHeadersInput & TaskOperationsListSubtasksHeaders;
}

export type TaskOperationsListSubtasksParameters =
  TaskOperationsListSubtasksQueryParam &
    TaskOperationsListSubtasksHeaderParam &
    RequestParameters;

export interface TaskOperationsTerminateHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since": string;
}

export interface TaskOperationsTerminateQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface TaskOperationsTerminateQueryParam {
  queryParameters: TaskOperationsTerminateQueryParamProperties;
}

export interface TaskOperationsTerminateHeaderParam {
  headers: RawHttpHeadersInput & TaskOperationsTerminateHeaders;
}

export type TaskOperationsTerminateParameters =
  TaskOperationsTerminateQueryParam &
    TaskOperationsTerminateHeaderParam &
    RequestParameters;

export interface TaskOperationsReactivateHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match": string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since": string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since": string;
}

export interface TaskOperationsReactivateQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface TaskOperationsReactivateQueryParam {
  queryParameters: TaskOperationsReactivateQueryParamProperties;
}

export interface TaskOperationsReactivateHeaderParam {
  headers: RawHttpHeadersInput & TaskOperationsReactivateHeaders;
}

export type TaskOperationsReactivateParameters =
  TaskOperationsReactivateQueryParam &
    TaskOperationsReactivateHeaderParam &
    RequestParameters;

export interface ComputeNodeOperationsAddUserHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface ComputeNodeOperationsAddUserBodyParam {
  /** The user Account to be created. */
  body: ComputeNodeUser;
}

export interface ComputeNodeOperationsAddUserQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface ComputeNodeOperationsAddUserQueryParam {
  queryParameters: ComputeNodeOperationsAddUserQueryParamProperties;
}

export interface ComputeNodeOperationsAddUserHeaderParam {
  headers: RawHttpHeadersInput & ComputeNodeOperationsAddUserHeaders;
}

export type ComputeNodeOperationsAddUserParameters =
  ComputeNodeOperationsAddUserQueryParam &
    ComputeNodeOperationsAddUserHeaderParam &
    ComputeNodeOperationsAddUserBodyParam &
    RequestParameters;

export interface ComputeNodeOperationsDeleteUserHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface ComputeNodeOperationsDeleteUserQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface ComputeNodeOperationsDeleteUserQueryParam {
  queryParameters: ComputeNodeOperationsDeleteUserQueryParamProperties;
}

export interface ComputeNodeOperationsDeleteUserHeaderParam {
  headers: RawHttpHeadersInput & ComputeNodeOperationsDeleteUserHeaders;
}

export type ComputeNodeOperationsDeleteUserParameters =
  ComputeNodeOperationsDeleteUserQueryParam &
    ComputeNodeOperationsDeleteUserHeaderParam &
    RequestParameters;

export interface ComputeNodeOperationsUpdateUserHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface ComputeNodeOperationsUpdateUserBodyParam {
  /** The parameters for the request. */
  body: NodeUpdateUserParameters;
}

export interface ComputeNodeOperationsUpdateUserQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface ComputeNodeOperationsUpdateUserQueryParam {
  queryParameters: ComputeNodeOperationsUpdateUserQueryParamProperties;
}

export interface ComputeNodeOperationsUpdateUserHeaderParam {
  headers: RawHttpHeadersInput & ComputeNodeOperationsUpdateUserHeaders;
}

export type ComputeNodeOperationsUpdateUserParameters =
  ComputeNodeOperationsUpdateUserQueryParam &
    ComputeNodeOperationsUpdateUserHeaderParam &
    ComputeNodeOperationsUpdateUserBodyParam &
    RequestParameters;

export interface ComputeNodeOperationsGetHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface ComputeNodeOperationsGetQueryParamProperties {
  /** An OData $select clause. */
  $select: string;
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface ComputeNodeOperationsGetQueryParam {
  queryParameters: ComputeNodeOperationsGetQueryParamProperties;
}

export interface ComputeNodeOperationsGetHeaderParam {
  headers: RawHttpHeadersInput & ComputeNodeOperationsGetHeaders;
}

export type ComputeNodeOperationsGetParameters =
  ComputeNodeOperationsGetQueryParam &
    ComputeNodeOperationsGetHeaderParam &
    RequestParameters;

export interface ComputeNodeOperationsRebootHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface ComputeNodeOperationsRebootBodyParam {
  /** The parameters for the request. */
  body: NodeRebootParameters;
}

export interface ComputeNodeOperationsRebootQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface ComputeNodeOperationsRebootQueryParam {
  queryParameters: ComputeNodeOperationsRebootQueryParamProperties;
}

export interface ComputeNodeOperationsRebootHeaderParam {
  headers: RawHttpHeadersInput & ComputeNodeOperationsRebootHeaders;
}

export type ComputeNodeOperationsRebootParameters =
  ComputeNodeOperationsRebootQueryParam &
    ComputeNodeOperationsRebootHeaderParam &
    ComputeNodeOperationsRebootBodyParam &
    RequestParameters;

export interface ComputeNodeOperationsReimageHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface ComputeNodeOperationsReimageBodyParam {
  /** The parameters for the request. */
  body: NodeReimageParameters;
}

export interface ComputeNodeOperationsReimageQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface ComputeNodeOperationsReimageQueryParam {
  queryParameters: ComputeNodeOperationsReimageQueryParamProperties;
}

export interface ComputeNodeOperationsReimageHeaderParam {
  headers: RawHttpHeadersInput & ComputeNodeOperationsReimageHeaders;
}

export type ComputeNodeOperationsReimageParameters =
  ComputeNodeOperationsReimageQueryParam &
    ComputeNodeOperationsReimageHeaderParam &
    ComputeNodeOperationsReimageBodyParam &
    RequestParameters;

export interface ComputeNodeOperationsDisableSchedulingHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface ComputeNodeOperationsDisableSchedulingBodyParam {
  /** The parameters for the request. */
  body: NodeDisableSchedulingParameters;
}

export interface ComputeNodeOperationsDisableSchedulingQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface ComputeNodeOperationsDisableSchedulingQueryParam {
  queryParameters: ComputeNodeOperationsDisableSchedulingQueryParamProperties;
}

export interface ComputeNodeOperationsDisableSchedulingHeaderParam {
  headers: RawHttpHeadersInput & ComputeNodeOperationsDisableSchedulingHeaders;
}

export type ComputeNodeOperationsDisableSchedulingParameters =
  ComputeNodeOperationsDisableSchedulingQueryParam &
    ComputeNodeOperationsDisableSchedulingHeaderParam &
    ComputeNodeOperationsDisableSchedulingBodyParam &
    RequestParameters;

export interface ComputeNodeOperationsEnableSchedulingHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface ComputeNodeOperationsEnableSchedulingQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface ComputeNodeOperationsEnableSchedulingQueryParam {
  queryParameters: ComputeNodeOperationsEnableSchedulingQueryParamProperties;
}

export interface ComputeNodeOperationsEnableSchedulingHeaderParam {
  headers: RawHttpHeadersInput & ComputeNodeOperationsEnableSchedulingHeaders;
}

export type ComputeNodeOperationsEnableSchedulingParameters =
  ComputeNodeOperationsEnableSchedulingQueryParam &
    ComputeNodeOperationsEnableSchedulingHeaderParam &
    RequestParameters;

export interface ComputeNodeOperationsGetRemoteLoginSettingsHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface ComputeNodeOperationsGetRemoteLoginSettingsQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface ComputeNodeOperationsGetRemoteLoginSettingsQueryParam {
  queryParameters: ComputeNodeOperationsGetRemoteLoginSettingsQueryParamProperties;
}

export interface ComputeNodeOperationsGetRemoteLoginSettingsHeaderParam {
  headers: RawHttpHeadersInput &
    ComputeNodeOperationsGetRemoteLoginSettingsHeaders;
}

export type ComputeNodeOperationsGetRemoteLoginSettingsParameters =
  ComputeNodeOperationsGetRemoteLoginSettingsQueryParam &
    ComputeNodeOperationsGetRemoteLoginSettingsHeaderParam &
    RequestParameters;

export interface ComputeNodeOperationsGetRemoteDesktopHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
  /** Accept header */
  accept: "application/json, application/octet-stream";
}

export interface ComputeNodeOperationsGetRemoteDesktopQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface ComputeNodeOperationsGetRemoteDesktopQueryParam {
  queryParameters: ComputeNodeOperationsGetRemoteDesktopQueryParamProperties;
}

export interface ComputeNodeOperationsGetRemoteDesktopHeaderParam {
  headers: RawHttpHeadersInput & ComputeNodeOperationsGetRemoteDesktopHeaders;
}

export type ComputeNodeOperationsGetRemoteDesktopParameters =
  ComputeNodeOperationsGetRemoteDesktopQueryParam &
    ComputeNodeOperationsGetRemoteDesktopHeaderParam &
    RequestParameters;

export interface ComputeNodeOperationsUploadBatchServiceLogsHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface ComputeNodeOperationsUploadBatchServiceLogsBodyParam {
  body?: UploadBatchServiceLogsResult;
}

export interface ComputeNodeOperationsUploadBatchServiceLogsQueryParamProperties {
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface ComputeNodeOperationsUploadBatchServiceLogsQueryParam {
  queryParameters: ComputeNodeOperationsUploadBatchServiceLogsQueryParamProperties;
}

export interface ComputeNodeOperationsUploadBatchServiceLogsHeaderParam {
  headers: RawHttpHeadersInput &
    ComputeNodeOperationsUploadBatchServiceLogsHeaders;
}

export type ComputeNodeOperationsUploadBatchServiceLogsParameters =
  ComputeNodeOperationsUploadBatchServiceLogsQueryParam &
    ComputeNodeOperationsUploadBatchServiceLogsHeaderParam &
    ComputeNodeOperationsUploadBatchServiceLogsBodyParam &
    RequestParameters;

export interface ComputeNodeOperationsListHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface ComputeNodeOperationsListQueryParamProperties {
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-nodes-in-a-pool.
   */
  $filter: string;
  /** An OData $select clause. */
  $select: string;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * Compute Nodes can be returned.
   */
  maxresults: number;
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface ComputeNodeOperationsListQueryParam {
  queryParameters: ComputeNodeOperationsListQueryParamProperties;
}

export interface ComputeNodeOperationsListHeaderParam {
  headers: RawHttpHeadersInput & ComputeNodeOperationsListHeaders;
}

export type ComputeNodeOperationsListParameters =
  ComputeNodeOperationsListQueryParam &
    ComputeNodeOperationsListHeaderParam &
    RequestParameters;

export interface ComputeNodeExtensionOperationsGetHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface ComputeNodeExtensionOperationsGetQueryParamProperties {
  /** An OData $select clause. */
  $select: string;
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface ComputeNodeExtensionOperationsGetQueryParam {
  queryParameters: ComputeNodeExtensionOperationsGetQueryParamProperties;
}

export interface ComputeNodeExtensionOperationsGetHeaderParam {
  headers: RawHttpHeadersInput & ComputeNodeExtensionOperationsGetHeaders;
}

export type ComputeNodeExtensionOperationsGetParameters =
  ComputeNodeExtensionOperationsGetQueryParam &
    ComputeNodeExtensionOperationsGetHeaderParam &
    RequestParameters;

export interface ComputeNodeExtensionOperationsListHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id": string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id": boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date": string;
}

export interface ComputeNodeExtensionOperationsListQueryParamProperties {
  /** An OData $select clause. */
  $select: string;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * Compute Nodes can be returned.
   */
  maxresults: number;
  /**
   * The maximum time that the server can spend processing the request, in seconds.
   * The default is 30 seconds.
   */
  timeout: number;
}

export interface ComputeNodeExtensionOperationsListQueryParam {
  queryParameters: ComputeNodeExtensionOperationsListQueryParamProperties;
}

export interface ComputeNodeExtensionOperationsListHeaderParam {
  headers: RawHttpHeadersInput & ComputeNodeExtensionOperationsListHeaders;
}

export type ComputeNodeExtensionOperationsListParameters =
  ComputeNodeExtensionOperationsListQueryParam &
    ComputeNodeExtensionOperationsListHeaderParam &
    RequestParameters;
