// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  StringsOnlyGetParameters,
  StringsOnlySendParameters,
  StringExtensibleGetParameters,
  StringExtensibleSendParameters,
  StringExtensibleNamedGetParameters,
  StringExtensibleNamedSendParameters,
  IntsOnlyGetParameters,
  IntsOnlySendParameters,
  FloatsOnlyGetParameters,
  FloatsOnlySendParameters,
  ModelsOnlyGetParameters,
  ModelsOnlySendParameters,
  EnumsOnlyGetParameters,
  EnumsOnlySendParameters,
  StringAndArrayGetParameters,
  StringAndArraySendParameters,
  MixedLiteralsGetParameters,
  MixedLiteralsSendParameters,
  MixedTypesGetParameters,
  MixedTypesSendParameters,
} from "./parameters.js";
import {
  StringsOnlyGet200Response,
  StringsOnlySend204Response,
  StringExtensibleGet200Response,
  StringExtensibleSend204Response,
  StringExtensibleNamedGet200Response,
  StringExtensibleNamedSend204Response,
  IntsOnlyGet200Response,
  IntsOnlySend204Response,
  FloatsOnlyGet200Response,
  FloatsOnlySend204Response,
  ModelsOnlyGet200Response,
  ModelsOnlySend204Response,
  EnumsOnlyGet200Response,
  EnumsOnlySend204Response,
  StringAndArrayGet200Response,
  StringAndArraySend204Response,
  MixedLiteralsGet200Response,
  MixedLiteralsSend204Response,
  MixedTypesGet200Response,
  MixedTypesSend204Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface StringsOnlyGet {
  get(
    options?: StringsOnlyGetParameters,
  ): StreamableMethod<StringsOnlyGet200Response>;
  post(
    options?: StringsOnlySendParameters,
  ): StreamableMethod<StringsOnlySend204Response>;
}

export interface StringExtensibleGet {
  get(
    options?: StringExtensibleGetParameters,
  ): StreamableMethod<StringExtensibleGet200Response>;
  post(
    options?: StringExtensibleSendParameters,
  ): StreamableMethod<StringExtensibleSend204Response>;
}

export interface StringExtensibleNamedGet {
  get(
    options?: StringExtensibleNamedGetParameters,
  ): StreamableMethod<StringExtensibleNamedGet200Response>;
  post(
    options?: StringExtensibleNamedSendParameters,
  ): StreamableMethod<StringExtensibleNamedSend204Response>;
}

export interface IntsOnlyGet {
  get(
    options?: IntsOnlyGetParameters,
  ): StreamableMethod<IntsOnlyGet200Response>;
  post(
    options?: IntsOnlySendParameters,
  ): StreamableMethod<IntsOnlySend204Response>;
}

export interface FloatsOnlyGet {
  get(
    options?: FloatsOnlyGetParameters,
  ): StreamableMethod<FloatsOnlyGet200Response>;
  post(
    options?: FloatsOnlySendParameters,
  ): StreamableMethod<FloatsOnlySend204Response>;
}

export interface ModelsOnlyGet {
  get(
    options?: ModelsOnlyGetParameters,
  ): StreamableMethod<ModelsOnlyGet200Response>;
  post(
    options?: ModelsOnlySendParameters,
  ): StreamableMethod<ModelsOnlySend204Response>;
}

export interface EnumsOnlyGet {
  get(
    options?: EnumsOnlyGetParameters,
  ): StreamableMethod<EnumsOnlyGet200Response>;
  post(
    options?: EnumsOnlySendParameters,
  ): StreamableMethod<EnumsOnlySend204Response>;
}

export interface StringAndArrayGet {
  get(
    options?: StringAndArrayGetParameters,
  ): StreamableMethod<StringAndArrayGet200Response>;
  post(
    options?: StringAndArraySendParameters,
  ): StreamableMethod<StringAndArraySend204Response>;
}

export interface MixedLiteralsGet {
  get(
    options?: MixedLiteralsGetParameters,
  ): StreamableMethod<MixedLiteralsGet200Response>;
  post(
    options?: MixedLiteralsSendParameters,
  ): StreamableMethod<MixedLiteralsSend204Response>;
}

export interface MixedTypesGet {
  get(
    options?: MixedTypesGetParameters,
  ): StreamableMethod<MixedTypesGet200Response>;
  post(
    options?: MixedTypesSendParameters,
  ): StreamableMethod<MixedTypesSend204Response>;
}

export interface Routes {
  /** Resource for '/type/union/strings-only' has methods for the following verbs: get, post */
  (path: "/type/union/strings-only"): StringsOnlyGet;
  /** Resource for '/type/union/string-extensible' has methods for the following verbs: get, post */
  (path: "/type/union/string-extensible"): StringExtensibleGet;
  /** Resource for '/type/union/string-extensible-named' has methods for the following verbs: get, post */
  (path: "/type/union/string-extensible-named"): StringExtensibleNamedGet;
  /** Resource for '/type/union/ints-only' has methods for the following verbs: get, post */
  (path: "/type/union/ints-only"): IntsOnlyGet;
  /** Resource for '/type/union/floats-only' has methods for the following verbs: get, post */
  (path: "/type/union/floats-only"): FloatsOnlyGet;
  /** Resource for '/type/union/models-only' has methods for the following verbs: get, post */
  (path: "/type/union/models-only"): ModelsOnlyGet;
  /** Resource for '/type/union/enums-only' has methods for the following verbs: get, post */
  (path: "/type/union/enums-only"): EnumsOnlyGet;
  /** Resource for '/type/union/string-and-array' has methods for the following verbs: get, post */
  (path: "/type/union/string-and-array"): StringAndArrayGet;
  /** Resource for '/type/union/mixed-literals' has methods for the following verbs: get, post */
  (path: "/type/union/mixed-literals"): MixedLiteralsGet;
  /** Resource for '/type/union/mixed-types' has methods for the following verbs: get, post */
  (path: "/type/union/mixed-types"): MixedTypesGet;
}

export type UnionContext = Client & {
  path: Routes;
};
