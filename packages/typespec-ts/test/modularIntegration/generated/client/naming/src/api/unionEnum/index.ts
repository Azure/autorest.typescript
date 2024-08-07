// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientExtensibleEnum, ExtensibleEnum } from "../../models/models.js";
import { NamingContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  UnionEnumUnionEnumNameOptionalParams,
  UnionEnumUnionEnumMemberNameOptionalParams,
} from "../../models/options.js";

export function _unionEnumNameSend(
  context: Client,
  body: ClientExtensibleEnum,
  options: UnionEnumUnionEnumNameOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/client/naming/union-enum/union-enum-name")
    .post({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _unionEnumNameDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/client/naming/union-enum/union-enum-member-name")
    .post({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _unionEnumMemberNameDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
