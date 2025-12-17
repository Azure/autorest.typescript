// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WebContext } from "../../api/webContext.js";
import {
  previewWorkflow,
  validateBackendForBuild,
  getLinkedBackendsForBuild,
  unlinkBackendFromBuild,
  linkBackendToBuild,
  getLinkedBackendForBuild,
  validateBackend,
  getLinkedBackends,
  unlinkBackend,
  linkBackend,
  getLinkedBackend,
  validateCustomDomainCanBeAddedToStaticSite,
  listStaticSiteCustomDomains,
  deleteStaticSiteCustomDomain,
  createOrUpdateStaticSiteCustomDomain,
  getStaticSiteCustomDomain,
  listBasicAuth,
  createOrUpdateBasicAuth,
  getBasicAuth,
  getUserProvidedFunctionAppsForStaticSite,
  detachUserProvidedFunctionAppFromStaticSite,
  registerUserProvidedFunctionAppWithStaticSite,
  getUserProvidedFunctionAppForStaticSite,
  getUserProvidedFunctionAppsForStaticSiteBuild,
  detachUserProvidedFunctionAppFromStaticSiteBuild,
  registerUserProvidedFunctionAppWithStaticSiteBuild,
  getUserProvidedFunctionAppForStaticSiteBuild,
  getDatabaseConnectionWithDetails,
  getDatabaseConnections,
  deleteDatabaseConnection,
  updateDatabaseConnection,
  createOrUpdateDatabaseConnection,
  getDatabaseConnection,
  getBuildDatabaseConnectionWithDetails,
  getBuildDatabaseConnections,
  deleteBuildDatabaseConnection,
  updateBuildDatabaseConnection,
  createOrUpdateBuildDatabaseConnection,
  getBuildDatabaseConnection,
  createZipDeploymentForStaticSiteBuild,
  getBuildDatabaseConnectionsWithDetails,
  listStaticSiteBuildFunctionAppSettings,
  listStaticSiteBuildAppSettings,
  listStaticSiteBuildFunctions,
  createOrUpdateStaticSiteBuildFunctionAppSettings,
  createOrUpdateStaticSiteBuildAppSettings,
  getStaticSiteBuilds,
  deleteStaticSiteBuild,
  getStaticSiteBuild,
  createZipDeploymentForStaticSite,
  getDatabaseConnectionsWithDetails,
  resetStaticSiteApiKey,
  getPrivateLinkResources,
  listStaticSiteSecrets,
  listStaticSiteFunctionAppSettings,
  listStaticSiteConfiguredRoles,
  listStaticSiteAppSettings,
  listStaticSiteFunctions,
  detachStaticSite,
  createUserRolesInvitationLink,
  createOrUpdateStaticSiteFunctionAppSettings,
  createOrUpdateStaticSiteAppSettings,
  updateStaticSiteUser,
  deleteStaticSiteUser,
  listStaticSiteUsers,
  list,
  getStaticSitesByResourceGroup,
  deleteStaticSite,
  updateStaticSite,
  createOrUpdateStaticSite,
  getStaticSite,
  getPrivateEndpointConnectionList,
  deletePrivateEndpointConnection,
  approveOrRejectPrivateEndpointConnection,
  getPrivateEndpointConnection,
} from "../../api/staticSites/operations.js";
import {
  StaticSitesPreviewWorkflowOptionalParams,
  StaticSitesValidateBackendForBuildOptionalParams,
  StaticSitesGetLinkedBackendsForBuildOptionalParams,
  StaticSitesUnlinkBackendFromBuildOptionalParams,
  StaticSitesLinkBackendToBuildOptionalParams,
  StaticSitesGetLinkedBackendForBuildOptionalParams,
  StaticSitesValidateBackendOptionalParams,
  StaticSitesGetLinkedBackendsOptionalParams,
  StaticSitesUnlinkBackendOptionalParams,
  StaticSitesLinkBackendOptionalParams,
  StaticSitesGetLinkedBackendOptionalParams,
  StaticSitesValidateCustomDomainCanBeAddedToStaticSiteOptionalParams,
  StaticSitesListStaticSiteCustomDomainsOptionalParams,
  StaticSitesDeleteStaticSiteCustomDomainOptionalParams,
  StaticSitesCreateOrUpdateStaticSiteCustomDomainOptionalParams,
  StaticSitesGetStaticSiteCustomDomainOptionalParams,
  StaticSitesListBasicAuthOptionalParams,
  StaticSitesCreateOrUpdateBasicAuthOptionalParams,
  StaticSitesGetBasicAuthOptionalParams,
  StaticSitesGetUserProvidedFunctionAppsForStaticSiteOptionalParams,
  StaticSitesDetachUserProvidedFunctionAppFromStaticSiteOptionalParams,
  StaticSitesRegisterUserProvidedFunctionAppWithStaticSiteOptionalParams,
  StaticSitesGetUserProvidedFunctionAppForStaticSiteOptionalParams,
  StaticSitesGetUserProvidedFunctionAppsForStaticSiteBuildOptionalParams,
  StaticSitesDetachUserProvidedFunctionAppFromStaticSiteBuildOptionalParams,
  StaticSitesRegisterUserProvidedFunctionAppWithStaticSiteBuildOptionalParams,
  StaticSitesGetUserProvidedFunctionAppForStaticSiteBuildOptionalParams,
  StaticSitesGetDatabaseConnectionWithDetailsOptionalParams,
  StaticSitesGetDatabaseConnectionsOptionalParams,
  StaticSitesDeleteDatabaseConnectionOptionalParams,
  StaticSitesUpdateDatabaseConnectionOptionalParams,
  StaticSitesCreateOrUpdateDatabaseConnectionOptionalParams,
  StaticSitesGetDatabaseConnectionOptionalParams,
  StaticSitesGetBuildDatabaseConnectionWithDetailsOptionalParams,
  StaticSitesGetBuildDatabaseConnectionsOptionalParams,
  StaticSitesDeleteBuildDatabaseConnectionOptionalParams,
  StaticSitesUpdateBuildDatabaseConnectionOptionalParams,
  StaticSitesCreateOrUpdateBuildDatabaseConnectionOptionalParams,
  StaticSitesGetBuildDatabaseConnectionOptionalParams,
  StaticSitesCreateZipDeploymentForStaticSiteBuildOptionalParams,
  StaticSitesGetBuildDatabaseConnectionsWithDetailsOptionalParams,
  StaticSitesListStaticSiteBuildFunctionAppSettingsOptionalParams,
  StaticSitesListStaticSiteBuildAppSettingsOptionalParams,
  StaticSitesListStaticSiteBuildFunctionsOptionalParams,
  StaticSitesCreateOrUpdateStaticSiteBuildFunctionAppSettingsOptionalParams,
  StaticSitesCreateOrUpdateStaticSiteBuildAppSettingsOptionalParams,
  StaticSitesGetStaticSiteBuildsOptionalParams,
  StaticSitesDeleteStaticSiteBuildOptionalParams,
  StaticSitesGetStaticSiteBuildOptionalParams,
  StaticSitesCreateZipDeploymentForStaticSiteOptionalParams,
  StaticSitesGetDatabaseConnectionsWithDetailsOptionalParams,
  StaticSitesResetStaticSiteApiKeyOptionalParams,
  StaticSitesGetPrivateLinkResourcesOptionalParams,
  StaticSitesListStaticSiteSecretsOptionalParams,
  StaticSitesListStaticSiteFunctionAppSettingsOptionalParams,
  StaticSitesListStaticSiteConfiguredRolesOptionalParams,
  StaticSitesListStaticSiteAppSettingsOptionalParams,
  StaticSitesListStaticSiteFunctionsOptionalParams,
  StaticSitesDetachStaticSiteOptionalParams,
  StaticSitesCreateUserRolesInvitationLinkOptionalParams,
  StaticSitesCreateOrUpdateStaticSiteFunctionAppSettingsOptionalParams,
  StaticSitesCreateOrUpdateStaticSiteAppSettingsOptionalParams,
  StaticSitesUpdateStaticSiteUserOptionalParams,
  StaticSitesDeleteStaticSiteUserOptionalParams,
  StaticSitesListStaticSiteUsersOptionalParams,
  StaticSitesListOptionalParams,
  StaticSitesGetStaticSitesByResourceGroupOptionalParams,
  StaticSitesDeleteStaticSiteOptionalParams,
  StaticSitesUpdateStaticSiteOptionalParams,
  StaticSitesCreateOrUpdateStaticSiteOptionalParams,
  StaticSitesGetStaticSiteOptionalParams,
  StaticSitesGetPrivateEndpointConnectionListOptionalParams,
  StaticSitesDeletePrivateEndpointConnectionOptionalParams,
  StaticSitesApproveOrRejectPrivateEndpointConnectionOptionalParams,
  StaticSitesGetPrivateEndpointConnectionOptionalParams,
} from "../../api/staticSites/options.js";
import {
  PrivateLinkResourcesWrapper,
  RemotePrivateEndpointConnectionARMResource,
  StaticSiteARMResource,
  StaticSitePatchResource,
  StaticSiteUserARMResource,
  StringDictionary,
  StaticSiteUserInvitationRequestResource,
  StaticSiteUserInvitationResponseResource,
  StaticSiteFunctionOverviewARMResource,
  StringList,
  StaticSiteResetPropertiesARMResource,
  DatabaseConnection,
  StaticSiteZipDeploymentARMResource,
  StaticSiteBuildARMResource,
  DatabaseConnectionPatchRequest,
  StaticSiteUserProvidedFunctionAppARMResource,
  StaticSiteBasicAuthPropertiesARMResource,
  BasicAuthName,
  StaticSiteCustomDomainOverviewARMResource,
  StaticSiteCustomDomainRequestPropertiesARMResource,
  StaticSiteLinkedBackendARMResource,
  StaticSitesWorkflowPreviewRequest,
  StaticSitesWorkflowPreview,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a StaticSites operations. */
export interface StaticSitesOperations {
  /** Description for Generates a preview workflow file for the static site */
  previewWorkflow: (
    location: string,
    staticSitesWorkflowPreviewRequest: StaticSitesWorkflowPreviewRequest,
    options?: StaticSitesPreviewWorkflowOptionalParams,
  ) => Promise<StaticSitesWorkflowPreview>;
  /** Validates that a backend can be linked to a static site build */
  validateBackendForBuild: (
    resourceGroupName: string,
    name: string,
    environmentName: string,
    linkedBackendName: string,
    staticSiteLinkedBackendEnvelope: StaticSiteLinkedBackendARMResource,
    options?: StaticSitesValidateBackendForBuildOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Returns details of all backends linked to a static site build */
  getLinkedBackendsForBuild: (
    resourceGroupName: string,
    name: string,
    environmentName: string,
    options?: StaticSitesGetLinkedBackendsForBuildOptionalParams,
  ) => PagedAsyncIterableIterator<StaticSiteLinkedBackendARMResource>;
  /** Unlink a backend from a static site build */
  unlinkBackendFromBuild: (
    resourceGroupName: string,
    name: string,
    environmentName: string,
    linkedBackendName: string,
    options?: StaticSitesUnlinkBackendFromBuildOptionalParams,
  ) => Promise<void>;
  /** Link backend to a static site build */
  linkBackendToBuild: (
    resourceGroupName: string,
    name: string,
    environmentName: string,
    linkedBackendName: string,
    staticSiteLinkedBackendEnvelope: StaticSiteLinkedBackendARMResource,
    options?: StaticSitesLinkBackendToBuildOptionalParams,
  ) => PollerLike<
    OperationState<StaticSiteLinkedBackendARMResource>,
    StaticSiteLinkedBackendARMResource
  >;
  /** Returns the details of a linked backend linked to a static site build by name */
  getLinkedBackendForBuild: (
    resourceGroupName: string,
    name: string,
    environmentName: string,
    linkedBackendName: string,
    options?: StaticSitesGetLinkedBackendForBuildOptionalParams,
  ) => Promise<StaticSiteLinkedBackendARMResource>;
  /** Validates that a backend can be linked to a static site */
  validateBackend: (
    resourceGroupName: string,
    name: string,
    linkedBackendName: string,
    staticSiteLinkedBackendEnvelope: StaticSiteLinkedBackendARMResource,
    options?: StaticSitesValidateBackendOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Returns details of all backends linked to a static site */
  getLinkedBackends: (
    resourceGroupName: string,
    name: string,
    options?: StaticSitesGetLinkedBackendsOptionalParams,
  ) => PagedAsyncIterableIterator<StaticSiteLinkedBackendARMResource>;
  /** Unlink a backend from a static site */
  unlinkBackend: (
    resourceGroupName: string,
    name: string,
    linkedBackendName: string,
    options?: StaticSitesUnlinkBackendOptionalParams,
  ) => Promise<void>;
  /** Link backend to a static site */
  linkBackend: (
    resourceGroupName: string,
    name: string,
    linkedBackendName: string,
    staticSiteLinkedBackendEnvelope: StaticSiteLinkedBackendARMResource,
    options?: StaticSitesLinkBackendOptionalParams,
  ) => PollerLike<
    OperationState<StaticSiteLinkedBackendARMResource>,
    StaticSiteLinkedBackendARMResource
  >;
  /** Returns the details of a linked backend linked to a static site by name */
  getLinkedBackend: (
    resourceGroupName: string,
    name: string,
    linkedBackendName: string,
    options?: StaticSitesGetLinkedBackendOptionalParams,
  ) => Promise<StaticSiteLinkedBackendARMResource>;
  /** Description for Validates a particular custom domain can be added to a static site. */
  validateCustomDomainCanBeAddedToStaticSite: (
    resourceGroupName: string,
    name: string,
    domainName: string,
    staticSiteCustomDomainRequestPropertiesEnvelope: StaticSiteCustomDomainRequestPropertiesARMResource,
    options?: StaticSitesValidateCustomDomainCanBeAddedToStaticSiteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Description for Gets all static site custom domains for a particular static site. */
  listStaticSiteCustomDomains: (
    resourceGroupName: string,
    name: string,
    options?: StaticSitesListStaticSiteCustomDomainsOptionalParams,
  ) => PagedAsyncIterableIterator<StaticSiteCustomDomainOverviewARMResource>;
  /** Description for Deletes a custom domain. */
  deleteStaticSiteCustomDomain: (
    resourceGroupName: string,
    name: string,
    domainName: string,
    options?: StaticSitesDeleteStaticSiteCustomDomainOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Description for Creates a new static site custom domain in an existing resource group and static site. */
  createOrUpdateStaticSiteCustomDomain: (
    resourceGroupName: string,
    name: string,
    domainName: string,
    staticSiteCustomDomainRequestPropertiesEnvelope: StaticSiteCustomDomainOverviewARMResource,
    options?: StaticSitesCreateOrUpdateStaticSiteCustomDomainOptionalParams,
  ) => PollerLike<
    OperationState<StaticSiteCustomDomainOverviewARMResource>,
    StaticSiteCustomDomainOverviewARMResource
  >;
  /** Description for Gets an existing custom domain for a particular static site. */
  getStaticSiteCustomDomain: (
    resourceGroupName: string,
    name: string,
    domainName: string,
    options?: StaticSitesGetStaticSiteCustomDomainOptionalParams,
  ) => Promise<StaticSiteCustomDomainOverviewARMResource>;
  /** Description for Gets the basic auth properties for a static site as a collection. */
  listBasicAuth: (
    resourceGroupName: string,
    name: string,
    options?: StaticSitesListBasicAuthOptionalParams,
  ) => PagedAsyncIterableIterator<StaticSiteBasicAuthPropertiesARMResource>;
  /** Description for Adds or updates basic auth for a static site. */
  createOrUpdateBasicAuth: (
    resourceGroupName: string,
    name: string,
    basicAuthName: BasicAuthName,
    basicAuthEnvelope: StaticSiteBasicAuthPropertiesARMResource,
    options?: StaticSitesCreateOrUpdateBasicAuthOptionalParams,
  ) => Promise<StaticSiteBasicAuthPropertiesARMResource>;
  /** Description for Gets the basic auth properties for a static site. */
  getBasicAuth: (
    resourceGroupName: string,
    name: string,
    basicAuthName: BasicAuthName,
    options?: StaticSitesGetBasicAuthOptionalParams,
  ) => Promise<StaticSiteBasicAuthPropertiesARMResource>;
  /** Description for Gets the details of the user provided function apps registered with a static site */
  getUserProvidedFunctionAppsForStaticSite: (
    resourceGroupName: string,
    name: string,
    options?: StaticSitesGetUserProvidedFunctionAppsForStaticSiteOptionalParams,
  ) => PagedAsyncIterableIterator<StaticSiteUserProvidedFunctionAppARMResource>;
  /** Description for Detach the user provided function app from the static site */
  detachUserProvidedFunctionAppFromStaticSite: (
    resourceGroupName: string,
    name: string,
    functionAppName: string,
    options?: StaticSitesDetachUserProvidedFunctionAppFromStaticSiteOptionalParams,
  ) => Promise<void>;
  /** Description for Register a user provided function app with a static site */
  registerUserProvidedFunctionAppWithStaticSite: (
    resourceGroupName: string,
    name: string,
    functionAppName: string,
    staticSiteUserProvidedFunctionEnvelope: StaticSiteUserProvidedFunctionAppARMResource,
    options?: StaticSitesRegisterUserProvidedFunctionAppWithStaticSiteOptionalParams,
  ) => PollerLike<
    OperationState<StaticSiteUserProvidedFunctionAppARMResource>,
    StaticSiteUserProvidedFunctionAppARMResource
  >;
  /** Description for Gets the details of the user provided function app registered with a static site */
  getUserProvidedFunctionAppForStaticSite: (
    resourceGroupName: string,
    name: string,
    functionAppName: string,
    options?: StaticSitesGetUserProvidedFunctionAppForStaticSiteOptionalParams,
  ) => Promise<StaticSiteUserProvidedFunctionAppARMResource>;
  /** Description for Gets the details of the user provided function apps registered with a static site build */
  getUserProvidedFunctionAppsForStaticSiteBuild: (
    resourceGroupName: string,
    name: string,
    environmentName: string,
    options?: StaticSitesGetUserProvidedFunctionAppsForStaticSiteBuildOptionalParams,
  ) => PagedAsyncIterableIterator<StaticSiteUserProvidedFunctionAppARMResource>;
  /** Description for Detach the user provided function app from the static site build */
  detachUserProvidedFunctionAppFromStaticSiteBuild: (
    resourceGroupName: string,
    name: string,
    environmentName: string,
    functionAppName: string,
    options?: StaticSitesDetachUserProvidedFunctionAppFromStaticSiteBuildOptionalParams,
  ) => Promise<void>;
  /** Description for Register a user provided function app with a static site build */
  registerUserProvidedFunctionAppWithStaticSiteBuild: (
    resourceGroupName: string,
    name: string,
    environmentName: string,
    functionAppName: string,
    staticSiteUserProvidedFunctionEnvelope: StaticSiteUserProvidedFunctionAppARMResource,
    options?: StaticSitesRegisterUserProvidedFunctionAppWithStaticSiteBuildOptionalParams,
  ) => PollerLike<
    OperationState<StaticSiteUserProvidedFunctionAppARMResource>,
    StaticSiteUserProvidedFunctionAppARMResource
  >;
  /** Description for Gets the details of the user provided function app registered with a static site build */
  getUserProvidedFunctionAppForStaticSiteBuild: (
    resourceGroupName: string,
    name: string,
    environmentName: string,
    functionAppName: string,
    options?: StaticSitesGetUserProvidedFunctionAppForStaticSiteBuildOptionalParams,
  ) => Promise<StaticSiteUserProvidedFunctionAppARMResource>;
  /** Returns details of a database connection for a static site by name */
  getDatabaseConnectionWithDetails: (
    resourceGroupName: string,
    name: string,
    databaseConnectionName: string,
    options?: StaticSitesGetDatabaseConnectionWithDetailsOptionalParams,
  ) => Promise<DatabaseConnection>;
  /** Returns overviews of database connections for a static site */
  getDatabaseConnections: (
    resourceGroupName: string,
    name: string,
    options?: StaticSitesGetDatabaseConnectionsOptionalParams,
  ) => PagedAsyncIterableIterator<DatabaseConnection>;
  /** Delete a database connection for a static site */
  deleteDatabaseConnection: (
    resourceGroupName: string,
    name: string,
    databaseConnectionName: string,
    options?: StaticSitesDeleteDatabaseConnectionOptionalParams,
  ) => Promise<void>;
  /** Description for Create or update a database connection for a static site */
  updateDatabaseConnection: (
    resourceGroupName: string,
    name: string,
    databaseConnectionName: string,
    databaseConnectionRequestEnvelope: DatabaseConnectionPatchRequest,
    options?: StaticSitesUpdateDatabaseConnectionOptionalParams,
  ) => Promise<DatabaseConnection>;
  /** Description for Create or update a database connection for a static site */
  createOrUpdateDatabaseConnection: (
    resourceGroupName: string,
    name: string,
    databaseConnectionName: string,
    databaseConnectionRequestEnvelope: DatabaseConnection,
    options?: StaticSitesCreateOrUpdateDatabaseConnectionOptionalParams,
  ) => Promise<DatabaseConnection>;
  /** Returns overview of a database connection for a static site by name */
  getDatabaseConnection: (
    resourceGroupName: string,
    name: string,
    databaseConnectionName: string,
    options?: StaticSitesGetDatabaseConnectionOptionalParams,
  ) => Promise<DatabaseConnection>;
  /** Returns details of a database connection for a static site build by name */
  getBuildDatabaseConnectionWithDetails: (
    resourceGroupName: string,
    name: string,
    environmentName: string,
    databaseConnectionName: string,
    options?: StaticSitesGetBuildDatabaseConnectionWithDetailsOptionalParams,
  ) => Promise<DatabaseConnection>;
  /** Returns overviews of database connections for a static site build */
  getBuildDatabaseConnections: (
    resourceGroupName: string,
    name: string,
    environmentName: string,
    options?: StaticSitesGetBuildDatabaseConnectionsOptionalParams,
  ) => PagedAsyncIterableIterator<DatabaseConnection>;
  /** Delete a database connection for a static site build */
  deleteBuildDatabaseConnection: (
    resourceGroupName: string,
    name: string,
    environmentName: string,
    databaseConnectionName: string,
    options?: StaticSitesDeleteBuildDatabaseConnectionOptionalParams,
  ) => Promise<void>;
  /** Description for Create or update a database connection for a static site build */
  updateBuildDatabaseConnection: (
    resourceGroupName: string,
    name: string,
    environmentName: string,
    databaseConnectionName: string,
    databaseConnectionRequestEnvelope: DatabaseConnectionPatchRequest,
    options?: StaticSitesUpdateBuildDatabaseConnectionOptionalParams,
  ) => Promise<DatabaseConnection>;
  /** Description for Create or update a database connection for a static site build */
  createOrUpdateBuildDatabaseConnection: (
    resourceGroupName: string,
    name: string,
    environmentName: string,
    databaseConnectionName: string,
    databaseConnectionRequestEnvelope: DatabaseConnection,
    options?: StaticSitesCreateOrUpdateBuildDatabaseConnectionOptionalParams,
  ) => Promise<DatabaseConnection>;
  /** Returns overview of a database connection for a static site build by name */
  getBuildDatabaseConnection: (
    resourceGroupName: string,
    name: string,
    environmentName: string,
    databaseConnectionName: string,
    options?: StaticSitesGetBuildDatabaseConnectionOptionalParams,
  ) => Promise<DatabaseConnection>;
  /** Description for Deploys zipped content to a specific environment of a static site. */
  createZipDeploymentForStaticSiteBuild: (
    resourceGroupName: string,
    name: string,
    environmentName: string,
    staticSiteZipDeploymentEnvelope: StaticSiteZipDeploymentARMResource,
    options?: StaticSitesCreateZipDeploymentForStaticSiteBuildOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Returns details of database connections for a static site build */
  getBuildDatabaseConnectionsWithDetails: (
    resourceGroupName: string,
    name: string,
    environmentName: string,
    options?: StaticSitesGetBuildDatabaseConnectionsWithDetailsOptionalParams,
  ) => PagedAsyncIterableIterator<DatabaseConnection>;
  /** Description for Gets the application settings of a static site build. */
  listStaticSiteBuildFunctionAppSettings: (
    resourceGroupName: string,
    name: string,
    environmentName: string,
    options?: StaticSitesListStaticSiteBuildFunctionAppSettingsOptionalParams,
  ) => Promise<StringDictionary>;
  /** Description for Gets the application settings of a static site build. */
  listStaticSiteBuildAppSettings: (
    resourceGroupName: string,
    name: string,
    environmentName: string,
    options?: StaticSitesListStaticSiteBuildAppSettingsOptionalParams,
  ) => Promise<StringDictionary>;
  /** Description for Gets the functions of a particular static site build. */
  listStaticSiteBuildFunctions: (
    resourceGroupName: string,
    name: string,
    environmentName: string,
    options?: StaticSitesListStaticSiteBuildFunctionsOptionalParams,
  ) => PagedAsyncIterableIterator<StaticSiteFunctionOverviewARMResource>;
  /** Description for Creates or updates the function app settings of a static site build. */
  createOrUpdateStaticSiteBuildFunctionAppSettings: (
    resourceGroupName: string,
    name: string,
    environmentName: string,
    appSettings: StringDictionary,
    options?: StaticSitesCreateOrUpdateStaticSiteBuildFunctionAppSettingsOptionalParams,
  ) => Promise<StringDictionary>;
  /** Description for Creates or updates the app settings of a static site build. */
  createOrUpdateStaticSiteBuildAppSettings: (
    resourceGroupName: string,
    name: string,
    environmentName: string,
    appSettings: StringDictionary,
    options?: StaticSitesCreateOrUpdateStaticSiteBuildAppSettingsOptionalParams,
  ) => Promise<StringDictionary>;
  /** Description for Gets all static site builds for a particular static site. */
  getStaticSiteBuilds: (
    resourceGroupName: string,
    name: string,
    options?: StaticSitesGetStaticSiteBuildsOptionalParams,
  ) => PagedAsyncIterableIterator<StaticSiteBuildARMResource>;
  /** Description for Deletes a static site build. */
  deleteStaticSiteBuild: (
    resourceGroupName: string,
    name: string,
    environmentName: string,
    options?: StaticSitesDeleteStaticSiteBuildOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Description for Gets the details of a static site build. */
  getStaticSiteBuild: (
    resourceGroupName: string,
    name: string,
    environmentName: string,
    options?: StaticSitesGetStaticSiteBuildOptionalParams,
  ) => Promise<StaticSiteBuildARMResource>;
  /** Description for Deploys zipped content to a static site. */
  createZipDeploymentForStaticSite: (
    resourceGroupName: string,
    name: string,
    staticSiteZipDeploymentEnvelope: StaticSiteZipDeploymentARMResource,
    options?: StaticSitesCreateZipDeploymentForStaticSiteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Returns details of database connections for a static site */
  getDatabaseConnectionsWithDetails: (
    resourceGroupName: string,
    name: string,
    options?: StaticSitesGetDatabaseConnectionsWithDetailsOptionalParams,
  ) => PagedAsyncIterableIterator<DatabaseConnection>;
  /** Description for Resets the api key for an existing static site. */
  resetStaticSiteApiKey: (
    resourceGroupName: string,
    name: string,
    resetPropertiesEnvelope: StaticSiteResetPropertiesARMResource,
    options?: StaticSitesResetStaticSiteApiKeyOptionalParams,
  ) => Promise<void>;
  /** Description for Gets the private link resources */
  getPrivateLinkResources: (
    resourceGroupName: string,
    name: string,
    options?: StaticSitesGetPrivateLinkResourcesOptionalParams,
  ) => Promise<PrivateLinkResourcesWrapper>;
  /** Description for Lists the secrets for an existing static site. */
  listStaticSiteSecrets: (
    resourceGroupName: string,
    name: string,
    options?: StaticSitesListStaticSiteSecretsOptionalParams,
  ) => Promise<StringDictionary>;
  /** Description for Gets the application settings of a static site. */
  listStaticSiteFunctionAppSettings: (
    resourceGroupName: string,
    name: string,
    options?: StaticSitesListStaticSiteFunctionAppSettingsOptionalParams,
  ) => Promise<StringDictionary>;
  /** Description for Lists the roles configured for the static site. */
  listStaticSiteConfiguredRoles: (
    resourceGroupName: string,
    name: string,
    options?: StaticSitesListStaticSiteConfiguredRolesOptionalParams,
  ) => Promise<StringList>;
  /** Description for Gets the application settings of a static site. */
  listStaticSiteAppSettings: (
    resourceGroupName: string,
    name: string,
    options?: StaticSitesListStaticSiteAppSettingsOptionalParams,
  ) => Promise<StringDictionary>;
  /** Description for Gets the functions of a static site. */
  listStaticSiteFunctions: (
    resourceGroupName: string,
    name: string,
    options?: StaticSitesListStaticSiteFunctionsOptionalParams,
  ) => PagedAsyncIterableIterator<StaticSiteFunctionOverviewARMResource>;
  /** Description for Detaches a static site. */
  detachStaticSite: (
    resourceGroupName: string,
    name: string,
    options?: StaticSitesDetachStaticSiteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Description for Creates an invitation link for a user with the role */
  createUserRolesInvitationLink: (
    resourceGroupName: string,
    name: string,
    staticSiteUserRolesInvitationEnvelope: StaticSiteUserInvitationRequestResource,
    options?: StaticSitesCreateUserRolesInvitationLinkOptionalParams,
  ) => Promise<StaticSiteUserInvitationResponseResource>;
  /** Description for Creates or updates the function app settings of a static site. */
  createOrUpdateStaticSiteFunctionAppSettings: (
    resourceGroupName: string,
    name: string,
    appSettings: StringDictionary,
    options?: StaticSitesCreateOrUpdateStaticSiteFunctionAppSettingsOptionalParams,
  ) => Promise<StringDictionary>;
  /** Description for Creates or updates the app settings of a static site. */
  createOrUpdateStaticSiteAppSettings: (
    resourceGroupName: string,
    name: string,
    appSettings: StringDictionary,
    options?: StaticSitesCreateOrUpdateStaticSiteAppSettingsOptionalParams,
  ) => Promise<StringDictionary>;
  /** Description for Updates a user entry with the listed roles */
  updateStaticSiteUser: (
    resourceGroupName: string,
    name: string,
    authprovider: string,
    userid: string,
    staticSiteUserEnvelope: StaticSiteUserARMResource,
    options?: StaticSitesUpdateStaticSiteUserOptionalParams,
  ) => Promise<StaticSiteUserARMResource>;
  /** Description for Deletes the user entry from the static site. */
  deleteStaticSiteUser: (
    resourceGroupName: string,
    name: string,
    authprovider: string,
    userid: string,
    options?: StaticSitesDeleteStaticSiteUserOptionalParams,
  ) => Promise<void>;
  /** Description for Gets the list of users of a static site. */
  listStaticSiteUsers: (
    resourceGroupName: string,
    name: string,
    authprovider: string,
    options?: StaticSitesListStaticSiteUsersOptionalParams,
  ) => PagedAsyncIterableIterator<StaticSiteUserARMResource>;
  /** Description for Get all Static Sites for a subscription. */
  list: (
    options?: StaticSitesListOptionalParams,
  ) => PagedAsyncIterableIterator<StaticSiteARMResource>;
  /** Description for Gets all static sites in the specified resource group. */
  getStaticSitesByResourceGroup: (
    resourceGroupName: string,
    options?: StaticSitesGetStaticSitesByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<StaticSiteARMResource>;
  /** Description for Deletes a static site. */
  deleteStaticSite: (
    resourceGroupName: string,
    name: string,
    options?: StaticSitesDeleteStaticSiteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Description for Creates a new static site in an existing resource group, or updates an existing static site. */
  updateStaticSite: (
    resourceGroupName: string,
    name: string,
    staticSiteEnvelope: StaticSitePatchResource,
    options?: StaticSitesUpdateStaticSiteOptionalParams,
  ) => Promise<StaticSiteARMResource>;
  /** Description for Creates a new static site in an existing resource group, or updates an existing static site. */
  createOrUpdateStaticSite: (
    resourceGroupName: string,
    name: string,
    staticSiteEnvelope: StaticSiteARMResource,
    options?: StaticSitesCreateOrUpdateStaticSiteOptionalParams,
  ) => PollerLike<OperationState<StaticSiteARMResource>, StaticSiteARMResource>;
  /** Description for Gets the details of a static site. */
  getStaticSite: (
    resourceGroupName: string,
    name: string,
    options?: StaticSitesGetStaticSiteOptionalParams,
  ) => Promise<StaticSiteARMResource>;
  /** Description for Gets the list of private endpoint connections associated with a static site */
  getPrivateEndpointConnectionList: (
    resourceGroupName: string,
    name: string,
    options?: StaticSitesGetPrivateEndpointConnectionListOptionalParams,
  ) => PagedAsyncIterableIterator<RemotePrivateEndpointConnectionARMResource>;
  /** Description for Deletes a private endpoint connection */
  deletePrivateEndpointConnection: (
    resourceGroupName: string,
    name: string,
    privateEndpointConnectionName: string,
    options?: StaticSitesDeletePrivateEndpointConnectionOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Description for Approves or rejects a private endpoint connection */
  approveOrRejectPrivateEndpointConnection: (
    resourceGroupName: string,
    name: string,
    privateEndpointConnectionName: string,
    privateEndpointWrapper: RemotePrivateEndpointConnectionARMResource,
    options?: StaticSitesApproveOrRejectPrivateEndpointConnectionOptionalParams,
  ) => PollerLike<
    OperationState<RemotePrivateEndpointConnectionARMResource>,
    RemotePrivateEndpointConnectionARMResource
  >;
  /** Description for Gets a private endpoint connection */
  getPrivateEndpointConnection: (
    resourceGroupName: string,
    name: string,
    privateEndpointConnectionName: string,
    options?: StaticSitesGetPrivateEndpointConnectionOptionalParams,
  ) => Promise<RemotePrivateEndpointConnectionARMResource>;
}

function _getStaticSites(context: WebContext) {
  return {
    previewWorkflow: (
      location: string,
      staticSitesWorkflowPreviewRequest: StaticSitesWorkflowPreviewRequest,
      options?: StaticSitesPreviewWorkflowOptionalParams,
    ) => previewWorkflow(context, location, staticSitesWorkflowPreviewRequest, options),
    validateBackendForBuild: (
      resourceGroupName: string,
      name: string,
      environmentName: string,
      linkedBackendName: string,
      staticSiteLinkedBackendEnvelope: StaticSiteLinkedBackendARMResource,
      options?: StaticSitesValidateBackendForBuildOptionalParams,
    ) =>
      validateBackendForBuild(
        context,
        resourceGroupName,
        name,
        environmentName,
        linkedBackendName,
        staticSiteLinkedBackendEnvelope,
        options,
      ),
    getLinkedBackendsForBuild: (
      resourceGroupName: string,
      name: string,
      environmentName: string,
      options?: StaticSitesGetLinkedBackendsForBuildOptionalParams,
    ) => getLinkedBackendsForBuild(context, resourceGroupName, name, environmentName, options),
    unlinkBackendFromBuild: (
      resourceGroupName: string,
      name: string,
      environmentName: string,
      linkedBackendName: string,
      options?: StaticSitesUnlinkBackendFromBuildOptionalParams,
    ) =>
      unlinkBackendFromBuild(
        context,
        resourceGroupName,
        name,
        environmentName,
        linkedBackendName,
        options,
      ),
    linkBackendToBuild: (
      resourceGroupName: string,
      name: string,
      environmentName: string,
      linkedBackendName: string,
      staticSiteLinkedBackendEnvelope: StaticSiteLinkedBackendARMResource,
      options?: StaticSitesLinkBackendToBuildOptionalParams,
    ) =>
      linkBackendToBuild(
        context,
        resourceGroupName,
        name,
        environmentName,
        linkedBackendName,
        staticSiteLinkedBackendEnvelope,
        options,
      ),
    getLinkedBackendForBuild: (
      resourceGroupName: string,
      name: string,
      environmentName: string,
      linkedBackendName: string,
      options?: StaticSitesGetLinkedBackendForBuildOptionalParams,
    ) =>
      getLinkedBackendForBuild(
        context,
        resourceGroupName,
        name,
        environmentName,
        linkedBackendName,
        options,
      ),
    validateBackend: (
      resourceGroupName: string,
      name: string,
      linkedBackendName: string,
      staticSiteLinkedBackendEnvelope: StaticSiteLinkedBackendARMResource,
      options?: StaticSitesValidateBackendOptionalParams,
    ) =>
      validateBackend(
        context,
        resourceGroupName,
        name,
        linkedBackendName,
        staticSiteLinkedBackendEnvelope,
        options,
      ),
    getLinkedBackends: (
      resourceGroupName: string,
      name: string,
      options?: StaticSitesGetLinkedBackendsOptionalParams,
    ) => getLinkedBackends(context, resourceGroupName, name, options),
    unlinkBackend: (
      resourceGroupName: string,
      name: string,
      linkedBackendName: string,
      options?: StaticSitesUnlinkBackendOptionalParams,
    ) => unlinkBackend(context, resourceGroupName, name, linkedBackendName, options),
    linkBackend: (
      resourceGroupName: string,
      name: string,
      linkedBackendName: string,
      staticSiteLinkedBackendEnvelope: StaticSiteLinkedBackendARMResource,
      options?: StaticSitesLinkBackendOptionalParams,
    ) =>
      linkBackend(
        context,
        resourceGroupName,
        name,
        linkedBackendName,
        staticSiteLinkedBackendEnvelope,
        options,
      ),
    getLinkedBackend: (
      resourceGroupName: string,
      name: string,
      linkedBackendName: string,
      options?: StaticSitesGetLinkedBackendOptionalParams,
    ) => getLinkedBackend(context, resourceGroupName, name, linkedBackendName, options),
    validateCustomDomainCanBeAddedToStaticSite: (
      resourceGroupName: string,
      name: string,
      domainName: string,
      staticSiteCustomDomainRequestPropertiesEnvelope: StaticSiteCustomDomainRequestPropertiesARMResource,
      options?: StaticSitesValidateCustomDomainCanBeAddedToStaticSiteOptionalParams,
    ) =>
      validateCustomDomainCanBeAddedToStaticSite(
        context,
        resourceGroupName,
        name,
        domainName,
        staticSiteCustomDomainRequestPropertiesEnvelope,
        options,
      ),
    listStaticSiteCustomDomains: (
      resourceGroupName: string,
      name: string,
      options?: StaticSitesListStaticSiteCustomDomainsOptionalParams,
    ) => listStaticSiteCustomDomains(context, resourceGroupName, name, options),
    deleteStaticSiteCustomDomain: (
      resourceGroupName: string,
      name: string,
      domainName: string,
      options?: StaticSitesDeleteStaticSiteCustomDomainOptionalParams,
    ) => deleteStaticSiteCustomDomain(context, resourceGroupName, name, domainName, options),
    createOrUpdateStaticSiteCustomDomain: (
      resourceGroupName: string,
      name: string,
      domainName: string,
      staticSiteCustomDomainRequestPropertiesEnvelope: StaticSiteCustomDomainOverviewARMResource,
      options?: StaticSitesCreateOrUpdateStaticSiteCustomDomainOptionalParams,
    ) =>
      createOrUpdateStaticSiteCustomDomain(
        context,
        resourceGroupName,
        name,
        domainName,
        staticSiteCustomDomainRequestPropertiesEnvelope,
        options,
      ),
    getStaticSiteCustomDomain: (
      resourceGroupName: string,
      name: string,
      domainName: string,
      options?: StaticSitesGetStaticSiteCustomDomainOptionalParams,
    ) => getStaticSiteCustomDomain(context, resourceGroupName, name, domainName, options),
    listBasicAuth: (
      resourceGroupName: string,
      name: string,
      options?: StaticSitesListBasicAuthOptionalParams,
    ) => listBasicAuth(context, resourceGroupName, name, options),
    createOrUpdateBasicAuth: (
      resourceGroupName: string,
      name: string,
      basicAuthName: BasicAuthName,
      basicAuthEnvelope: StaticSiteBasicAuthPropertiesARMResource,
      options?: StaticSitesCreateOrUpdateBasicAuthOptionalParams,
    ) =>
      createOrUpdateBasicAuth(
        context,
        resourceGroupName,
        name,
        basicAuthName,
        basicAuthEnvelope,
        options,
      ),
    getBasicAuth: (
      resourceGroupName: string,
      name: string,
      basicAuthName: BasicAuthName,
      options?: StaticSitesGetBasicAuthOptionalParams,
    ) => getBasicAuth(context, resourceGroupName, name, basicAuthName, options),
    getUserProvidedFunctionAppsForStaticSite: (
      resourceGroupName: string,
      name: string,
      options?: StaticSitesGetUserProvidedFunctionAppsForStaticSiteOptionalParams,
    ) => getUserProvidedFunctionAppsForStaticSite(context, resourceGroupName, name, options),
    detachUserProvidedFunctionAppFromStaticSite: (
      resourceGroupName: string,
      name: string,
      functionAppName: string,
      options?: StaticSitesDetachUserProvidedFunctionAppFromStaticSiteOptionalParams,
    ) =>
      detachUserProvidedFunctionAppFromStaticSite(
        context,
        resourceGroupName,
        name,
        functionAppName,
        options,
      ),
    registerUserProvidedFunctionAppWithStaticSite: (
      resourceGroupName: string,
      name: string,
      functionAppName: string,
      staticSiteUserProvidedFunctionEnvelope: StaticSiteUserProvidedFunctionAppARMResource,
      options?: StaticSitesRegisterUserProvidedFunctionAppWithStaticSiteOptionalParams,
    ) =>
      registerUserProvidedFunctionAppWithStaticSite(
        context,
        resourceGroupName,
        name,
        functionAppName,
        staticSiteUserProvidedFunctionEnvelope,
        options,
      ),
    getUserProvidedFunctionAppForStaticSite: (
      resourceGroupName: string,
      name: string,
      functionAppName: string,
      options?: StaticSitesGetUserProvidedFunctionAppForStaticSiteOptionalParams,
    ) =>
      getUserProvidedFunctionAppForStaticSite(
        context,
        resourceGroupName,
        name,
        functionAppName,
        options,
      ),
    getUserProvidedFunctionAppsForStaticSiteBuild: (
      resourceGroupName: string,
      name: string,
      environmentName: string,
      options?: StaticSitesGetUserProvidedFunctionAppsForStaticSiteBuildOptionalParams,
    ) =>
      getUserProvidedFunctionAppsForStaticSiteBuild(
        context,
        resourceGroupName,
        name,
        environmentName,
        options,
      ),
    detachUserProvidedFunctionAppFromStaticSiteBuild: (
      resourceGroupName: string,
      name: string,
      environmentName: string,
      functionAppName: string,
      options?: StaticSitesDetachUserProvidedFunctionAppFromStaticSiteBuildOptionalParams,
    ) =>
      detachUserProvidedFunctionAppFromStaticSiteBuild(
        context,
        resourceGroupName,
        name,
        environmentName,
        functionAppName,
        options,
      ),
    registerUserProvidedFunctionAppWithStaticSiteBuild: (
      resourceGroupName: string,
      name: string,
      environmentName: string,
      functionAppName: string,
      staticSiteUserProvidedFunctionEnvelope: StaticSiteUserProvidedFunctionAppARMResource,
      options?: StaticSitesRegisterUserProvidedFunctionAppWithStaticSiteBuildOptionalParams,
    ) =>
      registerUserProvidedFunctionAppWithStaticSiteBuild(
        context,
        resourceGroupName,
        name,
        environmentName,
        functionAppName,
        staticSiteUserProvidedFunctionEnvelope,
        options,
      ),
    getUserProvidedFunctionAppForStaticSiteBuild: (
      resourceGroupName: string,
      name: string,
      environmentName: string,
      functionAppName: string,
      options?: StaticSitesGetUserProvidedFunctionAppForStaticSiteBuildOptionalParams,
    ) =>
      getUserProvidedFunctionAppForStaticSiteBuild(
        context,
        resourceGroupName,
        name,
        environmentName,
        functionAppName,
        options,
      ),
    getDatabaseConnectionWithDetails: (
      resourceGroupName: string,
      name: string,
      databaseConnectionName: string,
      options?: StaticSitesGetDatabaseConnectionWithDetailsOptionalParams,
    ) =>
      getDatabaseConnectionWithDetails(
        context,
        resourceGroupName,
        name,
        databaseConnectionName,
        options,
      ),
    getDatabaseConnections: (
      resourceGroupName: string,
      name: string,
      options?: StaticSitesGetDatabaseConnectionsOptionalParams,
    ) => getDatabaseConnections(context, resourceGroupName, name, options),
    deleteDatabaseConnection: (
      resourceGroupName: string,
      name: string,
      databaseConnectionName: string,
      options?: StaticSitesDeleteDatabaseConnectionOptionalParams,
    ) =>
      deleteDatabaseConnection(context, resourceGroupName, name, databaseConnectionName, options),
    updateDatabaseConnection: (
      resourceGroupName: string,
      name: string,
      databaseConnectionName: string,
      databaseConnectionRequestEnvelope: DatabaseConnectionPatchRequest,
      options?: StaticSitesUpdateDatabaseConnectionOptionalParams,
    ) =>
      updateDatabaseConnection(
        context,
        resourceGroupName,
        name,
        databaseConnectionName,
        databaseConnectionRequestEnvelope,
        options,
      ),
    createOrUpdateDatabaseConnection: (
      resourceGroupName: string,
      name: string,
      databaseConnectionName: string,
      databaseConnectionRequestEnvelope: DatabaseConnection,
      options?: StaticSitesCreateOrUpdateDatabaseConnectionOptionalParams,
    ) =>
      createOrUpdateDatabaseConnection(
        context,
        resourceGroupName,
        name,
        databaseConnectionName,
        databaseConnectionRequestEnvelope,
        options,
      ),
    getDatabaseConnection: (
      resourceGroupName: string,
      name: string,
      databaseConnectionName: string,
      options?: StaticSitesGetDatabaseConnectionOptionalParams,
    ) => getDatabaseConnection(context, resourceGroupName, name, databaseConnectionName, options),
    getBuildDatabaseConnectionWithDetails: (
      resourceGroupName: string,
      name: string,
      environmentName: string,
      databaseConnectionName: string,
      options?: StaticSitesGetBuildDatabaseConnectionWithDetailsOptionalParams,
    ) =>
      getBuildDatabaseConnectionWithDetails(
        context,
        resourceGroupName,
        name,
        environmentName,
        databaseConnectionName,
        options,
      ),
    getBuildDatabaseConnections: (
      resourceGroupName: string,
      name: string,
      environmentName: string,
      options?: StaticSitesGetBuildDatabaseConnectionsOptionalParams,
    ) => getBuildDatabaseConnections(context, resourceGroupName, name, environmentName, options),
    deleteBuildDatabaseConnection: (
      resourceGroupName: string,
      name: string,
      environmentName: string,
      databaseConnectionName: string,
      options?: StaticSitesDeleteBuildDatabaseConnectionOptionalParams,
    ) =>
      deleteBuildDatabaseConnection(
        context,
        resourceGroupName,
        name,
        environmentName,
        databaseConnectionName,
        options,
      ),
    updateBuildDatabaseConnection: (
      resourceGroupName: string,
      name: string,
      environmentName: string,
      databaseConnectionName: string,
      databaseConnectionRequestEnvelope: DatabaseConnectionPatchRequest,
      options?: StaticSitesUpdateBuildDatabaseConnectionOptionalParams,
    ) =>
      updateBuildDatabaseConnection(
        context,
        resourceGroupName,
        name,
        environmentName,
        databaseConnectionName,
        databaseConnectionRequestEnvelope,
        options,
      ),
    createOrUpdateBuildDatabaseConnection: (
      resourceGroupName: string,
      name: string,
      environmentName: string,
      databaseConnectionName: string,
      databaseConnectionRequestEnvelope: DatabaseConnection,
      options?: StaticSitesCreateOrUpdateBuildDatabaseConnectionOptionalParams,
    ) =>
      createOrUpdateBuildDatabaseConnection(
        context,
        resourceGroupName,
        name,
        environmentName,
        databaseConnectionName,
        databaseConnectionRequestEnvelope,
        options,
      ),
    getBuildDatabaseConnection: (
      resourceGroupName: string,
      name: string,
      environmentName: string,
      databaseConnectionName: string,
      options?: StaticSitesGetBuildDatabaseConnectionOptionalParams,
    ) =>
      getBuildDatabaseConnection(
        context,
        resourceGroupName,
        name,
        environmentName,
        databaseConnectionName,
        options,
      ),
    createZipDeploymentForStaticSiteBuild: (
      resourceGroupName: string,
      name: string,
      environmentName: string,
      staticSiteZipDeploymentEnvelope: StaticSiteZipDeploymentARMResource,
      options?: StaticSitesCreateZipDeploymentForStaticSiteBuildOptionalParams,
    ) =>
      createZipDeploymentForStaticSiteBuild(
        context,
        resourceGroupName,
        name,
        environmentName,
        staticSiteZipDeploymentEnvelope,
        options,
      ),
    getBuildDatabaseConnectionsWithDetails: (
      resourceGroupName: string,
      name: string,
      environmentName: string,
      options?: StaticSitesGetBuildDatabaseConnectionsWithDetailsOptionalParams,
    ) =>
      getBuildDatabaseConnectionsWithDetails(
        context,
        resourceGroupName,
        name,
        environmentName,
        options,
      ),
    listStaticSiteBuildFunctionAppSettings: (
      resourceGroupName: string,
      name: string,
      environmentName: string,
      options?: StaticSitesListStaticSiteBuildFunctionAppSettingsOptionalParams,
    ) =>
      listStaticSiteBuildFunctionAppSettings(
        context,
        resourceGroupName,
        name,
        environmentName,
        options,
      ),
    listStaticSiteBuildAppSettings: (
      resourceGroupName: string,
      name: string,
      environmentName: string,
      options?: StaticSitesListStaticSiteBuildAppSettingsOptionalParams,
    ) => listStaticSiteBuildAppSettings(context, resourceGroupName, name, environmentName, options),
    listStaticSiteBuildFunctions: (
      resourceGroupName: string,
      name: string,
      environmentName: string,
      options?: StaticSitesListStaticSiteBuildFunctionsOptionalParams,
    ) => listStaticSiteBuildFunctions(context, resourceGroupName, name, environmentName, options),
    createOrUpdateStaticSiteBuildFunctionAppSettings: (
      resourceGroupName: string,
      name: string,
      environmentName: string,
      appSettings: StringDictionary,
      options?: StaticSitesCreateOrUpdateStaticSiteBuildFunctionAppSettingsOptionalParams,
    ) =>
      createOrUpdateStaticSiteBuildFunctionAppSettings(
        context,
        resourceGroupName,
        name,
        environmentName,
        appSettings,
        options,
      ),
    createOrUpdateStaticSiteBuildAppSettings: (
      resourceGroupName: string,
      name: string,
      environmentName: string,
      appSettings: StringDictionary,
      options?: StaticSitesCreateOrUpdateStaticSiteBuildAppSettingsOptionalParams,
    ) =>
      createOrUpdateStaticSiteBuildAppSettings(
        context,
        resourceGroupName,
        name,
        environmentName,
        appSettings,
        options,
      ),
    getStaticSiteBuilds: (
      resourceGroupName: string,
      name: string,
      options?: StaticSitesGetStaticSiteBuildsOptionalParams,
    ) => getStaticSiteBuilds(context, resourceGroupName, name, options),
    deleteStaticSiteBuild: (
      resourceGroupName: string,
      name: string,
      environmentName: string,
      options?: StaticSitesDeleteStaticSiteBuildOptionalParams,
    ) => deleteStaticSiteBuild(context, resourceGroupName, name, environmentName, options),
    getStaticSiteBuild: (
      resourceGroupName: string,
      name: string,
      environmentName: string,
      options?: StaticSitesGetStaticSiteBuildOptionalParams,
    ) => getStaticSiteBuild(context, resourceGroupName, name, environmentName, options),
    createZipDeploymentForStaticSite: (
      resourceGroupName: string,
      name: string,
      staticSiteZipDeploymentEnvelope: StaticSiteZipDeploymentARMResource,
      options?: StaticSitesCreateZipDeploymentForStaticSiteOptionalParams,
    ) =>
      createZipDeploymentForStaticSite(
        context,
        resourceGroupName,
        name,
        staticSiteZipDeploymentEnvelope,
        options,
      ),
    getDatabaseConnectionsWithDetails: (
      resourceGroupName: string,
      name: string,
      options?: StaticSitesGetDatabaseConnectionsWithDetailsOptionalParams,
    ) => getDatabaseConnectionsWithDetails(context, resourceGroupName, name, options),
    resetStaticSiteApiKey: (
      resourceGroupName: string,
      name: string,
      resetPropertiesEnvelope: StaticSiteResetPropertiesARMResource,
      options?: StaticSitesResetStaticSiteApiKeyOptionalParams,
    ) => resetStaticSiteApiKey(context, resourceGroupName, name, resetPropertiesEnvelope, options),
    getPrivateLinkResources: (
      resourceGroupName: string,
      name: string,
      options?: StaticSitesGetPrivateLinkResourcesOptionalParams,
    ) => getPrivateLinkResources(context, resourceGroupName, name, options),
    listStaticSiteSecrets: (
      resourceGroupName: string,
      name: string,
      options?: StaticSitesListStaticSiteSecretsOptionalParams,
    ) => listStaticSiteSecrets(context, resourceGroupName, name, options),
    listStaticSiteFunctionAppSettings: (
      resourceGroupName: string,
      name: string,
      options?: StaticSitesListStaticSiteFunctionAppSettingsOptionalParams,
    ) => listStaticSiteFunctionAppSettings(context, resourceGroupName, name, options),
    listStaticSiteConfiguredRoles: (
      resourceGroupName: string,
      name: string,
      options?: StaticSitesListStaticSiteConfiguredRolesOptionalParams,
    ) => listStaticSiteConfiguredRoles(context, resourceGroupName, name, options),
    listStaticSiteAppSettings: (
      resourceGroupName: string,
      name: string,
      options?: StaticSitesListStaticSiteAppSettingsOptionalParams,
    ) => listStaticSiteAppSettings(context, resourceGroupName, name, options),
    listStaticSiteFunctions: (
      resourceGroupName: string,
      name: string,
      options?: StaticSitesListStaticSiteFunctionsOptionalParams,
    ) => listStaticSiteFunctions(context, resourceGroupName, name, options),
    detachStaticSite: (
      resourceGroupName: string,
      name: string,
      options?: StaticSitesDetachStaticSiteOptionalParams,
    ) => detachStaticSite(context, resourceGroupName, name, options),
    createUserRolesInvitationLink: (
      resourceGroupName: string,
      name: string,
      staticSiteUserRolesInvitationEnvelope: StaticSiteUserInvitationRequestResource,
      options?: StaticSitesCreateUserRolesInvitationLinkOptionalParams,
    ) =>
      createUserRolesInvitationLink(
        context,
        resourceGroupName,
        name,
        staticSiteUserRolesInvitationEnvelope,
        options,
      ),
    createOrUpdateStaticSiteFunctionAppSettings: (
      resourceGroupName: string,
      name: string,
      appSettings: StringDictionary,
      options?: StaticSitesCreateOrUpdateStaticSiteFunctionAppSettingsOptionalParams,
    ) =>
      createOrUpdateStaticSiteFunctionAppSettings(
        context,
        resourceGroupName,
        name,
        appSettings,
        options,
      ),
    createOrUpdateStaticSiteAppSettings: (
      resourceGroupName: string,
      name: string,
      appSettings: StringDictionary,
      options?: StaticSitesCreateOrUpdateStaticSiteAppSettingsOptionalParams,
    ) =>
      createOrUpdateStaticSiteAppSettings(context, resourceGroupName, name, appSettings, options),
    updateStaticSiteUser: (
      resourceGroupName: string,
      name: string,
      authprovider: string,
      userid: string,
      staticSiteUserEnvelope: StaticSiteUserARMResource,
      options?: StaticSitesUpdateStaticSiteUserOptionalParams,
    ) =>
      updateStaticSiteUser(
        context,
        resourceGroupName,
        name,
        authprovider,
        userid,
        staticSiteUserEnvelope,
        options,
      ),
    deleteStaticSiteUser: (
      resourceGroupName: string,
      name: string,
      authprovider: string,
      userid: string,
      options?: StaticSitesDeleteStaticSiteUserOptionalParams,
    ) => deleteStaticSiteUser(context, resourceGroupName, name, authprovider, userid, options),
    listStaticSiteUsers: (
      resourceGroupName: string,
      name: string,
      authprovider: string,
      options?: StaticSitesListStaticSiteUsersOptionalParams,
    ) => listStaticSiteUsers(context, resourceGroupName, name, authprovider, options),
    list: (options?: StaticSitesListOptionalParams) => list(context, options),
    getStaticSitesByResourceGroup: (
      resourceGroupName: string,
      options?: StaticSitesGetStaticSitesByResourceGroupOptionalParams,
    ) => getStaticSitesByResourceGroup(context, resourceGroupName, options),
    deleteStaticSite: (
      resourceGroupName: string,
      name: string,
      options?: StaticSitesDeleteStaticSiteOptionalParams,
    ) => deleteStaticSite(context, resourceGroupName, name, options),
    updateStaticSite: (
      resourceGroupName: string,
      name: string,
      staticSiteEnvelope: StaticSitePatchResource,
      options?: StaticSitesUpdateStaticSiteOptionalParams,
    ) => updateStaticSite(context, resourceGroupName, name, staticSiteEnvelope, options),
    createOrUpdateStaticSite: (
      resourceGroupName: string,
      name: string,
      staticSiteEnvelope: StaticSiteARMResource,
      options?: StaticSitesCreateOrUpdateStaticSiteOptionalParams,
    ) => createOrUpdateStaticSite(context, resourceGroupName, name, staticSiteEnvelope, options),
    getStaticSite: (
      resourceGroupName: string,
      name: string,
      options?: StaticSitesGetStaticSiteOptionalParams,
    ) => getStaticSite(context, resourceGroupName, name, options),
    getPrivateEndpointConnectionList: (
      resourceGroupName: string,
      name: string,
      options?: StaticSitesGetPrivateEndpointConnectionListOptionalParams,
    ) => getPrivateEndpointConnectionList(context, resourceGroupName, name, options),
    deletePrivateEndpointConnection: (
      resourceGroupName: string,
      name: string,
      privateEndpointConnectionName: string,
      options?: StaticSitesDeletePrivateEndpointConnectionOptionalParams,
    ) =>
      deletePrivateEndpointConnection(
        context,
        resourceGroupName,
        name,
        privateEndpointConnectionName,
        options,
      ),
    approveOrRejectPrivateEndpointConnection: (
      resourceGroupName: string,
      name: string,
      privateEndpointConnectionName: string,
      privateEndpointWrapper: RemotePrivateEndpointConnectionARMResource,
      options?: StaticSitesApproveOrRejectPrivateEndpointConnectionOptionalParams,
    ) =>
      approveOrRejectPrivateEndpointConnection(
        context,
        resourceGroupName,
        name,
        privateEndpointConnectionName,
        privateEndpointWrapper,
        options,
      ),
    getPrivateEndpointConnection: (
      resourceGroupName: string,
      name: string,
      privateEndpointConnectionName: string,
      options?: StaticSitesGetPrivateEndpointConnectionOptionalParams,
    ) =>
      getPrivateEndpointConnection(
        context,
        resourceGroupName,
        name,
        privateEndpointConnectionName,
        options,
      ),
  };
}

export function _getStaticSitesOperations(context: WebContext): StaticSitesOperations {
  return {
    ..._getStaticSites(context),
  };
}
