// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { PurviewDataMapContext } from "../../api/purviewDataMapContext.js";
import {
  moveEntitiesToCollection,
  addLabelsByUniqueAttribute,
  setLabelsByUniqueAttribute,
  removeLabelsByUniqueAttribute,
  addLabel,
  setLabels,
  removeLabels,
  importBusinessMetadata,
  getSampleBusinessMetadataTemplate,
  addOrUpdateBusinessMetadataAttributes,
  removeBusinessMetadataAttributes,
  addOrUpdateBusinessMetadata,
  removeBusinessMetadata,
  getHeader,
  listByUniqueAttributes,
  bulkSetClassifications,
  updateClassificationsByUniqueAttribute,
  addClassificationsByUniqueAttribute,
  removeClassificationByUniqueAttribute,
  deleteByUniqueAttribute,
  partialUpdateByUniqueAttributes,
  getByUniqueAttributes,
  updateClassifications,
  addClassifications,
  getClassifications,
  removeClassification,
  getClassification,
  $delete,
  partialUpdateAttributeByGuid,
  get,
  addClassification,
  bulkDelete,
  bulkCreateOrUpdate,
  listByGuids,
  createOrUpdate,
} from "../../api/entity/operations.js";
import {
  EntityMoveEntitiesToCollectionOptionalParams,
  EntityAddLabelsByUniqueAttributeOptionalParams,
  EntitySetLabelsByUniqueAttributeOptionalParams,
  EntityRemoveLabelsByUniqueAttributeOptionalParams,
  EntityAddLabelOptionalParams,
  EntitySetLabelsOptionalParams,
  EntityRemoveLabelsOptionalParams,
  EntityImportBusinessMetadataOptionalParams,
  EntityGetSampleBusinessMetadataTemplateOptionalParams,
  EntityAddOrUpdateBusinessMetadataAttributesOptionalParams,
  EntityRemoveBusinessMetadataAttributesOptionalParams,
  EntityAddOrUpdateBusinessMetadataOptionalParams,
  EntityRemoveBusinessMetadataOptionalParams,
  EntityGetHeaderOptionalParams,
  EntityListByUniqueAttributesOptionalParams,
  EntityBulkSetClassificationsOptionalParams,
  EntityUpdateClassificationsByUniqueAttributeOptionalParams,
  EntityAddClassificationsByUniqueAttributeOptionalParams,
  EntityRemoveClassificationByUniqueAttributeOptionalParams,
  EntityDeleteByUniqueAttributeOptionalParams,
  EntityPartialUpdateByUniqueAttributesOptionalParams,
  EntityGetByUniqueAttributesOptionalParams,
  EntityUpdateClassificationsOptionalParams,
  EntityAddClassificationsOptionalParams,
  EntityGetClassificationsOptionalParams,
  EntityRemoveClassificationOptionalParams,
  EntityGetClassificationOptionalParams,
  EntityDeleteOptionalParams,
  EntityPartialUpdateAttributeByGuidOptionalParams,
  EntityGetOptionalParams,
  EntityAddClassificationOptionalParams,
  EntityBulkDeleteOptionalParams,
  EntityBulkCreateOrUpdateOptionalParams,
  EntityListByGuidsOptionalParams,
  EntityCreateOrUpdateOptionalParams,
} from "../../api/entity/options.js";
import {
  AtlasEntityWithExtInfo,
  AtlasClassification,
  EntityMutationResult,
  AtlasEntityHeader,
  AtlasEntitiesWithExtInfo,
  ClassificationAssociateOptions,
  AtlasClassifications,
  AtlasEntityHeaders,
  BusinessMetadataOptions,
  BulkImportResult,
  MoveEntitiesOptions,
} from "../../models/models.js";

