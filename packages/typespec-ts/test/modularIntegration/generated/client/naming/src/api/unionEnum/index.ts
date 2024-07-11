// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientExtensibleEnum, ExtensibleEnum } from "../../models/models.js";
import {
  NamingContext as Client,
  UnionEnumUnionEnumMemberName204Response,
  UnionEnumUnionEnumName204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  UnionEnumUnionEnumNameOptionalParams,
  UnionEnumUnionEnumMemberNameOptionalParams,
} from "../options.js";

export function _unionEnumNameSend(
  context: Client,
  body: ClientExtensibleEnum,
  options: UnionEnumUnionEnumNameOptionalParams = { requestOptions: {} },
): StreamableMethod<UnionEnumUnionEnumName204Response> {
  return context
    .path("/client/naming/union-enum/union-enum-name")
    .post({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _unionEnumNameDeserialize(
  result: UnionEnumUnionEnumName204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function unionEnumName(
  context: Client,
  body: ClientExtensibleEnum,
  options: UnionEnumUnionEnumNameOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _unionEnumNameSend(context, body, options);
  return _unionEnumNameDeserialize(result);
}

export function _unionEnumMemberNameSend(
  context: Client,
  body: ExtensibleEnum,
  options: UnionEnumUnionEnumMemberNameOptionalParams = { requestOptions: {} },
): StreamableMethod<UnionEnumUnionEnumMemberName204Response> {
  return context
    .path("/client/naming/union-enum/union-enum-member-name")
    .post({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _unionEnumMemberNameDeserialize(
  result: UnionEnumUnionEnumMemberName204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function unionEnumMemberName(
  context: Client,
  body: ExtensibleEnum,
  options: UnionEnumUnionEnumMemberNameOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _unionEnumMemberNameSend(context, body, options);
  return _unionEnumMemberNameDeserialize(result);
}
