// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WebContext as Client } from "../index.js";
import { siteArrayDeserializer, Site, errorResponseDeserializer } from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
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

export async function _suspendDeserialize(result: PathUncheckedResponse): Promise<Site[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  if (result?.body?.value === undefined) {
    throw createRestError(
      `Expected a result in the response at position "result.body.value"`,
      result,
    );
  }

  return siteArrayDeserializer(result.body.value);
}

/** A long-running resource action. */
export function suspend(
  context: Client,
  resourceGroupName: string,
  name: string,
  options: SitesSuspendOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Site> {
  const poller = getLongRunningPoller(context, _suspendDeserialize, ["200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _suspendSend(context, resourceGroupName, name, options),
    resourceLocationConfig: "location",
  });

  const getInitialResponseForPaging = async () => {
    const lroResult = await poller.pollUntilDone();
    // The LRO result contains the first page of results. We need to wrap it in a
    // PathUncheckedResponse-like object that buildPagedAsyncIterator expects.
    // The status is hardcoded to "200" because a successful LRO completion means
    // we have a successful response with the first page.
    return {
      status: "200",
      body: lroResult,
    } as any;
  };

  return buildPagedAsyncIterator(
    context,
    getInitialResponseForPaging,
    async (result) => result.body,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
