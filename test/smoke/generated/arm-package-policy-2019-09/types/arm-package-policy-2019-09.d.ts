import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';

/** An error response from a policy operation. */
export declare interface CloudError {
    /** The resource management error response. */
    error?: ErrorResponse;
}

/**
 * Defines values for EnforcementMode. \
 * {@link KnownEnforcementMode} can be used interchangeably with EnforcementMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Default**: The policy effect is enforced during resource creation or update. \
 * **DoNotEnforce**: The policy effect is not enforced during resource creation or update.
 */
export declare type EnforcementMode = string;

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

/** Identity for the resource. */
export declare interface Identity {
    /**
     * The principal ID of the resource identity.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly principalId?: string;
    /**
     * The tenant ID of the resource identity.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly tenantId?: string;
    /** The identity type. This is the only required field when adding a system assigned identity to a resource. */
    type?: ResourceIdentityType;
}

/** Known values of {@link EnforcementMode} that the service accepts. */
export declare enum KnownEnforcementMode {
    /** The policy effect is enforced during resource creation or update. */
    Default = "Default",
    /** The policy effect is not enforced during resource creation or update. */
    DoNotEnforce = "DoNotEnforce"
}

/** Known values of {@link ParameterType} that the service accepts. */
export declare enum KnownParameterType {
    String = "String",
    Array = "Array",
    Object = "Object",
    Boolean = "Boolean",
    Integer = "Integer",
    Float = "Float",
    DateTime = "DateTime"
}

/** Known values of {@link PolicyType} that the service accepts. */
export declare enum KnownPolicyType {
    NotSpecified = "NotSpecified",
    BuiltIn = "BuiltIn",
    Custom = "Custom",
    Static = "Static"
}

/** The definition of a parameter that can be provided to the policy. */
export declare interface ParameterDefinitionsValue {
    /** The data type of the parameter. */
    type?: ParameterType;
    /** The allowed values for the parameter. */
    allowedValues?: Record<string, unknown>[];
    /** The default value for the parameter if no value is provided. */
    defaultValue?: Record<string, unknown>;
    /** General metadata for the parameter. */
    metadata?: ParameterDefinitionsValueMetadata;
}

/** General metadata for the parameter. */
export declare interface ParameterDefinitionsValueMetadata {
    /** Describes unknown properties. The value of an unknown property can be of "any" type. */
    [property: string]: any;
    /** The display name for the parameter. */
    displayName?: string;
    /** The description of the parameter. */
    description?: string;
}

/**
 * Defines values for ParameterType. \
 * {@link KnownParameterType} can be used interchangeably with ParameterType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **String** \
 * **Array** \
 * **Object** \
 * **Boolean** \
 * **Integer** \
 * **Float** \
 * **DateTime**
 */
export declare type ParameterType = string;

/** The value of a parameter. */
export declare interface ParameterValuesValue {
    /** The value of the parameter. */
    value?: Record<string, unknown>;
}

/** The policy assignment. */
export declare interface PolicyAssignment {
    /**
     * The ID of the policy assignment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * The type of the policy assignment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /**
     * The name of the policy assignment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /** The policy sku. This property is optional, obsolete, and will be ignored. */
    sku?: PolicySku;
    /** The location of the policy assignment. Only required when utilizing managed identity. */
    location?: string;
    /** The managed identity associated with the policy assignment. */
    identity?: Identity;
    /** The display name of the policy assignment. */
    displayName?: string;
    /** The ID of the policy definition or policy set definition being assigned. */
    policyDefinitionId?: string;
    /** The scope for the policy assignment. */
    scope?: string;
    /** The policy's excluded scopes. */
    notScopes?: string[];
    /** The parameter values for the assigned policy rule. The keys are the parameter names. */
    parameters?: {
        [propertyName: string]: ParameterValuesValue;
    };
    /** This message will be part of response in case of policy violation. */
    description?: string;
    /** The policy assignment metadata. Metadata is an open ended object and is typically a collection of key value pairs. */
    metadata?: Record<string, unknown>;
    /** The policy assignment enforcement mode. Possible values are Default and DoNotEnforce. */
    enforcementMode?: EnforcementMode;
}

/** List of policy assignments. */
export declare interface PolicyAssignmentListResult {
    /** An array of policy assignments. */
    value?: PolicyAssignment[];
    /** The URL to use for getting the next set of results. */
    nextLink?: string;
}

