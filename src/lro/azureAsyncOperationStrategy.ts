import {
  LROStrategy,
  BaseResult,
  LROOperationStep,
  LROResponseInfo,
  FinalStateVia
} from "./models";
import { OperationSpec, OperationArguments } from "@azure/core-http";
import { terminalStates } from "./constants";
import { SendOperationFn, shouldDeserializeLRO } from ".";

export function createAzureAsyncOperationStrategy<TResult extends BaseResult>(
  initialOperation: LROOperationStep<TResult>,
  sendOperationFn: SendOperationFn<TResult>,
  finalStateVia?: FinalStateVia
): LROStrategy<TResult> {
  const lroData = initialOperation.result._lroData;
  if (!lroData) {
    throw new Error(
      "Expected lroData to be defined for Azure-AsyncOperation strategy"
    );
  }

  let operationArgs = getOperationArguments(initialOperation);
  let pollCount = 0;
  let lastKnownPollingUrl =
    lroData.azureAsyncOperation || lroData.operationLocation;

  return {
    isTerminal: (currentResult: LROResponseInfo) => {
      if (!initialOperation.result._lroData) {
        throw new Error("Expected lroData to determine terminal status");
      }

      if (pollCount === 0) {
        // Azure-AsyncOperations don't need to check for terminal state
        // on originalOperation result, always need to poll
        return false;
      }

      const { status = "succeeded" } = currentResult;
      return terminalStates.includes(status.toLowerCase());
    },
    sendFinalRequest: async (currentOperation: LROOperationStep<TResult>) => {
      if (!initialOperation.result._lroData) {
        throw new Error("Expected lroData to determine terminal status");
      }

      if (!currentOperation.result._lroData) {
        throw new Error("Expected lroData to determine terminal status");
      }

      const initialOperationResult = initialOperation.result._lroData;
      const currentOperationResult = currentOperation.result._lroData;

      if (
        !shouldPerformFinalGet(initialOperationResult, currentOperationResult)
      ) {
        return currentOperation;
      }

      if (initialOperationResult.initialRequestMethod === "PUT") {
        return await sendFinalGet(initialOperation, sendOperationFn);
      }

      if (initialOperationResult.location) {
        switch (finalStateVia) {
          case "original-uri":
            return await sendFinalGet(initialOperation, sendOperationFn);

          case "azure-async-operation":
            return currentOperation;
          case "location":
          default:
            const location =
              initialOperationResult.location ||
              currentOperationResult.location;

            if (!location) {
              throw new Error("Couldn't determine final GET URL from location");
            }

            return await sendFinalGet(
              initialOperation,
              sendOperationFn,
              location
            );
        }
      }

      // All other cases return the last operation
      return currentOperation;
    },
    poll: async (currentOperation: LROOperationStep<TResult>) => {
      if (!lastKnownPollingUrl) {
        throw new Error("Unable to determine polling url");
      }

      const pollingArgs = currentOperation.args;
      // Make sure we don't send any body to the get request
      const { requestBody, ...restSpec } = currentOperation.spec;
      const pollingSpec: OperationSpec = {
        ...restSpec,
        httpMethod: "GET",
        path: lastKnownPollingUrl
      };

      // Execute the polling operation
      pollCount += 1;

      const result = await sendOperationFn(pollingArgs, pollingSpec);

      // Update latest polling url
      lastKnownPollingUrl =
        result.azureAsyncOperation ||
        result.operationLocation ||
        lastKnownPollingUrl;

      // Update lastOperation result
      return {
        args: pollingArgs,
        spec: pollingSpec,
        result
      };
    }
  };
}

function getOperationArguments<TResult extends BaseResult>(
  initialOperation: LROOperationStep<TResult>
): OperationArguments {
  if (!initialOperation.result._lroData) {
    throw new Error(
      "Expected lroData to be defined for Azure-AsyncOperation strategy"
    );
  }

  let operationArgs: OperationArguments;
  const shouldDeserialize = shouldDeserializeLRO(
    initialOperation.result._lroData
  );

  if (!initialOperation.args) {
    operationArgs = { options: { shouldDeserialize } };
  } else {
    operationArgs = {
      ...initialOperation.args,
      options: {
        ...initialOperation.args.options,
        shouldDeserialize
      }
    };
  }
  return operationArgs;
}

function shouldPerformFinalGet(
  initialResult: LROResponseInfo,
  currentResult: LROResponseInfo
) {
  const { status } = currentResult;
  const { initialRequestMethod, location } = initialResult;
  if (status && status.toLowerCase() !== "succeeded") {
    return false;
  }

  if (initialRequestMethod === "DELETE") {
    return false;
  }

  if (initialRequestMethod !== "PUT" && !location) {
    return false;
  }

  return true;
}

async function sendFinalGet<TResult extends BaseResult>(
  initialOperation: LROOperationStep<TResult>,
  sendOperationFn: SendOperationFn<TResult>,
  path?: string
): Promise<LROOperationStep<TResult>> {
  // Make sure we don't send any body to the get request
  const { requestBody, ...restSpec } = initialOperation.spec;
  const finalGetSpec: OperationSpec = {
    ...restSpec,
    httpMethod: "GET"
  };

  // Send final GET request to the Original URL
  const spec = {
    ...finalGetSpec,
    ...(path && { path })
  };

  const finalResult = await sendOperationFn(initialOperation.args, spec);

  return {
    args: initialOperation.args,
    spec,
    result: finalResult
  };
}
