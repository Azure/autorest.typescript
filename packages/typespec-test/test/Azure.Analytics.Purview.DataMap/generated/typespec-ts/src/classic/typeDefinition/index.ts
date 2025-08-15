// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DataMapContext } from "../../api/dataMapContext.js";
import {
  getTermTemplateByName,
  getTermTemplateById,
  getHeaders,
  batchDelete,
  batchUpdate,
  batchCreate,
  get,
  $delete,
  getByName,
  getById,
  getStructByName,
  getStructById,
  getRelationshipByName,
  getRelationshipById,
  getEnumByName,
  getEnumById,
  getEntityByName,
  getEntityById,
  getClassificationByName,
  getClassificationById,
  getBusinessMetadataByName,
  getBusinessMetadataById,
} from "../../api/typeDefinition/operations.js";
import {
  TypeDefinitionGetTermTemplateByNameOptionalParams,
  TypeDefinitionGetTermTemplateByIdOptionalParams,
  TypeDefinitionGetHeadersOptionalParams,
  TypeDefinitionBatchDeleteOptionalParams,
  TypeDefinitionBatchUpdateOptionalParams,
  TypeDefinitionBatchCreateOptionalParams,
  TypeDefinitionGetOptionalParams,
  TypeDefinitionDeleteOptionalParams,
  TypeDefinitionGetByNameOptionalParams,
  TypeDefinitionGetByIdOptionalParams,
  TypeDefinitionGetStructByNameOptionalParams,
  TypeDefinitionGetStructByIdOptionalParams,
  TypeDefinitionGetRelationshipByNameOptionalParams,
  TypeDefinitionGetRelationshipByIdOptionalParams,
  TypeDefinitionGetEnumByNameOptionalParams,
  TypeDefinitionGetEnumByIdOptionalParams,
  TypeDefinitionGetEntityByNameOptionalParams,
  TypeDefinitionGetEntityByIdOptionalParams,
  TypeDefinitionGetClassificationByNameOptionalParams,
  TypeDefinitionGetClassificationByIdOptionalParams,
  TypeDefinitionGetBusinessMetadataByNameOptionalParams,
  TypeDefinitionGetBusinessMetadataByIdOptionalParams,
} from "../../api/typeDefinition/options.js";
import {
  AtlasBusinessMetadataDef,
  AtlasClassificationDef,
  AtlasEntityDef,
  AtlasEnumDef,
  AtlasRelationshipDef,
  AtlasStructDef,
  AtlasTypeDef,
  AtlasTypesDef,
  TermTemplateDef,
  AtlasTypeDefHeader,
} from "../../models/models.js";

/** Interface representing a TypeDefinition operations. */
export interface TypeDefinitionOperations {
  /** Get the term template definition by its name (unique). */
  getTermTemplateByName: (
    name: string,
    options?: TypeDefinitionGetTermTemplateByNameOptionalParams,
  ) => Promise<TermTemplateDef>;
  /** Get the term template definition for the given GUID. */
  getTermTemplateById: (
    guid: string,
    options?: TypeDefinitionGetTermTemplateByIdOptionalParams,
  ) => Promise<TermTemplateDef>;
  /** List all type definitions returned as a list of minimal information header. */
  getHeaders: (
    options?: TypeDefinitionGetHeadersOptionalParams,
  ) => Promise<AtlasTypeDefHeader[]>;
  /** Delete API for all types in bulk. */
  batchDelete: (
    body: AtlasTypesDef,
    options?: TypeDefinitionBatchDeleteOptionalParams,
  ) => Promise<void>;
  /**
   * Update all types in bulk, changes detected in the type definitions would be
   * persisted.
   */
  batchUpdate: (
    body: AtlasTypesDef,
    options?: TypeDefinitionBatchUpdateOptionalParams,
  ) => Promise<AtlasTypesDef>;
  /** Create all atlas type definitions in bulk. Please avoid recreating existing types. */
  batchCreate: (
    body: AtlasTypesDef,
    options?: TypeDefinitionBatchCreateOptionalParams,
  ) => Promise<AtlasTypesDef>;
  /** List all type definitions in bulk. */
  get: (options?: TypeDefinitionGetOptionalParams) => Promise<AtlasTypesDef>;
  /** Delete API for type identified by its name. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    name: string,
    options?: TypeDefinitionDeleteOptionalParams,
  ) => Promise<void>;
  /** Get the type definition by its name (unique). */
  getByName: (
    name: string,
    options?: TypeDefinitionGetByNameOptionalParams,
  ) => Promise<AtlasTypeDef>;
  /** Get the type definition for the given GUID. */
  getById: (
    guid: string,
    options?: TypeDefinitionGetByIdOptionalParams,
  ) => Promise<AtlasTypeDef>;
  /** Get the struct definition by its name (unique). */
  getStructByName: (
    name: string,
    options?: TypeDefinitionGetStructByNameOptionalParams,
  ) => Promise<AtlasStructDef>;
  /** Get the struct definition for the given GUID. */
  getStructById: (
    guid: string,
    options?: TypeDefinitionGetStructByIdOptionalParams,
  ) => Promise<AtlasStructDef>;
  /** Get the relationship definition by its name (unique). */
  getRelationshipByName: (
    name: string,
    options?: TypeDefinitionGetRelationshipByNameOptionalParams,
  ) => Promise<AtlasRelationshipDef>;
  /** Get the relationship definition for the given GUID. */
  getRelationshipById: (
    guid: string,
    options?: TypeDefinitionGetRelationshipByIdOptionalParams,
  ) => Promise<AtlasRelationshipDef>;
  /** Get the enum definition by its name (unique). */
  getEnumByName: (
    name: string,
    options?: TypeDefinitionGetEnumByNameOptionalParams,
  ) => Promise<AtlasEnumDef>;
  /** Get the enum definition for the given GUID. */
  getEnumById: (
    guid: string,
    options?: TypeDefinitionGetEnumByIdOptionalParams,
  ) => Promise<AtlasEnumDef>;
  /** Get the entity definition by its name (unique). */
  getEntityByName: (
    name: string,
    options?: TypeDefinitionGetEntityByNameOptionalParams,
  ) => Promise<AtlasEntityDef>;
  /** Get the Entity definition for the given GUID. */
  getEntityById: (
    guid: string,
    options?: TypeDefinitionGetEntityByIdOptionalParams,
  ) => Promise<AtlasEntityDef>;
  /** Get the classification definition by its name (unique). */
  getClassificationByName: (
    name: string,
    options?: TypeDefinitionGetClassificationByNameOptionalParams,
  ) => Promise<AtlasClassificationDef>;
  /** Get the classification definition for the given GUID. */
  getClassificationById: (
    guid: string,
    options?: TypeDefinitionGetClassificationByIdOptionalParams,
  ) => Promise<AtlasClassificationDef>;
  /** Get the businessMetadata definition by it's name (unique). */
  getBusinessMetadataByName: (
    name: string,
    options?: TypeDefinitionGetBusinessMetadataByNameOptionalParams,
  ) => Promise<AtlasBusinessMetadataDef>;
  /** Get the businessMetadata definition for the given guid. */
  getBusinessMetadataById: (
    guid: string,
    options?: TypeDefinitionGetBusinessMetadataByIdOptionalParams,
  ) => Promise<AtlasBusinessMetadataDef>;
}

