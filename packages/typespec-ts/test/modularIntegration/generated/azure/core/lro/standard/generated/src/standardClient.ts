// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { PollerLike, OperationState } from "@azure/core-lro";
import { Pipeline } from "@azure/core-rest-pipeline";
import { User, ExportedUser } from "./models/models.js";
import {
  createOrReplace,
  $delete,
  $export,
  CreateOrReplaceOptionalParams,
  DeleteOptionalParams,
  ExportOptionalParams,
  createStandard,
  StandardClientOptions,
  StandardContext,
} from "./api/index.js";

export class StandardClient {
  private _client: StandardContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates bodies templated with Azure Core with long-running operation */
  constructor(options: StandardClientOptions = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createStandard({
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Creates or replaces a User */
  createOrReplace(
    name: string,
    resource: User,
    options: CreateOrReplaceOptionalParams = { requestOptions: {} },
  ): PollerLike<OperationState<User>, User> {
    return createOrReplace(this._client, name, resource, options);
  }

  /** Deletes a User */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete(
    name: string,
    options: DeleteOptionalParams = { requestOptions: {} },
  ): PollerLike<OperationState<void>, void> {
    return $delete(this._client, name, options);
  }

  /** Exports a User */
  /**
   *  @fixme export is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  export(
    name: string,
    format: string,
    options: ExportOptionalParams = { requestOptions: {} },
  ): PollerLike<OperationState<ExportedUser>, ExportedUser> {
    return $export(this._client, name, format, options);
  }
}
