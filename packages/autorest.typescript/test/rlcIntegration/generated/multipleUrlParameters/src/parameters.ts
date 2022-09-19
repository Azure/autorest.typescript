// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  AtlasEntityWithExtInfo,
  AtlasEntitiesWithExtInfo,
  ClassificationAssociateRequest
} from "./models";

export interface EntityCreateOrUpdateBodyParam {
  /** Atlas entity with extended information. */
  body: AtlasEntityWithExtInfo;
}

export interface EntityCreateOrUpdateMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type EntityCreateOrUpdateParameters = EntityCreateOrUpdateMediaTypesParam &
  EntityCreateOrUpdateBodyParam &
  RequestParameters;

export interface EntityListByGuidsQueryParamProperties {
  /** An array of GUIDs of entities to list. */
  guid: Array<string>;
  /** Whether to return minimal information for referred entities. */
  minExtInfo?: boolean;
  /** Whether to ignore relationship attributes. */
  ignoreRelationships?: boolean;
  /** An array of the relationship types need to be excluded from the response. */
  excludeRelationshipTypes?: Array<string>;
}

export interface EntityListByGuidsQueryParam {
  queryParameters: EntityListByGuidsQueryParamProperties;
}

export type EntityListByGuidsParameters = EntityListByGuidsQueryParam &
  RequestParameters;

export interface EntityCreateOrUpdateEntitiesBodyParam {
  /** An array of entities to create or update. */
  body: AtlasEntitiesWithExtInfo;
}

export interface EntityCreateOrUpdateEntitiesMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type EntityCreateOrUpdateEntitiesParameters = EntityCreateOrUpdateEntitiesMediaTypesParam &
  EntityCreateOrUpdateEntitiesBodyParam &
  RequestParameters;

export interface EntityDeleteByGuidsQueryParamProperties {
  /** An array of GUIDs of entities to delete. */
  guid: Array<string>;
}

export interface EntityDeleteByGuidsQueryParam {
  queryParameters: EntityDeleteByGuidsQueryParamProperties;
}

export type EntityDeleteByGuidsParameters = EntityDeleteByGuidsQueryParam &
  RequestParameters;

export interface EntityAddClassificationBodyParam {
  /** The request to associate a classification to multiple entities. */
  body: ClassificationAssociateRequest;
}

export interface EntityAddClassificationMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type EntityAddClassificationParameters = EntityAddClassificationMediaTypesParam &
  EntityAddClassificationBodyParam &
  RequestParameters;

export interface EntityGetByGuidQueryParamProperties {
  /** Whether to return minimal information for referred entities. */
  minExtInfo?: boolean;
  /** Whether to ignore relationship attributes. */
  ignoreRelationships?: boolean;
}

export interface EntityGetByGuidQueryParam {
  queryParameters?: EntityGetByGuidQueryParamProperties;
}

export type EntityGetByGuidParameters = EntityGetByGuidQueryParam &
  RequestParameters;

export interface EntityPartialUpdateEntityAttributeByGuidBodyParam {
  /** The value of the attribute. */
  body: Record<string, unknown>;
}

export interface EntityPartialUpdateEntityAttributeByGuidQueryParamProperties {
  /** The name of the attribute. */
  name: string;
}

export interface EntityPartialUpdateEntityAttributeByGuidQueryParam {
  queryParameters: EntityPartialUpdateEntityAttributeByGuidQueryParamProperties;
}

export interface EntityPartialUpdateEntityAttributeByGuidMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type EntityPartialUpdateEntityAttributeByGuidParameters = EntityPartialUpdateEntityAttributeByGuidQueryParam &
  EntityPartialUpdateEntityAttributeByGuidMediaTypesParam &
  EntityPartialUpdateEntityAttributeByGuidBodyParam &
  RequestParameters;
export type EntityDeleteByGuidParameters = RequestParameters;