/** Interface representing a Entity operations. */
export interface EntityOperations {
  /** Move existing entities to the target collection. */
  moveEntitiesToCollection: (
    collectionId: string,
    body: MoveEntitiesOptions,
    options?: EntityMoveEntitiesToCollectionOptionalParams,
  ) => Promise<EntityMutationResult>;
  /**
   * Add given labels to a given entity identified by its type and unique
   * attributes.
   *
   * If labels is null/empty, no labels will be added.
   *
   * In addition to
   * the typeName path parameter, attribute key-value pair(s) can be provided in the
   * following format: attr:<attrName>=<attrValue>.
   *
   * NOTE: The attrName and
   * attrValue should be unique across entities, eg. qualifiedName.
   *
   * The REST
   * request would look something like this: PUT
   * /v2/entity/uniqueAttribute/type/aType?attr:aTypeAttribute=someValue.
   */
  addLabelsByUniqueAttribute: (
    typeName: string,
    options?: EntityAddLabelsByUniqueAttributeOptionalParams,
  ) => Promise<void>;
  /**
   * Set labels to a given entity identified by its type and unique attributes.
   *
   * If
   * labels is null/empty, existing labels will all be removed.
   *
   * In addition to the
   * typeName path parameter, attribute key-value pair(s) can be provided in the
   * following format: attr:<attrName>=<attrValue>.
   *
   * NOTE: The attrName and
   * attrValue should be unique across entities, eg. qualifiedName.
   *
   * The REST
   * request would look something like this: POST
   * /v2/entity/uniqueAttribute/type/aType?attr:aTypeAttribute=someValue.
   */
  setLabelsByUniqueAttribute: (
    typeName: string,
    options?: EntitySetLabelsByUniqueAttributeOptionalParams,
  ) => Promise<void>;
  /**
   * Delete given labels to a given entity identified by its type and unique
   * attribute.
   *
   * If labels is null/empty, no labels will be removed.
   *
   * If any labels
   * in labels set are non-existing labels, they will be ignored, only existing
   * labels will be removed. In addition to the typeName path parameter, attribute
   * key-value pair(s) can be provided in the following format:
   * attr:<attrName>=<attrValue>. NOTE: The attrName and attrValue should be unique
   * across entities, eg. qualifiedName. The REST request would look something like
   * this: DELETE
   * /v2/entity/uniqueAttribute/type/aType?attr:aTypeAttribute=someValue.
   */
  removeLabelsByUniqueAttribute: (
    typeName: string,
    options?: EntityRemoveLabelsByUniqueAttributeOptionalParams,
  ) => Promise<void>;
  /** Add given labels to a given entity. */
  addLabel: (
    guid: string,
    options?: EntityAddLabelOptionalParams,
  ) => Promise<void>;
  /** Set labels to a given entity. */
  setLabels: (
    guid: string,
    options?: EntitySetLabelsOptionalParams,
  ) => Promise<void>;
  /** Delete given labels to a given entity. */
  removeLabels: (
    guid: string,
    options?: EntityRemoveLabelsOptionalParams,
  ) => Promise<void>;
  /** Upload the file for creating Business Metadata in BULK */
  importBusinessMetadata: (
    body: BusinessMetadataOptions,
    options?: EntityImportBusinessMetadataOptionalParams,
  ) => Promise<BulkImportResult>;
  /** Get the sample Template for uploading/creating bulk BusinessMetaData */
  getSampleBusinessMetadataTemplate: (
    options?: EntityGetSampleBusinessMetadataTemplateOptionalParams,
  ) => Promise<Uint8Array>;
  /** Add or update business metadata attributes. */
  addOrUpdateBusinessMetadataAttributes: (
    businessMetadataName: string,
    guid: string,
    body: Record<string, any>,
    options?: EntityAddOrUpdateBusinessMetadataAttributesOptionalParams,
  ) => Promise<void>;
  /** Delete business metadata attributes from an entity. */
  removeBusinessMetadataAttributes: (
    businessMetadataName: string,
    guid: string,
    body: Record<string, any>,
    options?: EntityRemoveBusinessMetadataAttributesOptionalParams,
  ) => Promise<void>;
  /** Add business metadata to an entity. */
  addOrUpdateBusinessMetadata: (
    guid: string,
    body: Record<string, Record<string, any>>,
    options?: EntityAddOrUpdateBusinessMetadataOptionalParams,
  ) => Promise<void>;
  /** Remove business metadata from an entity. */
  removeBusinessMetadata: (
    guid: string,
    body: Record<string, Record<string, any>>,
    options?: EntityRemoveBusinessMetadataOptionalParams,
  ) => Promise<void>;
  /** Get entity header given its GUID. */
  getHeader: (
    guid: string,
    options?: EntityGetHeaderOptionalParams,
  ) => Promise<AtlasEntityHeader>;
  /**
   * Bulk API to retrieve list of entities identified by its unique attributes.
   * In
   * addition to the typeName path parameter, attribute key-value pair(s) can be
   * provided in the following
   * format
   *
   * typeName=\<typeName>&attr_1:\<attrName>=\<attrValue>&attr_2:\<attrName>=\<attrValue>&attr_3:\<attrName>=\<attrValue>
   *
   * NOTE:
   * The attrName should be an unique attribute for the given entity-type.
   * The REST
   * request would look something like this
   *
   * GET
   * /v2/entity/bulk/uniqueAttribute/type/hive_db?attr_1:qualifiedName=db1@cl1&attr_2:qualifiedName=db2@cl1
   *
   * Note:
   * at least one unique attribute must be provided.
   */
  listByUniqueAttributes: (
    typeName: string,
    options?: EntityListByUniqueAttributesOptionalParams,
  ) => Promise<AtlasEntitiesWithExtInfo>;
  /** Set classifications on entities in bulk. */
  bulkSetClassifications: (
    body: AtlasEntityHeaders,
    options?: EntityBulkSetClassificationsOptionalParams,
  ) => Promise<string[]>;
  /** Update classification on an entity identified by its type and unique attributes. */
  updateClassificationsByUniqueAttribute: (
    typeName: string,
    body: AtlasClassification[],
    options?: EntityUpdateClassificationsByUniqueAttributeOptionalParams,
  ) => Promise<void>;
  /** Add classification to the entity identified by its type and unique attributes. */
  addClassificationsByUniqueAttribute: (
    typeName: string,
    body: AtlasClassification[],
    options?: EntityAddClassificationsByUniqueAttributeOptionalParams,
  ) => Promise<void>;
  /**
   * Delete a given classification from an entity identified by its type and unique
   * attributes.
   */
  removeClassificationByUniqueAttribute: (
    typeName: string,
    classificationName: string,
    options?: EntityRemoveClassificationByUniqueAttributeOptionalParams,
  ) => Promise<void>;
  /**
   * Delete an entity identified by its type and unique attributes.
   * In addition to
   * the typeName path parameter, attribute key-value pair(s) can be provided in the
   * following format:
   * attr:\<attrName>=\<attrValue>.
   * NOTE: The attrName and
   * attrValue should be unique across entities, eg. qualifiedName.
   *
   * The REST
   * request would look something like this:
   * DELETE
   * /v2/entity/uniqueAttribute/type/aType?attr:aTypeAttribute=someValue.
   */
  deleteByUniqueAttribute: (
    typeName: string,
    options?: EntityDeleteByUniqueAttributeOptionalParams,
  ) => Promise<EntityMutationResult>;
  /**
   * Update entity partially - Allow a subset of attributes to be updated on an
   * entity which is identified by its type and unique attribute eg:
   * Referenceable.qualifiedName. Null updates are not possible.
   *
   * In addition to the
   * typeName path parameter, attribute key-value pair(s) can be provided in the
   * following format:
   *
   * attr:<attrName>=<attrValue>.
   * NOTE: The attrName and
   * attrValue should be unique across entities, eg. qualifiedName.
   *
   * The REST
   * request would look something like this:
   * PUT
   * /v2/entity/uniqueAttribute/type/aType?attr:aTypeAttribute=someValue.
   */
  partialUpdateByUniqueAttributes: (
    typeName: string,
    body: AtlasEntityWithExtInfo,
    options?: EntityPartialUpdateByUniqueAttributesOptionalParams,
  ) => Promise<EntityMutationResult>;
  /**
   * Get complete definition of an entity given its type and unique attribute.
   *
   * In
   * addition to the typeName path parameter, attribute key-value pair(s) can be
   * provided in the following format:
   * attr:\<attrName>=<attrValue>.
   *
   * NOTE: The
   * attrName and attrValue should be unique across entities, eg.
   * qualifiedName.
   *
   * The REST request would look something like this:
   * GET
   * /v2/entity/uniqueAttribute/type/aType?attr:aTypeAttribute=someValue.
   */
  getByUniqueAttributes: (
    typeName: string,
    options?: EntityGetByUniqueAttributesOptionalParams,
  ) => Promise<AtlasEntityWithExtInfo>;
  /** Update classifications to an existing entity represented by a guid. */
  updateClassifications: (
    guid: string,
    body: AtlasClassification[],
    options?: EntityUpdateClassificationsOptionalParams,
  ) => Promise<void>;
  /** Add classifications to an existing entity represented by a GUID. */
  addClassifications: (
    guid: string,
    body: AtlasClassification[],
    options?: EntityAddClassificationsOptionalParams,
  ) => Promise<void>;
  /** List classifications for a given entity represented by a GUID. */
  getClassifications: (
    guid: string,
    options?: EntityGetClassificationsOptionalParams,
  ) => Promise<AtlasClassifications>;
  /** Delete a given classification from an existing entity represented by a GUID. */
  removeClassification: (
    guid: string,
    classificationName: string,
    options?: EntityRemoveClassificationOptionalParams,
  ) => Promise<void>;
  /** Get classification for a given entity represented by a GUID. */
  getClassification: (
    guid: string,
    classificationName: string,
    options?: EntityGetClassificationOptionalParams,
  ) => Promise<AtlasClassification>;
  /** Delete an entity identified by its GUID. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    guid: string,
    options?: EntityDeleteOptionalParams,
  ) => Promise<EntityMutationResult>;
  /**
   * Update entity partially - create or update entity attribute identified by its
   * GUID.
   * Supports only primitive attribute type and entity references.
   * It does not support updating complex types like arrays, and maps.
   * Null updates are not possible.
   */
  partialUpdateAttributeByGuid: (
    guid: string,
    name: string,
    body: any,
    options?: EntityPartialUpdateAttributeByGuidOptionalParams,
  ) => Promise<EntityMutationResult>;
  /** Get complete definition of an entity given its GUID. */
  get: (
    guid: string,
    options?: EntityGetOptionalParams,
  ) => Promise<AtlasEntityWithExtInfo>;
  /** Associate a classification to multiple entities in bulk. */
  addClassification: (
    body: ClassificationAssociateOptions,
    options?: EntityAddClassificationOptionalParams,
  ) => Promise<void>;
  /**
   * Delete a list of entities in bulk identified by their GUIDs or unique
   * attributes.
   */
  bulkDelete: (
    guid: string[],
    options?: EntityBulkDeleteOptionalParams,
  ) => Promise<EntityMutationResult>;
  /**
   * Create or update entities in bulk.
   * Existing entity is matched using its unique
   * guid if supplied or by its unique attributes eg: qualifiedName.
   * Map and array
   * of collections are not well supported. E.g., array<array<int>>,
   * array<map<string, int>>.
   * For each contact type, the maximum number of contacts
   * is 20.
   */
  bulkCreateOrUpdate: (
    body: AtlasEntitiesWithExtInfo,
    options?: EntityBulkCreateOrUpdateOptionalParams,
  ) => Promise<EntityMutationResult>;
  /** List entities in bulk identified by its GUIDs. */
  listByGuids: (
    guid: string[],
    options?: EntityListByGuidsOptionalParams,
  ) => Promise<AtlasEntitiesWithExtInfo>;
  /**
   * Create or update an entity.
   * Existing entity is matched using its unique guid if
   * supplied or by its unique attributes eg: qualifiedName.
   * Map and array of
   * collections are not well supported. E.g., array<array<int>>, array<map<string,
   * int>>.
   * For each contact type, the maximum number of contacts is 20.
   */
  createOrUpdate: (
    body: AtlasEntityWithExtInfo,
    options?: EntityCreateOrUpdateOptionalParams,
  ) => Promise<EntityMutationResult>;
}

