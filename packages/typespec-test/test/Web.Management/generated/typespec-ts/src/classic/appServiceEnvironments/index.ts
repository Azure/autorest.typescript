// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WebContext } from "../../api/webContext.js";
import {
  getPrivateEndpointConnectionList,
  deletePrivateEndpointConnection,
  approveOrRejectPrivateEndpointConnection,
  getPrivateEndpointConnection,
  listMultiRoleUsages,
  listMultiRolePoolSkus,
  listMultiRoleMetricDefinitions,
  listMultiRolePoolInstanceMetricDefinitions,
  listMultiRolePools,
  updateMultiRolePool,
  createOrUpdateMultiRolePool,
  getMultiRolePool,
  updateAseNetworkingConfiguration,
  getAseV3NetworkingConfiguration,
  deleteAseCustomDnsSuffixConfiguration,
  updateAseCustomDnsSuffixConfiguration,
  getAseCustomDnsSuffixConfiguration,
  getVipInfo,
  listUsages,
  suspend,
  listWebApps,
  listAppServicePlans,
  resume,
  reboot,
  getPrivateLinkResources,
  getOutboundNetworkDependenciesEndpoints,
  listOperations,
  upgrade,
  testUpgradeAvailableNotification,
  getInboundNetworkDependenciesEndpoints,
  getDiagnosticsItem,
  listDiagnostics,
  changeVnet,
  listCapacities,
  list,
  listByResourceGroup,
  $delete,
  update,
  createOrUpdate,
  get,
  listWebWorkerUsages,
  listWorkerPoolSkus,
  listWebWorkerMetricDefinitions,
  listWorkerPoolInstanceMetricDefinitions,
  listWorkerPools,
  updateWorkerPool,
  createOrUpdateWorkerPool,
  getWorkerPool,
} from "../../api/appServiceEnvironments/operations.js";
import {
  AppServiceEnvironmentsGetPrivateEndpointConnectionListOptionalParams,
  AppServiceEnvironmentsDeletePrivateEndpointConnectionOptionalParams,
  AppServiceEnvironmentsApproveOrRejectPrivateEndpointConnectionOptionalParams,
  AppServiceEnvironmentsGetPrivateEndpointConnectionOptionalParams,
  AppServiceEnvironmentsListMultiRoleUsagesOptionalParams,
  AppServiceEnvironmentsListMultiRolePoolSkusOptionalParams,
  AppServiceEnvironmentsListMultiRoleMetricDefinitionsOptionalParams,
  AppServiceEnvironmentsListMultiRolePoolInstanceMetricDefinitionsOptionalParams,
  AppServiceEnvironmentsListMultiRolePoolsOptionalParams,
  AppServiceEnvironmentsUpdateMultiRolePoolOptionalParams,
  AppServiceEnvironmentsCreateOrUpdateMultiRolePoolOptionalParams,
  AppServiceEnvironmentsGetMultiRolePoolOptionalParams,
  AppServiceEnvironmentsUpdateAseNetworkingConfigurationOptionalParams,
  AppServiceEnvironmentsGetAseV3NetworkingConfigurationOptionalParams,
  AppServiceEnvironmentsDeleteAseCustomDnsSuffixConfigurationOptionalParams,
  AppServiceEnvironmentsUpdateAseCustomDnsSuffixConfigurationOptionalParams,
  AppServiceEnvironmentsGetAseCustomDnsSuffixConfigurationOptionalParams,
  AppServiceEnvironmentsGetVipInfoOptionalParams,
  AppServiceEnvironmentsListUsagesOptionalParams,
  AppServiceEnvironmentsSuspendOptionalParams,
  AppServiceEnvironmentsListWebAppsOptionalParams,
  AppServiceEnvironmentsListAppServicePlansOptionalParams,
  AppServiceEnvironmentsResumeOptionalParams,
  AppServiceEnvironmentsRebootOptionalParams,
  AppServiceEnvironmentsGetPrivateLinkResourcesOptionalParams,
  AppServiceEnvironmentsGetOutboundNetworkDependenciesEndpointsOptionalParams,
  AppServiceEnvironmentsListOperationsOptionalParams,
  AppServiceEnvironmentsUpgradeOptionalParams,
  AppServiceEnvironmentsTestUpgradeAvailableNotificationOptionalParams,
  AppServiceEnvironmentsGetInboundNetworkDependenciesEndpointsOptionalParams,
  AppServiceEnvironmentsGetDiagnosticsItemOptionalParams,
  AppServiceEnvironmentsListDiagnosticsOptionalParams,
  AppServiceEnvironmentsChangeVnetOptionalParams,
  AppServiceEnvironmentsListCapacitiesOptionalParams,
  AppServiceEnvironmentsListOptionalParams,
  AppServiceEnvironmentsListByResourceGroupOptionalParams,
  AppServiceEnvironmentsDeleteOptionalParams,
  AppServiceEnvironmentsUpdateOptionalParams,
  AppServiceEnvironmentsCreateOrUpdateOptionalParams,
  AppServiceEnvironmentsGetOptionalParams,
  AppServiceEnvironmentsListWebWorkerUsagesOptionalParams,
  AppServiceEnvironmentsListWorkerPoolSkusOptionalParams,
  AppServiceEnvironmentsListWebWorkerMetricDefinitionsOptionalParams,
  AppServiceEnvironmentsListWorkerPoolInstanceMetricDefinitionsOptionalParams,
  AppServiceEnvironmentsListWorkerPoolsOptionalParams,
  AppServiceEnvironmentsUpdateWorkerPoolOptionalParams,
  AppServiceEnvironmentsCreateOrUpdateWorkerPoolOptionalParams,
  AppServiceEnvironmentsGetWorkerPoolOptionalParams,
} from "../../api/appServiceEnvironments/options.js";
import {
  VirtualNetworkProfile,
  CustomDnsSuffixConfiguration,
  AseV3NetworkingConfiguration,
  WorkerPoolResource,
  ResourceMetricDefinition,
  SkuInfo,
  Usage,
  AppServiceEnvironmentResource,
  AppServiceEnvironmentPatchResource,
  StampCapacity,
  Site,
  HostingEnvironmentDiagnostics,
  InboundEnvironmentEndpoint,
  Operation,
  OutboundEnvironmentEndpoint,
  PrivateLinkResourcesWrapper,
  AppServicePlan,
  CsmUsageQuota,
  AddressResponse,
  RemotePrivateEndpointConnectionARMResource,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a AppServiceEnvironments operations. */
export interface AppServiceEnvironmentsOperations {
  /** Description for Gets the list of private endpoints associated with a hosting environment */
  getPrivateEndpointConnectionList: (
    resourceGroupName: string,
    name: string,
    options?: AppServiceEnvironmentsGetPrivateEndpointConnectionListOptionalParams,
  ) => PagedAsyncIterableIterator<RemotePrivateEndpointConnectionARMResource>;
  /** Description for Deletes a private endpoint connection */
  deletePrivateEndpointConnection: (
    resourceGroupName: string,
    name: string,
    privateEndpointConnectionName: string,
    options?: AppServiceEnvironmentsDeletePrivateEndpointConnectionOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Description for Approves or rejects a private endpoint connection */
  approveOrRejectPrivateEndpointConnection: (
    resourceGroupName: string,
    name: string,
    privateEndpointConnectionName: string,
    privateEndpointWrapper: RemotePrivateEndpointConnectionARMResource,
    options?: AppServiceEnvironmentsApproveOrRejectPrivateEndpointConnectionOptionalParams,
  ) => PollerLike<
    OperationState<RemotePrivateEndpointConnectionARMResource>,
    RemotePrivateEndpointConnectionARMResource
  >;
  /** Description for Gets a private endpoint connection */
  getPrivateEndpointConnection: (
    resourceGroupName: string,
    name: string,
    privateEndpointConnectionName: string,
    options?: AppServiceEnvironmentsGetPrivateEndpointConnectionOptionalParams,
  ) => Promise<RemotePrivateEndpointConnectionARMResource>;
  /** Description for Get usage metrics for a multi-role pool of an App Service Environment. */
  listMultiRoleUsages: (
    resourceGroupName: string,
    name: string,
    options?: AppServiceEnvironmentsListMultiRoleUsagesOptionalParams,
  ) => PagedAsyncIterableIterator<Usage>;
  /** Description for Get available SKUs for scaling a multi-role pool. */
  listMultiRolePoolSkus: (
    resourceGroupName: string,
    name: string,
    options?: AppServiceEnvironmentsListMultiRolePoolSkusOptionalParams,
  ) => PagedAsyncIterableIterator<SkuInfo>;
  /** Description for Get metric definitions for a multi-role pool of an App Service Environment. */
  listMultiRoleMetricDefinitions: (
    resourceGroupName: string,
    name: string,
    options?: AppServiceEnvironmentsListMultiRoleMetricDefinitionsOptionalParams,
  ) => PagedAsyncIterableIterator<ResourceMetricDefinition>;
  /** Description for Get metric definitions for a specific instance of a multi-role pool of an App Service Environment. */
  listMultiRolePoolInstanceMetricDefinitions: (
    resourceGroupName: string,
    name: string,
    instance: string,
    options?: AppServiceEnvironmentsListMultiRolePoolInstanceMetricDefinitionsOptionalParams,
  ) => PagedAsyncIterableIterator<ResourceMetricDefinition>;
  /** Description for Get all multi-role pools. */
  listMultiRolePools: (
    resourceGroupName: string,
    name: string,
    options?: AppServiceEnvironmentsListMultiRolePoolsOptionalParams,
  ) => PagedAsyncIterableIterator<WorkerPoolResource>;
  /** Description for Create or update a multi-role pool. */
  updateMultiRolePool: (
    resourceGroupName: string,
    name: string,
    multiRolePoolEnvelope: WorkerPoolResource,
    options?: AppServiceEnvironmentsUpdateMultiRolePoolOptionalParams,
  ) => Promise<WorkerPoolResource>;
  /** Description for Create or update a multi-role pool. */
  createOrUpdateMultiRolePool: (
    resourceGroupName: string,
    name: string,
    multiRolePoolEnvelope: WorkerPoolResource,
    options?: AppServiceEnvironmentsCreateOrUpdateMultiRolePoolOptionalParams,
  ) => PollerLike<OperationState<WorkerPoolResource>, WorkerPoolResource>;
  /** Description for Get properties of a multi-role pool. */
  getMultiRolePool: (
    resourceGroupName: string,
    name: string,
    options?: AppServiceEnvironmentsGetMultiRolePoolOptionalParams,
  ) => Promise<WorkerPoolResource>;
  /** Description for Update networking configuration of an App Service Environment */
  updateAseNetworkingConfiguration: (
    resourceGroupName: string,
    name: string,
    aseNetworkingConfiguration: AseV3NetworkingConfiguration,
    options?: AppServiceEnvironmentsUpdateAseNetworkingConfigurationOptionalParams,
  ) => Promise<AseV3NetworkingConfiguration>;
  /** Description for Get networking configuration of an App Service Environment */
  getAseV3NetworkingConfiguration: (
    resourceGroupName: string,
    name: string,
    options?: AppServiceEnvironmentsGetAseV3NetworkingConfigurationOptionalParams,
  ) => Promise<AseV3NetworkingConfiguration>;
  /** Delete Custom Dns Suffix configuration of an App Service Environment */
  deleteAseCustomDnsSuffixConfiguration: (
    resourceGroupName: string,
    name: string,
    options?: AppServiceEnvironmentsDeleteAseCustomDnsSuffixConfigurationOptionalParams,
  ) => Promise<any>;
  /** Update Custom Dns Suffix configuration of an App Service Environment */
  updateAseCustomDnsSuffixConfiguration: (
    resourceGroupName: string,
    name: string,
    customDnsSuffixConfiguration: CustomDnsSuffixConfiguration,
    options?: AppServiceEnvironmentsUpdateAseCustomDnsSuffixConfigurationOptionalParams,
  ) => Promise<CustomDnsSuffixConfiguration>;
  /** Get Custom Dns Suffix configuration of an App Service Environment */
  getAseCustomDnsSuffixConfiguration: (
    resourceGroupName: string,
    name: string,
    options?: AppServiceEnvironmentsGetAseCustomDnsSuffixConfigurationOptionalParams,
  ) => Promise<CustomDnsSuffixConfiguration>;
  /** Description for Get IP addresses assigned to an App Service Environment. */
  getVipInfo: (
    resourceGroupName: string,
    name: string,
    options?: AppServiceEnvironmentsGetVipInfoOptionalParams,
  ) => Promise<AddressResponse>;
  /** Description for Get global usage metrics of an App Service Environment. */
  listUsages: (
    resourceGroupName: string,
    name: string,
    options?: AppServiceEnvironmentsListUsagesOptionalParams,
  ) => PagedAsyncIterableIterator<CsmUsageQuota>;
  /** Description for Suspend an App Service Environment. */
  suspend: (
    resourceGroupName: string,
    name: string,
    options?: AppServiceEnvironmentsSuspendOptionalParams,
  ) => Promise<Site[]>;
  /** Description for Get all apps in an App Service Environment. */
  listWebApps: (
    resourceGroupName: string,
    name: string,
    options?: AppServiceEnvironmentsListWebAppsOptionalParams,
  ) => PagedAsyncIterableIterator<Site>;
  /** Description for Get all App Service plans in an App Service Environment. */
  listAppServicePlans: (
    resourceGroupName: string,
    name: string,
    options?: AppServiceEnvironmentsListAppServicePlansOptionalParams,
  ) => PagedAsyncIterableIterator<AppServicePlan>;
  /** Description for Resume an App Service Environment. */
  resume: (
    resourceGroupName: string,
    name: string,
    options?: AppServiceEnvironmentsResumeOptionalParams,
  ) => Promise<Site[]>;
  /** Description for Reboot all machines in an App Service Environment. */
  reboot: (
    resourceGroupName: string,
    name: string,
    options?: AppServiceEnvironmentsRebootOptionalParams,
  ) => Promise<void>;
  /** Description for Gets the private link resources */
  getPrivateLinkResources: (
    resourceGroupName: string,
    name: string,
    options?: AppServiceEnvironmentsGetPrivateLinkResourcesOptionalParams,
  ) => Promise<PrivateLinkResourcesWrapper>;
  /** Description for Get the network endpoints of all outbound dependencies of an App Service Environment. */
  getOutboundNetworkDependenciesEndpoints: (
    resourceGroupName: string,
    name: string,
    options?: AppServiceEnvironmentsGetOutboundNetworkDependenciesEndpointsOptionalParams,
  ) => PagedAsyncIterableIterator<OutboundEnvironmentEndpoint>;
  /** Description for List all currently running operations on the App Service Environment. */
  listOperations: (
    resourceGroupName: string,
    name: string,
    options?: AppServiceEnvironmentsListOperationsOptionalParams,
  ) => Promise<Operation[]>;
  /** Description for Initiate an upgrade of an App Service Environment if one is available. */
  upgrade: (
    resourceGroupName: string,
    name: string,
    options?: AppServiceEnvironmentsUpgradeOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Send a test notification that an upgrade is available for this App Service Environment. */
  testUpgradeAvailableNotification: (
    resourceGroupName: string,
    name: string,
    options?: AppServiceEnvironmentsTestUpgradeAvailableNotificationOptionalParams,
  ) => Promise<void>;
  /** Description for Get the network endpoints of all inbound dependencies of an App Service Environment. */
  getInboundNetworkDependenciesEndpoints: (
    resourceGroupName: string,
    name: string,
    options?: AppServiceEnvironmentsGetInboundNetworkDependenciesEndpointsOptionalParams,
  ) => PagedAsyncIterableIterator<InboundEnvironmentEndpoint>;
  /** Description for Get a diagnostics item for an App Service Environment. */
  getDiagnosticsItem: (
    resourceGroupName: string,
    name: string,
    diagnosticsName: string,
    options?: AppServiceEnvironmentsGetDiagnosticsItemOptionalParams,
  ) => Promise<HostingEnvironmentDiagnostics>;
  /** Description for Get diagnostic information for an App Service Environment. */
  listDiagnostics: (
    resourceGroupName: string,
    name: string,
    options?: AppServiceEnvironmentsListDiagnosticsOptionalParams,
  ) => Promise<HostingEnvironmentDiagnostics[]>;
  /** Description for Move an App Service Environment to a different VNET. */
  changeVnet: (
    resourceGroupName: string,
    name: string,
    vnetInfo: VirtualNetworkProfile,
    options?: AppServiceEnvironmentsChangeVnetOptionalParams,
  ) => Promise<Site[]>;
  /** Description for Get the used, available, and total worker capacity an App Service Environment. */
  listCapacities: (
    resourceGroupName: string,
    name: string,
    options?: AppServiceEnvironmentsListCapacitiesOptionalParams,
  ) => PagedAsyncIterableIterator<StampCapacity>;
  /** Description for Get all App Service Environments for a subscription. */
  list: (
    options?: AppServiceEnvironmentsListOptionalParams,
  ) => PagedAsyncIterableIterator<AppServiceEnvironmentResource>;
  /** Description for Get all App Service Environments in a resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: AppServiceEnvironmentsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<AppServiceEnvironmentResource>;
  /** Description for Delete an App Service Environment. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    name: string,
    options?: AppServiceEnvironmentsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Description for Create or update an App Service Environment. */
  update: (
    resourceGroupName: string,
    name: string,
    hostingEnvironmentEnvelope: AppServiceEnvironmentPatchResource,
    options?: AppServiceEnvironmentsUpdateOptionalParams,
  ) => Promise<AppServiceEnvironmentResource>;
  /** Description for Create or update an App Service Environment. */
  createOrUpdate: (
    resourceGroupName: string,
    name: string,
    hostingEnvironmentEnvelope: AppServiceEnvironmentResource,
    options?: AppServiceEnvironmentsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<AppServiceEnvironmentResource>, AppServiceEnvironmentResource>;
  /** Description for Get the properties of an App Service Environment. */
  get: (
    resourceGroupName: string,
    name: string,
    options?: AppServiceEnvironmentsGetOptionalParams,
  ) => Promise<AppServiceEnvironmentResource>;
  /** Description for Get usage metrics for a worker pool of an App Service Environment. */
  listWebWorkerUsages: (
    resourceGroupName: string,
    name: string,
    workerPoolName: string,
    options?: AppServiceEnvironmentsListWebWorkerUsagesOptionalParams,
  ) => PagedAsyncIterableIterator<Usage>;
  /** Description for Get available SKUs for scaling a worker pool. */
  listWorkerPoolSkus: (
    resourceGroupName: string,
    name: string,
    workerPoolName: string,
    options?: AppServiceEnvironmentsListWorkerPoolSkusOptionalParams,
  ) => PagedAsyncIterableIterator<SkuInfo>;
  /** Description for Get metric definitions for a worker pool of an App Service Environment. */
  listWebWorkerMetricDefinitions: (
    resourceGroupName: string,
    name: string,
    workerPoolName: string,
    options?: AppServiceEnvironmentsListWebWorkerMetricDefinitionsOptionalParams,
  ) => PagedAsyncIterableIterator<ResourceMetricDefinition>;
  /** Description for Get metric definitions for a specific instance of a worker pool of an App Service Environment. */
  listWorkerPoolInstanceMetricDefinitions: (
    resourceGroupName: string,
    name: string,
    workerPoolName: string,
    instance: string,
    options?: AppServiceEnvironmentsListWorkerPoolInstanceMetricDefinitionsOptionalParams,
  ) => PagedAsyncIterableIterator<ResourceMetricDefinition>;
  /** Description for Get all worker pools of an App Service Environment. */
  listWorkerPools: (
    resourceGroupName: string,
    name: string,
    options?: AppServiceEnvironmentsListWorkerPoolsOptionalParams,
  ) => PagedAsyncIterableIterator<WorkerPoolResource>;
  /** Description for Create or update a worker pool. */
  updateWorkerPool: (
    resourceGroupName: string,
    name: string,
    workerPoolName: string,
    workerPoolEnvelope: WorkerPoolResource,
    options?: AppServiceEnvironmentsUpdateWorkerPoolOptionalParams,
  ) => Promise<WorkerPoolResource>;
  /** Description for Create or update a worker pool. */
  createOrUpdateWorkerPool: (
    resourceGroupName: string,
    name: string,
    workerPoolName: string,
    workerPoolEnvelope: WorkerPoolResource,
    options?: AppServiceEnvironmentsCreateOrUpdateWorkerPoolOptionalParams,
  ) => PollerLike<OperationState<WorkerPoolResource>, WorkerPoolResource>;
  /** Description for Get properties of a worker pool. */
  getWorkerPool: (
    resourceGroupName: string,
    name: string,
    workerPoolName: string,
    options?: AppServiceEnvironmentsGetWorkerPoolOptionalParams,
  ) => Promise<WorkerPoolResource>;
}

function _getAppServiceEnvironments(context: WebContext) {
  return {
    getPrivateEndpointConnectionList: (
      resourceGroupName: string,
      name: string,
      options?: AppServiceEnvironmentsGetPrivateEndpointConnectionListOptionalParams,
    ) => getPrivateEndpointConnectionList(context, resourceGroupName, name, options),
    deletePrivateEndpointConnection: (
      resourceGroupName: string,
      name: string,
      privateEndpointConnectionName: string,
      options?: AppServiceEnvironmentsDeletePrivateEndpointConnectionOptionalParams,
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
      options?: AppServiceEnvironmentsApproveOrRejectPrivateEndpointConnectionOptionalParams,
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
      options?: AppServiceEnvironmentsGetPrivateEndpointConnectionOptionalParams,
    ) =>
      getPrivateEndpointConnection(
        context,
        resourceGroupName,
        name,
        privateEndpointConnectionName,
        options,
      ),
    listMultiRoleUsages: (
      resourceGroupName: string,
      name: string,
      options?: AppServiceEnvironmentsListMultiRoleUsagesOptionalParams,
    ) => listMultiRoleUsages(context, resourceGroupName, name, options),
    listMultiRolePoolSkus: (
      resourceGroupName: string,
      name: string,
      options?: AppServiceEnvironmentsListMultiRolePoolSkusOptionalParams,
    ) => listMultiRolePoolSkus(context, resourceGroupName, name, options),
    listMultiRoleMetricDefinitions: (
      resourceGroupName: string,
      name: string,
      options?: AppServiceEnvironmentsListMultiRoleMetricDefinitionsOptionalParams,
    ) => listMultiRoleMetricDefinitions(context, resourceGroupName, name, options),
    listMultiRolePoolInstanceMetricDefinitions: (
      resourceGroupName: string,
      name: string,
      instance: string,
      options?: AppServiceEnvironmentsListMultiRolePoolInstanceMetricDefinitionsOptionalParams,
    ) =>
      listMultiRolePoolInstanceMetricDefinitions(
        context,
        resourceGroupName,
        name,
        instance,
        options,
      ),
    listMultiRolePools: (
      resourceGroupName: string,
      name: string,
      options?: AppServiceEnvironmentsListMultiRolePoolsOptionalParams,
    ) => listMultiRolePools(context, resourceGroupName, name, options),
    updateMultiRolePool: (
      resourceGroupName: string,
      name: string,
      multiRolePoolEnvelope: WorkerPoolResource,
      options?: AppServiceEnvironmentsUpdateMultiRolePoolOptionalParams,
    ) => updateMultiRolePool(context, resourceGroupName, name, multiRolePoolEnvelope, options),
    createOrUpdateMultiRolePool: (
      resourceGroupName: string,
      name: string,
      multiRolePoolEnvelope: WorkerPoolResource,
      options?: AppServiceEnvironmentsCreateOrUpdateMultiRolePoolOptionalParams,
    ) =>
      createOrUpdateMultiRolePool(context, resourceGroupName, name, multiRolePoolEnvelope, options),
    getMultiRolePool: (
      resourceGroupName: string,
      name: string,
      options?: AppServiceEnvironmentsGetMultiRolePoolOptionalParams,
    ) => getMultiRolePool(context, resourceGroupName, name, options),
    updateAseNetworkingConfiguration: (
      resourceGroupName: string,
      name: string,
      aseNetworkingConfiguration: AseV3NetworkingConfiguration,
      options?: AppServiceEnvironmentsUpdateAseNetworkingConfigurationOptionalParams,
    ) =>
      updateAseNetworkingConfiguration(
        context,
        resourceGroupName,
        name,
        aseNetworkingConfiguration,
        options,
      ),
    getAseV3NetworkingConfiguration: (
      resourceGroupName: string,
      name: string,
      options?: AppServiceEnvironmentsGetAseV3NetworkingConfigurationOptionalParams,
    ) => getAseV3NetworkingConfiguration(context, resourceGroupName, name, options),
    deleteAseCustomDnsSuffixConfiguration: (
      resourceGroupName: string,
      name: string,
      options?: AppServiceEnvironmentsDeleteAseCustomDnsSuffixConfigurationOptionalParams,
    ) => deleteAseCustomDnsSuffixConfiguration(context, resourceGroupName, name, options),
    updateAseCustomDnsSuffixConfiguration: (
      resourceGroupName: string,
      name: string,
      customDnsSuffixConfiguration: CustomDnsSuffixConfiguration,
      options?: AppServiceEnvironmentsUpdateAseCustomDnsSuffixConfigurationOptionalParams,
    ) =>
      updateAseCustomDnsSuffixConfiguration(
        context,
        resourceGroupName,
        name,
        customDnsSuffixConfiguration,
        options,
      ),
    getAseCustomDnsSuffixConfiguration: (
      resourceGroupName: string,
      name: string,
      options?: AppServiceEnvironmentsGetAseCustomDnsSuffixConfigurationOptionalParams,
    ) => getAseCustomDnsSuffixConfiguration(context, resourceGroupName, name, options),
    getVipInfo: (
      resourceGroupName: string,
      name: string,
      options?: AppServiceEnvironmentsGetVipInfoOptionalParams,
    ) => getVipInfo(context, resourceGroupName, name, options),
    listUsages: (
      resourceGroupName: string,
      name: string,
      options?: AppServiceEnvironmentsListUsagesOptionalParams,
    ) => listUsages(context, resourceGroupName, name, options),
    suspend: (
      resourceGroupName: string,
      name: string,
      options?: AppServiceEnvironmentsSuspendOptionalParams,
    ) => suspend(context, resourceGroupName, name, options),
    listWebApps: (
      resourceGroupName: string,
      name: string,
      options?: AppServiceEnvironmentsListWebAppsOptionalParams,
    ) => listWebApps(context, resourceGroupName, name, options),
    listAppServicePlans: (
      resourceGroupName: string,
      name: string,
      options?: AppServiceEnvironmentsListAppServicePlansOptionalParams,
    ) => listAppServicePlans(context, resourceGroupName, name, options),
    resume: (
      resourceGroupName: string,
      name: string,
      options?: AppServiceEnvironmentsResumeOptionalParams,
    ) => resume(context, resourceGroupName, name, options),
    reboot: (
      resourceGroupName: string,
      name: string,
      options?: AppServiceEnvironmentsRebootOptionalParams,
    ) => reboot(context, resourceGroupName, name, options),
    getPrivateLinkResources: (
      resourceGroupName: string,
      name: string,
      options?: AppServiceEnvironmentsGetPrivateLinkResourcesOptionalParams,
    ) => getPrivateLinkResources(context, resourceGroupName, name, options),
    getOutboundNetworkDependenciesEndpoints: (
      resourceGroupName: string,
      name: string,
      options?: AppServiceEnvironmentsGetOutboundNetworkDependenciesEndpointsOptionalParams,
    ) => getOutboundNetworkDependenciesEndpoints(context, resourceGroupName, name, options),
    listOperations: (
      resourceGroupName: string,
      name: string,
      options?: AppServiceEnvironmentsListOperationsOptionalParams,
    ) => listOperations(context, resourceGroupName, name, options),
    upgrade: (
      resourceGroupName: string,
      name: string,
      options?: AppServiceEnvironmentsUpgradeOptionalParams,
    ) => upgrade(context, resourceGroupName, name, options),
    testUpgradeAvailableNotification: (
      resourceGroupName: string,
      name: string,
      options?: AppServiceEnvironmentsTestUpgradeAvailableNotificationOptionalParams,
    ) => testUpgradeAvailableNotification(context, resourceGroupName, name, options),
    getInboundNetworkDependenciesEndpoints: (
      resourceGroupName: string,
      name: string,
      options?: AppServiceEnvironmentsGetInboundNetworkDependenciesEndpointsOptionalParams,
    ) => getInboundNetworkDependenciesEndpoints(context, resourceGroupName, name, options),
    getDiagnosticsItem: (
      resourceGroupName: string,
      name: string,
      diagnosticsName: string,
      options?: AppServiceEnvironmentsGetDiagnosticsItemOptionalParams,
    ) => getDiagnosticsItem(context, resourceGroupName, name, diagnosticsName, options),
    listDiagnostics: (
      resourceGroupName: string,
      name: string,
      options?: AppServiceEnvironmentsListDiagnosticsOptionalParams,
    ) => listDiagnostics(context, resourceGroupName, name, options),
    changeVnet: (
      resourceGroupName: string,
      name: string,
      vnetInfo: VirtualNetworkProfile,
      options?: AppServiceEnvironmentsChangeVnetOptionalParams,
    ) => changeVnet(context, resourceGroupName, name, vnetInfo, options),
    listCapacities: (
      resourceGroupName: string,
      name: string,
      options?: AppServiceEnvironmentsListCapacitiesOptionalParams,
    ) => listCapacities(context, resourceGroupName, name, options),
    list: (options?: AppServiceEnvironmentsListOptionalParams) => list(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: AppServiceEnvironmentsListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      name: string,
      options?: AppServiceEnvironmentsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, name, options),
    update: (
      resourceGroupName: string,
      name: string,
      hostingEnvironmentEnvelope: AppServiceEnvironmentPatchResource,
      options?: AppServiceEnvironmentsUpdateOptionalParams,
    ) => update(context, resourceGroupName, name, hostingEnvironmentEnvelope, options),
    createOrUpdate: (
      resourceGroupName: string,
      name: string,
      hostingEnvironmentEnvelope: AppServiceEnvironmentResource,
      options?: AppServiceEnvironmentsCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, name, hostingEnvironmentEnvelope, options),
    get: (
      resourceGroupName: string,
      name: string,
      options?: AppServiceEnvironmentsGetOptionalParams,
    ) => get(context, resourceGroupName, name, options),
    listWebWorkerUsages: (
      resourceGroupName: string,
      name: string,
      workerPoolName: string,
      options?: AppServiceEnvironmentsListWebWorkerUsagesOptionalParams,
    ) => listWebWorkerUsages(context, resourceGroupName, name, workerPoolName, options),
    listWorkerPoolSkus: (
      resourceGroupName: string,
      name: string,
      workerPoolName: string,
      options?: AppServiceEnvironmentsListWorkerPoolSkusOptionalParams,
    ) => listWorkerPoolSkus(context, resourceGroupName, name, workerPoolName, options),
    listWebWorkerMetricDefinitions: (
      resourceGroupName: string,
      name: string,
      workerPoolName: string,
      options?: AppServiceEnvironmentsListWebWorkerMetricDefinitionsOptionalParams,
    ) => listWebWorkerMetricDefinitions(context, resourceGroupName, name, workerPoolName, options),
    listWorkerPoolInstanceMetricDefinitions: (
      resourceGroupName: string,
      name: string,
      workerPoolName: string,
      instance: string,
      options?: AppServiceEnvironmentsListWorkerPoolInstanceMetricDefinitionsOptionalParams,
    ) =>
      listWorkerPoolInstanceMetricDefinitions(
        context,
        resourceGroupName,
        name,
        workerPoolName,
        instance,
        options,
      ),
    listWorkerPools: (
      resourceGroupName: string,
      name: string,
      options?: AppServiceEnvironmentsListWorkerPoolsOptionalParams,
    ) => listWorkerPools(context, resourceGroupName, name, options),
    updateWorkerPool: (
      resourceGroupName: string,
      name: string,
      workerPoolName: string,
      workerPoolEnvelope: WorkerPoolResource,
      options?: AppServiceEnvironmentsUpdateWorkerPoolOptionalParams,
    ) =>
      updateWorkerPool(
        context,
        resourceGroupName,
        name,
        workerPoolName,
        workerPoolEnvelope,
        options,
      ),
    createOrUpdateWorkerPool: (
      resourceGroupName: string,
      name: string,
      workerPoolName: string,
      workerPoolEnvelope: WorkerPoolResource,
      options?: AppServiceEnvironmentsCreateOrUpdateWorkerPoolOptionalParams,
    ) =>
      createOrUpdateWorkerPool(
        context,
        resourceGroupName,
        name,
        workerPoolName,
        workerPoolEnvelope,
        options,
      ),
    getWorkerPool: (
      resourceGroupName: string,
      name: string,
      workerPoolName: string,
      options?: AppServiceEnvironmentsGetWorkerPoolOptionalParams,
    ) => getWorkerPool(context, resourceGroupName, name, workerPoolName, options),
  };
}

export function _getAppServiceEnvironmentsOperations(
  context: WebContext,
): AppServiceEnvironmentsOperations {
  return {
    ..._getAppServiceEnvironments(context),
  };
}
