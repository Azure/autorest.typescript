// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Widget,
  ListWidgetsPagesResults,
  CreateWidget,
  UpdateWidget,
  AnalyzeResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  AnalyzeWidget200Response,
  AnalyzeWidgetDefaultResponse,
  buildCsvCollection,
  CreateWidget201Response,
  CreateWidgetDefaultResponse,
  DeleteWidget204Response,
  DeleteWidgetDefaultResponse,
  GetWidget200Response,
  GetWidgetDefaultResponse,
  isUnexpected,
  ListWidgets200Response,
  ListWidgetsDefaultResponse,
  ListWidgetsPages200Response,
  ListWidgetsPagesDefaultResponse,
  QueryWidgetsPages200Response,
  QueryWidgetsPagesDefaultResponse,
  UpdateWidget200Response,
  UpdateWidgetDefaultResponse,
  WidgetServiceContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { uint8ArrayToString } from "@azure/core-util";
import {
  WidgetsListWidgetsOptions,
  WidgetsListWidgetsPagesOptions,
  WidgetsQueryWidgetsPagesOptions,
  WidgetsGetWidgetOptions,
  WidgetsCreateWidgetOptions,
  WidgetsUpdateWidgetOptions,
  WidgetsDeleteWidgetOptions,
  WidgetsAnalyzeWidgetOptions,
} from "../../models/options.js";

export function _listWidgetsSend(
  context: Client,
  requiredHeader: string,
  bytesHeader: Uint8Array,
  value: Uint8Array,
  csvArrayHeader: Uint8Array[],
  utcDateHeader: Date,
  options: WidgetsListWidgetsOptions = { requestOptions: {} },
): StreamableMethod<ListWidgets200Response | ListWidgetsDefaultResponse> {
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
  result: ListWidgets200Response | ListWidgetsDefaultResponse,
): Promise<Widget[]> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return !result.body
    ? result.body
    : result.body.map((p) => ({
        id: p["id"],
        weight: p["weight"],
        color: p["color"],
      }));
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
  options: WidgetsListWidgetsOptions = { requestOptions: {} },
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
  options: WidgetsListWidgetsPagesOptions = { requestOptions: {} },
): StreamableMethod<
  ListWidgetsPages200Response | ListWidgetsPagesDefaultResponse
> {
  return context
    .path("/widgets/widgets/pages")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { page: page, pageSize: pageSize },
    });
}

export async function _listWidgetsPagesDeserialize(
  result: ListWidgetsPages200Response | ListWidgetsPagesDefaultResponse,
): Promise<ListWidgetsPagesResults> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    results: result.body["results"].map((p) => ({
      id: p["id"],
      weight: p["weight"],
      color: p["color"],
    })),
    "odata.nextLink": result.body["odata.nextLink"],
  };
}

export function listWidgetsPages(
  context: Client,
  page: number,
  pageSize: number,
  options: WidgetsListWidgetsPagesOptions = { requestOptions: {} },
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
  options: WidgetsQueryWidgetsPagesOptions = { requestOptions: {} },
): StreamableMethod<
  QueryWidgetsPages200Response | QueryWidgetsPagesDefaultResponse
> {
  return context
    .path("/widgets/widgets/pages")
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { page: page, pageSize: pageSize },
    });
}

export async function _queryWidgetsPagesDeserialize(
  result: QueryWidgetsPages200Response | QueryWidgetsPagesDefaultResponse,
): Promise<ListWidgetsPagesResults> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    results: result.body["results"].map((p) => ({
      id: p["id"],
      weight: p["weight"],
      color: p["color"],
    })),
    "odata.nextLink": result.body["odata.nextLink"],
  };
}

export function queryWidgetsPages(
  context: Client,
  page: number,
  pageSize: number,
  options: WidgetsQueryWidgetsPagesOptions = { requestOptions: {} },
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
  options: WidgetsGetWidgetOptions = { requestOptions: {} },
): StreamableMethod<GetWidget200Response | GetWidgetDefaultResponse> {
  return context
    .path("/widgets/{id}", id)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getWidgetDeserialize(
  result: GetWidget200Response | GetWidgetDefaultResponse,
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
  options: WidgetsGetWidgetOptions = { requestOptions: {} },
): Promise<Widget> {
  const result = await _getWidgetSend(context, id, options);
  return _getWidgetDeserialize(result);
}

export function _createWidgetSend(
  context: Client,
  body: CreateWidget,
  options: WidgetsCreateWidgetOptions = { requestOptions: {} },
): StreamableMethod<CreateWidget201Response | CreateWidgetDefaultResponse> {
  return context
    .path("/widgets")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { weight: body["weight"], color: body["color"] },
    });
}

export async function _createWidgetDeserialize(
  result: CreateWidget201Response | CreateWidgetDefaultResponse,
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
  body: CreateWidget,
  options: WidgetsCreateWidgetOptions = { requestOptions: {} },
): Promise<Widget> {
  const result = await _createWidgetSend(context, body, options);
  return _createWidgetDeserialize(result);
}

export function _updateWidgetSend(
  context: Client,
  id: string,
  body: UpdateWidget,
  options: WidgetsUpdateWidgetOptions = { requestOptions: {} },
): StreamableMethod<UpdateWidget200Response | UpdateWidgetDefaultResponse> {
  return context
    .path("/widgets/{id}", id)
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: { weight: body["weight"], color: body["color"] },
    });
}

export async function _updateWidgetDeserialize(
  result: UpdateWidget200Response | UpdateWidgetDefaultResponse,
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
  body: UpdateWidget,
  options: WidgetsUpdateWidgetOptions = { requestOptions: {} },
): Promise<Widget> {
  const result = await _updateWidgetSend(context, id, body, options);
  return _updateWidgetDeserialize(result);
}

export function _deleteWidgetSend(
  context: Client,
  id: string,
  options: WidgetsDeleteWidgetOptions = { requestOptions: {} },
): StreamableMethod<DeleteWidget204Response | DeleteWidgetDefaultResponse> {
  return context
    .path("/widgets/{id}", id)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteWidgetDeserialize(
  result: DeleteWidget204Response | DeleteWidgetDefaultResponse,
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
  options: WidgetsDeleteWidgetOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteWidgetSend(context, id, options);
  return _deleteWidgetDeserialize(result);
}

export function _analyzeWidgetSend(
  context: Client,
  id: string,
  options: WidgetsAnalyzeWidgetOptions = { requestOptions: {} },
): StreamableMethod<AnalyzeWidget200Response | AnalyzeWidgetDefaultResponse> {
  return context
    .path("/widgets/{id}/analyze", id)
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _analyzeWidgetDeserialize(
  result: AnalyzeWidget200Response | AnalyzeWidgetDefaultResponse,
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
  options: WidgetsAnalyzeWidgetOptions = { requestOptions: {} },
): Promise<AnalyzeResult> {
  const result = await _analyzeWidgetSend(context, id, options);
  return _analyzeWidgetDeserialize(result);
}
