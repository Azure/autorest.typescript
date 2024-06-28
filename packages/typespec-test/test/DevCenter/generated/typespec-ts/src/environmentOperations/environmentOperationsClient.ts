// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { PollerLike, OperationState } from "@azure/core-lro";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  OperationState,
  Environment,
  Catalog,
  EnvironmentDefinition,
  EnvironmentType,
} from "./models/models.js";
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
} from "./models/options.js";
import { PagedAsyncIterableIterator } from "./models/pagingTypes.js";
import {
  createEnvironmentOperations,
  EnvironmentOperationsClientOptions,
  DevCenterServiceContext,
  listAllEnvironments,
  listEnvironments,
  getEnvironment,
  createOrUpdateEnvironment,
  deleteEnvironment,
  listCatalogs,
  getCatalog,
  listEnvironmentDefinitions,
  listEnvironmentDefinitionsByCatalog,
  getEnvironmentDefinition,
  listEnvironmentTypes,
} from "./api/index.js";

export { EnvironmentOperationsClientOptions } from "./api/environmentOperationsContext.js";

export class EnvironmentOperationsClient {
  private _client: DevCenterServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: TokenCredential,
    options: EnvironmentOperationsClientOptions = {},
  ) {
    this._client = createEnvironmentOperations(
      endpointParam,
      credential,
      options,
    );
    this.pipeline = this._client.pipeline;
  }

  /** Lists the environments for a project. */
  listAllEnvironments(
    projectName: string,
    options: ListAllEnvironmentsOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<Environment> {
    return listAllEnvironments(this._client, projectName, options);
  }

  /** Lists the environments for a project and user. */
  listEnvironments(
    projectName: string,
    userId: string,
    options: ListEnvironmentsOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<Environment> {
    return listEnvironments(this._client, projectName, userId, options);
  }

  /** Gets an environment. */
  getEnvironment(
    projectName: string,
    userId: string,
    environmentName: string,
    options: GetEnvironmentOptionalParams = { requestOptions: {} },
  ): Promise<Environment> {
    return getEnvironment(
      this._client,
      projectName,
      userId,
      environmentName,
      options,
    );
  }

  /** Creates or updates an environment. */
  createOrUpdateEnvironment(
    projectName: string,
    userId: string,
    environmentName: string,
    body: Environment,
    options: CreateOrUpdateEnvironmentOptionalParams = { requestOptions: {} },
  ): PollerLike<OperationState<Environment>, Environment> {
    return createOrUpdateEnvironment(
      this._client,
      projectName,
      userId,
      environmentName,
      body,
      options,
    );
  }

  /** Deletes an environment and all its associated resources */
  deleteEnvironment(
    projectName: string,
    userId: string,
    environmentName: string,
    options: DeleteEnvironmentOptionalParams = { requestOptions: {} },
  ): PollerLike<OperationState<void>, void> {
    return deleteEnvironment(
      this._client,
      projectName,
      userId,
      environmentName,
      options,
    );
  }

  /** Lists all of the catalogs available for a project. */
  listCatalogs(
    projectName: string,
    options: ListCatalogsOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<Catalog> {
    return listCatalogs(this._client, projectName, options);
  }

  /** Gets the specified catalog within the project. */
  getCatalog(
    projectName: string,
    catalogName: string,
    options: GetCatalogOptionalParams = { requestOptions: {} },
  ): Promise<Catalog> {
    return getCatalog(this._client, projectName, catalogName, options);
  }

  /** Lists all environment definitions available for a project. */
  listEnvironmentDefinitions(
    projectName: string,
    options: ListEnvironmentDefinitionsOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<EnvironmentDefinition> {
    return listEnvironmentDefinitions(this._client, projectName, options);
  }

  /** Lists all environment definitions available within a catalog. */
  listEnvironmentDefinitionsByCatalog(
    projectName: string,
    catalogName: string,
    options: ListEnvironmentDefinitionsByCatalogOptionalParams = {
      requestOptions: {},
    },
  ): PagedAsyncIterableIterator<EnvironmentDefinition> {
    return listEnvironmentDefinitionsByCatalog(
      this._client,
      projectName,
      catalogName,
      options,
    );
  }

  /** Get an environment definition from a catalog. */
  getEnvironmentDefinition(
    projectName: string,
    catalogName: string,
    definitionName: string,
    options: GetEnvironmentDefinitionOptionalParams = { requestOptions: {} },
  ): Promise<EnvironmentDefinition> {
    return getEnvironmentDefinition(
      this._client,
      projectName,
      catalogName,
      definitionName,
      options,
    );
  }

  /** Lists all environment types configured for a project. */
  listEnvironmentTypes(
    projectName: string,
    options: ListEnvironmentTypesOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<EnvironmentType> {
    return listEnvironmentTypes(this._client, projectName, options);
  }
}
