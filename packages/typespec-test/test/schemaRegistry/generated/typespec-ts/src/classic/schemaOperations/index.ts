// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SchemaRegistryContext } from "../../api/SchemaRegistryContext.js";
import {
  SchemaGroup,
  SchemaContentTypeValues,
  SchemaVersion,
} from "../../models/models.js";
import {
  listSchemaGroups,
  getSchemaById,
  listSchemaVersions,
  getSchemaByVersion,
  getSchemaIdByContent,
  registerSchema,
} from "../../api/schemaOperations/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  SchemaOperationsListSchemaGroupsOptionalParams,
  SchemaOperationsGetSchemaByIdOptionalParams,
  SchemaOperationsListSchemaVersionsOptionalParams,
  SchemaOperationsGetSchemaByVersionOptionalParams,
  SchemaOperationsGetSchemaIdByContentOptionalParams,
  SchemaOperationsRegisterSchemaOptionalParams,
} from "../../models/options.js";

export interface SchemaOperationsOperations {
  listSchemaGroups: (
    options?: SchemaOperationsListSchemaGroupsOptionalParams,
  ) => PagedAsyncIterableIterator<SchemaGroup>;
  getSchemaById: (
    id: string,
    options?: SchemaOperationsGetSchemaByIdOptionalParams,
  ) => Promise<Uint8Array>;
  listSchemaVersions: (
    groupName: string,
    name: string,
    options?: SchemaOperationsListSchemaVersionsOptionalParams,
  ) => PagedAsyncIterableIterator<SchemaVersion>;
  getSchemaByVersion: (
    groupName: string,
    name: string,
    schemaVersion: number,
    options?: SchemaOperationsGetSchemaByVersionOptionalParams,
  ) => Promise<Uint8Array>;
  getSchemaIdByContent: (
    groupName: string,
    name: string,
    contentType: SchemaContentTypeValues,
    schemaContent: Uint8Array,
    options?: SchemaOperationsGetSchemaIdByContentOptionalParams,
  ) => Promise<void>;
  registerSchema: (
    groupName: string,
    name: string,
    contentType: SchemaContentTypeValues,
    content: Uint8Array,
    options?: SchemaOperationsRegisterSchemaOptionalParams,
  ) => Promise<void>;
}

export function getSchemaOperations(context: SchemaRegistryContext) {
  return {
    listSchemaGroups: (
      options?: SchemaOperationsListSchemaGroupsOptionalParams,
    ) => listSchemaGroups(context, options),
    getSchemaById: (
      id: string,
      options?: SchemaOperationsGetSchemaByIdOptionalParams,
    ) => getSchemaById(context, id, options),
    listSchemaVersions: (
      groupName: string,
      name: string,
      options?: SchemaOperationsListSchemaVersionsOptionalParams,
    ) => listSchemaVersions(context, groupName, name, options),
    getSchemaByVersion: (
      groupName: string,
      name: string,
      schemaVersion: number,
      options?: SchemaOperationsGetSchemaByVersionOptionalParams,
    ) => getSchemaByVersion(context, groupName, name, schemaVersion, options),
    getSchemaIdByContent: (
      groupName: string,
      name: string,
      contentType: SchemaContentTypeValues,
      schemaContent: Uint8Array,
      options?: SchemaOperationsGetSchemaIdByContentOptionalParams,
    ) =>
      getSchemaIdByContent(
        context,
        groupName,
        name,
        contentType,
        schemaContent,
        options,
      ),
    registerSchema: (
      groupName: string,
      name: string,
      contentType: SchemaContentTypeValues,
      content: Uint8Array,
      options?: SchemaOperationsRegisterSchemaOptionalParams,
    ) =>
      registerSchema(context, groupName, name, contentType, content, options),
  };
}

export function getSchemaOperationsOperations(
  context: SchemaRegistryContext,
): SchemaOperationsOperations {
  return {
    ...getSchemaOperations(context),
  };
}
