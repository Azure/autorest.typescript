import { LROStrategy, BaseResult, LROOperationStep } from "./models";
import { OperationSpec, OperationArguments } from "@azure/core-http";
import { terminalStates } from "./constants";
import { SendOperationFn } from "./lroPoller";
import { shouldDeserializeLRO } from "./requestUtils";

/**
 * Creates a polling strategy based on BodyPolling which uses the provisioning state
 * from the result to determine the current operation state
 */
export function createBodyPollingStrategy<TResult extends BaseResult>(
  initialOperation: LROOperationStep<TResult>,
  sendOperation: SendOperationFn<TResult>
): LROStrategy<TResult> {
  if (!initialOperation.result._lroData) {
    throw new Error("Expected lroData to be defined for BodyPolling strategy");
  }
  let operationArgs: OperationArguments;

  const shouldDeserialize = shouldDeserializeLRO(
    initialOperation.result._lroData
  );

  if (!initialOperation.args) {
    operationArgs = { options: { shouldDeserialize: shouldDeserialize } };
  } else {
    operationArgs = {
      ...initialOperation.args,
      options: {
        ...initialOperation.args.options,
        shouldDeserialize: shouldDeserialize
      }
    };
  }

  return {
    isTerminal: () => {
      if (!initialOperation.result._lroData) {
        throw new Error("Expected lroData to determine terminal status");
      }

      const {
        provisioningState = "succeeded"
      } = initialOperation.result._lroData;
      // If provisioning state is missing, default to Success

      return terminalStates.includes(provisioningState.toLowerCase());
    },
    sendFinalRequest: () => {
      // BodyPolling doesn't require a final get so return the lastOperation
      return Promise.resolve(initialOperation);
    },
    poll: async () => {
      // When doing BodyPolling, we need to poll to the original url with a
      // GET http method
      const pollingSpec: OperationSpec = {
        ...initialOperation.spec,
        httpMethod: "GET"
      };

      // Execute the polling operation
      const result = await sendOperation(operationArgs, pollingSpec);

      // Update lastOperation result
      initialOperation.result = result;
      return initialOperation;
    }
  };
}
