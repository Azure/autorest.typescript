import {
  OperationArguments,
  OperationSpec,
  RestResponse,
  HttpMethods,
  HttpOperationResponse
} from "@azure/core-http";

export type FinalStateVia =
  | "azure-async-operation"
  | "location"
  | "original-uri";

export interface BaseResult extends RestResponse {
  /**
   * The underlying HTTP response containing both raw and deserialized response data.
   */
  _response: HttpOperationResponse;
}

export interface LROResult<TResult extends BaseResult> {
  result: TResult;
  done: boolean;
}

export type LROMode = "AzureAsync" | "Location" | "Body";

export interface LROConfig {
  mode?: LROMode;
  resourceLocation?: string;
}

export type SendOperationFn<TResult extends BaseResult> = (
  args: OperationArguments,
  spec: OperationSpec
) => Promise<TResult>;
