// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential, KeyCredential } from "@azure/core-auth";
import {
  User,
  ResourceOperationStatus,
  beginCreateOrReplace,
  beginExport,
  CreateOrReplaceOptions,
  ExportOptions,
  createStandard,
  StandardContext,
  StandardClientOptions,
} from "./api/index.js";
import {
  SimplePollerLike,
  OperationState as LroOperationState,
} from "@azure/core-lro";

export { StandardClientOptions } from "./api/StandardContext.js";

export class StandardClient {
  private _client: StandardContext;

  /** Illustrates bodies templated with Azure Core with long-running operation */
  constructor(
    credential: KeyCredential | TokenCredential,
    options: StandardClientOptions = {}
  ) {
    this._client = createStandard(credential, options);
  }

  /** Creates or replaces a User */
  beginCreateOrReplace(
    role: string,
    name: string,
    options: CreateOrReplaceOptions = { requestOptions: {} }
  ): Promise<SimplePollerLike<LroOperationState<User>, User>> {
    return beginCreateOrReplace(this._client, role, name, options);
  }

  /** Exports a User */
  beginExport(
    name: string,
    format: string,
    options: ExportOptions = { requestOptions: {} }
  ): Promise<
    SimplePollerLike<
      LroOperationState<ResourceOperationStatus>,
      ResourceOperationStatus
    >
  > {
    return beginExport(this._client, name, format, options);
  }
}
