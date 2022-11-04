import {
  UsageInputParameters,
  UsageOutputParameters,
  UsageInputAndOutputParameters,
} from "./parameters";
import {
  UsageInput204Response,
  UsageOutput200Response,
  UsageInputAndOutput200Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Input {
  post(options: UsageInputParameters): StreamableMethod<UsageInput204Response>;
}

export interface Output {
  get(
    options?: UsageOutputParameters
  ): StreamableMethod<UsageOutput200Response>;
}

export interface InputAndOutput {
  post(
    options: UsageInputAndOutputParameters
  ): StreamableMethod<UsageInputAndOutput200Response>;
}

export interface Routes {
  /** Resource for '/models/usage/input' has methods for the following verbs: post */
  (path: "/models/usage/input"): Input;
  /** Resource for '/models/usage/output' has methods for the following verbs: get */
  (path: "/models/usage/output"): Output;
  /** Resource for '/models/usage/input-output' has methods for the following verbs: post */
  (path: "/models/usage/input-output"): InputAndOutput;
}

export type ModelsUsageClient = Client & {
  path: Routes;
};
