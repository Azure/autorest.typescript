// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BatchJobTerminateOptions } from "../../models/models.js";
import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface GetJobTaskCountsOptionalParams extends OperationOptions {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOutInSeconds?: number;
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  clientRequestId?: string;
  /** Whether the server should return the client-request-id in the response. */
  returnClientRequestId?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  ocpDate?: Date;
}

/** Optional parameters. */
export interface ListJobPreparationAndReleaseTaskStatusOptionalParams extends OperationOptions {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  maxresults?: number;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  ocpDate?: Date;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOutInSeconds?: number;
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  clientRequestId?: string;
  /** Whether the server should return the client-request-id in the response. */
  returnClientRequestId?: boolean;
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-job-preparation-and-release-status.
   */
  filter?: string;
  /** An OData $select clause. */
  select?: string[];
}

/** Optional parameters. */
export interface ListJobsFromScheduleOptionalParams extends OperationOptions {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  maxresults?: number;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  ocpDate?: Date;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOutInSeconds?: number;
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  clientRequestId?: string;
  /** Whether the server should return the client-request-id in the response. */
  returnClientRequestId?: boolean;
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

/** Optional parameters. */
export interface ListJobsOptionalParams extends OperationOptions {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  maxresults?: number;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  ocpDate?: Date;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOutInSeconds?: number;
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  clientRequestId?: string;
  /** Whether the server should return the client-request-id in the response. */
  returnClientRequestId?: boolean;
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

/** Optional parameters. */
export interface CreateJobOptionalParams extends OperationOptions {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOutInSeconds?: number;
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  clientRequestId?: string;
  /** Whether the server should return the client-request-id in the response. */
  returnClientRequestId?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  ocpDate?: Date;
}

/** Optional parameters. */
export interface TerminateJobOptionalParams extends OperationOptions {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOutInSeconds?: number;
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  clientRequestId?: string;
  /** Whether the server should return the client-request-id in the response. */
  returnClientRequestId?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  ocpDate?: Date;
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
  /** The options to use for terminating the Job. */
  body?: BatchJobTerminateOptions;
}

/** Optional parameters. */
export interface EnableJobOptionalParams extends OperationOptions {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOutInSeconds?: number;
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  clientRequestId?: string;
  /** Whether the server should return the client-request-id in the response. */
  returnClientRequestId?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  ocpDate?: Date;
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

/** Optional parameters. */
export interface DisableJobOptionalParams extends OperationOptions {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOutInSeconds?: number;
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  clientRequestId?: string;
  /** Whether the server should return the client-request-id in the response. */
  returnClientRequestId?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  ocpDate?: Date;
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

/** Optional parameters. */
export interface ReplaceJobOptionalParams extends OperationOptions {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOutInSeconds?: number;
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  clientRequestId?: string;
  /** Whether the server should return the client-request-id in the response. */
  returnClientRequestId?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  ocpDate?: Date;
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

/** Optional parameters. */
export interface UpdateJobOptionalParams extends OperationOptions {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOutInSeconds?: number;
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  clientRequestId?: string;
  /** Whether the server should return the client-request-id in the response. */
  returnClientRequestId?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  ocpDate?: Date;
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

/** Optional parameters. */
export interface GetJobOptionalParams extends OperationOptions {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOutInSeconds?: number;
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  clientRequestId?: string;
  /** Whether the server should return the client-request-id in the response. */
  returnClientRequestId?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  ocpDate?: Date;
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
  /** An OData $select clause. */
  select?: string[];
  /** An OData $expand clause. */
  expand?: string[];
}

/** Optional parameters. */
export interface DeleteJobOptionalParams extends OperationOptions {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOutInSeconds?: number;
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  clientRequestId?: string;
  /** Whether the server should return the client-request-id in the response. */
  returnClientRequestId?: boolean;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  ocpDate?: Date;
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
