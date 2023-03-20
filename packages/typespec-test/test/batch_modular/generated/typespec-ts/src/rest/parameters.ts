// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import {
  BatchPool,
  BatchPoolEnableAutoScaleParameters,
  BatchPoolEvaluateAutoScaleParameters,
  BatchPoolResizeParameters,
  NodeRemoveParameters,
  BatchJob,
  BatchJobDisableParameters,
  BatchJobTerminateParameters,
  Certificate,
  BatchJobSchedule,
  BatchTask,
  BatchTaskCollection,
  ComputeNodeUser,
  NodeUpdateUserParameters,
  NodeRebootParameters,
  NodeReimageParameters,
  NodeDisableSchedulingParameters,
  UploadBatchServiceLogsConfiguration,
} from "./models.js";

export interface ApplicationsListApplicationsHeaders {
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
}

export interface ApplicationsListApplicationsQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  maxresults?: number;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface ApplicationsListApplicationsQueryParam {
  queryParameters?: ApplicationsListApplicationsQueryParamProperties;
}

export interface ApplicationsListApplicationsHeaderParam {
  headers?: RawHttpHeadersInput & ApplicationsListApplicationsHeaders;
}

export type ApplicationsListApplicationsParameters =
  ApplicationsListApplicationsQueryParam &
    ApplicationsListApplicationsHeaderParam &
    RequestParameters;
export type ApplicationsGetParameters = RequestParameters;
export type PoolListUsageMetricsParameters = RequestParameters;

export interface PoolGetAllLifetimeStatisticsHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
}

export interface PoolGetAllLifetimeStatisticsQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface PoolGetAllLifetimeStatisticsQueryParam {
  queryParameters?: PoolGetAllLifetimeStatisticsQueryParamProperties;
}

export interface PoolGetAllLifetimeStatisticsHeaderParam {
  headers?: RawHttpHeadersInput & PoolGetAllLifetimeStatisticsHeaders;
}

export type PoolGetAllLifetimeStatisticsParameters =
  PoolGetAllLifetimeStatisticsQueryParam &
    PoolGetAllLifetimeStatisticsHeaderParam &
    RequestParameters;

export interface PoolAddPoolHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
}

export interface PoolAddPoolBodyParam {
  /** The Pool to be added. */
  body: BatchPool;
}

export interface PoolAddPoolQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface PoolAddPoolQueryParam {
  queryParameters?: PoolAddPoolQueryParamProperties;
}

export interface PoolAddPoolHeaderParam {
  headers?: RawHttpHeadersInput & PoolAddPoolHeaders;
}

export type PoolAddPoolParameters = PoolAddPoolQueryParam &
  PoolAddPoolHeaderParam &
  PoolAddPoolBodyParam &
  RequestParameters;

export interface PoolListPoolsHeaders {
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
}

export interface PoolListPoolsQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  maxresults?: number;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-pools.
   */
  $filter?: string;
  /** An OData $select clause. */
  $select?: string;
  /** An OData $expand clause. */
  $expand?: string;
}

export interface PoolListPoolsQueryParam {
  queryParameters?: PoolListPoolsQueryParamProperties;
}

export interface PoolListPoolsHeaderParam {
  headers?: RawHttpHeadersInput & PoolListPoolsHeaders;
}

export type PoolListPoolsParameters = PoolListPoolsQueryParam &
  PoolListPoolsHeaderParam &
  RequestParameters;

export interface PoolDeletePoolHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since"?: string;
}

export interface PoolDeletePoolQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface PoolDeletePoolQueryParam {
  queryParameters?: PoolDeletePoolQueryParamProperties;
}

export interface PoolDeletePoolHeaderParam {
  headers?: RawHttpHeadersInput & PoolDeletePoolHeaders;
}

export type PoolDeletePoolParameters = PoolDeletePoolQueryParam &
  PoolDeletePoolHeaderParam &
  RequestParameters;

export interface PoolExistsHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since"?: string;
}

export interface PoolExistsQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface PoolExistsQueryParam {
  queryParameters?: PoolExistsQueryParamProperties;
}

export interface PoolExistsHeaderParam {
  headers?: RawHttpHeadersInput & PoolExistsHeaders;
}

export type PoolExistsParameters = PoolExistsQueryParam &
  PoolExistsHeaderParam &
  RequestParameters;

export interface PoolGetPoolHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since"?: string;
}

export interface PoolGetPoolQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
  /** An OData $select clause. */
  $select?: string;
  /** An OData $expand clause. */
  $expand?: string;
}

export interface PoolGetPoolQueryParam {
  queryParameters?: PoolGetPoolQueryParamProperties;
}

export interface PoolGetPoolHeaderParam {
  headers?: RawHttpHeadersInput & PoolGetPoolHeaders;
}

export type PoolGetPoolParameters = PoolGetPoolQueryParam &
  PoolGetPoolHeaderParam &
  RequestParameters;

export interface PoolPatchPoolHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since"?: string;
}

export interface PoolPatchPoolBodyParam {
  /** The parameters for the request. */
  body: BatchPool;
}

export interface PoolPatchPoolQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface PoolPatchPoolQueryParam {
  queryParameters?: PoolPatchPoolQueryParamProperties;
}

export interface PoolPatchPoolHeaderParam {
  headers?: RawHttpHeadersInput & PoolPatchPoolHeaders;
}

export type PoolPatchPoolParameters = PoolPatchPoolQueryParam &
  PoolPatchPoolHeaderParam &
  PoolPatchPoolBodyParam &
  RequestParameters;

export interface PoolDisableAutoScaleHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
}

export interface PoolDisableAutoScaleQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface PoolDisableAutoScaleQueryParam {
  queryParameters?: PoolDisableAutoScaleQueryParamProperties;
}

export interface PoolDisableAutoScaleHeaderParam {
  headers?: RawHttpHeadersInput & PoolDisableAutoScaleHeaders;
}

export type PoolDisableAutoScaleParameters = PoolDisableAutoScaleQueryParam &
  PoolDisableAutoScaleHeaderParam &
  RequestParameters;

export interface PoolEnableAutoScaleHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since"?: string;
}

export interface PoolEnableAutoScaleBodyParam {
  /** The parameters for the request. */
  body: BatchPoolEnableAutoScaleParameters;
}

export interface PoolEnableAutoScaleQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface PoolEnableAutoScaleQueryParam {
  queryParameters?: PoolEnableAutoScaleQueryParamProperties;
}

