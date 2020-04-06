import { Poller, PollOperationState } from "@azure/core-lro";
import {
  OperationSpec,
  OperationArguments,
  delay,
  HttpMethods
} from "@azure/core-http";
import {
  BaseResult,
  LROOperationState,
  LROStrategy,
  LROOperationStep
} from "./models";
import { makeOperation } from "./operation";
import { createBodyPollingStrategy } from "./bodyPollingStrategy";

export type SendOperationFn<TResult extends BaseResult> = (
  args: OperationArguments,
  spec: OperationSpec
) => Promise<TResult>;

export interface LROPollerOptions<TResult extends BaseResult> {
  /**
   * Defines how much time the poller is going to wait before making a new request to the service.
   */
  intervalInMs?: number;
  /**
   * Arguments used to send the initial operation
   */
  initialOperationArguments: OperationArguments;
  /**
   * Operation spec provided for the initial operation
   */
  initialOperationSpec: OperationSpec;
  /**
   * Result from the initial operation
   */
  initialOperationResult: TResult;
  /**
   * Function to execute an operation based on an operation spec and arguments
   */
  sendOperation: SendOperationFn<TResult>;
}

export class LROPoller<TResult extends BaseResult> extends Poller<
  LROOperationState<TResult>,
  TResult
> {
  private intervalInMs: number;

  constructor({
    initialOperationArguments,
    initialOperationResult,
    initialOperationSpec,
    sendOperation,
    intervalInMs = 2000
  }: LROPollerOptions<TResult>) {
    const initialOperation = {
      args: initialOperationArguments,
      spec: initialOperationSpec,
      result: initialOperationResult
    };

    const pollingStrategy = getPollingStrategy(initialOperation, sendOperation);

    const state: LROOperationState<TResult> = {
      // Initial operation will become the last operation
      initialOperation,
      lastOperation: initialOperation,
      pollingStrategy
    };

    const operation = makeOperation(state);
    super(operation);

    this.intervalInMs = intervalInMs;
  }

  /**
   * The method used by the poller to wait before attempting to update its operation.
   */
  delay(): Promise<void> {
    return delay(this.intervalInMs);
  }
}

/**
 * This function determines which strategy to use based on the response from
 * the last operation executed, this last operation can be an initial operation
 * or a polling operation. The 3 possible strategies are described below:
 *
 * A) Azure-AsyncOperation or Operation-Location
 * B) Location
 * C) BodyPolling (provisioningState)
 *  - This strategy is used when:
 *    - Response doesn't contain any of the following headers Location, Azure-AsyncOperation or Operation-Location
 *    - Last operation method is PUT
 */
function getPollingStrategy<TResult extends BaseResult>(
  initialOperation: LROOperationStep<TResult>,
  sendOperationFn: SendOperationFn<TResult>
) {
  const {
    result: { _lroData: lroData }
  } = initialOperation;

  if (!lroData) {
    throw new Error(
      "Expected lroData to be present for PollingStrategy discovery"
    );
  }

  if (lroData.azureAsyncOperation || lroData.operationLocation) {
    throw new Error("Azure-AsyncOperation strategy is not yet implemented");
  }

  if (lroData.location) {
    throw new Error("Location strategy is not yet implemented");
  }

  if (["PUT", "PATCH"].includes(lroData.initialRequestMethod || "")) {
    return createBodyPollingStrategy(initialOperation, sendOperationFn);
  }

  throw new Error("Unknown Long Running Operation strategy");
}
