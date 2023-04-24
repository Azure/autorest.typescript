// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestOptions } from "../common/interfaces.js";
import { BatchServiceContext as Client, isUnexpected } from "../rest/index.js";
import { NodeFileListResult } from "./models.js";

export interface FileDeleteFromTaskOptions extends RequestOptions {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
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
  ocpDate?: string;
  /**
   * Whether to delete children of a directory. If the filePath parameter represents
   * a directory instead of a file, you can set recursive to true to delete the
   * directory and all of the files and subdirectories in it. If recursive is false
   * then the directory must be empty or deletion will fail.
   */
  recursive?: boolean;
}

/** Deletes the specified Task file from the Compute Node where the Task ran. */
export async function deleteFromTask(
  context: Client,
  jobId: string,
  taskId: string,
  filePath: string,
  options: FileDeleteFromTaskOptions = { requestOptions: {} }
): Promise<void> {
  const result = await context
    .path(
      "/jobs/{jobId}/tasks/{taskId}/files/{filePath}",
      jobId,
      taskId,
      filePath
    )
    .delete({
      headers: {
        ...(options.clientRequestId && {
          "client-request-id": options.clientRequestId,
        }),
        ...(options.returnClientRequestId && {
          "return-client-request-id": options.returnClientRequestId,
        }),
        ...(options.ocpDate && { "ocp-date": options.ocpDate }),
        ...options.requestOptions?.headers,
      },
      queryParameters: {
        ...(options.timeOut && { timeOut: options.timeOut }),
        ...(options.recursive && { recursive: options.recursive }),
      },
    });
  if (isUnexpected(result)) {
    throw result.body;
  }

  return;
}

export interface FileGetFromTaskOptions extends RequestOptions {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
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
  ocpDate?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: string;
  /**
   * The byte range to be retrieved. The default is to retrieve the entire file. The
   * format is bytes=startRange-endRange.
   */
  ocpRange?: string;
  /** Accept header. */
  accept?: "application/json";
}