function _getEntity(context: PurviewDataMapContext) {
  return {
    moveEntitiesToCollection: (
      collectionId: string,
      body: MoveEntitiesOptions,
      options?: EntityMoveEntitiesToCollectionOptionalParams,
    ) => moveEntitiesToCollection(context, collectionId, body, options),
    addLabelsByUniqueAttribute: (
      typeName: string,
      options?: EntityAddLabelsByUniqueAttributeOptionalParams,
    ) => addLabelsByUniqueAttribute(context, typeName, options),
    setLabelsByUniqueAttribute: (
      typeName: string,
      options?: EntitySetLabelsByUniqueAttributeOptionalParams,
    ) => setLabelsByUniqueAttribute(context, typeName, options),
    removeLabelsByUniqueAttribute: (
      typeName: string,
      options?: EntityRemoveLabelsByUniqueAttributeOptionalParams,
    ) => removeLabelsByUniqueAttribute(context, typeName, options),
    addLabel: (guid: string, options?: EntityAddLabelOptionalParams) =>
      addLabel(context, guid, options),
    setLabels: (guid: string, options?: EntitySetLabelsOptionalParams) =>
      setLabels(context, guid, options),
    removeLabels: (guid: string, options?: EntityRemoveLabelsOptionalParams) =>
      removeLabels(context, guid, options),
    importBusinessMetadata: (
      body: BusinessMetadataOptions,
      options?: EntityImportBusinessMetadataOptionalParams,
    ) => importBusinessMetadata(context, body, options),
    getSampleBusinessMetadataTemplate: (
      options?: EntityGetSampleBusinessMetadataTemplateOptionalParams,
    ) => getSampleBusinessMetadataTemplate(context, options),
    addOrUpdateBusinessMetadataAttributes: (
      businessMetadataName: string,
      guid: string,
      body: Record<string, any>,
      options?: EntityAddOrUpdateBusinessMetadataAttributesOptionalParams,
    ) =>
      addOrUpdateBusinessMetadataAttributes(
        context,
        businessMetadataName,
        guid,
        body,
        options,
      ),
    removeBusinessMetadataAttributes: (
      businessMetadataName: string,
      guid: string,
      body: Record<string, any>,
      options?: EntityRemoveBusinessMetadataAttributesOptionalParams,
    ) =>
      removeBusinessMetadataAttributes(
        context,
        businessMetadataName,
        guid,
        body,
        options,
      ),
    addOrUpdateBusinessMetadata: (
      guid: string,
      body: Record<string, Record<string, any>>,
      options?: EntityAddOrUpdateBusinessMetadataOptionalParams,
    ) => addOrUpdateBusinessMetadata(context, guid, body, options),
    removeBusinessMetadata: (
      guid: string,
      body: Record<string, Record<string, any>>,
      options?: EntityRemoveBusinessMetadataOptionalParams,
    ) => removeBusinessMetadata(context, guid, body, options),
    getHeader: (guid: string, options?: EntityGetHeaderOptionalParams) =>
      getHeader(context, guid, options),
    listByUniqueAttributes: (
      typeName: string,
      options?: EntityListByUniqueAttributesOptionalParams,
    ) => listByUniqueAttributes(context, typeName, options),
    bulkSetClassifications: (
      body: AtlasEntityHeaders,
      options?: EntityBulkSetClassificationsOptionalParams,
    ) => bulkSetClassifications(context, body, options),
    updateClassificationsByUniqueAttribute: (
      typeName: string,
      body: AtlasClassification[],
      options?: EntityUpdateClassificationsByUniqueAttributeOptionalParams,
    ) =>
      updateClassificationsByUniqueAttribute(context, typeName, body, options),
    addClassificationsByUniqueAttribute: (
      typeName: string,
      body: AtlasClassification[],
      options?: EntityAddClassificationsByUniqueAttributeOptionalParams,
    ) => addClassificationsByUniqueAttribute(context, typeName, body, options),
    removeClassificationByUniqueAttribute: (
      typeName: string,
      classificationName: string,
      options?: EntityRemoveClassificationByUniqueAttributeOptionalParams,
    ) =>
      removeClassificationByUniqueAttribute(
        context,
        typeName,
        classificationName,
        options,
      ),
    deleteByUniqueAttribute: (
      typeName: string,
      options?: EntityDeleteByUniqueAttributeOptionalParams,
    ) => deleteByUniqueAttribute(context, typeName, options),
    partialUpdateByUniqueAttributes: (
      typeName: string,
      body: AtlasEntityWithExtInfo,
      options?: EntityPartialUpdateByUniqueAttributesOptionalParams,
    ) => partialUpdateByUniqueAttributes(context, typeName, body, options),
    getByUniqueAttributes: (
      typeName: string,
      options?: EntityGetByUniqueAttributesOptionalParams,
    ) => getByUniqueAttributes(context, typeName, options),
    updateClassifications: (
      guid: string,
      body: AtlasClassification[],
      options?: EntityUpdateClassificationsOptionalParams,
    ) => updateClassifications(context, guid, body, options),
    addClassifications: (
      guid: string,
      body: AtlasClassification[],
      options?: EntityAddClassificationsOptionalParams,
    ) => addClassifications(context, guid, body, options),
    getClassifications: (
      guid: string,
      options?: EntityGetClassificationsOptionalParams,
    ) => getClassifications(context, guid, options),
    removeClassification: (
      guid: string,
      classificationName: string,
      options?: EntityRemoveClassificationOptionalParams,
    ) => removeClassification(context, guid, classificationName, options),
    getClassification: (
      guid: string,
      classificationName: string,
      options?: EntityGetClassificationOptionalParams,
    ) => getClassification(context, guid, classificationName, options),
    delete: (guid: string, options?: EntityDeleteOptionalParams) =>
      $delete(context, guid, options),
    partialUpdateAttributeByGuid: (
      guid: string,
      name: string,
      body: any,
      options?: EntityPartialUpdateAttributeByGuidOptionalParams,
    ) => partialUpdateAttributeByGuid(context, guid, name, body, options),
    get: (guid: string, options?: EntityGetOptionalParams) =>
      get(context, guid, options),
    addClassification: (
      body: ClassificationAssociateOptions,
      options?: EntityAddClassificationOptionalParams,
    ) => addClassification(context, body, options),
    bulkDelete: (guid: string[], options?: EntityBulkDeleteOptionalParams) =>
      bulkDelete(context, guid, options),
    bulkCreateOrUpdate: (
      body: AtlasEntitiesWithExtInfo,
      options?: EntityBulkCreateOrUpdateOptionalParams,
    ) => bulkCreateOrUpdate(context, body, options),
    listByGuids: (guid: string[], options?: EntityListByGuidsOptionalParams) =>
      listByGuids(context, guid, options),
    createOrUpdate: (
      body: AtlasEntityWithExtInfo,
      options?: EntityCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, body, options),
  };
}

export function _getEntityOperations(
  context: PurviewDataMapContext,
): EntityOperations {
  return {
    ..._getEntity(context),
  };
}
