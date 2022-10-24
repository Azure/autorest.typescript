# Introduction

In this library, we abstract the common logic for RLC generation from both swaggers and cadl. 

we have a [interfaces.ts](./src/interfaces.ts) to define the RLCModel And RLCOptions that is export for both Autorest RLC generator and Cadl emitters.  

The generated Typescript/Javascript Rest Level Client has the following structure:  

1. Client (Handled by [buildClient.ts](./src/buildClient.ts))
1. Client Definition (Handled by [buildClientDefinitions.ts](./src/buildClientDefinitions.ts))
1. Index File (Handled by [buildIndexFile.ts](./src/buildIndexFile.ts))
1. isUnexpectedHelper (Handled by [buildIsUnexpectedHelper.ts](./src/buildIsUnexpectedHelper.ts)) pollingHelper (Handled by [buildPollingHelper.ts](./src/buildPollingHelper.ts)) paginateHelper (Handled by [buildPaginateHelper.ts](./src/buildPaginateHelper.ts))
1. Models (Handled by [buildObjectTypes.ts](./src/buildObjectTypes.ts) and [buildSchemaType.ts](./src/buildSchemaType.ts))
1. Parameters (Handled by [buildParameterTypes.ts](./src/buildParameterTypes.ts))
1. Responses (Handled by [buildResponseTypes.ts](./src/buildResponseTypes.ts))
1. Parameters (Handled by [parametersGenerator.ts](./src/generators/parametersGenerator.ts))
1. Metadata (Handled [here](./src/metadata/*))

If there's a new feature request, Contributors can add properties in RLCModel and RLCOptions and then add the build logic like other files to generate the type.

We don't have tests in this library as it is invoked by autorest.typescript and cadl-typescript, adding tests in those two libraries directly if you want to test a feature.   