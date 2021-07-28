import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { DeploymentScripts } from "../operationsInterfaces";
import { DeploymentScriptsClientContext } from "../deploymentScriptsClientContext";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import { DeploymentScriptUnion, DeploymentScriptsListBySubscriptionOptionalParams, DeploymentScriptsListByResourceGroupOptionalParams, DeploymentScriptsCreateOptionalParams, DeploymentScriptsCreateResponse, DeploymentScriptsUpdateOptionalParams, DeploymentScriptsUpdateResponse, DeploymentScriptsGetOptionalParams, DeploymentScriptsGetResponse, DeploymentScriptsDeleteOptionalParams, DeploymentScriptsGetLogsOptionalParams, DeploymentScriptsGetLogsResponse, DeploymentScriptsGetLogsDefaultOptionalParams, DeploymentScriptsGetLogsDefaultResponse } from "../models";
/** Class representing a DeploymentScripts. */
export declare class DeploymentScriptsImpl implements DeploymentScripts {
    private readonly client;
    /**
     * Initialize a new instance of the class DeploymentScripts class.
     * @param client Reference to the service client
     */
    constructor(client: DeploymentScriptsClientContext);
    /**
     * Lists all deployment scripts for a given subscription.
     * @param options The options parameters.
     */
    listBySubscription(options?: DeploymentScriptsListBySubscriptionOptionalParams): PagedAsyncIterableIterator<DeploymentScriptUnion>;
    private listBySubscriptionPagingPage;
    private listBySubscriptionPagingAll;
    /**
     * Lists deployments scripts.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: DeploymentScriptsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<DeploymentScriptUnion>;
    private listByResourceGroupPagingPage;
    private listByResourceGroupPagingAll;
    /**
     * Creates a deployment script.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param scriptName Name of the deployment script.
     * @param deploymentScript Deployment script supplied to the operation.
     * @param options The options parameters.
     */
    beginCreate(resourceGroupName: string, scriptName: string, deploymentScript: DeploymentScriptUnion, options?: DeploymentScriptsCreateOptionalParams): Promise<PollerLike<PollOperationState<DeploymentScriptsCreateResponse>, DeploymentScriptsCreateResponse>>;
    /**
     * Creates a deployment script.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param scriptName Name of the deployment script.
     * @param deploymentScript Deployment script supplied to the operation.
     * @param options The options parameters.
     */
    beginCreateAndWait(resourceGroupName: string, scriptName: string, deploymentScript: DeploymentScriptUnion, options?: DeploymentScriptsCreateOptionalParams): Promise<DeploymentScriptsCreateResponse>;
    /**
     * Updates deployment script tags with specified values.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param scriptName Name of the deployment script.
     * @param options The options parameters.
     */
    update(resourceGroupName: string, scriptName: string, options?: DeploymentScriptsUpdateOptionalParams): Promise<DeploymentScriptsUpdateResponse>;
    /**
     * Gets a deployment script with a given name.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param scriptName Name of the deployment script.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, scriptName: string, options?: DeploymentScriptsGetOptionalParams): Promise<DeploymentScriptsGetResponse>;
    /**
     * Deletes a deployment script. When operation completes, status code 200 returned without content.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param scriptName Name of the deployment script.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, scriptName: string, options?: DeploymentScriptsDeleteOptionalParams): Promise<void>;
    /**
     * Lists all deployment scripts for a given subscription.
     * @param options The options parameters.
     */
    private _listBySubscription;
    /**
     * Gets deployment script logs for a given deployment script name.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param scriptName Name of the deployment script.
     * @param options The options parameters.
     */
    getLogs(resourceGroupName: string, scriptName: string, options?: DeploymentScriptsGetLogsOptionalParams): Promise<DeploymentScriptsGetLogsResponse>;
    /**
     * Gets deployment script logs for a given deployment script name.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param scriptName Name of the deployment script.
     * @param options The options parameters.
     */
    getLogsDefault(resourceGroupName: string, scriptName: string, options?: DeploymentScriptsGetLogsDefaultOptionalParams): Promise<DeploymentScriptsGetLogsDefaultResponse>;
    /**
     * Lists deployments scripts.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param options The options parameters.
     */
    private _listByResourceGroup;
    /**
     * ListBySubscriptionNext
     * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
     * @param options The options parameters.
     */
    private _listBySubscriptionNext;
    /**
     * ListByResourceGroupNext
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
     * @param options The options parameters.
     */
    private _listByResourceGroupNext;
}
//# sourceMappingURL=deploymentScripts.d.ts.map