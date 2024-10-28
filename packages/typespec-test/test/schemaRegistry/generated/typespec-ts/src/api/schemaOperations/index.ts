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
  SchemaGroup,
  SchemaVersion,
  SchemaContentTypeValues,
  _PagedSchemaGroup,
  _pagedSchemaGroupDeserializer,
  _PagedVersion,
  _pagedVersionDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { parseTemplate } from "../../static-helpers/uriTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { uint8ArrayToString, stringToUint8Array } from "@azure/core-util";

export function _listSchemaGroupsSend(
  context: Client,
  options: SchemaOperationsListSchemaGroupsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = "/$schemaGroups";
  return context
    .path(path)
    .get({ ...operationOptionsToRequestParameters(options) });
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

export function _getSchemaByIdSend(
  context: Client,
  id: string,
  options: SchemaOperationsGetSchemaByIdOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const pathParser = parseTemplate(
    "/$schemaGroups/$schemas/{id}{?api-version}",
  );
  const path = pathParser.expand({
    id: id,
  });
  return context
    .path(path)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getSchemaByIdDeserialize(
  result: PathUncheckedResponse,
): Promise<Uint8Array> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return typeof result.body === "string"
    ? stringToUint8Array(result.body, "base64")
    : result.body;
}

/** Gets a registered schema by its unique ID.  Azure Schema Registry guarantees that ID is unique within a namespace. Operation response type is based on serialization of schema requested. */
export async function getSchemaById(
  context: Client,
  id: string,
  options: SchemaOperationsGetSchemaByIdOptionalParams = { requestOptions: {} },
): Promise<Uint8Array> {
  const result = await _getSchemaByIdSend(context, id, options);
  return _getSchemaByIdDeserialize(result);
}

export function _listSchemaVersionsSend(
  context: Client,
  groupName: string,
  name: string,
  options: SchemaOperationsListSchemaVersionsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const pathParser = parseTemplate(
    "/$schemaGroups/{groupName}/schemas/{name}/versions{?api-version}",
  );
  const path = pathParser.expand({
    groupName: groupName,
    name: name,
  });
  return context
    .path(path)
    .get({ ...operationOptionsToRequestParameters(options) });
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

export function _getSchemaByVersionSend(
  context: Client,
  groupName: string,
  name: string,
  schemaVersion: number,
  options: SchemaOperationsGetSchemaByVersionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const pathParser = parseTemplate(
    "/$schemaGroups/{groupName}/schemas/{name}/versions/{schemaVersion}{?api-version}",
  );
  const path = pathParser.expand({
    groupName: groupName,
    name: name,
    schemaVersion: schemaVersion,
  });
  return context
    .path(path)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getSchemaByVersionDeserialize(
  result: PathUncheckedResponse,
): Promise<Uint8Array> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return typeof result.body === "string"
    ? stringToUint8Array(result.body, "base64")
    : result.body;
}

/** Gets one specific version of one schema. */
export async function getSchemaByVersion(
  context: Client,
  groupName: string,
  name: string,
  schemaVersion: number,
  options: SchemaOperationsGetSchemaByVersionOptionalParams = {
    requestOptions: {},
  },
): Promise<Uint8Array> {
  const result = await _getSchemaByVersionSend(
    context,
    groupName,
    name,
    schemaVersion,
    options,
  );
  return _getSchemaByVersionDeserialize(result);
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
  const pathParser = parseTemplate(
    "/$schemaGroups/{groupName}/schemas/{name}:get-id{?api-version}",
  );
  const path = pathParser.expand({
    groupName: groupName,
    name: name,
  });
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: contentType,
      body: uint8ArrayToString(schemaContent, "base64"),
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

export function _registerSchemaSend(
  context: Client,
  groupName: string,
  name: string,
  contentType: SchemaContentTypeValues,
  content: Uint8Array,
  options: SchemaOperationsRegisterSchemaOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const pathParser = parseTemplate(
    "/$schemaGroups/{groupName}/schemas/{name}{?api-version}",
  );
  const path = pathParser.expand({
    groupName: groupName,
    name: name,
  });
  return context
    .path(path)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: contentType,
      body: uint8ArrayToString(content, "base64"),
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
  contentType: SchemaContentTypeValues,
  content: Uint8Array,
  options: SchemaOperationsRegisterSchemaOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _registerSchemaSend(
    context,
    groupName,
    name,
    contentType,
    content,
    options,
  );
  return _registerSchemaDeserialize(result);
}
