// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  beginCreateOrReplace,
  beginDelete,
  beginExport,
  createStandard,
  StandardContext,
  StandardClientOptions,
} from "./api/index.js";
import { User, OperationStatus, ExportedUser } from "./models/models.js";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  CreateOrReplaceOptions,
  DeleteOptions,
  ExportOptions,
} from "./models/options.js";

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

  /** Deletes a User */
  /**
   * @fixme delete is a reserved word that cannot be used as an operation name. Please add
   * @projectedName (
   *       "javascript", "<JS-Specific-Name>") to the operation to override the generated name.
   */
  beginDelete(
    name: string,
    options: DeleteOptions = { requestOptions: {} }
  ): Promise<
    SimplePollerLike<OperationState<OperationStatus>, OperationStatus>
  > {
    return beginDelete(this._client, name, options);
  }

  /** Exports a User */
  beginExport(
    name: string,
    format: string,
    options: ExportOptions = { requestOptions: {} }
  ): Promise<SimplePollerLike<OperationState<ExportedUser>, ExportedUser>> {
    return beginExport(this._client, name, format, options);
  }
}