export interface PoolEnableAutoScaleHeaderParam {
  headers?: RawHttpHeadersInput & PoolEnableAutoScaleHeaders;
}

export type PoolEnableAutoScaleParameters = PoolEnableAutoScaleQueryParam &
  PoolEnableAutoScaleHeaderParam &
  PoolEnableAutoScaleBodyParam &
  RequestParameters;

export interface PoolEvaluateAutoScaleHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
}

export interface PoolEvaluateAutoScaleBodyParam {
  /** The parameters for the request. */
  body: BatchPoolEvaluateAutoScaleParameters;
}

export interface PoolEvaluateAutoScaleQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface PoolEvaluateAutoScaleQueryParam {
  queryParameters?: PoolEvaluateAutoScaleQueryParamProperties;
}

export interface PoolEvaluateAutoScaleHeaderParam {
  headers?: RawHttpHeadersInput & PoolEvaluateAutoScaleHeaders;
}

export type PoolEvaluateAutoScaleParameters = PoolEvaluateAutoScaleQueryParam &
  PoolEvaluateAutoScaleHeaderParam &
  PoolEvaluateAutoScaleBodyParam &
  RequestParameters;

export interface PoolResizeHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since"?: string;
}

export interface PoolResizeBodyParam {
  /** The parameters for the request. */
  body: BatchPoolResizeParameters;
}

export interface PoolResizeQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface PoolResizeQueryParam {
  queryParameters?: PoolResizeQueryParamProperties;
}

export interface PoolResizeHeaderParam {
  headers?: RawHttpHeadersInput & PoolResizeHeaders;
}

export type PoolResizeParameters = PoolResizeQueryParam &
  PoolResizeHeaderParam &
  PoolResizeBodyParam &
  RequestParameters;

export interface PoolStopResizeHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since"?: string;
}

export interface PoolStopResizeQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface PoolStopResizeQueryParam {
  queryParameters?: PoolStopResizeQueryParamProperties;
}

export interface PoolStopResizeHeaderParam {
  headers?: RawHttpHeadersInput & PoolStopResizeHeaders;
}

export type PoolStopResizeParameters = PoolStopResizeQueryParam &
  PoolStopResizeHeaderParam &
  RequestParameters;

export interface PoolUpdatePropertiesHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
}

export interface PoolUpdatePropertiesBodyParam {
  /** The parameters for the request. */
  body: BatchPool;
}

export interface PoolUpdatePropertiesQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface PoolUpdatePropertiesQueryParam {
  queryParameters?: PoolUpdatePropertiesQueryParamProperties;
}

export interface PoolUpdatePropertiesHeaderParam {
  headers?: RawHttpHeadersInput & PoolUpdatePropertiesHeaders;
}

export type PoolUpdatePropertiesParameters = PoolUpdatePropertiesQueryParam &
  PoolUpdatePropertiesHeaderParam &
  PoolUpdatePropertiesBodyParam &
  RequestParameters;

export interface PoolRemoveNodesHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since"?: string;
}

export interface PoolRemoveNodesBodyParam {
  /** The parameters for the request. */
  body: NodeRemoveParameters;
}

export interface PoolRemoveNodesQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface PoolRemoveNodesQueryParam {
  queryParameters?: PoolRemoveNodesQueryParamProperties;
}

export interface PoolRemoveNodesHeaderParam {
  headers?: RawHttpHeadersInput & PoolRemoveNodesHeaders;
}

export type PoolRemoveNodesParameters = PoolRemoveNodesQueryParam &
  PoolRemoveNodesHeaderParam &
  PoolRemoveNodesBodyParam &
  RequestParameters;

export interface AccountListSupportedImagesHeaders {
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
}

export interface AccountListSupportedImagesQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  maxresults?: number;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-support-images.
   */
  $filter?: string;
}

export interface AccountListSupportedImagesQueryParam {
  queryParameters?: AccountListSupportedImagesQueryParamProperties;
}

export interface AccountListSupportedImagesHeaderParam {
  headers?: RawHttpHeadersInput & AccountListSupportedImagesHeaders;
}

export type AccountListSupportedImagesParameters =
  AccountListSupportedImagesQueryParam &
    AccountListSupportedImagesHeaderParam &
    RequestParameters;

export interface AccountListPoolNodeCountsHeaders {
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
}

export interface AccountListPoolNodeCountsQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  maxresults?: number;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-support-images.
   */
  $filter?: string;
}

export interface AccountListPoolNodeCountsQueryParam {
  queryParameters?: AccountListPoolNodeCountsQueryParamProperties;
}

export interface AccountListPoolNodeCountsHeaderParam {
  headers?: RawHttpHeadersInput & AccountListPoolNodeCountsHeaders;
}

export type AccountListPoolNodeCountsParameters =
  AccountListPoolNodeCountsQueryParam &
    AccountListPoolNodeCountsHeaderParam &
    RequestParameters;

export interface JobGetAllLifetimeStatisticsHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
}

export interface JobGetAllLifetimeStatisticsQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface JobGetAllLifetimeStatisticsQueryParam {
  queryParameters?: JobGetAllLifetimeStatisticsQueryParamProperties;
}

export interface JobGetAllLifetimeStatisticsHeaderParam {
  headers?: RawHttpHeadersInput & JobGetAllLifetimeStatisticsHeaders;
}

export type JobGetAllLifetimeStatisticsParameters =
  JobGetAllLifetimeStatisticsQueryParam &
    JobGetAllLifetimeStatisticsHeaderParam &
    RequestParameters;

export interface JobDeleteJobHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since"?: string;
}

export interface JobDeleteJobQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface JobDeleteJobQueryParam {
  queryParameters?: JobDeleteJobQueryParamProperties;
}

export interface JobDeleteJobHeaderParam {
  headers?: RawHttpHeadersInput & JobDeleteJobHeaders;
}

export type JobDeleteJobParameters = JobDeleteJobQueryParam &
  JobDeleteJobHeaderParam &
  RequestParameters;

export interface JobGetJobHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since"?: string;
}

export interface JobGetJobQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
  /** An OData $select clause. */
  $select?: string;
  /** An OData $expand clause. */
  $expand?: string;
}

export interface JobGetJobQueryParam {
  queryParameters?: JobGetJobQueryParamProperties;
}

export interface JobGetJobHeaderParam {
  headers?: RawHttpHeadersInput & JobGetJobHeaders;
}

export type JobGetJobParameters = JobGetJobQueryParam &
  JobGetJobHeaderParam &
  RequestParameters;

