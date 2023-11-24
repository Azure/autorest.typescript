# Contributing

we have a [interfaces.ts](./src/interfaces.ts) to define the RLCModel And RLCOptions that is export for both Autorest RLC generator and TypeSpec emitters.

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

## Prerequisite

Please follow the **[Prerequisite](../../CONTRIBUTING.md#prerequisites)** part to install the dependencies.

## Add a new feature

If there's a new feature request, Contributors can

1. add properties in RLCModel and RLCOptions in [interfaces.ts](./src/interfaces.ts)
1. add the build logic about how the newly add properties is going to change the generation behavior.

## Testing

We have added unit tests for this lib and you can debug them by following these steps.

#### How to debug an unit test case

- We have set up a debugging profile for unit tests that you can use:
  1. Put breakpoints in your test or source code where you want to pause the execution
  2. Switch to the debugger tab on the left side
  3. Choose the "[RLC-Common] Debug Unit Test" profile from the dropdown menu
  4. Press the "Play" button to start debugging
