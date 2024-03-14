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
  NoDecoratorInPublicOptions,
  PublicDecoratorInPublicOptions,
  NoDecoratorInInternalOptions,
  InternalDecoratorInInternalOptions,
  PublicDecoratorInInternalOptions,
  PublicOptions,
  InternalOptions,
  OperationOptions,
  DiscriminatorOptions,
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
  public,
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
    options: NoDecoratorInPublicOptions = { requestOptions: {} },
  ): Promise<NoDecoratorModelInPublic> {
    return noDecoratorInPublic(this._client, name, options);
  }

  publicDecoratorInPublic(
    name: string,
    options: PublicDecoratorInPublicOptions = { requestOptions: {} },
  ): Promise<PublicDecoratorModelInPublic> {
    return publicDecoratorInPublic(this._client, name, options);
  }

  noDecoratorInInternal(
    name: string,
    options: NoDecoratorInInternalOptions = { requestOptions: {} },
  ): Promise<NoDecoratorModelInInternal> {
    return noDecoratorInInternal(this._client, name, options);
  }

  internalDecoratorInInternal(
    name: string,
    options: InternalDecoratorInInternalOptions = { requestOptions: {} },
  ): Promise<InternalDecoratorModelInInternal> {
    return internalDecoratorInInternal(this._client, name, options);
  }

  publicDecoratorInInternal(
    name: string,
    options: PublicDecoratorInInternalOptions = { requestOptions: {} },
  ): Promise<PublicDecoratorModelInInternal> {
    return publicDecoratorInInternal(this._client, name, options);
  }

  public(
    name: string,
    options: PublicOptions = { requestOptions: {} },
  ): Promise<SharedModel> {
    return public(this._client, name, options);
  }

  internal(
    name: string,
    options: InternalOptions = { requestOptions: {} },
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
    options: OperationOptions = { requestOptions: {} },
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
    options: DiscriminatorOptions = { requestOptions: {} },
  ): Promise<AbstractModelUnion> {
    return discriminator(this._client, kind, options);
  }
}