export interface JobPatchJobHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since"?: string;
}

export interface JobPatchJobBodyParam {
  /** The parameters for the request. */
  body: BatchJob;
}

export interface JobPatchJobQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface JobPatchJobQueryParam {
  queryParameters?: JobPatchJobQueryParamProperties;
}

export interface JobPatchJobHeaderParam {
  headers?: RawHttpHeadersInput & JobPatchJobHeaders;
}

export type JobPatchJobParameters = JobPatchJobQueryParam &
  JobPatchJobHeaderParam &
  JobPatchJobBodyParam &
  RequestParameters;

export interface JobUpdateJobHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since"?: string;
}

export interface JobUpdateJobBodyParam {
  /** The parameters for the request. */
  body: BatchJob;
}

export interface JobUpdateJobQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface JobUpdateJobQueryParam {
  queryParameters?: JobUpdateJobQueryParamProperties;
}

export interface JobUpdateJobHeaderParam {
  headers?: RawHttpHeadersInput & JobUpdateJobHeaders;
}

export type JobUpdateJobParameters = JobUpdateJobQueryParam &
  JobUpdateJobHeaderParam &
  JobUpdateJobBodyParam &
  RequestParameters;

export interface JobDisableJobHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since"?: string;
}

export interface JobDisableJobBodyParam {
  /** The parameters for the request. */
  body: BatchJobDisableParameters;
}

export interface JobDisableJobQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface JobDisableJobQueryParam {
  queryParameters?: JobDisableJobQueryParamProperties;
}

export interface JobDisableJobHeaderParam {
  headers?: RawHttpHeadersInput & JobDisableJobHeaders;
}

export type JobDisableJobParameters = JobDisableJobQueryParam &
  JobDisableJobHeaderParam &
  JobDisableJobBodyParam &
  RequestParameters;

export interface JobEnableJobHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since"?: string;
}

export interface JobEnableJobQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface JobEnableJobQueryParam {
  queryParameters?: JobEnableJobQueryParamProperties;
}

export interface JobEnableJobHeaderParam {
  headers?: RawHttpHeadersInput & JobEnableJobHeaders;
}

export type JobEnableJobParameters = JobEnableJobQueryParam &
  JobEnableJobHeaderParam &
  RequestParameters;

export interface JobTerminateJobHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since"?: string;
}

export interface JobTerminateJobBodyParam {
  /** The parameters for the request. */
  body?: BatchJobTerminateParameters;
}

export interface JobTerminateJobQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface JobTerminateJobQueryParam {
  queryParameters?: JobTerminateJobQueryParamProperties;
}

export interface JobTerminateJobHeaderParam {
  headers?: RawHttpHeadersInput & JobTerminateJobHeaders;
}

export type JobTerminateJobParameters = JobTerminateJobQueryParam &
  JobTerminateJobHeaderParam &
  JobTerminateJobBodyParam &
  RequestParameters;

export interface JobAddJobHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
}

export interface JobAddJobBodyParam {
  /** The Job to be added. */
  body: BatchJob;
}

export interface JobAddJobQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface JobAddJobQueryParam {
  queryParameters?: JobAddJobQueryParamProperties;
}

export interface JobAddJobHeaderParam {
  headers?: RawHttpHeadersInput & JobAddJobHeaders;
}

export type JobAddJobParameters = JobAddJobQueryParam &
  JobAddJobHeaderParam &
  JobAddJobBodyParam &
  RequestParameters;

export interface JobListJobsHeaders {
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
}

export interface JobListJobsQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  maxresults?: number;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-jobs.
   */
  $filter?: string;
  /** An OData $select clause. */
  $select?: string;
  /** An OData $expand clause. */
  $expand?: string;
}

export interface JobListJobsQueryParam {
  queryParameters?: JobListJobsQueryParamProperties;
}

export interface JobListJobsHeaderParam {
  headers?: RawHttpHeadersInput & JobListJobsHeaders;
}

export type JobListJobsParameters = JobListJobsQueryParam &
  JobListJobsHeaderParam &
  RequestParameters;

export interface JobListFromJobScheduleHeaders {
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
}

export interface JobListFromJobScheduleQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  maxresults?: number;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-jobs-in-a-job-schedule.
   */
  $filter?: string;
  /** An OData $select clause. */
  $select?: string;
  /** An OData $expand clause. */
  $expand?: string;
}

export interface JobListFromJobScheduleQueryParam {
  queryParameters?: JobListFromJobScheduleQueryParamProperties;
}

export interface JobListFromJobScheduleHeaderParam {
  headers?: RawHttpHeadersInput & JobListFromJobScheduleHeaders;
}

export type JobListFromJobScheduleParameters =
  JobListFromJobScheduleQueryParam &
    JobListFromJobScheduleHeaderParam &
    RequestParameters;

export interface JobListPreparationAndReleaseTaskStatusHeaders {
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
}

export interface JobListPreparationAndReleaseTaskStatusQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  maxresults?: number;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-job-preparation-and-release-status.
   */
  $filter?: string;
  /** An OData $select clause. */
  $select?: string;
}

export interface JobListPreparationAndReleaseTaskStatusQueryParam {
  queryParameters?: JobListPreparationAndReleaseTaskStatusQueryParamProperties;
}

export interface JobListPreparationAndReleaseTaskStatusHeaderParam {
  headers?: RawHttpHeadersInput & JobListPreparationAndReleaseTaskStatusHeaders;
}

export type JobListPreparationAndReleaseTaskStatusParameters =
  JobListPreparationAndReleaseTaskStatusQueryParam &
    JobListPreparationAndReleaseTaskStatusHeaderParam &
    RequestParameters;

export interface JobGetTaskCountsHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
}

export interface JobGetTaskCountsQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface JobGetTaskCountsQueryParam {
  queryParameters?: JobGetTaskCountsQueryParamProperties;
}

export interface JobGetTaskCountsHeaderParam {
  headers?: RawHttpHeadersInput & JobGetTaskCountsHeaders;
}

export type JobGetTaskCountsParameters = JobGetTaskCountsQueryParam &
  JobGetTaskCountsHeaderParam &
  RequestParameters;

export interface CertificatesAddCertificateHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
}

export interface CertificatesAddCertificateBodyParam {
  /** The Certificate to be added. */
  body: Certificate;
}

export interface CertificatesAddCertificateQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface CertificatesAddCertificateQueryParam {
  queryParameters?: CertificatesAddCertificateQueryParamProperties;
}

