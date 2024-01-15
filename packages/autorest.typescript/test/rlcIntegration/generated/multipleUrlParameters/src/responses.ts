// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import {
  EntityMutationResponseOutput,
  ErrorResponseOutput,
  AtlasEntitiesWithExtInfoOutput,
  AtlasEntityWithExtInfoOutput,
} from "./outputModels";

/**
 * Create or update an entity in Atlas.
 * Existing entity is matched using its unique guid if supplied or by its unique attributes eg: qualifiedName.
 * Map and array of collections are not well supported. E.g., array<array<int>>, array<map<string, int>>.
 */
export interface EntityCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: EntityMutationResponseOutput;
}

/**
 * Create or update an entity in Atlas.
 * Existing entity is matched using its unique guid if supplied or by its unique attributes eg: qualifiedName.
 * Map and array of collections are not well supported. E.g., array<array<int>>, array<map<string, int>>.
 */
export interface EntityCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** List entities in bulk identified by its GUIDs. */
export interface EntityListByGuids200Response extends HttpResponse {
  status: "200";
  body: AtlasEntitiesWithExtInfoOutput;
}

/** List entities in bulk identified by its GUIDs. */
export interface EntityListByGuidsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/**
 * Create or update entities in Atlas in bulk.
 * Existing entity is matched using its unique guid if supplied or by its unique attributes eg: qualifiedName.
 * Map and array of collections are not well supported. E.g., array<array<int>>, array<map<string, int>>.
 */
export interface EntityCreateOrUpdateEntities200Response extends HttpResponse {
  status: "200";
  body: EntityMutationResponseOutput;
}

/**
 * Create or update entities in Atlas in bulk.
 * Existing entity is matched using its unique guid if supplied or by its unique attributes eg: qualifiedName.
 * Map and array of collections are not well supported. E.g., array<array<int>>, array<map<string, int>>.
 */
export interface EntityCreateOrUpdateEntitiesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Delete a list of entities in bulk identified by their GUIDs or unique attributes. */
export interface EntityDeleteByGuids200Response extends HttpResponse {
  status: "200";
  body: EntityMutationResponseOutput;
}

/** Delete a list of entities in bulk identified by their GUIDs or unique attributes. */
export interface EntityDeleteByGuidsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Associate a classification to multiple entities in bulk. */
export interface EntityAddClassification204Response extends HttpResponse {
  status: "204";
}

/** Associate a classification to multiple entities in bulk. */
export interface EntityAddClassificationDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Get complete definition of an entity given its GUID. */
export interface EntityGetByGuid200Response extends HttpResponse {
  status: "200";
  body: AtlasEntityWithExtInfoOutput;
}

/** Get complete definition of an entity given its GUID. */
export interface EntityGetByGuidDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/**
 * Update entity partially - create or update entity attribute identified by its GUID.
 * Supports only primitive attribute type and entity references.
 * It does not support updating complex types like arrays, and maps.
 * Null updates are not possible.
 */
export interface EntityPartialUpdateEntityAttributeByGuid200Response
  extends HttpResponse {
  status: "200";
  body: EntityMutationResponseOutput;
}

/**
 * Update entity partially - create or update entity attribute identified by its GUID.
 * Supports only primitive attribute type and entity references.
 * It does not support updating complex types like arrays, and maps.
 * Null updates are not possible.
 */
export interface EntityPartialUpdateEntityAttributeByGuidDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Delete an entity identified by its GUID. */
export interface EntityDeleteByGuid200Response extends HttpResponse {
  status: "200";
  body: EntityMutationResponseOutput;
}

/** Delete an entity identified by its GUID. */
export interface EntityDeleteByGuidDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/**
 * Update entity partially - create or update entity attribute identified by its GUID.
 * Supports only primitive attribute type and entity references.
 * It does not support updating complex types like arrays, and maps.
 * Null updates are not possible.
 */
export interface EntityExportGuid202Response extends HttpResponse {
  status: "202";
  body: EntityMutationResponseOutput;
}

/**
 * Update entity partially - create or update entity attribute identified by its GUID.
 * Supports only primitive attribute type and entity references.
 * It does not support updating complex types like arrays, and maps.
 * Null updates are not possible.
 */
export interface EntityExportGuidDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
