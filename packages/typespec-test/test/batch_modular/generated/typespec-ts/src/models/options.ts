// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface ListApplicationsOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  maxresults?: number;
}

export interface GetApplicationOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
}

export interface ListPoolUsageMetricsOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  maxresults?: number;
  /**
   * The earliest time from which to include metrics. This must be at least two and
   * a half hours before the current time. If not specified this defaults to the
   * start time of the last aggregation interval currently available.
   */
  starttime?: Date;
  /**
   * The latest time from which to include metrics. This must be at least two hours
   * before the current time. If not specified this defaults to the end time of the
   * last aggregation interval currently available.
   */
  endtime?: Date;
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-account-usage-metrics.
   */
  filter?: string;
}

export interface CreatePoolOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /** Type of content */
  contentType?: string;
}

export interface ListPoolsOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  maxresults?: number;
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-pools.
   */
  filter?: string;
  /** An OData $select clause. */
  select?: string[];
  /** An OData $expand clause. */
  expand?: string[];
}

export interface DeletePoolOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: Date;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: Date;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  ifMatch?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  ifNoneMatch?: string;
}

export interface PoolExistsOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: Date;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: Date;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  ifMatch?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  ifNoneMatch?: string;
}

export interface GetPoolOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: Date;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: Date;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  ifMatch?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  ifNoneMatch?: string;
  /** An OData $select clause. */
  select?: string[];
  /** An OData $expand clause. */
  expand?: string[];
}

export interface UpdatePoolOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /** Type of content */
  contentType?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: Date;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: Date;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  ifMatch?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  ifNoneMatch?: string;
}

export interface DisablePoolAutoScaleOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
}

export interface EnablePoolAutoScaleOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: Date;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: Date;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  ifMatch?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  ifNoneMatch?: string;
  /** Type of content */
  contentType?: string;
}

export interface EvaluatePoolAutoScaleOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /** Type of content */
  contentType?: string;
}

export interface ResizePoolOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: Date;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: Date;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  ifMatch?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  ifNoneMatch?: string;
  /** Type of content */
  contentType?: string;
}

export interface StopPoolResizeOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: Date;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: Date;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  ifMatch?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  ifNoneMatch?: string;
}

export interface ReplacePoolPropertiesOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /** Type of content */
  contentType?: string;
}

export interface RemoveNodesOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: Date;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: Date;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  ifMatch?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  ifNoneMatch?: string;
  /** Type of content */
  contentType?: string;
}

export interface ListSupportedImagesOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  maxresults?: number;
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-support-images.
   */
  filter?: string;
}

export interface ListPoolNodeCountsOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  maxresults?: number;
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-support-images.
   */
  filter?: string;
}

export interface DeleteJobOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: Date;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: Date;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  ifMatch?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  ifNoneMatch?: string;
}

export interface GetJobOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: Date;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: Date;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  ifMatch?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  ifNoneMatch?: string;
  /** An OData $select clause. */
  select?: string[];
  /** An OData $expand clause. */
  expand?: string[];
}

export interface UpdateJobOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /** Type of content */
  contentType?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: Date;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: Date;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  ifMatch?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  ifNoneMatch?: string;
}

export interface ReplaceJobOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /** Type of content */
  contentType?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: Date;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: Date;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  ifMatch?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  ifNoneMatch?: string;
}

export interface DisableJobOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: Date;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: Date;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  ifMatch?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  ifNoneMatch?: string;
  /** Type of content */
  contentType?: string;
}

export interface EnableJobOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: Date;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: Date;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  ifMatch?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  ifNoneMatch?: string;
}

export interface TerminateJobOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: Date;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: Date;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  ifMatch?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  ifNoneMatch?: string;
  /** Type of content */
  contentType?: string;
}

export interface CreateJobOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /** Type of content */
  contentType?: string;
}

export interface ListJobsOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  maxresults?: number;
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-jobs.
   */
  filter?: string;
  /** An OData $select clause. */
  select?: string[];
  /** An OData $expand clause. */
  expand?: string[];
}

export interface ListJobsFromScheduleOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  maxresults?: number;
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-jobs-in-a-job-schedule.
   */
  filter?: string;
  /** An OData $select clause. */
  select?: string[];
  /** An OData $expand clause. */
  expand?: string[];
}

export interface ListJobPreparationAndReleaseTaskStatusOptions
  extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  maxresults?: number;
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-job-preparation-and-release-status.
   */
  filter?: string;
  /** An OData $select clause. */
  select?: string[];
}

export interface GetJobTaskCountsOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
}

export interface CreateCertificateOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /** Type of content */
  contentType?: string;
}

export interface ListCertificatesOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  maxresults?: number;
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-certificates.
   */
  filter?: string;
  /** An OData $select clause. */
  select?: string[];
}

export interface CancelCertificateDeletionOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
}

export interface DeleteCertificateOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
}

export interface GetCertificateOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /** An OData $select clause. */
  select?: string[];
}

export interface JobScheduleExistsOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: Date;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: Date;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  ifMatch?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  ifNoneMatch?: string;
}

export interface DeleteJobScheduleOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: Date;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: Date;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  ifMatch?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  ifNoneMatch?: string;
}

export interface GetJobScheduleOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: Date;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: Date;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  ifMatch?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  ifNoneMatch?: string;
  /** An OData $select clause. */
  select?: string[];
  /** An OData $expand clause. */
  expand?: string[];
}

