import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PollerLike } from '@azure/core-lro';
import { PollOperationState } from '@azure/core-lro';

/** The type of the paths for alias. */
export declare interface AliasPathType {
    /** The path of an alias. */
    path?: string;
    /** The API versions. */
    apiVersions?: string[];
}

/** The alias type. */
export declare interface AliasType {
    /** The alias name. */
    name?: string;
    /** The paths for an alias. */
    paths?: AliasPathType[];
}

/** Deployment dependency information. */
export declare interface BasicDependency {
    /** The ID of the dependency. */
    id?: string;
    /** The dependency resource type. */
    resourceType?: string;
    /** The dependency resource name. */
    resourceName?: string;
}

/** Defines values for ChangeType. */
export declare type ChangeType = "Create" | "Delete" | "Ignore" | "Deploy" | "NoChange" | "Modify";

/** An error response for a resource management request. */
export declare interface CloudError {
    /** The resource management error response. */
    error?: ErrorResponse;
}

export declare interface ComponentsSgqdofSchemasIdentityPropertiesUserassignedidentitiesAdditionalproperties {
    /**
     * The principal id of user assigned identity.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly principalId?: string;
    /**
     * The client id of user assigned identity.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly clientId?: string;
}

/** The debug setting. */
export declare interface DebugSetting {
    /** Specifies the type of information to log for debugging. The permitted values are none, requestContent, responseContent, or both requestContent and responseContent separated by a comma. The default is none. When setting this value, carefully consider the type of information you are passing in during deployment. By logging information about the request or response, you could potentially expose sensitive data that is retrieved through the deployment operations. */
    detailLevel?: string;
}

/** Deployment dependency information. */
export declare interface Dependency {
    /** The list of dependencies. */
    dependsOn?: BasicDependency[];
    /** The ID of the dependency. */
    id?: string;
    /** The dependency resource type. */
    resourceType?: string;
    /** The dependency resource name. */
    resourceName?: string;
}

/** Deployment operation parameters. */
export declare interface Deployment {
    /** The location to store the deployment data. */
    location?: string;
    /** The deployment properties. */
    properties: DeploymentProperties;
}

/** The deployment export result. */
export declare interface DeploymentExportResult {
    /** The template content. */
    template?: Record<string, unknown>;
}

/** Deployment information. */
export declare interface DeploymentExtended {
    /**
     * The ID of the deployment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * The name of the deployment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The type of the deployment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** the location of the deployment. */
    location?: string;
    /** Deployment properties. */
    properties?: DeploymentPropertiesExtended;
}

/** Deployment filter. */
export declare interface DeploymentExtendedFilter {
    /** The provisioning state. */
    provisioningState?: string;
}

/** List of deployments. */
export declare interface DeploymentListResult {
    /** An array of deployments. */
    value?: DeploymentExtended[];
    /**
     * The URL to use for getting the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Defines values for DeploymentMode. */
export declare type DeploymentMode = "Incremental" | "Complete";

/** Deployment operation information. */
export declare interface DeploymentOperation {
    /**
     * Full deployment operation ID.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * Deployment operation ID.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly operationId?: string;
    /** Deployment properties. */
    properties?: DeploymentOperationProperties;
}

/** Deployment operation properties. */
export declare interface DeploymentOperationProperties {
    /**
     * The state of the provisioning.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: string;
    /**
     * The date and time of the operation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly timestamp?: Date;
    /**
     * The duration of the operation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly duration?: string;
    /**
     * Deployment operation service request id.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly serviceRequestId?: string;
    /**
     * Operation status code.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly statusCode?: string;
    /**
     * Operation status message.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly statusMessage?: Record<string, unknown>;
    /**
     * The target resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly targetResource?: TargetResource;
    /**
     * The HTTP request message.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly request?: HttpMessage;
    /**
     * The HTTP response message.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly response?: HttpMessage;
}

/** Interface representing a DeploymentOperations. */
export declare interface DeploymentOperations {
    /**
     * Gets all deployments operations for a deployment.
     * @param scope The scope of a deployment.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    listAtScope(scope: string, deploymentName: string, options?: DeploymentOperationsListAtScopeOptionalParams): PagedAsyncIterableIterator<DeploymentOperation>;
    /**
     * Gets all deployments operations for a deployment.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    listAtTenantScope(deploymentName: string, options?: DeploymentOperationsListAtTenantScopeOptionalParams): PagedAsyncIterableIterator<DeploymentOperation>;
    /**
     * Gets all deployments operations for a deployment.
     * @param groupId The management group ID.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    listAtManagementGroupScope(groupId: string, deploymentName: string, options?: DeploymentOperationsListAtManagementGroupScopeOptionalParams): PagedAsyncIterableIterator<DeploymentOperation>;
    /**
     * Gets all deployments operations for a deployment.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    listAtSubscriptionScope(deploymentName: string, options?: DeploymentOperationsListAtSubscriptionScopeOptionalParams): PagedAsyncIterableIterator<DeploymentOperation>;
    /**
     * Gets all deployments operations for a deployment.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, deploymentName: string, options?: DeploymentOperationsListOptionalParams): PagedAsyncIterableIterator<DeploymentOperation>;
    /**
     * Gets a deployments operation.
     * @param scope The scope of a deployment.
     * @param deploymentName The name of the deployment.
     * @param operationId The ID of the operation to get.
     * @param options The options parameters.
     */
    getAtScope(scope: string, deploymentName: string, operationId: string, options?: DeploymentOperationsGetAtScopeOptionalParams): Promise<DeploymentOperationsGetAtScopeResponse>;
    /**
     * Gets a deployments operation.
     * @param deploymentName The name of the deployment.
     * @param operationId The ID of the operation to get.
     * @param options The options parameters.
     */
    getAtTenantScope(deploymentName: string, operationId: string, options?: DeploymentOperationsGetAtTenantScopeOptionalParams): Promise<DeploymentOperationsGetAtTenantScopeResponse>;
    /**
     * Gets a deployments operation.
     * @param groupId The management group ID.
     * @param deploymentName The name of the deployment.
     * @param operationId The ID of the operation to get.
     * @param options The options parameters.
     */
    getAtManagementGroupScope(groupId: string, deploymentName: string, operationId: string, options?: DeploymentOperationsGetAtManagementGroupScopeOptionalParams): Promise<DeploymentOperationsGetAtManagementGroupScopeResponse>;
    /**
     * Gets a deployments operation.
     * @param deploymentName The name of the deployment.
     * @param operationId The ID of the operation to get.
     * @param options The options parameters.
     */
    getAtSubscriptionScope(deploymentName: string, operationId: string, options?: DeploymentOperationsGetAtSubscriptionScopeOptionalParams): Promise<DeploymentOperationsGetAtSubscriptionScopeResponse>;
    /**
     * Gets a deployments operation.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param deploymentName The name of the deployment.
     * @param operationId The ID of the operation to get.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, deploymentName: string, operationId: string, options?: DeploymentOperationsGetOptionalParams): Promise<DeploymentOperationsGetResponse>;
}

/** Optional parameters. */
export declare interface DeploymentOperationsGetAtManagementGroupScopeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAtManagementGroupScope operation. */
export declare type DeploymentOperationsGetAtManagementGroupScopeResponse = DeploymentOperation;

/** Optional parameters. */
export declare interface DeploymentOperationsGetAtScopeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAtScope operation. */
export declare type DeploymentOperationsGetAtScopeResponse = DeploymentOperation;

/** Optional parameters. */
export declare interface DeploymentOperationsGetAtSubscriptionScopeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAtSubscriptionScope operation. */
export declare type DeploymentOperationsGetAtSubscriptionScopeResponse = DeploymentOperation;

/** Optional parameters. */
export declare interface DeploymentOperationsGetAtTenantScopeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAtTenantScope operation. */
export declare type DeploymentOperationsGetAtTenantScopeResponse = DeploymentOperation;

/** Optional parameters. */
export declare interface DeploymentOperationsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type DeploymentOperationsGetResponse = DeploymentOperation;

/** Optional parameters. */
export declare interface DeploymentOperationsListAtManagementGroupScopeNextOptionalParams extends coreClient.OperationOptions {
    /** The number of results to return. */
    top?: number;
}

/** Contains response data for the listAtManagementGroupScopeNext operation. */
export declare type DeploymentOperationsListAtManagementGroupScopeNextResponse = DeploymentOperationsListResult;

/** Optional parameters. */
export declare interface DeploymentOperationsListAtManagementGroupScopeOptionalParams extends coreClient.OperationOptions {
    /** The number of results to return. */
    top?: number;
}

/** Contains response data for the listAtManagementGroupScope operation. */
export declare type DeploymentOperationsListAtManagementGroupScopeResponse = DeploymentOperationsListResult;

/** Optional parameters. */
export declare interface DeploymentOperationsListAtScopeNextOptionalParams extends coreClient.OperationOptions {
    /** The number of results to return. */
    top?: number;
}

/** Contains response data for the listAtScopeNext operation. */
export declare type DeploymentOperationsListAtScopeNextResponse = DeploymentOperationsListResult;

/** Optional parameters. */
export declare interface DeploymentOperationsListAtScopeOptionalParams extends coreClient.OperationOptions {
    /** The number of results to return. */
    top?: number;
}

/** Contains response data for the listAtScope operation. */
export declare type DeploymentOperationsListAtScopeResponse = DeploymentOperationsListResult;

/** Optional parameters. */
export declare interface DeploymentOperationsListAtSubscriptionScopeNextOptionalParams extends coreClient.OperationOptions {
    /** The number of results to return. */
    top?: number;
}

/** Contains response data for the listAtSubscriptionScopeNext operation. */
export declare type DeploymentOperationsListAtSubscriptionScopeNextResponse = DeploymentOperationsListResult;

/** Optional parameters. */
export declare interface DeploymentOperationsListAtSubscriptionScopeOptionalParams extends coreClient.OperationOptions {
    /** The number of results to return. */
    top?: number;
}

/** Contains response data for the listAtSubscriptionScope operation. */
export declare type DeploymentOperationsListAtSubscriptionScopeResponse = DeploymentOperationsListResult;

/** Optional parameters. */
export declare interface DeploymentOperationsListAtTenantScopeNextOptionalParams extends coreClient.OperationOptions {
    /** The number of results to return. */
    top?: number;
}

/** Contains response data for the listAtTenantScopeNext operation. */
export declare type DeploymentOperationsListAtTenantScopeNextResponse = DeploymentOperationsListResult;

/** Optional parameters. */
export declare interface DeploymentOperationsListAtTenantScopeOptionalParams extends coreClient.OperationOptions {
    /** The number of results to return. */
    top?: number;
}

/** Contains response data for the listAtTenantScope operation. */
export declare type DeploymentOperationsListAtTenantScopeResponse = DeploymentOperationsListResult;

/** Optional parameters. */
export declare interface DeploymentOperationsListNextOptionalParams extends coreClient.OperationOptions {
    /** The number of results to return. */
    top?: number;
}

/** Contains response data for the listNext operation. */
export declare type DeploymentOperationsListNextResponse = DeploymentOperationsListResult;

/** Optional parameters. */
export declare interface DeploymentOperationsListOptionalParams extends coreClient.OperationOptions {
    /** The number of results to return. */
    top?: number;
}

/** Contains response data for the list operation. */
export declare type DeploymentOperationsListResponse = DeploymentOperationsListResult;

/** List of deployment operations. */
export declare interface DeploymentOperationsListResult {
    /** An array of deployment operations. */
    value?: DeploymentOperation[];
    /**
     * The URL to use for getting the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Deployment properties. */
export declare interface DeploymentProperties {
    /** The template content. You use this element when you want to pass the template syntax directly in the request rather than link to an existing template. It can be a JObject or well-formed JSON string. Use either the templateLink property or the template property, but not both. */
    template?: Record<string, unknown>;
    /** The URI of the template. Use either the templateLink property or the template property, but not both. */
    templateLink?: TemplateLink;
    /** Name and value pairs that define the deployment parameters for the template. You use this element when you want to provide the parameter values directly in the request rather than link to an existing parameter file. Use either the parametersLink property or the parameters property, but not both. It can be a JObject or a well formed JSON string. */
    parameters?: Record<string, unknown>;
    /** The URI of parameters file. You use this element to link to an existing parameters file. Use either the parametersLink property or the parameters property, but not both. */
    parametersLink?: ParametersLink;
    /** The mode that is used to deploy resources. This value can be either Incremental or Complete. In Incremental mode, resources are deployed without deleting existing resources that are not included in the template. In Complete mode, resources are deployed and existing resources in the resource group that are not included in the template are deleted. Be careful when using Complete mode as you may unintentionally delete resources. */
    mode: DeploymentMode;
    /** The debug setting of the deployment. */
    debugSetting?: DebugSetting;
    /** The deployment on error behavior. */
    onErrorDeployment?: OnErrorDeployment;
}

/** Deployment properties with additional details. */
export declare interface DeploymentPropertiesExtended {
    /**
     * The state of the provisioning.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: string;
    /**
     * The correlation ID of the deployment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly correlationId?: string;
    /**
     * The timestamp of the template deployment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly timestamp?: Date;
    /**
     * The duration of the template deployment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly duration?: string;
    /** Key/value pairs that represent deployment output. */
    outputs?: Record<string, unknown>;
    /** The list of resource providers needed for the deployment. */
    providers?: Provider[];
    /** The list of deployment dependencies. */
    dependencies?: Dependency[];
    /** The template content. Use only one of Template or TemplateLink. */
    template?: Record<string, unknown>;
    /** The URI referencing the template. Use only one of Template or TemplateLink. */
    templateLink?: TemplateLink;
    /** Deployment parameters. Use only one of Parameters or ParametersLink. */
    parameters?: Record<string, unknown>;
    /** The URI referencing the parameters. Use only one of Parameters or ParametersLink. */
    parametersLink?: ParametersLink;
    /** The deployment mode. Possible values are Incremental and Complete. */
    mode?: DeploymentMode;
    /** The debug setting of the deployment. */
    debugSetting?: DebugSetting;
    /** The deployment on error behavior. */
    onErrorDeployment?: OnErrorDeploymentExtended;
}

/** Interface representing a Deployments. */
export declare interface Deployments {
    /**
     * Get all the deployments at the given scope.
     * @param scope The scope of a deployment.
     * @param options The options parameters.
     */
    listAtScope(scope: string, options?: DeploymentsListAtScopeOptionalParams): PagedAsyncIterableIterator<DeploymentExtended>;
    /**
     * Get all the deployments at the tenant scope.
     * @param options The options parameters.
     */
    listAtTenantScope(options?: DeploymentsListAtTenantScopeOptionalParams): PagedAsyncIterableIterator<DeploymentExtended>;
    /**
     * Get all the deployments for a management group.
     * @param groupId The management group ID.
     * @param options The options parameters.
     */
    listAtManagementGroupScope(groupId: string, options?: DeploymentsListAtManagementGroupScopeOptionalParams): PagedAsyncIterableIterator<DeploymentExtended>;
    /**
     * Get all the deployments for a subscription.
     * @param options The options parameters.
     */
    listAtSubscriptionScope(options?: DeploymentsListAtSubscriptionScopeOptionalParams): PagedAsyncIterableIterator<DeploymentExtended>;
    /**
     * Get all the deployments for a resource group.
     * @param resourceGroupName The name of the resource group with the deployments to get. The name is
     *                          case insensitive.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: DeploymentsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<DeploymentExtended>;
    /**
     * A template deployment that is currently running cannot be deleted. Deleting a template deployment
     * removes the associated deployment operations. This is an asynchronous operation that returns a
     * status of 202 until the template deployment is successfully deleted. The Location response header
     * contains the URI that is used to obtain the status of the process. While the process is running, a
     * call to the URI in the Location header returns a status of 202. When the process finishes, the URI
     * in the Location header returns a status of 204 on success. If the asynchronous request failed, the
     * URI in the Location header returns an error-level status code.
     * @param scope The scope of a deployment.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    beginDeleteAtScope(scope: string, deploymentName: string, options?: DeploymentsDeleteAtScopeOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * A template deployment that is currently running cannot be deleted. Deleting a template deployment
     * removes the associated deployment operations. This is an asynchronous operation that returns a
     * status of 202 until the template deployment is successfully deleted. The Location response header
     * contains the URI that is used to obtain the status of the process. While the process is running, a
     * call to the URI in the Location header returns a status of 202. When the process finishes, the URI
     * in the Location header returns a status of 204 on success. If the asynchronous request failed, the
     * URI in the Location header returns an error-level status code.
     * @param scope The scope of a deployment.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    beginDeleteAtScopeAndWait(scope: string, deploymentName: string, options?: DeploymentsDeleteAtScopeOptionalParams): Promise<void>;
    /**
     * Checks whether the deployment exists.
     * @param scope The scope of a deployment.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    checkExistenceAtScope(scope: string, deploymentName: string, options?: DeploymentsCheckExistenceAtScopeOptionalParams): Promise<void>;
    /**
     * You can provide the template and parameters directly in the request or link to JSON files.
     * @param scope The scope of a deployment.
     * @param deploymentName The name of the deployment.
     * @param parameters Additional parameters supplied to the operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAtScope(scope: string, deploymentName: string, parameters: Deployment, options?: DeploymentsCreateOrUpdateAtScopeOptionalParams): Promise<PollerLike<PollOperationState<DeploymentsCreateOrUpdateAtScopeResponse>, DeploymentsCreateOrUpdateAtScopeResponse>>;
    /**
     * You can provide the template and parameters directly in the request or link to JSON files.
     * @param scope The scope of a deployment.
     * @param deploymentName The name of the deployment.
     * @param parameters Additional parameters supplied to the operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAtScopeAndWait(scope: string, deploymentName: string, parameters: Deployment, options?: DeploymentsCreateOrUpdateAtScopeOptionalParams): Promise<DeploymentsCreateOrUpdateAtScopeResponse>;
    /**
     * Gets a deployment.
     * @param scope The scope of a deployment.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    getAtScope(scope: string, deploymentName: string, options?: DeploymentsGetAtScopeOptionalParams): Promise<DeploymentsGetAtScopeResponse>;
    /**
     * You can cancel a deployment only if the provisioningState is Accepted or Running. After the
     * deployment is canceled, the provisioningState is set to Canceled. Canceling a template deployment
     * stops the currently running template deployment and leaves the resources partially deployed.
     * @param scope The scope of a deployment.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    cancelAtScope(scope: string, deploymentName: string, options?: DeploymentsCancelAtScopeOptionalParams): Promise<void>;
    /**
     * Validates whether the specified template is syntactically correct and will be accepted by Azure
     * Resource Manager..
     * @param scope The scope of a deployment.
     * @param deploymentName The name of the deployment.
     * @param parameters Parameters to validate.
     * @param options The options parameters.
     */
    validateAtScope(scope: string, deploymentName: string, parameters: Deployment, options?: DeploymentsValidateAtScopeOptionalParams): Promise<DeploymentsValidateAtScopeResponse>;
    /**
     * Exports the template used for specified deployment.
     * @param scope The scope of a deployment.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    exportTemplateAtScope(scope: string, deploymentName: string, options?: DeploymentsExportTemplateAtScopeOptionalParams): Promise<DeploymentsExportTemplateAtScopeResponse>;
    /**
     * A template deployment that is currently running cannot be deleted. Deleting a template deployment
     * removes the associated deployment operations. This is an asynchronous operation that returns a
     * status of 202 until the template deployment is successfully deleted. The Location response header
     * contains the URI that is used to obtain the status of the process. While the process is running, a
     * call to the URI in the Location header returns a status of 202. When the process finishes, the URI
     * in the Location header returns a status of 204 on success. If the asynchronous request failed, the
     * URI in the Location header returns an error-level status code.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    beginDeleteAtTenantScope(deploymentName: string, options?: DeploymentsDeleteAtTenantScopeOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * A template deployment that is currently running cannot be deleted. Deleting a template deployment
     * removes the associated deployment operations. This is an asynchronous operation that returns a
     * status of 202 until the template deployment is successfully deleted. The Location response header
     * contains the URI that is used to obtain the status of the process. While the process is running, a
     * call to the URI in the Location header returns a status of 202. When the process finishes, the URI
     * in the Location header returns a status of 204 on success. If the asynchronous request failed, the
     * URI in the Location header returns an error-level status code.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    beginDeleteAtTenantScopeAndWait(deploymentName: string, options?: DeploymentsDeleteAtTenantScopeOptionalParams): Promise<void>;
    /**
     * Checks whether the deployment exists.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    checkExistenceAtTenantScope(deploymentName: string, options?: DeploymentsCheckExistenceAtTenantScopeOptionalParams): Promise<void>;
    /**
     * You can provide the template and parameters directly in the request or link to JSON files.
     * @param deploymentName The name of the deployment.
     * @param parameters Additional parameters supplied to the operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAtTenantScope(deploymentName: string, parameters: ScopedDeployment, options?: DeploymentsCreateOrUpdateAtTenantScopeOptionalParams): Promise<PollerLike<PollOperationState<DeploymentsCreateOrUpdateAtTenantScopeResponse>, DeploymentsCreateOrUpdateAtTenantScopeResponse>>;
    /**
     * You can provide the template and parameters directly in the request or link to JSON files.
     * @param deploymentName The name of the deployment.
     * @param parameters Additional parameters supplied to the operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAtTenantScopeAndWait(deploymentName: string, parameters: ScopedDeployment, options?: DeploymentsCreateOrUpdateAtTenantScopeOptionalParams): Promise<DeploymentsCreateOrUpdateAtTenantScopeResponse>;
    /**
     * Gets a deployment.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    getAtTenantScope(deploymentName: string, options?: DeploymentsGetAtTenantScopeOptionalParams): Promise<DeploymentsGetAtTenantScopeResponse>;
    /**
     * You can cancel a deployment only if the provisioningState is Accepted or Running. After the
     * deployment is canceled, the provisioningState is set to Canceled. Canceling a template deployment
     * stops the currently running template deployment and leaves the resources partially deployed.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    cancelAtTenantScope(deploymentName: string, options?: DeploymentsCancelAtTenantScopeOptionalParams): Promise<void>;
    /**
     * Validates whether the specified template is syntactically correct and will be accepted by Azure
     * Resource Manager..
     * @param deploymentName The name of the deployment.
     * @param parameters Parameters to validate.
     * @param options The options parameters.
     */
    validateAtTenantScope(deploymentName: string, parameters: ScopedDeployment, options?: DeploymentsValidateAtTenantScopeOptionalParams): Promise<DeploymentsValidateAtTenantScopeResponse>;
    /**
     * Exports the template used for specified deployment.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    exportTemplateAtTenantScope(deploymentName: string, options?: DeploymentsExportTemplateAtTenantScopeOptionalParams): Promise<DeploymentsExportTemplateAtTenantScopeResponse>;
    /**
     * A template deployment that is currently running cannot be deleted. Deleting a template deployment
     * removes the associated deployment operations. This is an asynchronous operation that returns a
     * status of 202 until the template deployment is successfully deleted. The Location response header
     * contains the URI that is used to obtain the status of the process. While the process is running, a
     * call to the URI in the Location header returns a status of 202. When the process finishes, the URI
     * in the Location header returns a status of 204 on success. If the asynchronous request failed, the
     * URI in the Location header returns an error-level status code.
     * @param groupId The management group ID.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    beginDeleteAtManagementGroupScope(groupId: string, deploymentName: string, options?: DeploymentsDeleteAtManagementGroupScopeOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * A template deployment that is currently running cannot be deleted. Deleting a template deployment
     * removes the associated deployment operations. This is an asynchronous operation that returns a
     * status of 202 until the template deployment is successfully deleted. The Location response header
     * contains the URI that is used to obtain the status of the process. While the process is running, a
     * call to the URI in the Location header returns a status of 202. When the process finishes, the URI
     * in the Location header returns a status of 204 on success. If the asynchronous request failed, the
     * URI in the Location header returns an error-level status code.
     * @param groupId The management group ID.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    beginDeleteAtManagementGroupScopeAndWait(groupId: string, deploymentName: string, options?: DeploymentsDeleteAtManagementGroupScopeOptionalParams): Promise<void>;
    /**
     * Checks whether the deployment exists.
     * @param groupId The management group ID.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    checkExistenceAtManagementGroupScope(groupId: string, deploymentName: string, options?: DeploymentsCheckExistenceAtManagementGroupScopeOptionalParams): Promise<void>;
    /**
     * You can provide the template and parameters directly in the request or link to JSON files.
     * @param groupId The management group ID.
     * @param deploymentName The name of the deployment.
     * @param parameters Additional parameters supplied to the operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAtManagementGroupScope(groupId: string, deploymentName: string, parameters: ScopedDeployment, options?: DeploymentsCreateOrUpdateAtManagementGroupScopeOptionalParams): Promise<PollerLike<PollOperationState<DeploymentsCreateOrUpdateAtManagementGroupScopeResponse>, DeploymentsCreateOrUpdateAtManagementGroupScopeResponse>>;
    /**
     * You can provide the template and parameters directly in the request or link to JSON files.
     * @param groupId The management group ID.
     * @param deploymentName The name of the deployment.
     * @param parameters Additional parameters supplied to the operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAtManagementGroupScopeAndWait(groupId: string, deploymentName: string, parameters: ScopedDeployment, options?: DeploymentsCreateOrUpdateAtManagementGroupScopeOptionalParams): Promise<DeploymentsCreateOrUpdateAtManagementGroupScopeResponse>;
    /**
     * Gets a deployment.
     * @param groupId The management group ID.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    getAtManagementGroupScope(groupId: string, deploymentName: string, options?: DeploymentsGetAtManagementGroupScopeOptionalParams): Promise<DeploymentsGetAtManagementGroupScopeResponse>;
    /**
     * You can cancel a deployment only if the provisioningState is Accepted or Running. After the
     * deployment is canceled, the provisioningState is set to Canceled. Canceling a template deployment
     * stops the currently running template deployment and leaves the resources partially deployed.
     * @param groupId The management group ID.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    cancelAtManagementGroupScope(groupId: string, deploymentName: string, options?: DeploymentsCancelAtManagementGroupScopeOptionalParams): Promise<void>;
    /**
     * Validates whether the specified template is syntactically correct and will be accepted by Azure
     * Resource Manager..
     * @param groupId The management group ID.
     * @param deploymentName The name of the deployment.
     * @param parameters Parameters to validate.
     * @param options The options parameters.
     */
    validateAtManagementGroupScope(groupId: string, deploymentName: string, parameters: ScopedDeployment, options?: DeploymentsValidateAtManagementGroupScopeOptionalParams): Promise<DeploymentsValidateAtManagementGroupScopeResponse>;
    /**
     * Exports the template used for specified deployment.
     * @param groupId The management group ID.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    exportTemplateAtManagementGroupScope(groupId: string, deploymentName: string, options?: DeploymentsExportTemplateAtManagementGroupScopeOptionalParams): Promise<DeploymentsExportTemplateAtManagementGroupScopeResponse>;
    /**
     * A template deployment that is currently running cannot be deleted. Deleting a template deployment
     * removes the associated deployment operations. This is an asynchronous operation that returns a
     * status of 202 until the template deployment is successfully deleted. The Location response header
     * contains the URI that is used to obtain the status of the process. While the process is running, a
     * call to the URI in the Location header returns a status of 202. When the process finishes, the URI
     * in the Location header returns a status of 204 on success. If the asynchronous request failed, the
     * URI in the Location header returns an error-level status code.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    beginDeleteAtSubscriptionScope(deploymentName: string, options?: DeploymentsDeleteAtSubscriptionScopeOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * A template deployment that is currently running cannot be deleted. Deleting a template deployment
     * removes the associated deployment operations. This is an asynchronous operation that returns a
     * status of 202 until the template deployment is successfully deleted. The Location response header
     * contains the URI that is used to obtain the status of the process. While the process is running, a
     * call to the URI in the Location header returns a status of 202. When the process finishes, the URI
     * in the Location header returns a status of 204 on success. If the asynchronous request failed, the
     * URI in the Location header returns an error-level status code.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    beginDeleteAtSubscriptionScopeAndWait(deploymentName: string, options?: DeploymentsDeleteAtSubscriptionScopeOptionalParams): Promise<void>;
    /**
     * Checks whether the deployment exists.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    checkExistenceAtSubscriptionScope(deploymentName: string, options?: DeploymentsCheckExistenceAtSubscriptionScopeOptionalParams): Promise<void>;
    /**
     * You can provide the template and parameters directly in the request or link to JSON files.
     * @param deploymentName The name of the deployment.
     * @param parameters Additional parameters supplied to the operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAtSubscriptionScope(deploymentName: string, parameters: Deployment, options?: DeploymentsCreateOrUpdateAtSubscriptionScopeOptionalParams): Promise<PollerLike<PollOperationState<DeploymentsCreateOrUpdateAtSubscriptionScopeResponse>, DeploymentsCreateOrUpdateAtSubscriptionScopeResponse>>;
    /**
     * You can provide the template and parameters directly in the request or link to JSON files.
     * @param deploymentName The name of the deployment.
     * @param parameters Additional parameters supplied to the operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAtSubscriptionScopeAndWait(deploymentName: string, parameters: Deployment, options?: DeploymentsCreateOrUpdateAtSubscriptionScopeOptionalParams): Promise<DeploymentsCreateOrUpdateAtSubscriptionScopeResponse>;
    /**
     * Gets a deployment.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    getAtSubscriptionScope(deploymentName: string, options?: DeploymentsGetAtSubscriptionScopeOptionalParams): Promise<DeploymentsGetAtSubscriptionScopeResponse>;
    /**
     * You can cancel a deployment only if the provisioningState is Accepted or Running. After the
     * deployment is canceled, the provisioningState is set to Canceled. Canceling a template deployment
     * stops the currently running template deployment and leaves the resources partially deployed.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    cancelAtSubscriptionScope(deploymentName: string, options?: DeploymentsCancelAtSubscriptionScopeOptionalParams): Promise<void>;
    /**
     * Validates whether the specified template is syntactically correct and will be accepted by Azure
     * Resource Manager..
     * @param deploymentName The name of the deployment.
     * @param parameters Parameters to validate.
     * @param options The options parameters.
     */
    validateAtSubscriptionScope(deploymentName: string, parameters: Deployment, options?: DeploymentsValidateAtSubscriptionScopeOptionalParams): Promise<DeploymentsValidateAtSubscriptionScopeResponse>;
    /**
     * Returns changes that will be made by the deployment if executed at the scope of the subscription.
     * @param deploymentName The name of the deployment.
     * @param parameters Parameters to What If.
     * @param options The options parameters.
     */
    beginWhatIfAtSubscriptionScope(deploymentName: string, parameters: DeploymentWhatIf, options?: DeploymentsWhatIfAtSubscriptionScopeOptionalParams): Promise<PollerLike<PollOperationState<DeploymentsWhatIfAtSubscriptionScopeResponse>, DeploymentsWhatIfAtSubscriptionScopeResponse>>;
    /**
     * Returns changes that will be made by the deployment if executed at the scope of the subscription.
     * @param deploymentName The name of the deployment.
     * @param parameters Parameters to What If.
     * @param options The options parameters.
     */
    beginWhatIfAtSubscriptionScopeAndWait(deploymentName: string, parameters: DeploymentWhatIf, options?: DeploymentsWhatIfAtSubscriptionScopeOptionalParams): Promise<DeploymentsWhatIfAtSubscriptionScopeResponse>;
    /**
     * Exports the template used for specified deployment.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    exportTemplateAtSubscriptionScope(deploymentName: string, options?: DeploymentsExportTemplateAtSubscriptionScopeOptionalParams): Promise<DeploymentsExportTemplateAtSubscriptionScopeResponse>;
    /**
     * A template deployment that is currently running cannot be deleted. Deleting a template deployment
     * removes the associated deployment operations. Deleting a template deployment does not affect the
     * state of the resource group. This is an asynchronous operation that returns a status of 202 until
     * the template deployment is successfully deleted. The Location response header contains the URI that
     * is used to obtain the status of the process. While the process is running, a call to the URI in the
     * Location header returns a status of 202. When the process finishes, the URI in the Location header
     * returns a status of 204 on success. If the asynchronous request failed, the URI in the Location
     * header returns an error-level status code.
     * @param resourceGroupName The name of the resource group with the deployment to delete. The name is
     *                          case insensitive.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, deploymentName: string, options?: DeploymentsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * A template deployment that is currently running cannot be deleted. Deleting a template deployment
     * removes the associated deployment operations. Deleting a template deployment does not affect the
     * state of the resource group. This is an asynchronous operation that returns a status of 202 until
     * the template deployment is successfully deleted. The Location response header contains the URI that
     * is used to obtain the status of the process. While the process is running, a call to the URI in the
     * Location header returns a status of 202. When the process finishes, the URI in the Location header
     * returns a status of 204 on success. If the asynchronous request failed, the URI in the Location
     * header returns an error-level status code.
     * @param resourceGroupName The name of the resource group with the deployment to delete. The name is
     *                          case insensitive.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, deploymentName: string, options?: DeploymentsDeleteOptionalParams): Promise<void>;
    /**
     * Checks whether the deployment exists.
     * @param resourceGroupName The name of the resource group with the deployment to check. The name is
     *                          case insensitive.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    checkExistence(resourceGroupName: string, deploymentName: string, options?: DeploymentsCheckExistenceOptionalParams): Promise<void>;
    /**
     * You can provide the template and parameters directly in the request or link to JSON files.
     * @param resourceGroupName The name of the resource group to deploy the resources to. The name is case
     *                          insensitive. The resource group must already exist.
     * @param deploymentName The name of the deployment.
     * @param parameters Additional parameters supplied to the operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, deploymentName: string, parameters: Deployment, options?: DeploymentsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<DeploymentsCreateOrUpdateResponse>, DeploymentsCreateOrUpdateResponse>>;
    /**
     * You can provide the template and parameters directly in the request or link to JSON files.
     * @param resourceGroupName The name of the resource group to deploy the resources to. The name is case
     *                          insensitive. The resource group must already exist.
     * @param deploymentName The name of the deployment.
     * @param parameters Additional parameters supplied to the operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, deploymentName: string, parameters: Deployment, options?: DeploymentsCreateOrUpdateOptionalParams): Promise<DeploymentsCreateOrUpdateResponse>;
    /**
     * Gets a deployment.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, deploymentName: string, options?: DeploymentsGetOptionalParams): Promise<DeploymentsGetResponse>;
    /**
     * You can cancel a deployment only if the provisioningState is Accepted or Running. After the
     * deployment is canceled, the provisioningState is set to Canceled. Canceling a template deployment
     * stops the currently running template deployment and leaves the resource group partially deployed.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    cancel(resourceGroupName: string, deploymentName: string, options?: DeploymentsCancelOptionalParams): Promise<void>;
    /**
     * Validates whether the specified template is syntactically correct and will be accepted by Azure
     * Resource Manager..
     * @param resourceGroupName The name of the resource group the template will be deployed to. The name
     *                          is case insensitive.
     * @param deploymentName The name of the deployment.
     * @param parameters Parameters to validate.
     * @param options The options parameters.
     */
    validate(resourceGroupName: string, deploymentName: string, parameters: Deployment, options?: DeploymentsValidateOptionalParams): Promise<DeploymentsValidateResponse>;
    /**
     * Returns changes that will be made by the deployment if executed at the scope of the resource group.
     * @param resourceGroupName The name of the resource group the template will be deployed to. The name
     *                          is case insensitive.
     * @param deploymentName The name of the deployment.
     * @param parameters Parameters to validate.
     * @param options The options parameters.
     */
    beginWhatIf(resourceGroupName: string, deploymentName: string, parameters: DeploymentWhatIf, options?: DeploymentsWhatIfOptionalParams): Promise<PollerLike<PollOperationState<DeploymentsWhatIfResponse>, DeploymentsWhatIfResponse>>;
    /**
     * Returns changes that will be made by the deployment if executed at the scope of the resource group.
     * @param resourceGroupName The name of the resource group the template will be deployed to. The name
     *                          is case insensitive.
     * @param deploymentName The name of the deployment.
     * @param parameters Parameters to validate.
     * @param options The options parameters.
     */
    beginWhatIfAndWait(resourceGroupName: string, deploymentName: string, parameters: DeploymentWhatIf, options?: DeploymentsWhatIfOptionalParams): Promise<DeploymentsWhatIfResponse>;
    /**
     * Exports the template used for specified deployment.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param deploymentName The name of the deployment.
     * @param options The options parameters.
     */
    exportTemplate(resourceGroupName: string, deploymentName: string, options?: DeploymentsExportTemplateOptionalParams): Promise<DeploymentsExportTemplateResponse>;
    /**
     * Calculate the hash of the given template.
     * @param template The template provided to calculate hash.
     * @param options The options parameters.
     */
    calculateTemplateHash(template: Record<string, unknown>, options?: DeploymentsCalculateTemplateHashOptionalParams): Promise<DeploymentsCalculateTemplateHashResponse>;
}

/** Optional parameters. */
export declare interface DeploymentsCalculateTemplateHashOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the calculateTemplateHash operation. */
export declare type DeploymentsCalculateTemplateHashResponse = TemplateHashResult;

/** Optional parameters. */
export declare interface DeploymentsCancelAtManagementGroupScopeOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DeploymentsCancelAtScopeOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DeploymentsCancelAtSubscriptionScopeOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DeploymentsCancelAtTenantScopeOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DeploymentsCancelOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DeploymentsCheckExistenceAtManagementGroupScopeOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DeploymentsCheckExistenceAtScopeOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DeploymentsCheckExistenceAtSubscriptionScopeOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DeploymentsCheckExistenceAtTenantScopeOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DeploymentsCheckExistenceOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DeploymentsCreateOrUpdateAtManagementGroupScopeOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdateAtManagementGroupScope operation. */
export declare type DeploymentsCreateOrUpdateAtManagementGroupScopeResponse = DeploymentExtended;

/** Optional parameters. */
export declare interface DeploymentsCreateOrUpdateAtScopeOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdateAtScope operation. */
export declare type DeploymentsCreateOrUpdateAtScopeResponse = DeploymentExtended;

/** Optional parameters. */
export declare interface DeploymentsCreateOrUpdateAtSubscriptionScopeOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdateAtSubscriptionScope operation. */
export declare type DeploymentsCreateOrUpdateAtSubscriptionScopeResponse = DeploymentExtended;

/** Optional parameters. */
export declare interface DeploymentsCreateOrUpdateAtTenantScopeOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdateAtTenantScope operation. */
export declare type DeploymentsCreateOrUpdateAtTenantScopeResponse = DeploymentExtended;

/** Optional parameters. */
export declare interface DeploymentsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type DeploymentsCreateOrUpdateResponse = DeploymentExtended;

/** Optional parameters. */
export declare interface DeploymentsDeleteAtManagementGroupScopeOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface DeploymentsDeleteAtScopeOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface DeploymentsDeleteAtSubscriptionScopeOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface DeploymentsDeleteAtTenantScopeOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface DeploymentsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface DeploymentsExportTemplateAtManagementGroupScopeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the exportTemplateAtManagementGroupScope operation. */
export declare type DeploymentsExportTemplateAtManagementGroupScopeResponse = DeploymentExportResult;

/** Optional parameters. */
export declare interface DeploymentsExportTemplateAtScopeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the exportTemplateAtScope operation. */
export declare type DeploymentsExportTemplateAtScopeResponse = DeploymentExportResult;

/** Optional parameters. */
export declare interface DeploymentsExportTemplateAtSubscriptionScopeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the exportTemplateAtSubscriptionScope operation. */
export declare type DeploymentsExportTemplateAtSubscriptionScopeResponse = DeploymentExportResult;

/** Optional parameters. */
export declare interface DeploymentsExportTemplateAtTenantScopeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the exportTemplateAtTenantScope operation. */
export declare type DeploymentsExportTemplateAtTenantScopeResponse = DeploymentExportResult;

/** Optional parameters. */
export declare interface DeploymentsExportTemplateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the exportTemplate operation. */
export declare type DeploymentsExportTemplateResponse = DeploymentExportResult;

/** Optional parameters. */
export declare interface DeploymentsGetAtManagementGroupScopeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAtManagementGroupScope operation. */
export declare type DeploymentsGetAtManagementGroupScopeResponse = DeploymentExtended;

/** Optional parameters. */
export declare interface DeploymentsGetAtScopeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAtScope operation. */
export declare type DeploymentsGetAtScopeResponse = DeploymentExtended;

/** Optional parameters. */
export declare interface DeploymentsGetAtSubscriptionScopeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAtSubscriptionScope operation. */
export declare type DeploymentsGetAtSubscriptionScopeResponse = DeploymentExtended;

/** Optional parameters. */
export declare interface DeploymentsGetAtTenantScopeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAtTenantScope operation. */
export declare type DeploymentsGetAtTenantScopeResponse = DeploymentExtended;

/** Optional parameters. */
export declare interface DeploymentsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type DeploymentsGetResponse = DeploymentExtended;

/** Optional parameters. */
export declare interface DeploymentsListAtManagementGroupScopeNextOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'. */
    filter?: string;
    /** The number of results to get. If null is passed, returns all deployments. */
    top?: number;
}

/** Contains response data for the listAtManagementGroupScopeNext operation. */
export declare type DeploymentsListAtManagementGroupScopeNextResponse = DeploymentListResult;

/** Optional parameters. */
export declare interface DeploymentsListAtManagementGroupScopeOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'. */
    filter?: string;
    /** The number of results to get. If null is passed, returns all deployments. */
    top?: number;
}

/** Contains response data for the listAtManagementGroupScope operation. */
export declare type DeploymentsListAtManagementGroupScopeResponse = DeploymentListResult;

/** Optional parameters. */
export declare interface DeploymentsListAtScopeNextOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'. */
    filter?: string;
    /** The number of results to get. If null is passed, returns all deployments. */
    top?: number;
}

/** Contains response data for the listAtScopeNext operation. */
export declare type DeploymentsListAtScopeNextResponse = DeploymentListResult;

/** Optional parameters. */
export declare interface DeploymentsListAtScopeOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'. */
    filter?: string;
    /** The number of results to get. If null is passed, returns all deployments. */
    top?: number;
}

/** Contains response data for the listAtScope operation. */
export declare type DeploymentsListAtScopeResponse = DeploymentListResult;

/** Optional parameters. */
export declare interface DeploymentsListAtSubscriptionScopeNextOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'. */
    filter?: string;
    /** The number of results to get. If null is passed, returns all deployments. */
    top?: number;
}

