// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createSchemaOperations,
  SchemaOperationsContext,
  SchemaOperationsOptionalParams,
} from "./api/index.js";
import { SchemaGroup, SchemaVersion, SchemaContentTypeValues } from "../models/models.js";
import { PagedAsyncIterableIterator } from "../static-helpers/pagingHelpers.js";
import {
  registerSchema,
  getSchemaIdByContent,
  getSchemaByVersion,
  listSchemaVersions,
  getSchemaById,
  listSchemaGroups,
} from "./api/operations.js";
import {
  RegisterSchemaOptionalParams,
  GetSchemaIdByContentOptionalParams,
  GetSchemaByVersionOptionalParams,
  ListSchemaVersionsOptionalParams,
  GetSchemaByIdOptionalParams,
  ListSchemaGroupsOptionalParams,
} from "./api/options.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { SchemaOperationsOptionalParams } from "./api/schemaOperationsContext.js";

export class SchemaOperations {
  private _client: SchemaOperationsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: TokenCredential,
    options: SchemaOperationsOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createSchemaOperations(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Register new schema. If schema of specified name does not exist in specified group, schema is created at version 1. If schema of specified name exists already in specified group, schema is created at latest version + 1. */
  registerSchema(
    groupName: string,
    name: string,
    content: Uint8Array,
    contentType: SchemaContentTypeValues,
    options: RegisterSchemaOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return registerSchema(this._client, groupName, name, content, contentType, options);
  }

  /** Gets the ID referencing an existing schema within the specified schema group, as matched by schema content comparison. */
  getSchemaIdByContent(
    groupName: string,
    name: string,
    contentType: SchemaContentTypeValues,
    schemaContent: Uint8Array,
    options: GetSchemaIdByContentOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return getSchemaIdByContent(this._client, groupName, name, contentType, schemaContent, options);
  }

  /** Gets one specific version of one schema. */
  getSchemaByVersion(
    groupName: string,
    name: string,
    schemaVersion: number,
    options: GetSchemaByVersionOptionalParams = { requestOptions: {} },
  ): Promise<Uint8Array> {
    return getSchemaByVersion(this._client, groupName, name, schemaVersion, options);
  }

  /** Gets the list of all versions of one schema. */
  listSchemaVersions(
    groupName: string,
    name: string,
    options: ListSchemaVersionsOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<SchemaVersion> {
    return listSchemaVersions(this._client, groupName, name, options);
  }

  /** Gets a registered schema by its unique ID.  Azure Schema Registry guarantees that ID is unique within a namespace. Operation response type is based on serialization of schema requested. */
  getSchemaById(
    id: string,
    options: GetSchemaByIdOptionalParams = { requestOptions: {} },
  ): Promise<Uint8Array> {
    return getSchemaById(this._client, id, options);
  }

  /** Gets the list of schema groups user is authorized to access. */
  listSchemaGroups(
    options: ListSchemaGroupsOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<SchemaGroup> {
    return listSchemaGroups(this._client, options);
  }
}