export interface CertificatesAddCertificateHeaderParam {
  headers?: RawHttpHeadersInput & CertificatesAddCertificateHeaders;
}

export type CertificatesAddCertificateParameters =
  CertificatesAddCertificateQueryParam &
    CertificatesAddCertificateHeaderParam &
    CertificatesAddCertificateBodyParam &
    RequestParameters;

export interface CertificatesListCertificatesHeaders {
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
}

export interface CertificatesListCertificatesQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  maxresults?: number;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-certificates.
   */
  $filter?: string;
  /** An OData $select clause. */
  $select?: string;
}

export interface CertificatesListCertificatesQueryParam {
  queryParameters?: CertificatesListCertificatesQueryParamProperties;
}

export interface CertificatesListCertificatesHeaderParam {
  headers?: RawHttpHeadersInput & CertificatesListCertificatesHeaders;
}

export type CertificatesListCertificatesParameters =
  CertificatesListCertificatesQueryParam &
    CertificatesListCertificatesHeaderParam &
    RequestParameters;

export interface CertificatesCancelCertificateDeletionHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
}

export interface CertificatesCancelCertificateDeletionQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface CertificatesCancelCertificateDeletionQueryParam {
  queryParameters?: CertificatesCancelCertificateDeletionQueryParamProperties;
}

export interface CertificatesCancelCertificateDeletionHeaderParam {
  headers?: RawHttpHeadersInput & CertificatesCancelCertificateDeletionHeaders;
}

export type CertificatesCancelCertificateDeletionParameters =
  CertificatesCancelCertificateDeletionQueryParam &
    CertificatesCancelCertificateDeletionHeaderParam &
    RequestParameters;

export interface CertificatesDeleteCertificateHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
}

export interface CertificatesDeleteCertificateQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface CertificatesDeleteCertificateQueryParam {
  queryParameters?: CertificatesDeleteCertificateQueryParamProperties;
}

export interface CertificatesDeleteCertificateHeaderParam {
  headers?: RawHttpHeadersInput & CertificatesDeleteCertificateHeaders;
}

export type CertificatesDeleteCertificateParameters =
  CertificatesDeleteCertificateQueryParam &
    CertificatesDeleteCertificateHeaderParam &
    RequestParameters;

export interface CertificatesGetCertificateHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
}

export interface CertificatesGetCertificateQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
  /** An OData $select clause. */
  $select?: string;
}

export interface CertificatesGetCertificateQueryParam {
  queryParameters?: CertificatesGetCertificateQueryParamProperties;
}

export interface CertificatesGetCertificateHeaderParam {
  headers?: RawHttpHeadersInput & CertificatesGetCertificateHeaders;
}

export type CertificatesGetCertificateParameters =
  CertificatesGetCertificateQueryParam &
    CertificatesGetCertificateHeaderParam &
    RequestParameters;

export interface FileDeleteFromTaskHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
}

export interface FileDeleteFromTaskQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
  /**
   * Whether to delete children of a directory. If the filePath parameter represents
   * a directory instead of a file, you can set recursive to true to delete the
   * directory and all of the files and subdirectories in it. If recursive is false
   * then the directory must be empty or deletion will fail.
   */
  recursive?: boolean;
}

export interface FileDeleteFromTaskQueryParam {
  queryParameters?: FileDeleteFromTaskQueryParamProperties;
}

export interface FileDeleteFromTaskHeaderParam {
  headers?: RawHttpHeadersInput & FileDeleteFromTaskHeaders;
}

export type FileDeleteFromTaskParameters = FileDeleteFromTaskQueryParam &
  FileDeleteFromTaskHeaderParam &
  RequestParameters;

export interface FileGetFromTaskHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since"?: string;
  /**
   * The byte range to be retrieved. The default is to retrieve the entire file. The
   * format is bytes=startRange-endRange.
   */
  "ocp-range"?: string;
}

export interface FileGetFromTaskQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface FileGetFromTaskQueryParam {
  queryParameters?: FileGetFromTaskQueryParamProperties;
}

export interface FileGetFromTaskHeaderParam {
  headers?: RawHttpHeadersInput & FileGetFromTaskHeaders;
}

export type FileGetFromTaskParameters = FileGetFromTaskQueryParam &
  FileGetFromTaskHeaderParam &
  RequestParameters;

export interface FileGetPropertiesFromTaskHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since"?: string;
}

export interface FileGetPropertiesFromTaskQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface FileGetPropertiesFromTaskQueryParam {
  queryParameters?: FileGetPropertiesFromTaskQueryParamProperties;
}

export interface FileGetPropertiesFromTaskHeaderParam {
  headers?: RawHttpHeadersInput & FileGetPropertiesFromTaskHeaders;
}

export type FileGetPropertiesFromTaskParameters =
  FileGetPropertiesFromTaskQueryParam &
    FileGetPropertiesFromTaskHeaderParam &
    RequestParameters;

export interface FileDeleteFromComputeNodeHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
}

export interface FileDeleteFromComputeNodeQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
  /**
   * Whether to delete children of a directory. If the filePath parameter represents
   * a directory instead of a file, you can set recursive to true to delete the
   * directory and all of the files and subdirectories in it. If recursive is false
   * then the directory must be empty or deletion will fail.
   */
  recursive?: boolean;
}

export interface FileDeleteFromComputeNodeQueryParam {
  queryParameters?: FileDeleteFromComputeNodeQueryParamProperties;
}

export interface FileDeleteFromComputeNodeHeaderParam {
  headers?: RawHttpHeadersInput & FileDeleteFromComputeNodeHeaders;
}

export type FileDeleteFromComputeNodeParameters =
  FileDeleteFromComputeNodeQueryParam &
    FileDeleteFromComputeNodeHeaderParam &
    RequestParameters;

export interface FileGetFromComputeNodeHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since"?: string;
  /**
   * The byte range to be retrieved. The default is to retrieve the entire file. The
   * format is bytes=startRange-endRange.
   */
  "ocp-range"?: string;
}

export interface FileGetFromComputeNodeQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface FileGetFromComputeNodeQueryParam {
  queryParameters?: FileGetFromComputeNodeQueryParamProperties;
}

export interface FileGetFromComputeNodeHeaderParam {
  headers?: RawHttpHeadersInput & FileGetFromComputeNodeHeaders;
}

export type FileGetFromComputeNodeParameters =
  FileGetFromComputeNodeQueryParam &
    FileGetFromComputeNodeHeaderParam &
    RequestParameters;

export interface FileGetPropertiesFromComputeNodeHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since"?: string;
}

export interface FileGetPropertiesFromComputeNodeQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface FileGetPropertiesFromComputeNodeQueryParam {
  queryParameters?: FileGetPropertiesFromComputeNodeQueryParamProperties;
}

export interface FileGetPropertiesFromComputeNodeHeaderParam {
  headers?: RawHttpHeadersInput & FileGetPropertiesFromComputeNodeHeaders;
}

export type FileGetPropertiesFromComputeNodeParameters =
  FileGetPropertiesFromComputeNodeQueryParam &
    FileGetPropertiesFromComputeNodeHeaderParam &
    RequestParameters;

export interface FileListFromTaskHeaders {
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
}

export interface FileListFromTaskQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  maxresults?: number;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-task-files.
   */
  $filter?: string;
  /**
   * Whether to list children of the Task directory. This parameter can be used in
   * combination with the filter parameter to list specific type of files.
   */
  recursive?: boolean;
}

export interface FileListFromTaskQueryParam {
  queryParameters?: FileListFromTaskQueryParamProperties;
}

export interface FileListFromTaskHeaderParam {
  headers?: RawHttpHeadersInput & FileListFromTaskHeaders;
}

export type FileListFromTaskParameters = FileListFromTaskQueryParam &
  FileListFromTaskHeaderParam &
  RequestParameters;

export interface FileListFromComputeNodeHeaders {
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
}

export interface FileListFromComputeNodeQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  maxresults?: number;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-compute-node-files.
   */
  $filter?: string;
  /** Whether to list children of a directory. */
  recursive?: boolean;
}

export interface FileListFromComputeNodeQueryParam {
  queryParameters?: FileListFromComputeNodeQueryParamProperties;
}

export interface FileListFromComputeNodeHeaderParam {
  headers?: RawHttpHeadersInput & FileListFromComputeNodeHeaders;
}

export type FileListFromComputeNodeParameters =
  FileListFromComputeNodeQueryParam &
    FileListFromComputeNodeHeaderParam &
    RequestParameters;

export interface JobScheduleJobScheduleExistsHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since"?: string;
}

export interface JobScheduleJobScheduleExistsQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface JobScheduleJobScheduleExistsQueryParam {
  queryParameters?: JobScheduleJobScheduleExistsQueryParamProperties;
}

export interface JobScheduleJobScheduleExistsHeaderParam {
  headers?: RawHttpHeadersInput & JobScheduleJobScheduleExistsHeaders;
}

export type JobScheduleJobScheduleExistsParameters =
  JobScheduleJobScheduleExistsQueryParam &
    JobScheduleJobScheduleExistsHeaderParam &
    RequestParameters;

export interface JobScheduleDeleteJobScheduleHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since"?: string;
}

export interface JobScheduleDeleteJobScheduleQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface JobScheduleDeleteJobScheduleQueryParam {
  queryParameters?: JobScheduleDeleteJobScheduleQueryParamProperties;
}

export interface JobScheduleDeleteJobScheduleHeaderParam {
  headers?: RawHttpHeadersInput & JobScheduleDeleteJobScheduleHeaders;
}

export type JobScheduleDeleteJobScheduleParameters =
  JobScheduleDeleteJobScheduleQueryParam &
    JobScheduleDeleteJobScheduleHeaderParam &
    RequestParameters;

export interface JobScheduleGetJobScheduleHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since"?: string;
}

export interface JobScheduleGetJobScheduleQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
  /** An OData $select clause. */
  $select?: string;
  /** An OData $expand clause. */
  $expand?: string;
}

export interface JobScheduleGetJobScheduleQueryParam {
  queryParameters?: JobScheduleGetJobScheduleQueryParamProperties;
}

export interface JobScheduleGetJobScheduleHeaderParam {
  headers?: RawHttpHeadersInput & JobScheduleGetJobScheduleHeaders;
}

export type JobScheduleGetJobScheduleParameters =
  JobScheduleGetJobScheduleQueryParam &
    JobScheduleGetJobScheduleHeaderParam &
    RequestParameters;

export interface JobSchedulePatchJobScheduleHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since"?: string;
}

export interface JobSchedulePatchJobScheduleBodyParam {
  /** The parameters for the request. */
  body: BatchJobSchedule;
}

export interface JobSchedulePatchJobScheduleQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface JobSchedulePatchJobScheduleQueryParam {
  queryParameters?: JobSchedulePatchJobScheduleQueryParamProperties;
}

export interface JobSchedulePatchJobScheduleHeaderParam {
  headers?: RawHttpHeadersInput & JobSchedulePatchJobScheduleHeaders;
}

export type JobSchedulePatchJobScheduleParameters =
  JobSchedulePatchJobScheduleQueryParam &
    JobSchedulePatchJobScheduleHeaderParam &
    JobSchedulePatchJobScheduleBodyParam &
    RequestParameters;

export interface JobScheduleUpdateJobScheduleHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since"?: string;
}

export interface JobScheduleUpdateJobScheduleBodyParam {
  /** The parameters for the request. */
  body: BatchJobSchedule;
}

export interface JobScheduleUpdateJobScheduleQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface JobScheduleUpdateJobScheduleQueryParam {
  queryParameters?: JobScheduleUpdateJobScheduleQueryParamProperties;
}

export interface JobScheduleUpdateJobScheduleHeaderParam {
  headers?: RawHttpHeadersInput & JobScheduleUpdateJobScheduleHeaders;
}

export type JobScheduleUpdateJobScheduleParameters =
  JobScheduleUpdateJobScheduleQueryParam &
    JobScheduleUpdateJobScheduleHeaderParam &
    JobScheduleUpdateJobScheduleBodyParam &
    RequestParameters;

export interface JobScheduleDisableJobScheduleHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since"?: string;
}

export interface JobScheduleDisableJobScheduleQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface JobScheduleDisableJobScheduleQueryParam {
  queryParameters?: JobScheduleDisableJobScheduleQueryParamProperties;
}

export interface JobScheduleDisableJobScheduleHeaderParam {
  headers?: RawHttpHeadersInput & JobScheduleDisableJobScheduleHeaders;
}

export type JobScheduleDisableJobScheduleParameters =
  JobScheduleDisableJobScheduleQueryParam &
    JobScheduleDisableJobScheduleHeaderParam &
    RequestParameters;

export interface JobScheduleEnableJobScheduleHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since"?: string;
}

export interface JobScheduleEnableJobScheduleQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface JobScheduleEnableJobScheduleQueryParam {
  queryParameters?: JobScheduleEnableJobScheduleQueryParamProperties;
}

export interface JobScheduleEnableJobScheduleHeaderParam {
  headers?: RawHttpHeadersInput & JobScheduleEnableJobScheduleHeaders;
}

export type JobScheduleEnableJobScheduleParameters =
  JobScheduleEnableJobScheduleQueryParam &
    JobScheduleEnableJobScheduleHeaderParam &
    RequestParameters;

export interface JobScheduleTerminateJobScheduleHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since"?: string;
}

export interface JobScheduleTerminateJobScheduleQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface JobScheduleTerminateJobScheduleQueryParam {
  queryParameters?: JobScheduleTerminateJobScheduleQueryParamProperties;
}

export interface JobScheduleTerminateJobScheduleHeaderParam {
  headers?: RawHttpHeadersInput & JobScheduleTerminateJobScheduleHeaders;
}

export type JobScheduleTerminateJobScheduleParameters =
  JobScheduleTerminateJobScheduleQueryParam &
    JobScheduleTerminateJobScheduleHeaderParam &
    RequestParameters;

export interface JobScheduleAddJobScheduleHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
}

export interface JobScheduleAddJobScheduleBodyParam {
  /** The Job Schedule to be added. */
  body: BatchJobSchedule;
}

export interface JobScheduleAddJobScheduleQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface JobScheduleAddJobScheduleQueryParam {
  queryParameters?: JobScheduleAddJobScheduleQueryParamProperties;
}

export interface JobScheduleAddJobScheduleHeaderParam {
  headers?: RawHttpHeadersInput & JobScheduleAddJobScheduleHeaders;
}

export type JobScheduleAddJobScheduleParameters =
  JobScheduleAddJobScheduleQueryParam &
    JobScheduleAddJobScheduleHeaderParam &
    JobScheduleAddJobScheduleBodyParam &
    RequestParameters;

export interface JobScheduleListJobSchedulesHeaders {
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
}

export interface JobScheduleListJobSchedulesQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  maxresults?: number;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-job-schedules.
   */
  $filter?: string;
  /** An OData $select clause. */
  $select?: string;
  /** An OData $expand clause. */
  $expand?: string;
}

export interface JobScheduleListJobSchedulesQueryParam {
  queryParameters?: JobScheduleListJobSchedulesQueryParamProperties;
}

export interface JobScheduleListJobSchedulesHeaderParam {
  headers?: RawHttpHeadersInput & JobScheduleListJobSchedulesHeaders;
}

export type JobScheduleListJobSchedulesParameters =
  JobScheduleListJobSchedulesQueryParam &
    JobScheduleListJobSchedulesHeaderParam &
    RequestParameters;

export interface TaskAddTaskHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
}

export interface TaskAddTaskBodyParam {
  /** The Task to be added. */
  body: BatchTask;
}

export interface TaskAddTaskQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface TaskAddTaskQueryParam {
  queryParameters?: TaskAddTaskQueryParamProperties;
}

export interface TaskAddTaskHeaderParam {
  headers?: RawHttpHeadersInput & TaskAddTaskHeaders;
}

export type TaskAddTaskParameters = TaskAddTaskQueryParam &
  TaskAddTaskHeaderParam &
  TaskAddTaskBodyParam &
  RequestParameters;

export interface TaskListTasksHeaders {
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
}

export interface TaskListTasksQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  maxresults?: number;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-tasks.
   */
  $filter?: string;
  /** An OData $select clause. */
  $select?: string;
  /** An OData $expand clause. */
  $expand?: string;
}

export interface TaskListTasksQueryParam {
  queryParameters?: TaskListTasksQueryParamProperties;
}

export interface TaskListTasksHeaderParam {
  headers?: RawHttpHeadersInput & TaskListTasksHeaders;
}

export type TaskListTasksParameters = TaskListTasksQueryParam &
  TaskListTasksHeaderParam &
  RequestParameters;

export interface TaskAddTaskCollectionHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
}

export interface TaskAddTaskCollectionBodyParam {
  /** The Tasks to be added. */
  body: BatchTaskCollection;
}

export interface TaskAddTaskCollectionQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface TaskAddTaskCollectionQueryParam {
  queryParameters?: TaskAddTaskCollectionQueryParamProperties;
}

export interface TaskAddTaskCollectionHeaderParam {
  headers?: RawHttpHeadersInput & TaskAddTaskCollectionHeaders;
}

export type TaskAddTaskCollectionParameters = TaskAddTaskCollectionQueryParam &
  TaskAddTaskCollectionHeaderParam &
  TaskAddTaskCollectionBodyParam &
  RequestParameters;

export interface TaskDeleteTaskCollectionHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since"?: string;
}

export interface TaskDeleteTaskCollectionQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface TaskDeleteTaskCollectionQueryParam {
  queryParameters?: TaskDeleteTaskCollectionQueryParamProperties;
}

export interface TaskDeleteTaskCollectionHeaderParam {
  headers?: RawHttpHeadersInput & TaskDeleteTaskCollectionHeaders;
}

export type TaskDeleteTaskCollectionParameters =
  TaskDeleteTaskCollectionQueryParam &
    TaskDeleteTaskCollectionHeaderParam &
    RequestParameters;

export interface TaskGetTaskCollectionHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since"?: string;
}

export interface TaskGetTaskCollectionQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
  /** An OData $select clause. */
  $select?: string;
  /** An OData $expand clause. */
  $expand?: string;
}

export interface TaskGetTaskCollectionQueryParam {
  queryParameters?: TaskGetTaskCollectionQueryParamProperties;
}

export interface TaskGetTaskCollectionHeaderParam {
  headers?: RawHttpHeadersInput & TaskGetTaskCollectionHeaders;
}

export type TaskGetTaskCollectionParameters = TaskGetTaskCollectionQueryParam &
  TaskGetTaskCollectionHeaderParam &
  RequestParameters;

export interface TaskUpdateTaskCollectionHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since"?: string;
}

export interface TaskUpdateTaskCollectionBodyParam {
  /** The parameters for the request. */
  body: BatchTask;
}

export interface TaskUpdateTaskCollectionQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface TaskUpdateTaskCollectionQueryParam {
  queryParameters?: TaskUpdateTaskCollectionQueryParamProperties;
}

export interface TaskUpdateTaskCollectionHeaderParam {
  headers?: RawHttpHeadersInput & TaskUpdateTaskCollectionHeaders;
}

