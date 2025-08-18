// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { PurviewDataMapContext as Client } from "../index.js";
import {
  AtlasEntityWithExtInfo,
  atlasEntityWithExtInfoSerializer,
  atlasEntityWithExtInfoDeserializer,
  atlasClassificationArraySerializer,
  AtlasClassification,
  atlasClassificationDeserializer,
  EntityMutationResult,
  entityMutationResultDeserializer,
  AtlasEntityHeader,
  atlasEntityHeaderDeserializer,
  atlasErrorResponseDeserializer,
  AtlasEntitiesWithExtInfo,
  atlasEntitiesWithExtInfoSerializer,
  atlasEntitiesWithExtInfoDeserializer,
  ClassificationAssociateOptions,
  classificationAssociateOptionsSerializer,
  AtlasClassifications,
  atlasClassificationsDeserializer,
  AtlasEntityHeaders,
  atlasEntityHeadersSerializer,
  BusinessMetadataOptions,
  businessMetadataOptionsSerializer,
  BulkImportResult,
  bulkImportResultDeserializer,
  MoveEntitiesOptions,
  moveEntitiesOptionsSerializer,
} from "../../models/models.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
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
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _moveEntitiesToCollectionSend(
  context: Client,
  collectionId: string,
  body: MoveEntitiesOptions,
  options: EntityMoveEntitiesToCollectionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/entity/moveTo{?api%2Dversion,collectionId}",
    {
      "api%2Dversion": context.apiVersion,
      collectionId: collectionId,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: moveEntitiesOptionsSerializer(body),
    });
}

export async function _moveEntitiesToCollectionDeserialize(
  result: PathUncheckedResponse,
): Promise<EntityMutationResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return entityMutationResultDeserializer(result.body);
}

/** Move existing entities to the target collection. */
export async function moveEntitiesToCollection(
  context: Client,
  collectionId: string,
  body: MoveEntitiesOptions,
  options: EntityMoveEntitiesToCollectionOptionalParams = {
    requestOptions: {},
  },
): Promise<EntityMutationResult> {
  const result = await _moveEntitiesToCollectionSend(
    context,
    collectionId,
    body,
    options,
  );
  return _moveEntitiesToCollectionDeserialize(result);
}

export function _addLabelsByUniqueAttributeSend(
  context: Client,
  typeName: string,
  options: EntityAddLabelsByUniqueAttributeOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/entity/uniqueAttribute/type/{typeName}/labels{?attr%3AqualifiedName}",
    {
      typeName: typeName,
      "attr%3AqualifiedName": options?.attribute,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context.path(path).put({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    body: !options["body"]
      ? options["body"]
      : options["body"].map((p: any) => {
          return p;
        }),
  });
}

export async function _addLabelsByUniqueAttributeDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

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
export async function addLabelsByUniqueAttribute(
  context: Client,
  typeName: string,
  options: EntityAddLabelsByUniqueAttributeOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _addLabelsByUniqueAttributeSend(
    context,
    typeName,
    options,
  );
  return _addLabelsByUniqueAttributeDeserialize(result);
}

export function _setLabelsByUniqueAttributeSend(
  context: Client,
  typeName: string,
  options: EntitySetLabelsByUniqueAttributeOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/entity/uniqueAttribute/type/{typeName}/labels{?attr%3AqualifiedName}",
    {
      typeName: typeName,
      "attr%3AqualifiedName": options?.attribute,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    body: !options["body"]
      ? options["body"]
      : options["body"].map((p: any) => {
          return p;
        }),
  });
}

export async function _setLabelsByUniqueAttributeDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

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
export async function setLabelsByUniqueAttribute(
  context: Client,
  typeName: string,
  options: EntitySetLabelsByUniqueAttributeOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _setLabelsByUniqueAttributeSend(
    context,
    typeName,
    options,
  );
  return _setLabelsByUniqueAttributeDeserialize(result);
}

