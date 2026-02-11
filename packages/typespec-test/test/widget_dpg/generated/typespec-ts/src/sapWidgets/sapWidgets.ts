// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createSAPWidgets, SAPWidgetsContext, SAPWidgetsOptionalParams } from "./api/index.js";
import { Widget, SAPUser, AnalyzeResult } from "../models/models.js";
import { PagedAsyncIterableIterator } from "../static-helpers/pagingHelpers.js";
import {
  analyzeWidget,
  deleteWidget,
  updateWidget,
  createOrReplace,
  createWidget,
  getWidget,
  queryWidgetsPages,
  listWidgetsPages,
  sapListWidgets,
} from "./api/operations.js";
import {
  AnalyzeWidgetOptionalParams,
  DeleteWidgetOptionalParams,
  UpdateWidgetOptionalParams,
  CreateOrReplaceOptionalParams,
  CreateWidgetOptionalParams,
  GetWidgetOptionalParams,
  QueryWidgetsPagesOptionalParams,
  ListWidgetsPagesOptionalParams,
  SAPListWidgetsOptionalParams,
} from "./api/options.js";
import { KeyCredential } from "@azure/core-auth";
import { PollerLike, OperationState } from "@azure/core-lro";
import { Pipeline } from "@azure/core-rest-pipeline";

export { SAPWidgetsOptionalParams } from "./api/sapWidgetsContext.js";

export class SAPWidgets {
  private _client: SAPWidgetsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: KeyCredential,
    options: SAPWidgetsOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createSAPWidgets(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Analyze a widget. The only guarantee is that this method will return a string containing the results of the analysis. */
  analyzeWidget(
    id: string,
    options: AnalyzeWidgetOptionalParams = { requestOptions: {} },
  ): Promise<AnalyzeResult> {
    return analyzeWidget(this._client, id, options);
  }

  /** Delete a widget by ID. */
  deleteWidget(
    id: string,
    options: DeleteWidgetOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return deleteWidget(this._client, id, options);
  }

  /**
   * Update the contents of the widget. The widget ID is required in the input, but cannot be changed. All other fields
   * are optional and will be updated within the widget if provided.
   */
  updateWidget(
    id: string,
    options: UpdateWidgetOptionalParams = { requestOptions: {} },
  ): Promise<Widget> {
    return updateWidget(this._client, id, options);
  }

  /** Long-running resource create or replace operation template. */
  createOrReplace(
    name: string,
    resource: SAPUser,
    options: CreateOrReplaceOptionalParams = { requestOptions: {} },
  ): PollerLike<OperationState<SAPUser>, SAPUser> {
    return createOrReplace(this._client, name, resource, options);
  }

  /**
   * Create a new widget.
   *
   * The widget ID is not required during creation, as it is automatically set by the server. Providing an ID will
   * result in an error.
   */
  createWidget(
    weight: number,
    color: "red" | "blue",
    options: CreateWidgetOptionalParams = { requestOptions: {} },
  ): Promise<Widget> {
    return createWidget(this._client, weight, color, options);
  }

  /** Get a widget by ID. */
  getWidget(
    id: string,
    options: GetWidgetOptionalParams = { requestOptions: {} },
  ): Promise<Widget> {
    return getWidget(this._client, id, options);
  }

  queryWidgetsPages(
    page: number,
    pageSize: number,
    options: QueryWidgetsPagesOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<Widget> {
    return queryWidgetsPages(this._client, page, pageSize, options);
  }

  listWidgetsPages(
    page: number,
    pageSize: number,
    options: ListWidgetsPagesOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<Widget> {
    return listWidgetsPages(this._client, page, pageSize, options);
  }

  /**
   * List all widgets in the system. This operation is not paginated, and returns a simple array of widgets.
   *
   * It does not accept any options or parameters.
   */
  sapListWidgets(
    requiredHeader: string,
    bytesHeader: Uint8Array,
    value: Uint8Array,
    csvArrayHeader: Uint8Array[],
    utcDateHeader: Date,
    options: SAPListWidgetsOptionalParams = { requestOptions: {} },
  ): Promise<Widget[]> {
    return sapListWidgets(
      this._client,
      requiredHeader,
      bytesHeader,
      value,
      csvArrayHeader,
      utcDateHeader,
      options,
    );
  }
}
