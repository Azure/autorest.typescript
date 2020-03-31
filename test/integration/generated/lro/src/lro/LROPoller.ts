import { Poller } from "@azure/core-lro";
import { OperationSpec, OperationArguments } from "@azure/core-http";
import { makeOperation } from "./operation";
import { BaseResult, LroOperation, LroOperationState } from "./models";

export interface LROPollerOptions<TResult extends BaseResult> {
  initialOperationArguments: OperationArguments;
  initialOperationSpec: OperationSpec;
  sendOperationRequest: (
    operationArguments: OperationArguments,
    operationSpec: OperationSpec
  ) => Promise<TResult>;
  baseOperation?: LroOperation<TResult>;
}

export class LROPoller<TResult extends BaseResult> extends Poller<
  LroOperationState<TResult>,
  TResult
> {
  constructor({
    baseOperation,
    initialOperationArguments,
    initialOperationSpec,
    sendOperationRequest
  }: LROPollerOptions<TResult>) {
    let state: LroOperationState<TResult> = {
      initialOperation: {
        args: initialOperationArguments,
        spec: initialOperationSpec,
        sendOperationRequest
      }
    };

    if (baseOperation) {
      state = baseOperation.state;
    }

    const operation = makeOperation(state);
    super(operation);

    // Handle onProgress
  }

  async delay(): Promise<void> {
    // TODO: implement delay
  }
}
