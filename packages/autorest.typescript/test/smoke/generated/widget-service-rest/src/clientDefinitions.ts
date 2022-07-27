// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ListParameters,
  CreateParameters,
  ReadParameters,
  CustomGetParameters
} from "./parameters";
import {
  List200Response,
  ListdefaultResponse,
  Create200Response,
  CreatedefaultResponse,
  Read200Response,
  ReaddefaultResponse,
  CustomGet200Response,
  CustomGetdefaultResponse
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for WidgetService operations */
export interface WidgetServiceOperations {
  list(
    options?: ListParameters
  ): StreamableMethod<List200Response | ListdefaultResponse>;
  create(
    options?: CreateParameters
  ): StreamableMethod<Create200Response | CreatedefaultResponse>;
  read(
    id: string,
    options?: ReadParameters
  ): StreamableMethod<Read200Response | ReaddefaultResponse>;
  customGet(
    options?: CustomGetParameters
  ): StreamableMethod<CustomGet200Response | CustomGetdefaultResponse>;
}

export interface List {
  get(
    options?: ListParameters
  ): StreamableMethod<List200Response | ListdefaultResponse>;
  post(
    options?: CreateParameters
  ): StreamableMethod<Create200Response | CreatedefaultResponse>;
}

export interface Read {
  get(
    options?: ReadParameters
  ): StreamableMethod<Read200Response | ReaddefaultResponse>;
}

export interface CustomGet {
  get(
    options?: CustomGetParameters
  ): StreamableMethod<CustomGet200Response | CustomGetdefaultResponse>;
}

export interface Routes {
  /** Resource for '/' has methods for the following verbs: get, post */
  (path: "/"): List;
  /** Resource for '/widgets/\{id\}' has methods for the following verbs: get */
  (path: "/widgets/{id}", id: string): Read;
  /** Resource for '/customGet' has methods for the following verbs: get */
  (path: "/customGet"): CustomGet;
}

export type WidgetServiceClient = Client & {
  path: Routes;
  widgetService: WidgetServiceOperations;
};
