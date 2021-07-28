import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PolicySetDefinitions } from "../operationsInterfaces";
import { PolicyClientContext } from "../policyClientContext";
import { PolicySetDefinition, PolicySetDefinitionsListOptionalParams, PolicySetDefinitionsListBuiltInOptionalParams, PolicySetDefinitionsListByManagementGroupOptionalParams, PolicySetDefinitionsCreateOrUpdateOptionalParams, PolicySetDefinitionsCreateOrUpdateResponse, PolicySetDefinitionsDeleteOptionalParams, PolicySetDefinitionsGetOptionalParams, PolicySetDefinitionsGetResponse, PolicySetDefinitionsGetBuiltInOptionalParams, PolicySetDefinitionsGetBuiltInResponse, PolicySetDefinitionsCreateOrUpdateAtManagementGroupOptionalParams, PolicySetDefinitionsCreateOrUpdateAtManagementGroupResponse, PolicySetDefinitionsDeleteAtManagementGroupOptionalParams, PolicySetDefinitionsGetAtManagementGroupOptionalParams, PolicySetDefinitionsGetAtManagementGroupResponse } from "../models";
/** Class representing a PolicySetDefinitions. */
export declare class PolicySetDefinitionsImpl implements PolicySetDefinitions {
    private readonly client;
    /**
     * Initialize a new instance of the class PolicySetDefinitions class.
     * @param client Reference to the service client
     */
    constructor(client: PolicyClientContext);
    /**
     * This operation retrieves a list of all the policy set definitions in the given subscription.
     * @param options The options parameters.
     */
    list(options?: PolicySetDefinitionsListOptionalParams): PagedAsyncIterableIterator<PolicySetDefinition>;
    private listPagingPage;
    private listPagingAll;
    /**
     * This operation retrieves a list of all the built-in policy set definitions.
     * @param options The options parameters.
     */
    listBuiltIn(options?: PolicySetDefinitionsListBuiltInOptionalParams): PagedAsyncIterableIterator<PolicySetDefinition>;
    private listBuiltInPagingPage;
    private listBuiltInPagingAll;
    /**
     * This operation retrieves a list of all the a policy set definition in the given management group.
     * @param managementGroupId The ID of the management group.
     * @param options The options parameters.
     */
    listByManagementGroup(managementGroupId: string, options?: PolicySetDefinitionsListByManagementGroupOptionalParams): PagedAsyncIterableIterator<PolicySetDefinition>;
    private listByManagementGroupPagingPage;
    private listByManagementGroupPagingAll;
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
     * This operation retrieves a list of all the policy set definitions in the given subscription.
     * @param options The options parameters.
     */
    private _list;
    /**
     * This operation retrieves a list of all the built-in policy set definitions.
     * @param options The options parameters.
     */
    private _listBuiltIn;
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
    /**
     * This operation retrieves a list of all the a policy set definition in the given management group.
     * @param managementGroupId The ID of the management group.
     * @param options The options parameters.
     */
    private _listByManagementGroup;
    /**
     * ListNext
     * @param nextLink The nextLink from the previous successful call to the List method.
     * @param options The options parameters.
     */
    private _listNext;
    /**
     * ListBuiltInNext
     * @param nextLink The nextLink from the previous successful call to the ListBuiltIn method.
     * @param options The options parameters.
     */
    private _listBuiltInNext;
    /**
     * ListByManagementGroupNext
     * @param managementGroupId The ID of the management group.
     * @param nextLink The nextLink from the previous successful call to the ListByManagementGroup method.
     * @param options The options parameters.
     */
    private _listByManagementGroupNext;
}
//# sourceMappingURL=policySetDefinitions.d.ts.map