/** Contains response data for the listAtSubscriptionScopeNext operation. */
export declare type DeploymentsListAtSubscriptionScopeNextResponse = DeploymentListResult;

/** Optional parameters. */
export declare interface DeploymentsListAtSubscriptionScopeOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'. */
    filter?: string;
    /** The number of results to get. If null is passed, returns all deployments. */
    top?: number;
}

/** Contains response data for the listAtSubscriptionScope operation. */
export declare type DeploymentsListAtSubscriptionScopeResponse = DeploymentListResult;

/** Optional parameters. */
export declare interface DeploymentsListAtTenantScopeNextOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'. */
    filter?: string;
    /** The number of results to get. If null is passed, returns all deployments. */
    top?: number;
}

/** Contains response data for the listAtTenantScopeNext operation. */
export declare type DeploymentsListAtTenantScopeNextResponse = DeploymentListResult;

/** Optional parameters. */
export declare interface DeploymentsListAtTenantScopeOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'. */
    filter?: string;
    /** The number of results to get. If null is passed, returns all deployments. */
    top?: number;
}

/** Contains response data for the listAtTenantScope operation. */
export declare type DeploymentsListAtTenantScopeResponse = DeploymentListResult;

/** Optional parameters. */
export declare interface DeploymentsListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'. */
    filter?: string;
    /** The number of results to get. If null is passed, returns all deployments. */
    top?: number;
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type DeploymentsListByResourceGroupNextResponse = DeploymentListResult;

