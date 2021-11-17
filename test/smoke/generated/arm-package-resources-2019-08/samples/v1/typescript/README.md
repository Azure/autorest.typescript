# A generated TypeScript SDK samples for @msinternal/arm-package-resources-2019-08

These sample programs show how to use the TypeScript client libraries for @msinternal/arm-package-resources-2019-08 in some common scenarios.

| **File Name**           | **Description**                      |
| ----------------------- | ------------------------------------ |
| [createDeploymentAtAGivenScope.ts][createDeploymentAtAGivenScope] | You can provide the template and parameters directly in the request or link to JSON files. |  
| [createDeploymentAtTenantScope.ts][createDeploymentAtTenantScope] | You can provide the template and parameters directly in the request or link to JSON files. |  
| [createDeploymentAtManagementGroupScope.ts][createDeploymentAtManagementGroupScope] | You can provide the template and parameters directly in the request or link to JSON files. |  
| [predictTemplateChangesAtSubscriptionScope.ts][predictTemplateChangesAtSubscriptionScope] | Returns changes that will be made by the deployment if executed at the scope of the subscription. |  
| [createADeploymentThatWillRedeployAnotherDeploymentOnFailure.ts][createADeploymentThatWillRedeployAnotherDeploymentOnFailure] | You can provide the template and parameters directly in the request or link to JSON files. |  
| [createADeploymentThatWillRedeployTheLastSuccessfulDeploymentOnFailure.ts][createADeploymentThatWillRedeployTheLastSuccessfulDeploymentOnFailure] | You can provide the template and parameters directly in the request or link to JSON files. |  
| [predictTemplateChangesAtResourceGroupScope.ts][predictTemplateChangesAtResourceGroupScope] | Returns changes that will be made by the deployment if executed at the scope of the resource group. |  
| [calculateTemplateHash.ts][calculateTemplateHash] | Calculate the hash of the given template. |  
| [createOrUpdateAResourceGroup.ts][createOrUpdateAResourceGroup] | Creates or updates a resource group. |  
| [exportAResourceGroup.ts][exportAResourceGroup] | Captures the specified resource group as a template. |  
| [exportAResourceGroupWithFiltering.ts][exportAResourceGroupWithFiltering] | Captures the specified resource group as a template. |  

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
node dist/createDeploymentAtAGivenScope.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.  

[createDeploymentAtAGivenScope]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createDeploymentAtAGivenScope.ts  
[createDeploymentAtTenantScope]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createDeploymentAtTenantScope.ts  
[createDeploymentAtManagementGroupScope]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createDeploymentAtManagementGroupScope.ts  
[predictTemplateChangesAtSubscriptionScope]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/predictTemplateChangesAtSubscriptionScope.ts  
[createADeploymentThatWillRedeployAnotherDeploymentOnFailure]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createADeploymentThatWillRedeployAnotherDeploymentOnFailure.ts  
[createADeploymentThatWillRedeployTheLastSuccessfulDeploymentOnFailure]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createADeploymentThatWillRedeployTheLastSuccessfulDeploymentOnFailure.ts  
[predictTemplateChangesAtResourceGroupScope]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/predictTemplateChangesAtResourceGroupScope.ts  
[calculateTemplateHash]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/calculateTemplateHash.ts  
[createOrUpdateAResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateAResourceGroup.ts  
[exportAResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/exportAResourceGroup.ts  
[exportAResourceGroupWithFiltering]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/exportAResourceGroupWithFiltering.ts  
[apiref]: https://docs.microsoft.com/javascript/api/@msinternal/arm-package-resources-2019-08  
[freesub]: https://azure.microsoft.com/free/  
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main//README.md  
[typescript]: https://www.typescriptlang.org/docs/home.html  
