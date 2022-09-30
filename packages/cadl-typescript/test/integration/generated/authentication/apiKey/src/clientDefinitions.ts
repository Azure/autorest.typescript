import { ApiKeyValidParameters, ApiKeyInvalidParameters } from "./parameters";
import {
  ApiKeyValid204Response,
  ApiKeyInvalid204Response,
  ApiKeyInvalid403Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for ApiKey operations */
export interface ApiKeyOperations {
  /** Check whether client is authenticated */
  valid(
    options?: ApiKeyValidParameters
  ): StreamableMethod<ApiKeyValid204Response>;
  /** Check whether client is authenticated. */
  invalid(
    options?: ApiKeyInvalidParameters
  ): StreamableMethod<ApiKeyInvalid204Response | ApiKeyInvalid403Response>;
}

export interface Valid {
  /** Check whether client is authenticated */
  get(
    options?: ApiKeyValidParameters
  ): StreamableMethod<ApiKeyValid204Response>;
}

export interface Invalid {
  /** Check whether client is authenticated. */
  get(
    options?: ApiKeyInvalidParameters
  ): StreamableMethod<ApiKeyInvalid204Response | ApiKeyInvalid403Response>;
}

export interface Routes {
  /** Resource for '/authentication/api-key/valid' has methods for the following verbs: get */
  (path: "/authentication/api-key/valid"): Valid;
  /** Resource for '/authentication/api-key/invalid' has methods for the following verbs: get */
  (path: "/authentication/api-key/invalid"): Invalid;
}

export type AuthApiKeyClient = Client & {
  path: Routes;
  apiKey: ApiKeyOperations;
};
