// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "./common/interfaces.js";
import {
  User,
  beginCreateOrReplace,
  BeginCreateOrReplaceOptions,
  createStandard,
  StandardContext
} from "./api/index.js";
import { OperationState, SimplePollerLike } from "@azure/core-lro";

export class StandardClient {
  private _client: StandardContext;

  /** Illustrates bodies templated with Azure Core with long-running operation */
  constructor(options: ClientOptions = {}) {
    this._client = createStandard(options);
  }

  beginCreateOrReplace(
    role: string,
    name: string,
    options: BeginCreateOrReplaceOptions = { requestOptions: {} }
  ): Promise<SimplePollerLike<OperationState<User>, User>> {
    return beginCreateOrReplace(this._client, role, name, options);
  }
}
