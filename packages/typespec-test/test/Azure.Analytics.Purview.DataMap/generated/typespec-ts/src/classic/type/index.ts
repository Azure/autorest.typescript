// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { PurviewDataMapContext } from "../../api/purviewDataMapContext.js";
import {
  getTermTemplateDefByName,
  getTermTemplateDefByGuid,
  listHeaders,
  bulkDelete,
  bulkUpdate,
  bulkCreate,
  list,
  $delete,
  getByName,
  getByGuid,
  getStructDefByName,
  getStructDefByGuid,
  getRelationshipDefByName,
  getRelationshipDefByGuid,
  getEnumDefByName,
  getEnumDefByGuid,
  getEntityDefByName,
  getEntityDefByGuid,
  getClassificationDefByName,
  getClassificationDefByGuid,
  getBusinessMetadataDefByName,
  getBusinessMetadataDefByGuid,
} from "../../api/type/operations.js";
import {
  TypeGetTermTemplateDefByNameOptionalParams,
  TypeGetTermTemplateDefByGuidOptionalParams,
  TypeListHeadersOptionalParams,
  TypeBulkDeleteOptionalParams,
  TypeBulkUpdateOptionalParams,
  TypeBulkCreateOptionalParams,
  TypeListOptionalParams,
  TypeDeleteOptionalParams,
  TypeGetByNameOptionalParams,
  TypeGetByGuidOptionalParams,
  TypeGetStructDefByNameOptionalParams,
  TypeGetStructDefByGuidOptionalParams,
  TypeGetRelationshipDefByNameOptionalParams,
  TypeGetRelationshipDefByGuidOptionalParams,
  TypeGetEnumDefByNameOptionalParams,
  TypeGetEnumDefByGuidOptionalParams,
  TypeGetEntityDefByNameOptionalParams,
  TypeGetEntityDefByGuidOptionalParams,
  TypeGetClassificationDefByNameOptionalParams,
  TypeGetClassificationDefByGuidOptionalParams,
  TypeGetBusinessMetadataDefByNameOptionalParams,
  TypeGetBusinessMetadataDefByGuidOptionalParams,
} from "../../api/type/options.js";
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

/** Interface representing a Type operations. */
export interface TypeOperations {
  /** Get the term template definition by its name (unique). */
  getTermTemplateDefByName: (
    name: string,
    options?: TypeGetTermTemplateDefByNameOptionalParams,
  ) => Promise<TermTemplateDef>;
  /** Get the term template definition for the given GUID. */
  getTermTemplateDefByGuid: (
    guid: string,
    options?: TypeGetTermTemplateDefByGuidOptionalParams,
  ) => Promise<TermTemplateDef>;
  /** List all type definitions returned as a list of minimal information header. */
  listHeaders: (
    options?: TypeListHeadersOptionalParams,
  ) => Promise<AtlasTypeDefHeader[]>;
  /** Delete API for all types in bulk. */
  bulkDelete: (
    body: AtlasTypesDef,
    options?: TypeBulkDeleteOptionalParams,
  ) => Promise<void>;
  /**
   * Update all types in bulk, changes detected in the type definitions would be
   * persisted.
   */
  bulkUpdate: (
    body: AtlasTypesDef,
    options?: TypeBulkUpdateOptionalParams,
  ) => Promise<AtlasTypesDef>;
  /** Create all atlas type definitions in bulk. Please avoid recreating existing types. */
  bulkCreate: (
    body: AtlasTypesDef,
    options?: TypeBulkCreateOptionalParams,
  ) => Promise<AtlasTypesDef>;
  /** List all type definitions in bulk. */
  list: (options?: TypeListOptionalParams) => Promise<AtlasTypesDef>;
  /** Delete API for type identified by its name. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (name: string, options?: TypeDeleteOptionalParams) => Promise<void>;
  /** Get the type definition by its name (unique). */
  getByName: (
    name: string,
    options?: TypeGetByNameOptionalParams,
  ) => Promise<AtlasTypeDef>;
  /** Get the type definition for the given GUID. */
  getByGuid: (
    guid: string,
    options?: TypeGetByGuidOptionalParams,
  ) => Promise<AtlasTypeDef>;
  /** Get the struct definition by its name (unique). */
  getStructDefByName: (
    name: string,
    options?: TypeGetStructDefByNameOptionalParams,
  ) => Promise<AtlasStructDef>;
  /** Get the struct definition for the given GUID. */
  getStructDefByGuid: (
    guid: string,
    options?: TypeGetStructDefByGuidOptionalParams,
  ) => Promise<AtlasStructDef>;
  /** Get the relationship definition by its name (unique). */
  getRelationshipDefByName: (
    name: string,
    options?: TypeGetRelationshipDefByNameOptionalParams,
  ) => Promise<AtlasRelationshipDef>;
  /** Get the relationship definition for the given GUID. */
  getRelationshipDefByGuid: (
    guid: string,
    options?: TypeGetRelationshipDefByGuidOptionalParams,
  ) => Promise<AtlasRelationshipDef>;
  /** Get the enum definition by its name (unique). */
  getEnumDefByName: (
    name: string,
    options?: TypeGetEnumDefByNameOptionalParams,
  ) => Promise<AtlasEnumDef>;
  /** Get the enum definition for the given GUID. */
  getEnumDefByGuid: (
    guid: string,
    options?: TypeGetEnumDefByGuidOptionalParams,
  ) => Promise<AtlasEnumDef>;
  /** Get the entity definition by its name (unique). */
  getEntityDefByName: (
    name: string,
    options?: TypeGetEntityDefByNameOptionalParams,
  ) => Promise<AtlasEntityDef>;
  /** Get the Entity definition for the given GUID. */
  getEntityDefByGuid: (
    guid: string,
    options?: TypeGetEntityDefByGuidOptionalParams,
  ) => Promise<AtlasEntityDef>;
  /** Get the classification definition by its name (unique). */
  getClassificationDefByName: (
    name: string,
    options?: TypeGetClassificationDefByNameOptionalParams,
  ) => Promise<AtlasClassificationDef>;
  /** Get the classification definition for the given GUID. */
  getClassificationDefByGuid: (
    guid: string,
    options?: TypeGetClassificationDefByGuidOptionalParams,
  ) => Promise<AtlasClassificationDef>;
  /** Get the businessMetadata definition by it's name (unique). */
  getBusinessMetadataDefByName: (
    name: string,
    options?: TypeGetBusinessMetadataDefByNameOptionalParams,
  ) => Promise<AtlasBusinessMetadataDef>;
  /** Get the businessMetadata definition for the given guid. */
  getBusinessMetadataDefByGuid: (
    guid: string,
    options?: TypeGetBusinessMetadataDefByGuidOptionalParams,
  ) => Promise<AtlasBusinessMetadataDef>;
}

