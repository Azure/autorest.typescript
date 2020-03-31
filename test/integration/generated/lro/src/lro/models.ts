import {
  HttpResponse,
  OperationArguments,
  OperationSpec
} from "@azure/core-http";
import { PollOperationState, PollOperation } from "@azure/core-lro";
import { AbortSignalLike } from "@azure/abort-controller";

export interface BaseResult {
  location?: string;
  azureAsyncOperation?: string;
  provisioningState?: ResourceProvisioningState;
  properties?: {
    provisioningState?: ResourceProvisioningState;
  };
  _response?: HttpResponse & { bodyAsText: string; parsedBody: any };
  [key: string]: any;
}

export type ResourceProvisioningState =
  | "Succeeded"
  | "Failed"
  | "canceled"
  | "Accepted"
  | "Creating"
  | "Created"
  | "Updating"
  | "Updated"
  | "Deleting"
  | "Deleted"
  | "OK"
  | "InProgress";

export interface InitialOperation<TResult extends BaseResult> {
  args: OperationArguments;
  spec: OperationSpec;
  sendOperationRequest: (
    operationArguments: OperationArguments,
    operationSpec: OperationSpec
  ) => Promise<TResult>;
}

export interface LroOperationState<TResult extends BaseResult>
  extends PollOperationState<TResult> {
  initialOperation: InitialOperation<TResult>;
  finalStateBy?: LROFinalStateBy;
  provisioningState?: ResourceProvisioningState;
}

export enum LROFinalStateBy {
  Location = 1,
  AzureAsyncOperation,
  GetResource
}

export type LroOperation<TResult extends BaseResult> = PollOperation<
  LroOperationState<TResult>,
  TResult
>;

export interface LroOptions<TResult extends BaseResult> {
  abortSignal?: AbortSignalLike;
  fireProgress?: (state: LroOperationState<TResult>) => void;
}

export type LroUpdateStrategy<TResult extends BaseResult> = (
  options?: LroOptions<TResult>
) => Promise<LroOperation<TResult>>;