export function _removeLabelsByUniqueAttributeSend(
  context: Client,
  typeName: string,
  options: EntityRemoveLabelsByUniqueAttributeOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/entity/uniqueAttribute/type/{typeName}/labels{?attr%3AqualifiedName}",
    {
      typeName: typeName,
      "attr%3AqualifiedName": options?.attribute,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context.path(path).delete({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    body: !options["body"]
      ? options["body"]
      : options["body"].map((p: any) => {
          return p;
        }),
  });
}

export async function _removeLabelsByUniqueAttributeDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

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
export async function removeLabelsByUniqueAttribute(
  context: Client,
  typeName: string,
  options: EntityRemoveLabelsByUniqueAttributeOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _removeLabelsByUniqueAttributeSend(
    context,
    typeName,
    options,
  );
  return _removeLabelsByUniqueAttributeDeserialize(result);
}

export function _addLabelSend(
  context: Client,
  guid: string,
  options: EntityAddLabelOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/entity/guid/{guid}/labels",
    {
      guid: guid,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context.path(path).put({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    body: !options["body"]
      ? options["body"]
      : options["body"].map((p: any) => {
          return p;
        }),
  });
}

export async function _addLabelDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Add given labels to a given entity. */
export async function addLabel(
  context: Client,
  guid: string,
  options: EntityAddLabelOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _addLabelSend(context, guid, options);
  return _addLabelDeserialize(result);
}

export function _setLabelsSend(
  context: Client,
  guid: string,
  options: EntitySetLabelsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/entity/guid/{guid}/labels",
    {
      guid: guid,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    body: !options["body"]
      ? options["body"]
      : options["body"].map((p: any) => {
          return p;
        }),
  });
}

export async function _setLabelsDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Set labels to a given entity. */
export async function setLabels(
  context: Client,
  guid: string,
  options: EntitySetLabelsOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _setLabelsSend(context, guid, options);
  return _setLabelsDeserialize(result);
}

export function _removeLabelsSend(
  context: Client,
  guid: string,
  options: EntityRemoveLabelsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/entity/guid/{guid}/labels",
    {
      guid: guid,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context.path(path).delete({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    body: !options["body"]
      ? options["body"]
      : options["body"].map((p: any) => {
          return p;
        }),
  });
}

export async function _removeLabelsDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete given labels to a given entity. */
export async function removeLabels(
  context: Client,
  guid: string,
  options: EntityRemoveLabelsOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _removeLabelsSend(context, guid, options);
  return _removeLabelsDeserialize(result);
}

export function _importBusinessMetadataSend(
  context: Client,
  body: BusinessMetadataOptions,
  options: EntityImportBusinessMetadataOptionalParams = { requestOptions: {} },
): StreamableMethod {
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path("/atlas/v2/entity/businessmetadata/import")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "multipart/form-data",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: businessMetadataOptionsSerializer(body),
    });
}

export async function _importBusinessMetadataDeserialize(
  result: PathUncheckedResponse,
): Promise<BulkImportResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return bulkImportResultDeserializer(result.body);
}

/** Upload the file for creating Business Metadata in BULK */
export async function importBusinessMetadata(
  context: Client,
  body: BusinessMetadataOptions,
  options: EntityImportBusinessMetadataOptionalParams = { requestOptions: {} },
): Promise<BulkImportResult> {
  const result = await _importBusinessMetadataSend(context, body, options);
  return _importBusinessMetadataDeserialize(result);
}

export function _getSampleBusinessMetadataTemplateSend(
  context: Client,
  options: EntityGetSampleBusinessMetadataTemplateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path("/atlas/v2/entity/businessmetadata/import/template")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/octet-stream",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getSampleBusinessMetadataTemplateDeserialize(
  result: PathUncheckedResponse,
): Promise<Uint8Array> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return result.body;
}

/** Get the sample Template for uploading/creating bulk BusinessMetaData */
export async function getSampleBusinessMetadataTemplate(
  context: Client,
  options: EntityGetSampleBusinessMetadataTemplateOptionalParams = {
    requestOptions: {},
  },
): Promise<Uint8Array> {
  const result = await _getSampleBusinessMetadataTemplateSend(context, options);
  return _getSampleBusinessMetadataTemplateDeserialize(result);
}

export function _addOrUpdateBusinessMetadataAttributesSend(
  context: Client,
  businessMetadataName: string,
  guid: string,
  body: Record<string, any>,
  options: EntityAddOrUpdateBusinessMetadataAttributesOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/entity/guid/{guid}/businessmetadata/{businessMetadataName}",
    {
      businessMetadataName: businessMetadataName,
      guid: guid,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      body: body,
    });
}

