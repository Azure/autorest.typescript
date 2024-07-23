// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  User,
  Widget,
  AnalyzeResult,
  _ListWidgetsPagesResults,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  buildCsvCollection,
  isUnexpected,
  WidgetsAnalyzeWidget200Response,
  WidgetsAnalyzeWidgetDefaultResponse,
  WidgetsCreateOrReplace200Response,
  WidgetsCreateOrReplace201Response,
  WidgetsCreateOrReplaceDefaultResponse,
  WidgetsCreateOrReplaceLogicalResponse,
  WidgetsCreateWidget201Response,
  WidgetsCreateWidgetDefaultResponse,
  WidgetsDeleteWidget204Response,
  WidgetsDeleteWidgetDefaultResponse,
  WidgetServiceContext as Client,
  WidgetsGetWidget200Response,
  WidgetsGetWidgetDefaultResponse,
  WidgetsListWidgets200Response,
  WidgetsListWidgetsDefaultResponse,
  WidgetsListWidgetsPages200Response,
  WidgetsListWidgetsPagesDefaultResponse,
  WidgetsQueryWidgetsPages200Response,
  WidgetsQueryWidgetsPagesDefaultResponse,
  WidgetsUpdateWidget200Response,
  WidgetsUpdateWidgetDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { uint8ArrayToString } from "@azure/core-util";
import {
  WidgetsListWidgetsOptionalParams,
  WidgetsListWidgetsPagesOptionalParams,
  WidgetsQueryWidgetsPagesOptionalParams,
  WidgetsGetWidgetOptionalParams,
  WidgetsCreateWidgetOptionalParams,
  WidgetsCreateOrReplaceOptionalParams,
  WidgetsUpdateWidgetOptionalParams,
  WidgetsDeleteWidgetOptionalParams,
  WidgetsAnalyzeWidgetOptionalParams,
} from "../../models/options.js";

export function _listWidgetsSend(
  context: Client,
  requiredHeader: string,
  bytesHeader: Uint8Array,
  value: Uint8Array,
  csvArrayHeader: Uint8Array[],
  utcDateHeader: Date,
  options: WidgetsListWidgetsOptionalParams = { requestOptions: {} },
): StreamableMethod<
  WidgetsListWidgets200Response | WidgetsListWidgetsDefaultResponse
> {
  return context
    .path("/widgets")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        "required-header": requiredHeader,
        ...(options?.optionalHeader !== undefined
          ? { "optional-header": options?.optionalHeader }
          : {}),
        ...(options?.nullableOptionalHeader !== undefined &&
        options?.nullableOptionalHeader !== null
          ? { "nullable-optional-header": options?.nullableOptionalHeader }
          : {}),
        "bytes-header": uint8ArrayToString(bytesHeader, "base64"),
        value: uint8ArrayToString(value, "base64"),
        "csv-array-header": buildCsvCollection(
          csvArrayHeader.map((p) => uint8ArrayToString(p, "base64url")),
        ),
        "utc-date-header": utcDateHeader.toUTCString(),
        ...(options?.optionalDateHeader !== undefined
          ? {
              "optional-date-header":
                options?.optionalDateHeader?.toUTCString(),
            }
          : {}),
        ...(options?.nullableDateHeader !== undefined &&
        options?.nullableDateHeader !== null
          ? {
              "nullable-date-header":
                options?.nullableDateHeader?.toUTCString(),
            }
          : {}),
      },
    });
}

export async function _listWidgetsDeserialize(
  result: WidgetsListWidgets200Response | WidgetsListWidgetsDefaultResponse,
): Promise<Widget[]> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body === undefined
    ? result.body
    : result.body.map((p) => {
        return { id: p["id"], weight: p["weight"], color: p["color"] };
      });
}

/**
 * List all widgets in the system. This operation is not paginated, and returns a simple array of widgets.
 *
 * It does not accept any options or parameters.
 */
export async function listWidgets(
  context: Client,
  requiredHeader: string,
  bytesHeader: Uint8Array,
  value: Uint8Array,
  csvArrayHeader: Uint8Array[],
  utcDateHeader: Date,
  options: WidgetsListWidgetsOptionalParams = { requestOptions: {} },
): Promise<Widget[]> {
  const result = await _listWidgetsSend(
    context,
    requiredHeader,
    bytesHeader,
    value,
    csvArrayHeader,
    utcDateHeader,
    options,
  );
  return _listWidgetsDeserialize(result);
}

