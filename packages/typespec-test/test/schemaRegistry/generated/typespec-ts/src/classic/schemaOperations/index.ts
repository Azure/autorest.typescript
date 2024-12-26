// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SchemaRegistryContext } from "../../api/schemaRegistryContext.js";
import {
  registerSchema,
  getSchemaIdByContent,
  getSchemaByVersion,
  listSchemaVersions,
  getSchemaById,
  listSchemaGroups,
} from "../../api/schemaOperations/index.js";
import {
  SchemaGroup,
  SchemaVersion,
  SchemaContentTypeValues,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import {
  SchemaOperationsRegisterSchemaOptionalParams,
  SchemaOperationsGetSchemaIdByContentOptionalParams,
  SchemaOperationsGetSchemaByVersionOptionalParams,
  SchemaOperationsListSchemaVersionsOptionalParams,
  SchemaOperationsGetSchemaByIdOptionalParams,
  SchemaOperationsListSchemaGroupsOptionalParams,
} from "../../api/options.js";

/** Interface representing a SchemaOperations operations. */
export interface SchemaOperationsOperations {
  /** Register new schema. If schema of specified name does not exist in specified group, schema is created at version 1. If schema of specified name exists already in specified group, schema is created at latest version + 1. */
  registerSchema: (
    groupName: string,
    name: string,
    content: Uint8Array,
    contentType: SchemaContentTypeValues,
    options?: SchemaOperationsRegisterSchemaOptionalParams,
  ) => Promise<void>;
  /** Gets the ID referencing an existing schema within the specified schema group, as matched by schema content comparison. */
  getSchemaIdByContent: (
    groupName: string,
    name: string,
    contentType: SchemaContentTypeValues,
    schemaContent: Uint8Array,
    options?: SchemaOperationsGetSchemaIdByContentOptionalParams,
  ) => Promise<void>;
  /** Gets one specific version of one schema. */
  getSchemaByVersion: (
    groupName: string,
    name: string,
    schemaVersion: number,
    options?: SchemaOperationsGetSchemaByVersionOptionalParams,
  ) => Promise<Uint8Array>;
  /** Gets the list of all versions of one schema. */
  listSchemaVersions: (
    groupName: string,
    name: string,
    options?: SchemaOperationsListSchemaVersionsOptionalParams,
  ) => PagedAsyncIterableIterator<SchemaVersion>;
  /** Gets a registered schema by its unique ID.  Azure Schema Registry guarantees that ID is unique within a namespace. Operation response type is based on serialization of schema requested. */
  getSchemaById: (
    id: string,
    options?: SchemaOperationsGetSchemaByIdOptionalParams,
  ) => Promise<Uint8Array>;
  /** Gets the list of schema groups user is authorized to access. */
  listSchemaGroups: (
    options?: SchemaOperationsListSchemaGroupsOptionalParams,
  ) => PagedAsyncIterableIterator<SchemaGroup>;
}

export function getSchemaOperations(context: SchemaRegistryContext) {
  return {
    registerSchema: (
      groupName: string,
      name: string,
      content: Uint8Array,
      contentType: SchemaContentTypeValues,
      options?: SchemaOperationsRegisterSchemaOptionalParams,
    ) =>
      registerSchema(context, groupName, name, content, contentType, options),
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
    getSchemaByVersion: (
      groupName: string,
      name: string,
      schemaVersion: number,
      options?: SchemaOperationsGetSchemaByVersionOptionalParams,
    ) => getSchemaByVersion(context, groupName, name, schemaVersion, options),
    listSchemaVersions: (
      groupName: string,
      name: string,
      options?: SchemaOperationsListSchemaVersionsOptionalParams,
    ) => listSchemaVersions(context, groupName, name, options),
    getSchemaById: (
      id: string,
      options?: SchemaOperationsGetSchemaByIdOptionalParams,
    ) => getSchemaById(context, id, options),
    listSchemaGroups: (
      options?: SchemaOperationsListSchemaGroupsOptionalParams,
    ) => listSchemaGroups(context, options),
  };
}

export function getSchemaOperationsOperations(
  context: SchemaRegistryContext,
): SchemaOperationsOperations {
  return {
    ...getSchemaOperations(context),
  };
}
