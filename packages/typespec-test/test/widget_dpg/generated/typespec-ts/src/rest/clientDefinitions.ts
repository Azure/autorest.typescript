// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ListWidgetsParameters,
  CreateWidgetParameters,
  GetWidgetParameters,
  UpdateWidgetParameters,
  DeleteWidgetParameters,
  AnalyzeWidgetParameters,
} from "./parameters.js";
import {
  ListWidgets200Response,
  ListWidgetsDefaultResponse,
  CreateWidget201Response,
  CreateWidgetDefaultResponse,
  GetWidget200Response,
  GetWidgetDefaultResponse,
  UpdateWidget200Response,
  UpdateWidgetDefaultResponse,
  DeleteWidget204Response,
  DeleteWidgetDefaultResponse,
  AnalyzeWidget200Response,
  AnalyzeWidgetDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface ListWidgets {
  get(
    options?: ListWidgetsParameters
  ): StreamableMethod<ListWidgets200Response | ListWidgetsDefaultResponse>;
  post(
    options?: CreateWidgetParameters
  ): StreamableMethod<CreateWidget201Response | CreateWidgetDefaultResponse>;
}

export interface GetWidget {
  get(
    options?: GetWidgetParameters
  ): StreamableMethod<GetWidget200Response | GetWidgetDefaultResponse>;
  patch(
    options?: UpdateWidgetParameters
  ): StreamableMethod<UpdateWidget200Response | UpdateWidgetDefaultResponse>;
  delete(
    options?: DeleteWidgetParameters
  ): StreamableMethod<DeleteWidget204Response | DeleteWidgetDefaultResponse>;
}

export interface AnalyzeWidget {
  post(
    options?: AnalyzeWidgetParameters
  ): StreamableMethod<AnalyzeWidget200Response | AnalyzeWidgetDefaultResponse>;
}

export interface Routes {
  /** Resource for '/widgets' has methods for the following verbs: get, post */
  (path: "/widgets"): ListWidgets;
  /** Resource for '/widgets/\{id\}' has methods for the following verbs: get, patch, delete */
  (path: "/widgets/{id}", id: string): GetWidget;
  /** Resource for '/widgets/\{id\}/analyze' has methods for the following verbs: post */
  (path: "/widgets/{id}/analyze", id: string): AnalyzeWidget;
}

export type WidgetServiceContext = Client & {
  path: Routes;
};
