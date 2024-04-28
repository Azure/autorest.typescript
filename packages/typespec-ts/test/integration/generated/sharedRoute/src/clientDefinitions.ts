// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ListBySubscriptionParameters,
  ListByResourceGroupParameters,
  UpdateIntParameters,
  UpdateStringParameters,
  ReturnsIntParameters,
  ReturnsStringParameters,
  ProcessIntParameters,
  ProcessStringParameters,
} from "./parameters.js";
import {
  ListBySubscription204Response,
  ListBySubscriptionDefaultResponse,
  ListByResourceGroup200Response,
  ListByResourceGroupDefaultResponse,
  UpdateInt204Response,
  UpdateString204Response,
  ReturnsInt200Response,
  ReturnsString200Response,
  ProcessInt200Response,
  ProcessString200Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface ListBySubscription {
  /** different query & header parameters */
  post(
    options: ListBySubscriptionParameters,
  ): StreamableMethod<
    ListBySubscription204Response | ListBySubscriptionDefaultResponse
  >;
  post(
    options: ListByResourceGroupParameters,
  ): StreamableMethod<
    ListByResourceGroup200Response | ListByResourceGroupDefaultResponse
  >;
}

export interface UpdateInt {
  /** different request bodies */
  post(options: UpdateIntParameters): StreamableMethod<UpdateInt204Response>;
  post(
    options: UpdateStringParameters,
  ): StreamableMethod<UpdateString204Response>;
}

export interface ReturnsInt {
  /** different responses */
  post(options: ReturnsIntParameters): StreamableMethod<ReturnsInt200Response>;
  post(
    options: ReturnsStringParameters,
  ): StreamableMethod<ReturnsString200Response>;
}

export interface ProcessInt {
  /** different request and response bodies */
  post(options: ProcessIntParameters): StreamableMethod<ProcessInt200Response>;
  post(
    options: ProcessStringParameters,
  ): StreamableMethod<ProcessString200Response>;
}

export interface Routes {
  /** Resource for '/sharedroute/query' has methods for the following verbs: post */
  (path: "/sharedroute/query"): ListBySubscription;
  /** Resource for '/sharedroute/request-body' has methods for the following verbs: post */
  (path: "/sharedroute/request-body"): UpdateInt;
  /** Resource for '/sharedroute/response-body' has methods for the following verbs: post */
  (path: "/sharedroute/response-body"): ReturnsInt;
  /** Resource for '/sharedroute/request-response' has methods for the following verbs: post */
  (path: "/sharedroute/request-response"): ProcessInt;
}

export type SharedRouteClient = Client & {
  path: Routes;
};
