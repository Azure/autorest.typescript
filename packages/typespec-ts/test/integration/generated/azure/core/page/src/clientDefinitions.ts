// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ListWithPageParameters,
  ListWithParametersParameters,
  ListWithCustomPageModelParameters,
  ListFirstItemParameters,
  ListSecondItemParameters,
} from "./parameters.js";
import {
  ListWithPage200Response,
  ListWithPageDefaultResponse,
  ListWithParameters200Response,
  ListWithParametersDefaultResponse,
  ListWithCustomPageModel200Response,
  ListWithCustomPageModelDefaultResponse,
  ListFirstItem200Response,
  ListFirstItemDefaultResponse,
  ListSecondItem200Response,
  ListSecondItemDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface ListWithPage {
  /** List with Azure.Core.Page<>. */
  get(
    options?: ListWithPageParameters,
  ): StreamableMethod<ListWithPage200Response | ListWithPageDefaultResponse>;
}

export interface ListWithParameters {
  /** List with extensible enum parameter Azure.Core.Page<>. */
  get(
    options: ListWithParametersParameters,
  ): StreamableMethod<
    ListWithParameters200Response | ListWithParametersDefaultResponse
  >;
}

export interface ListWithCustomPageModel {
  /** List with custom page model. */
  get(
    options?: ListWithCustomPageModelParameters,
  ): StreamableMethod<
    ListWithCustomPageModel200Response | ListWithCustomPageModelDefaultResponse
  >;
}

export interface ListFirstItem {
  /** Two operations with two different page item types should be successfully generated. Should generate model for FirstItem. */
  get(
    options?: ListFirstItemParameters,
  ): StreamableMethod<ListFirstItem200Response | ListFirstItemDefaultResponse>;
}

export interface ListSecondItem {
  /** Two operations with two different page item types should be successfully generated. Should generate model for SecondItem. */
  get(
    options?: ListSecondItemParameters,
  ): StreamableMethod<
    ListSecondItem200Response | ListSecondItemDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/azure/core/page/page' has methods for the following verbs: get */
  (path: "/azure/core/page/page"): ListWithPage;
  /** Resource for '/azure/core/page/parameters' has methods for the following verbs: get */
  (path: "/azure/core/page/parameters"): ListWithParameters;
  /** Resource for '/azure/core/page/custom-page' has methods for the following verbs: get */
  (path: "/azure/core/page/custom-page"): ListWithCustomPageModel;
  /** Resource for '/azure/core/page/first-item' has methods for the following verbs: get */
  (path: "/azure/core/page/first-item"): ListFirstItem;
  /** Resource for '/azure/core/page/second-item' has methods for the following verbs: get */
  (path: "/azure/core/page/second-item"): ListSecondItem;
}

export type AzureCorePageClient = Client & {
  path: Routes;
};
