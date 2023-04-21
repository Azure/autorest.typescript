// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestOptions } from "../common/interfaces.js";
import { BatchServiceContext as Client, isUnexpected } from "../rest/index.js";
import { ApplicationListResult, Application } from "./models.js";

export interface ApplicationsListApplicationsOptions extends RequestOptions {
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
  /** Accept header. */
  accept?: "application/json";
}

/**
 * This operation returns only Applications and versions that are available for
 * use on Compute Nodes; that is, that can be used in an Package reference. For
 * administrator information about applications and versions that are not yet
 * available to Compute Nodes, use the Azure portal or the Azure Resource Manager
 * API.
 */
export async function listApplications(
  context: Client,
  options: ApplicationsListApplicationsOptions = { requestOptions: {} }
): Promise<ApplicationListResult> {
  const result = await context.path("/applications").get({
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
    },
  });
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    value: (result.body["value"] ?? []).map((p) => ({
      id: p["id"],
      displayName: p["displayName"],
      versions: p["versions"],
    })),
    "odata.nextLink": result.body["odata.nextLink"],
  };
}

export interface ApplicationsGetOptions extends RequestOptions {
  /** Accept header. */
  accept?: "application/json";
}

/**
 * This operation returns only Applications and versions that are available for
 * use on Compute Nodes; that is, that can be used in an Package reference. For
 * administrator information about Applications and versions that are not yet
 * available to Compute Nodes, use the Azure portal or the Azure Resource Manager
 * API.
 */
export async function get(
  context: Client,
  applicationId: string,
  options: ApplicationsGetOptions = { requestOptions: {} }
): Promise<Application> {
  const result = await context
    .path("/applications/{applicationId}", applicationId)
    .get({
      headers: {
        Accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    displayName: result.body["displayName"],
    versions: result.body["versions"],
  };
}
