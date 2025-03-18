// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WidgetServiceContext as Client } from "../index.js";
import {
  User,
  userSerializer,
  userDeserializer,
  Widget,
  widgetDeserializer,
  widgetErrorDeserializer,
  _ListWidgetsPagesResults,
  _listWidgetsPagesResultsDeserializer,
  widgetArrayDeserializer,
  AnalyzeResult,
  analyzeResultDeserializer,
} from "../../models/models.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import { buildCsvCollection } from "../../static-helpers/serialization/build-csv-collection.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { uint8ArrayToString } from "@azure/core-util";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  WidgetsAnalyzeWidgetOptionalParams,
  WidgetsDeleteWidgetOptionalParams,
  WidgetsUpdateWidgetOptionalParams,
  WidgetsCreateOrReplaceOptionalParams,
  WidgetsCreateWidgetOptionalParams,
  WidgetsGetWidgetOptionalParams,
  WidgetsQueryWidgetsPagesOptionalParams,
  WidgetsListWidgetsPagesOptionalParams,
  WidgetsListWidgetsOptionalParams,
} from "./options.js";

export function _analyzeWidgetSend(
  context: Client,
  id: string,
  options: WidgetsAnalyzeWidgetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/widgets/{id}/analyze",
    {
      id: id,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _analyzeWidgetDeserialize(
  result: PathUncheckedResponse,
): Promise<AnalyzeResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = widgetErrorDeserializer(result.body);
    throw error;
  }

  return analyzeResultDeserializer(result.body);
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

export function _deleteWidgetSend(
  context: Client,
  id: string,
  options: WidgetsDeleteWidgetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/widgets/{id}",
    {
      id: id,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _deleteWidgetDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = widgetErrorDeserializer(result.body);
    throw error;
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

export function _updateWidgetSend(
  context: Client,
  id: string,
  options: WidgetsUpdateWidgetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/widgets/{id}",
    {
      id: id,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: { weight: options?.weight, color: options?.color },
    });
}

export async function _updateWidgetDeserialize(
  result: PathUncheckedResponse,
): Promise<Widget> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = widgetErrorDeserializer(result.body);
    throw error;
  }

  return widgetDeserializer(result.body);
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

export function _createOrReplaceSend(
  context: Client,
  name: string,
  resource: User,
  options: WidgetsCreateOrReplaceOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/widgets/widgets/createOrReplace/users/{name}{?api-version}",
    {
      name: name,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: userSerializer(resource),
    });
}

export async function _createOrReplaceDeserialize(
  result: PathUncheckedResponse,
): Promise<User> {
  const expectedStatuses = ["201", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return userDeserializer(result.body);
}

/** Long-running resource create or replace operation template. */
export function createOrReplace(
  context: Client,
  name: string,
  resource: User,
  options: WidgetsCreateOrReplaceOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<User>, User> {
  return getLongRunningPoller(
    context,
    _createOrReplaceDeserialize,
    ["201", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _createOrReplaceSend(context, name, resource, options),
      resourceLocationConfig: "original-uri",
    },
  ) as PollerLike<OperationState<User>, User>;
}

export function _createWidgetSend(
  context: Client,
  weight: number,
  color: "red" | "blue",
  options: WidgetsCreateWidgetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path("/widgets")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: { weight: weight, color: color },
    });
}

export async function _createWidgetDeserialize(
  result: PathUncheckedResponse,
): Promise<Widget> {
  const expectedStatuses = ["201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = widgetErrorDeserializer(result.body);
    throw error;
  }

  return widgetDeserializer(result.body);
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

export function _getWidgetSend(
  context: Client,
  id: string,
  options: WidgetsGetWidgetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/widgets/{id}",
    {
      id: id,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getWidgetDeserialize(
  result: PathUncheckedResponse,
): Promise<Widget> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = widgetErrorDeserializer(result.body);
    throw error;
  }

  return widgetDeserializer(result.body);
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

export function _queryWidgetsPagesSend(
  context: Client,
  page: number,
  pageSize: number,
  options: WidgetsQueryWidgetsPagesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/widgets/widgets/pages{?page,pageSize}",
    {
      page: page,
      pageSize: pageSize,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _queryWidgetsPagesDeserialize(
  result: PathUncheckedResponse,
): Promise<_ListWidgetsPagesResults> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = widgetErrorDeserializer(result.body);
    throw error;
  }

  return _listWidgetsPagesResultsDeserializer(result.body);
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
    ["200"],
    { itemName: "results", nextLinkName: "odata.nextLink" },
  );
}

export function _listWidgetsPagesSend(
  context: Client,
  page: number,
  pageSize: number,
  options: WidgetsListWidgetsPagesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/widgets/widgets/pages{?page,pageSize}",
    {
      page: page,
      pageSize: pageSize,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listWidgetsPagesDeserialize(
  result: PathUncheckedResponse,
): Promise<_ListWidgetsPagesResults> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = widgetErrorDeserializer(result.body);
    throw error;
  }

  return _listWidgetsPagesResultsDeserializer(result.body);
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
    ["200"],
    { itemName: "results", nextLinkName: "odata.nextLink" },
  );
}

export function _listWidgetsSend(
  context: Client,
  requiredHeader: string,
  bytesHeader: Uint8Array,
  value: Uint8Array,
  csvArrayHeader: Uint8Array[],
  utcDateHeader: Date,
  options: WidgetsListWidgetsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context.path("/widgets").get({
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
        csvArrayHeader.map((p: any) => {
          return uint8ArrayToString(p, "base64url");
        }),
      ),
      "utc-date-header": utcDateHeader.toUTCString(),
      ...(options?.optionalDateHeader !== undefined
        ? {
            "optional-date-header": !options?.optionalDateHeader
              ? options?.optionalDateHeader
              : options?.optionalDateHeader.toUTCString(),
          }
        : {}),
      ...(options?.nullableDateHeader !== undefined &&
      options?.nullableDateHeader !== null
        ? {
            "nullable-date-header": !options?.nullableDateHeader
              ? options?.nullableDateHeader
              : options?.nullableDateHeader.toUTCString(),
          }
        : {}),
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _listWidgetsDeserialize(
  result: PathUncheckedResponse,
): Promise<Widget[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = widgetErrorDeserializer(result.body);
    throw error;
  }

  return widgetArrayDeserializer(result.body);
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
