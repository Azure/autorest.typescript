import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PollerLike } from '@azure/core-lro';
import { PollOperationState } from '@azure/core-lro';

/** Object model for the Azure CLI script. */
export declare type AzureCliScript = DeploymentScript & {
    /** Container settings. */
    containerSettings?: ContainerConfiguration;
    /** Storage Account settings. */
    storageAccountSettings?: StorageAccountConfiguration;
    /** The clean up preference when the script execution gets in a terminal state. Default setting is 'Always'. */
    cleanupPreference?: CleanupOptions;
    /**
     * State of the script execution. This only appears in the response.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ScriptProvisioningState;
    /**
     * Contains the results of script execution.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: ScriptStatus;
    /**
     * List of script outputs.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly outputs?: {
        [propertyName: string]: Record<string, unknown>;
    };
    /** Uri for the script. This is the entry point for the external script. */
    primaryScriptUri?: string;
    /** Supporting files for the external script. */
    supportingScriptUris?: string[];
    /** Script body. */
    scriptContent?: string;
    /** Command line arguments to pass to the script. Arguments are separated by spaces. ex: -Name blue* -Location 'West US 2' */
    arguments?: string;
    /** The environment variables to pass over to the script. */
    environmentVariables?: EnvironmentVariable[];
    /** Gets or sets how the deployment script should be forced to execute even if the script resource has not changed. Can be current time stamp or a GUID. */
    forceUpdateTag?: string;
    /** Interval for which the service retains the script resource after it reaches a terminal state. Resource will be deleted when this duration expires. Duration is based on ISO 8601 pattern (for example P1D means one day). */
    retentionInterval: string;
    /** Maximum allowed script execution time specified in ISO 8601 format. Default value is P1D */
    timeout?: string;
    /** Azure CLI module version to be used. */
    azCliVersion: string;
};

/** Properties of the Azure CLI script object. */
export declare type AzureCliScriptProperties = DeploymentScriptPropertiesBase & ScriptConfigurationBase & {
    /** Azure CLI module version to be used. */
    azCliVersion: string;
};

/** Object model for the Azure PowerShell script. */
export declare type AzurePowerShellScript = DeploymentScript & {
    /** Container settings. */
    containerSettings?: ContainerConfiguration;
    /** Storage Account settings. */
    storageAccountSettings?: StorageAccountConfiguration;
    /** The clean up preference when the script execution gets in a terminal state. Default setting is 'Always'. */
    cleanupPreference?: CleanupOptions;
    /**
     * State of the script execution. This only appears in the response.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ScriptProvisioningState;
    /**
     * Contains the results of script execution.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: ScriptStatus;
    /**
     * List of script outputs.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly outputs?: {
        [propertyName: string]: Record<string, unknown>;
    };
    /** Uri for the script. This is the entry point for the external script. */
    primaryScriptUri?: string;
    /** Supporting files for the external script. */
    supportingScriptUris?: string[];
    /** Script body. */
    scriptContent?: string;
    /** Command line arguments to pass to the script. Arguments are separated by spaces. ex: -Name blue* -Location 'West US 2' */
    arguments?: string;
    /** The environment variables to pass over to the script. */
    environmentVariables?: EnvironmentVariable[];
    /** Gets or sets how the deployment script should be forced to execute even if the script resource has not changed. Can be current time stamp or a GUID. */
    forceUpdateTag?: string;
    /** Interval for which the service retains the script resource after it reaches a terminal state. Resource will be deleted when this duration expires. Duration is based on ISO 8601 pattern (for example P1D means one day). */
    retentionInterval: string;
    /** Maximum allowed script execution time specified in ISO 8601 format. Default value is P1D */
    timeout?: string;
    /** Azure PowerShell module version to be used. */
    azPowerShellVersion: string;
};

/** Properties of the Azure PowerShell script object. */
export declare type AzurePowerShellScriptProperties = DeploymentScriptPropertiesBase & ScriptConfigurationBase & {
    /** Azure PowerShell module version to be used. */
    azPowerShellVersion: string;
};