/** Interface representing a PolicyAssignments. */
export declare interface PolicyAssignments {
    /**
     * This operation retrieves the list of all policy assignments associated with the given resource group
     * in the given subscription that match the optional given $filter. Valid values for $filter are:
     * 'atScope()' or 'policyDefinitionId eq '{value}''. If $filter is not provided, the unfiltered list
     * includes all policy assignments associated with the resource group, including those that apply
     * directly or apply from containing scopes, as well as any applied to resources contained within the
     * resource group. If $filter=atScope() is provided, the returned list includes all policy assignments
     * that apply to the resource group, which is everything in the unfiltered list except those applied to
     * resources contained within the resource group. If $filter=policyDefinitionId eq '{value}' is
     * provided, the returned list includes all policy assignments of the policy definition whose id is
     * {value} that apply to the resource group.
     * @param resourceGroupName The name of the resource group that contains policy assignments.
     * @param options The options parameters.
     */
    listForResourceGroup(resourceGroupName: string, options?: PolicyAssignmentsListForResourceGroupOptionalParams): PagedAsyncIterableIterator<PolicyAssignment>;
    /**
     * This operation retrieves the list of all policy assignments associated with the specified resource
     * in the given resource group and subscription that match the optional given $filter. Valid values for
     * $filter are: 'atScope()' or 'policyDefinitionId eq '{value}''. If $filter is not provided, the
     * unfiltered list includes all policy assignments associated with the resource, including those that
     * apply directly or from all containing scopes, as well as any applied to resources contained within
     * the resource. If $filter=atScope() is provided, the returned list includes all policy assignments
     * that apply to the resource, which is everything in the unfiltered list except those applied to
     * resources contained within the resource. If $filter=policyDefinitionId eq '{value}' is provided, the
     * returned list includes all policy assignments of the policy definition whose id is {value} that
     * apply to the resource. Three parameters plus the resource name are used to identify a specific
     * resource. If the resource is not part of a parent resource (the more common case), the parent
     * resource path should not be provided (or provided as ''). For example a web app could be specified
     * as ({resourceProviderNamespace} == 'Microsoft.Web', {parentResourcePath} == '', {resourceType} ==
     * 'sites', {resourceName} == 'MyWebApp'). If the resource is part of a parent resource, then all
     * parameters should be provided. For example a virtual machine DNS name could be specified as
     * ({resourceProviderNamespace} == 'Microsoft.Compute', {parentResourcePath} ==
     * 'virtualMachines/MyVirtualMachine', {resourceType} == 'domainNames', {resourceName} ==
     * 'MyComputerName'). A convenient alternative to providing the namespace and type name separately is
     * to provide both in the {resourceType} parameter, format: ({resourceProviderNamespace} == '',
     * {parentResourcePath} == '', {resourceType} == 'Microsoft.Web/sites', {resourceName} == 'MyWebApp').
     * @param resourceGroupName The name of the resource group containing the resource.
     * @param resourceProviderNamespace The namespace of the resource provider. For example, the namespace
     *                                  of a virtual machine is Microsoft.Compute (from Microsoft.Compute/virtualMachines)
     * @param parentResourcePath The parent resource path. Use empty string if there is none.
     * @param resourceType The resource type name. For example the type name of a web app is 'sites' (from
     *                     Microsoft.Web/sites).
     * @param resourceName The name of the resource.
     * @param options The options parameters.
     */
    listForResource(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, options?: PolicyAssignmentsListForResourceOptionalParams): PagedAsyncIterableIterator<PolicyAssignment>;
    /**
     * This operation retrieves the list of all policy assignments applicable to the management group that
     * match the given $filter. Valid values for $filter are: 'atScope()' or 'policyDefinitionId eq
     * '{value}''. If $filter=atScope() is provided, the returned list includes all policy assignments that
     * are assigned to the management group or the management group's ancestors. If
     * $filter=policyDefinitionId eq '{value}' is provided, the returned list includes all policy
     * assignments of the policy definition whose id is {value} that apply to the management group.
     * @param managementGroupId The ID of the management group.
     * @param filter The filter to apply on the operation. Valid values for $filter are: 'atScope()' or
     *               'policyDefinitionId eq '{value}''. A filter is required when listing policy assignments at
     *               management group scope.
     * @param options The options parameters.
     */
    listForManagementGroup(managementGroupId: string, filter: string, options?: PolicyAssignmentsListForManagementGroupOptionalParams): PagedAsyncIterableIterator<PolicyAssignment>;
    /**
     * This operation retrieves the list of all policy assignments associated with the given subscription
     * that match the optional given $filter. Valid values for $filter are: 'atScope()' or
     * 'policyDefinitionId eq '{value}''. If $filter is not provided, the unfiltered list includes all
     * policy assignments associated with the subscription, including those that apply directly or from
     * management groups that contain the given subscription, as well as any applied to objects contained
     * within the subscription. If $filter=atScope() is provided, the returned list includes all policy
     * assignments that apply to the subscription, which is everything in the unfiltered list except those
     * applied to objects contained within the subscription. If $filter=policyDefinitionId eq '{value}' is
     * provided, the returned list includes all policy assignments of the policy definition whose id is
     * {value}.
     * @param options The options parameters.
     */
    list(options?: PolicyAssignmentsListOptionalParams): PagedAsyncIterableIterator<PolicyAssignment>;
    /**
     * This operation deletes a policy assignment, given its name and the scope it was created in. The
     * scope of a policy assignment is the part of its ID preceding
     * '/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}'.
     * @param scope The scope of the policy assignment. Valid scopes are: management group (format:
     *              '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format:
     *              '/subscriptions/{subscriptionId}'), resource group (format:
     *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format:
     *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
     * @param policyAssignmentName The name of the policy assignment to delete.
     * @param options The options parameters.
     */
    delete(scope: string, policyAssignmentName: string, options?: PolicyAssignmentsDeleteOptionalParams): Promise<PolicyAssignmentsDeleteResponse>;
    /**
     *  This operation creates or updates a policy assignment with the given scope and name. Policy
     * assignments apply to all resources contained within their scope. For example, when you assign a
     * policy at resource group scope, that policy applies to all resources in the group.
     * @param scope The scope of the policy assignment. Valid scopes are: management group (format:
     *              '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format:
     *              '/subscriptions/{subscriptionId}'), resource group (format:
     *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format:
     *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
     * @param policyAssignmentName The name of the policy assignment.
     * @param parameters Parameters for the policy assignment.
     * @param options The options parameters.
     */
    create(scope: string, policyAssignmentName: string, parameters: PolicyAssignment, options?: PolicyAssignmentsCreateOptionalParams): Promise<PolicyAssignmentsCreateResponse>;
    /**
     * This operation retrieves a single policy assignment, given its name and the scope it was created at.
     * @param scope The scope of the policy assignment. Valid scopes are: management group (format:
     *              '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format:
     *              '/subscriptions/{subscriptionId}'), resource group (format:
     *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format:
     *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
     * @param policyAssignmentName The name of the policy assignment to get.
     * @param options The options parameters.
     */
    get(scope: string, policyAssignmentName: string, options?: PolicyAssignmentsGetOptionalParams): Promise<PolicyAssignmentsGetResponse>;
    /**
     * This operation deletes the policy with the given ID. Policy assignment IDs have this format:
     * '{scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}'. Valid formats
     * for {scope} are: '/providers/Microsoft.Management/managementGroups/{managementGroup}' (management
     * group), '/subscriptions/{subscriptionId}' (subscription),
     * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' (resource group), or
     * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
     * (resource).
     * @param policyAssignmentId The ID of the policy assignment to delete. Use the format
     *                           '{scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}'.
     * @param options The options parameters.
     */
    deleteById(policyAssignmentId: string, options?: PolicyAssignmentsDeleteByIdOptionalParams): Promise<PolicyAssignmentsDeleteByIdResponse>;
    /**
     * This operation creates or updates the policy assignment with the given ID. Policy assignments made
     * on a scope apply to all resources contained in that scope. For example, when you assign a policy to
     * a resource group that policy applies to all resources in the group. Policy assignment IDs have this
     * format: '{scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}'. Valid
     * scopes are: management group (format:
     * '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format:
     * '/subscriptions/{subscriptionId}'), resource group (format:
     * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format:
     * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'.
     * @param policyAssignmentId The ID of the policy assignment to create. Use the format
     *                           '{scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}'.
     * @param parameters Parameters for policy assignment.
     * @param options The options parameters.
     */
    createById(policyAssignmentId: string, parameters: PolicyAssignment, options?: PolicyAssignmentsCreateByIdOptionalParams): Promise<PolicyAssignmentsCreateByIdResponse>;
    /**
     * The operation retrieves the policy assignment with the given ID. Policy assignment IDs have this
     * format: '{scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}'. Valid
     * scopes are: management group (format:
     * '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format:
     * '/subscriptions/{subscriptionId}'), resource group (format:
     * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format:
     * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'.
     * @param policyAssignmentId The ID of the policy assignment to get. Use the format
     *                           '{scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}'.
     * @param options The options parameters.
     */
    getById(policyAssignmentId: string, options?: PolicyAssignmentsGetByIdOptionalParams): Promise<PolicyAssignmentsGetByIdResponse>;
}

