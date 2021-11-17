# A generated TypeScript SDK samples for @msinternal/arm-package-deploymentscripts-2019-10-preview

These sample programs show how to use the TypeScript client libraries for @msinternal/arm-package-deploymentscripts-2019-10-preview in some common scenarios.

| **File Name**           | **Description**                      |
| ----------------------- | ------------------------------------ |
| [deploymentScriptsCreate.ts][deploymentScriptsCreate] | Creates a deployment script. |  
| [deploymentScriptsCreateMinCreate.ts][deploymentScriptsCreateMinCreate] | Creates a deployment script. |  
| [deploymentScriptsCreateUsingCustomACIName.ts][deploymentScriptsCreateUsingCustomACIName] | Creates a deployment script. |  
| [deploymentScriptsCreateUsingExistingStorageAccount.ts][deploymentScriptsCreateUsingExistingStorageAccount] | Creates a deployment script. |  
| [deploymentScriptsUpdate.ts][deploymentScriptsUpdate] | Updates deployment script tags with specified values. |  
| [deploymentScriptsGet.ts][deploymentScriptsGet] | Gets a deployment script with a given name. |  
| [deploymentScriptsDelete.ts][deploymentScriptsDelete] | Deletes a deployment script. When operation completes, status code 200 returned without content. |  
| [deploymentScriptsListBySubscription.ts][deploymentScriptsListBySubscription] | Lists all deployment scripts for a given subscription. |  
| [deploymentScriptsGetLogs.ts][deploymentScriptsGetLogs] | Gets deployment script logs for a given deployment script name. |  
| [deploymentScriptsGetLogs.ts][deploymentScriptsGetLogs] | Gets deployment script logs for a given deployment script name. |  
| [deploymentScriptsGetLogsWithTail.ts][deploymentScriptsGetLogsWithTail] | Gets deployment script logs for a given deployment script name. |  
| [deploymentScriptsList.ts][deploymentScriptsList] | Lists deployments scripts. |  

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
node dist/deploymentScriptsCreate.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.  

[deploymentScriptsCreate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deploymentScriptsCreate.ts  
[deploymentScriptsCreateMinCreate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deploymentScriptsCreateMinCreate.ts  
[deploymentScriptsCreateUsingCustomACIName]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deploymentScriptsCreateUsingCustomACIName.ts  
[deploymentScriptsCreateUsingExistingStorageAccount]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deploymentScriptsCreateUsingExistingStorageAccount.ts  
[deploymentScriptsUpdate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deploymentScriptsUpdate.ts  
[deploymentScriptsGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deploymentScriptsGet.ts  
[deploymentScriptsDelete]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deploymentScriptsDelete.ts  
[deploymentScriptsListBySubscription]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deploymentScriptsListBySubscription.ts  
[deploymentScriptsGetLogs]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deploymentScriptsGetLogs.ts  
[deploymentScriptsGetLogs]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deploymentScriptsGetLogs.ts  
[deploymentScriptsGetLogsWithTail]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deploymentScriptsGetLogsWithTail.ts  
[deploymentScriptsList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deploymentScriptsList.ts  
[apiref]: https://docs.microsoft.com/javascript/api/@msinternal/arm-package-deploymentscripts-2019-10-preview  
[freesub]: https://azure.microsoft.com/free/  
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main//README.md  
[typescript]: https://www.typescriptlang.org/docs/home.html  
