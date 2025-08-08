// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MonitorQueryLogsContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  MetadataResults,
  metadataResultsDeserializer,
} from "../../models/models.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  MetadataPostOptionalParams,
  MetadataGetOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _postSend(
  context: Client,
  workspaceId: string,
  options: MetadataPostOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/workspaces/{workspaceId}/metadata",
    {
      workspaceId: workspaceId,
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

export async function _postDeserialize(
  result: PathUncheckedResponse,
): Promise<MetadataResults> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return metadataResultsDeserializer(result.body);
}

/**
 * Retrieve the metadata information for the workspace, including its schema,
 * functions, workspace info, categories etc.
 */
export async function post(
  context: Client,
  workspaceId: string,
  options: MetadataPostOptionalParams = { requestOptions: {} },
): Promise<MetadataResults> {
  const result = await _postSend(context, workspaceId, options);
  return _postDeserialize(result);
}

export function _getSend(
  context: Client,
  workspaceId: string,
  options: MetadataGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/workspaces/{workspaceId}/metadata",
    {
      workspaceId: workspaceId,
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
): Promise<MetadataResults> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return metadataResultsDeserializer(result.body);
}

/**
 * Retrieve the metadata information for the workspace, including its schema,
 * functions, workspace info, categories etc.
 */
export async function get(
  context: Client,
  workspaceId: string,
  options: MetadataGetOptionalParams = { requestOptions: {} },
): Promise<MetadataResults> {
  const result = await _getSend(context, workspaceId, options);
  return _getDeserialize(result);
}
