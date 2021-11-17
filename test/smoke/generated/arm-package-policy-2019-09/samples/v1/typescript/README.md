# A generated TypeScript SDK samples for @msinternal/arm-package-policy-2019-09

These sample programs show how to use the TypeScript client libraries for @msinternal/arm-package-policy-2019-09 in some common scenarios.

| **File Name**           | **Description**                      |
| ----------------------- | ------------------------------------ |
| [deleteAPolicyAssignment.ts][deleteAPolicyAssignment] | This operation deletes a policy assignment, given its name and the scope it was created in. The scope of a policy assignment is the part of its ID preceding '/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}'. |  
| [createOrUpdateAPolicyAssignment.ts][createOrUpdateAPolicyAssignment] |  This operation creates or updates a policy assignment with the given scope and name. Policy assignments apply to all resources contained within their scope. For example, when you assign a policy at resource group scope, that policy applies to all resources in the group. |  
| [createOrUpdateAPolicyAssignmentWithAManagedIdentity.ts][createOrUpdateAPolicyAssignmentWithAManagedIdentity] |  This operation creates or updates a policy assignment with the given scope and name. Policy assignments apply to all resources contained within their scope. For example, when you assign a policy at resource group scope, that policy applies to all resources in the group. |  
| [createOrUpdateAPolicyAssignmentWithoutEnforcingPolicyEffectDuringResourceCreationOrUpdate.ts][createOrUpdateAPolicyAssignmentWithoutEnforcingPolicyEffectDuringResourceCreationOrUpdate] |  This operation creates or updates a policy assignment with the given scope and name. Policy assignments apply to all resources contained within their scope. For example, when you assign a policy at resource group scope, that policy applies to all resources in the group. |  
| [retrieveAPolicyAssignment.ts][retrieveAPolicyAssignment] | This operation retrieves a single policy assignment, given its name and the scope it was created at. |  
| [retrieveAPolicyAssignmentWithAManagedIdentity.ts][retrieveAPolicyAssignmentWithAManagedIdentity] | This operation retrieves a single policy assignment, given its name and the scope it was created at. |  
| [listPolicyAssignmentsThatApplyToAResourceGroup.ts][listPolicyAssignmentsThatApplyToAResourceGroup] | This operation retrieves the list of all policy assignments associated with the given resource group in the given subscription that match the optional given $filter. Valid values for $filter are: 'atScope()' or 'policyDefinitionId eq '{value}''. If $filter is not provided, the unfiltered list includes all policy assignments associated with the resource group, including those that apply directly or apply from containing scopes, as well as any applied to resources contained within the resource group. If $filter=atScope() is provided, the returned list includes all policy assignments that apply to the resource group, which is everything in the unfiltered list except those applied to resources contained within the resource group. If $filter=policyDefinitionId eq '{value}' is provided, the returned list includes all policy assignments of the policy definition whose id is {value} that apply to the resource group. |  
| [listAllPolicyAssignmentsThatApplyToAResource.ts][listAllPolicyAssignmentsThatApplyToAResource] | This operation retrieves the list of all policy assignments associated with the specified resource in the given resource group and subscription that match the optional given $filter. Valid values for $filter are: 'atScope()' or 'policyDefinitionId eq '{value}''. If $filter is not provided, the unfiltered list includes all policy assignments associated with the resource, including those that apply directly or from all containing scopes, as well as any applied to resources contained within the resource. If $filter=atScope() is provided, the returned list includes all policy assignments that apply to the resource, which is everything in the unfiltered list except those applied to resources contained within the resource. If $filter=policyDefinitionId eq '{value}' is provided, the returned list includes all policy assignments of the policy definition whose id is {value} that apply to the resource. Three parameters plus the resource name are used to identify a specific resource. If the resource is not part of a parent resource (the more common case), the parent resource path should not be provided (or provided as ''). For example a web app could be specified as ({resourceProviderNamespace} == 'Microsoft.Web', {parentResourcePath} == '', {resourceType} == 'sites', {resourceName} == 'MyWebApp'). If the resource is part of a parent resource, then all parameters should be provided. For example a virtual machine DNS name could be specified as ({resourceProviderNamespace} == 'Microsoft.Compute', {parentResourcePath} == 'virtualMachines/MyVirtualMachine', {resourceType} == 'domainNames', {resourceName} == 'MyComputerName'). A convenient alternative to providing the namespace and type name separately is to provide both in the {resourceType} parameter, format: ({resourceProviderNamespace} == '', {parentResourcePath} == '', {resourceType} == 'Microsoft.Web/sites', {resourceName} == 'MyWebApp'). |  
| [listPolicyAssignmentsThatApplyToAManagementGroup.ts][listPolicyAssignmentsThatApplyToAManagementGroup] | This operation retrieves the list of all policy assignments applicable to the management group that match the given $filter. Valid values for $filter are: 'atScope()' or 'policyDefinitionId eq '{value}''. If $filter=atScope() is provided, the returned list includes all policy assignments that are assigned to the management group or the management group's ancestors. If $filter=policyDefinitionId eq '{value}' is provided, the returned list includes all policy assignments of the policy definition whose id is {value} that apply to the management group. |  
| [listPolicyAssignmentsThatApplyToASubscription.ts][listPolicyAssignmentsThatApplyToASubscription] | This operation retrieves the list of all policy assignments associated with the given subscription that match the optional given $filter. Valid values for $filter are: 'atScope()' or 'policyDefinitionId eq '{value}''. If $filter is not provided, the unfiltered list includes all policy assignments associated with the subscription, including those that apply directly or from management groups that contain the given subscription, as well as any applied to objects contained within the subscription. If $filter=atScope() is provided, the returned list includes all policy assignments that apply to the subscription, which is everything in the unfiltered list except those applied to objects contained within the subscription. If $filter=policyDefinitionId eq '{value}' is provided, the returned list includes all policy assignments of the policy definition whose id is {value}. |  
| [deleteAPolicyAssignmentById.ts][deleteAPolicyAssignmentById] | This operation deletes the policy with the given ID. Policy assignment IDs have this format: '{scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}'. Valid formats for {scope} are: '/providers/Microsoft.Management/managementGroups/{managementGroup}' (management group), '/subscriptions/{subscriptionId}' (subscription), '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' (resource group), or '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}' (resource). |  
| [createOrUpdatePolicyAssignmentById.ts][createOrUpdatePolicyAssignmentById] | This operation creates or updates the policy assignment with the given ID. Policy assignments made on a scope apply to all resources contained in that scope. For example, when you assign a policy to a resource group that policy applies to all resources in the group. Policy assignment IDs have this format: '{scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}'. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'. |  
| [createOrUpdatePolicyAssignmentWithAManagedIdentityById.ts][createOrUpdatePolicyAssignmentWithAManagedIdentityById] | This operation creates or updates the policy assignment with the given ID. Policy assignments made on a scope apply to all resources contained in that scope. For example, when you assign a policy to a resource group that policy applies to all resources in the group. Policy assignment IDs have this format: '{scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}'. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'. |  
| [retrieveAPolicyAssignmentById.ts][retrieveAPolicyAssignmentById] | The operation retrieves the policy assignment with the given ID. Policy assignment IDs have this format: '{scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}'. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'. |  
| [retrieveAPolicyAssignmentWithAManagedIdentityById.ts][retrieveAPolicyAssignmentWithAManagedIdentityById] | The operation retrieves the policy assignment with the given ID. Policy assignment IDs have this format: '{scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}'. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'. |  
| [createOrUpdateAPolicyDefinition.ts][createOrUpdateAPolicyDefinition] | This operation creates or updates a policy definition in the given subscription with the given name. |  
| [createOrUpdateAPolicyDefinitionWithAdvancedParameters.ts][createOrUpdateAPolicyDefinitionWithAdvancedParameters] | This operation creates or updates a policy definition in the given subscription with the given name. |  
| [deleteAPolicyDefinition.ts][deleteAPolicyDefinition] | This operation deletes the policy definition in the given subscription with the given name. |  
| [retrieveAPolicyDefinition.ts][retrieveAPolicyDefinition] | This operation retrieves the policy definition in the given subscription with the given name. |  
| [retrieveABuiltInPolicyDefinition.ts][retrieveABuiltInPolicyDefinition] | This operation retrieves the built-in policy definition with the given name. |  
| [createOrUpdateAPolicyDefinitionAtManagementGroupLevel.ts][createOrUpdateAPolicyDefinitionAtManagementGroupLevel] | This operation creates or updates a policy definition in the given management group with the given name. |  
| [deleteAPolicyDefinitionAtManagementGroupLevel.ts][deleteAPolicyDefinitionAtManagementGroupLevel] | This operation deletes the policy definition in the given management group with the given name. |  
| [retrieveAPolicyDefinitionAtManagementGroupLevel.ts][retrieveAPolicyDefinitionAtManagementGroupLevel] | This operation retrieves the policy definition in the given management group with the given name. |  
| [listPolicyDefinitionsBySubscription.ts][listPolicyDefinitionsBySubscription] | This operation retrieves a list of all the policy definitions in a given subscription. |  
| [listBuiltInPolicyDefinitions.ts][listBuiltInPolicyDefinitions] | This operation retrieves a list of all the built-in policy definitions. |  
| [listPolicyDefinitionsByManagementGroup.ts][listPolicyDefinitionsByManagementGroup] | This operation retrieves a list of all the policy definitions in a given management group. |  
| [createOrUpdateAPolicySetDefinition.ts][createOrUpdateAPolicySetDefinition] | This operation creates or updates a policy set definition in the given subscription with the given name. |  
| [createOrUpdateAPolicySetDefinitionWithGroups.ts][createOrUpdateAPolicySetDefinitionWithGroups] | This operation creates or updates a policy set definition in the given subscription with the given name. |  
| [deleteAPolicySetDefinition.ts][deleteAPolicySetDefinition] | This operation deletes the policy set definition in the given subscription with the given name. |  
| [retrieveAPolicySetDefinition.ts][retrieveAPolicySetDefinition] | This operation retrieves the policy set definition in the given subscription with the given name. |  
| [retrieveABuiltInPolicySetDefinition.ts][retrieveABuiltInPolicySetDefinition] | This operation retrieves the built-in policy set definition with the given name. |  
| [listPolicySetDefinitions.ts][listPolicySetDefinitions] | This operation retrieves a list of all the policy set definitions in the given subscription. |  
| [listBuiltInPolicySetDefinitions.ts][listBuiltInPolicySetDefinitions] | This operation retrieves a list of all the built-in policy set definitions. |  
| [createOrUpdateAPolicySetDefinitionAtManagementGroupLevel.ts][createOrUpdateAPolicySetDefinitionAtManagementGroupLevel] | This operation creates or updates a policy set definition in the given management group with the given name. |  
| [createOrUpdateAPolicySetDefinitionWithGroupsAtManagementGroupLevel.ts][createOrUpdateAPolicySetDefinitionWithGroupsAtManagementGroupLevel] | This operation creates or updates a policy set definition in the given management group with the given name. |  
| [deleteAPolicySetDefinitionAtManagementGroupLevel.ts][deleteAPolicySetDefinitionAtManagementGroupLevel] | This operation deletes the policy set definition in the given management group with the given name. |  
| [retrieveAPolicySetDefinitionAtManagementGroupLevel.ts][retrieveAPolicySetDefinitionAtManagementGroupLevel] | This operation retrieves the policy set definition in the given management group with the given name. |  
| [listPolicySetDefinitionsAtManagementGroupLevel.ts][listPolicySetDefinitionsAtManagementGroupLevel] | This operation retrieves a list of all the a policy set definition in the given management group. |  

