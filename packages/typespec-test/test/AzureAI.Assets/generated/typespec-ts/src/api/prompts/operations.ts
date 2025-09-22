// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MachineLearningServicesContext as Client } from "../index.js";
import {
  VersionInfo,
  versionInfoDeserializer,
  Prompt,
  promptSerializer,
  promptDeserializer,
  _PagedPrompt,
  _pagedPromptDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  PromptsListLatestOptionalParams,
  PromptsGetNextVersionOptionalParams,
  PromptsGetLatestOptionalParams,
  PromptsListOptionalParams,
  PromptsCreateOrUpdateOptionalParams,
  PromptsGetOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _listLatestSend(
  context: Client,
  options: PromptsListLatestOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/prompts{?api%2Dversion,top,skip,maxpagesize}",
    {
      "api%2Dversion": context.apiVersion,
      top: options?.top,
      skip: options?.skip,
      maxpagesize: options?.maxpagesize,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
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

export async function _listLatestDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedPrompt> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _pagedPromptDeserializer(result.body);
}

/** List the latest version of each prompt. Latest is defined by most recent created by date. */
export function listLatest(
  context: Client,
  options: PromptsListLatestOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Prompt> {
  return buildPagedAsyncIterator(
    context,
    () => _listLatestSend(context, options),
    _listLatestDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getNextVersionSend(
  context: Client,
  name: string,
  options: PromptsGetNextVersionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/prompts/{name}:getNextVersion{?api%2Dversion}",
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
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getNextVersionDeserialize(
  result: PathUncheckedResponse,
): Promise<VersionInfo> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return versionInfoDeserializer(result.body);
}

/** Get next Prompt version as defined by the server. The server keeps track of all versions that are string-representations of integers. If one exists, the nextVersion will be a string representation of the highest integer value + 1. Otherwise, the nextVersion will default to '1'. */
export async function getNextVersion(
  context: Client,
  name: string,
  options: PromptsGetNextVersionOptionalParams = { requestOptions: {} },
): Promise<VersionInfo> {
  const result = await _getNextVersionSend(context, name, options);
  return _getNextVersionDeserialize(result);
}

export function _getLatestSend(
  context: Client,
  name: string,
  options: PromptsGetLatestOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/prompts/{name}{?api%2Dversion}",
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
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getLatestDeserialize(
  result: PathUncheckedResponse,
): Promise<Prompt> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return promptDeserializer(result.body);
}

/** Get latest version of the Prompt. Latest is defined by most recent created by date. */
export async function getLatest(
  context: Client,
  name: string,
  options: PromptsGetLatestOptionalParams = { requestOptions: {} },
): Promise<Prompt> {
  const result = await _getLatestSend(context, name, options);
  return _getLatestDeserialize(result);
}

export function _listSend(
  context: Client,
  name: string,
  listViewType: string,
  options: PromptsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/prompts/{name}/versions{?api%2Dversion,listViewType,orderby,tags,top,skip,maxpagesize}",
    {
      name: name,
      "api%2Dversion": context.apiVersion,
      listViewType: listViewType,
      orderby: options?.orderby,
      tags: options?.tags,
      top: options?.top,
      skip: options?.skip,
      maxpagesize: options?.maxpagesize,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
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

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedPrompt> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _pagedPromptDeserializer(result.body);
}

/** List the versions of a Prompt given the name. */
export function list(
  context: Client,
  name: string,
  listViewType: string,
  options: PromptsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Prompt> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, name, listViewType, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _createOrUpdateSend(
  context: Client,
  name: string,
  version: string,
  body: Prompt,
  options: PromptsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/prompts/{name}/versions/{version}{?api%2Dversion}",
    {
      name: name,
      version: version,
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
      body: promptSerializer(body),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Prompt> {
  const expectedStatuses = ["201", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return promptDeserializer(result.body);
}

/** Creates or updates a Prompt */
export async function createOrUpdate(
  context: Client,
  name: string,
  version: string,
  body: Prompt,
  options: PromptsCreateOrUpdateOptionalParams = { requestOptions: {} },
): Promise<Prompt> {
  const result = await _createOrUpdateSend(
    context,
    name,
    version,
    body,
    options,
  );
  return _createOrUpdateDeserialize(result);
}

export function _getSend(
  context: Client,
  name: string,
  version: string,
  options: PromptsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/prompts/{name}/versions/{version}{?api%2Dversion}",
    {
      name: name,
      version: version,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
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

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<Prompt> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return promptDeserializer(result.body);
}

/** Get a specific version of a Prompt. */
export async function get(
  context: Client,
  name: string,
  version: string,
  options: PromptsGetOptionalParams = { requestOptions: {} },
): Promise<Prompt> {
  const result = await _getSend(context, name, version, options);
  return _getDeserialize(result);
}