/** Optional parameters. */
export declare interface PolicyAssignmentsCreateByIdOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createById operation. */
export declare type PolicyAssignmentsCreateByIdResponse = PolicyAssignment;

/** Optional parameters. */
export declare interface PolicyAssignmentsCreateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the create operation. */
export declare type PolicyAssignmentsCreateResponse = PolicyAssignment;

/** Optional parameters. */
export declare interface PolicyAssignmentsDeleteByIdOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the deleteById operation. */
export declare type PolicyAssignmentsDeleteByIdResponse = PolicyAssignment;

/** Optional parameters. */
export declare interface PolicyAssignmentsDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the delete operation. */
export declare type PolicyAssignmentsDeleteResponse = PolicyAssignment;

/** Optional parameters. */
export declare interface PolicyAssignmentsGetByIdOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getById operation. */
export declare type PolicyAssignmentsGetByIdResponse = PolicyAssignment;

/** Optional parameters. */
export declare interface PolicyAssignmentsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type PolicyAssignmentsGetResponse = PolicyAssignment;

/** Optional parameters. */
export declare interface PolicyAssignmentsListForManagementGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listForManagementGroupNext operation. */
export declare type PolicyAssignmentsListForManagementGroupNextResponse = PolicyAssignmentListResult;

/** Optional parameters. */
export declare interface PolicyAssignmentsListForManagementGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listForManagementGroup operation. */
export declare type PolicyAssignmentsListForManagementGroupResponse = PolicyAssignmentListResult;