export async function _addOrUpdateBusinessMetadataAttributesDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Add or update business metadata attributes. */
export async function addOrUpdateBusinessMetadataAttributes(
  context: Client,
  businessMetadataName: string,
  guid: string,
  body: Record<string, any>,
  options: EntityAddOrUpdateBusinessMetadataAttributesOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _addOrUpdateBusinessMetadataAttributesSend(
    context,
    businessMetadataName,
    guid,
    body,
    options,
  );
  return _addOrUpdateBusinessMetadataAttributesDeserialize(result);
}

export function _removeBusinessMetadataAttributesSend(
  context: Client,
  businessMetadataName: string,
  guid: string,
  body: Record<string, any>,
  options: EntityRemoveBusinessMetadataAttributesOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/entity/guid/{guid}/businessmetadata/{businessMetadataName}",
    {
      businessMetadataName: businessMetadataName,
      guid: guid,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .delete({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      body: body,
    });
}

export async function _removeBusinessMetadataAttributesDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete business metadata attributes from an entity. */
export async function removeBusinessMetadataAttributes(
  context: Client,
  businessMetadataName: string,
  guid: string,
  body: Record<string, any>,
  options: EntityRemoveBusinessMetadataAttributesOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _removeBusinessMetadataAttributesSend(
    context,
    businessMetadataName,
    guid,
    body,
    options,
  );
  return _removeBusinessMetadataAttributesDeserialize(result);
}

export function _addOrUpdateBusinessMetadataSend(
  context: Client,
  guid: string,
  body: Record<string, Record<string, any>>,
  options: EntityAddOrUpdateBusinessMetadataOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/entity/guid/{guid}/businessmetadata{?isOverwrite}",
    {
      guid: guid,
      isOverwrite: options?.overwrite,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      body: body,
    });
}

export async function _addOrUpdateBusinessMetadataDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Add business metadata to an entity. */
export async function addOrUpdateBusinessMetadata(
  context: Client,
  guid: string,
  body: Record<string, Record<string, any>>,
  options: EntityAddOrUpdateBusinessMetadataOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _addOrUpdateBusinessMetadataSend(
    context,
    guid,
    body,
    options,
  );
  return _addOrUpdateBusinessMetadataDeserialize(result);
}

