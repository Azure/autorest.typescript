// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { TopLevelTrackedResource, NestedProxyResource } from "./models.js";

export type TopLevelTrackedResourcesGetParameters = RequestParameters;

export interface TopLevelTrackedResourcesCreateOrReplaceBodyParam {
  /** Resource create parameters. */
  body: TopLevelTrackedResource;
}

export type TopLevelTrackedResourcesCreateOrReplaceParameters =
  TopLevelTrackedResourcesCreateOrReplaceBodyParam & RequestParameters;

export interface TopLevelTrackedResourcesUpdateBodyParam {
  /** The resource properties to be updated. */
  body: TopLevelTrackedResource;
}

export type TopLevelTrackedResourcesUpdateParameters =
  TopLevelTrackedResourcesUpdateBodyParam & RequestParameters;
export type TopLevelTrackedResourcesDeleteParameters = RequestParameters;
export type TopLevelTrackedResourcesListByResourceGroupParameters =
  RequestParameters;
export type TopLevelTrackedResourcesListBySubscriptionParameters =
  RequestParameters;
export type NestedProxyResourcesGetParameters = RequestParameters;

export interface NestedProxyResourcesCreateOrReplaceBodyParam {
  /** Resource create parameters. */
  body: NestedProxyResource;
}

export type NestedProxyResourcesCreateOrReplaceParameters =
  NestedProxyResourcesCreateOrReplaceBodyParam & RequestParameters;

export interface NestedProxyResourcesUpdateBodyParam {
  /** The resource properties to be updated. */
  body: NestedProxyResource;
}

export type NestedProxyResourcesUpdateParameters =
  NestedProxyResourcesUpdateBodyParam & RequestParameters;
export type NestedProxyResourcesDeleteParameters = RequestParameters;
export type NestedProxyResourcesListByTopLevelTrackedResourceParameters =
  RequestParameters;
