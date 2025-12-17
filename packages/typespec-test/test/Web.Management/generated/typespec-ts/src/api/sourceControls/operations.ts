// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WebContext as Client } from "../index.js";
import {
  defaultErrorResponseDeserializer,
  SourceControl,
  sourceControlSerializer,
  sourceControlDeserializer,
  _SourceControlCollection,
  _sourceControlCollectionDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  SourceControlsListSourceControlsOptionalParams,
  SourceControlsUpdateSourceControlOptionalParams,
  SourceControlsGetSourceControlOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _listSourceControlsSend(
  context: Client,
  options: SourceControlsListSourceControlsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.Web/sourcecontrols{?api%2Dversion}",
    {
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
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _listSourceControlsDeserialize(
  result: PathUncheckedResponse,
): Promise<_SourceControlCollection> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = defaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return _sourceControlCollectionDeserializer(result.body);
}

/** Description for Gets the source controls available for Azure websites. */
export function listSourceControls(
  context: Client,
  options: SourceControlsListSourceControlsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<SourceControl> {
  return buildPagedAsyncIterator(
    context,
    () => _listSourceControlsSend(context, options),
    _listSourceControlsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _updateSourceControlSend(
  context: Client,
  sourceControlType: string,
  requestMessage: SourceControl,
  options: SourceControlsUpdateSourceControlOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.Web/sourcecontrols/{sourceControlType}{?api%2Dversion}",
    {
      sourceControlType: sourceControlType,
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
      headers: { accept: "application/json", ...options.requestOptions?.headers },
      body: sourceControlSerializer(requestMessage),
    });
}

export async function _updateSourceControlDeserialize(
  result: PathUncheckedResponse,
): Promise<SourceControl> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = defaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return sourceControlDeserializer(result.body);
}

/** Description for Updates source control token */
export async function updateSourceControl(
  context: Client,
  sourceControlType: string,
  requestMessage: SourceControl,
  options: SourceControlsUpdateSourceControlOptionalParams = { requestOptions: {} },
): Promise<SourceControl> {
  const result = await _updateSourceControlSend(
    context,
    sourceControlType,
    requestMessage,
    options,
  );
  return _updateSourceControlDeserialize(result);
}

export function _getSourceControlSend(
  context: Client,
  sourceControlType: string,
  options: SourceControlsGetSourceControlOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.Web/sourcecontrols/{sourceControlType}{?api%2Dversion}",
    {
      sourceControlType: sourceControlType,
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
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _getSourceControlDeserialize(
  result: PathUncheckedResponse,
): Promise<SourceControl> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = defaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return sourceControlDeserializer(result.body);
}

/** Description for Gets source control token */
export async function getSourceControl(
  context: Client,
  sourceControlType: string,
  options: SourceControlsGetSourceControlOptionalParams = { requestOptions: {} },
): Promise<SourceControl> {
  const result = await _getSourceControlSend(context, sourceControlType, options);
  return _getSourceControlDeserialize(result);
}
