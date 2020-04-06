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
  location?: string;
  operationLocation?: string;
  azureAsyncOperation?: string;
  provisioningState?: string;
  properties?: {
    provisioningState?: string;
  };
}

export interface LastOperation<TResult extends BaseResult> {
  args: OperationArguments;
  spec: OperationSpec;
  result: TResult;
}

export interface LROOperationState<TResult extends BaseResult>
  extends PollOperationState<TResult> {
  lastOperation: LastOperation<TResult>;
  sendOperation: (
    args: OperationArguments,
    spec: OperationSpec
  ) => Promise<TResult>;
}

export interface LROStrategy<TResult extends BaseResult> {
  isTerminal: () => boolean;
  sendFinalRequest: () => Promise<LastOperation<TResult>>;
  poll: () => Promise<LastOperation<TResult>>;
}

export type LROOperation<TResult extends BaseResult> = PollOperation<
  LROOperationState<TResult>,
  TResult
>;
