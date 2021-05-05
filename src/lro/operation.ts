import { AbortSignalLike } from "@azure/abort-controller";
import { OperationArguments, OperationSpec } from "@azure/core-http";
import { PollOperation, PollOperationState } from "@azure/core-lro";
import { createAzureAsyncOperationStrategy } from "./azureAsyncOperationStrategy";
import { createBodyPollingStrategy } from "./bodyPollingStrategy";
import { createLocationStrategy } from "./locationStrategy";
import {
  BaseResult,
  FinalStateVia,
  LROConfig,
  LROResult,
  SendOperationFn
} from "./models";
import { createPassthroughStrategy } from "./passthroughStrategy";
import {
  createPollOnce,
  getPollingURL,
  createRetrieveAzureAsyncResource,
  inferLROMode,
  isBodyPollingDone,
  getSpecPath
} from "./requestUtils";

/**
 * This function determines which strategy to use based on the response from
 * the last operation executed, this last operation can be an initial operation
 * or a polling operation. The 3 possible strategies are described below:
 *
 * A) Azure-AsyncOperation
 * B) Location or Operation-Location
 * C) BodyPolling (provisioningState)
 *  - This strategy is used when:
 *    - Response doesn't contain any of the following headers Location, Azure-AsyncOperation or Operation-Location
 *    - Last operation method is PUT
 */
function createPollingMethod<TResult extends BaseResult>(
  sendOperationFn: SendOperationFn<TResult>,
  args: OperationArguments,
  spec: OperationSpec,
  config: LROConfig,
  finalStateVia?: FinalStateVia
): (pollingURL: string) => Promise<LROResult<TResult>> {
  const pollOnce = createPollOnce(sendOperationFn, args, spec, config.mode);
  switch (config.mode) {
    case "AzureAsync": {
      return createAzureAsyncOperationStrategy(
        pollOnce,
        createRetrieveAzureAsyncResource(sendOperationFn, args, spec),
        config.resourceLocation,
        finalStateVia
      );
    }
    case "Location": {
      return createLocationStrategy(pollOnce);
    }
    case "Body": {
      return createBodyPollingStrategy(pollOnce);
    }
  }
  return createPassthroughStrategy(pollOnce);
}

export class GenericPollOperation<TResult extends BaseResult>
  implements PollOperation<PollOperationState<TResult>, TResult> {
  private poll?: (pollingURL: string) => Promise<LROResult<TResult>>;
  private pollingURL?: string;
  private config?: LROConfig;
  constructor(
    public state: PollOperationState<TResult>,
    private initialOperationArguments: OperationArguments,
    private initialOperationSpec: OperationSpec,
    private sendOperation: SendOperationFn<TResult>,
    private finalStateVia?: FinalStateVia
  ) {}

  /**
   * General update function for LROPoller, the general process is as follows
   * 1. Check initial operation result to determine the strategy to use
   *  - Strategies: Location, Azure-AsyncOperation, Original Uri
   * 2. Check if the operation result has a terminal state
   *  - Terminal state will be determined by each strategy
   *  2.1 If it is terminal state Check if a final GET request is required, if so
   *      send final GET request and return result from operation. If no final GET
   *      is required, just return the result from operation.
   *      - Determining what to call for final request is responsibility of each strategy
   *  2.2 If it is not terminal state, call the polling operation call it and go to step 1
   *      - Determining what to call for polling is responsibility of each strategy
   *      - Strategies will always use the latest URI for polling if provided otherwise
   *        the last known one
   */
  async update(options?: {
    abortSignal?: AbortSignalLike | undefined;
    fireProgress?: ((state: PollOperationState<TResult>) => void) | undefined;
  }): Promise<PollOperation<PollOperationState<TResult>, TResult>> {
    const state = this.state as PollOperationState<TResult> & {
      initialRawResponse: TResult;
    };
    if (!state.isStarted) {
      state.initialRawResponse = await this.sendOperation(
        this.initialOperationArguments,
        this.initialOperationSpec
      );
      state.isStarted = true;
      this.pollingURL = getPollingURL(
        state.initialRawResponse,
        getSpecPath(this.initialOperationSpec)
      );
      this.config = inferLROMode(
        this.initialOperationSpec,
        state.initialRawResponse
      );
      /** short circuit polling if body polling is done in the initial request */
      if (
        this.config.mode === undefined ||
        (this.config.mode === "Body" &&
          isBodyPollingDone(state.initialRawResponse))
      ) {
        state.result = state.initialRawResponse;
        state.isCompleted = true;
      }
    }

    if (!state.isCompleted) {
      if (this.pollingURL === undefined) {
        if (state.initialRawResponse === undefined) {
          throw new Error(
            "Bad state: initial raw response could not be found!"
          );
        }
        this.pollingURL = getPollingURL(
          state.initialRawResponse!,
          getSpecPath(this.initialOperationSpec)
        );
      }
      if (this.poll === undefined) {
        if (this.config === undefined) {
          if (state.initialRawResponse === undefined) {
            throw new Error(
              "Bad state: initial raw response could not be found!"
            );
          }
          this.config = inferLROMode(
            this.initialOperationSpec,
            state.initialRawResponse
          );
        }
        this.poll = await createPollingMethod(
          this.sendOperation,
          this.initialOperationArguments,
          this.initialOperationSpec,
          this.config,
          this.finalStateVia
        );
      }
      const { result, done } = await this.poll(this.pollingURL);
      if (done) {
        state.result = result;
        state.isCompleted = true;
      }
      this.pollingURL = getPollingURL(result, this.pollingURL);
    }
    if (options?.fireProgress !== undefined) {
      options.fireProgress(state);
    }
    return this;
  }

  async cancel(): Promise<PollOperation<PollOperationState<TResult>, TResult>> {
    this.state.isCancelled = true;
    return this;
  }

  /**
   * Serializes the Poller operation.
   */
  public toString(): string {
    return JSON.stringify({
      state: this.state
    });
  }
}