export type TaskUpdateTaskCollectionParameters =
  TaskUpdateTaskCollectionQueryParam &
    TaskUpdateTaskCollectionHeaderParam &
    TaskUpdateTaskCollectionBodyParam &
    RequestParameters;

export interface TaskListSubtasksHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
}

export interface TaskListSubtasksQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
  /** An OData $select clause. */
  $select?: string;
}

export interface TaskListSubtasksQueryParam {
  queryParameters?: TaskListSubtasksQueryParamProperties;
}

export interface TaskListSubtasksHeaderParam {
  headers?: RawHttpHeadersInput & TaskListSubtasksHeaders;
}

export type TaskListSubtasksParameters = TaskListSubtasksQueryParam &
  TaskListSubtasksHeaderParam &
  RequestParameters;

export interface TaskTerminateTaskCollectionHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since"?: string;
}

export interface TaskTerminateTaskCollectionQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface TaskTerminateTaskCollectionQueryParam {
  queryParameters?: TaskTerminateTaskCollectionQueryParamProperties;
}

export interface TaskTerminateTaskCollectionHeaderParam {
  headers?: RawHttpHeadersInput & TaskTerminateTaskCollectionHeaders;
}

export type TaskTerminateTaskCollectionParameters =
  TaskTerminateTaskCollectionQueryParam &
    TaskTerminateTaskCollectionHeaderParam &
    RequestParameters;

export interface TaskReactivateTaskCollectionHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  "if-match"?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  "if-none-match"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  "if-modified-since"?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  "if-unmodified-since"?: string;
}

export interface TaskReactivateTaskCollectionQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface TaskReactivateTaskCollectionQueryParam {
  queryParameters?: TaskReactivateTaskCollectionQueryParamProperties;
}

export interface TaskReactivateTaskCollectionHeaderParam {
  headers?: RawHttpHeadersInput & TaskReactivateTaskCollectionHeaders;
}

export type TaskReactivateTaskCollectionParameters =
  TaskReactivateTaskCollectionQueryParam &
    TaskReactivateTaskCollectionHeaderParam &
    RequestParameters;

export interface ComputeNodesAddUserHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
}

export interface ComputeNodesAddUserBodyParam {
  /** The user Account to be created. */
  body: ComputeNodeUser;
}

export interface ComputeNodesAddUserQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface ComputeNodesAddUserQueryParam {
  queryParameters?: ComputeNodesAddUserQueryParamProperties;
}

export interface ComputeNodesAddUserHeaderParam {
  headers?: RawHttpHeadersInput & ComputeNodesAddUserHeaders;
}

export type ComputeNodesAddUserParameters = ComputeNodesAddUserQueryParam &
  ComputeNodesAddUserHeaderParam &
  ComputeNodesAddUserBodyParam &
  RequestParameters;

export interface ComputeNodesDeleteUserHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
}

export interface ComputeNodesDeleteUserQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface ComputeNodesDeleteUserQueryParam {
  queryParameters?: ComputeNodesDeleteUserQueryParamProperties;
}

export interface ComputeNodesDeleteUserHeaderParam {
  headers?: RawHttpHeadersInput & ComputeNodesDeleteUserHeaders;
}

export type ComputeNodesDeleteUserParameters =
  ComputeNodesDeleteUserQueryParam &
    ComputeNodesDeleteUserHeaderParam &
    RequestParameters;

export interface ComputeNodesUpdateUserHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
}

export interface ComputeNodesUpdateUserBodyParam {
  /** The parameters for the request. */
  body: NodeUpdateUserParameters;
}

export interface ComputeNodesUpdateUserQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface ComputeNodesUpdateUserQueryParam {
  queryParameters?: ComputeNodesUpdateUserQueryParamProperties;
}

export interface ComputeNodesUpdateUserHeaderParam {
  headers?: RawHttpHeadersInput & ComputeNodesUpdateUserHeaders;
}

export type ComputeNodesUpdateUserParameters =
  ComputeNodesUpdateUserQueryParam &
    ComputeNodesUpdateUserHeaderParam &
    ComputeNodesUpdateUserBodyParam &
    RequestParameters;

export interface ComputeNodesGetComputeNodeHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
}

export interface ComputeNodesGetComputeNodeQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
  /** An OData $select clause. */
  $select?: string;
}

export interface ComputeNodesGetComputeNodeQueryParam {
  queryParameters?: ComputeNodesGetComputeNodeQueryParamProperties;
}

export interface ComputeNodesGetComputeNodeHeaderParam {
  headers?: RawHttpHeadersInput & ComputeNodesGetComputeNodeHeaders;
}

export type ComputeNodesGetComputeNodeParameters =
  ComputeNodesGetComputeNodeQueryParam &
    ComputeNodesGetComputeNodeHeaderParam &
    RequestParameters;

export interface ComputeNodesRebootComputeNodeHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
}

export interface ComputeNodesRebootComputeNodeBodyParam {
  /** The parameters for the request. */
  body?: NodeRebootParameters;
}

export interface ComputeNodesRebootComputeNodeQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface ComputeNodesRebootComputeNodeQueryParam {
  queryParameters?: ComputeNodesRebootComputeNodeQueryParamProperties;
}

export interface ComputeNodesRebootComputeNodeHeaderParam {
  headers?: RawHttpHeadersInput & ComputeNodesRebootComputeNodeHeaders;
}

export type ComputeNodesRebootComputeNodeParameters =
  ComputeNodesRebootComputeNodeQueryParam &
    ComputeNodesRebootComputeNodeHeaderParam &
    ComputeNodesRebootComputeNodeBodyParam &
    RequestParameters;

export interface ComputeNodesReimageComputeNodeHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
}

export interface ComputeNodesReimageComputeNodeBodyParam {
  /** The parameters for the request. */
  body?: NodeReimageParameters;
}

export interface ComputeNodesReimageComputeNodeQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface ComputeNodesReimageComputeNodeQueryParam {
  queryParameters?: ComputeNodesReimageComputeNodeQueryParamProperties;
}

export interface ComputeNodesReimageComputeNodeHeaderParam {
  headers?: RawHttpHeadersInput & ComputeNodesReimageComputeNodeHeaders;
}

export type ComputeNodesReimageComputeNodeParameters =
  ComputeNodesReimageComputeNodeQueryParam &
    ComputeNodesReimageComputeNodeHeaderParam &
    ComputeNodesReimageComputeNodeBodyParam &
    RequestParameters;

export interface ComputeNodesDisableSchedulingHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
}

export interface ComputeNodesDisableSchedulingBodyParam {
  /** The parameters for the request. */
  body?: NodeDisableSchedulingParameters;
}

export interface ComputeNodesDisableSchedulingQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface ComputeNodesDisableSchedulingQueryParam {
  queryParameters?: ComputeNodesDisableSchedulingQueryParamProperties;
}

export interface ComputeNodesDisableSchedulingHeaderParam {
  headers?: RawHttpHeadersInput & ComputeNodesDisableSchedulingHeaders;
}

export type ComputeNodesDisableSchedulingParameters =
  ComputeNodesDisableSchedulingQueryParam &
    ComputeNodesDisableSchedulingHeaderParam &
    ComputeNodesDisableSchedulingBodyParam &
    RequestParameters;

export interface ComputeNodesEnableSchedulingHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
}

export interface ComputeNodesEnableSchedulingQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface ComputeNodesEnableSchedulingQueryParam {
  queryParameters?: ComputeNodesEnableSchedulingQueryParamProperties;
}

export interface ComputeNodesEnableSchedulingHeaderParam {
  headers?: RawHttpHeadersInput & ComputeNodesEnableSchedulingHeaders;
}

export type ComputeNodesEnableSchedulingParameters =
  ComputeNodesEnableSchedulingQueryParam &
    ComputeNodesEnableSchedulingHeaderParam &
    RequestParameters;

export interface ComputeNodesGetRemoteLoginSettingsHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
}

export interface ComputeNodesGetRemoteLoginSettingsQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface ComputeNodesGetRemoteLoginSettingsQueryParam {
  queryParameters?: ComputeNodesGetRemoteLoginSettingsQueryParamProperties;
}

export interface ComputeNodesGetRemoteLoginSettingsHeaderParam {
  headers?: RawHttpHeadersInput & ComputeNodesGetRemoteLoginSettingsHeaders;
}

export type ComputeNodesGetRemoteLoginSettingsParameters =
  ComputeNodesGetRemoteLoginSettingsQueryParam &
    ComputeNodesGetRemoteLoginSettingsHeaderParam &
    RequestParameters;

export interface ComputeNodesGetRemoteDesktopHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
}

export interface ComputeNodesGetRemoteDesktopQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface ComputeNodesGetRemoteDesktopQueryParam {
  queryParameters?: ComputeNodesGetRemoteDesktopQueryParamProperties;
}

export interface ComputeNodesGetRemoteDesktopHeaderParam {
  headers?: RawHttpHeadersInput & ComputeNodesGetRemoteDesktopHeaders;
}

export type ComputeNodesGetRemoteDesktopParameters =
  ComputeNodesGetRemoteDesktopQueryParam &
    ComputeNodesGetRemoteDesktopHeaderParam &
    RequestParameters;

export interface ComputeNodesUploadBatchServiceLogsHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
}

export interface ComputeNodesUploadBatchServiceLogsBodyParam {
  /** The Azure Batch service log files upload configuration. */
  body: UploadBatchServiceLogsConfiguration;
}

export interface ComputeNodesUploadBatchServiceLogsQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
}

export interface ComputeNodesUploadBatchServiceLogsQueryParam {
  queryParameters?: ComputeNodesUploadBatchServiceLogsQueryParamProperties;
}

export interface ComputeNodesUploadBatchServiceLogsHeaderParam {
  headers?: RawHttpHeadersInput & ComputeNodesUploadBatchServiceLogsHeaders;
}

export type ComputeNodesUploadBatchServiceLogsParameters =
  ComputeNodesUploadBatchServiceLogsQueryParam &
    ComputeNodesUploadBatchServiceLogsHeaderParam &
    ComputeNodesUploadBatchServiceLogsBodyParam &
    RequestParameters;

export interface ComputeNodesListHeaders {
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
}

export interface ComputeNodesListQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  maxresults?: number;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-nodes-in-a-pool.
   */
  $filter?: string;
  /** An OData $select clause. */
  $select?: string;
}

export interface ComputeNodesListQueryParam {
  queryParameters?: ComputeNodesListQueryParamProperties;
}

export interface ComputeNodesListHeaderParam {
  headers?: RawHttpHeadersInput & ComputeNodesListHeaders;
}

export type ComputeNodesListParameters = ComputeNodesListQueryParam &
  ComputeNodesListHeaderParam &
  RequestParameters;

export interface ComputeNodeExtensionsGetComputeNodeExtensionsHeaders {
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
}

export interface ComputeNodeExtensionsGetComputeNodeExtensionsQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
  /** An OData $select clause. */
  $select?: string;
}

export interface ComputeNodeExtensionsGetComputeNodeExtensionsQueryParam {
  queryParameters?: ComputeNodeExtensionsGetComputeNodeExtensionsQueryParamProperties;
}

export interface ComputeNodeExtensionsGetComputeNodeExtensionsHeaderParam {
  headers?: RawHttpHeadersInput &
    ComputeNodeExtensionsGetComputeNodeExtensionsHeaders;
}

export type ComputeNodeExtensionsGetComputeNodeExtensionsParameters =
  ComputeNodeExtensionsGetComputeNodeExtensionsQueryParam &
    ComputeNodeExtensionsGetComputeNodeExtensionsHeaderParam &
    RequestParameters;

export interface ComputeNodeExtensionsListComputeNodeExtensionsHeaders {
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  "ocp-date"?: string;
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  "client-request-id"?: string;
  /** Whether the server should return the client-request-id in the response. */
  "return-client-request-id"?: boolean;
}

export interface ComputeNodeExtensionsListComputeNodeExtensionsQueryParamProperties {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  maxresults?: number;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
  /** An OData $select clause. */
  $select?: string;
}

export interface ComputeNodeExtensionsListComputeNodeExtensionsQueryParam {
  queryParameters?: ComputeNodeExtensionsListComputeNodeExtensionsQueryParamProperties;
}

export interface ComputeNodeExtensionsListComputeNodeExtensionsHeaderParam {
  headers?: RawHttpHeadersInput &
    ComputeNodeExtensionsListComputeNodeExtensionsHeaders;
}

export type ComputeNodeExtensionsListComputeNodeExtensionsParameters =
  ComputeNodeExtensionsListComputeNodeExtensionsQueryParam &
    ComputeNodeExtensionsListComputeNodeExtensionsHeaderParam &
    RequestParameters;
