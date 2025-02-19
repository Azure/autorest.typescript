// Licensed under the MIT License.

import {
  PageableContext as Client,
  ServerDrivenPaginationLinkOptionalParams,
} from "../index.js";
import { _linkResponseDeserializer } from "../../models/serverDrivenPagination/models.js";
import { Pet } from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

export function _linkSend(
  context: Client,
  options: ServerDrivenPaginationLinkOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/payload/pageable/server-driven-pagination/link")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _linkDeserialize(result: PathUncheckedResponse): Promise<{
  pets: Pet[];
  next?: string;
}> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _linkResponseDeserializer(result.body);
}

export function link(
  context: Client,
  options: ServerDrivenPaginationLinkOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Pet> {
  return buildPagedAsyncIterator(
    context,
    () => _linkSend(context, options),
    _linkDeserialize,
    ["200"],
    { itemName: "pets", nextLinkName: "next" },
  );
}
