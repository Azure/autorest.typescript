// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential, KeyCredential } from "@azure/core-auth";
import {
  User,
  beginCreateOrReplace,
  CreateOrReplaceOptions,
  createStandard,
  StandardContext,
  StandardClientOptions,
} from "./api/index.js";
import { SimplePollerLike, OperationState } from "@azure/core-lro";

export { StandardClientOptions } from "./api/StandardContext.js";

export class StandardClient {
  private _client: StandardContext;

  /** Illustrates bodies templated with Azure Core with long-running operation */
  constructor(
    endpoint: string,
    credential: KeyCredential | TokenCredential,
    options: StandardClientOptions = {}
  ) {
    this._client = createStandard(endpoint, credential, options);
  }

  /** Creates or replaces a User */
  beginCreateOrReplace(
    role: string,
    name: string,
    options: CreateOrReplaceOptions = { requestOptions: {} }
  ): Promise<SimplePollerLike<OperationState<User>, User>> {
    return beginCreateOrReplace(this._client, role, name, options);
  }
}
