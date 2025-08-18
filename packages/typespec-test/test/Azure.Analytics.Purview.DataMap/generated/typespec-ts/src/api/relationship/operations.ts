// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { PurviewDataMapContext as Client } from "../index.js";
import {
  atlasErrorResponseDeserializer,
  AtlasRelationship,
  atlasRelationshipSerializer,
  atlasRelationshipDeserializer,
  AtlasRelationshipWithExtInfo,
  atlasRelationshipWithExtInfoDeserializer,
} from "../../models/models.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  RelationshipDeleteOptionalParams,
  RelationshipGetOptionalParams,
  RelationshipUpdateOptionalParams,
  RelationshipCreateOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _$deleteSend(
  context: Client,
  guid: string,
  options: RelationshipDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/relationship/guid/{guid}",
    {
      guid: guid,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a relationship between entities by its GUID. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  guid: string,
  options: RelationshipDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _$deleteSend(context, guid, options);
  return _$deleteDeserialize(result);
}

export function _getSend(
  context: Client,
  guid: string,
  options: RelationshipGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/relationship/guid/{guid}{?extendedInfo}",
    {
      guid: guid,
      extendedInfo: options?.extendedInfo,
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
): Promise<AtlasRelationshipWithExtInfo> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasRelationshipWithExtInfoDeserializer(result.body);
}

/** Get relationship information between entities by its GUID. */
export async function get(
  context: Client,
  guid: string,
  options: RelationshipGetOptionalParams = { requestOptions: {} },
): Promise<AtlasRelationshipWithExtInfo> {
  const result = await _getSend(context, guid, options);
  return _getDeserialize(result);
}

export function _updateSend(
  context: Client,
  body: AtlasRelationship,
  options: RelationshipUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path("/atlas/v2/relationship")
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: atlasRelationshipSerializer(body),
    });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasRelationship> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasRelationshipDeserializer(result.body);
}

/** Update an existing relationship between entities. */
export async function update(
  context: Client,
  body: AtlasRelationship,
  options: RelationshipUpdateOptionalParams = { requestOptions: {} },
): Promise<AtlasRelationship> {
  const result = await _updateSend(context, body, options);
  return _updateDeserialize(result);
}

export function _createSend(
  context: Client,
  body: AtlasRelationship,
  options: RelationshipCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path("/atlas/v2/relationship")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: atlasRelationshipSerializer(body),
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasRelationship> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasRelationshipDeserializer(result.body);
}

/** Create a new relationship between entities. */
export async function create(
  context: Client,
  body: AtlasRelationship,
  options: RelationshipCreateOptionalParams = { requestOptions: {} },
): Promise<AtlasRelationship> {
  const result = await _createSend(context, body, options);
  return _createDeserialize(result);
}
