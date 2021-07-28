import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { DeploymentOperations } from "../operationsInterfaces";
import { ResourceManagementClientContext } from "../resourceManagementClientContext";
import { DeploymentOperation, DeploymentOperationsListAtScopeOptionalParams, DeploymentOperationsListAtTenantScopeOptionalParams, DeploymentOperationsListAtManagementGroupScopeOptionalParams, DeploymentOperationsListAtSubscriptionScopeOptionalParams, DeploymentOperationsListOptionalParams, DeploymentOperationsGetAtScopeOptionalParams, DeploymentOperationsGetAtScopeResponse, DeploymentOperationsGetAtTenantScopeOptionalParams, DeploymentOperationsGetAtTenantScopeResponse, DeploymentOperationsGetAtManagementGroupScopeOptionalParams, DeploymentOperationsGetAtManagementGroupScopeResponse, DeploymentOperationsGetAtSubscriptionScopeOptionalParams, DeploymentOperationsGetAtSubscriptionScopeResponse, DeploymentOperationsGetOptionalParams, DeploymentOperationsGetResponse } from "../models";
/** Class representing a DeploymentOperations. */
export declare class DeploymentOperationsImpl implements DeploymentOperations {
    private readonly client;
    /**
     * Initialize a new instance of the class DeploymentOperations class.
     * @param client Reference to the service client
     */
    constructor(client: ResourceManagementClientContext);
    /**
     * Gets all deployments operations for a deployment.
     * @param scope The scope of a deployment.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    listAtScope(scope: string, deploymentName: string, options?: DeploymentOperationsListAtScopeOptionalParams): PagedAsyncIterableIterator<DeploymentOperation>;
    private listAtScopePagingPage;
    private listAtScopePagingAll;
    /**
     * Gets all deployments operations for a deployment.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    listAtTenantScope(deploymentName: string, options?: DeploymentOperationsListAtTenantScopeOptionalParams): PagedAsyncIterableIterator<DeploymentOperation>;
    private listAtTenantScopePagingPage;
    private listAtTenantScopePagingAll;
    /**
     * Gets all deployments operations for a deployment.
     * @param groupId The management group ID.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    listAtManagementGroupScope(groupId: string, deploymentName: string, options?: DeploymentOperationsListAtManagementGroupScopeOptionalParams): PagedAsyncIterableIterator<DeploymentOperation>;
    private listAtManagementGroupScopePagingPage;
    private listAtManagementGroupScopePagingAll;
    /**
     * Gets all deployments operations for a deployment.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    listAtSubscriptionScope(deploymentName: string, options?: DeploymentOperationsListAtSubscriptionScopeOptionalParams): PagedAsyncIterableIterator<DeploymentOperation>;
    private listAtSubscriptionScopePagingPage;
    private listAtSubscriptionScopePagingAll;
    /**
     * Gets all deployments operations for a deployment.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, deploymentName: string, options?: DeploymentOperationsListOptionalParams): PagedAsyncIterableIterator<DeploymentOperation>;
    private listPagingPage;
    private listPagingAll;
    /**
     * Gets a deployments operation.
     * @param scope The scope of a deployment.
     * @param deploymentName The name of the deployment.
     * @param operationId The ID of the operation to get.
     * @param options The options parameters.
     */
    getAtScope(scope: string, deploymentName: string, operationId: string, options?: DeploymentOperationsGetAtScopeOptionalParams): Promise<DeploymentOperationsGetAtScopeResponse>;
    /**
     * Gets all deployments operations for a deployment.
     * @param scope The scope of a deployment.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    private _listAtScope;
    /**
     * Gets a deployments operation.
     * @param deploymentName The name of the deployment.
     * @param operationId The ID of the operation to get.
     * @param options The options parameters.
     */
    getAtTenantScope(deploymentName: string, operationId: string, options?: DeploymentOperationsGetAtTenantScopeOptionalParams): Promise<DeploymentOperationsGetAtTenantScopeResponse>;
    /**
     * Gets all deployments operations for a deployment.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    private _listAtTenantScope;
    /**
     * Gets a deployments operation.
     * @param groupId The management group ID.
     * @param deploymentName The name of the deployment.
     * @param operationId The ID of the operation to get.
     * @param options The options parameters.
     */
    getAtManagementGroupScope(groupId: string, deploymentName: string, operationId: string, options?: DeploymentOperationsGetAtManagementGroupScopeOptionalParams): Promise<DeploymentOperationsGetAtManagementGroupScopeResponse>;
    /**
     * Gets all deployments operations for a deployment.
     * @param groupId The management group ID.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    private _listAtManagementGroupScope;
    /**
     * Gets a deployments operation.
     * @param deploymentName The name of the deployment.
     * @param operationId The ID of the operation to get.
     * @param options The options parameters.
     */
    getAtSubscriptionScope(deploymentName: string, operationId: string, options?: DeploymentOperationsGetAtSubscriptionScopeOptionalParams): Promise<DeploymentOperationsGetAtSubscriptionScopeResponse>;
    /**
     * Gets all deployments operations for a deployment.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    private _listAtSubscriptionScope;
    /**
     * Gets a deployments operation.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param deploymentName The name of the deployment.
     * @param operationId The ID of the operation to get.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, deploymentName: string, operationId: string, options?: DeploymentOperationsGetOptionalParams): Promise<DeploymentOperationsGetResponse>;
    /**
     * Gets all deployments operations for a deployment.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    private _list;
    /**
     * ListAtScopeNext
     * @param scope The scope of a deployment.
     * @param deploymentName The name of the deployment.
     * @param nextLink The nextLink from the previous successful call to the ListAtScope method.
     * @param options The options parameters.
     */
    private _listAtScopeNext;
    /**
     * ListAtTenantScopeNext
     * @param deploymentName The name of the deployment.
     * @param nextLink The nextLink from the previous successful call to the ListAtTenantScope method.
     * @param options The options parameters.
     */
    private _listAtTenantScopeNext;
    /**
     * ListAtManagementGroupScopeNext
     * @param groupId The management group ID.
     * @param deploymentName The name of the deployment.
     * @param nextLink The nextLink from the previous successful call to the ListAtManagementGroupScope
     *                 method.
     * @param options The options parameters.
     */
    private _listAtManagementGroupScopeNext;
    /**
     * ListAtSubscriptionScopeNext
     * @param deploymentName The name of the deployment.
     * @param nextLink The nextLink from the previous successful call to the ListAtSubscriptionScope
     *                 method.
     * @param options The options parameters.
     */
    private _listAtSubscriptionScopeNext;
    /**
     * ListNext
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param deploymentName The name of the deployment.
     * @param nextLink The nextLink from the previous successful call to the List method.
     * @param options The options parameters.
     */
    private _listNext;
}
//# sourceMappingURL=deploymentOperations.d.ts.map