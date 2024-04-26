// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  WidgetsListWidgetsParameters,
  WidgetsCreateWidgetParameters,
  WidgetsListWidgetsPagesParameters,
  WidgetsQueryWidgetsPagesParameters,
  WidgetsGetWidgetParameters,
  WidgetsUpdateWidgetParameters,
  WidgetsDeleteWidgetParameters,
  WidgetsCreateOrReplaceParameters,
  WidgetsAnalyzeWidgetParameters,
  BudgetsCreateOrReplaceParameters,
  BudgetsCreateOrUpdateParameters,
} from "./parameters.js";
import {
  WidgetsListWidgets200Response,
  WidgetsListWidgetsDefaultResponse,
  WidgetsCreateWidget201Response,
  WidgetsCreateWidgetDefaultResponse,
  WidgetsListWidgetsPages200Response,
  WidgetsListWidgetsPagesDefaultResponse,
  WidgetsQueryWidgetsPages200Response,
  WidgetsQueryWidgetsPagesDefaultResponse,
  WidgetsGetWidget200Response,
  WidgetsGetWidgetDefaultResponse,
  WidgetsUpdateWidget200Response,
  WidgetsUpdateWidgetDefaultResponse,
  WidgetsDeleteWidget204Response,
  WidgetsDeleteWidgetDefaultResponse,
  WidgetsCreateOrReplace200Response,
  WidgetsCreateOrReplace201Response,
  WidgetsCreateOrReplaceDefaultResponse,
  WidgetsAnalyzeWidget200Response,
  WidgetsAnalyzeWidgetDefaultResponse,
  BudgetsCreateOrReplace200Response,
  BudgetsCreateOrReplace201Response,
  BudgetsCreateOrReplaceDefaultResponse,
  BudgetsCreateOrUpdate200Response,
  BudgetsCreateOrUpdate201Response,
  BudgetsCreateOrUpdateDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface WidgetsListWidgets {
  /**
   * List all widgets in the system. This operation is not paginated, and returns a simple array of widgets.
   *
   * It does not accept any options or parameters.
   */
  get(
    options: WidgetsListWidgetsParameters,
  ): StreamableMethod<
    WidgetsListWidgets200Response | WidgetsListWidgetsDefaultResponse
  >;
  /**
   * Create a new widget.
   *
   * The widget ID is not required during creation, as it is automatically set by the server. Providing an ID will
   * result in an error.
   */
  post(
    options?: WidgetsCreateWidgetParameters,
  ): StreamableMethod<
    WidgetsCreateWidget201Response | WidgetsCreateWidgetDefaultResponse
  >;
}

export interface WidgetsListWidgetsPages {
  get(
    options: WidgetsListWidgetsPagesParameters,
  ): StreamableMethod<
    WidgetsListWidgetsPages200Response | WidgetsListWidgetsPagesDefaultResponse
  >;
  post(
    options: WidgetsQueryWidgetsPagesParameters,
  ): StreamableMethod<
    | WidgetsQueryWidgetsPages200Response
    | WidgetsQueryWidgetsPagesDefaultResponse
  >;
}

export interface WidgetsGetWidget {
  /** Get a widget by ID. */
  get(
    options?: WidgetsGetWidgetParameters,
  ): StreamableMethod<
    WidgetsGetWidget200Response | WidgetsGetWidgetDefaultResponse
  >;
  /**
   * Update the contents of the widget. The widget ID is required in the input, but cannot be changed. All other fields
   * are optional and will be updated within the widget if provided.
   */
  patch(
    options?: WidgetsUpdateWidgetParameters,
  ): StreamableMethod<
    WidgetsUpdateWidget200Response | WidgetsUpdateWidgetDefaultResponse
  >;
  /** Delete a widget by ID. */
  delete(
    options?: WidgetsDeleteWidgetParameters,
  ): StreamableMethod<
    WidgetsDeleteWidget204Response | WidgetsDeleteWidgetDefaultResponse
  >;
}

export interface WidgetsCreateOrReplace {
  /** Long-running resource create or replace operation template. */
  put(
    options: WidgetsCreateOrReplaceParameters,
  ): StreamableMethod<
    | WidgetsCreateOrReplace200Response
    | WidgetsCreateOrReplace201Response
    | WidgetsCreateOrReplaceDefaultResponse
  >;
}

export interface WidgetsAnalyzeWidget {
  /** Analyze a widget. The only guarantee is that this method will return a string containing the results of the analysis. */
  post(
    options?: WidgetsAnalyzeWidgetParameters,
  ): StreamableMethod<
    WidgetsAnalyzeWidget200Response | WidgetsAnalyzeWidgetDefaultResponse
  >;
}

export interface BudgetsCreateOrReplace {
  /** Long-running resource create or replace operation template. */
  put(
    options: BudgetsCreateOrReplaceParameters,
  ): StreamableMethod<
    | BudgetsCreateOrReplace200Response
    | BudgetsCreateOrReplace201Response
    | BudgetsCreateOrReplaceDefaultResponse
  >;
}

export interface BudgetsCreateOrUpdate {
  /** Long-running resource create or update operation template. */
  patch(
    options: BudgetsCreateOrUpdateParameters,
  ): StreamableMethod<
    | BudgetsCreateOrUpdate200Response
    | BudgetsCreateOrUpdate201Response
    | BudgetsCreateOrUpdateDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/widgets' has methods for the following verbs: get, post */
  (path: "/widgets"): WidgetsListWidgets;
  /** Resource for '/widgets/widgets/pages' has methods for the following verbs: get, post */
  (path: "/widgets/widgets/pages"): WidgetsListWidgetsPages;
  /** Resource for '/widgets/\{id\}' has methods for the following verbs: get, patch, delete */
  (path: "/widgets/{id}", id: string): WidgetsGetWidget;
  /** Resource for '/widgets/widgets/createOrReplace/users/\{name\}' has methods for the following verbs: put */
  (
    path: "/widgets/widgets/createOrReplace/users/{name}",
    name: string,
  ): WidgetsCreateOrReplace;
  /** Resource for '/widgets/\{id\}/analyze' has methods for the following verbs: post */
  (path: "/widgets/{id}/analyze", id: string): WidgetsAnalyzeWidget;
  /** Resource for '/budgets/widgets/createOrReplace/users/\{name\}' has methods for the following verbs: put */
  (
    path: "/budgets/widgets/createOrReplace/users/{name}",
    name: string,
  ): BudgetsCreateOrReplace;
  /** Resource for '/budgets/widgets/createOrUpdate/users/\{name\}' has methods for the following verbs: patch */
  (
    path: "/budgets/widgets/createOrUpdate/users/{name}",
    name: string,
  ): BudgetsCreateOrUpdate;
}

export type WidgetServiceContext = Client & {
  path: Routes;
};