export interface UpdateJobScheduleOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /** Type of content */
  contentType?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: Date;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: Date;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  ifMatch?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  ifNoneMatch?: string;
}

export interface ReplaceJobScheduleOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /** Type of content */
  contentType?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: Date;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: Date;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  ifMatch?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  ifNoneMatch?: string;
}

export interface DisableJobScheduleOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: Date;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: Date;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  ifMatch?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  ifNoneMatch?: string;
}

export interface EnableJobScheduleOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: Date;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: Date;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  ifMatch?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  ifNoneMatch?: string;
}

export interface TerminateJobScheduleOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: Date;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: Date;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  ifMatch?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  ifNoneMatch?: string;
}

export interface CreateJobScheduleOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /** Type of content */
  contentType?: string;
}

export interface ListJobSchedulesOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  maxresults?: number;
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-job-schedules.
   */
  filter?: string;
  /** An OData $select clause. */
  select?: string[];
  /** An OData $expand clause. */
  expand?: string[];
}

export interface CreateTaskOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /** Type of content */
  contentType?: string;
}

export interface ListTasksOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  maxresults?: number;
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-tasks.
   */
  filter?: string;
  /** An OData $select clause. */
  select?: string[];
  /** An OData $expand clause. */
  expand?: string[];
}

export interface CreateTaskCollectionOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /** Type of content */
  contentType?: string;
}

export interface DeleteTaskOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: Date;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: Date;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  ifMatch?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  ifNoneMatch?: string;
}

export interface GetTaskOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: Date;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: Date;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  ifMatch?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  ifNoneMatch?: string;
  /** An OData $select clause. */
  select?: string[];
  /** An OData $expand clause. */
  expand?: string[];
}

export interface ReplaceTaskOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /** Type of content */
  contentType?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: Date;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: Date;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  ifMatch?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  ifNoneMatch?: string;
}

export interface ListSubTasksOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /** An OData $select clause. */
  select?: string[];
}

export interface TerminateTaskOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: Date;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: Date;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  ifMatch?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  ifNoneMatch?: string;
}

export interface ReactivateTaskOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: Date;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: Date;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service exactly matches the value specified by the client.
   */
  ifMatch?: string;
  /**
   * An ETag value associated with the version of the resource known to the client.
   * The operation will be performed only if the resource's current ETag on the
   * service does not match the value specified by the client.
   */
  ifNoneMatch?: string;
}

export interface DeleteTaskFileOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * Whether to delete children of a directory. If the filePath parameter represents
   * a directory instead of a file, you can set recursive to true to delete the
   * directory and all of the files and subdirectories in it. If recursive is false
   * then the directory must be empty or deletion will fail.
   */
  recursive?: boolean;
}

export interface GetTaskFileOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: Date;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: Date;
  /**
   * The byte range to be retrieved. The default is to retrieve the entire file. The
   * format is bytes=startRange-endRange.
   */
  ocpRange?: string;
}

export interface GetTaskFilePropertiesOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: Date;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: Date;
}

export interface ListTaskFilesOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  maxresults?: number;
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-task-files.
   */
  filter?: string;
  /**
   * Whether to list children of the Task directory. This parameter can be used in
   * combination with the filter parameter to list specific type of files.
   */
  recursive?: boolean;
}

export interface CreateNodeUserOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /** Type of content */
  contentType?: string;
}

export interface DeleteNodeUserOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
}

export interface ReplaceNodeUserOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /** Type of content */
  contentType?: string;
}

export interface GetNodeOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /** An OData $select clause. */
  select?: string[];
}

export interface RebootNodeOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /** Type of content */
  contentType?: string;
}

export interface ReimageNodeOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /** Type of content */
  contentType?: string;
}

export interface DisableNodeSchedulingOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /** Type of content */
  contentType?: string;
}

export interface EnableNodeSchedulingOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
}

export interface GetNodeRemoteLoginSettingsOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
}

export interface GetNodeRemoteDesktopFileOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
}

export interface UploadNodeLogsOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /** Type of content */
  contentType?: string;
}

export interface ListNodesOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  maxresults?: number;
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-nodes-in-a-pool.
   */
  filter?: string;
  /** An OData $select clause. */
  select?: string[];
}

export interface GetNodeExtensionOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /** An OData $select clause. */
  select?: string[];
}

export interface ListNodeExtensionsOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  maxresults?: number;
  /** An OData $select clause. */
  select?: string[];
}

export interface DeleteNodeFileOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * Whether to delete children of a directory. If the filePath parameter represents
   * a directory instead of a file, you can set recursive to true to delete the
   * directory and all of the files and subdirectories in it. If recursive is false
   * then the directory must be empty or deletion will fail.
   */
  recursive?: boolean;
}

export interface GetNodeFileOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: Date;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: Date;
  /**
   * The byte range to be retrieved. The default is to retrieve the entire file. The
   * format is bytes=startRange-endRange.
   */
  ocpRange?: string;
}

export interface GetNodeFilePropertiesOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: Date;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: Date;
}

export interface ListNodeFilesOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2024-02-01.19.0";
  /** The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. If the value is larger than 30, the default will be used instead.". */
  timeOutInSeconds?: number;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  maxresults?: number;
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-compute-node-files.
   */
  filter?: string;
  /** Whether to list children of a directory. */
  recursive?: boolean;
}
