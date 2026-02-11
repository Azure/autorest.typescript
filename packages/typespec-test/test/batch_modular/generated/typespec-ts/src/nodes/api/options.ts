// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  NodeRebootOptions,
  NodeReimageOptions,
  NodeDisableSchedulingOptions,
} from "../../models/models.js";
import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface ListNodeFilesOptionalParams extends OperationOptions {
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
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-compute-node-files.
   */
  filter?: string;
  /** Whether to list children of a directory. */
  recursive?: boolean;
}

/** Optional parameters. */
export interface GetNodeFilePropertiesOptionalParams extends OperationOptions {
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
export interface GetNodeFileOptionalParams extends OperationOptions {
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

/** Optional parameters. */
export interface DeleteNodeFileOptionalParams extends OperationOptions {
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
   * Whether to delete children of a directory. If the filePath parameter represents
   * a directory instead of a file, you can set recursive to true to delete the
   * directory and all of the files and subdirectories in it. If recursive is false
   * then the directory must be empty or deletion will fail.
   */
  recursive?: boolean;
}

/** Optional parameters. */
export interface ListNodeExtensionsOptionalParams extends OperationOptions {
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
  /** An OData $select clause. */
  select?: string[];
}

/** Optional parameters. */
export interface GetNodeExtensionOptionalParams extends OperationOptions {
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
  /** An OData $select clause. */
  select?: string[];
}

/** Optional parameters. */
export interface ListNodesOptionalParams extends OperationOptions {
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
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-nodes-in-a-pool.
   */
  filter?: string;
  /** An OData $select clause. */
  select?: string[];
}

/** Optional parameters. */
export interface UploadNodeLogsOptionalParams extends OperationOptions {
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
export interface GetNodeRemoteDesktopFileOptionalParams extends OperationOptions {
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
export interface GetNodeRemoteLoginSettingsOptionalParams extends OperationOptions {
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
export interface EnableNodeSchedulingOptionalParams extends OperationOptions {
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
export interface DisableNodeSchedulingOptionalParams extends OperationOptions {
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
  /** The options to use for disabling scheduling on the Compute Node. */
  body?: NodeDisableSchedulingOptions;
}

/** Optional parameters. */
export interface ReimageNodeOptionalParams extends OperationOptions {
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
  /** The options to use for reimaging the Compute Node. */
  body?: NodeReimageOptions;
}

/** Optional parameters. */
export interface RebootNodeOptionalParams extends OperationOptions {
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
  /** The options to use for rebooting the Compute Node. */
  body?: NodeRebootOptions;
}

/** Optional parameters. */
export interface GetNodeOptionalParams extends OperationOptions {
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
  /** An OData $select clause. */
  select?: string[];
}

/** Optional parameters. */
export interface ReplaceNodeUserOptionalParams extends OperationOptions {
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
export interface DeleteNodeUserOptionalParams extends OperationOptions {
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
export interface CreateNodeUserOptionalParams extends OperationOptions {
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
