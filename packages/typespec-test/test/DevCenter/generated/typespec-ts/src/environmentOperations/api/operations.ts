// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "./pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  OperationState,
  Environment,
  Catalog,
  EnvironmentDefinition,
  EnvironmentType,
  _PagedCatalog,
  _PagedEnvironment,
  _PagedEnvironmentDefinition,
  _PagedEnvironmentType,
} from "../models/models.js";
import { PagedAsyncIterableIterator } from "../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "./pagingHelpers.js";
import {
  isUnexpected,
  DevCenterServiceContext as Client,
  EnvironmentsCreateOrReplaceEnvironment201Response,
  EnvironmentsCreateOrReplaceEnvironmentDefaultResponse,
  EnvironmentsCreateOrReplaceEnvironmentLogicalResponse,
  EnvironmentsDeleteEnvironment202Response,
  EnvironmentsDeleteEnvironment204Response,
  EnvironmentsDeleteEnvironmentDefaultResponse,
  EnvironmentsDeleteEnvironmentLogicalResponse,
  EnvironmentsGetCatalog200Response,
  EnvironmentsGetCatalogDefaultResponse,
  EnvironmentsGetEnvironmentByUser200Response,
  EnvironmentsGetEnvironmentByUserDefaultResponse,
  EnvironmentsGetEnvironmentDefinition200Response,
  EnvironmentsGetEnvironmentDefinitionDefaultResponse,
  EnvironmentsListCatalogsByProject200Response,
  EnvironmentsListCatalogsByProjectDefaultResponse,
  EnvironmentsListEnvironmentDefinitionsByCatalog200Response,
  EnvironmentsListEnvironmentDefinitionsByCatalogDefaultResponse,
  EnvironmentsListEnvironmentDefinitionsByProject200Response,
  EnvironmentsListEnvironmentDefinitionsByProjectDefaultResponse,
  EnvironmentsListEnvironments200Response,
  EnvironmentsListEnvironmentsByUser200Response,
  EnvironmentsListEnvironmentsByUserDefaultResponse,
  EnvironmentsListEnvironmentsDefaultResponse,
  EnvironmentsListEnvironmentTypes200Response,
  EnvironmentsListEnvironmentTypesDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  ListAllEnvironmentsOptionalParams,
  ListEnvironmentsOptionalParams,
  GetEnvironmentOptionalParams,
  CreateOrUpdateEnvironmentOptionalParams,
  DeleteEnvironmentOptionalParams,
  ListCatalogsOptionalParams,
  GetCatalogOptionalParams,
  ListEnvironmentDefinitionsOptionalParams,
  ListEnvironmentDefinitionsByCatalogOptionalParams,
  GetEnvironmentDefinitionOptionalParams,
  ListEnvironmentTypesOptionalParams,
} from "../models/options.js";

export function _listAllEnvironmentsSend(
  context: Client,
  projectName: string,
  options: ListAllEnvironmentsOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | EnvironmentsListEnvironments200Response
  | EnvironmentsListEnvironmentsDefaultResponse
> {
  return context
    .path("/projects/{projectName}/environments", projectName)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listAllEnvironmentsDeserialize(
  result:
    | EnvironmentsListEnvironments200Response
    | EnvironmentsListEnvironmentsDefaultResponse,
): Promise<_PagedEnvironment> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      expirationDate:
        p["expirationDate"] !== undefined
          ? new Date(p["expirationDate"])
          : undefined,
      parameters: p["parameters"],
      uri: p["uri"],
      name: p["name"],
      environmentType: p["environmentType"],
      user: p["user"],
      provisioningState: p["provisioningState"],
      resourceGroupId: p["resourceGroupId"],
      catalogName: p["catalogName"],
      environmentDefinitionName: p["environmentDefinitionName"],
      error: !p.error ? undefined : p.error,
    })),
    nextLink: result.body["nextLink"],
  };
}

