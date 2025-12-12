// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WebContext as Client } from "../index.js";
import {
  _WebAppCollection,
  _webAppCollectionDeserializer,
  Site,
  errorResponseDeserializer,
} from "../../models/models.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import { SitesSuspendOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _suspendSend(
  context: Client,
  resourceGroupName: string,
  name: string,
  options: SitesSuspendOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/suspend{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      name: name,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _suspendDeserialize(
  result: PathUncheckedResponse,
): Promise<_WebAppCollection> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _webAppCollectionDeserializer(result.body);
}

/** A long-running resource action. */
export async function suspend(
  context: Client,
  resourceGroupName: string,
  name: string,
  options: SitesSuspendOptionalParams = { requestOptions: {} },
): Promise<Site[]> {
  const result = await _suspendSend(context, resourceGroupName, name, options);
  return _suspendDeserialize(result);
}
