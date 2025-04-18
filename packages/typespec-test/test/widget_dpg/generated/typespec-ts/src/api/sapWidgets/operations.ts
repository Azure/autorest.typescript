// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SAPWidgetServiceContext as Client } from "../index.js";
import {
  Widget,
  widgetDeserializer,
  widgetErrorDeserializer,
  _ListWidgetsPagesResults,
  _listWidgetsPagesResultsDeserializer,
  widgetArrayDeserializer,
  SAPUser,
  sapUserSerializer,
  sapUserDeserializer,
  AnalyzeResult,
  analyzeResultDeserializer,
} from "../../models/models.js";
import {
  SAPWidgetsAnalyzeWidgetOptionalParams,
  SAPWidgetsDeleteWidgetOptionalParams,
  SAPWidgetsUpdateWidgetOptionalParams,
  SAPWidgetsCreateOrReplaceOptionalParams,
  SAPWidgetsCreateWidgetOptionalParams,
  SAPWidgetsGetWidgetOptionalParams,
  SAPWidgetsQueryWidgetsPagesOptionalParams,
  SAPWidgetsListWidgetsPagesOptionalParams,
  SAPWidgetsSAPListWidgetsOptionalParams,
} from "./options.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
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

export function _analyzeWidgetSend(
  context: Client,
  id: string,
  options: SAPWidgetsAnalyzeWidgetOptionalParams = { requestOptions: {} },
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
  options: SAPWidgetsAnalyzeWidgetOptionalParams = { requestOptions: {} },
): Promise<AnalyzeResult> {
  const result = await _analyzeWidgetSend(context, id, options);
  return _analyzeWidgetDeserialize(result);
}

export function _deleteWidgetSend(
  context: Client,
  id: string,
  options: SAPWidgetsDeleteWidgetOptionalParams = { requestOptions: {} },
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
  options: SAPWidgetsDeleteWidgetOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteWidgetSend(context, id, options);
  return _deleteWidgetDeserialize(result);
}

export function _updateWidgetSend(
  context: Client,
  id: string,
  options: SAPWidgetsUpdateWidgetOptionalParams = { requestOptions: {} },
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
      body: !options["updateWidgetRequest"]
        ? options["updateWidgetRequest"]
        : { weight: options?.weight, color: options?.color },
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
  options: SAPWidgetsUpdateWidgetOptionalParams = { requestOptions: {} },
): Promise<Widget> {
  const result = await _updateWidgetSend(context, id, options);
  return _updateWidgetDeserialize(result);
}

export function _createOrReplaceSend(
  context: Client,
  name: string,
  resource: SAPUser,
  options: SAPWidgetsCreateOrReplaceOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/widgets/widgets/createOrReplace/users/{name}{?api%2Dversion}",
    {
      name: name,
      "api%2Dversion": context.apiVersion,
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
      body: sapUserSerializer(resource),
    });
}

export async function _createOrReplaceDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPUser> {
  const expectedStatuses = ["201", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return sapUserDeserializer(result.body);
}

/** Long-running resource create or replace operation template. */
export function createOrReplace(
  context: Client,
  name: string,
  resource: SAPUser,
  options: SAPWidgetsCreateOrReplaceOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<SAPUser>, SAPUser> {
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
  ) as PollerLike<OperationState<SAPUser>, SAPUser>;
}

export function _createWidgetSend(
  context: Client,
  weight: number,
  color: "red" | "blue",
  options: SAPWidgetsCreateWidgetOptionalParams = { requestOptions: {} },
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
  options: SAPWidgetsCreateWidgetOptionalParams = { requestOptions: {} },
): Promise<Widget> {
  const result = await _createWidgetSend(context, weight, color, options);
  return _createWidgetDeserialize(result);
}

export function _getWidgetSend(
  context: Client,
  id: string,
  options: SAPWidgetsGetWidgetOptionalParams = { requestOptions: {} },
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
  options: SAPWidgetsGetWidgetOptionalParams = { requestOptions: {} },
): Promise<Widget> {
  const result = await _getWidgetSend(context, id, options);
  return _getWidgetDeserialize(result);
}

export function _queryWidgetsPagesSend(
  context: Client,
  page: number,
  pageSize: number,
  options: SAPWidgetsQueryWidgetsPagesOptionalParams = { requestOptions: {} },
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
  options: SAPWidgetsQueryWidgetsPagesOptionalParams = { requestOptions: {} },
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
  options: SAPWidgetsListWidgetsPagesOptionalParams = { requestOptions: {} },
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
  options: SAPWidgetsListWidgetsPagesOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Widget> {
  return buildPagedAsyncIterator(
    context,
    () => _listWidgetsPagesSend(context, page, pageSize, options),
    _listWidgetsPagesDeserialize,
    ["200"],
    { itemName: "results", nextLinkName: "odata.nextLink" },
  );
}

export function _sapListWidgetsSend(
  context: Client,
  requiredHeader: string,
  bytesHeader: Uint8Array,
  value: Uint8Array,
  csvArrayHeader: Uint8Array[],
  utcDateHeader: Date,
  options: SAPWidgetsSAPListWidgetsOptionalParams = { requestOptions: {} },
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

export async function _sapListWidgetsDeserialize(
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
export async function sapListWidgets(
  context: Client,
  requiredHeader: string,
  bytesHeader: Uint8Array,
  value: Uint8Array,
  csvArrayHeader: Uint8Array[],
  utcDateHeader: Date,
  options: SAPWidgetsSAPListWidgetsOptionalParams = { requestOptions: {} },
): Promise<Widget[]> {
  const result = await _sapListWidgetsSend(
    context,
    requiredHeader,
    bytesHeader,
    value,
    csvArrayHeader,
    utcDateHeader,
    options,
  );
  return _sapListWidgetsDeserialize(result);
}