export function _listWidgetsPagesSend(
  context: Client,
  page: number,
  pageSize: number,
  options: WidgetsListWidgetsPagesOptionalParams = { requestOptions: {} },
): StreamableMethod<
  WidgetsListWidgetsPages200Response | WidgetsListWidgetsPagesDefaultResponse
> {
  return context
    .path("/widgets/widgets/pages")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { page: page, pageSize: pageSize },
    });
}

export async function _listWidgetsPagesDeserialize(
  result:
    | WidgetsListWidgetsPages200Response
    | WidgetsListWidgetsPagesDefaultResponse,
): Promise<_ListWidgetsPagesResults> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    results: result.body["results"].map((p) => {
      return { id: p["id"], weight: p["weight"], color: p["color"] };
    }),
    "odata.nextLink": result.body["odata.nextLink"],
  };
}

export function listWidgetsPages(
  context: Client,
  page: number,
  pageSize: number,
  options: WidgetsListWidgetsPagesOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Widget> {
  return buildPagedAsyncIterator(
    context,
    () => _listWidgetsPagesSend(context, page, pageSize, options),
    _listWidgetsPagesDeserialize,
    { itemName: "results", nextLinkName: "odata.nextLink" },
  );
}

export function _queryWidgetsPagesSend(
  context: Client,
  page: number,
  pageSize: number,
  options: WidgetsQueryWidgetsPagesOptionalParams = { requestOptions: {} },
): StreamableMethod<
  WidgetsQueryWidgetsPages200Response | WidgetsQueryWidgetsPagesDefaultResponse
> {
  return context
    .path("/widgets/widgets/pages")
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { page: page, pageSize: pageSize },
    });
}

export async function _queryWidgetsPagesDeserialize(
  result:
    | WidgetsQueryWidgetsPages200Response
    | WidgetsQueryWidgetsPagesDefaultResponse,
): Promise<_ListWidgetsPagesResults> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    results: result.body["results"].map((p) => {
      return { id: p["id"], weight: p["weight"], color: p["color"] };
    }),
    "odata.nextLink": result.body["odata.nextLink"],
  };
}

export function queryWidgetsPages(
  context: Client,
  page: number,
  pageSize: number,
  options: WidgetsQueryWidgetsPagesOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Widget> {
  return buildPagedAsyncIterator(
    context,
    () => _queryWidgetsPagesSend(context, page, pageSize, options),
    _queryWidgetsPagesDeserialize,
    { itemName: "results", nextLinkName: "odata.nextLink" },
  );
}

export function _getWidgetSend(
  context: Client,
  id: string,
  options: WidgetsGetWidgetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  WidgetsGetWidget200Response | WidgetsGetWidgetDefaultResponse
> {
  return context
    .path("/widgets/{id}", id)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getWidgetDeserialize(
  result: WidgetsGetWidget200Response | WidgetsGetWidgetDefaultResponse,
): Promise<Widget> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
  };
}

/** Get a widget by ID. */
export async function getWidget(
  context: Client,
  id: string,
  options: WidgetsGetWidgetOptionalParams = { requestOptions: {} },
): Promise<Widget> {
  const result = await _getWidgetSend(context, id, options);
  return _getWidgetDeserialize(result);
}

export function _createWidgetSend(
  context: Client,
  weight: number,
  color: "red" | "blue",
  options: WidgetsCreateWidgetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  WidgetsCreateWidget201Response | WidgetsCreateWidgetDefaultResponse
> {
  return context
    .path("/widgets")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { weight: weight, color: color },
    });
}

export async function _createWidgetDeserialize(
  result: WidgetsCreateWidget201Response | WidgetsCreateWidgetDefaultResponse,
): Promise<Widget> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
  };
}

/**
 * Create a new widget.
 *
 * The widget ID is not required during creation, as it is automatically set by the server. Providing an ID will
 * result in an error.
 */
