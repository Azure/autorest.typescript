// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { SchemaRegistryClient } from "./schemaRegistryClient.js";
export type {
  SchemaGroup,
  SchemaVersion,
  SchemaProperties,
  SchemaFormat,
  Schema,
  SchemaContentTypeValues,
  ContentTypeEnum,
} from "./models/index.js";
export { KnownServiceApiVersions } from "./models/index.js";
export type { SchemaRegistryClientOptionalParams } from "./api/index.js";
export type {
  SchemaOperationsRegisterSchemaOptionalParams,
  SchemaOperationsGetSchemaIdByContentOptionalParams,
  SchemaOperationsGetSchemaByVersionOptionalParams,
  SchemaOperationsListSchemaVersionsOptionalParams,
  SchemaOperationsGetSchemaByIdOptionalParams,
  SchemaOperationsListSchemaGroupsOptionalParams,
} from "./api/schemaOperations/index.js";
export type { SchemaOperationsOperations } from "./classic/index.js";
export type { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
