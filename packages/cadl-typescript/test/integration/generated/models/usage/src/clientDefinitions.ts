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
  /** Resource for '/models/usages/input' has methods for the following verbs: post */
  (path: "/models/usages/input"): Input;
  /** Resource for '/models/usages/output' has methods for the following verbs: get */
  (path: "/models/usages/output"): Output;
  /** Resource for '/models/usages/input-output' has methods for the following verbs: post */
  (path: "/models/usages/input-output"): InputAndOutput;
}

export type ModelsUsageClient = Client & {
  path: Routes;
};
