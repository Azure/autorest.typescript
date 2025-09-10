// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { PurviewDataMapContext as Client } from "../index.js";
import {
  atlasErrorResponseDeserializer,
  AtlasBusinessMetadataDef,
  atlasBusinessMetadataDefDeserializer,
  AtlasClassificationDef,
  atlasClassificationDefDeserializer,
  AtlasEntityDef,
  atlasEntityDefDeserializer,
  AtlasEnumDef,
  atlasEnumDefDeserializer,
  AtlasRelationshipDef,
  atlasRelationshipDefDeserializer,
  AtlasStructDef,
  atlasStructDefDeserializer,
  AtlasTypeDef,
  atlasTypeDefDeserializer,
  AtlasTypesDef,
  atlasTypesDefSerializer,
  atlasTypesDefDeserializer,
  TermTemplateDef,
  termTemplateDefDeserializer,
  AtlasTypeDefHeader,
  atlasTypeDefHeaderArrayDeserializer,
} from "../../models/models.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
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
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getTermTemplateDefByNameSend(
  context: Client,
  name: string,
  options: TypeGetTermTemplateDefByNameOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/types/termtemplatedef/name/{name}{?api%2Dversion}",
    {
      name: name,
      "api%2Dversion": context.apiVersion,
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

export async function _getTermTemplateDefByNameDeserialize(
  result: PathUncheckedResponse,
): Promise<TermTemplateDef> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return termTemplateDefDeserializer(result.body);
}

/** Get the term template definition by its name (unique). */
export async function getTermTemplateDefByName(
  context: Client,
  name: string,
  options: TypeGetTermTemplateDefByNameOptionalParams = { requestOptions: {} },
): Promise<TermTemplateDef> {
  const result = await _getTermTemplateDefByNameSend(context, name, options);
  return _getTermTemplateDefByNameDeserialize(result);
}

export function _getTermTemplateDefByGuidSend(
  context: Client,
  guid: string,
  options: TypeGetTermTemplateDefByGuidOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/types/termtemplatedef/guid/{guid}{?api%2Dversion}",
    {
      guid: guid,
      "api%2Dversion": context.apiVersion,
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

export async function _getTermTemplateDefByGuidDeserialize(
  result: PathUncheckedResponse,
): Promise<TermTemplateDef> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return termTemplateDefDeserializer(result.body);
}

/** Get the term template definition for the given GUID. */
export async function getTermTemplateDefByGuid(
  context: Client,
  guid: string,
  options: TypeGetTermTemplateDefByGuidOptionalParams = { requestOptions: {} },
): Promise<TermTemplateDef> {
  const result = await _getTermTemplateDefByGuidSend(context, guid, options);
  return _getTermTemplateDefByGuidDeserialize(result);
}

export function _listHeadersSend(
  context: Client,
  options: TypeListHeadersOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/types/typedefs/headers{?api%2Dversion,includeTermTemplate,type}",
    {
      "api%2Dversion": context.apiVersion,
      includeTermTemplate: options?.includeTermTemplate,
      type: options?.typeParam,
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

export async function _listHeadersDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasTypeDefHeader[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasTypeDefHeaderArrayDeserializer(result.body);
}

/** List all type definitions returned as a list of minimal information header. */
export async function listHeaders(
  context: Client,
  options: TypeListHeadersOptionalParams = { requestOptions: {} },
): Promise<AtlasTypeDefHeader[]> {
  const result = await _listHeadersSend(context, options);
  return _listHeadersDeserialize(result);
}

export function _bulkDeleteSend(
  context: Client,
  body: AtlasTypesDef,
  options: TypeBulkDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path("/atlas/v2/types/typedefs")
    .delete({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      body: atlasTypesDefSerializer(body),
    });
}

export async function _bulkDeleteDeserialize(
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

/** Delete API for all types in bulk. */
export async function bulkDelete(
  context: Client,
  body: AtlasTypesDef,
  options: TypeBulkDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _bulkDeleteSend(context, body, options);
  return _bulkDeleteDeserialize(result);
}

export function _bulkUpdateSend(
  context: Client,
  body: AtlasTypesDef,
  options: TypeBulkUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path("/atlas/v2/types/typedefs")
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: atlasTypesDefSerializer(body),
    });
}

export async function _bulkUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasTypesDef> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasTypesDefDeserializer(result.body);
}

/**
 * Update all types in bulk, changes detected in the type definitions would be
 * persisted.
 */
export async function bulkUpdate(
  context: Client,
  body: AtlasTypesDef,
  options: TypeBulkUpdateOptionalParams = { requestOptions: {} },
): Promise<AtlasTypesDef> {
  const result = await _bulkUpdateSend(context, body, options);
  return _bulkUpdateDeserialize(result);
}

export function _bulkCreateSend(
  context: Client,
  body: AtlasTypesDef,
  options: TypeBulkCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path("/atlas/v2/types/typedefs")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: atlasTypesDefSerializer(body),
    });
}