/** Optional parameters. */
export declare interface DeploymentsListByResourceGroupOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'. */
    filter?: string;
    /** The number of results to get. If null is passed, returns all deployments. */
    top?: number;
}

/** Contains response data for the listByResourceGroup operation. */
export declare type DeploymentsListByResourceGroupResponse = DeploymentListResult;

/** Optional parameters. */
export declare interface DeploymentsValidateAtManagementGroupScopeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the validateAtManagementGroupScope operation. */
export declare type DeploymentsValidateAtManagementGroupScopeResponse = DeploymentValidateResult;

/** Optional parameters. */
export declare interface DeploymentsValidateAtScopeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the validateAtScope operation. */
export declare type DeploymentsValidateAtScopeResponse = DeploymentValidateResult;

/** Optional parameters. */
export declare interface DeploymentsValidateAtSubscriptionScopeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the validateAtSubscriptionScope operation. */
export declare type DeploymentsValidateAtSubscriptionScopeResponse = DeploymentValidateResult;

/** Optional parameters. */
export declare interface DeploymentsValidateAtTenantScopeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the validateAtTenantScope operation. */
export declare type DeploymentsValidateAtTenantScopeResponse = DeploymentValidateResult;

/** Optional parameters. */
export declare interface DeploymentsValidateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the validate operation. */
export declare type DeploymentsValidateResponse = DeploymentValidateResult;

