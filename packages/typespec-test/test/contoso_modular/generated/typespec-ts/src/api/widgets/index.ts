// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Widget,
  ResourceOperationStatus,
  OperationStatus,
  PagedWidget,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  CreateOrUpdateWidget200Response,
  CreateOrUpdateWidget201Response,
  CreateOrUpdateWidgetDefaultResponse,
  CreateOrUpdateWidgetLogicalResponse,
  DeleteWidget202Response,
  DeleteWidgetDefaultResponse,
  DeleteWidgetLogicalResponse,
  GetWidget200Response,
  GetWidgetDefaultResponse,
  GetWidgetOperationStatus200Response,
  GetWidgetOperationStatusDefaultResponse,
  isUnexpected,
  ListWidgets200Response,
  ListWidgetsDefaultResponse,
  WidgetManagerContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  WidgetsGetWidgetOptions,
  WidgetsGetWidgetOperationStatusOptions,
  WidgetsCreateOrUpdateWidgetOptions,
  WidgetsDeleteWidgetOptions,
  WidgetsListWidgetsOptions,
} from "../../models/options.js";

export function _getWidgetSend(
  context: Client,
  widgetName: string,
  options: WidgetsGetWidgetOptions = { requestOptions: {} },
): StreamableMethod<GetWidget200Response | GetWidgetDefaultResponse> {
  return context
    .path("/widgets/{widgetName}", widgetName)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getWidgetDeserialize(
  result: GetWidget200Response | GetWidgetDefaultResponse,
): Promise<Widget> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    name: result.body["name"],
    manufacturerId: result.body["manufacturerId"],
    sharedModel: !result.body.sharedModel
      ? undefined
      : {
          tag: result.body.sharedModel?.["tag"],
          createdDate: new Date(result.body.sharedModel?.["createdDate"]),
        },
  };
}

/** Fetch a Widget by name. */
export async function getWidget(
  context: Client,
  widgetName: string,
  options: WidgetsGetWidgetOptions = { requestOptions: {} },
): Promise<Widget> {
  const result = await _getWidgetSend(context, widgetName, options);
  return _getWidgetDeserialize(result);
}

export function _getWidgetOperationStatusSend(
  context: Client,
  widgetName: string,
  operationId: string,
  options: WidgetsGetWidgetOperationStatusOptions = { requestOptions: {} },
): StreamableMethod<
  GetWidgetOperationStatus200Response | GetWidgetOperationStatusDefaultResponse
> {
  return context
    .path(
      "/widgets/{widgetName}/operations/{operationId}",
      widgetName,
      operationId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getWidgetOperationStatusDeserialize(
  result:
    | GetWidgetOperationStatus200Response
    | GetWidgetOperationStatusDefaultResponse,
): Promise<ResourceOperationStatus> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    status: result.body["status"],
    error: !result.body.error ? undefined : result.body.error,
    result: !result.body.result
      ? undefined
      : {
          name: result.body.result?.["name"],
          manufacturerId: result.body.result?.["manufacturerId"],
          sharedModel: !result.body.result?.sharedModel
            ? undefined
            : {
                tag: result.body.result?.sharedModel?.["tag"],
                createdDate: new Date(
                  result.body.result?.sharedModel?.["createdDate"],
                ),
              },
        },
  };
}

/** Gets status of a Widget operation. */
export async function getWidgetOperationStatus(
  context: Client,
  widgetName: string,
  operationId: string,
  options: WidgetsGetWidgetOperationStatusOptions = { requestOptions: {} },
): Promise<ResourceOperationStatus> {
  const result = await _getWidgetOperationStatusSend(
    context,
    widgetName,
    operationId,
    options,
  );
  return _getWidgetOperationStatusDeserialize(result);
}

export function _createOrUpdateWidgetSend(
  context: Client,
  widgetName: string,
  resource: Widget,
  options: WidgetsCreateOrUpdateWidgetOptions = { requestOptions: {} },
): StreamableMethod<
  | CreateOrUpdateWidget200Response
  | CreateOrUpdateWidget201Response
  | CreateOrUpdateWidgetDefaultResponse
  | CreateOrUpdateWidgetLogicalResponse
> {
  return context
    .path("/widgets/{widgetName}", widgetName)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: {
        manufacturerId: resource["manufacturerId"],
        sharedModel: !resource.sharedModel
          ? undefined
          : {
              tag: resource.sharedModel?.["tag"],
              createdDate: resource.sharedModel?.["createdDate"].toISOString(),
            },
      },
    });
}

export async function _createOrUpdateWidgetDeserialize(
  result:
    | CreateOrUpdateWidget200Response
    | CreateOrUpdateWidget201Response
    | CreateOrUpdateWidgetDefaultResponse
    | CreateOrUpdateWidgetLogicalResponse,
): Promise<Widget> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    name: result.body["name"],
    manufacturerId: result.body["manufacturerId"],
    sharedModel: !result.body.sharedModel
      ? undefined
      : {
          tag: result.body.sharedModel?.["tag"],
          createdDate: new Date(result.body.sharedModel?.["createdDate"]),
        },
  };
}

/** Creates or updates a Widget asynchronously. */
export async function createOrUpdateWidget(
  context: Client,
  widgetName: string,
  resource: Widget,
  options: WidgetsCreateOrUpdateWidgetOptions = { requestOptions: {} },
): Promise<Widget> {
  const result = await _createOrUpdateWidgetSend(
    context,
    widgetName,
    resource,
    options,
  );
  return _createOrUpdateWidgetDeserialize(result);
}

export function _deleteWidgetSend(
  context: Client,
  widgetName: string,
  options: WidgetsDeleteWidgetOptions = { requestOptions: {} },
): StreamableMethod<
  | DeleteWidget202Response
  | DeleteWidgetDefaultResponse
  | DeleteWidgetLogicalResponse
> {
  return context
    .path("/widgets/{widgetName}", widgetName)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteWidgetDeserialize(
  result:
    | DeleteWidget202Response
    | DeleteWidgetDefaultResponse
    | DeleteWidgetLogicalResponse,
): Promise<OperationStatus> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    status: result.body["status"],
    error: !result.body.error ? undefined : result.body.error,
  };
}

/** Delete a Widget asynchronously. */
export async function deleteWidget(
  context: Client,
  widgetName: string,
  options: WidgetsDeleteWidgetOptions = { requestOptions: {} },
): Promise<OperationStatus> {
  const result = await _deleteWidgetSend(context, widgetName, options);
  return _deleteWidgetDeserialize(result);
}

export function _listWidgetsSend(
  context: Client,
  options: WidgetsListWidgetsOptions = { requestOptions: {} },
): StreamableMethod<ListWidgets200Response | ListWidgetsDefaultResponse> {
  return context
    .path("/widgets")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listWidgetsDeserialize(
  result: ListWidgets200Response | ListWidgetsDefaultResponse,
): Promise<PagedWidget> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      name: p["name"],
      manufacturerId: p["manufacturerId"],
      sharedModel: !p.sharedModel
        ? undefined
        : {
            tag: p.sharedModel?.["tag"],
            createdDate: new Date(p.sharedModel?.["createdDate"]),
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List Widget resources */
export function listWidgets(
  context: Client,
  options: WidgetsListWidgetsOptions = { requestOptions: {} },
): PagedAsyncIterableIterator<Widget> {
  return buildPagedAsyncIterator(
    context,
    () => _listWidgetsSend(context, options),
    _listWidgetsDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