export async function _bulkCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasTypesDef> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasTypesDefDeserializer(result.body);
}

/** Create all atlas type definitions in bulk. Please avoid recreating existing types. */
export async function bulkCreate(
  context: Client,
  body: AtlasTypesDef,
  options: TypeBulkCreateOptionalParams = { requestOptions: {} },
): Promise<AtlasTypesDef> {
  const result = await _bulkCreateSend(context, body, options);
  return _bulkCreateDeserialize(result);
}

export function _listSend(
  context: Client,
  options: TypeListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/types/typedefs{?api%2Dversion,includeTermTemplate,type}",
    {
      "api%2Dversion": context.apiVersion,
      includeTermTemplate: options?.includeTermTemplate,
      type: options?.typeParam,
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

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasTypesDef> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasTypesDefDeserializer(result.body);
}

/** List all type definitions in bulk. */
export async function list(
  context: Client,
  options: TypeListOptionalParams = { requestOptions: {} },
): Promise<AtlasTypesDef> {
  const result = await _listSend(context, options);
  return _listDeserialize(result);
}

export function _$deleteSend(
  context: Client,
  name: string,
  options: TypeDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/types/typedef/name/{name}",
    {
      name: name,
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

export async function _$deleteDeserialize(
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

/** Delete API for type identified by its name. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  name: string,
  options: TypeDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _$deleteSend(context, name, options);
  return _$deleteDeserialize(result);
}

export function _getByNameSend(
  context: Client,
  name: string,
  options: TypeGetByNameOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/types/typedef/name/{name}",
    {
      name: name,
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

export async function _getByNameDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasTypeDef> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasTypeDefDeserializer(result.body);
}

/** Get the type definition by its name (unique). */
export async function getByName(
  context: Client,
  name: string,
  options: TypeGetByNameOptionalParams = { requestOptions: {} },
): Promise<AtlasTypeDef> {
  const result = await _getByNameSend(context, name, options);
  return _getByNameDeserialize(result);
}

export function _getByGuidSend(
  context: Client,
  guid: string,
  options: TypeGetByGuidOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/types/typedef/guid/{guid}",
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

export async function _getByGuidDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasTypeDef> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasTypeDefDeserializer(result.body);
}

/** Get the type definition for the given GUID. */
export async function getByGuid(
  context: Client,
  guid: string,
  options: TypeGetByGuidOptionalParams = { requestOptions: {} },
): Promise<AtlasTypeDef> {
  const result = await _getByGuidSend(context, guid, options);
  return _getByGuidDeserialize(result);
}

export function _getStructDefByNameSend(
  context: Client,
  name: string,
  options: TypeGetStructDefByNameOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/types/structdef/name/{name}",
    {
      name: name,
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

export async function _getStructDefByNameDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasStructDef> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasStructDefDeserializer(result.body);
}

/** Get the struct definition by its name (unique). */
export async function getStructDefByName(
  context: Client,
  name: string,
  options: TypeGetStructDefByNameOptionalParams = { requestOptions: {} },
): Promise<AtlasStructDef> {
  const result = await _getStructDefByNameSend(context, name, options);
  return _getStructDefByNameDeserialize(result);
}

export function _getStructDefByGuidSend(
  context: Client,
  guid: string,
  options: TypeGetStructDefByGuidOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/types/structdef/guid/{guid}",
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

export async function _getStructDefByGuidDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasStructDef> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasStructDefDeserializer(result.body);
}

/** Get the struct definition for the given GUID. */
export async function getStructDefByGuid(
  context: Client,
  guid: string,
  options: TypeGetStructDefByGuidOptionalParams = { requestOptions: {} },
): Promise<AtlasStructDef> {
  const result = await _getStructDefByGuidSend(context, guid, options);
  return _getStructDefByGuidDeserialize(result);
}

export function _getRelationshipDefByNameSend(
  context: Client,
  name: string,
  options: TypeGetRelationshipDefByNameOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/types/relationshipdef/name/{name}",
    {
      name: name,
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

export async function _getRelationshipDefByNameDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasRelationshipDef> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasRelationshipDefDeserializer(result.body);
}

/** Get the relationship definition by its name (unique). */
export async function getRelationshipDefByName(
  context: Client,
  name: string,
  options: TypeGetRelationshipDefByNameOptionalParams = { requestOptions: {} },
): Promise<AtlasRelationshipDef> {
  const result = await _getRelationshipDefByNameSend(context, name, options);
  return _getRelationshipDefByNameDeserialize(result);
}

export function _getRelationshipDefByGuidSend(
  context: Client,
  guid: string,
  options: TypeGetRelationshipDefByGuidOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/types/relationshipdef/guid/{guid}",
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

export async function _getRelationshipDefByGuidDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasRelationshipDef> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasRelationshipDefDeserializer(result.body);
}

/** Get the relationship definition for the given GUID. */
export async function getRelationshipDefByGuid(
  context: Client,
  guid: string,
  options: TypeGetRelationshipDefByGuidOptionalParams = { requestOptions: {} },
): Promise<AtlasRelationshipDef> {
  const result = await _getRelationshipDefByGuidSend(context, guid, options);
  return _getRelationshipDefByGuidDeserialize(result);
}

export function _getEnumDefByNameSend(
  context: Client,
  name: string,
  options: TypeGetEnumDefByNameOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/types/enumdef/name/{name}",
    {
      name: name,
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

export async function _getEnumDefByNameDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasEnumDef> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasEnumDefDeserializer(result.body);
}

/** Get the enum definition by its name (unique). */
export async function getEnumDefByName(
  context: Client,
  name: string,
  options: TypeGetEnumDefByNameOptionalParams = { requestOptions: {} },
): Promise<AtlasEnumDef> {
  const result = await _getEnumDefByNameSend(context, name, options);
  return _getEnumDefByNameDeserialize(result);
}

export function _getEnumDefByGuidSend(
  context: Client,
  guid: string,
  options: TypeGetEnumDefByGuidOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/types/enumdef/guid/{guid}",
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

export async function _getEnumDefByGuidDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasEnumDef> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasEnumDefDeserializer(result.body);
}

/** Get the enum definition for the given GUID. */
export async function getEnumDefByGuid(
  context: Client,
  guid: string,
  options: TypeGetEnumDefByGuidOptionalParams = { requestOptions: {} },
): Promise<AtlasEnumDef> {
  const result = await _getEnumDefByGuidSend(context, guid, options);
  return _getEnumDefByGuidDeserialize(result);
}

export function _getEntityDefByNameSend(
  context: Client,
  name: string,
  options: TypeGetEntityDefByNameOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/types/entitydef/name/{name}",
    {
      name: name,
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

export async function _getEntityDefByNameDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasEntityDef> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasEntityDefDeserializer(result.body);
}

/** Get the entity definition by its name (unique). */
export async function getEntityDefByName(
  context: Client,
  name: string,
  options: TypeGetEntityDefByNameOptionalParams = { requestOptions: {} },
): Promise<AtlasEntityDef> {
  const result = await _getEntityDefByNameSend(context, name, options);
  return _getEntityDefByNameDeserialize(result);
}

export function _getEntityDefByGuidSend(
  context: Client,
  guid: string,
  options: TypeGetEntityDefByGuidOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/types/entitydef/guid/{guid}",
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

export async function _getEntityDefByGuidDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasEntityDef> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasEntityDefDeserializer(result.body);
}

/** Get the Entity definition for the given GUID. */
export async function getEntityDefByGuid(
  context: Client,
  guid: string,
  options: TypeGetEntityDefByGuidOptionalParams = { requestOptions: {} },
): Promise<AtlasEntityDef> {
  const result = await _getEntityDefByGuidSend(context, guid, options);
  return _getEntityDefByGuidDeserialize(result);
}

export function _getClassificationDefByNameSend(
  context: Client,
  name: string,
  options: TypeGetClassificationDefByNameOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/types/classificationdef/name/{name}",
    {
      name: name,
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

export async function _getClassificationDefByNameDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasClassificationDef> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasClassificationDefDeserializer(result.body);
}

/** Get the classification definition by its name (unique). */
export async function getClassificationDefByName(
  context: Client,
  name: string,
  options: TypeGetClassificationDefByNameOptionalParams = {
    requestOptions: {},
  },
): Promise<AtlasClassificationDef> {
  const result = await _getClassificationDefByNameSend(context, name, options);
  return _getClassificationDefByNameDeserialize(result);
}

export function _getClassificationDefByGuidSend(
  context: Client,
  guid: string,
  options: TypeGetClassificationDefByGuidOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/types/classificationdef/guid/{guid}",
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

export async function _getClassificationDefByGuidDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasClassificationDef> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasClassificationDefDeserializer(result.body);
}

/** Get the classification definition for the given GUID. */
export async function getClassificationDefByGuid(
  context: Client,
  guid: string,
  options: TypeGetClassificationDefByGuidOptionalParams = {
    requestOptions: {},
  },
): Promise<AtlasClassificationDef> {
  const result = await _getClassificationDefByGuidSend(context, guid, options);
  return _getClassificationDefByGuidDeserialize(result);
}

export function _getBusinessMetadataDefByNameSend(
  context: Client,
  name: string,
  options: TypeGetBusinessMetadataDefByNameOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/types/businessmetadatadef/name/{name}",
    {
      name: name,
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

export async function _getBusinessMetadataDefByNameDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasBusinessMetadataDef> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasBusinessMetadataDefDeserializer(result.body);
}

/** Get the businessMetadata definition by it's name (unique). */
export async function getBusinessMetadataDefByName(
  context: Client,
  name: string,
  options: TypeGetBusinessMetadataDefByNameOptionalParams = {
    requestOptions: {},
  },
): Promise<AtlasBusinessMetadataDef> {
  const result = await _getBusinessMetadataDefByNameSend(
    context,
    name,
    options,
  );
  return _getBusinessMetadataDefByNameDeserialize(result);
}

export function _getBusinessMetadataDefByGuidSend(
  context: Client,
  guid: string,
  options: TypeGetBusinessMetadataDefByGuidOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/types/businessmetadatadef/guid/{guid}",
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

export async function _getBusinessMetadataDefByGuidDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasBusinessMetadataDef> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasBusinessMetadataDefDeserializer(result.body);
}

/** Get the businessMetadata definition for the given guid. */
export async function getBusinessMetadataDefByGuid(
  context: Client,
  guid: string,
  options: TypeGetBusinessMetadataDefByGuidOptionalParams = {
    requestOptions: {},
  },
): Promise<AtlasBusinessMetadataDef> {
  const result = await _getBusinessMetadataDefByGuidSend(
    context,
    guid,
    options,
  );
  return _getBusinessMetadataDefByGuidDeserialize(result);
}