/** Common properties for all Azure resources. */
export declare interface AzureResourceBase {
    /**
     * String Id used to locate any resource on Azure.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * Name of this resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * Type of this resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
}

/**
 * Defines values for CleanupOptions. \
 * {@link KnownCleanupOptions} can be used interchangeably with CleanupOptions,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Always** \
 * **OnSuccess** \
 * **OnExpiration**
 */
export declare type CleanupOptions = string;

/** Settings to customize ACI container instance. */
export declare interface ContainerConfiguration {
    /** Container group name, if not specified then the name will get auto-generated. Not specifying a 'containerGroupName' indicates the system to generate a unique name which might end up flagging an Azure Policy as non-compliant. Use 'containerGroupName' when you have an Azure Policy that expects a specific naming convention or when you want to fully control the name. 'containerGroupName' property must be between 1 and 63 characters long, must contain only lowercase letters, numbers, and dashes and it cannot start or end with a dash and consecutive dashes are not allowed. To specify a 'containerGroupName', add the following object to properties: { "containerSettings": { "containerGroupName": "contoso-container" } }. If you do not want to specify a 'containerGroupName' then do not add 'containerSettings' property. */
    containerGroupName?: string;
}

/**
 * Defines values for CreatedByType. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export declare type CreatedByType = string;

/** Deployment script object. */
export declare type DeploymentScript = AzureResourceBase & {
    /** Managed identity to be used for this deployment script. Currently, only user-assigned MSI is supported. */
    identity: ManagedServiceIdentity;
    /** The location of the ACI and the storage account for the deployment script. */
    location: string;
    /** Resource tags. */
    tags?: {
        [propertyName: string]: string;
    };
    /** Type of the script. */
    kind: ScriptType;
    /**
     * The system metadata related to this resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly systemData?: SystemData;
};

/** List of deployment scripts. */
export declare interface DeploymentScriptListResult {
    /** An array of deployment scripts. */
    value?: DeploymentScriptUnion[];
    /**
     * The URL to use for getting the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Common properties for the deployment script. */
export declare interface DeploymentScriptPropertiesBase {
    /** Container settings. */
    containerSettings?: ContainerConfiguration;
    /** Storage Account settings. */
    storageAccountSettings?: StorageAccountConfiguration;
    /** The clean up preference when the script execution gets in a terminal state. Default setting is 'Always'. */
    cleanupPreference?: CleanupOptions;
    /**
     * State of the script execution. This only appears in the response.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ScriptProvisioningState;
    /**
     * Contains the results of script execution.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: ScriptStatus;
    /**
     * List of script outputs.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly outputs?: {
        [propertyName: string]: Record<string, unknown>;
    };
}

/** Interface representing a DeploymentScripts. */
export declare interface DeploymentScripts {
    /**
     * Lists all deployment scripts for a given subscription.
     * @param options The options parameters.
     */
    listBySubscription(options?: DeploymentScriptsListBySubscriptionOptionalParams): PagedAsyncIterableIterator<DeploymentScriptUnion>;
    /**
     * Lists deployments scripts.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: DeploymentScriptsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<DeploymentScriptUnion>;
    /**
     * ListBySubscriptionNext
     * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
     * @param options The options parameters.
     */
    listBySubscriptionNext(nextLink: string, options?: DeploymentScriptsListBySubscriptionNextOptionalParams): PagedAsyncIterableIterator<DeploymentScriptUnion>;
    /**
     * ListByResourceGroupNext
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
     * @param options The options parameters.
     */
    listByResourceGroupNext(resourceGroupName: string, nextLink: string, options?: DeploymentScriptsListByResourceGroupNextOptionalParams): PagedAsyncIterableIterator<DeploymentScriptUnion>;
    /**
     * ListBySubscriptionNextNext
     * @param nextLink The nextLink from the previous successful call to the ListBySubscriptionNext method.
     * @param options The options parameters.
     */
    listBySubscriptionNextNext(nextLink: string, options?: DeploymentScriptsListBySubscriptionNextNextOptionalParams): PagedAsyncIterableIterator<DeploymentScriptUnion>;
    /**
     * ListByResourceGroupNextNext
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param nextLink The nextLink from the previous successful call to the ListByResourceGroupNext
     *                 method.
     * @param options The options parameters.
     */
    listByResourceGroupNextNext(resourceGroupName: string, nextLink: string, options?: DeploymentScriptsListByResourceGroupNextNextOptionalParams): PagedAsyncIterableIterator<DeploymentScriptUnion>;
    /**
     * ListBySubscriptionNextNextNext
     * @param nextLink The nextLink from the previous successful call to the ListBySubscriptionNextNext
     *                 method.
     * @param options The options parameters.
     */
    listBySubscriptionNextNextNext(nextLink: string, options?: DeploymentScriptsListBySubscriptionNextNextNextOptionalParams): PagedAsyncIterableIterator<DeploymentScriptUnion>;
    /**
     * ListByResourceGroupNextNextNext
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param nextLink The nextLink from the previous successful call to the ListByResourceGroupNextNext
     *                 method.
     * @param options The options parameters.
     */
    listByResourceGroupNextNextNext(resourceGroupName: string, nextLink: string, options?: DeploymentScriptsListByResourceGroupNextNextNextOptionalParams): PagedAsyncIterableIterator<DeploymentScriptUnion>;
    /**
     * ListBySubscriptionNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the ListBySubscriptionNextNextNext
     *                 method.
     * @param options The options parameters.
     */
    listBySubscriptionNextNextNextNext(nextLink: string, options?: DeploymentScriptsListBySubscriptionNextNextNextNextOptionalParams): PagedAsyncIterableIterator<DeploymentScriptUnion>;
    /**
     * ListByResourceGroupNextNextNextNext
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListByResourceGroupNextNextNext method.
     * @param options The options parameters.
     */
    listByResourceGroupNextNextNextNext(resourceGroupName: string, nextLink: string, options?: DeploymentScriptsListByResourceGroupNextNextNextNextOptionalParams): PagedAsyncIterableIterator<DeploymentScriptUnion>;
    /**
     * ListBySubscriptionNextNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListBySubscriptionNextNextNextNext method.
     * @param options The options parameters.
     */
    listBySubscriptionNextNextNextNextNext(nextLink: string, options?: DeploymentScriptsListBySubscriptionNextNextNextNextNextOptionalParams): PagedAsyncIterableIterator<DeploymentScriptUnion>;
    /**
     * ListByResourceGroupNextNextNextNextNext
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListByResourceGroupNextNextNextNext method.
     * @param options The options parameters.
     */
    listByResourceGroupNextNextNextNextNext(resourceGroupName: string, nextLink: string, options?: DeploymentScriptsListByResourceGroupNextNextNextNextNextOptionalParams): PagedAsyncIterableIterator<DeploymentScriptUnion>;
    /**
     * ListBySubscriptionNextNextNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListBySubscriptionNextNextNextNextNext method.
     * @param options The options parameters.
     */
    listBySubscriptionNextNextNextNextNextNext(nextLink: string, options?: DeploymentScriptsListBySubscriptionNextNextNextNextNextNextOptionalParams): PagedAsyncIterableIterator<DeploymentScriptUnion>;
    /**
     * ListByResourceGroupNextNextNextNextNextNext
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListByResourceGroupNextNextNextNextNext method.
     * @param options The options parameters.
     */
    listByResourceGroupNextNextNextNextNextNext(resourceGroupName: string, nextLink: string, options?: DeploymentScriptsListByResourceGroupNextNextNextNextNextNextOptionalParams): PagedAsyncIterableIterator<DeploymentScriptUnion>;
    /**
     * ListBySubscriptionNextNextNextNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListBySubscriptionNextNextNextNextNextNext method.
     * @param options The options parameters.
     */
    listBySubscriptionNextNextNextNextNextNextNext(nextLink: string, options?: DeploymentScriptsListBySubscriptionNextNextNextNextNextNextNextOptionalParams): PagedAsyncIterableIterator<DeploymentScriptUnion>;
    /**
     * ListByResourceGroupNextNextNextNextNextNextNext
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListByResourceGroupNextNextNextNextNextNext method.
     * @param options The options parameters.
     */
    listByResourceGroupNextNextNextNextNextNextNext(resourceGroupName: string, nextLink: string, options?: DeploymentScriptsListByResourceGroupNextNextNextNextNextNextNextOptionalParams): PagedAsyncIterableIterator<DeploymentScriptUnion>;
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
}

export declare class DeploymentScriptsClient extends coreClient.ServiceClient {
    $host: string;
    subscriptionId: string;
    apiVersion: string;
    /**
     * Initializes a new instance of the DeploymentScriptsClient class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId Subscription Id which forms part of the URI for every service call.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: DeploymentScriptsClientOptionalParams);
    deploymentScripts: DeploymentScripts;
}

/** Optional parameters. */
export declare interface DeploymentScriptsClientOptionalParams extends coreClient.ServiceClientOptions {
    /** server parameter */
    $host?: string;
    /** Api Version */
    apiVersion?: string;
    /** Overrides client endpoint. */
    endpoint?: string;
}

/** Optional parameters. */
export declare interface DeploymentScriptsCreateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the create operation. */
export declare type DeploymentScriptsCreateResponse = DeploymentScriptUnion;

/** Optional parameters. */
export declare interface DeploymentScriptsDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Deployment scripts error response. */
export declare interface DeploymentScriptsError {
    /** Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.) */
    error?: ErrorResponse;
}

/** Optional parameters. */
export declare interface DeploymentScriptsGetLogsDefaultOptionalParams extends coreClient.OperationOptions {
    /** The number of lines to show from the tail of the deployment script log. Valid value is a positive number up to 1000. If 'tail' is not provided, all available logs are shown up to container instance log capacity of 4mb. */
    tail?: number;
}

/** Contains response data for the getLogsDefault operation. */
export declare type DeploymentScriptsGetLogsDefaultResponse = ScriptLog;

/** Optional parameters. */
export declare interface DeploymentScriptsGetLogsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getLogs operation. */
export declare type DeploymentScriptsGetLogsResponse = ScriptLogsList;

/** Optional parameters. */
export declare interface DeploymentScriptsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type DeploymentScriptsGetResponse = DeploymentScriptUnion;

/** Optional parameters. */
export declare interface DeploymentScriptsListByResourceGroupNextNextNextNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNextNextNextNextNextNextNextNext operation. */
export declare type DeploymentScriptsListByResourceGroupNextNextNextNextNextNextNextNextResponse = DeploymentScriptListResult;

/** Optional parameters. */
export declare interface DeploymentScriptsListByResourceGroupNextNextNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNextNextNextNextNextNextNext operation. */
export declare type DeploymentScriptsListByResourceGroupNextNextNextNextNextNextNextResponse = DeploymentScriptListResult;

/** Optional parameters. */
export declare interface DeploymentScriptsListByResourceGroupNextNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNextNextNextNextNextNext operation. */
export declare type DeploymentScriptsListByResourceGroupNextNextNextNextNextNextResponse = DeploymentScriptListResult;

/** Optional parameters. */
export declare interface DeploymentScriptsListByResourceGroupNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNextNextNextNextNext operation. */
export declare type DeploymentScriptsListByResourceGroupNextNextNextNextNextResponse = DeploymentScriptListResult;

/** Optional parameters. */
export declare interface DeploymentScriptsListByResourceGroupNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNextNextNextNext operation. */
export declare type DeploymentScriptsListByResourceGroupNextNextNextNextResponse = DeploymentScriptListResult;

/** Optional parameters. */
export declare interface DeploymentScriptsListByResourceGroupNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNextNextNext operation. */
export declare type DeploymentScriptsListByResourceGroupNextNextNextResponse = DeploymentScriptListResult;

/** Optional parameters. */
export declare interface DeploymentScriptsListByResourceGroupNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNextNext operation. */
export declare type DeploymentScriptsListByResourceGroupNextNextResponse = DeploymentScriptListResult;

/** Optional parameters. */
export declare interface DeploymentScriptsListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type DeploymentScriptsListByResourceGroupNextResponse = DeploymentScriptListResult;

/** Optional parameters. */
export declare interface DeploymentScriptsListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type DeploymentScriptsListByResourceGroupResponse = DeploymentScriptListResult;

/** Optional parameters. */
export declare interface DeploymentScriptsListBySubscriptionNextNextNextNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBySubscriptionNextNextNextNextNextNextNextNext operation. */
export declare type DeploymentScriptsListBySubscriptionNextNextNextNextNextNextNextNextResponse = DeploymentScriptListResult;

/** Optional parameters. */
export declare interface DeploymentScriptsListBySubscriptionNextNextNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBySubscriptionNextNextNextNextNextNextNext operation. */
export declare type DeploymentScriptsListBySubscriptionNextNextNextNextNextNextNextResponse = DeploymentScriptListResult;

/** Optional parameters. */
export declare interface DeploymentScriptsListBySubscriptionNextNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBySubscriptionNextNextNextNextNextNext operation. */
export declare type DeploymentScriptsListBySubscriptionNextNextNextNextNextNextResponse = DeploymentScriptListResult;

/** Optional parameters. */
export declare interface DeploymentScriptsListBySubscriptionNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBySubscriptionNextNextNextNextNext operation. */
export declare type DeploymentScriptsListBySubscriptionNextNextNextNextNextResponse = DeploymentScriptListResult;

/** Optional parameters. */
export declare interface DeploymentScriptsListBySubscriptionNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBySubscriptionNextNextNextNext operation. */
export declare type DeploymentScriptsListBySubscriptionNextNextNextNextResponse = DeploymentScriptListResult;

/** Optional parameters. */
export declare interface DeploymentScriptsListBySubscriptionNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBySubscriptionNextNextNext operation. */
export declare type DeploymentScriptsListBySubscriptionNextNextNextResponse = DeploymentScriptListResult;

/** Optional parameters. */
export declare interface DeploymentScriptsListBySubscriptionNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBySubscriptionNextNext operation. */
export declare type DeploymentScriptsListBySubscriptionNextNextResponse = DeploymentScriptListResult;

/** Optional parameters. */
export declare interface DeploymentScriptsListBySubscriptionNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBySubscriptionNext operation. */
export declare type DeploymentScriptsListBySubscriptionNextResponse = DeploymentScriptListResult;

/** Optional parameters. */
export declare interface DeploymentScriptsListBySubscriptionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBySubscription operation. */
export declare type DeploymentScriptsListBySubscriptionResponse = DeploymentScriptListResult;

/** Optional parameters. */
export declare interface DeploymentScriptsUpdateOptionalParams extends coreClient.OperationOptions {
    /** Deployment script resource with the tags to be updated. */
    deploymentScript?: DeploymentScriptUpdateParameter;
}

/** Contains response data for the update operation. */
export declare type DeploymentScriptsUpdateResponse = DeploymentScriptUnion;

export declare type DeploymentScriptUnion = DeploymentScript | AzurePowerShellScript | AzureCliScript;

/** Deployment script parameters to be updated. */
export declare type DeploymentScriptUpdateParameter = AzureResourceBase & {
    /** Resource tags to be updated. */
    tags?: {
        [propertyName: string]: string;
    };
};

/** The environment variable to pass to the script in the container instance. */
export declare interface EnvironmentVariable {
    /** The name of the environment variable. */
    name: string;
    /** The value of the environment variable. */
    value?: string;
    /** The value of the secure environment variable. */
    secureValue?: string;
}

/** The resource management error additional info. */
export declare interface ErrorAdditionalInfo {
    /**
     * The additional info type.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /**
     * The additional info.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly info?: Record<string, unknown>;
}

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.) */
export declare interface ErrorResponse {
    /**
     * The error code.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly code?: string;
    /**
     * The error message.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly message?: string;
    /**
     * The error target.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly target?: string;
    /**
     * The error details.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly details?: ErrorResponse[];
    /**
     * The error additional info.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly additionalInfo?: ErrorAdditionalInfo[];
}

/** Known values of {@link CleanupOptions} that the service accepts. */
export declare enum KnownCleanupOptions {
    Always = "Always",
    OnSuccess = "OnSuccess",
    OnExpiration = "OnExpiration"
}

/** Known values of {@link CreatedByType} that the service accepts. */
export declare enum KnownCreatedByType {
    User = "User",
    Application = "Application",
    ManagedIdentity = "ManagedIdentity",
    Key = "Key"
}

/** Known values of {@link ManagedServiceIdentityType} that the service accepts. */
export declare enum KnownManagedServiceIdentityType {
    UserAssigned = "UserAssigned"
}

/** Known values of {@link ScriptProvisioningState} that the service accepts. */
export declare enum KnownScriptProvisioningState {
    Creating = "Creating",
    ProvisioningResources = "ProvisioningResources",
    Running = "Running",
    Succeeded = "Succeeded",
    Failed = "Failed",
    Canceled = "Canceled"
}

/** Known values of {@link ScriptType} that the service accepts. */
export declare enum KnownScriptType {
    AzurePowerShell = "AzurePowerShell",
    AzureCLI = "AzureCLI"
}

/** Managed identity generic object. */
export declare interface ManagedServiceIdentity {
    /** Type of the managed identity. */
    type?: ManagedServiceIdentityType;
    /**
     * ID of the Azure Active Directory.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly tenantId?: string;
    /** The list of user-assigned managed identities associated with the resource. Key is the Azure resource Id of the managed identity. */
    userAssignedIdentities?: {
        [propertyName: string]: UserAssignedIdentity;
    };
}

/**
 * Defines values for ManagedServiceIdentityType. \
 * {@link KnownManagedServiceIdentityType} can be used interchangeably with ManagedServiceIdentityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **UserAssigned**
 */
export declare type ManagedServiceIdentityType = string;

/** Common configuration settings for both Azure PowerShell and Azure CLI scripts. */
export declare interface ScriptConfigurationBase {
    /** Uri for the script. This is the entry point for the external script. */
    primaryScriptUri?: string;
    /** Supporting files for the external script. */
    supportingScriptUris?: string[];
    /** Script body. */
    scriptContent?: string;
    /** Command line arguments to pass to the script. Arguments are separated by spaces. ex: -Name blue* -Location 'West US 2' */
    arguments?: string;
    /** The environment variables to pass over to the script. */
    environmentVariables?: EnvironmentVariable[];
    /** Gets or sets how the deployment script should be forced to execute even if the script resource has not changed. Can be current time stamp or a GUID. */
    forceUpdateTag?: string;
    /** Interval for which the service retains the script resource after it reaches a terminal state. Resource will be deleted when this duration expires. Duration is based on ISO 8601 pattern (for example P1D means one day). */
    retentionInterval: string;
    /** Maximum allowed script execution time specified in ISO 8601 format. Default value is P1D */
    timeout?: string;
}

/** Script execution log object. */
export declare type ScriptLog = AzureResourceBase & {
    /**
     * Script execution logs in text format.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly log?: string;
};

/** Deployment script execution logs. */
export declare interface ScriptLogsList {
    /** Deployment scripts logs. */
    value?: ScriptLog[];
}

/**
 * Defines values for ScriptProvisioningState. \
 * {@link KnownScriptProvisioningState} can be used interchangeably with ScriptProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Creating** \
 * **ProvisioningResources** \
 * **Running** \
 * **Succeeded** \
 * **Failed** \
 * **Canceled**
 */
export declare type ScriptProvisioningState = string;

/** Generic object modeling results of script execution. */
export declare interface ScriptStatus {
    /**
     * ACI resource Id.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly containerInstanceId?: string;
    /**
     * Storage account resource Id.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly storageAccountId?: string;
    /**
     * Start time of the script execution.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly startTime?: Date;
    /**
     * End time of the script execution.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly endTime?: Date;
    /**
     * Time the deployment script resource will expire.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly expirationTime?: Date;
    /** Error that is relayed from the script execution. */
    error?: ErrorResponse;
}

/**
 * Defines values for ScriptType. \
 * {@link KnownScriptType} can be used interchangeably with ScriptType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **AzurePowerShell** \
 * **AzureCLI**
 */
export declare type ScriptType = string;

/** Settings to use an existing storage account. Valid storage account kinds are: Storage, StorageV2 and FileStorage */
export declare interface StorageAccountConfiguration {
    /** The storage account name. */
    storageAccountName?: string;
    /** The storage account access key. */
    storageAccountKey?: string;
}

/** Metadata pertaining to creation and last modification of the resource. */
export declare interface SystemData {
    /** The identity that created the resource. */
    createdBy?: string;
    /** The type of identity that created the resource. */
    createdByType?: CreatedByType;
    /** The timestamp of resource creation (UTC). */
    createdAt?: Date;
    /** The identity that last modified the resource. */
    lastModifiedBy?: string;
    /** The type of identity that last modified the resource. */
    lastModifiedByType?: CreatedByType;
    /** The timestamp of resource last modification (UTC) */
    lastModifiedAt?: Date;
}

/** User-assigned managed identity. */
export declare interface UserAssignedIdentity {
    /**
     * Azure Active Directory principal ID associated with this identity.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly principalId?: string;
    /**
     * Client App Id associated with this identity.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly clientId?: string;
}

export { }