/** Optional parameters. */
export declare interface PolicyAssignmentsListForResourceGroupNextOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation. Valid values for $filter are: 'atScope()' or 'policyDefinitionId eq '{value}''. If $filter is not provided, no filtering is performed. */
    filter?: string;
}

/** Contains response data for the listForResourceGroupNext operation. */
export declare type PolicyAssignmentsListForResourceGroupNextResponse = PolicyAssignmentListResult;

/** Optional parameters. */
export declare interface PolicyAssignmentsListForResourceGroupOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation. Valid values for $filter are: 'atScope()' or 'policyDefinitionId eq '{value}''. If $filter is not provided, no filtering is performed. */
    filter?: string;
}

/** Contains response data for the listForResourceGroup operation. */
export declare type PolicyAssignmentsListForResourceGroupResponse = PolicyAssignmentListResult;

/** Optional parameters. */
export declare interface PolicyAssignmentsListForResourceNextOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation. Valid values for $filter are: 'atScope()' or 'policyDefinitionId eq '{value}''. If $filter is not provided, no filtering is performed. */
    filter?: string;
}

/** Contains response data for the listForResourceNext operation. */
export declare type PolicyAssignmentsListForResourceNextResponse = PolicyAssignmentListResult;

/** Optional parameters. */
export declare interface PolicyAssignmentsListForResourceOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation. Valid values for $filter are: 'atScope()' or 'policyDefinitionId eq '{value}''. If $filter is not provided, no filtering is performed. */
    filter?: string;
}

/** Contains response data for the listForResource operation. */
export declare type PolicyAssignmentsListForResourceResponse = PolicyAssignmentListResult;

/** Optional parameters. */
export declare interface PolicyAssignmentsListNextOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation. Valid values for $filter are: 'atScope()' or 'policyDefinitionId eq '{value}''. If $filter is not provided, no filtering is performed. */
    filter?: string;
}

/** Contains response data for the listNext operation. */
export declare type PolicyAssignmentsListNextResponse = PolicyAssignmentListResult;

