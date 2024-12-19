// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  SchemaRegistryContext as Client,
  SchemaOperationsGetSchemaByIdOptionalParams,
  SchemaOperationsGetSchemaByVersionOptionalParams,
  SchemaOperationsGetSchemaIdByContentOptionalParams,
  SchemaOperationsListSchemaGroupsOptionalParams,
  SchemaOperationsListSchemaVersionsOptionalParams,
  SchemaOperationsRegisterSchemaOptionalParams,
} from "../index.js";
import {
  _PagedSchemaGroup,
  _pagedSchemaGroupDeserializer,
  SchemaGroup,
  _PagedVersion,
  _pagedVersionDeserializer,
  SchemaVersion,
  SchemaContentTypeValues,
} from "../../models/models.js";
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

export function _registerSchemaSend(
  context: Client,
  groupName: string,
  name: string,
  content: Uint8Array,
  contentType: SchemaContentTypeValues,
  options: SchemaOperationsRegisterSchemaOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/$schemaGroups/{groupName}/schemas/{name}", groupName, name)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: contentType,
      headers: { accept: "application/json" },
      body: content,
    });
}

export async function _registerSchemaDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Register new schema. If schema of specified name does not exist in specified group, schema is created at version 1. If schema of specified name exists already in specified group, schema is created at latest version + 1. */
export async function registerSchema(
  context: Client,
  groupName: string,
  name: string,
  content: Uint8Array,
  contentType: SchemaContentTypeValues,
  options: SchemaOperationsRegisterSchemaOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _registerSchemaSend(
    context,
    groupName,
    name,
    content,
    contentType,
    options,
  );
  return _registerSchemaDeserialize(result);
}

export function _getSchemaIdByContentSend(
  context: Client,
  groupName: string,
  name: string,
  contentType: SchemaContentTypeValues,
  schemaContent: Uint8Array,
  options: SchemaOperationsGetSchemaIdByContentOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/$schemaGroups/{groupName}/schemas/{name}:get-id", groupName, name)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: contentType,
      headers: { accept: "application/json" },
      body: schemaContent,
    });
}

export async function _getSchemaIdByContentDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Gets the ID referencing an existing schema within the specified schema group, as matched by schema content comparison. */
export async function getSchemaIdByContent(
  context: Client,
  groupName: string,
  name: string,
  contentType: SchemaContentTypeValues,
  schemaContent: Uint8Array,
  options: SchemaOperationsGetSchemaIdByContentOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _getSchemaIdByContentSend(
    context,
    groupName,
    name,
    contentType,
    schemaContent,
    options,
  );
  return _getSchemaIdByContentDeserialize(result);
}

export function _getSchemaByVersionSend(
  context: Client,
  groupName: string,
  name: string,
  schemaVersion: number,
  accept: string,
  options: SchemaOperationsGetSchemaByVersionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/$schemaGroups/{groupName}/schemas/{name}/versions/{schemaVersion}",
      groupName,
      name,
      schemaVersion,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { Accept: accept },
    });
}

export async function _getSchemaByVersionDeserialize(
  result: PathUncheckedResponse,
): Promise<Uint8Array> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

/** Gets one specific version of one schema. */
export async function getSchemaByVersion(
  context: Client,
  groupName: string,
  name: string,
  schemaVersion: number,
  accept: string,
  options: SchemaOperationsGetSchemaByVersionOptionalParams = {
    requestOptions: {},
  },
): Promise<Uint8Array> {
  const result = await _getSchemaByVersionSend(
    context,
    groupName,
    name,
    schemaVersion,
    accept,
    options,
  );
  return _getSchemaByVersionDeserialize(result);
}

export function _listSchemaVersionsSend(
  context: Client,
  groupName: string,
  name: string,
  options: SchemaOperationsListSchemaVersionsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/$schemaGroups/{groupName}/schemas/{name}/versions", groupName, name)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json" },
    });
}

export async function _listSchemaVersionsDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedVersion> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _pagedVersionDeserializer(result.body);
}

/** Gets the list of all versions of one schema. */
export function listSchemaVersions(
  context: Client,
  groupName: string,
  name: string,
  options: SchemaOperationsListSchemaVersionsOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<SchemaVersion> {
  return buildPagedAsyncIterator(
    context,
    () => _listSchemaVersionsSend(context, groupName, name, options),
    _listSchemaVersionsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getSchemaByIdSend(
  context: Client,
  id: string,
  accept: string,
  options: SchemaOperationsGetSchemaByIdOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/$schemaGroups/$schemas/{id}", id)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { Accept: accept },
    });
}

export async function _getSchemaByIdDeserialize(
  result: PathUncheckedResponse,
): Promise<Uint8Array> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

/** Gets a registered schema by its unique ID.  Azure Schema Registry guarantees that ID is unique within a namespace. Operation response type is based on serialization of schema requested. */
export async function getSchemaById(
  context: Client,
  id: string,
  accept: string,
  options: SchemaOperationsGetSchemaByIdOptionalParams = { requestOptions: {} },
): Promise<Uint8Array> {
  const result = await _getSchemaByIdSend(context, id, accept, options);
  return _getSchemaByIdDeserialize(result);
}

export function _listSchemaGroupsSend(
  context: Client,
  options: SchemaOperationsListSchemaGroupsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/$schemaGroups")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json" },
    });
}

export async function _listSchemaGroupsDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedSchemaGroup> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _pagedSchemaGroupDeserializer(result.body);
}

/** Gets the list of schema groups user is authorized to access. */
export function listSchemaGroups(
  context: Client,
  options: SchemaOperationsListSchemaGroupsOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<SchemaGroup> {
  return buildPagedAsyncIterator(
    context,
    () => _listSchemaGroupsSend(context, options),
    _listSchemaGroupsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