export function _removeBusinessMetadataSend(
  context: Client,
  guid: string,
  body: Record<string, Record<string, any>>,
  options: EntityRemoveBusinessMetadataOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/entity/guid/{guid}/businessmetadata",
    {
      guid: guid,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .delete({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      body: body,
    });
}

export async function _removeBusinessMetadataDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Remove business metadata from an entity. */
export async function removeBusinessMetadata(
  context: Client,
  guid: string,
  body: Record<string, Record<string, any>>,
  options: EntityRemoveBusinessMetadataOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _removeBusinessMetadataSend(
    context,
    guid,
    body,
    options,
  );
  return _removeBusinessMetadataDeserialize(result);
}

export function _getHeaderSend(
  context: Client,
  guid: string,
  options: EntityGetHeaderOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/entity/guid/{guid}/header",
    {
      guid: guid,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getHeaderDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasEntityHeader> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasEntityHeaderDeserializer(result.body);
}

/** Get entity header given its GUID. */
export async function getHeader(
  context: Client,
  guid: string,
  options: EntityGetHeaderOptionalParams = { requestOptions: {} },
): Promise<AtlasEntityHeader> {
  const result = await _getHeaderSend(context, guid, options);
  return _getHeaderDeserialize(result);
}

export function _listByUniqueAttributesSend(
  context: Client,
  typeName: string,
  options: EntityListByUniqueAttributesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/entity/bulk/uniqueAttribute/type/{typeName}{?minExtInfo,ignoreRelationships,attr_N%3AqualifiedName}",
    {
      typeName: typeName,
      minExtInfo: options?.minExtInfo,
      ignoreRelationships: options?.ignoreRelationships,
      "attr_N%3AqualifiedName": options?.attrNQualifiedName,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listByUniqueAttributesDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasEntitiesWithExtInfo> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasEntitiesWithExtInfoDeserializer(result.body);
}

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
export async function listByUniqueAttributes(
  context: Client,
  typeName: string,
  options: EntityListByUniqueAttributesOptionalParams = { requestOptions: {} },
): Promise<AtlasEntitiesWithExtInfo> {
  const result = await _listByUniqueAttributesSend(context, typeName, options);
  return _listByUniqueAttributesDeserialize(result);
}

export function _bulkSetClassificationsSend(
  context: Client,
  body: AtlasEntityHeaders,
  options: EntityBulkSetClassificationsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path("/atlas/v2/entity/bulk/setClassifications")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: atlasEntityHeadersSerializer(body),
    });
}

export async function _bulkSetClassificationsDeserialize(
  result: PathUncheckedResponse,
): Promise<string[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return result.body.map((p: any) => {
    return p;
  });
}

/** Set classifications on entities in bulk. */
export async function bulkSetClassifications(
  context: Client,
  body: AtlasEntityHeaders,
  options: EntityBulkSetClassificationsOptionalParams = { requestOptions: {} },
): Promise<string[]> {
  const result = await _bulkSetClassificationsSend(context, body, options);
  return _bulkSetClassificationsDeserialize(result);
}

export function _updateClassificationsByUniqueAttributeSend(
  context: Client,
  typeName: string,
  body: AtlasClassification[],
  options: EntityUpdateClassificationsByUniqueAttributeOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/entity/uniqueAttribute/type/{typeName}/classifications{?attr%3AqualifiedName}",
    {
      typeName: typeName,
      "attr%3AqualifiedName": options?.attribute,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      body: atlasClassificationArraySerializer(body),
    });
}

export async function _updateClassificationsByUniqueAttributeDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Update classification on an entity identified by its type and unique attributes. */
export async function updateClassificationsByUniqueAttribute(
  context: Client,
  typeName: string,
  body: AtlasClassification[],
  options: EntityUpdateClassificationsByUniqueAttributeOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _updateClassificationsByUniqueAttributeSend(
    context,
    typeName,
    body,
    options,
  );
  return _updateClassificationsByUniqueAttributeDeserialize(result);
}

export function _addClassificationsByUniqueAttributeSend(
  context: Client,
  typeName: string,
  body: AtlasClassification[],
  options: EntityAddClassificationsByUniqueAttributeOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/entity/uniqueAttribute/type/{typeName}/classifications{?attr%3AqualifiedName}",
    {
      typeName: typeName,
      "attr%3AqualifiedName": options?.attribute,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      body: atlasClassificationArraySerializer(body),
    });
}

export async function _addClassificationsByUniqueAttributeDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Add classification to the entity identified by its type and unique attributes. */
export async function addClassificationsByUniqueAttribute(
  context: Client,
  typeName: string,
  body: AtlasClassification[],
  options: EntityAddClassificationsByUniqueAttributeOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _addClassificationsByUniqueAttributeSend(
    context,
    typeName,
    body,
    options,
  );
  return _addClassificationsByUniqueAttributeDeserialize(result);
}