/** Defines headers for Deployments_whatIfAtSubscriptionScope operation. */
export declare interface DeploymentsWhatIfAtSubscriptionScopeHeaders {
    /** URL to get status of this long-running operation. */
    location?: string;
    /** Number of seconds to wait before polling for status. */
    retryAfter?: string;
}

/** Optional parameters. */
export declare interface DeploymentsWhatIfAtSubscriptionScopeOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the whatIfAtSubscriptionScope operation. */
export declare type DeploymentsWhatIfAtSubscriptionScopeResponse = WhatIfOperationResult;

/** Defines headers for Deployments_whatIf operation. */
export declare interface DeploymentsWhatIfHeaders {
    /** URL to get status of this long-running operation. */
    location?: string;
    /** Number of seconds to wait before polling for status. */
    retryAfter?: string;
}

/** Optional parameters. */
export declare interface DeploymentsWhatIfOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the whatIf operation. */
export declare type DeploymentsWhatIfResponse = WhatIfOperationResult;

/** Information from validate template deployment response. */
export declare interface DeploymentValidateResult {
    /** The deployment validation error. */
    error?: ErrorResponse;
    /** The template deployment properties. */
    properties?: DeploymentPropertiesExtended;
}

/** Deployment What-if operation parameters. */
export declare interface DeploymentWhatIf {
    /** The location to store the deployment data. */
    location?: string;
    /** The deployment properties. */
    properties: DeploymentWhatIfProperties;
}

