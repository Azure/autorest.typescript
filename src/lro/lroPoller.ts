import { Poller } from "@azure/core-lro";
import { OperationSpec, OperationArguments, delay } from "@azure/core-http";
import { BaseResult, LROOperationState } from "./models";
import { makeOperation } from "./operation";

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
  sendOperation: (
    args: OperationArguments,
    spec: OperationSpec
  ) => Promise<TResult>;
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
    const state: LROOperationState<TResult> = {
      // Initial operation will become the last operation
      lastOperation: {
        args: initialOperationArguments,
        spec: initialOperationSpec,
        result: initialOperationResult
      },
      sendOperation
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