export async function createWidget(
  context: Client,
  weight: number,
  color: "red" | "blue",
  options: WidgetsCreateWidgetOptionalParams = { requestOptions: {} },
): Promise<Widget> {
  const result = await _createWidgetSend(context, weight, color, options);
  return _createWidgetDeserialize(result);
}

export function _createOrReplaceSend(
  context: Client,
  name: string,
  resource: User,
  options: WidgetsCreateOrReplaceOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | WidgetsCreateOrReplace200Response
  | WidgetsCreateOrReplace201Response
  | WidgetsCreateOrReplaceDefaultResponse
  | WidgetsCreateOrReplaceLogicalResponse
> {
  return context
    .path("/widgets/widgets/createOrReplace/users/{name}", name)
    .put({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { "api-version": options?.apiVersion ?? "1.0.0" },
      body: { role: resource["role"], id: resource["id"] },
    });
}

export async function _createOrReplaceDeserialize(
  result:
    | WidgetsCreateOrReplace200Response
    | WidgetsCreateOrReplace201Response
    | WidgetsCreateOrReplaceDefaultResponse
    | WidgetsCreateOrReplaceLogicalResponse,
): Promise<User> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const res = result as unknown as WidgetsCreateOrReplaceLogicalResponse;
  return {
    name: res.body["name"],
    role: res.body["role"],
    id: res.body["id"],
  };
}

/** Long-running resource create or replace operation template. */
export function createOrReplace(
  context: Client,
  name: string,
  resource: User,
  options: WidgetsCreateOrReplaceOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<User>, User> {
  return getLongRunningPoller(context, _createOrReplaceDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrReplaceSend(context, name, resource, options),
  }) as PollerLike<OperationState<User>, User>;
}

export function _updateWidgetSend(
  context: Client,
  id: string,
  options: WidgetsUpdateWidgetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  WidgetsUpdateWidget200Response | WidgetsUpdateWidgetDefaultResponse
> {
  return context
    .path("/widgets/{id}", id)
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: { weight: options?.weight, color: options?.color },
    });
}

export async function _updateWidgetDeserialize(
  result: WidgetsUpdateWidget200Response | WidgetsUpdateWidgetDefaultResponse,
): Promise<Widget> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
  };
}

/**
 * Update the contents of the widget. The widget ID is required in the input, but cannot be changed. All other fields
 * are optional and will be updated within the widget if provided.
 */
export async function updateWidget(
  context: Client,
  id: string,
  options: WidgetsUpdateWidgetOptionalParams = { requestOptions: {} },
): Promise<Widget> {
  const result = await _updateWidgetSend(context, id, options);
  return _updateWidgetDeserialize(result);
}

export function _deleteWidgetSend(
  context: Client,
  id: string,
  options: WidgetsDeleteWidgetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  WidgetsDeleteWidget204Response | WidgetsDeleteWidgetDefaultResponse
> {
  return context
    .path("/widgets/{id}", id)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteWidgetDeserialize(
  result: WidgetsDeleteWidget204Response | WidgetsDeleteWidgetDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a widget by ID. */
export async function deleteWidget(
  context: Client,
  id: string,
  options: WidgetsDeleteWidgetOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteWidgetSend(context, id, options);
  return _deleteWidgetDeserialize(result);
}

export function _analyzeWidgetSend(
  context: Client,
  id: string,
  options: WidgetsAnalyzeWidgetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  WidgetsAnalyzeWidget200Response | WidgetsAnalyzeWidgetDefaultResponse
> {
  return context
    .path("/widgets/{id}/analyze", id)
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _analyzeWidgetDeserialize(
  result: WidgetsAnalyzeWidget200Response | WidgetsAnalyzeWidgetDefaultResponse,
): Promise<AnalyzeResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    summary: result.body["summary"],
  };
}

/** Analyze a widget. The only guarantee is that this method will return a string containing the results of the analysis. */
export async function analyzeWidget(
  context: Client,
  id: string,
  options: WidgetsAnalyzeWidgetOptionalParams = { requestOptions: {} },
): Promise<AnalyzeResult> {
  const result = await _analyzeWidgetSend(context, id, options);
  return _analyzeWidgetDeserialize(result);
}