/** Deployment What-if properties. */
export declare type DeploymentWhatIfProperties = DeploymentProperties & {
    /** Optional What-If operation settings. */
    whatIfSettings?: DeploymentWhatIfSettings;
};

/** Deployment What-If operation settings. */
export declare interface DeploymentWhatIfSettings {
    /** The format of the What-If results */
    resultFormat?: WhatIfResultFormat;
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

/** The resource management error response. */
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

/** Export resource group template request parameters. */
export declare interface ExportTemplateRequest {
    /** The IDs of the resources to filter the export by. To export all resources, supply an array with single entry '*'. */
    resources?: string[];
    /** The export template options. A CSV-formatted list containing zero or more of the following: 'IncludeParameterDefaultValue', 'IncludeComments', 'SkipResourceNameParameterization', 'SkipAllParameterization' */
    options?: string;
}

/** Resource information. */
export declare type GenericResource = Resource & {
    /** The plan of the resource. */
    plan?: Plan;
    /** The resource properties. */
    properties?: Record<string, unknown>;
    /** The kind of the resource. */
    kind?: string;
    /** ID of the resource that manages this resource. */
    managedBy?: string;
    /** The SKU of the resource. */
    sku?: Sku;
    /** The identity of the resource. */
    identity?: Identity;
};

/** Resource information. */
export declare type GenericResourceExpanded = GenericResource & {
    /**
     * The created time of the resource. This is only present if requested via the $expand query parameter.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly createdTime?: Date;
    /**
     * The changed time of the resource. This is only present if requested via the $expand query parameter.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly changedTime?: Date;
    /**
     * The provisioning state of the resource. This is only present if requested via the $expand query parameter.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: string;
};

/** Resource filter. */
export declare interface GenericResourceFilter {
    /** The resource type. */
    resourceType?: string;
    /** The tag name. */
    tagname?: string;
    /** The tag value. */
    tagvalue?: string;
}

/** HTTP message. */
export declare interface HttpMessage {
    /** HTTP message content. */
    content?: Record<string, unknown>;
}

/** Identity for the resource. */
export declare interface Identity {
    /**
     * The principal ID of resource identity.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly principalId?: string;
    /**
     * The tenant ID of resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly tenantId?: string;
    /** The identity type. */
    type?: ResourceIdentityType;
    /** The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. */
    userAssignedIdentities?: {
        [propertyName: string]: ComponentsSgqdofSchemasIdentityPropertiesUserassignedidentitiesAdditionalproperties;
    };
}

/** Deployment on error behavior. */
export declare interface OnErrorDeployment {
    /** The deployment on error behavior type. Possible values are LastSuccessful and SpecificDeployment. */
    type?: OnErrorDeploymentType;
    /** The deployment to be used on error case. */
    deploymentName?: string;
}

/** Deployment on error behavior with additional details. */
export declare interface OnErrorDeploymentExtended {
    /**
     * The state of the provisioning for the on error deployment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: string;
    /** The deployment on error behavior type. Possible values are LastSuccessful and SpecificDeployment. */
    type?: OnErrorDeploymentType;
    /** The deployment to be used on error case. */
    deploymentName?: string;
}

/** Defines values for OnErrorDeploymentType. */
export declare type OnErrorDeploymentType = "LastSuccessful" | "SpecificDeployment";

/** Microsoft.Resources operation */
export declare interface Operation {
    /** Operation name: {provider}/{resource}/{operation} */
    name?: string;
    /** The object that represents the operation. */
    display?: OperationDisplay;
}

/** The object that represents the operation. */
export declare interface OperationDisplay {
    /** Service provider: Microsoft.Resources */
    provider?: string;
    /** Resource on which the operation is performed: Profile, endpoint, etc. */
    resource?: string;
    /** Operation type: Read, write, delete, etc. */
    operation?: string;
    /** Description of the operation. */
    description?: string;
}

/** Result of the request to list Microsoft.Resources operations. It contains a list of operations and a URL link to get the next set of results. */
export declare interface OperationListResult {
    /** List of Microsoft.Resources operations. */
    value?: Operation[];
    /** URL to get the next set of operation list results if there are any. */
    nextLink?: string;
}

/** Interface representing a Operations. */
export declare interface Operations {
    /**
     * Lists all of the available Microsoft.Resources REST API operations.
     * @param options The options parameters.
     */
    list(options?: OperationsListOptionalParams): PagedAsyncIterableIterator<Operation>;
}

/** Optional parameters. */
export declare interface OperationsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type OperationsListNextResponse = OperationListResult;

/** Optional parameters. */
export declare interface OperationsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type OperationsListResponse = OperationListResult;

/** Entity representing the reference to the deployment parameters. */
export declare interface ParametersLink {
    /** The URI of the parameters file. */
    uri: string;
    /** If included, must match the ContentVersion in the template. */
    contentVersion?: string;
}

/** Plan for the resource. */
export declare interface Plan {
    /** The plan ID. */
    name?: string;
    /** The publisher ID. */
    publisher?: string;
    /** The offer ID. */
    product?: string;
    /** The promotion code. */
    promotionCode?: string;
    /** The plan's version. */
    version?: string;
}

/** Defines values for PropertyChangeType. */
export declare type PropertyChangeType = "Create" | "Delete" | "Modify" | "Array";

/** Resource provider information. */
export declare interface Provider {
    /**
     * The provider ID.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /** The namespace of the resource provider. */
    namespace?: string;
    /**
     * The registration state of the resource provider.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly registrationState?: string;
    /**
     * The registration policy of the resource provider.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly registrationPolicy?: string;
    /**
     * The collection of provider resource types.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceTypes?: ProviderResourceType[];
}

/** List of resource providers. */
export declare interface ProviderListResult {
    /** An array of resource providers. */
    value?: Provider[];
    /**
     * The URL to use for getting the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Resource type managed by the resource provider. */
export declare interface ProviderResourceType {
    /** The resource type. */
    resourceType?: string;
    /** The collection of locations where this resource type can be created. */
    locations?: string[];
    /** The aliases that are supported by this resource type. */
    aliases?: AliasType[];
    /** The API version. */
    apiVersions?: string[];
    /** The additional capabilities offered by this resource type. */
    capabilities?: string;
    /** The properties. */
    properties?: {
        [propertyName: string]: string;
    };
}

/** Interface representing a Providers. */
export declare interface Providers {
    /**
     * Gets all resource providers for a subscription.
     * @param options The options parameters.
     */
    list(options?: ProvidersListOptionalParams): PagedAsyncIterableIterator<Provider>;
    /**
     * Gets all resource providers for the tenant.
     * @param options The options parameters.
     */
    listAtTenantScope(options?: ProvidersListAtTenantScopeOptionalParams): PagedAsyncIterableIterator<Provider>;
    /**
     * Unregisters a subscription from a resource provider.
     * @param resourceProviderNamespace The namespace of the resource provider to unregister.
     * @param options The options parameters.
     */
    unregister(resourceProviderNamespace: string, options?: ProvidersUnregisterOptionalParams): Promise<ProvidersUnregisterResponse>;
    /**
     * Registers a subscription with a resource provider.
     * @param resourceProviderNamespace The namespace of the resource provider to register.
     * @param options The options parameters.
     */
    register(resourceProviderNamespace: string, options?: ProvidersRegisterOptionalParams): Promise<ProvidersRegisterResponse>;
    /**
     * Gets the specified resource provider.
     * @param resourceProviderNamespace The namespace of the resource provider.
     * @param options The options parameters.
     */
    get(resourceProviderNamespace: string, options?: ProvidersGetOptionalParams): Promise<ProvidersGetResponse>;
    /**
     * Gets the specified resource provider at the tenant level.
     * @param resourceProviderNamespace The namespace of the resource provider.
     * @param options The options parameters.
     */
    getAtTenantScope(resourceProviderNamespace: string, options?: ProvidersGetAtTenantScopeOptionalParams): Promise<ProvidersGetAtTenantScopeResponse>;
}

/** Optional parameters. */
export declare interface ProvidersGetAtTenantScopeOptionalParams extends coreClient.OperationOptions {
    /** The $expand query parameter. For example, to include property aliases in response, use $expand=resourceTypes/aliases. */
    expand?: string;
}

/** Contains response data for the getAtTenantScope operation. */
export declare type ProvidersGetAtTenantScopeResponse = Provider;

/** Optional parameters. */
export declare interface ProvidersGetOptionalParams extends coreClient.OperationOptions {
    /** The $expand query parameter. For example, to include property aliases in response, use $expand=resourceTypes/aliases. */
    expand?: string;
}

/** Contains response data for the get operation. */
export declare type ProvidersGetResponse = Provider;

/** Optional parameters. */
export declare interface ProvidersListAtTenantScopeNextOptionalParams extends coreClient.OperationOptions {
    /** The number of results to return. If null is passed returns all providers. */
    top?: number;
    /** The properties to include in the results. For example, use &$expand=metadata in the query string to retrieve resource provider metadata. To include property aliases in response, use $expand=resourceTypes/aliases. */
    expand?: string;
}

/** Contains response data for the listAtTenantScopeNext operation. */
export declare type ProvidersListAtTenantScopeNextResponse = ProviderListResult;

/** Optional parameters. */
export declare interface ProvidersListAtTenantScopeOptionalParams extends coreClient.OperationOptions {
    /** The number of results to return. If null is passed returns all providers. */
    top?: number;
    /** The properties to include in the results. For example, use &$expand=metadata in the query string to retrieve resource provider metadata. To include property aliases in response, use $expand=resourceTypes/aliases. */
    expand?: string;
}

/** Contains response data for the listAtTenantScope operation. */
export declare type ProvidersListAtTenantScopeResponse = ProviderListResult;

/** Optional parameters. */
export declare interface ProvidersListNextOptionalParams extends coreClient.OperationOptions {
    /** The number of results to return. If null is passed returns all deployments. */
    top?: number;
    /** The properties to include in the results. For example, use &$expand=metadata in the query string to retrieve resource provider metadata. To include property aliases in response, use $expand=resourceTypes/aliases. */
    expand?: string;
}

/** Contains response data for the listNext operation. */
export declare type ProvidersListNextResponse = ProviderListResult;

/** Optional parameters. */
export declare interface ProvidersListOptionalParams extends coreClient.OperationOptions {
    /** The number of results to return. If null is passed returns all deployments. */
    top?: number;
    /** The properties to include in the results. For example, use &$expand=metadata in the query string to retrieve resource provider metadata. To include property aliases in response, use $expand=resourceTypes/aliases. */
    expand?: string;
}

/** Contains response data for the list operation. */
export declare type ProvidersListResponse = ProviderListResult;

/** Optional parameters. */
export declare interface ProvidersRegisterOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the register operation. */
export declare type ProvidersRegisterResponse = Provider;

/** Optional parameters. */
export declare interface ProvidersUnregisterOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the unregister operation. */
export declare type ProvidersUnregisterResponse = Provider;

/** Specified resource. */
export declare interface Resource {
    /**
     * Resource ID
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * Resource name
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * Resource type
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** Resource location */
    location?: string;
    /** Resource tags */
    tags?: {
        [propertyName: string]: string;
    };
}

/** Resource group information. */
export declare interface ResourceGroup {
    /**
     * The ID of the resource group.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * The name of the resource group.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The type of the resource group.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** The resource group properties. */
    properties?: ResourceGroupProperties;
    /** The location of the resource group. It cannot be changed after the resource group has been created. It must be one of the supported Azure locations. */
    location: string;
    /** The ID of the resource that manages this resource group. */
    managedBy?: string;
    /** The tags attached to the resource group. */
    tags?: {
        [propertyName: string]: string;
    };
}

/** Resource group export result. */
export declare interface ResourceGroupExportResult {
    /** The template content. */
    template?: Record<string, unknown>;
    /** The template export error. */
    error?: ErrorResponse;
}

/** Resource group filter. */
export declare interface ResourceGroupFilter {
    /** The tag name. */
    tagName?: string;
    /** The tag value. */
    tagValue?: string;
}

/** List of resource groups. */
export declare interface ResourceGroupListResult {
    /** An array of resource groups. */
    value?: ResourceGroup[];
    /**
     * The URL to use for getting the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Resource group information. */
export declare interface ResourceGroupPatchable {
    /** The name of the resource group. */
    name?: string;
    /** The resource group properties. */
    properties?: ResourceGroupProperties;
    /** The ID of the resource that manages this resource group. */
    managedBy?: string;
    /** The tags attached to the resource group. */
    tags?: {
        [propertyName: string]: string;
    };
}

/** The resource group properties. */
export declare interface ResourceGroupProperties {
    /**
     * The provisioning state.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: string;
}

/** Interface representing a ResourceGroups. */
export declare interface ResourceGroups {
    /**
     * Gets all the resource groups for a subscription.
     * @param options The options parameters.
     */
    list(options?: ResourceGroupsListOptionalParams): PagedAsyncIterableIterator<ResourceGroup>;
    /**
     * Checks whether a resource group exists.
     * @param resourceGroupName The name of the resource group to check. The name is case insensitive.
     * @param options The options parameters.
     */
    checkExistence(resourceGroupName: string, options?: ResourceGroupsCheckExistenceOptionalParams): Promise<void>;
    /**
     * Creates or updates a resource group.
     * @param resourceGroupName The name of the resource group to create or update. Can include
     *                          alphanumeric, underscore, parentheses, hyphen, period (except at end), and Unicode characters that
     *                          match the allowed characters.
     * @param parameters Parameters supplied to the create or update a resource group.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, parameters: ResourceGroup, options?: ResourceGroupsCreateOrUpdateOptionalParams): Promise<ResourceGroupsCreateOrUpdateResponse>;
    /**
     * When you delete a resource group, all of its resources are also deleted. Deleting a resource group
     * deletes all of its template deployments and currently stored operations.
     * @param resourceGroupName The name of the resource group to delete. The name is case insensitive.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, options?: ResourceGroupsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * When you delete a resource group, all of its resources are also deleted. Deleting a resource group
     * deletes all of its template deployments and currently stored operations.
     * @param resourceGroupName The name of the resource group to delete. The name is case insensitive.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, options?: ResourceGroupsDeleteOptionalParams): Promise<void>;
    /**
     * Gets a resource group.
     * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, options?: ResourceGroupsGetOptionalParams): Promise<ResourceGroupsGetResponse>;
    /**
     * Resource groups can be updated through a simple PATCH operation to a group address. The format of
     * the request is the same as that for creating a resource group. If a field is unspecified, the
     * current value is retained.
     * @param resourceGroupName The name of the resource group to update. The name is case insensitive.
     * @param parameters Parameters supplied to update a resource group.
     * @param options The options parameters.
     */
    update(resourceGroupName: string, parameters: ResourceGroupPatchable, options?: ResourceGroupsUpdateOptionalParams): Promise<ResourceGroupsUpdateResponse>;
    /**
     * Captures the specified resource group as a template.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param parameters Parameters for exporting the template.
     * @param options The options parameters.
     */
    beginExportTemplate(resourceGroupName: string, parameters: ExportTemplateRequest, options?: ResourceGroupsExportTemplateOptionalParams): Promise<PollerLike<PollOperationState<ResourceGroupsExportTemplateResponse>, ResourceGroupsExportTemplateResponse>>;
    /**
     * Captures the specified resource group as a template.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param parameters Parameters for exporting the template.
     * @param options The options parameters.
     */
    beginExportTemplateAndWait(resourceGroupName: string, parameters: ExportTemplateRequest, options?: ResourceGroupsExportTemplateOptionalParams): Promise<ResourceGroupsExportTemplateResponse>;
}

/** Optional parameters. */
export declare interface ResourceGroupsCheckExistenceOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface ResourceGroupsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type ResourceGroupsCreateOrUpdateResponse = ResourceGroup;

/** Optional parameters. */
export declare interface ResourceGroupsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ResourceGroupsExportTemplateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the exportTemplate operation. */
export declare type ResourceGroupsExportTemplateResponse = ResourceGroupExportResult;

/** Optional parameters. */
export declare interface ResourceGroupsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ResourceGroupsGetResponse = ResourceGroup;

/** Optional parameters. */
export declare interface ResourceGroupsListNextOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation.<br><br>You can filter by tag names and values. For example, to filter for a tag name and value, use $filter=tagName eq 'tag1' and tagValue eq 'Value1' */
    filter?: string;
    /** The number of results to return. If null is passed, returns all resource groups. */
    top?: number;
}

/** Contains response data for the listNext operation. */
export declare type ResourceGroupsListNextResponse = ResourceGroupListResult;

/** Optional parameters. */
export declare interface ResourceGroupsListOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation.<br><br>You can filter by tag names and values. For example, to filter for a tag name and value, use $filter=tagName eq 'tag1' and tagValue eq 'Value1' */
    filter?: string;
    /** The number of results to return. If null is passed, returns all resource groups. */
    top?: number;
}

/** Contains response data for the list operation. */
export declare type ResourceGroupsListResponse = ResourceGroupListResult;

/** Optional parameters. */
export declare interface ResourceGroupsUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the update operation. */
export declare type ResourceGroupsUpdateResponse = ResourceGroup;

/** Defines values for ResourceIdentityType. */
export declare type ResourceIdentityType = "SystemAssigned" | "UserAssigned" | "SystemAssigned, UserAssigned" | "None";

/** List of resource groups. */
export declare interface ResourceListResult {
    /** An array of resources. */
    value?: GenericResourceExpanded[];
    /**
     * The URL to use for getting the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

export declare class ResourceManagementClient extends ResourceManagementClientContext {
    /**
     * Initializes a new instance of the ResourceManagementClient class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId The ID of the target subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: ResourceManagementClientOptionalParams);
    operations: Operations;
    deployments: Deployments;
    providers: Providers;
    resources: Resources;
    resourceGroups: ResourceGroups;
    tags: Tags;
    deploymentOperations: DeploymentOperations;
}

export declare class ResourceManagementClientContext extends coreClient.ServiceClient {
    $host: string;
    apiVersion: string;
    subscriptionId: string;
    /**
     * Initializes a new instance of the ResourceManagementClientContext class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId The ID of the target subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: ResourceManagementClientOptionalParams);
}

/** Optional parameters. */
export declare interface ResourceManagementClientOptionalParams extends coreClient.ServiceClientOptions {
    /** server parameter */
    $host?: string;
    /** Api Version */
    apiVersion?: string;
    /** Overrides client endpoint. */
    endpoint?: string;
}

/** Resource provider operation's display properties. */
export declare interface ResourceProviderOperationDisplayProperties {
    /** Operation description. */
    publisher?: string;
    /** Operation provider. */
    provider?: string;
    /** Operation resource. */
    resource?: string;
    /** Resource provider operation. */
    operation?: string;
    /** Operation description. */
    description?: string;
}

/** Interface representing a Resources. */
export declare interface Resources {
    /**
     * Get all the resources for a resource group.
     * @param resourceGroupName The resource group with the resources to get.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: ResourcesListByResourceGroupOptionalParams): PagedAsyncIterableIterator<GenericResourceExpanded>;
    /**
     * Get all the resources in a subscription.
     * @param options The options parameters.
     */
    list(options?: ResourcesListOptionalParams): PagedAsyncIterableIterator<GenericResourceExpanded>;
    /**
     * The resources to move must be in the same source resource group. The target resource group may be in
     * a different subscription. When moving resources, both the source group and the target group are
     * locked for the duration of the operation. Write and delete operations are blocked on the groups
     * until the move completes.
     * @param sourceResourceGroupName The name of the resource group containing the resources to move.
     * @param parameters Parameters for moving resources.
     * @param options The options parameters.
     */
    beginMoveResources(sourceResourceGroupName: string, parameters: ResourcesMoveInfo, options?: ResourcesMoveResourcesOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * The resources to move must be in the same source resource group. The target resource group may be in
     * a different subscription. When moving resources, both the source group and the target group are
     * locked for the duration of the operation. Write and delete operations are blocked on the groups
     * until the move completes.
     * @param sourceResourceGroupName The name of the resource group containing the resources to move.
     * @param parameters Parameters for moving resources.
     * @param options The options parameters.
     */
    beginMoveResourcesAndWait(sourceResourceGroupName: string, parameters: ResourcesMoveInfo, options?: ResourcesMoveResourcesOptionalParams): Promise<void>;
    /**
     * This operation checks whether the specified resources can be moved to the target. The resources to
     * move must be in the same source resource group. The target resource group may be in a different
     * subscription. If validation succeeds, it returns HTTP response code 204 (no content). If validation
     * fails, it returns HTTP response code 409 (Conflict) with an error message. Retrieve the URL in the
     * Location header value to check the result of the long-running operation.
     * @param sourceResourceGroupName The name of the resource group containing the resources to validate
     *                                for move.
     * @param parameters Parameters for moving resources.
     * @param options The options parameters.
     */
    beginValidateMoveResources(sourceResourceGroupName: string, parameters: ResourcesMoveInfo, options?: ResourcesValidateMoveResourcesOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * This operation checks whether the specified resources can be moved to the target. The resources to
     * move must be in the same source resource group. The target resource group may be in a different
     * subscription. If validation succeeds, it returns HTTP response code 204 (no content). If validation
     * fails, it returns HTTP response code 409 (Conflict) with an error message. Retrieve the URL in the
     * Location header value to check the result of the long-running operation.
     * @param sourceResourceGroupName The name of the resource group containing the resources to validate
     *                                for move.
     * @param parameters Parameters for moving resources.
     * @param options The options parameters.
     */
    beginValidateMoveResourcesAndWait(sourceResourceGroupName: string, parameters: ResourcesMoveInfo, options?: ResourcesValidateMoveResourcesOptionalParams): Promise<void>;
    /**
     * Checks whether a resource exists.
     * @param resourceGroupName The name of the resource group containing the resource to check. The name
     *                          is case insensitive.
     * @param resourceProviderNamespace The resource provider of the resource to check.
     * @param parentResourcePath The parent resource identity.
     * @param resourceType The resource type.
     * @param resourceName The name of the resource to check whether it exists.
     * @param apiVersion The API version to use for the operation.
     * @param options The options parameters.
     */
    checkExistence(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, options?: ResourcesCheckExistenceOptionalParams): Promise<void>;
    /**
     * Deletes a resource.
     * @param resourceGroupName The name of the resource group that contains the resource to delete. The
     *                          name is case insensitive.
     * @param resourceProviderNamespace The namespace of the resource provider.
     * @param parentResourcePath The parent resource identity.
     * @param resourceType The resource type.
     * @param resourceName The name of the resource to delete.
     * @param apiVersion The API version to use for the operation.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, options?: ResourcesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a resource.
     * @param resourceGroupName The name of the resource group that contains the resource to delete. The
     *                          name is case insensitive.
     * @param resourceProviderNamespace The namespace of the resource provider.
     * @param parentResourcePath The parent resource identity.
     * @param resourceType The resource type.
     * @param resourceName The name of the resource to delete.
     * @param apiVersion The API version to use for the operation.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, options?: ResourcesDeleteOptionalParams): Promise<void>;
    /**
     * Creates a resource.
     * @param resourceGroupName The name of the resource group for the resource. The name is case
     *                          insensitive.
     * @param resourceProviderNamespace The namespace of the resource provider.
     * @param parentResourcePath The parent resource identity.
     * @param resourceType The resource type of the resource to create.
     * @param resourceName The name of the resource to create.
     * @param apiVersion The API version to use for the operation.
     * @param parameters Parameters for creating or updating the resource.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, parameters: GenericResource, options?: ResourcesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ResourcesCreateOrUpdateResponse>, ResourcesCreateOrUpdateResponse>>;
    /**
     * Creates a resource.
     * @param resourceGroupName The name of the resource group for the resource. The name is case
     *                          insensitive.
     * @param resourceProviderNamespace The namespace of the resource provider.
     * @param parentResourcePath The parent resource identity.
     * @param resourceType The resource type of the resource to create.
     * @param resourceName The name of the resource to create.
     * @param apiVersion The API version to use for the operation.
     * @param parameters Parameters for creating or updating the resource.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, parameters: GenericResource, options?: ResourcesCreateOrUpdateOptionalParams): Promise<ResourcesCreateOrUpdateResponse>;
    /**
     * Updates a resource.
     * @param resourceGroupName The name of the resource group for the resource. The name is case
     *                          insensitive.
     * @param resourceProviderNamespace The namespace of the resource provider.
     * @param parentResourcePath The parent resource identity.
     * @param resourceType The resource type of the resource to update.
     * @param resourceName The name of the resource to update.
     * @param apiVersion The API version to use for the operation.
     * @param parameters Parameters for updating the resource.
     * @param options The options parameters.
     */
    beginUpdate(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, parameters: GenericResource, options?: ResourcesUpdateOptionalParams): Promise<PollerLike<PollOperationState<ResourcesUpdateResponse>, ResourcesUpdateResponse>>;
    /**
     * Updates a resource.
     * @param resourceGroupName The name of the resource group for the resource. The name is case
     *                          insensitive.
     * @param resourceProviderNamespace The namespace of the resource provider.
     * @param parentResourcePath The parent resource identity.
     * @param resourceType The resource type of the resource to update.
     * @param resourceName The name of the resource to update.
     * @param apiVersion The API version to use for the operation.
     * @param parameters Parameters for updating the resource.
     * @param options The options parameters.
     */
    beginUpdateAndWait(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, parameters: GenericResource, options?: ResourcesUpdateOptionalParams): Promise<ResourcesUpdateResponse>;
    /**
     * Gets a resource.
     * @param resourceGroupName The name of the resource group containing the resource to get. The name is
     *                          case insensitive.
     * @param resourceProviderNamespace The namespace of the resource provider.
     * @param parentResourcePath The parent resource identity.
     * @param resourceType The resource type of the resource.
     * @param resourceName The name of the resource to get.
     * @param apiVersion The API version to use for the operation.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, options?: ResourcesGetOptionalParams): Promise<ResourcesGetResponse>;
    /**
     * Checks by ID whether a resource exists.
     * @param resourceId The fully qualified ID of the resource, including the resource name and resource
     *                   type. Use the format,
     *                   /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
     * @param apiVersion The API version to use for the operation.
     * @param options The options parameters.
     */
    checkExistenceById(resourceId: string, apiVersion: string, options?: ResourcesCheckExistenceByIdOptionalParams): Promise<void>;
    /**
     * Deletes a resource by ID.
     * @param resourceId The fully qualified ID of the resource, including the resource name and resource
     *                   type. Use the format,
     *                   /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
     * @param apiVersion The API version to use for the operation.
     * @param options The options parameters.
     */
    beginDeleteById(resourceId: string, apiVersion: string, options?: ResourcesDeleteByIdOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a resource by ID.
     * @param resourceId The fully qualified ID of the resource, including the resource name and resource
     *                   type. Use the format,
     *                   /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
     * @param apiVersion The API version to use for the operation.
     * @param options The options parameters.
     */
    beginDeleteByIdAndWait(resourceId: string, apiVersion: string, options?: ResourcesDeleteByIdOptionalParams): Promise<void>;
    /**
     * Create a resource by ID.
     * @param resourceId The fully qualified ID of the resource, including the resource name and resource
     *                   type. Use the format,
     *                   /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
     * @param apiVersion The API version to use for the operation.
     * @param parameters Create or update resource parameters.
     * @param options The options parameters.
     */
    beginCreateOrUpdateById(resourceId: string, apiVersion: string, parameters: GenericResource, options?: ResourcesCreateOrUpdateByIdOptionalParams): Promise<PollerLike<PollOperationState<ResourcesCreateOrUpdateByIdResponse>, ResourcesCreateOrUpdateByIdResponse>>;
    /**
     * Create a resource by ID.
     * @param resourceId The fully qualified ID of the resource, including the resource name and resource
     *                   type. Use the format,
     *                   /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
     * @param apiVersion The API version to use for the operation.
     * @param parameters Create or update resource parameters.
     * @param options The options parameters.
     */
    beginCreateOrUpdateByIdAndWait(resourceId: string, apiVersion: string, parameters: GenericResource, options?: ResourcesCreateOrUpdateByIdOptionalParams): Promise<ResourcesCreateOrUpdateByIdResponse>;
    /**
     * Updates a resource by ID.
     * @param resourceId The fully qualified ID of the resource, including the resource name and resource
     *                   type. Use the format,
     *                   /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
     * @param apiVersion The API version to use for the operation.
     * @param parameters Update resource parameters.
     * @param options The options parameters.
     */
    beginUpdateById(resourceId: string, apiVersion: string, parameters: GenericResource, options?: ResourcesUpdateByIdOptionalParams): Promise<PollerLike<PollOperationState<ResourcesUpdateByIdResponse>, ResourcesUpdateByIdResponse>>;
    /**
     * Updates a resource by ID.
     * @param resourceId The fully qualified ID of the resource, including the resource name and resource
     *                   type. Use the format,
     *                   /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
     * @param apiVersion The API version to use for the operation.
     * @param parameters Update resource parameters.
     * @param options The options parameters.
     */
    beginUpdateByIdAndWait(resourceId: string, apiVersion: string, parameters: GenericResource, options?: ResourcesUpdateByIdOptionalParams): Promise<ResourcesUpdateByIdResponse>;
    /**
     * Gets a resource by ID.
     * @param resourceId The fully qualified ID of the resource, including the resource name and resource
     *                   type. Use the format,
     *                   /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
     * @param apiVersion The API version to use for the operation.
     * @param options The options parameters.
     */
    getById(resourceId: string, apiVersion: string, options?: ResourcesGetByIdOptionalParams): Promise<ResourcesGetByIdResponse>;
}

/** Optional parameters. */
export declare interface ResourcesCheckExistenceByIdOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface ResourcesCheckExistenceOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface ResourcesCreateOrUpdateByIdOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdateById operation. */
export declare type ResourcesCreateOrUpdateByIdResponse = GenericResource;

/** Optional parameters. */
export declare interface ResourcesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type ResourcesCreateOrUpdateResponse = GenericResource;

/** Optional parameters. */
export declare interface ResourcesDeleteByIdOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ResourcesDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ResourcesGetByIdOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getById operation. */
export declare type ResourcesGetByIdResponse = GenericResource;

/** Optional parameters. */
export declare interface ResourcesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ResourcesGetResponse = GenericResource;

/** Optional parameters. */
export declare interface ResourcesListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation.<br><br>The properties you can use for eq (equals) or ne (not equals) are: location, resourceType, name, resourceGroup, identity, identity/principalId, plan, plan/publisher, plan/product, plan/name, plan/version, and plan/promotionCode.<br><br>For example, to filter by a resource type, use: $filter=resourceType eq 'Microsoft.Network/virtualNetworks'<br><br>You can use substringof(value, property) in the filter. The properties you can use for substring are: name and resourceGroup.<br><br>For example, to get all resources with 'demo' anywhere in the name, use: $filter=substringof('demo', name)<br><br>You can link more than one substringof together by adding and/or operators.<br><br>You can filter by tag names and values. For example, to filter for a tag name and value, use $filter=tagName eq 'tag1' and tagValue eq 'Value1'. When you filter by a tag name and value, the tags for each resource are not returned in the results.<br><br>You can use some properties together when filtering. The combinations you can use are: substringof and/or resourceType, plan and plan/publisher and plan/name, identity and identity/principalId. */
    filter?: string;
    /** The number of results to return. If null is passed, returns all resources. */
    top?: number;
    /** Comma-separated list of additional properties to be included in the response. Valid values include `createdTime`, `changedTime` and `provisioningState`. For example, `$expand=createdTime,changedTime`. */
    expand?: string;
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type ResourcesListByResourceGroupNextResponse = ResourceListResult;

/** Optional parameters. */
export declare interface ResourcesListByResourceGroupOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation.<br><br>The properties you can use for eq (equals) or ne (not equals) are: location, resourceType, name, resourceGroup, identity, identity/principalId, plan, plan/publisher, plan/product, plan/name, plan/version, and plan/promotionCode.<br><br>For example, to filter by a resource type, use: $filter=resourceType eq 'Microsoft.Network/virtualNetworks'<br><br>You can use substringof(value, property) in the filter. The properties you can use for substring are: name and resourceGroup.<br><br>For example, to get all resources with 'demo' anywhere in the name, use: $filter=substringof('demo', name)<br><br>You can link more than one substringof together by adding and/or operators.<br><br>You can filter by tag names and values. For example, to filter for a tag name and value, use $filter=tagName eq 'tag1' and tagValue eq 'Value1'. When you filter by a tag name and value, the tags for each resource are not returned in the results.<br><br>You can use some properties together when filtering. The combinations you can use are: substringof and/or resourceType, plan and plan/publisher and plan/name, identity and identity/principalId. */
    filter?: string;
    /** The number of results to return. If null is passed, returns all resources. */
    top?: number;
    /** Comma-separated list of additional properties to be included in the response. Valid values include `createdTime`, `changedTime` and `provisioningState`. For example, `$expand=createdTime,changedTime`. */
    expand?: string;
}

/** Contains response data for the listByResourceGroup operation. */
export declare type ResourcesListByResourceGroupResponse = ResourceListResult;

/** Optional parameters. */
export declare interface ResourcesListNextOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation.<br><br>The properties you can use for eq (equals) or ne (not equals) are: location, resourceType, name, resourceGroup, identity, identity/principalId, plan, plan/publisher, plan/product, plan/name, plan/version, and plan/promotionCode.<br><br>For example, to filter by a resource type, use: $filter=resourceType eq 'Microsoft.Network/virtualNetworks'<br><br>You can use substringof(value, property) in the filter. The properties you can use for substring are: name and resourceGroup.<br><br>For example, to get all resources with 'demo' anywhere in the name, use: $filter=substringof('demo', name)<br><br>You can link more than one substringof together by adding and/or operators.<br><br>You can filter by tag names and values. For example, to filter for a tag name and value, use $filter=tagName eq 'tag1' and tagValue eq 'Value1'. When you filter by a tag name and value, the tags for each resource are not returned in the results.<br><br>You can use some properties together when filtering. The combinations you can use are: substringof and/or resourceType, plan and plan/publisher and plan/name, identity and identity/principalId. */
    filter?: string;
    /** The number of results to return. If null is passed, returns all resource groups. */
    top?: number;
    /** Comma-separated list of additional properties to be included in the response. Valid values include `createdTime`, `changedTime` and `provisioningState`. For example, `$expand=createdTime,changedTime`. */
    expand?: string;
}

/** Contains response data for the listNext operation. */
export declare type ResourcesListNextResponse = ResourceListResult;

/** Optional parameters. */
export declare interface ResourcesListOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation.<br><br>The properties you can use for eq (equals) or ne (not equals) are: location, resourceType, name, resourceGroup, identity, identity/principalId, plan, plan/publisher, plan/product, plan/name, plan/version, and plan/promotionCode.<br><br>For example, to filter by a resource type, use: $filter=resourceType eq 'Microsoft.Network/virtualNetworks'<br><br>You can use substringof(value, property) in the filter. The properties you can use for substring are: name and resourceGroup.<br><br>For example, to get all resources with 'demo' anywhere in the name, use: $filter=substringof('demo', name)<br><br>You can link more than one substringof together by adding and/or operators.<br><br>You can filter by tag names and values. For example, to filter for a tag name and value, use $filter=tagName eq 'tag1' and tagValue eq 'Value1'. When you filter by a tag name and value, the tags for each resource are not returned in the results.<br><br>You can use some properties together when filtering. The combinations you can use are: substringof and/or resourceType, plan and plan/publisher and plan/name, identity and identity/principalId. */
    filter?: string;
    /** The number of results to return. If null is passed, returns all resource groups. */
    top?: number;
    /** Comma-separated list of additional properties to be included in the response. Valid values include `createdTime`, `changedTime` and `provisioningState`. For example, `$expand=createdTime,changedTime`. */
    expand?: string;
}

/** Contains response data for the list operation. */
export declare type ResourcesListResponse = ResourceListResult;

/** Parameters of move resources. */
export declare interface ResourcesMoveInfo {
    /** The IDs of the resources. */
    resources?: string[];
    /** The target resource group. */
    targetResourceGroup?: string;
}

/** Optional parameters. */
export declare interface ResourcesMoveResourcesOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ResourcesUpdateByIdOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the updateById operation. */
export declare type ResourcesUpdateByIdResponse = GenericResource;

/** Optional parameters. */
export declare interface ResourcesUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the update operation. */
export declare type ResourcesUpdateResponse = GenericResource;

/** Optional parameters. */
export declare interface ResourcesValidateMoveResourcesOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Deployment operation parameters. */
export declare interface ScopedDeployment {
    /** The location to store the deployment data. */
    location: string;
    /** The deployment properties. */
    properties: DeploymentProperties;
}

/** SKU for the resource. */
export declare interface Sku {
    /** The SKU name. */
    name?: string;
    /** The SKU tier. */
    tier?: string;
    /** The SKU size. */
    size?: string;
    /** The SKU family. */
    family?: string;
    /** The SKU model. */
    model?: string;
    /** The SKU capacity. */
    capacity?: number;
}

/** Sub-resource. */
export declare interface SubResource {
    /** Resource ID */
    id?: string;
}

/** Tag count. */
export declare interface TagCount {
    /** Type of count. */
    type?: string;
    /** Value of count. */
    value?: number;
}

/** Tag details. */
export declare interface TagDetails {
    /**
     * The tag ID.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /** The tag name. */
    tagName?: string;
    /** The total number of resources that use the resource tag. When a tag is initially created and has no associated resources, the value is 0. */
    count?: TagCount;
    /** The list of tag values. */
    values?: TagValue[];
}

/** Interface representing a Tags. */
export declare interface Tags {
    /**
     * Gets the names and values of all resource tags that are defined in a subscription.
     * @param options The options parameters.
     */
    list(options?: TagsListOptionalParams): PagedAsyncIterableIterator<TagDetails>;
    /**
     * Deletes a tag value.
     * @param tagName The name of the tag.
     * @param tagValue The value of the tag to delete.
     * @param options The options parameters.
     */
    deleteValue(tagName: string, tagValue: string, options?: TagsDeleteValueOptionalParams): Promise<void>;
    /**
     * Creates a tag value. The name of the tag must already exist.
     * @param tagName The name of the tag.
     * @param tagValue The value of the tag to create.
     * @param options The options parameters.
     */
    createOrUpdateValue(tagName: string, tagValue: string, options?: TagsCreateOrUpdateValueOptionalParams): Promise<TagsCreateOrUpdateValueResponse>;
    /**
     * The tag name can have a maximum of 512 characters and is case insensitive. Tag names created by
     * Azure have prefixes of microsoft, azure, or windows. You cannot create tags with one of these
     * prefixes.
     * @param tagName The name of the tag to create.
     * @param options The options parameters.
     */
    createOrUpdate(tagName: string, options?: TagsCreateOrUpdateOptionalParams): Promise<TagsCreateOrUpdateResponse>;
    /**
     * You must remove all values from a resource tag before you can delete it.
     * @param tagName The name of the tag.
     * @param options The options parameters.
     */
    delete(tagName: string, options?: TagsDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface TagsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type TagsCreateOrUpdateResponse = TagDetails;

/** Optional parameters. */
export declare interface TagsCreateOrUpdateValueOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdateValue operation. */
export declare type TagsCreateOrUpdateValueResponse = TagValue;

/** Optional parameters. */
export declare interface TagsDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface TagsDeleteValueOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface TagsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type TagsListNextResponse = TagsListResult;

/** Optional parameters. */
export declare interface TagsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type TagsListResponse = TagsListResult;

/** List of subscription tags. */
export declare interface TagsListResult {
    /** An array of tags. */
    value?: TagDetails[];
    /**
     * The URL to use for getting the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Tag information. */
export declare interface TagValue {
    /**
     * The tag ID.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /** The tag value. */
    tagValue?: string;
    /** The tag value count. */
    count?: TagCount;
}

/** Target resource. */
export declare interface TargetResource {
    /** The ID of the resource. */
    id?: string;
    /** The name of the resource. */
    resourceName?: string;
    /** The type of the resource. */
    resourceType?: string;
}

/** Result of the request to calculate template hash. It contains a string of minified template and its hash. */
export declare interface TemplateHashResult {
    /** The minified template string. */
    minifiedTemplate?: string;
    /** The template hash. */
    templateHash?: string;
}

/** Entity representing the reference to the template. */
export declare interface TemplateLink {
    /** The URI of the template to deploy. */
    uri: string;
    /** If included, must match the ContentVersion in the template. */
    contentVersion?: string;
}

/** Information about a single resource change predicted by What-If operation. */
export declare interface WhatIfChange {
    /** Resource ID */
    resourceId: string;
    /** Type of change that will be made to the resource when the deployment is executed. */
    changeType: ChangeType;
    /** The snapshot of the resource before the deployment is executed. */
    before?: Record<string, unknown>;
    /** The predicted snapshot of the resource after the deployment is executed. */
    after?: Record<string, unknown>;
    /** The predicted changes to resource properties. */
    delta?: WhatIfPropertyChange[];
}

/** Result of the What-If operation. Contains a list of predicted changes and a URL link to get to the next set of results. */
export declare interface WhatIfOperationResult {
    /** Status of the What-If operation. */
    status?: string;
    /** Error when What-If operation fails. */
    error?: ErrorResponse;
    /** List of resource changes predicted by What-If operation. */
    changes?: WhatIfChange[];
}

/** The predicted change to the resource property. */
export declare interface WhatIfPropertyChange {
    /** The path of the property. */
    path: string;
    /** The type of property change. */
    propertyChangeType: PropertyChangeType;
    /** The value of the property before the deployment is executed. */
    before?: Record<string, unknown>;
    /** The value of the property after the deployment is executed. */
    after?: Record<string, unknown>;
    /** Nested property changes. */
    children?: WhatIfPropertyChange[];
}

/** Defines values for WhatIfResultFormat. */
export declare type WhatIfResultFormat = "ResourceIdOnly" | "FullResourcePayloads";

export { }
