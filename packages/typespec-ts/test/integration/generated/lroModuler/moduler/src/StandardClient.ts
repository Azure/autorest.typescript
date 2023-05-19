// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "./common/interfaces.js";
import {
  User,
  createOrReplace,
  CreateOrReplaceOptions,
  createStandard,
  StandardContext,
} from "./api/index.js";

export class StandardClient {
  private _client: StandardContext;

  /** Illustrates bodies templated with Azure Core with long-running operation */
  constructor(options: ClientOptions = {}) {
    this._client = createStandard(options);
  }

  createOrReplace(
    role: string,
    name: string,
    options: CreateOrReplaceOptions = { requestOptions: {} }
  ): Promise<User> {
    return createOrReplace(this._client, role, name, options);
  }
}
