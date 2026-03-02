// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export type {
  SchemaOperationsGetSchemaByVersionResponse,
  SchemaOperationsGetSchemaByIdResponse,
} from "./operations.js";
export {
  registerSchema,
  getSchemaIdByContent,
  getSchemaByVersion,
  listSchemaVersions,
  getSchemaById,
  listSchemaGroups,
} from "./operations.js";
export type {
  SchemaOperationsRegisterSchemaOptionalParams,
  SchemaOperationsGetSchemaIdByContentOptionalParams,
  SchemaOperationsGetSchemaByVersionOptionalParams,
  SchemaOperationsListSchemaVersionsOptionalParams,
  SchemaOperationsGetSchemaByIdOptionalParams,
  SchemaOperationsListSchemaGroupsOptionalParams,
} from "./options.js";
