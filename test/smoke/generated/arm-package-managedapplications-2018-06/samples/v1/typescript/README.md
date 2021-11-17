# A generated TypeScript SDK samples for @msinternal/arm-package-managedapplications-2018-06

These sample programs show how to use the TypeScript client libraries for @msinternal/arm-package-managedapplications-2018-06 in some common scenarios.

| **File Name**           | **Description**                      |
| ----------------------- | ------------------------------------ |
| [getAManagedApplication.ts][getAManagedApplication] | Gets the managed application. |  
| [createOrUpdateManagedApplication.ts][createOrUpdateManagedApplication] | Creates a new managed application. |  
| [listsApplications.ts][listsApplications] | Gets all the applications within a resource group. |  
| [getManagedApplicationDefinition.ts][getManagedApplicationDefinition] | Gets the managed application definition. |  
| [createOrUpdateManagedApplicationDefinition.ts][createOrUpdateManagedApplicationDefinition] | Creates a new managed application definition. |  
| [listManagedApplicationDefinitions.ts][listManagedApplicationDefinitions] | Lists the managed application definitions in a resource group. |  

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
node dist/getAManagedApplication.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.  

[getAManagedApplication]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAManagedApplication.ts  
[createOrUpdateManagedApplication]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateManagedApplication.ts  
[listsApplications]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listsApplications.ts  
[getManagedApplicationDefinition]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getManagedApplicationDefinition.ts  
[createOrUpdateManagedApplicationDefinition]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateManagedApplicationDefinition.ts  
[listManagedApplicationDefinitions]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listManagedApplicationDefinitions.ts  
[apiref]: https://docs.microsoft.com/javascript/api/@msinternal/arm-package-managedapplications-2018-06  
[freesub]: https://azure.microsoft.com/free/  
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main//README.md  
[typescript]: https://www.typescriptlang.org/docs/home.html  