export function _removeClassificationByUniqueAttributeSend(
  context: Client,
  typeName: string,
  classificationName: string,
  options: EntityRemoveClassificationByUniqueAttributeOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/entity/uniqueAttribute/type/{typeName}/classification/{classificationName}{?attr%3AqualifiedName}",
    {
      typeName: typeName,
      classificationName: classificationName,
      "attr%3AqualifiedName": options?.attribute,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _removeClassificationByUniqueAttributeDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/**
 * Delete a given classification from an entity identified by its type and unique
 * attributes.
 */
export async function removeClassificationByUniqueAttribute(
  context: Client,
  typeName: string,
  classificationName: string,
  options: EntityRemoveClassificationByUniqueAttributeOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _removeClassificationByUniqueAttributeSend(
    context,
    typeName,
    classificationName,
    options,
  );
  return _removeClassificationByUniqueAttributeDeserialize(result);
}

export function _deleteByUniqueAttributeSend(
  context: Client,
  typeName: string,
  options: EntityDeleteByUniqueAttributeOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/entity/uniqueAttribute/type/{typeName}{?attr%3AqualifiedName}",
    {
      typeName: typeName,
      "attr%3AqualifiedName": options?.attribute,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _deleteByUniqueAttributeDeserialize(
  result: PathUncheckedResponse,
): Promise<EntityMutationResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return entityMutationResultDeserializer(result.body);
}

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
export async function deleteByUniqueAttribute(
  context: Client,
  typeName: string,
  options: EntityDeleteByUniqueAttributeOptionalParams = { requestOptions: {} },
): Promise<EntityMutationResult> {
  const result = await _deleteByUniqueAttributeSend(context, typeName, options);
  return _deleteByUniqueAttributeDeserialize(result);
}

export function _partialUpdateByUniqueAttributesSend(
  context: Client,
  typeName: string,
  body: AtlasEntityWithExtInfo,
  options: EntityPartialUpdateByUniqueAttributesOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/entity/uniqueAttribute/type/{typeName}{?attr%3AqualifiedName}",
    {
      typeName: typeName,
      "attr%3AqualifiedName": options?.attribute,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: atlasEntityWithExtInfoSerializer(body),
    });
}

export async function _partialUpdateByUniqueAttributesDeserialize(
  result: PathUncheckedResponse,
): Promise<EntityMutationResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return entityMutationResultDeserializer(result.body);
}

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
export async function partialUpdateByUniqueAttributes(
  context: Client,
  typeName: string,
  body: AtlasEntityWithExtInfo,
  options: EntityPartialUpdateByUniqueAttributesOptionalParams = {
    requestOptions: {},
  },
): Promise<EntityMutationResult> {
  const result = await _partialUpdateByUniqueAttributesSend(
    context,
    typeName,
    body,
    options,
  );
  return _partialUpdateByUniqueAttributesDeserialize(result);
}

export function _getByUniqueAttributesSend(
  context: Client,
  typeName: string,
  options: EntityGetByUniqueAttributesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/entity/uniqueAttribute/type/{typeName}{?minExtInfo,ignoreRelationships,attr%3AqualifiedName}",
    {
      typeName: typeName,
      minExtInfo: options?.minExtInfo,
      ignoreRelationships: options?.ignoreRelationships,
      "attr%3AqualifiedName": options?.attribute,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getByUniqueAttributesDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasEntityWithExtInfo> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasEntityWithExtInfoDeserializer(result.body);
}

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
export async function getByUniqueAttributes(
  context: Client,
  typeName: string,
  options: EntityGetByUniqueAttributesOptionalParams = { requestOptions: {} },
): Promise<AtlasEntityWithExtInfo> {
  const result = await _getByUniqueAttributesSend(context, typeName, options);
  return _getByUniqueAttributesDeserialize(result);
}

export function _updateClassificationsSend(
  context: Client,
  guid: string,
  body: AtlasClassification[],
  options: EntityUpdateClassificationsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/entity/guid/{guid}/classifications",
    {
      guid: guid,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      body: atlasClassificationArraySerializer(body),
    });
}

export async function _updateClassificationsDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Update classifications to an existing entity represented by a guid. */
export async function updateClassifications(
  context: Client,
  guid: string,
  body: AtlasClassification[],
  options: EntityUpdateClassificationsOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _updateClassificationsSend(context, guid, body, options);
  return _updateClassificationsDeserialize(result);
}

export function _addClassificationsSend(
  context: Client,
  guid: string,
  body: AtlasClassification[],
  options: EntityAddClassificationsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/entity/guid/{guid}/classifications",
    {
      guid: guid,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      body: atlasClassificationArraySerializer(body),
    });
}

export async function _addClassificationsDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Add classifications to an existing entity represented by a GUID. */
export async function addClassifications(
  context: Client,
  guid: string,
  body: AtlasClassification[],
  options: EntityAddClassificationsOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _addClassificationsSend(context, guid, body, options);
  return _addClassificationsDeserialize(result);
}

