// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  EntityCreateOrUpdateParameters,
  EntityListByGuidsParameters,
  EntityCreateOrUpdateEntitiesParameters,
  EntityDeleteByGuidsParameters,
  EntityAddClassificationParameters,
  EntityGetByGuidParameters,
  EntityPartialUpdateEntityAttributeByGuidParameters,
  EntityDeleteByGuidParameters,
  EntityExportGuidParameters,
} from "./parameters";
import {
  EntityCreateOrUpdate200Response,
  EntityCreateOrUpdateDefaultResponse,
  EntityListByGuids200Response,
  EntityListByGuidsDefaultResponse,
  EntityCreateOrUpdateEntities200Response,
  EntityCreateOrUpdateEntitiesDefaultResponse,
  EntityDeleteByGuids200Response,
  EntityDeleteByGuidsDefaultResponse,
  EntityAddClassification204Response,
  EntityAddClassificationDefaultResponse,
  EntityGetByGuid200Response,
  EntityGetByGuidDefaultResponse,
  EntityPartialUpdateEntityAttributeByGuid200Response,
  EntityPartialUpdateEntityAttributeByGuidDefaultResponse,
  EntityDeleteByGuid200Response,
  EntityDeleteByGuidDefaultResponse,
  EntityExportGuid202Response,
  EntityExportGuidDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for Entity operations */
export interface EntityOperations {
  /**
   * Create or update an entity in Atlas.
   * Existing entity is matched using its unique guid if supplied or by its unique attributes eg: qualifiedName.
   * Map and array of collections are not well supported. E.g., array<array<int>>, array<map<string, int>>.
   */
  createOrUpdate(
    options: EntityCreateOrUpdateParameters,
  ): StreamableMethod<
    EntityCreateOrUpdate200Response | EntityCreateOrUpdateDefaultResponse
  >;
  /** List entities in bulk identified by its GUIDs. */
  listByGuids(
    options: EntityListByGuidsParameters,
  ): StreamableMethod<
    EntityListByGuids200Response | EntityListByGuidsDefaultResponse
  >;
  /**
   * Create or update entities in Atlas in bulk.
   * Existing entity is matched using its unique guid if supplied or by its unique attributes eg: qualifiedName.
   * Map and array of collections are not well supported. E.g., array<array<int>>, array<map<string, int>>.
   */
  createOrUpdateEntities(
    options: EntityCreateOrUpdateEntitiesParameters,
  ): StreamableMethod<
    | EntityCreateOrUpdateEntities200Response
    | EntityCreateOrUpdateEntitiesDefaultResponse
  >;
  /** Delete a list of entities in bulk identified by their GUIDs or unique attributes. */
  deleteByGuids(
    options: EntityDeleteByGuidsParameters,
  ): StreamableMethod<
    EntityDeleteByGuids200Response | EntityDeleteByGuidsDefaultResponse
  >;
  /** Associate a classification to multiple entities in bulk. */
  addClassification(
    options: EntityAddClassificationParameters,
  ): StreamableMethod<
    EntityAddClassification204Response | EntityAddClassificationDefaultResponse
  >;
  /** Get complete definition of an entity given its GUID. */
  getByGuid(
    guid: string,
    options: EntityGetByGuidParameters,
  ): StreamableMethod<
    EntityGetByGuid200Response | EntityGetByGuidDefaultResponse
  >;
  /**
   * Update entity partially - create or update entity attribute identified by its GUID.
   * Supports only primitive attribute type and entity references.
   * It does not support updating complex types like arrays, and maps.
   * Null updates are not possible.
   */
  partialUpdateEntityAttributeByGuid(
    guid: string,
    options: EntityPartialUpdateEntityAttributeByGuidParameters,
  ): StreamableMethod<
    | EntityPartialUpdateEntityAttributeByGuid200Response
    | EntityPartialUpdateEntityAttributeByGuidDefaultResponse
  >;
  /** Delete an entity identified by its GUID. */
  deleteByGuid(
    guid: string,
    options: EntityDeleteByGuidParameters,
  ): StreamableMethod<
    EntityDeleteByGuid200Response | EntityDeleteByGuidDefaultResponse
  >;
  /**
   * Update entity partially - create or update entity attribute identified by its GUID.
   * Supports only primitive attribute type and entity references.
   * It does not support updating complex types like arrays, and maps.
   * Null updates are not possible.
   */
  exportGuid(
    guid: string,
    options: EntityExportGuidParameters,
  ): StreamableMethod<
    EntityExportGuid202Response | EntityExportGuidDefaultResponse
  >;
}

export interface CreateOrUpdate {
  /**
   * Create or update an entity in Atlas.
   * Existing entity is matched using its unique guid if supplied or by its unique attributes eg: qualifiedName.
   * Map and array of collections are not well supported. E.g., array<array<int>>, array<map<string, int>>.
   */
  post(
    options: EntityCreateOrUpdateParameters,
  ): StreamableMethod<
    EntityCreateOrUpdate200Response | EntityCreateOrUpdateDefaultResponse
  >;
}

export interface ListByGuids {
  /** List entities in bulk identified by its GUIDs. */
  get(
    options: EntityListByGuidsParameters,
  ): StreamableMethod<
    EntityListByGuids200Response | EntityListByGuidsDefaultResponse
  >;
  /**
   * Create or update entities in Atlas in bulk.
   * Existing entity is matched using its unique guid if supplied or by its unique attributes eg: qualifiedName.
   * Map and array of collections are not well supported. E.g., array<array<int>>, array<map<string, int>>.
   */
  post(
    options: EntityCreateOrUpdateEntitiesParameters,
  ): StreamableMethod<
    | EntityCreateOrUpdateEntities200Response
    | EntityCreateOrUpdateEntitiesDefaultResponse
  >;
  /** Delete a list of entities in bulk identified by their GUIDs or unique attributes. */
  delete(
    options: EntityDeleteByGuidsParameters,
  ): StreamableMethod<
    EntityDeleteByGuids200Response | EntityDeleteByGuidsDefaultResponse
  >;
}

export interface AddClassification {
  /** Associate a classification to multiple entities in bulk. */
  post(
    options: EntityAddClassificationParameters,
  ): StreamableMethod<
    EntityAddClassification204Response | EntityAddClassificationDefaultResponse
  >;
}

export interface GetByGuid {
  /** Get complete definition of an entity given its GUID. */
  get(
    options: EntityGetByGuidParameters,
  ): StreamableMethod<
    EntityGetByGuid200Response | EntityGetByGuidDefaultResponse
  >;
  /**
   * Update entity partially - create or update entity attribute identified by its GUID.
   * Supports only primitive attribute type and entity references.
   * It does not support updating complex types like arrays, and maps.
   * Null updates are not possible.
   */
  put(
    options: EntityPartialUpdateEntityAttributeByGuidParameters,
  ): StreamableMethod<
    | EntityPartialUpdateEntityAttributeByGuid200Response
    | EntityPartialUpdateEntityAttributeByGuidDefaultResponse
  >;
  /** Delete an entity identified by its GUID. */
  delete(
    options: EntityDeleteByGuidParameters,
  ): StreamableMethod<
    EntityDeleteByGuid200Response | EntityDeleteByGuidDefaultResponse
  >;
}

export interface ExportGuid {
  /**
   * Update entity partially - create or update entity attribute identified by its GUID.
   * Supports only primitive attribute type and entity references.
   * It does not support updating complex types like arrays, and maps.
   * Null updates are not possible.
   */
  put(
    options: EntityExportGuidParameters,
  ): StreamableMethod<
    EntityExportGuid202Response | EntityExportGuidDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/entity' has methods for the following verbs: post */
  (path: "/entity"): CreateOrUpdate;
  /** Resource for '/entity/bulk' has methods for the following verbs: get, post, delete */
  (path: "/entity/bulk"): ListByGuids;
  /** Resource for '/entity/bulk/classification' has methods for the following verbs: post */
  (path: "/entity/bulk/classification"): AddClassification;
  /** Resource for '/entity/guid/\{guid\}' has methods for the following verbs: get, put, delete */
  (path: "/entity/guid/{guid}", guid: string): GetByGuid;
  /** Resource for '/entity/guid/\{guid\}:export' has methods for the following verbs: put */
  (path: "/entity/guid/{guid}:export", guid: string): ExportGuid;
}

export type MultipleUrlParameterRestClient = Client & {
  path: Routes;
  entity: EntityOperations;
};
