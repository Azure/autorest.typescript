// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  SharedPublicParameters,
  SharedInternalParameters,
  PublicOnlyParameters,
  InternalOnlyParameters,
} from "./parameters";
import {
  SharedPublic200Response,
  SharedInternal200Response,
  PublicOnly200Response,
  InternalOnly200Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Public {
  get(
    options: SharedPublicParameters
  ): StreamableMethod<SharedPublic200Response>;
}

export interface Internal {
  get(
    options: SharedInternalParameters
  ): StreamableMethod<SharedInternal200Response>;
}

export interface PublicOnly {
  get(options: PublicOnlyParameters): StreamableMethod<PublicOnly200Response>;
}

export interface InternalOnly {
  get(
    options: InternalOnlyParameters
  ): StreamableMethod<InternalOnly200Response>;
}

export interface Routes {
  /** Resource for '/azure/client-generator-core/internal/shared/public' has methods for the following verbs: get */
  (path: "/azure/client-generator-core/internal/shared/public"): Public;
  /** Resource for '/azure/client-generator-core/internal/shared/internal' has methods for the following verbs: get */
  (path: "/azure/client-generator-core/internal/shared/internal"): Internal;
  /** Resource for '/azure/client-generator-core/internal/public' has methods for the following verbs: get */
  (path: "/azure/client-generator-core/internal/public"): PublicOnly;
  /** Resource for '/azure/client-generator-core/internal/internal' has methods for the following verbs: get */
  (path: "/azure/client-generator-core/internal/internal"): InternalOnly;
}

export type InternalClient = Client & {
  path: Routes;
};
