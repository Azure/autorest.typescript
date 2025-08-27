// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DataMapContext as Client } from "../index.js";
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
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getTermTemplateByNameSend(
  context: Client,
  name: string,
  options: TypeDefinitionGetTermTemplateByNameOptionalParams = {
    requestOptions: {},
  },
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

export async function _getTermTemplateByNameDeserialize(
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
export async function getTermTemplateByName(
  context: Client,
  name: string,
  options: TypeDefinitionGetTermTemplateByNameOptionalParams = {
    requestOptions: {},
  },
): Promise<TermTemplateDef> {
  const result = await _getTermTemplateByNameSend(context, name, options);
  return _getTermTemplateByNameDeserialize(result);
}

export function _getTermTemplateByIdSend(
  context: Client,
  guid: string,
  options: TypeDefinitionGetTermTemplateByIdOptionalParams = {
    requestOptions: {},
  },
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

export async function _getTermTemplateByIdDeserialize(
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
export async function getTermTemplateById(
  context: Client,
  guid: string,
  options: TypeDefinitionGetTermTemplateByIdOptionalParams = {
    requestOptions: {},
  },
): Promise<TermTemplateDef> {
  const result = await _getTermTemplateByIdSend(context, guid, options);
  return _getTermTemplateByIdDeserialize(result);
}

export function _getHeadersSend(
  context: Client,
  options: TypeDefinitionGetHeadersOptionalParams = { requestOptions: {} },
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

export async function _getHeadersDeserialize(
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
export async function getHeaders(
  context: Client,
  options: TypeDefinitionGetHeadersOptionalParams = { requestOptions: {} },
): Promise<AtlasTypeDefHeader[]> {
  const result = await _getHeadersSend(context, options);
  return _getHeadersDeserialize(result);
}

export function _batchDeleteSend(
  context: Client,
  body: AtlasTypesDef,
  options: TypeDefinitionBatchDeleteOptionalParams = { requestOptions: {} },
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

export async function _batchDeleteDeserialize(
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
export async function batchDelete(
  context: Client,
  body: AtlasTypesDef,
  options: TypeDefinitionBatchDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _batchDeleteSend(context, body, options);
  return _batchDeleteDeserialize(result);
}

export function _batchUpdateSend(
  context: Client,
  body: AtlasTypesDef,
  options: TypeDefinitionBatchUpdateOptionalParams = { requestOptions: {} },
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

export async function _batchUpdateDeserialize(
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
export async function batchUpdate(
  context: Client,
  body: AtlasTypesDef,
  options: TypeDefinitionBatchUpdateOptionalParams = { requestOptions: {} },
): Promise<AtlasTypesDef> {
  const result = await _batchUpdateSend(context, body, options);
  return _batchUpdateDeserialize(result);
}

export function _batchCreateSend(
  context: Client,
  body: AtlasTypesDef,
  options: TypeDefinitionBatchCreateOptionalParams = { requestOptions: {} },
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

export async function _batchCreateDeserialize(
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
export async function batchCreate(
  context: Client,
  body: AtlasTypesDef,
  options: TypeDefinitionBatchCreateOptionalParams = { requestOptions: {} },
): Promise<AtlasTypesDef> {
  const result = await _batchCreateSend(context, body, options);
  return _batchCreateDeserialize(result);
}

export function _getSend(
  context: Client,
  options: TypeDefinitionGetOptionalParams = { requestOptions: {} },
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

export async function _getDeserialize(
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
export async function get(
  context: Client,
  options: TypeDefinitionGetOptionalParams = { requestOptions: {} },
): Promise<AtlasTypesDef> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _$deleteSend(
  context: Client,
  name: string,
  options: TypeDefinitionDeleteOptionalParams = { requestOptions: {} },
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
  options: TypeDefinitionDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _$deleteSend(context, name, options);
  return _$deleteDeserialize(result);
}

export function _getByNameSend(
  context: Client,
  name: string,
  options: TypeDefinitionGetByNameOptionalParams = { requestOptions: {} },
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
  options: TypeDefinitionGetByNameOptionalParams = { requestOptions: {} },
): Promise<AtlasTypeDef> {
  const result = await _getByNameSend(context, name, options);
  return _getByNameDeserialize(result);
}

export function _getByIdSend(
  context: Client,
  guid: string,
  options: TypeDefinitionGetByIdOptionalParams = { requestOptions: {} },
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

export async function _getByIdDeserialize(
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
export async function getById(
  context: Client,
  guid: string,
  options: TypeDefinitionGetByIdOptionalParams = { requestOptions: {} },
): Promise<AtlasTypeDef> {
  const result = await _getByIdSend(context, guid, options);
  return _getByIdDeserialize(result);
}

export function _getStructByNameSend(
  context: Client,
  name: string,
  options: TypeDefinitionGetStructByNameOptionalParams = { requestOptions: {} },
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

export async function _getStructByNameDeserialize(
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
export async function getStructByName(
  context: Client,
  name: string,
  options: TypeDefinitionGetStructByNameOptionalParams = { requestOptions: {} },
): Promise<AtlasStructDef> {
  const result = await _getStructByNameSend(context, name, options);
  return _getStructByNameDeserialize(result);
}

export function _getStructByIdSend(
  context: Client,
  guid: string,
  options: TypeDefinitionGetStructByIdOptionalParams = { requestOptions: {} },
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

export async function _getStructByIdDeserialize(
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
export async function getStructById(
  context: Client,
  guid: string,
  options: TypeDefinitionGetStructByIdOptionalParams = { requestOptions: {} },
): Promise<AtlasStructDef> {
  const result = await _getStructByIdSend(context, guid, options);
  return _getStructByIdDeserialize(result);
}

export function _getRelationshipByNameSend(
  context: Client,
  name: string,
  options: TypeDefinitionGetRelationshipByNameOptionalParams = {
    requestOptions: {},
  },
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

export async function _getRelationshipByNameDeserialize(
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
export async function getRelationshipByName(
  context: Client,
  name: string,
  options: TypeDefinitionGetRelationshipByNameOptionalParams = {
    requestOptions: {},
  },
): Promise<AtlasRelationshipDef> {
  const result = await _getRelationshipByNameSend(context, name, options);
  return _getRelationshipByNameDeserialize(result);
}

export function _getRelationshipByIdSend(
  context: Client,
  guid: string,
  options: TypeDefinitionGetRelationshipByIdOptionalParams = {
    requestOptions: {},
  },
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

export async function _getRelationshipByIdDeserialize(
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
export async function getRelationshipById(
  context: Client,
  guid: string,
  options: TypeDefinitionGetRelationshipByIdOptionalParams = {
    requestOptions: {},
  },
): Promise<AtlasRelationshipDef> {
  const result = await _getRelationshipByIdSend(context, guid, options);
  return _getRelationshipByIdDeserialize(result);
}

export function _getEnumByNameSend(
  context: Client,
  name: string,
  options: TypeDefinitionGetEnumByNameOptionalParams = { requestOptions: {} },
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

export async function _getEnumByNameDeserialize(
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
export async function getEnumByName(
  context: Client,
  name: string,
  options: TypeDefinitionGetEnumByNameOptionalParams = { requestOptions: {} },
): Promise<AtlasEnumDef> {
  const result = await _getEnumByNameSend(context, name, options);
  return _getEnumByNameDeserialize(result);
}

export function _getEnumByIdSend(
  context: Client,
  guid: string,
  options: TypeDefinitionGetEnumByIdOptionalParams = { requestOptions: {} },
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

export async function _getEnumByIdDeserialize(
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
export async function getEnumById(
  context: Client,
  guid: string,
  options: TypeDefinitionGetEnumByIdOptionalParams = { requestOptions: {} },
): Promise<AtlasEnumDef> {
  const result = await _getEnumByIdSend(context, guid, options);
  return _getEnumByIdDeserialize(result);
}

export function _getEntityByNameSend(
  context: Client,
  name: string,
  options: TypeDefinitionGetEntityByNameOptionalParams = { requestOptions: {} },
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

export async function _getEntityByNameDeserialize(
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
export async function getEntityByName(
  context: Client,
  name: string,
  options: TypeDefinitionGetEntityByNameOptionalParams = { requestOptions: {} },
): Promise<AtlasEntityDef> {
  const result = await _getEntityByNameSend(context, name, options);
  return _getEntityByNameDeserialize(result);
}

export function _getEntityByIdSend(
  context: Client,
  guid: string,
  options: TypeDefinitionGetEntityByIdOptionalParams = { requestOptions: {} },
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

export async function _getEntityByIdDeserialize(
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
export async function getEntityById(
  context: Client,
  guid: string,
  options: TypeDefinitionGetEntityByIdOptionalParams = { requestOptions: {} },
): Promise<AtlasEntityDef> {
  const result = await _getEntityByIdSend(context, guid, options);
  return _getEntityByIdDeserialize(result);
}

export function _getClassificationByNameSend(
  context: Client,
  name: string,
  options: TypeDefinitionGetClassificationByNameOptionalParams = {
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

export async function _getClassificationByNameDeserialize(
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
export async function getClassificationByName(
  context: Client,
  name: string,
  options: TypeDefinitionGetClassificationByNameOptionalParams = {
    requestOptions: {},
  },
): Promise<AtlasClassificationDef> {
  const result = await _getClassificationByNameSend(context, name, options);
  return _getClassificationByNameDeserialize(result);
}

export function _getClassificationByIdSend(
  context: Client,
  guid: string,
  options: TypeDefinitionGetClassificationByIdOptionalParams = {
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

export async function _getClassificationByIdDeserialize(
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
export async function getClassificationById(
  context: Client,
  guid: string,
  options: TypeDefinitionGetClassificationByIdOptionalParams = {
    requestOptions: {},
  },
): Promise<AtlasClassificationDef> {
  const result = await _getClassificationByIdSend(context, guid, options);
  return _getClassificationByIdDeserialize(result);
}

export function _getBusinessMetadataByNameSend(
  context: Client,
  name: string,
  options: TypeDefinitionGetBusinessMetadataByNameOptionalParams = {
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

export async function _getBusinessMetadataByNameDeserialize(
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
export async function getBusinessMetadataByName(
  context: Client,
  name: string,
  options: TypeDefinitionGetBusinessMetadataByNameOptionalParams = {
    requestOptions: {},
  },
): Promise<AtlasBusinessMetadataDef> {
  const result = await _getBusinessMetadataByNameSend(context, name, options);
  return _getBusinessMetadataByNameDeserialize(result);
}

export function _getBusinessMetadataByIdSend(
  context: Client,
  guid: string,
  options: TypeDefinitionGetBusinessMetadataByIdOptionalParams = {
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

export async function _getBusinessMetadataByIdDeserialize(
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
export async function getBusinessMetadataById(
  context: Client,
  guid: string,
  options: TypeDefinitionGetBusinessMetadataByIdOptionalParams = {
    requestOptions: {},
  },
): Promise<AtlasBusinessMetadataDef> {
  const result = await _getBusinessMetadataByIdSend(context, guid, options);
  return _getBusinessMetadataByIdDeserialize(result);
}
