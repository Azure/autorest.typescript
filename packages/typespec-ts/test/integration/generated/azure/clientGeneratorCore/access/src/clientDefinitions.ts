// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  NoDecoratorInPublicParameters,
  PublicDecoratorInPublicParameters,
  NoDecoratorInInternalParameters,
  InternalDecoratorInInternalParameters,
  PublicDecoratorInInternalParameters,
  PublicParameters,
  InternalParameters,
  OperationParameters,
  DiscriminatorParameters,
} from "./parameters";
import {
  NoDecoratorInPublic200Response,
  PublicDecoratorInPublic200Response,
  NoDecoratorInInternal200Response,
  InternalDecoratorInInternal200Response,
  PublicDecoratorInInternal200Response,
  Public200Response,
  Internal200Response,
  Operation200Response,
  Discriminator200Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface NoDecoratorInPublic {
  get(
    options: NoDecoratorInPublicParameters,
  ): StreamableMethod<NoDecoratorInPublic200Response>;
}

export interface PublicDecoratorInPublic {
  get(
    options: PublicDecoratorInPublicParameters,
  ): StreamableMethod<PublicDecoratorInPublic200Response>;
}

export interface NoDecoratorInInternal {
  get(
    options: NoDecoratorInInternalParameters,
  ): StreamableMethod<NoDecoratorInInternal200Response>;
}

export interface InternalDecoratorInInternal {
  get(
    options: InternalDecoratorInInternalParameters,
  ): StreamableMethod<InternalDecoratorInInternal200Response>;
}

export interface PublicDecoratorInInternal {
  get(
    options: PublicDecoratorInInternalParameters,
  ): StreamableMethod<PublicDecoratorInInternal200Response>;
}

export interface Public {
  get(options: PublicParameters): StreamableMethod<Public200Response>;
}

export interface Internal {
  get(options: InternalParameters): StreamableMethod<Internal200Response>;
}

export interface Operation {
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
  get(options: OperationParameters): StreamableMethod<Operation200Response>;
}

export interface Discriminator {
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
  get(
    options: DiscriminatorParameters,
  ): StreamableMethod<Discriminator200Response>;
}

export interface Routes {
  /** Resource for '/azure/client-generator-core/access/publicOperation/noDecoratorInPublic' has methods for the following verbs: get */
  (
    path: "/azure/client-generator-core/access/publicOperation/noDecoratorInPublic",
  ): NoDecoratorInPublic;
  /** Resource for '/azure/client-generator-core/access/publicOperation/publicDecoratorInPublic' has methods for the following verbs: get */
  (
    path: "/azure/client-generator-core/access/publicOperation/publicDecoratorInPublic",
  ): PublicDecoratorInPublic;
  /** Resource for '/azure/client-generator-core/access/internalOperation/noDecoratorInInternal' has methods for the following verbs: get */
  (
    path: "/azure/client-generator-core/access/internalOperation/noDecoratorInInternal",
  ): NoDecoratorInInternal;
  /** Resource for '/azure/client-generator-core/access/internalOperation/internalDecoratorInInternal' has methods for the following verbs: get */
  (
    path: "/azure/client-generator-core/access/internalOperation/internalDecoratorInInternal",
  ): InternalDecoratorInInternal;
  /** Resource for '/azure/client-generator-core/access/internalOperation/publicDecoratorInInternal' has methods for the following verbs: get */
  (
    path: "/azure/client-generator-core/access/internalOperation/publicDecoratorInInternal",
  ): PublicDecoratorInInternal;
  /** Resource for '/azure/client-generator-core/access/sharedModelInOperation/public' has methods for the following verbs: get */
  (
    path: "/azure/client-generator-core/access/sharedModelInOperation/public",
  ): Public;
  /** Resource for '/azure/client-generator-core/access/sharedModelInOperation/internal' has methods for the following verbs: get */
  (
    path: "/azure/client-generator-core/access/sharedModelInOperation/internal",
  ): Internal;
  /** Resource for '/azure/client-generator-core/access/relativeModelInOperation/operation' has methods for the following verbs: get */
  (
    path: "/azure/client-generator-core/access/relativeModelInOperation/operation",
  ): Operation;
  /** Resource for '/azure/client-generator-core/access/relativeModelInOperation/discriminator' has methods for the following verbs: get */
  (
    path: "/azure/client-generator-core/access/relativeModelInOperation/discriminator",
  ): Discriminator;
}

export type AccessClient = Client & {
  path: Routes;
};
