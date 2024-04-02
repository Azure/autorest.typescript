// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  OuterModel,
  SharedModel,
  NoDecoratorModelInInternal,
  InternalDecoratorModelInInternal,
  PublicDecoratorModelInInternal,
  NoDecoratorModelInPublic,
  PublicDecoratorModelInPublic,
  AbstractModelUnion,
} from "./models/models.js";
import {
  NoDecoratorInPublicOptionalParams,
  PublicDecoratorInPublicOptionalParams,
  NoDecoratorInInternalOptionalParams,
  InternalDecoratorInInternalOptionalParams,
  PublicDecoratorInInternalOptionalParams,
  PublicOptionalParams,
  InternalOptionalParams,
  OperationOptionalParams,
  DiscriminatorOptionalParams,
} from "./models/options.js";
import {
  createAccess,
  AccessClientOptions,
  AccessContext,
  noDecoratorInPublic,
  publicDecoratorInPublic,
  noDecoratorInInternal,
  internalDecoratorInInternal,
  publicDecoratorInInternal,
  $public,
  internal,
  operation,
  discriminator,
} from "./api/index.js";

export { AccessClientOptions } from "./api/AccessContext.js";

export class AccessClient {
  private _client: AccessContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Test for internal decorator. */
  constructor(options: AccessClientOptions = {}) {
    this._client = createAccess(options);
    this.pipeline = this._client.pipeline;
  }

  noDecoratorInPublic(
    name: string,
    options: NoDecoratorInPublicOptionalParams = { requestOptions: {} },
  ): Promise<NoDecoratorModelInPublic> {
    return noDecoratorInPublic(this._client, name, options);
  }

  publicDecoratorInPublic(
    name: string,
    options: PublicDecoratorInPublicOptionalParams = { requestOptions: {} },
  ): Promise<PublicDecoratorModelInPublic> {
    return publicDecoratorInPublic(this._client, name, options);
  }

  noDecoratorInInternal(
    name: string,
    options: NoDecoratorInInternalOptionalParams = { requestOptions: {} },
  ): Promise<NoDecoratorModelInInternal> {
    return noDecoratorInInternal(this._client, name, options);
  }

  internalDecoratorInInternal(
    name: string,
    options: InternalDecoratorInInternalOptionalParams = { requestOptions: {} },
  ): Promise<InternalDecoratorModelInInternal> {
    return internalDecoratorInInternal(this._client, name, options);
  }

  publicDecoratorInInternal(
    name: string,
    options: PublicDecoratorInInternalOptionalParams = { requestOptions: {} },
  ): Promise<PublicDecoratorModelInInternal> {
    return publicDecoratorInInternal(this._client, name, options);
  }

  /**
   *  @fixme public is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  public(
    name: string,
    options: PublicOptionalParams = { requestOptions: {} },
  ): Promise<SharedModel> {
    return $public(this._client, name, options);
  }

  internal(
    name: string,
    options: InternalOptionalParams = { requestOptions: {} },
  ): Promise<SharedModel> {
    return internal(this._client, name, options);
  }

  /**
   * Expected query parameter: name=<any string>
   * Expected response body:
   * ```json
   * {
   *   "name": <any string>,
   *   "inner":
   *   {
   *     "name": <any string>
   *   }
   * }
   * ```
   */
  operation(
    name: string,
    options: OperationOptionalParams = { requestOptions: {} },
  ): Promise<OuterModel> {
    return operation(this._client, name, options);
  }

  /**
   * Expected query parameter: kind=<any string>
   * Expected response body:
   * ```json
   * {
   *   "name": <any string>,
   *   "kind": "real"
   * }
   * ```
   */
  discriminator(
    kind: string,
    options: DiscriminatorOptionalParams = { requestOptions: {} },
  ): Promise<AbstractModelUnion> {
    return discriminator(this._client, kind, options);
  }
}