/** Returns the content of the specified Task file. */
export async function getFromTask(
  context: Client,
  jobId: string,
  taskId: string,
  filePath: string,
  options: FileGetFromTaskOptions = { requestOptions: {} }
): Promise<void> {
  const result = await context
    .path(
      "/jobs/{jobId}/tasks/{taskId}/files/{filePath}",
      jobId,
      taskId,
      filePath
    )
    .get({
      headers: {
        ...(options.clientRequestId && {
          "client-request-id": options.clientRequestId,
        }),
        ...(options.returnClientRequestId && {
          "return-client-request-id": options.returnClientRequestId,
        }),
        ...(options.ocpDate && { "ocp-date": options.ocpDate }),
        ...(options.ifModifiedSince && {
          "if-modified-since": options.ifModifiedSince,
        }),
        ...(options.ifUnmodifiedSince && {
          "if-unmodified-since": options.ifUnmodifiedSince,
        }),
        ...(options.ocpRange && { "ocp-range": options.ocpRange }),
        Accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { ...(options.timeOut && { timeOut: options.timeOut }) },
    });
  if (isUnexpected(result)) {
    throw result.body;
  }

  return;
}

export interface FileGetPropertiesFromTaskOptions extends RequestOptions {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
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
  ocpDate?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: string;
}

/** Gets the properties of the specified Task file. */
export async function getPropertiesFromTask(
  context: Client,
  jobId: string,
  taskId: string,
  filePath: string,
  options: FileGetPropertiesFromTaskOptions = { requestOptions: {} }
): Promise<void> {
  const result = await context
    .path(
      "/jobs/{jobId}/tasks/{taskId}/files/{filePath}",
      jobId,
      taskId,
      filePath
    )
    .head({
      headers: {
        ...(options.clientRequestId && {
          "client-request-id": options.clientRequestId,
        }),
        ...(options.returnClientRequestId && {
          "return-client-request-id": options.returnClientRequestId,
        }),
        ...(options.ocpDate && { "ocp-date": options.ocpDate }),
        ...(options.ifModifiedSince && {
          "if-modified-since": options.ifModifiedSince,
        }),
        ...(options.ifUnmodifiedSince && {
          "if-unmodified-since": options.ifUnmodifiedSince,
        }),
        ...options.requestOptions?.headers,
      },
      queryParameters: { ...(options.timeOut && { timeOut: options.timeOut }) },
    });
  if (isUnexpected(result)) {
    throw result.body;
  }

  return;
}

export interface FileDeleteFromComputeNodeOptions extends RequestOptions {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
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
  ocpDate?: string;
  /**
   * Whether to delete children of a directory. If the filePath parameter represents
   * a directory instead of a file, you can set recursive to true to delete the
   * directory and all of the files and subdirectories in it. If recursive is false
   * then the directory must be empty or deletion will fail.
   */
  recursive?: boolean;
}

/** Deletes the specified file from the Compute Node. */
export async function deleteFromComputeNode(
  context: Client,
  poolId: string,
  nodeId: string,
  filePath: string,
  options: FileDeleteFromComputeNodeOptions = { requestOptions: {} }
): Promise<void> {
  const result = await context
    .path(
      "/pools/{poolId}/nodes/{nodeId}/files/{filePath}",
      poolId,
      nodeId,
      filePath
    )
    .delete({
      headers: {
        ...(options.clientRequestId && {
          "client-request-id": options.clientRequestId,
        }),
        ...(options.returnClientRequestId && {
          "return-client-request-id": options.returnClientRequestId,
        }),
        ...(options.ocpDate && { "ocp-date": options.ocpDate }),
        ...options.requestOptions?.headers,
      },
      queryParameters: {
        ...(options.timeOut && { timeOut: options.timeOut }),
        ...(options.recursive && { recursive: options.recursive }),
      },
    });
  if (isUnexpected(result)) {
    throw result.body;
  }

  return;
}

export interface FileGetFromComputeNodeOptions extends RequestOptions {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
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
  ocpDate?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: string;
  /**
   * The byte range to be retrieved. The default is to retrieve the entire file. The
   * format is bytes=startRange-endRange.
   */
  ocpRange?: string;
  /** Accept header. */
  accept?: "application/json";
}

/** Returns the content of the specified Compute Node file. */
export async function getFromComputeNode(
  context: Client,
  poolId: string,
  nodeId: string,
  filePath: string,
  options: FileGetFromComputeNodeOptions = { requestOptions: {} }
): Promise<void> {
  const result = await context
    .path(
      "/pools/{poolId}/nodes/{nodeId}/files/{filePath}",
      poolId,
      nodeId,
      filePath
    )
    .get({
      headers: {
        ...(options.clientRequestId && {
          "client-request-id": options.clientRequestId,
        }),
        ...(options.returnClientRequestId && {
          "return-client-request-id": options.returnClientRequestId,
        }),
        ...(options.ocpDate && { "ocp-date": options.ocpDate }),
        ...(options.ifModifiedSince && {
          "if-modified-since": options.ifModifiedSince,
        }),
        ...(options.ifUnmodifiedSince && {
          "if-unmodified-since": options.ifUnmodifiedSince,
        }),
        ...(options.ocpRange && { "ocp-range": options.ocpRange }),
        Accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { ...(options.timeOut && { timeOut: options.timeOut }) },
    });
  if (isUnexpected(result)) {
    throw result.body;
  }

  return;
}

export interface FileGetPropertiesFromComputeNodeOptions
  extends RequestOptions {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
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
  ocpDate?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: string;
}

/** Gets the properties of the specified Compute Node file. */
export async function getPropertiesFromComputeNode(
  context: Client,
  poolId: string,
  nodeId: string,
  filePath: string,
  options: FileGetPropertiesFromComputeNodeOptions = { requestOptions: {} }
): Promise<void> {
  const result = await context
    .path(
      "/pools/{poolId}/nodes/{nodeId}/files/{filePath}",
      poolId,
      nodeId,
      filePath
    )
    .head({
      headers: {
        ...(options.clientRequestId && {
          "client-request-id": options.clientRequestId,
        }),
        ...(options.returnClientRequestId && {
          "return-client-request-id": options.returnClientRequestId,
        }),
        ...(options.ocpDate && { "ocp-date": options.ocpDate }),
        ...(options.ifModifiedSince && {
          "if-modified-since": options.ifModifiedSince,
        }),
        ...(options.ifUnmodifiedSince && {
          "if-unmodified-since": options.ifUnmodifiedSince,
        }),
        ...options.requestOptions?.headers,
      },
      queryParameters: { ...(options.timeOut && { timeOut: options.timeOut }) },
    });
  if (isUnexpected(result)) {
    throw result.body;
  }

  return;
}

export interface FileListFromTaskOptions extends RequestOptions {
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
  ocpDate?: string;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  clientRequestId?: string;
  /** Whether the server should return the client-request-id in the response. */
  returnClientRequestId?: boolean;
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
  /** Accept header. */
  accept?: "application/json";
}

/** Lists the files in a Task's directory on its Compute Node. */
export async function listFromTask(
  context: Client,
  jobId: string,
  taskId: string,
  options: FileListFromTaskOptions = { requestOptions: {} }
): Promise<NodeFileListResult> {
  const result = await context
    .path("/jobs/{jobId}/tasks/{taskId}/files", jobId, taskId)
    .get({
      headers: {
        ...(options.ocpDate && { "ocp-date": options.ocpDate }),
        ...(options.clientRequestId && {
          "client-request-id": options.clientRequestId,
        }),
        ...(options.returnClientRequestId && {
          "return-client-request-id": options.returnClientRequestId,
        }),
        Accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: {
        ...(options.maxresults && { maxresults: options.maxresults }),
        ...(options.timeOut && { timeOut: options.timeOut }),
        ...(options.$filter && { $filter: options.$filter }),
        ...(options.recursive && { recursive: options.recursive }),
      },
    });
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    value: (result.body["value"] ?? []).map((p) => ({
      name: p["name"],
      url: p["url"],
      isDirectory: p["isDirectory"],
      properties: !p.properties
        ? undefined
        : {
            creationTime: new Date(p.properties?.["creationTime"] ?? ""),
            lastModified: new Date(p.properties?.["lastModified"] ?? ""),
            contentLength: p.properties?.["contentLength"],
            contentType: p.properties?.["contentType"],
            fileMode: p.properties?.["fileMode"],
          },
    })),
    "odata.nextLink": result.body["odata.nextLink"],
  };
}

export interface FileListFromComputeNodeOptions extends RequestOptions {
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
  ocpDate?: string;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
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
  $filter?: string;
  /** Whether to list children of a directory. */
  recursive?: boolean;
  /** Accept header. */
  accept?: "application/json";
}

/** Lists all of the files in Task directories on the specified Compute Node. */
export async function listFromComputeNode(
  context: Client,
  poolId: string,
  nodeId: string,
  options: FileListFromComputeNodeOptions = { requestOptions: {} }
): Promise<NodeFileListResult> {
  const result = await context
    .path("/pools/{poolId}/nodes/{nodeId}/files", poolId, nodeId)
    .get({
      headers: {
        ...(options.ocpDate && { "ocp-date": options.ocpDate }),
        ...(options.clientRequestId && {
          "client-request-id": options.clientRequestId,
        }),
        ...(options.returnClientRequestId && {
          "return-client-request-id": options.returnClientRequestId,
        }),
        Accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: {
        ...(options.maxresults && { maxresults: options.maxresults }),
        ...(options.timeOut && { timeOut: options.timeOut }),
        ...(options.$filter && { $filter: options.$filter }),
        ...(options.recursive && { recursive: options.recursive }),
      },
    });
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    value: (result.body["value"] ?? []).map((p) => ({
      name: p["name"],
      url: p["url"],
      isDirectory: p["isDirectory"],
      properties: !p.properties
        ? undefined
        : {
            creationTime: new Date(p.properties?.["creationTime"] ?? ""),
            lastModified: new Date(p.properties?.["lastModified"] ?? ""),
            contentLength: p.properties?.["contentLength"],
            contentType: p.properties?.["contentType"],
            fileMode: p.properties?.["fileMode"],
          },
    })),
    "odata.nextLink": result.body["odata.nextLink"],
  };
}