function _getType(context: PurviewDataMapContext) {
  return {
    getTermTemplateDefByName: (
      name: string,
      options?: TypeGetTermTemplateDefByNameOptionalParams,
    ) => getTermTemplateDefByName(context, name, options),
    getTermTemplateDefByGuid: (
      guid: string,
      options?: TypeGetTermTemplateDefByGuidOptionalParams,
    ) => getTermTemplateDefByGuid(context, guid, options),
    listHeaders: (options?: TypeListHeadersOptionalParams) =>
      listHeaders(context, options),
    bulkDelete: (body: AtlasTypesDef, options?: TypeBulkDeleteOptionalParams) =>
      bulkDelete(context, body, options),
    bulkUpdate: (body: AtlasTypesDef, options?: TypeBulkUpdateOptionalParams) =>
      bulkUpdate(context, body, options),
    bulkCreate: (body: AtlasTypesDef, options?: TypeBulkCreateOptionalParams) =>
      bulkCreate(context, body, options),
    list: (options?: TypeListOptionalParams) => list(context, options),
    delete: (name: string, options?: TypeDeleteOptionalParams) =>
      $delete(context, name, options),
    getByName: (name: string, options?: TypeGetByNameOptionalParams) =>
      getByName(context, name, options),
    getByGuid: (guid: string, options?: TypeGetByGuidOptionalParams) =>
      getByGuid(context, guid, options),
    getStructDefByName: (
      name: string,
      options?: TypeGetStructDefByNameOptionalParams,
    ) => getStructDefByName(context, name, options),
    getStructDefByGuid: (
      guid: string,
      options?: TypeGetStructDefByGuidOptionalParams,
    ) => getStructDefByGuid(context, guid, options),
    getRelationshipDefByName: (
      name: string,
      options?: TypeGetRelationshipDefByNameOptionalParams,
    ) => getRelationshipDefByName(context, name, options),
    getRelationshipDefByGuid: (
      guid: string,
      options?: TypeGetRelationshipDefByGuidOptionalParams,
    ) => getRelationshipDefByGuid(context, guid, options),
    getEnumDefByName: (
      name: string,
      options?: TypeGetEnumDefByNameOptionalParams,
    ) => getEnumDefByName(context, name, options),
    getEnumDefByGuid: (
      guid: string,
      options?: TypeGetEnumDefByGuidOptionalParams,
    ) => getEnumDefByGuid(context, guid, options),
    getEntityDefByName: (
      name: string,
      options?: TypeGetEntityDefByNameOptionalParams,
    ) => getEntityDefByName(context, name, options),
    getEntityDefByGuid: (
      guid: string,
      options?: TypeGetEntityDefByGuidOptionalParams,
    ) => getEntityDefByGuid(context, guid, options),
    getClassificationDefByName: (
      name: string,
      options?: TypeGetClassificationDefByNameOptionalParams,
    ) => getClassificationDefByName(context, name, options),
    getClassificationDefByGuid: (
      guid: string,
      options?: TypeGetClassificationDefByGuidOptionalParams,
    ) => getClassificationDefByGuid(context, guid, options),
    getBusinessMetadataDefByName: (
      name: string,
      options?: TypeGetBusinessMetadataDefByNameOptionalParams,
    ) => getBusinessMetadataDefByName(context, name, options),
    getBusinessMetadataDefByGuid: (
      guid: string,
      options?: TypeGetBusinessMetadataDefByGuidOptionalParams,
    ) => getBusinessMetadataDefByGuid(context, guid, options),
  };
}

export function _getTypeOperations(
  context: PurviewDataMapContext,
): TypeOperations {
  return {
    ..._getType(context),
  };
}