export function _getClassificationsSend(
  context: Client,
  guid: string,
  options: EntityGetClassificationsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/entity/guid/{guid}/classifications",
    {
      guid: guid,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getClassificationsDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasClassifications> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasClassificationsDeserializer(result.body);
}

/** List classifications for a given entity represented by a GUID. */
export async function getClassifications(
  context: Client,
  guid: string,
  options: EntityGetClassificationsOptionalParams = { requestOptions: {} },
): Promise<AtlasClassifications> {
  const result = await _getClassificationsSend(context, guid, options);
  return _getClassificationsDeserialize(result);
}

export function _removeClassificationSend(
  context: Client,
  guid: string,
  classificationName: string,
  options: EntityRemoveClassificationOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/entity/guid/{guid}/classification/{classificationName}",
    {
      guid: guid,
      classificationName: classificationName,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _removeClassificationDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a given classification from an existing entity represented by a GUID. */
export async function removeClassification(
  context: Client,
  guid: string,
  classificationName: string,
  options: EntityRemoveClassificationOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _removeClassificationSend(
    context,
    guid,
    classificationName,
    options,
  );
  return _removeClassificationDeserialize(result);
}

export function _getClassificationSend(
  context: Client,
  guid: string,
  classificationName: string,
  options: EntityGetClassificationOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/entity/guid/{guid}/classification/{classificationName}",
    {
      guid: guid,
      classificationName: classificationName,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getClassificationDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasClassification> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasClassificationDeserializer(result.body);
}

/** Get classification for a given entity represented by a GUID. */
export async function getClassification(
  context: Client,
  guid: string,
  classificationName: string,
  options: EntityGetClassificationOptionalParams = { requestOptions: {} },
): Promise<AtlasClassification> {
  const result = await _getClassificationSend(
    context,
    guid,
    classificationName,
    options,
  );
  return _getClassificationDeserialize(result);
}

export function _$deleteSend(
  context: Client,
  guid: string,
  options: EntityDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/entity/guid/{guid}",
    {
      guid: guid,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _$deleteDeserialize(
  result: PathUncheckedResponse,
): Promise<EntityMutationResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return entityMutationResultDeserializer(result.body);
}

/** Delete an entity identified by its GUID. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  guid: string,
  options: EntityDeleteOptionalParams = { requestOptions: {} },
): Promise<EntityMutationResult> {
  const result = await _$deleteSend(context, guid, options);
  return _$deleteDeserialize(result);
}

export function _partialUpdateAttributeByGuidSend(
  context: Client,
  guid: string,
  name: string,
  body: any,
  options: EntityPartialUpdateAttributeByGuidOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/entity/guid/{guid}{?name}",
    {
      guid: guid,
      name: name,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: body,
    });
}

export async function _partialUpdateAttributeByGuidDeserialize(
  result: PathUncheckedResponse,
): Promise<EntityMutationResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return entityMutationResultDeserializer(result.body);
}

/**
 * Update entity partially - create or update entity attribute identified by its
 * GUID.
 * Supports only primitive attribute type and entity references.
 * It does not support updating complex types like arrays, and maps.
 * Null updates are not possible.
 */
export async function partialUpdateAttributeByGuid(
  context: Client,
  guid: string,
  name: string,
  body: any,
  options: EntityPartialUpdateAttributeByGuidOptionalParams = {
    requestOptions: {},
  },
): Promise<EntityMutationResult> {
  const result = await _partialUpdateAttributeByGuidSend(
    context,
    guid,
    name,
    body,
    options,
  );
  return _partialUpdateAttributeByGuidDeserialize(result);
}

export function _getSend(
  context: Client,
  guid: string,
  options: EntityGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/entity/guid/{guid}{?minExtInfo,ignoreRelationships}",
    {
      guid: guid,
      minExtInfo: options?.minExtInfo,
      ignoreRelationships: options?.ignoreRelationships,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasEntityWithExtInfo> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasEntityWithExtInfoDeserializer(result.body);
}

/** Get complete definition of an entity given its GUID. */
export async function get(
  context: Client,
  guid: string,
  options: EntityGetOptionalParams = { requestOptions: {} },
): Promise<AtlasEntityWithExtInfo> {
  const result = await _getSend(context, guid, options);
  return _getDeserialize(result);
}

export function _addClassificationSend(
  context: Client,
  body: ClassificationAssociateOptions,
  options: EntityAddClassificationOptionalParams = { requestOptions: {} },
): StreamableMethod {
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path("/atlas/v2/entity/bulk/classification")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      body: classificationAssociateOptionsSerializer(body),
    });
}

export async function _addClassificationDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Associate a classification to multiple entities in bulk. */
export async function addClassification(
  context: Client,
  body: ClassificationAssociateOptions,
  options: EntityAddClassificationOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _addClassificationSend(context, body, options);
  return _addClassificationDeserialize(result);
}

export function _bulkDeleteSend(
  context: Client,
  guid: string[],
  options: EntityBulkDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/entity/bulk{?guid*}",
    {
      guid: guid.map((p: any) => {
        return p;
      }),
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _bulkDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<EntityMutationResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return entityMutationResultDeserializer(result.body);
}

/**
 * Delete a list of entities in bulk identified by their GUIDs or unique
 * attributes.
 */
export async function bulkDelete(
  context: Client,
  guid: string[],
  options: EntityBulkDeleteOptionalParams = { requestOptions: {} },
): Promise<EntityMutationResult> {
  const result = await _bulkDeleteSend(context, guid, options);
  return _bulkDeleteDeserialize(result);
}

export function _bulkCreateOrUpdateSend(
  context: Client,
  body: AtlasEntitiesWithExtInfo,
  options: EntityBulkCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/entity/bulk{?api%2Dversion,collectionId,businessAttributeUpdateBehavior}",
    {
      "api%2Dversion": context.apiVersion,
      collectionId: options?.collectionId,
      businessAttributeUpdateBehavior: options?.businessAttributeUpdateBehavior,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: atlasEntitiesWithExtInfoSerializer(body),
    });
}

export async function _bulkCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<EntityMutationResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return entityMutationResultDeserializer(result.body);
}

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
export async function bulkCreateOrUpdate(
  context: Client,
  body: AtlasEntitiesWithExtInfo,
  options: EntityBulkCreateOrUpdateOptionalParams = { requestOptions: {} },
): Promise<EntityMutationResult> {
  const result = await _bulkCreateOrUpdateSend(context, body, options);
  return _bulkCreateOrUpdateDeserialize(result);
}

export function _listByGuidsSend(
  context: Client,
  guid: string[],
  options: EntityListByGuidsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/entity/bulk{?api%2Dversion,guid*,minExtInfo,ignoreRelationships}",
    {
      "api%2Dversion": context.apiVersion,
      guid: guid.map((p: any) => {
        return p;
      }),
      minExtInfo: options?.minExtInfo,
      ignoreRelationships: options?.ignoreRelationships,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listByGuidsDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasEntitiesWithExtInfo> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasEntitiesWithExtInfoDeserializer(result.body);
}

/** List entities in bulk identified by its GUIDs. */
export async function listByGuids(
  context: Client,
  guid: string[],
  options: EntityListByGuidsOptionalParams = { requestOptions: {} },
): Promise<AtlasEntitiesWithExtInfo> {
  const result = await _listByGuidsSend(context, guid, options);
  return _listByGuidsDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  body: AtlasEntityWithExtInfo,
  options: EntityCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/entity{?api%2Dversion,businessAttributeUpdateBehavior,collectionId}",
    {
      "api%2Dversion": context.apiVersion,
      businessAttributeUpdateBehavior: options?.businessAttributeUpdateBehavior,
      collectionId: options?.collectionId,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: atlasEntityWithExtInfoSerializer(body),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<EntityMutationResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return entityMutationResultDeserializer(result.body);
}

/**
 * Create or update an entity.
 * Existing entity is matched using its unique guid if
 * supplied or by its unique attributes eg: qualifiedName.
 * Map and array of
 * collections are not well supported. E.g., array<array<int>>, array<map<string,
 * int>>.
 * For each contact type, the maximum number of contacts is 20.
 */
export async function createOrUpdate(
  context: Client,
  body: AtlasEntityWithExtInfo,
  options: EntityCreateOrUpdateOptionalParams = { requestOptions: {} },
): Promise<EntityMutationResult> {
  const result = await _createOrUpdateSend(context, body, options);
  return _createOrUpdateDeserialize(result);
}
