// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

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
import { SimplePollerLike, OperationState } from "@azure/core-lro";

export { StandardClientOptions } from "./api/StandardContext.js";

export class StandardClient {
  private _client: StandardContext;

  /** Illustrates bodies templated with Azure Core with long-running operation */
  constructor(options: StandardClientOptions = {}) {
    this._client = createStandard(options);
  }

  /** Creates or replaces a User */
  beginCreateOrReplace(
    role: string,
    name: string,
    options: CreateOrReplaceOptions = { requestOptions: {} }
  ): Promise<SimplePollerLike<OperationState<User>, User>> {
    return beginCreateOrReplace(this._client, role, name, options);
  }

  /** Exports a User */
  /**
   * @fixme export is a reserved word that cannot be used as an operation name. Please add
   * @projectedName (
   *       "javascript", "<JS-Specific-Name>") to the operation to override the generated name.
   */
  beginExport(
    name: string,
    format: string,
    options: ExportOptions = { requestOptions: {} }
  ): Promise<
    SimplePollerLike<
      OperationState<ResourceOperationStatus>,
      ResourceOperationStatus
    >
  > {
    return beginExport(this._client, name, format, options);
  }
}
