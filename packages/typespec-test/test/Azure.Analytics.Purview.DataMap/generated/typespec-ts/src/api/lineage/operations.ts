// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { PurviewDataMapContext as Client } from "../index.js";
import {
  atlasErrorResponseDeserializer,
  AtlasLineageInfo,
  atlasLineageInfoDeserializer,
  LineageDirection,
} from "../../models/models.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  LineageGetByUniqueAttributeOptionalParams,
  LineageGetNextPageOptionalParams,
  LineageGetOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getByUniqueAttributeSend(
  context: Client,
  typeName: string,
  direction: LineageDirection,
  options: LineageGetByUniqueAttributeOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/lineage/uniqueAttribute/type/{typeName}{?depth,direction,attr%3AqualifiedName}",
    {
      typeName: typeName,
      depth: options?.depth,
      direction: direction,
      "attr%3AqualifiedName": options?.attribute,
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

export async function _getByUniqueAttributeDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasLineageInfo> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasLineageInfoDeserializer(result.body);
}

/**
 * Return lineage info about entity.
 *
 * In addition to the typeName path parameter,
 * attribute key-value pair(s) can be provided in the following
 * format
 *
 * attr:[attrName]=[attrValue]
 *
 * NOTE: The attrName and attrValue should be
 * unique across entities, eg. qualifiedName.
 *
 * The REST request would look
 * something like this:
 *
 * GET
 * /v2/lineage/uniqueAttribute/type/aType?attr:aTypeAttribute=someValue.
 */
export async function getByUniqueAttribute(
  context: Client,
  typeName: string,
  direction: LineageDirection,
  options: LineageGetByUniqueAttributeOptionalParams = { requestOptions: {} },
): Promise<AtlasLineageInfo> {
  const result = await _getByUniqueAttributeSend(
    context,
    typeName,
    direction,
    options,
  );
  return _getByUniqueAttributeDeserialize(result);
}

export function _getNextPageSend(
  context: Client,
  guid: string,
  direction: LineageDirection,
  options: LineageGetNextPageOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/lineage/{guid}/next{?api%2Dversion,direction,offset,limit}",
    {
      guid: guid,
      "api%2Dversion": context.apiVersion,
      direction: direction,
      offset: options?.offset,
      limit: options?.limit,
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

export async function _getNextPageDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasLineageInfo> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasLineageInfoDeserializer(result.body);
}

/** Return immediate next page lineage info about entity with pagination */
export async function getNextPage(
  context: Client,
  guid: string,
  direction: LineageDirection,
  options: LineageGetNextPageOptionalParams = { requestOptions: {} },
): Promise<AtlasLineageInfo> {
  const result = await _getNextPageSend(context, guid, direction, options);
  return _getNextPageDeserialize(result);
}

export function _getSend(
  context: Client,
  guid: string,
  direction: LineageDirection,
  options: LineageGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/lineage/{guid}{?depth,direction}",
    {
      guid: guid,
      depth: options?.depth,
      direction: direction,
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

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasLineageInfo> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasLineageInfoDeserializer(result.body);
}

/** Get lineage info of the entity specified by GUID. */
export async function get(
  context: Client,
  guid: string,
  direction: LineageDirection,
  options: LineageGetOptionalParams = { requestOptions: {} },
): Promise<AtlasLineageInfo> {
  const result = await _getSend(context, guid, direction, options);
  return _getDeserialize(result);
}
