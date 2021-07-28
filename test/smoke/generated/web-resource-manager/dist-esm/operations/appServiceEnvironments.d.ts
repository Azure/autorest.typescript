import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { AppServiceEnvironments } from "../operationsInterfaces";
import { WebSiteManagementClientContext } from "../webSiteManagementClientContext";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import { AppServiceEnvironmentResource, AppServiceEnvironmentsListOptionalParams, AppServiceEnvironmentsListByResourceGroupOptionalParams, StampCapacity, AppServiceEnvironmentsListCapacitiesOptionalParams, Site, VirtualNetworkProfile, AppServiceEnvironmentsChangeVnetOptionalParams, InboundEnvironmentEndpoint, AppServiceEnvironmentsGetInboundNetworkDependenciesEndpointsOptionalParams, WorkerPoolResource, AppServiceEnvironmentsListMultiRolePoolsOptionalParams, ResourceMetricDefinition, AppServiceEnvironmentsListMultiRolePoolInstanceMetricDefinitionsOptionalParams, AppServiceEnvironmentsListMultiRoleMetricDefinitionsOptionalParams, SkuInfo, AppServiceEnvironmentsListMultiRolePoolSkusOptionalParams, Usage, AppServiceEnvironmentsListMultiRoleUsagesOptionalParams, OutboundEnvironmentEndpoint, AppServiceEnvironmentsGetOutboundNetworkDependenciesEndpointsOptionalParams, AppServiceEnvironmentsResumeOptionalParams, AppServicePlan, AppServiceEnvironmentsListAppServicePlansOptionalParams, AppServiceEnvironmentsListWebAppsOptionalParams, AppServiceEnvironmentsSuspendOptionalParams, CsmUsageQuota, AppServiceEnvironmentsListUsagesOptionalParams, AppServiceEnvironmentsListWorkerPoolsOptionalParams, AppServiceEnvironmentsListWorkerPoolInstanceMetricDefinitionsOptionalParams, AppServiceEnvironmentsListWebWorkerMetricDefinitionsOptionalParams, AppServiceEnvironmentsListWorkerPoolSkusOptionalParams, AppServiceEnvironmentsListWebWorkerUsagesOptionalParams, AppServiceEnvironmentsGetOptionalParams, AppServiceEnvironmentsGetResponse, AppServiceEnvironmentsCreateOrUpdateOptionalParams, AppServiceEnvironmentsCreateOrUpdateResponse, AppServiceEnvironmentsDeleteOptionalParams, AppServiceEnvironmentPatchResource, AppServiceEnvironmentsUpdateOptionalParams, AppServiceEnvironmentsUpdateResponse, AppServiceEnvironmentsGetVipInfoOptionalParams, AppServiceEnvironmentsGetVipInfoResponse, AppServiceEnvironmentsListDiagnosticsOptionalParams, AppServiceEnvironmentsListDiagnosticsResponse, AppServiceEnvironmentsGetDiagnosticsItemOptionalParams, AppServiceEnvironmentsGetDiagnosticsItemResponse, AppServiceEnvironmentsGetMultiRolePoolOptionalParams, AppServiceEnvironmentsGetMultiRolePoolResponse, AppServiceEnvironmentsCreateOrUpdateMultiRolePoolOptionalParams, AppServiceEnvironmentsCreateOrUpdateMultiRolePoolResponse, AppServiceEnvironmentsUpdateMultiRolePoolOptionalParams, AppServiceEnvironmentsUpdateMultiRolePoolResponse, AppServiceEnvironmentsListOperationsOptionalParams, AppServiceEnvironmentsListOperationsResponse, AppServiceEnvironmentsRebootOptionalParams, AppServiceEnvironmentsGetWorkerPoolOptionalParams, AppServiceEnvironmentsGetWorkerPoolResponse, AppServiceEnvironmentsCreateOrUpdateWorkerPoolOptionalParams, AppServiceEnvironmentsCreateOrUpdateWorkerPoolResponse, AppServiceEnvironmentsUpdateWorkerPoolOptionalParams, AppServiceEnvironmentsUpdateWorkerPoolResponse } from "../models";
/** Class representing a AppServiceEnvironments. */
export declare class AppServiceEnvironmentsImpl implements AppServiceEnvironments {
    private readonly client;
    /**
     * Initialize a new instance of the class AppServiceEnvironments class.
     * @param client Reference to the service client
     */
    constructor(client: WebSiteManagementClientContext);
    /**
     * Description for Get all App Service Environments for a subscription.
     * @param options The options parameters.
     */
    list(options?: AppServiceEnvironmentsListOptionalParams): PagedAsyncIterableIterator<AppServiceEnvironmentResource>;
    private listPagingPage;
    private listPagingAll;
    /**
     * Description for Get all App Service Environments in a resource group.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: AppServiceEnvironmentsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<AppServiceEnvironmentResource>;
    private listByResourceGroupPagingPage;
    private listByResourceGroupPagingAll;
    /**
     * Description for Get the used, available, and total worker capacity an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    listCapacities(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsListCapacitiesOptionalParams): PagedAsyncIterableIterator<StampCapacity>;
    private listCapacitiesPagingPage;
    private listCapacitiesPagingAll;
    /**
     * Description for Move an App Service Environment to a different VNET.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param vnetInfo Details for the new virtual network.
     * @param options The options parameters.
     */
    beginListChangeVnetAndWait(resourceGroupName: string, name: string, vnetInfo: VirtualNetworkProfile, options?: AppServiceEnvironmentsChangeVnetOptionalParams): PagedAsyncIterableIterator<Site>;
    private changeVnetPagingPage;
    private changeVnetPagingAll;
    /**
     * Description for Get the network endpoints of all inbound dependencies of an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    listInboundNetworkDependenciesEndpoints(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsGetInboundNetworkDependenciesEndpointsOptionalParams): PagedAsyncIterableIterator<InboundEnvironmentEndpoint>;
    private getInboundNetworkDependenciesEndpointsPagingPage;
    private getInboundNetworkDependenciesEndpointsPagingAll;
    /**
     * Description for Get all multi-role pools.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    listMultiRolePools(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsListMultiRolePoolsOptionalParams): PagedAsyncIterableIterator<WorkerPoolResource>;
    private listMultiRolePoolsPagingPage;
    private listMultiRolePoolsPagingAll;
    /**
     * Description for Get metric definitions for a specific instance of a multi-role pool of an App
     * Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param instance Name of the instance in the multi-role pool.
     * @param options The options parameters.
     */
    listMultiRolePoolInstanceMetricDefinitions(resourceGroupName: string, name: string, instance: string, options?: AppServiceEnvironmentsListMultiRolePoolInstanceMetricDefinitionsOptionalParams): PagedAsyncIterableIterator<ResourceMetricDefinition>;
    private listMultiRolePoolInstanceMetricDefinitionsPagingPage;
    private listMultiRolePoolInstanceMetricDefinitionsPagingAll;
    /**
     * Description for Get metric definitions for a multi-role pool of an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    listMultiRoleMetricDefinitions(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsListMultiRoleMetricDefinitionsOptionalParams): PagedAsyncIterableIterator<ResourceMetricDefinition>;
    private listMultiRoleMetricDefinitionsPagingPage;
    private listMultiRoleMetricDefinitionsPagingAll;
    /**
     * Description for Get available SKUs for scaling a multi-role pool.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    listMultiRolePoolSkus(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsListMultiRolePoolSkusOptionalParams): PagedAsyncIterableIterator<SkuInfo>;
    private listMultiRolePoolSkusPagingPage;
    private listMultiRolePoolSkusPagingAll;
    /**
     * Description for Get usage metrics for a multi-role pool of an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    listMultiRoleUsages(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsListMultiRoleUsagesOptionalParams): PagedAsyncIterableIterator<Usage>;
    private listMultiRoleUsagesPagingPage;
    private listMultiRoleUsagesPagingAll;
    /**
     * Description for Get the network endpoints of all outbound dependencies of an App Service
     * Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    listOutboundNetworkDependenciesEndpoints(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsGetOutboundNetworkDependenciesEndpointsOptionalParams): PagedAsyncIterableIterator<OutboundEnvironmentEndpoint>;
    private getOutboundNetworkDependenciesEndpointsPagingPage;
    private getOutboundNetworkDependenciesEndpointsPagingAll;
    /**
     * Description for Resume an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    beginListResumeAndWait(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsResumeOptionalParams): PagedAsyncIterableIterator<Site>;
    private resumePagingPage;
    private resumePagingAll;
    /**
     * Description for Get all App Service plans in an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    listAppServicePlans(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsListAppServicePlansOptionalParams): PagedAsyncIterableIterator<AppServicePlan>;
    private listAppServicePlansPagingPage;
    private listAppServicePlansPagingAll;
    /**
     * Description for Get all apps in an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    listWebApps(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsListWebAppsOptionalParams): PagedAsyncIterableIterator<Site>;
    private listWebAppsPagingPage;
    private listWebAppsPagingAll;
    /**
     * Description for Suspend an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    beginListSuspendAndWait(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsSuspendOptionalParams): PagedAsyncIterableIterator<Site>;
    private suspendPagingPage;
    private suspendPagingAll;
    /**
     * Description for Get global usage metrics of an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    listUsages(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsListUsagesOptionalParams): PagedAsyncIterableIterator<CsmUsageQuota>;
    private listUsagesPagingPage;
    private listUsagesPagingAll;
    /**
     * Description for Get all worker pools of an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    listWorkerPools(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsListWorkerPoolsOptionalParams): PagedAsyncIterableIterator<WorkerPoolResource>;
    private listWorkerPoolsPagingPage;
    private listWorkerPoolsPagingAll;
    /**
     * Description for Get metric definitions for a specific instance of a worker pool of an App Service
     * Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param workerPoolName Name of the worker pool.
     * @param instance Name of the instance in the worker pool.
     * @param options The options parameters.
     */
    listWorkerPoolInstanceMetricDefinitions(resourceGroupName: string, name: string, workerPoolName: string, instance: string, options?: AppServiceEnvironmentsListWorkerPoolInstanceMetricDefinitionsOptionalParams): PagedAsyncIterableIterator<ResourceMetricDefinition>;
    private listWorkerPoolInstanceMetricDefinitionsPagingPage;
    private listWorkerPoolInstanceMetricDefinitionsPagingAll;
    /**
     * Description for Get metric definitions for a worker pool of an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param workerPoolName Name of the worker pool.
     * @param options The options parameters.
     */
    listWebWorkerMetricDefinitions(resourceGroupName: string, name: string, workerPoolName: string, options?: AppServiceEnvironmentsListWebWorkerMetricDefinitionsOptionalParams): PagedAsyncIterableIterator<ResourceMetricDefinition>;
    private listWebWorkerMetricDefinitionsPagingPage;
    private listWebWorkerMetricDefinitionsPagingAll;
    /**
     * Description for Get available SKUs for scaling a worker pool.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param workerPoolName Name of the worker pool.
     * @param options The options parameters.
     */
    listWorkerPoolSkus(resourceGroupName: string, name: string, workerPoolName: string, options?: AppServiceEnvironmentsListWorkerPoolSkusOptionalParams): PagedAsyncIterableIterator<SkuInfo>;
    private listWorkerPoolSkusPagingPage;
    private listWorkerPoolSkusPagingAll;
    /**
     * Description for Get usage metrics for a worker pool of an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param workerPoolName Name of the worker pool.
     * @param options The options parameters.
     */
    listWebWorkerUsages(resourceGroupName: string, name: string, workerPoolName: string, options?: AppServiceEnvironmentsListWebWorkerUsagesOptionalParams): PagedAsyncIterableIterator<Usage>;
    private listWebWorkerUsagesPagingPage;
    private listWebWorkerUsagesPagingAll;
    /**
     * Description for Get all App Service Environments for a subscription.
     * @param options The options parameters.
     */
    private _list;
    /**
     * Description for Get all App Service Environments in a resource group.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param options The options parameters.
     */
    private _listByResourceGroup;
    /**
     * Description for Get the properties of an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsGetOptionalParams): Promise<AppServiceEnvironmentsGetResponse>;
    /**
     * Description for Create or update an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param hostingEnvironmentEnvelope Configuration details of the App Service Environment.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, name: string, hostingEnvironmentEnvelope: AppServiceEnvironmentResource, options?: AppServiceEnvironmentsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<AppServiceEnvironmentsCreateOrUpdateResponse>, AppServiceEnvironmentsCreateOrUpdateResponse>>;
    /**
     * Description for Create or update an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param hostingEnvironmentEnvelope Configuration details of the App Service Environment.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, name: string, hostingEnvironmentEnvelope: AppServiceEnvironmentResource, options?: AppServiceEnvironmentsCreateOrUpdateOptionalParams): Promise<AppServiceEnvironmentsCreateOrUpdateResponse>;
    /**
     * Description for Delete an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Description for Delete an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsDeleteOptionalParams): Promise<void>;
    /**
     * Description for Create or update an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param hostingEnvironmentEnvelope Configuration details of the App Service Environment.
     * @param options The options parameters.
     */
    update(resourceGroupName: string, name: string, hostingEnvironmentEnvelope: AppServiceEnvironmentPatchResource, options?: AppServiceEnvironmentsUpdateOptionalParams): Promise<AppServiceEnvironmentsUpdateResponse>;
    /**
     * Description for Get the used, available, and total worker capacity an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    private _listCapacities;
    /**
     * Description for Get IP addresses assigned to an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    getVipInfo(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsGetVipInfoOptionalParams): Promise<AppServiceEnvironmentsGetVipInfoResponse>;
    /**
     * Description for Move an App Service Environment to a different VNET.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param vnetInfo Details for the new virtual network.
     * @param options The options parameters.
     */
    private _changeVnet;
    /**
     * Description for Get diagnostic information for an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    listDiagnostics(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsListDiagnosticsOptionalParams): Promise<AppServiceEnvironmentsListDiagnosticsResponse>;
    /**
     * Description for Get a diagnostics item for an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param diagnosticsName Name of the diagnostics item.
     * @param options The options parameters.
     */
    getDiagnosticsItem(resourceGroupName: string, name: string, diagnosticsName: string, options?: AppServiceEnvironmentsGetDiagnosticsItemOptionalParams): Promise<AppServiceEnvironmentsGetDiagnosticsItemResponse>;
    /**
     * Description for Get the network endpoints of all inbound dependencies of an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    private _getInboundNetworkDependenciesEndpoints;
    /**
     * Description for Get all multi-role pools.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    private _listMultiRolePools;
    /**
     * Description for Get properties of a multi-role pool.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    getMultiRolePool(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsGetMultiRolePoolOptionalParams): Promise<AppServiceEnvironmentsGetMultiRolePoolResponse>;
    /**
     * Description for Create or update a multi-role pool.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param multiRolePoolEnvelope Properties of the multi-role pool.
     * @param options The options parameters.
     */
    beginCreateOrUpdateMultiRolePool(resourceGroupName: string, name: string, multiRolePoolEnvelope: WorkerPoolResource, options?: AppServiceEnvironmentsCreateOrUpdateMultiRolePoolOptionalParams): Promise<PollerLike<PollOperationState<AppServiceEnvironmentsCreateOrUpdateMultiRolePoolResponse>, AppServiceEnvironmentsCreateOrUpdateMultiRolePoolResponse>>;
    /**
     * Description for Create or update a multi-role pool.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param multiRolePoolEnvelope Properties of the multi-role pool.
     * @param options The options parameters.
     */
    beginCreateOrUpdateMultiRolePoolAndWait(resourceGroupName: string, name: string, multiRolePoolEnvelope: WorkerPoolResource, options?: AppServiceEnvironmentsCreateOrUpdateMultiRolePoolOptionalParams): Promise<AppServiceEnvironmentsCreateOrUpdateMultiRolePoolResponse>;
    /**
     * Description for Create or update a multi-role pool.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param multiRolePoolEnvelope Properties of the multi-role pool.
     * @param options The options parameters.
     */
    updateMultiRolePool(resourceGroupName: string, name: string, multiRolePoolEnvelope: WorkerPoolResource, options?: AppServiceEnvironmentsUpdateMultiRolePoolOptionalParams): Promise<AppServiceEnvironmentsUpdateMultiRolePoolResponse>;
    /**
     * Description for Get metric definitions for a specific instance of a multi-role pool of an App
     * Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param instance Name of the instance in the multi-role pool.
     * @param options The options parameters.
     */
    private _listMultiRolePoolInstanceMetricDefinitions;
    /**
     * Description for Get metric definitions for a multi-role pool of an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    private _listMultiRoleMetricDefinitions;
    /**
     * Description for Get available SKUs for scaling a multi-role pool.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    private _listMultiRolePoolSkus;
    /**
     * Description for Get usage metrics for a multi-role pool of an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    private _listMultiRoleUsages;
    /**
     * Description for List all currently running operations on the App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    listOperations(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsListOperationsOptionalParams): Promise<AppServiceEnvironmentsListOperationsResponse>;
    /**
     * Description for Get the network endpoints of all outbound dependencies of an App Service
     * Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    private _getOutboundNetworkDependenciesEndpoints;
    /**
     * Description for Reboot all machines in an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    reboot(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsRebootOptionalParams): Promise<void>;
    /**
     * Description for Resume an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    private _resume;
    /**
     * Description for Get all App Service plans in an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    private _listAppServicePlans;
    /**
     * Description for Get all apps in an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    private _listWebApps;
    /**
     * Description for Suspend an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    private _suspend;
    /**
     * Description for Get global usage metrics of an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    private _listUsages;
    /**
     * Description for Get all worker pools of an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    private _listWorkerPools;
    /**
     * Description for Get properties of a worker pool.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param workerPoolName Name of the worker pool.
     * @param options The options parameters.
     */
    getWorkerPool(resourceGroupName: string, name: string, workerPoolName: string, options?: AppServiceEnvironmentsGetWorkerPoolOptionalParams): Promise<AppServiceEnvironmentsGetWorkerPoolResponse>;
    /**
     * Description for Create or update a worker pool.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param workerPoolName Name of the worker pool.
     * @param workerPoolEnvelope Properties of the worker pool.
     * @param options The options parameters.
     */
    beginCreateOrUpdateWorkerPool(resourceGroupName: string, name: string, workerPoolName: string, workerPoolEnvelope: WorkerPoolResource, options?: AppServiceEnvironmentsCreateOrUpdateWorkerPoolOptionalParams): Promise<PollerLike<PollOperationState<AppServiceEnvironmentsCreateOrUpdateWorkerPoolResponse>, AppServiceEnvironmentsCreateOrUpdateWorkerPoolResponse>>;
    /**
     * Description for Create or update a worker pool.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param workerPoolName Name of the worker pool.
     * @param workerPoolEnvelope Properties of the worker pool.
     * @param options The options parameters.
     */
    beginCreateOrUpdateWorkerPoolAndWait(resourceGroupName: string, name: string, workerPoolName: string, workerPoolEnvelope: WorkerPoolResource, options?: AppServiceEnvironmentsCreateOrUpdateWorkerPoolOptionalParams): Promise<AppServiceEnvironmentsCreateOrUpdateWorkerPoolResponse>;
    /**
     * Description for Create or update a worker pool.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param workerPoolName Name of the worker pool.
     * @param workerPoolEnvelope Properties of the worker pool.
     * @param options The options parameters.
     */
    updateWorkerPool(resourceGroupName: string, name: string, workerPoolName: string, workerPoolEnvelope: WorkerPoolResource, options?: AppServiceEnvironmentsUpdateWorkerPoolOptionalParams): Promise<AppServiceEnvironmentsUpdateWorkerPoolResponse>;
    /**
     * Description for Get metric definitions for a specific instance of a worker pool of an App Service
     * Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param workerPoolName Name of the worker pool.
     * @param instance Name of the instance in the worker pool.
     * @param options The options parameters.
     */
    private _listWorkerPoolInstanceMetricDefinitions;
    /**
     * Description for Get metric definitions for a worker pool of an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param workerPoolName Name of the worker pool.
     * @param options The options parameters.
     */
    private _listWebWorkerMetricDefinitions;
    /**
     * Description for Get available SKUs for scaling a worker pool.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param workerPoolName Name of the worker pool.
     * @param options The options parameters.
     */
    private _listWorkerPoolSkus;
    /**
     * Description for Get usage metrics for a worker pool of an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param workerPoolName Name of the worker pool.
     * @param options The options parameters.
     */
    private _listWebWorkerUsages;
    /**
     * ListNext
     * @param nextLink The nextLink from the previous successful call to the List method.
     * @param options The options parameters.
     */
    private _listNext;
    /**
     * ListByResourceGroupNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
     * @param options The options parameters.
     */
    private _listByResourceGroupNext;
    /**
     * ListCapacitiesNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param nextLink The nextLink from the previous successful call to the ListCapacities method.
     * @param options The options parameters.
     */
    private _listCapacitiesNext;
    /**
     * ChangeVnetNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param vnetInfo Details for the new virtual network.
     * @param nextLink The nextLink from the previous successful call to the ChangeVnet method.
     * @param options The options parameters.
     */
    private _changeVnetNext;
    /**
     * GetInboundNetworkDependenciesEndpointsNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param nextLink The nextLink from the previous successful call to the
     *                 GetInboundNetworkDependenciesEndpoints method.
     * @param options The options parameters.
     */
    private _getInboundNetworkDependenciesEndpointsNext;
    /**
     * ListMultiRolePoolsNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param nextLink The nextLink from the previous successful call to the ListMultiRolePools method.
     * @param options The options parameters.
     */
    private _listMultiRolePoolsNext;
    /**
     * ListMultiRolePoolInstanceMetricDefinitionsNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param instance Name of the instance in the multi-role pool.
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListMultiRolePoolInstanceMetricDefinitions method.
     * @param options The options parameters.
     */
    private _listMultiRolePoolInstanceMetricDefinitionsNext;
    /**
     * ListMultiRoleMetricDefinitionsNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param nextLink The nextLink from the previous successful call to the ListMultiRoleMetricDefinitions
     *                 method.
     * @param options The options parameters.
     */
    private _listMultiRoleMetricDefinitionsNext;
    /**
     * ListMultiRolePoolSkusNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param nextLink The nextLink from the previous successful call to the ListMultiRolePoolSkus method.
     * @param options The options parameters.
     */
    private _listMultiRolePoolSkusNext;
    /**
     * ListMultiRoleUsagesNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param nextLink The nextLink from the previous successful call to the ListMultiRoleUsages method.
     * @param options The options parameters.
     */
    private _listMultiRoleUsagesNext;
    /**
     * GetOutboundNetworkDependenciesEndpointsNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param nextLink The nextLink from the previous successful call to the
     *                 GetOutboundNetworkDependenciesEndpoints method.
     * @param options The options parameters.
     */
    private _getOutboundNetworkDependenciesEndpointsNext;
    /**
     * ResumeNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param nextLink The nextLink from the previous successful call to the Resume method.
     * @param options The options parameters.
     */
    private _resumeNext;
    /**
     * ListAppServicePlansNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param nextLink The nextLink from the previous successful call to the ListAppServicePlans method.
     * @param options The options parameters.
     */
    private _listAppServicePlansNext;
    /**
     * ListWebAppsNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param nextLink The nextLink from the previous successful call to the ListWebApps method.
     * @param options The options parameters.
     */
    private _listWebAppsNext;
    /**
     * SuspendNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param nextLink The nextLink from the previous successful call to the Suspend method.
     * @param options The options parameters.
     */
    private _suspendNext;
    /**
     * ListUsagesNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param nextLink The nextLink from the previous successful call to the ListUsages method.
     * @param options The options parameters.
     */
    private _listUsagesNext;
    /**
     * ListWorkerPoolsNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param nextLink The nextLink from the previous successful call to the ListWorkerPools method.
     * @param options The options parameters.
     */
    private _listWorkerPoolsNext;
    /**
     * ListWorkerPoolInstanceMetricDefinitionsNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param workerPoolName Name of the worker pool.
     * @param instance Name of the instance in the worker pool.
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListWorkerPoolInstanceMetricDefinitions method.
     * @param options The options parameters.
     */
    private _listWorkerPoolInstanceMetricDefinitionsNext;
    /**
     * ListWebWorkerMetricDefinitionsNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param workerPoolName Name of the worker pool.
     * @param nextLink The nextLink from the previous successful call to the ListWebWorkerMetricDefinitions
     *                 method.
     * @param options The options parameters.
     */
    private _listWebWorkerMetricDefinitionsNext;
    /**
     * ListWorkerPoolSkusNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param workerPoolName Name of the worker pool.
     * @param nextLink The nextLink from the previous successful call to the ListWorkerPoolSkus method.
     * @param options The options parameters.
     */
    private _listWorkerPoolSkusNext;
    /**
     * ListWebWorkerUsagesNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param workerPoolName Name of the worker pool.
     * @param nextLink The nextLink from the previous successful call to the ListWebWorkerUsages method.
     * @param options The options parameters.
     */
    private _listWebWorkerUsagesNext;
}
//# sourceMappingURL=appServiceEnvironments.d.ts.map