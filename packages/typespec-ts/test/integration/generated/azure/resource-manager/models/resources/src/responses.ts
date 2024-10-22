// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";
import {
  TopLevelTrackedResourceOutput,
  ErrorResponseOutput,
  TopLevelTrackedResourceListResultOutput,
  NestedProxyResourceOutput,
  NestedProxyResourceListResultOutput,
  SingletonTrackedResourceOutput,
  SingletonTrackedResourceListResultOutput,
} from "./outputModels.js";

/** Azure operation completed successfully. */
export interface TopLevelTrackedResourcesGet200Response extends HttpResponse {
  status: "200";
  body: TopLevelTrackedResourceOutput;
}

export interface TopLevelTrackedResourcesGetDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource 'TopLevelTrackedResource' update operation succeeded */
export interface TopLevelTrackedResourcesCreateOrReplace200Response
  extends HttpResponse {
  status: "200";
  body: TopLevelTrackedResourceOutput;
}

export interface TopLevelTrackedResourcesCreateOrReplace201Headers {
  /** A link to the status monitor */
  "azure-asyncoperation"?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource 'TopLevelTrackedResource' create operation succeeded */
export interface TopLevelTrackedResourcesCreateOrReplace201Response
  extends HttpResponse {
  status: "201";
  body: TopLevelTrackedResourceOutput;
  headers: RawHttpHeaders & TopLevelTrackedResourcesCreateOrReplace201Headers;
}

export interface TopLevelTrackedResourcesCreateOrReplaceDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running createOrReplace operation */
export interface TopLevelTrackedResourcesCreateOrReplaceLogicalResponse
  extends HttpResponse {
  status: "200";
  body: TopLevelTrackedResourceOutput;
}

/** Azure operation completed successfully. */
export interface TopLevelTrackedResourcesUpdate200Response
  extends HttpResponse {
  status: "200";
  body: TopLevelTrackedResourceOutput;
}

export interface TopLevelTrackedResourcesUpdate202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource update request accepted. */
export interface TopLevelTrackedResourcesUpdate202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & TopLevelTrackedResourcesUpdate202Headers;
}

export interface TopLevelTrackedResourcesUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running update operation */
export interface TopLevelTrackedResourcesUpdateLogicalResponse
  extends HttpResponse {
  status: "200";
  body: TopLevelTrackedResourceOutput;
}

export interface TopLevelTrackedResourcesDelete202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource deletion accepted. */
export interface TopLevelTrackedResourcesDelete202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & TopLevelTrackedResourcesDelete202Headers;
}

/** Resource does not exist. */
export interface TopLevelTrackedResourcesDelete204Response
  extends HttpResponse {
  status: "204";
}

export interface TopLevelTrackedResourcesDeleteDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running delete operation */
export interface TopLevelTrackedResourcesDeleteLogicalResponse
  extends HttpResponse {
  status: "200";
}

/** Azure operation completed successfully. */
export interface TopLevelTrackedResourcesListByResourceGroup200Response
  extends HttpResponse {
  status: "200";
  body: TopLevelTrackedResourceListResultOutput;
}

export interface TopLevelTrackedResourcesListByResourceGroupDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface TopLevelTrackedResourcesListBySubscription200Response
  extends HttpResponse {
  status: "200";
  body: TopLevelTrackedResourceListResultOutput;
}

export interface TopLevelTrackedResourcesListBySubscriptionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Action completed successfully. */
export interface TopLevelTrackedResourcesActionSync204Response
  extends HttpResponse {
  status: "204";
}

export interface TopLevelTrackedResourcesActionSyncDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface NestedProxyResourcesGet200Response extends HttpResponse {
  status: "200";
  body: NestedProxyResourceOutput;
}

export interface NestedProxyResourcesGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource 'NestedProxyResource' update operation succeeded */
export interface NestedProxyResourcesCreateOrReplace200Response
  extends HttpResponse {
  status: "200";
  body: NestedProxyResourceOutput;
}

export interface NestedProxyResourcesCreateOrReplace201Headers {
  /** A link to the status monitor */
  "azure-asyncoperation"?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource 'NestedProxyResource' create operation succeeded */
export interface NestedProxyResourcesCreateOrReplace201Response
  extends HttpResponse {
  status: "201";
  body: NestedProxyResourceOutput;
  headers: RawHttpHeaders & NestedProxyResourcesCreateOrReplace201Headers;
}

export interface NestedProxyResourcesCreateOrReplaceDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running createOrReplace operation */
export interface NestedProxyResourcesCreateOrReplaceLogicalResponse
  extends HttpResponse {
  status: "200";
  body: NestedProxyResourceOutput;
}

/** Azure operation completed successfully. */
export interface NestedProxyResourcesUpdate200Response extends HttpResponse {
  status: "200";
  body: NestedProxyResourceOutput;
}

export interface NestedProxyResourcesUpdate202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource update request accepted. */
export interface NestedProxyResourcesUpdate202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & NestedProxyResourcesUpdate202Headers;
}

export interface NestedProxyResourcesUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running update operation */
export interface NestedProxyResourcesUpdateLogicalResponse
  extends HttpResponse {
  status: "200";
  body: NestedProxyResourceOutput;
}

export interface NestedProxyResourcesDelete202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource deletion accepted. */
export interface NestedProxyResourcesDelete202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & NestedProxyResourcesDelete202Headers;
}

/** Resource does not exist. */
export interface NestedProxyResourcesDelete204Response extends HttpResponse {
  status: "204";
}

export interface NestedProxyResourcesDeleteDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running delete operation */
export interface NestedProxyResourcesDeleteLogicalResponse
  extends HttpResponse {
  status: "200";
}

/** Azure operation completed successfully. */
export interface NestedProxyResourcesListByTopLevelTrackedResource200Response
  extends HttpResponse {
  status: "200";
  body: NestedProxyResourceListResultOutput;
}

export interface NestedProxyResourcesListByTopLevelTrackedResourceDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface SingletonTrackedResourcesGetByResourceGroup200Response
  extends HttpResponse {
  status: "200";
  body: SingletonTrackedResourceOutput;
}

export interface SingletonTrackedResourcesGetByResourceGroupDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource 'SingletonTrackedResource' update operation succeeded */
export interface SingletonTrackedResourcesCreateOrUpdate200Response
  extends HttpResponse {
  status: "200";
  body: SingletonTrackedResourceOutput;
}

export interface SingletonTrackedResourcesCreateOrUpdate201Headers {
  /** A link to the status monitor */
  "azure-asyncoperation"?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource 'SingletonTrackedResource' create operation succeeded */
export interface SingletonTrackedResourcesCreateOrUpdate201Response
  extends HttpResponse {
  status: "201";
  body: SingletonTrackedResourceOutput;
  headers: RawHttpHeaders & SingletonTrackedResourcesCreateOrUpdate201Headers;
}

export interface SingletonTrackedResourcesCreateOrUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running createOrUpdate operation */
export interface SingletonTrackedResourcesCreateOrUpdateLogicalResponse
  extends HttpResponse {
  status: "200";
  body: SingletonTrackedResourceOutput;
}

/** Azure operation completed successfully. */
export interface SingletonTrackedResourcesUpdate200Response
  extends HttpResponse {
  status: "200";
  body: SingletonTrackedResourceOutput;
}

export interface SingletonTrackedResourcesUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface SingletonTrackedResourcesListByResourceGroup200Response
  extends HttpResponse {
  status: "200";
  body: SingletonTrackedResourceListResultOutput;
}

export interface SingletonTrackedResourcesListByResourceGroupDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