/** Lists the environments for a project. */
export function listAllEnvironments(
  context: Client,
  projectName: string,
  options: ListAllEnvironmentsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Environment> {
  return buildPagedAsyncIterator(
    context,
    () => _listAllEnvironmentsSend(context, projectName, options),
    _listAllEnvironmentsDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listEnvironmentsSend(
  context: Client,
  projectName: string,
  userId: string,
  options: ListEnvironmentsOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | EnvironmentsListEnvironmentsByUser200Response
  | EnvironmentsListEnvironmentsByUserDefaultResponse
> {
  return context
    .path(
      "/projects/{projectName}/users/{userId}/environments",
      projectName,
      userId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listEnvironmentsDeserialize(
  result:
    | EnvironmentsListEnvironmentsByUser200Response
    | EnvironmentsListEnvironmentsByUserDefaultResponse,
): Promise<_PagedEnvironment> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      expirationDate:
        p["expirationDate"] !== undefined
          ? new Date(p["expirationDate"])
          : undefined,
      parameters: p["parameters"],
      uri: p["uri"],
      name: p["name"],
      environmentType: p["environmentType"],
      user: p["user"],
      provisioningState: p["provisioningState"],
      resourceGroupId: p["resourceGroupId"],
      catalogName: p["catalogName"],
      environmentDefinitionName: p["environmentDefinitionName"],
      error: !p.error ? undefined : p.error,
    })),
    nextLink: result.body["nextLink"],
  };
}

/** Lists the environments for a project and user. */
export function listEnvironments(
  context: Client,
  projectName: string,
  userId: string,
  options: ListEnvironmentsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Environment> {
  return buildPagedAsyncIterator(
    context,
    () => _listEnvironmentsSend(context, projectName, userId, options),
    _listEnvironmentsDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getEnvironmentSend(
  context: Client,
  projectName: string,
  userId: string,
  environmentName: string,
  options: GetEnvironmentOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | EnvironmentsGetEnvironmentByUser200Response
  | EnvironmentsGetEnvironmentByUserDefaultResponse
> {
  return context
    .path(
      "/projects/{projectName}/users/{userId}/environments/{environmentName}",
      projectName,
      userId,
      environmentName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getEnvironmentDeserialize(
  result:
    | EnvironmentsGetEnvironmentByUser200Response
    | EnvironmentsGetEnvironmentByUserDefaultResponse,
): Promise<Environment> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    expirationDate:
      result.body["expirationDate"] !== undefined
        ? new Date(result.body["expirationDate"])
        : undefined,
    parameters: result.body["parameters"],
    uri: result.body["uri"],
    name: result.body["name"],
    environmentType: result.body["environmentType"],
    user: result.body["user"],
    provisioningState: result.body["provisioningState"],
    resourceGroupId: result.body["resourceGroupId"],
    catalogName: result.body["catalogName"],
    environmentDefinitionName: result.body["environmentDefinitionName"],
    error: !result.body.error ? undefined : result.body.error,
  };
}

/** Gets an environment. */
export async function getEnvironment(
  context: Client,
  projectName: string,
  userId: string,
  environmentName: string,
  options: GetEnvironmentOptionalParams = { requestOptions: {} },
): Promise<Environment> {
  const result = await _getEnvironmentSend(
    context,
    projectName,
    userId,
    environmentName,
    options,
  );
  return _getEnvironmentDeserialize(result);
}

export function _createOrUpdateEnvironmentSend(
  context: Client,
  projectName: string,
  userId: string,
  environmentName: string,
  body: Environment,
  options: CreateOrUpdateEnvironmentOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | EnvironmentsCreateOrReplaceEnvironment201Response
  | EnvironmentsCreateOrReplaceEnvironmentDefaultResponse
  | EnvironmentsCreateOrReplaceEnvironmentLogicalResponse
> {
  return context
    .path(
      "/projects/{projectName}/users/{userId}/environments/{environmentName}",
      projectName,
      userId,
      environmentName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        expirationDate: body["expirationDate"]?.toISOString(),
        parameters: !body.parameters
          ? body.parameters
          : (serializeRecord(body.parameters as any) as any),
        environmentType: body["environmentType"],
        catalogName: body["catalogName"],
        environmentDefinitionName: body["environmentDefinitionName"],
      },
    });
}

export async function _createOrUpdateEnvironmentDeserialize(
  result:
    | EnvironmentsCreateOrReplaceEnvironment201Response
    | EnvironmentsCreateOrReplaceEnvironmentDefaultResponse
    | EnvironmentsCreateOrReplaceEnvironmentLogicalResponse,
): Promise<Environment> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as EnvironmentsCreateOrReplaceEnvironmentLogicalResponse;
  return {
    expirationDate:
      result.body["expirationDate"] !== undefined
        ? new Date(result.body["expirationDate"])
        : undefined,
    parameters: result.body["parameters"],
    uri: result.body["uri"],
    name: result.body["name"],
    environmentType: result.body["environmentType"],
    user: result.body["user"],
    provisioningState: result.body["provisioningState"],
    resourceGroupId: result.body["resourceGroupId"],
    catalogName: result.body["catalogName"],
    environmentDefinitionName: result.body["environmentDefinitionName"],
    error: !result.body.error ? undefined : result.body.error,
  };
}

/** Creates or updates an environment. */
export function createOrUpdateEnvironment(
  context: Client,
  projectName: string,
  userId: string,
  environmentName: string,
  body: Environment,
  options: CreateOrUpdateEnvironmentOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Environment>, Environment> {
  return getLongRunningPoller(context, _createOrUpdateEnvironmentDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateEnvironmentSend(
        context,
        projectName,
        userId,
        environmentName,
        body,
        options,
      ),
  }) as PollerLike<OperationState<Environment>, Environment>;
}

export function _deleteEnvironmentSend(
  context: Client,
  projectName: string,
  userId: string,
  environmentName: string,
  options: DeleteEnvironmentOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | EnvironmentsDeleteEnvironment202Response
  | EnvironmentsDeleteEnvironment204Response
  | EnvironmentsDeleteEnvironmentDefaultResponse
  | EnvironmentsDeleteEnvironmentLogicalResponse
> {
  return context
    .path(
      "/projects/{projectName}/users/{userId}/environments/{environmentName}",
      projectName,
      userId,
      environmentName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteEnvironmentDeserialize(
  result:
    | EnvironmentsDeleteEnvironment202Response
    | EnvironmentsDeleteEnvironment204Response
    | EnvironmentsDeleteEnvironmentDefaultResponse
    | EnvironmentsDeleteEnvironmentLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as EnvironmentsDeleteEnvironmentLogicalResponse;
  return;
}

/** Deletes an environment and all its associated resources */
export function deleteEnvironment(
  context: Client,
  projectName: string,
  userId: string,
  environmentName: string,
  options: DeleteEnvironmentOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _deleteEnvironmentDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _deleteEnvironmentSend(
        context,
        projectName,
        userId,
        environmentName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}

export function _listCatalogsSend(
  context: Client,
  projectName: string,
  options: ListCatalogsOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | EnvironmentsListCatalogsByProject200Response
  | EnvironmentsListCatalogsByProjectDefaultResponse
> {
  return context
    .path("/projects/{projectName}/catalogs", projectName)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listCatalogsDeserialize(
  result:
    | EnvironmentsListCatalogsByProject200Response
    | EnvironmentsListCatalogsByProjectDefaultResponse,
): Promise<_PagedCatalog> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      uri: p["uri"],
      name: p["name"],
    })),
    nextLink: result.body["nextLink"],
  };
}

/** Lists all of the catalogs available for a project. */
export function listCatalogs(
  context: Client,
  projectName: string,
  options: ListCatalogsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Catalog> {
  return buildPagedAsyncIterator(
    context,
    () => _listCatalogsSend(context, projectName, options),
    _listCatalogsDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getCatalogSend(
  context: Client,
  projectName: string,
  catalogName: string,
  options: GetCatalogOptionalParams = { requestOptions: {} },
): StreamableMethod<
  EnvironmentsGetCatalog200Response | EnvironmentsGetCatalogDefaultResponse
> {
  return context
    .path(
      "/projects/{projectName}/catalogs/{catalogName}",
      projectName,
      catalogName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getCatalogDeserialize(
  result:
    | EnvironmentsGetCatalog200Response
    | EnvironmentsGetCatalogDefaultResponse,
): Promise<Catalog> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    uri: result.body["uri"],
    name: result.body["name"],
  };
}

/** Gets the specified catalog within the project. */
export async function getCatalog(
  context: Client,
  projectName: string,
  catalogName: string,
  options: GetCatalogOptionalParams = { requestOptions: {} },
): Promise<Catalog> {
  const result = await _getCatalogSend(
    context,
    projectName,
    catalogName,
    options,
  );
  return _getCatalogDeserialize(result);
}

export function _listEnvironmentDefinitionsSend(
  context: Client,
  projectName: string,
  options: ListEnvironmentDefinitionsOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | EnvironmentsListEnvironmentDefinitionsByProject200Response
  | EnvironmentsListEnvironmentDefinitionsByProjectDefaultResponse
> {
  return context
    .path("/projects/{projectName}/environmentDefinitions", projectName)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listEnvironmentDefinitionsDeserialize(
  result:
    | EnvironmentsListEnvironmentDefinitionsByProject200Response
    | EnvironmentsListEnvironmentDefinitionsByProjectDefaultResponse,
): Promise<_PagedEnvironmentDefinition> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      uri: p["uri"],
      id: p["id"],
      name: p["name"],
      catalogName: p["catalogName"],
      description: p["description"],
      parameters:
        p["parameters"] === undefined
          ? p["parameters"]
          : p["parameters"].map((p) => ({
              id: p["id"],
              name: p["name"],
              description: p["description"],
              default: p["default"],
              type: p["type"],
              readOnly: p["readOnly"],
              required: p["required"],
              allowed: p["allowed"],
            })),
      parametersSchema: p["parametersSchema"],
      templatePath: p["templatePath"],
    })),
    nextLink: result.body["nextLink"],
  };
}

/** Lists all environment definitions available for a project. */
export function listEnvironmentDefinitions(
  context: Client,
  projectName: string,
  options: ListEnvironmentDefinitionsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<EnvironmentDefinition> {
  return buildPagedAsyncIterator(
    context,
    () => _listEnvironmentDefinitionsSend(context, projectName, options),
    _listEnvironmentDefinitionsDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listEnvironmentDefinitionsByCatalogSend(
  context: Client,
  projectName: string,
  catalogName: string,
  options: ListEnvironmentDefinitionsByCatalogOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | EnvironmentsListEnvironmentDefinitionsByCatalog200Response
  | EnvironmentsListEnvironmentDefinitionsByCatalogDefaultResponse
> {
  return context
    .path(
      "/projects/{projectName}/catalogs/{catalogName}/environmentDefinitions",
      projectName,
      catalogName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listEnvironmentDefinitionsByCatalogDeserialize(
  result:
    | EnvironmentsListEnvironmentDefinitionsByCatalog200Response
    | EnvironmentsListEnvironmentDefinitionsByCatalogDefaultResponse,
): Promise<_PagedEnvironmentDefinition> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      uri: p["uri"],
      id: p["id"],
      name: p["name"],
      catalogName: p["catalogName"],
      description: p["description"],
      parameters:
        p["parameters"] === undefined
          ? p["parameters"]
          : p["parameters"].map((p) => ({
              id: p["id"],
              name: p["name"],
              description: p["description"],
              default: p["default"],
              type: p["type"],
              readOnly: p["readOnly"],
              required: p["required"],
              allowed: p["allowed"],
            })),
      parametersSchema: p["parametersSchema"],
      templatePath: p["templatePath"],
    })),
    nextLink: result.body["nextLink"],
  };
}

/** Lists all environment definitions available within a catalog. */
export function listEnvironmentDefinitionsByCatalog(
  context: Client,
  projectName: string,
  catalogName: string,
  options: ListEnvironmentDefinitionsByCatalogOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<EnvironmentDefinition> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listEnvironmentDefinitionsByCatalogSend(
        context,
        projectName,
        catalogName,
        options,
      ),
    _listEnvironmentDefinitionsByCatalogDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getEnvironmentDefinitionSend(
  context: Client,
  projectName: string,
  catalogName: string,
  definitionName: string,
  options: GetEnvironmentDefinitionOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | EnvironmentsGetEnvironmentDefinition200Response
  | EnvironmentsGetEnvironmentDefinitionDefaultResponse
> {
  return context
    .path(
      "/projects/{projectName}/catalogs/{catalogName}/environmentDefinitions/{definitionName}",
      projectName,
      catalogName,
      definitionName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getEnvironmentDefinitionDeserialize(
  result:
    | EnvironmentsGetEnvironmentDefinition200Response
    | EnvironmentsGetEnvironmentDefinitionDefaultResponse,
): Promise<EnvironmentDefinition> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    uri: result.body["uri"],
    id: result.body["id"],
    name: result.body["name"],
    catalogName: result.body["catalogName"],
    description: result.body["description"],
    parameters:
      result.body["parameters"] === undefined
        ? result.body["parameters"]
        : result.body["parameters"].map((p) => ({
            id: p["id"],
            name: p["name"],
            description: p["description"],
            default: p["default"],
            type: p["type"],
            readOnly: p["readOnly"],
            required: p["required"],
            allowed: p["allowed"],
          })),
    parametersSchema: result.body["parametersSchema"],
    templatePath: result.body["templatePath"],
  };
}

/** Get an environment definition from a catalog. */
export async function getEnvironmentDefinition(
  context: Client,
  projectName: string,
  catalogName: string,
  definitionName: string,
  options: GetEnvironmentDefinitionOptionalParams = { requestOptions: {} },
): Promise<EnvironmentDefinition> {
  const result = await _getEnvironmentDefinitionSend(
    context,
    projectName,
    catalogName,
    definitionName,
    options,
  );
  return _getEnvironmentDefinitionDeserialize(result);
}

export function _listEnvironmentTypesSend(
  context: Client,
  projectName: string,
  options: ListEnvironmentTypesOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | EnvironmentsListEnvironmentTypes200Response
  | EnvironmentsListEnvironmentTypesDefaultResponse
> {
  return context
    .path("/projects/{projectName}/environmentTypes", projectName)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listEnvironmentTypesDeserialize(
  result:
    | EnvironmentsListEnvironmentTypes200Response
    | EnvironmentsListEnvironmentTypesDefaultResponse,
): Promise<_PagedEnvironmentType> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      uri: p["uri"],
      name: p["name"],
      deploymentTargetId: p["deploymentTargetId"],
      status: p["status"],
      displayName: p["displayName"],
    })),
    nextLink: result.body["nextLink"],
  };
}

/** Lists all environment types configured for a project. */
export function listEnvironmentTypes(
  context: Client,
  projectName: string,
  options: ListEnvironmentTypesOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<EnvironmentType> {
  return buildPagedAsyncIterator(
    context,
    () => _listEnvironmentTypesSend(context, projectName, options),
    _listEnvironmentTypesDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
