// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  NetworkAnalyticsContext as Client,
  ListByDataProductListByDataProductOptionalParams,
} from "../index.js";
import { dataTypeArrayDeserializer } from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { json } from "stream/consumers";

export function _listByDataProductSend(
  context: Client,
  resourceGroupName: string,
  dataProductName: string,
  options: ListByDataProductListByDataProductOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/dataTypes",
      subscriptionId,
      resourceGroupName,
      dataProductName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { listByDataProductContentType: application / json },
    });
}

export async function _listByDataProductDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return dataTypeArrayDeserializer(result.body);
}

/** List data type by parent resource. */
export function listByDataProduct(
  context: Client,
  resourceGroupName: string,
  dataProductName: string,
  options: ListByDataProductListByDataProductOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<void> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByDataProductSend(
        context,
        resourceGroupName,
        dataProductName,
        options,
      ),
    _listByDataProductDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
