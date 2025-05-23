/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  PolicyAssignment,
  PolicyAssignmentsListForResourceGroupOptionalParams,
  PolicyAssignmentsListForResourceOptionalParams,
  PolicyAssignmentsListForManagementGroupOptionalParams,
  PolicyAssignmentsListOptionalParams,
  PolicyAssignmentsDeleteOptionalParams,
  PolicyAssignmentsDeleteResponse,
  PolicyAssignmentsCreateOptionalParams,
  PolicyAssignmentsCreateResponse,
  PolicyAssignmentsGetOptionalParams,
  PolicyAssignmentsGetResponse,
  PolicyAssignmentsDeleteByIdOptionalParams,
  PolicyAssignmentsDeleteByIdResponse,
  PolicyAssignmentsCreateByIdOptionalParams,
  PolicyAssignmentsCreateByIdResponse,
  PolicyAssignmentsGetByIdOptionalParams,
  PolicyAssignmentsGetByIdResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PolicyAssignments. */
export interface PolicyAssignments {
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
  listForResourceGroup(
    resourceGroupName: string,
    options?: PolicyAssignmentsListForResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<PolicyAssignment>;
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
  listForResource(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    options?: PolicyAssignmentsListForResourceOptionalParams,
  ): PagedAsyncIterableIterator<PolicyAssignment>;
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
  listForManagementGroup(
    managementGroupId: string,
    filter: string,
    options?: PolicyAssignmentsListForManagementGroupOptionalParams,
  ): PagedAsyncIterableIterator<PolicyAssignment>;
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
  list(
    options?: PolicyAssignmentsListOptionalParams,
  ): PagedAsyncIterableIterator<PolicyAssignment>;
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
  delete(
    scope: string,
    policyAssignmentName: string,
    options?: PolicyAssignmentsDeleteOptionalParams,
  ): Promise<PolicyAssignmentsDeleteResponse>;
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
  create(
    scope: string,
    policyAssignmentName: string,
    parameters: PolicyAssignment,
    options?: PolicyAssignmentsCreateOptionalParams,
  ): Promise<PolicyAssignmentsCreateResponse>;
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
  get(
    scope: string,
    policyAssignmentName: string,
    options?: PolicyAssignmentsGetOptionalParams,
  ): Promise<PolicyAssignmentsGetResponse>;
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
  deleteById(
    policyAssignmentId: string,
    options?: PolicyAssignmentsDeleteByIdOptionalParams,
  ): Promise<PolicyAssignmentsDeleteByIdResponse>;
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
  createById(
    policyAssignmentId: string,
    parameters: PolicyAssignment,
    options?: PolicyAssignmentsCreateByIdOptionalParams,
  ): Promise<PolicyAssignmentsCreateByIdResponse>;
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
  getById(
    policyAssignmentId: string,
    options?: PolicyAssignmentsGetByIdOptionalParams,
  ): Promise<PolicyAssignmentsGetByIdResponse>;
}
