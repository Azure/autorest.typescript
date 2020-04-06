import {
  OperationArguments,
  OperationSpec,
  RestResponse,
  HttpMethods
} from "@azure/core-http";
import { PollOperationState, PollOperation } from "@azure/core-lro";

export interface LROResponseInfo {
  initialRequestMethod: HttpMethods;
  isInitialRequest?: boolean;
  azureAsyncOperation?: string;
  operationLocation?: string;
  location?: string;
  provisioningState?: string;
  status?: string;
}

export interface BaseResult extends RestResponse {
  _lroData?: LROResponseInfo;
}

export interface LROOperationStep<TResult extends BaseResult> {
  args: OperationArguments;
  spec: OperationSpec;
  result: TResult;
}

export interface LROOperationState<TResult extends BaseResult>
  extends PollOperationState<TResult> {
  lastOperation: LROOperationStep<TResult>;
  initialOperation: LROOperationStep<TResult>;
  pollingStrategy: LROStrategy<TResult>;
}

export interface LROStrategy<TResult extends BaseResult> {
  isTerminal: () => boolean;
  sendFinalRequest: () => Promise<LROOperationStep<TResult>>;
  poll: () => Promise<LROOperationStep<TResult>>;
}

export type LROOperation<TResult extends BaseResult> = PollOperation<
  LROOperationState<TResult>,
  TResult
>;