function _getTypeDefinition(context: DataMapContext) {
  return {
    getTermTemplateByName: (
      name: string,
      options?: TypeDefinitionGetTermTemplateByNameOptionalParams,
    ) => getTermTemplateByName(context, name, options),
    getTermTemplateById: (
      guid: string,
      options?: TypeDefinitionGetTermTemplateByIdOptionalParams,
    ) => getTermTemplateById(context, guid, options),
    getHeaders: (options?: TypeDefinitionGetHeadersOptionalParams) =>
      getHeaders(context, options),
    batchDelete: (
      body: AtlasTypesDef,
      options?: TypeDefinitionBatchDeleteOptionalParams,
    ) => batchDelete(context, body, options),
    batchUpdate: (
      body: AtlasTypesDef,
      options?: TypeDefinitionBatchUpdateOptionalParams,
    ) => batchUpdate(context, body, options),
    batchCreate: (
      body: AtlasTypesDef,
      options?: TypeDefinitionBatchCreateOptionalParams,
    ) => batchCreate(context, body, options),
    get: (options?: TypeDefinitionGetOptionalParams) => get(context, options),
    delete: (name: string, options?: TypeDefinitionDeleteOptionalParams) =>
      $delete(context, name, options),
    getByName: (
      name: string,
      options?: TypeDefinitionGetByNameOptionalParams,
    ) => getByName(context, name, options),
    getById: (guid: string, options?: TypeDefinitionGetByIdOptionalParams) =>
      getById(context, guid, options),
    getStructByName: (
      name: string,
      options?: TypeDefinitionGetStructByNameOptionalParams,
    ) => getStructByName(context, name, options),
    getStructById: (
      guid: string,
      options?: TypeDefinitionGetStructByIdOptionalParams,
    ) => getStructById(context, guid, options),
    getRelationshipByName: (
      name: string,
      options?: TypeDefinitionGetRelationshipByNameOptionalParams,
    ) => getRelationshipByName(context, name, options),
    getRelationshipById: (
      guid: string,
      options?: TypeDefinitionGetRelationshipByIdOptionalParams,
    ) => getRelationshipById(context, guid, options),
    getEnumByName: (
      name: string,
      options?: TypeDefinitionGetEnumByNameOptionalParams,
    ) => getEnumByName(context, name, options),
    getEnumById: (
      guid: string,
      options?: TypeDefinitionGetEnumByIdOptionalParams,
    ) => getEnumById(context, guid, options),
    getEntityByName: (
      name: string,
      options?: TypeDefinitionGetEntityByNameOptionalParams,
    ) => getEntityByName(context, name, options),
    getEntityById: (
      guid: string,
      options?: TypeDefinitionGetEntityByIdOptionalParams,
    ) => getEntityById(context, guid, options),
    getClassificationByName: (
      name: string,
      options?: TypeDefinitionGetClassificationByNameOptionalParams,
    ) => getClassificationByName(context, name, options),
    getClassificationById: (
      guid: string,
      options?: TypeDefinitionGetClassificationByIdOptionalParams,
    ) => getClassificationById(context, guid, options),
    getBusinessMetadataByName: (
      name: string,
      options?: TypeDefinitionGetBusinessMetadataByNameOptionalParams,
    ) => getBusinessMetadataByName(context, name, options),
    getBusinessMetadataById: (
      guid: string,
      options?: TypeDefinitionGetBusinessMetadataByIdOptionalParams,
    ) => getBusinessMetadataById(context, guid, options),
  };
}

export function _getTypeDefinitionOperations(
  context: DataMapContext,
): TypeDefinitionOperations {
  return {
    ..._getTypeDefinition(context),
  };
}