## Prerequisites

The sample programs are compatible with [LTS versions of Node.js](https://nodejs.org/about/releases/).

Before running the samples in Node, they must be compiled to JavaScript using the TypeScript compiler. For more information on TypeScript, see the [TypeScript documentation][typescript]. Install the TypeScript compiler using:

```bash
npm install -g typescript
```

You need [an Azure subscription][freesub] to run these sample programs:


Samples retrieve credentials to access the service endpoint from environment variables. Alternatively, edit the source code to include the appropriate credentials. See each individual sample for details on which environment variables/credentials it requires to function.

Adapting the samples to run in the browser may require some additional consideration. For details, please see the [package README][package].

## Setup

To run the samples using the published version of the package:

1. Install the dependencies using `npm`:

```bash
npm install
```

2. Compile the samples:

```bash
npm run build
```

3. Edit the file `sample.env`, adding the correct credentials to access the Azure service and run the samples. Then rename the file from `sample.env` to just `.env`. The sample programs will read this file automatically.

4. Run whichever samples you like (note that some samples may require additional setup, see the table above):

```bash
node dist/deleteAPolicyAssignment.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.  

[deleteAPolicyAssignment]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteAPolicyAssignment.ts  
[createOrUpdateAPolicyAssignment]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateAPolicyAssignment.ts  
[createOrUpdateAPolicyAssignmentWithAManagedIdentity]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateAPolicyAssignmentWithAManagedIdentity.ts  
[createOrUpdateAPolicyAssignmentWithoutEnforcingPolicyEffectDuringResourceCreationOrUpdate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateAPolicyAssignmentWithoutEnforcingPolicyEffectDuringResourceCreationOrUpdate.ts  
[retrieveAPolicyAssignment]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/retrieveAPolicyAssignment.ts  
[retrieveAPolicyAssignmentWithAManagedIdentity]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/retrieveAPolicyAssignmentWithAManagedIdentity.ts  
[listPolicyAssignmentsThatApplyToAResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listPolicyAssignmentsThatApplyToAResourceGroup.ts  
[listAllPolicyAssignmentsThatApplyToAResource]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllPolicyAssignmentsThatApplyToAResource.ts  
[listPolicyAssignmentsThatApplyToAManagementGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listPolicyAssignmentsThatApplyToAManagementGroup.ts  
[listPolicyAssignmentsThatApplyToASubscription]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listPolicyAssignmentsThatApplyToASubscription.ts  
[deleteAPolicyAssignmentById]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteAPolicyAssignmentById.ts  
[createOrUpdatePolicyAssignmentById]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdatePolicyAssignmentById.ts  
[createOrUpdatePolicyAssignmentWithAManagedIdentityById]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdatePolicyAssignmentWithAManagedIdentityById.ts  
[retrieveAPolicyAssignmentById]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/retrieveAPolicyAssignmentById.ts  
[retrieveAPolicyAssignmentWithAManagedIdentityById]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/retrieveAPolicyAssignmentWithAManagedIdentityById.ts  
[createOrUpdateAPolicyDefinition]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateAPolicyDefinition.ts  
[createOrUpdateAPolicyDefinitionWithAdvancedParameters]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateAPolicyDefinitionWithAdvancedParameters.ts  
[deleteAPolicyDefinition]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteAPolicyDefinition.ts  
[retrieveAPolicyDefinition]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/retrieveAPolicyDefinition.ts  
[retrieveABuiltInPolicyDefinition]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/retrieveABuiltInPolicyDefinition.ts  
[createOrUpdateAPolicyDefinitionAtManagementGroupLevel]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateAPolicyDefinitionAtManagementGroupLevel.ts  
[deleteAPolicyDefinitionAtManagementGroupLevel]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteAPolicyDefinitionAtManagementGroupLevel.ts  
[retrieveAPolicyDefinitionAtManagementGroupLevel]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/retrieveAPolicyDefinitionAtManagementGroupLevel.ts  
[listPolicyDefinitionsBySubscription]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listPolicyDefinitionsBySubscription.ts  
[listBuiltInPolicyDefinitions]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listBuiltInPolicyDefinitions.ts  
[listPolicyDefinitionsByManagementGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listPolicyDefinitionsByManagementGroup.ts  
[createOrUpdateAPolicySetDefinition]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateAPolicySetDefinition.ts  
[createOrUpdateAPolicySetDefinitionWithGroups]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateAPolicySetDefinitionWithGroups.ts  
[deleteAPolicySetDefinition]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteAPolicySetDefinition.ts  
[retrieveAPolicySetDefinition]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/retrieveAPolicySetDefinition.ts  
[retrieveABuiltInPolicySetDefinition]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/retrieveABuiltInPolicySetDefinition.ts  
[listPolicySetDefinitions]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listPolicySetDefinitions.ts  
[listBuiltInPolicySetDefinitions]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listBuiltInPolicySetDefinitions.ts  
[createOrUpdateAPolicySetDefinitionAtManagementGroupLevel]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateAPolicySetDefinitionAtManagementGroupLevel.ts  
[createOrUpdateAPolicySetDefinitionWithGroupsAtManagementGroupLevel]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateAPolicySetDefinitionWithGroupsAtManagementGroupLevel.ts  
[deleteAPolicySetDefinitionAtManagementGroupLevel]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteAPolicySetDefinitionAtManagementGroupLevel.ts  
[retrieveAPolicySetDefinitionAtManagementGroupLevel]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/retrieveAPolicySetDefinitionAtManagementGroupLevel.ts  
[listPolicySetDefinitionsAtManagementGroupLevel]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listPolicySetDefinitionsAtManagementGroupLevel.ts  
[apiref]: https://docs.microsoft.com/javascript/api/@msinternal/arm-package-policy-2019-09  
[freesub]: https://azure.microsoft.com/free/  
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main//README.md  
[typescript]: https://www.typescriptlang.org/docs/home.html  
