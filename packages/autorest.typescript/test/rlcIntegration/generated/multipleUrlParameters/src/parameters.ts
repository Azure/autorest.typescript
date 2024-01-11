// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  AtlasEntityWithExtInfo,
  AtlasEntitiesWithExtInfo,
  ClassificationAssociateRequest,
} from "./models";

export interface EntityCreateOrUpdatePathParameters {
  /** Account Name */
  accountName: string;
}

export interface EntityCreateOrUpdateBodyParam {
  /** Atlas entity with extended information. */
  body: AtlasEntityWithExtInfo;
}

export interface EntityCreateOrUpdatePathParam {
  pathParameters: EntityCreateOrUpdatePathParameters;
}

export interface EntityCreateOrUpdateMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type EntityCreateOrUpdateParameters = EntityCreateOrUpdatePathParam &
  EntityCreateOrUpdateMediaTypesParam &
  EntityCreateOrUpdateBodyParam &
  RequestParameters;

export interface EntityListByGuidsPathParameters {
  /** Account Name */
  accountName: string;
}

export interface EntityListByGuidsQueryParamProperties {
  /** An array of GUIDs of entities to list. This parameter needs to be formatted as multi collection, we provide buildMultiCollection from serializeHelper.ts to help, you will probably need to set skipUrlEncoding as true when sending the request */
  guid: string;
  /** Whether to return minimal information for referred entities. */
  minExtInfo?: boolean;
  /** Whether to ignore relationship attributes. */
  ignoreRelationships?: boolean;
  /** An array of the relationship types need to be excluded from the response. This parameter needs to be formatted as multi collection, we provide buildMultiCollection from serializeHelper.ts to help, you will probably need to set skipUrlEncoding as true when sending the request */
  excludeRelationshipTypes?: string;
}

export interface EntityListByGuidsQueryParam {
  queryParameters: EntityListByGuidsQueryParamProperties;
}

export interface EntityListByGuidsPathParam {
  pathParameters: EntityListByGuidsPathParameters;
}

export type EntityListByGuidsParameters = EntityListByGuidsQueryParam &
  EntityListByGuidsPathParam &
  RequestParameters;

export interface EntityCreateOrUpdateEntitiesPathParameters {
  /** Account Name */
  accountName: string;
}

export interface EntityCreateOrUpdateEntitiesBodyParam {
  /** An array of entities to create or update. */
  body: AtlasEntitiesWithExtInfo;
}

export interface EntityCreateOrUpdateEntitiesPathParam {
  pathParameters: EntityCreateOrUpdateEntitiesPathParameters;
}

export interface EntityCreateOrUpdateEntitiesMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type EntityCreateOrUpdateEntitiesParameters =
  EntityCreateOrUpdateEntitiesPathParam &
    EntityCreateOrUpdateEntitiesMediaTypesParam &
    EntityCreateOrUpdateEntitiesBodyParam &
    RequestParameters;

export interface EntityDeleteByGuidsPathParameters {
  /** Account Name */
  accountName: string;
}

export interface EntityDeleteByGuidsQueryParamProperties {
  /** An array of GUIDs of entities to delete. This parameter needs to be formatted as multi collection, we provide buildMultiCollection from serializeHelper.ts to help, you will probably need to set skipUrlEncoding as true when sending the request */
  guid: string;
}

export interface EntityDeleteByGuidsQueryParam {
  queryParameters: EntityDeleteByGuidsQueryParamProperties;
}

export interface EntityDeleteByGuidsPathParam {
  pathParameters: EntityDeleteByGuidsPathParameters;
}

export type EntityDeleteByGuidsParameters = EntityDeleteByGuidsQueryParam &
  EntityDeleteByGuidsPathParam &
  RequestParameters;

export interface EntityAddClassificationPathParameters {
  /** Account Name */
  accountName: string;
}

export interface EntityAddClassificationBodyParam {
  /** The request to associate a classification to multiple entities. */
  body: ClassificationAssociateRequest;
}

export interface EntityAddClassificationPathParam {
  pathParameters: EntityAddClassificationPathParameters;
}

export interface EntityAddClassificationMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type EntityAddClassificationParameters =
  EntityAddClassificationPathParam &
    EntityAddClassificationMediaTypesParam &
    EntityAddClassificationBodyParam &
    RequestParameters;

export interface EntityGetByGuidPathParameters {
  /** Account Name */
  accountName: string;
}

export interface EntityGetByGuidQueryParamProperties {
  /** Whether to return minimal information for referred entities. */
  minExtInfo?: boolean;
  /** Whether to ignore relationship attributes. */
  ignoreRelationships?: boolean;
}

export interface EntityGetByGuidQueryParam {
  queryParameters?: EntityGetByGuidQueryParamProperties;
}

export interface EntityGetByGuidPathParam {
  pathParameters: EntityGetByGuidPathParameters;
}

export type EntityGetByGuidParameters = EntityGetByGuidQueryParam &
  EntityGetByGuidPathParam &
  RequestParameters;

export interface EntityPartialUpdateEntityAttributeByGuidPathParameters {
  /** Account Name */
  accountName: string;
}

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

export interface EntityPartialUpdateEntityAttributeByGuidPathParam {
  pathParameters: EntityPartialUpdateEntityAttributeByGuidPathParameters;
}

export interface EntityPartialUpdateEntityAttributeByGuidMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type EntityPartialUpdateEntityAttributeByGuidParameters =
  EntityPartialUpdateEntityAttributeByGuidQueryParam &
    EntityPartialUpdateEntityAttributeByGuidPathParam &
    EntityPartialUpdateEntityAttributeByGuidMediaTypesParam &
    EntityPartialUpdateEntityAttributeByGuidBodyParam &
    RequestParameters;

export interface EntityDeleteByGuidPathParameters {
  /** Account Name */
  accountName: string;
}

export interface EntityDeleteByGuidPathParam {
  pathParameters: EntityDeleteByGuidPathParameters;
}

export type EntityDeleteByGuidParameters = EntityDeleteByGuidPathParam &
  RequestParameters;

export interface EntityExportGuidPathParameters {
  /** Account Name */
  accountName: string;
}

export interface EntityExportGuidBodyParam {
  /** The value of the attribute. */
  body: Record<string, unknown>;
}

export interface EntityExportGuidQueryParamProperties {
  /** The name of the attribute. */
  name: string;
}

export interface EntityExportGuidQueryParam {
  queryParameters: EntityExportGuidQueryParamProperties;
}

export interface EntityExportGuidPathParam {
  pathParameters: EntityExportGuidPathParameters;
}

export interface EntityExportGuidMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type EntityExportGuidParameters = EntityExportGuidQueryParam &
  EntityExportGuidPathParam &
  EntityExportGuidMediaTypesParam &
  EntityExportGuidBodyParam &
  RequestParameters;