/** Optional parameters. */
export declare interface PolicyAssignmentsListOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation. Valid values for $filter are: 'atScope()' or 'policyDefinitionId eq '{value}''. If $filter is not provided, no filtering is performed. */
    filter?: string;
}

/** Contains response data for the list operation. */
export declare type PolicyAssignmentsListResponse = PolicyAssignmentListResult;

export declare class PolicyClient extends coreClient.ServiceClient {
    $host: string;
    apiVersion: string;
    subscriptionId: string;
    /**
     * Initializes a new instance of the PolicyClient class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId The ID of the target subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: PolicyClientOptionalParams);
    policyAssignments: PolicyAssignments;
    policyDefinitions: PolicyDefinitions;
    policySetDefinitions: PolicySetDefinitions;
}

/** Optional parameters. */
export declare interface PolicyClientOptionalParams extends coreClient.ServiceClientOptions {
    /** server parameter */
    $host?: string;
    /** Api Version */
    apiVersion?: string;
    /** Overrides client endpoint. */
    endpoint?: string;
}

/** The policy definition. */
export declare interface PolicyDefinition {
    /**
     * The ID of the policy definition.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * The name of the policy definition.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The type of the resource (Microsoft.Authorization/policyDefinitions).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** The type of policy definition. Possible values are NotSpecified, BuiltIn, Custom, and Static. */
    policyType?: PolicyType;
    /** The policy definition mode. Some examples are All, Indexed, Microsoft.KeyVault.Data. */
    mode?: string;
    /** The display name of the policy definition. */
    displayName?: string;
    /** The policy definition description. */
    description?: string;
    /** The policy rule. */
    policyRule?: Record<string, unknown>;
    /** The policy definition metadata.  Metadata is an open ended object and is typically a collection of key value pairs. */
    metadata?: Record<string, unknown>;
    /** The parameter definitions for parameters used in the policy rule. The keys are the parameter names. */
    parameters?: {
        [propertyName: string]: ParameterDefinitionsValue;
    };
}

/** The policy definition group. */
export declare interface PolicyDefinitionGroup {
    /** The name of the group. */
    name: string;
    /** The group's display name. */
    displayName?: string;
    /** The group's category. */
    category?: string;
    /** The group's description. */
    description?: string;
    /** A resource ID of a resource that contains additional metadata about the group. */
    additionalMetadataId?: string;
}

/** List of policy definitions. */
export declare interface PolicyDefinitionListResult {
    /** An array of policy definitions. */
    value?: PolicyDefinition[];
    /** The URL to use for getting the next set of results. */
    nextLink?: string;
}

/** The policy definition reference. */
export declare interface PolicyDefinitionReference {
    /** The ID of the policy definition or policy set definition. */
    policyDefinitionId: string;
    /** The parameter values for the referenced policy rule. The keys are the parameter names. */
    parameters?: {
        [propertyName: string]: ParameterValuesValue;
    };
    /** A unique id (within the policy set definition) for this policy definition reference. */
    policyDefinitionReferenceId?: string;
    /** The name of the groups that this policy definition reference belongs to. */
    groupNames?: string[];
}

/** Interface representing a PolicyDefinitions. */
export declare interface PolicyDefinitions {
    /**
     * This operation retrieves a list of all the policy definitions in a given subscription.
     * @param options The options parameters.
     */
    list(options?: PolicyDefinitionsListOptionalParams): PagedAsyncIterableIterator<PolicyDefinition>;
    /**
     * This operation retrieves a list of all the built-in policy definitions.
     * @param options The options parameters.
     */
    listBuiltIn(options?: PolicyDefinitionsListBuiltInOptionalParams): PagedAsyncIterableIterator<PolicyDefinition>;
    /**
     * This operation retrieves a list of all the policy definitions in a given management group.
     * @param managementGroupId The ID of the management group.
     * @param options The options parameters.
     */
    listByManagementGroup(managementGroupId: string, options?: PolicyDefinitionsListByManagementGroupOptionalParams): PagedAsyncIterableIterator<PolicyDefinition>;
    /**
     * This operation creates or updates a policy definition in the given subscription with the given name.
     * @param policyDefinitionName The name of the policy definition to create.
     * @param parameters The policy definition properties.
     * @param options The options parameters.
     */
    createOrUpdate(policyDefinitionName: string, parameters: PolicyDefinition, options?: PolicyDefinitionsCreateOrUpdateOptionalParams): Promise<PolicyDefinitionsCreateOrUpdateResponse>;
    /**
     * This operation deletes the policy definition in the given subscription with the given name.
     * @param policyDefinitionName The name of the policy definition to delete.
     * @param options The options parameters.
     */
    delete(policyDefinitionName: string, options?: PolicyDefinitionsDeleteOptionalParams): Promise<void>;
    /**
     * This operation retrieves the policy definition in the given subscription with the given name.
     * @param policyDefinitionName The name of the policy definition to get.
     * @param options The options parameters.
     */
    get(policyDefinitionName: string, options?: PolicyDefinitionsGetOptionalParams): Promise<PolicyDefinitionsGetResponse>;
    /**
     * This operation retrieves the built-in policy definition with the given name.
     * @param policyDefinitionName The name of the built-in policy definition to get.
     * @param options The options parameters.
     */
    getBuiltIn(policyDefinitionName: string, options?: PolicyDefinitionsGetBuiltInOptionalParams): Promise<PolicyDefinitionsGetBuiltInResponse>;
    /**
     * This operation creates or updates a policy definition in the given management group with the given
     * name.
     * @param policyDefinitionName The name of the policy definition to create.
     * @param managementGroupId The ID of the management group.
     * @param parameters The policy definition properties.
     * @param options The options parameters.
     */
    createOrUpdateAtManagementGroup(policyDefinitionName: string, managementGroupId: string, parameters: PolicyDefinition, options?: PolicyDefinitionsCreateOrUpdateAtManagementGroupOptionalParams): Promise<PolicyDefinitionsCreateOrUpdateAtManagementGroupResponse>;
    /**
     * This operation deletes the policy definition in the given management group with the given name.
     * @param policyDefinitionName The name of the policy definition to delete.
     * @param managementGroupId The ID of the management group.
     * @param options The options parameters.
     */
    deleteAtManagementGroup(policyDefinitionName: string, managementGroupId: string, options?: PolicyDefinitionsDeleteAtManagementGroupOptionalParams): Promise<void>;
    /**
     * This operation retrieves the policy definition in the given management group with the given name.
     * @param policyDefinitionName The name of the policy definition to get.
     * @param managementGroupId The ID of the management group.
     * @param options The options parameters.
     */
    getAtManagementGroup(policyDefinitionName: string, managementGroupId: string, options?: PolicyDefinitionsGetAtManagementGroupOptionalParams): Promise<PolicyDefinitionsGetAtManagementGroupResponse>;
}

/** Optional parameters. */
export declare interface PolicyDefinitionsCreateOrUpdateAtManagementGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdateAtManagementGroup operation. */
export declare type PolicyDefinitionsCreateOrUpdateAtManagementGroupResponse = PolicyDefinition;

/** Optional parameters. */
export declare interface PolicyDefinitionsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type PolicyDefinitionsCreateOrUpdateResponse = PolicyDefinition;

/** Optional parameters. */
export declare interface PolicyDefinitionsDeleteAtManagementGroupOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface PolicyDefinitionsDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface PolicyDefinitionsGetAtManagementGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAtManagementGroup operation. */
export declare type PolicyDefinitionsGetAtManagementGroupResponse = PolicyDefinition;

/** Optional parameters. */
export declare interface PolicyDefinitionsGetBuiltInOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getBuiltIn operation. */
export declare type PolicyDefinitionsGetBuiltInResponse = PolicyDefinition;

/** Optional parameters. */
export declare interface PolicyDefinitionsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type PolicyDefinitionsGetResponse = PolicyDefinition;

/** Optional parameters. */
export declare interface PolicyDefinitionsListBuiltInNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBuiltInNext operation. */
export declare type PolicyDefinitionsListBuiltInNextResponse = PolicyDefinitionListResult;

/** Optional parameters. */
export declare interface PolicyDefinitionsListBuiltInOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBuiltIn operation. */
export declare type PolicyDefinitionsListBuiltInResponse = PolicyDefinitionListResult;

/** Optional parameters. */
export declare interface PolicyDefinitionsListByManagementGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByManagementGroupNext operation. */
export declare type PolicyDefinitionsListByManagementGroupNextResponse = PolicyDefinitionListResult;

/** Optional parameters. */
export declare interface PolicyDefinitionsListByManagementGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByManagementGroup operation. */
export declare type PolicyDefinitionsListByManagementGroupResponse = PolicyDefinitionListResult;

/** Optional parameters. */
export declare interface PolicyDefinitionsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type PolicyDefinitionsListNextResponse = PolicyDefinitionListResult;

/** Optional parameters. */
export declare interface PolicyDefinitionsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type PolicyDefinitionsListResponse = PolicyDefinitionListResult;

/** The policy set definition. */
export declare interface PolicySetDefinition {
    /**
     * The ID of the policy set definition.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * The name of the policy set definition.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The type of the resource (Microsoft.Authorization/policySetDefinitions).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** The type of policy definition. Possible values are NotSpecified, BuiltIn, Custom, and Static. */
    policyType?: PolicyType;
    /** The display name of the policy set definition. */
    displayName?: string;
    /** The policy set definition description. */
    description?: string;
    /** The policy set definition metadata.  Metadata is an open ended object and is typically a collection of key value pairs. */
    metadata?: Record<string, unknown>;
    /** The policy set definition parameters that can be used in policy definition references. */
    parameters?: {
        [propertyName: string]: ParameterDefinitionsValue;
    };
    /** An array of policy definition references. */
    policyDefinitions?: PolicyDefinitionReference[];
    /** The metadata describing groups of policy definition references within the policy set definition. */
    policyDefinitionGroups?: PolicyDefinitionGroup[];
}

/** List of policy set definitions. */
export declare interface PolicySetDefinitionListResult {
    /** An array of policy set definitions. */
    value?: PolicySetDefinition[];
    /** The URL to use for getting the next set of results. */
    nextLink?: string;
}

/** Interface representing a PolicySetDefinitions. */
export declare interface PolicySetDefinitions {
    /**
     * This operation retrieves a list of all the policy set definitions in the given subscription.
     * @param options The options parameters.
     */
    list(options?: PolicySetDefinitionsListOptionalParams): PagedAsyncIterableIterator<PolicySetDefinition>;
    /**
     * This operation retrieves a list of all the built-in policy set definitions.
     * @param options The options parameters.
     */
    listBuiltIn(options?: PolicySetDefinitionsListBuiltInOptionalParams): PagedAsyncIterableIterator<PolicySetDefinition>;
    /**
     * This operation retrieves a list of all the a policy set definition in the given management group.
     * @param managementGroupId The ID of the management group.
     * @param options The options parameters.
     */
    listByManagementGroup(managementGroupId: string, options?: PolicySetDefinitionsListByManagementGroupOptionalParams): PagedAsyncIterableIterator<PolicySetDefinition>;
    /**
     * This operation creates or updates a policy set definition in the given subscription with the given
     * name.
     * @param policySetDefinitionName The name of the policy set definition to create.
     * @param parameters The policy set definition properties.
     * @param options The options parameters.
     */
    createOrUpdate(policySetDefinitionName: string, parameters: PolicySetDefinition, options?: PolicySetDefinitionsCreateOrUpdateOptionalParams): Promise<PolicySetDefinitionsCreateOrUpdateResponse>;
    /**
     * This operation deletes the policy set definition in the given subscription with the given name.
     * @param policySetDefinitionName The name of the policy set definition to delete.
     * @param options The options parameters.
     */
    delete(policySetDefinitionName: string, options?: PolicySetDefinitionsDeleteOptionalParams): Promise<void>;
    /**
     * This operation retrieves the policy set definition in the given subscription with the given name.
     * @param policySetDefinitionName The name of the policy set definition to get.
     * @param options The options parameters.
     */
    get(policySetDefinitionName: string, options?: PolicySetDefinitionsGetOptionalParams): Promise<PolicySetDefinitionsGetResponse>;
    /**
     * This operation retrieves the built-in policy set definition with the given name.
     * @param policySetDefinitionName The name of the policy set definition to get.
     * @param options The options parameters.
     */
    getBuiltIn(policySetDefinitionName: string, options?: PolicySetDefinitionsGetBuiltInOptionalParams): Promise<PolicySetDefinitionsGetBuiltInResponse>;
    /**
     * This operation creates or updates a policy set definition in the given management group with the
     * given name.
     * @param policySetDefinitionName The name of the policy set definition to create.
     * @param managementGroupId The ID of the management group.
     * @param parameters The policy set definition properties.
     * @param options The options parameters.
     */
    createOrUpdateAtManagementGroup(policySetDefinitionName: string, managementGroupId: string, parameters: PolicySetDefinition, options?: PolicySetDefinitionsCreateOrUpdateAtManagementGroupOptionalParams): Promise<PolicySetDefinitionsCreateOrUpdateAtManagementGroupResponse>;
    /**
     * This operation deletes the policy set definition in the given management group with the given name.
     * @param policySetDefinitionName The name of the policy set definition to delete.
     * @param managementGroupId The ID of the management group.
     * @param options The options parameters.
     */
    deleteAtManagementGroup(policySetDefinitionName: string, managementGroupId: string, options?: PolicySetDefinitionsDeleteAtManagementGroupOptionalParams): Promise<void>;
    /**
     * This operation retrieves the policy set definition in the given management group with the given
     * name.
     * @param policySetDefinitionName The name of the policy set definition to get.
     * @param managementGroupId The ID of the management group.
     * @param options The options parameters.
     */
    getAtManagementGroup(policySetDefinitionName: string, managementGroupId: string, options?: PolicySetDefinitionsGetAtManagementGroupOptionalParams): Promise<PolicySetDefinitionsGetAtManagementGroupResponse>;
}

/** Optional parameters. */
export declare interface PolicySetDefinitionsCreateOrUpdateAtManagementGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdateAtManagementGroup operation. */
export declare type PolicySetDefinitionsCreateOrUpdateAtManagementGroupResponse = PolicySetDefinition;

/** Optional parameters. */
export declare interface PolicySetDefinitionsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type PolicySetDefinitionsCreateOrUpdateResponse = PolicySetDefinition;

/** Optional parameters. */
export declare interface PolicySetDefinitionsDeleteAtManagementGroupOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface PolicySetDefinitionsDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface PolicySetDefinitionsGetAtManagementGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAtManagementGroup operation. */
export declare type PolicySetDefinitionsGetAtManagementGroupResponse = PolicySetDefinition;

/** Optional parameters. */
export declare interface PolicySetDefinitionsGetBuiltInOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getBuiltIn operation. */
export declare type PolicySetDefinitionsGetBuiltInResponse = PolicySetDefinition;

/** Optional parameters. */
export declare interface PolicySetDefinitionsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type PolicySetDefinitionsGetResponse = PolicySetDefinition;

/** Optional parameters. */
export declare interface PolicySetDefinitionsListBuiltInNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBuiltInNext operation. */
export declare type PolicySetDefinitionsListBuiltInNextResponse = PolicySetDefinitionListResult;

/** Optional parameters. */
export declare interface PolicySetDefinitionsListBuiltInOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBuiltIn operation. */
export declare type PolicySetDefinitionsListBuiltInResponse = PolicySetDefinitionListResult;

/** Optional parameters. */
export declare interface PolicySetDefinitionsListByManagementGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByManagementGroupNext operation. */
export declare type PolicySetDefinitionsListByManagementGroupNextResponse = PolicySetDefinitionListResult;

/** Optional parameters. */
export declare interface PolicySetDefinitionsListByManagementGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByManagementGroup operation. */
export declare type PolicySetDefinitionsListByManagementGroupResponse = PolicySetDefinitionListResult;

/** Optional parameters. */
export declare interface PolicySetDefinitionsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type PolicySetDefinitionsListNextResponse = PolicySetDefinitionListResult;

/** Optional parameters. */
export declare interface PolicySetDefinitionsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type PolicySetDefinitionsListResponse = PolicySetDefinitionListResult;

/** The policy sku. This property is optional, obsolete, and will be ignored. */
export declare interface PolicySku {
    /** The name of the policy sku. Possible values are A0 and A1. */
    name: string;
    /** The policy sku tier. Possible values are Free and Standard. */
    tier?: string;
}

/**
 * Defines values for PolicyType. \
 * {@link KnownPolicyType} can be used interchangeably with PolicyType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NotSpecified** \
 * **BuiltIn** \
 * **Custom** \
 * **Static**
 */
export declare type PolicyType = string;

/** Defines values for ResourceIdentityType. */
export declare type ResourceIdentityType = "SystemAssigned" | "None";

export { }
