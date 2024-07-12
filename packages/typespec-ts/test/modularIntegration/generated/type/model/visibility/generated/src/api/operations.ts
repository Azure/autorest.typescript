// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { VisibilityModel } from "../models/models.js";
import {
  DeleteModel204Response,
  GetModel200Response,
  HeadModel200Response,
  PatchModel204Response,
  PostModel204Response,
  PutModel204Response,
  VisibilityContext as Client,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  GetModelOptionalParams,
  HeadModelOptionalParams,
  PutModelOptionalParams,
  PatchModelOptionalParams,
  PostModelOptionalParams,
  DeleteModelOptionalParams,
} from "../models/options.js";

export function _getModelSend(
  context: Client,
  input: VisibilityModel,
  options: GetModelOptionalParams = { requestOptions: {} },
): StreamableMethod<GetModel200Response> {
  return context
    .path("/type/model/visibility")
    .get({
      ...operationOptionsToRequestParameters(options),
      body: {
        queryProp: input["queryProp"],
        createProp: input["createProp"],
        updateProp: input["updateProp"],
        deleteProp: input["deleteProp"],
      },
    });
}

export async function _getModelDeserialize(
  result: GetModel200Response,
): Promise<VisibilityModel> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    readProp: result.body["readProp"],
    queryProp: result.body["queryProp"],
    createProp: result.body["createProp"],
    updateProp: result.body["updateProp"],
    deleteProp: result.body["deleteProp"],
  };
}

export async function getModel(
  context: Client,
  input: VisibilityModel,
  options: GetModelOptionalParams = { requestOptions: {} },
): Promise<VisibilityModel> {
  const result = await _getModelSend(context, input, options);
  return _getModelDeserialize(result);
}

export function _headModelSend(
  context: Client,
  input: VisibilityModel,
  options: HeadModelOptionalParams = { requestOptions: {} },
): StreamableMethod<HeadModel200Response> {
  return context
    .path("/type/model/visibility")
    .head({
      ...operationOptionsToRequestParameters(options),
      body: {
        queryProp: input["queryProp"],
        createProp: input["createProp"],
        updateProp: input["updateProp"],
        deleteProp: input["deleteProp"],
      },
    });
}

export async function _headModelDeserialize(
  result: HeadModel200Response,
): Promise<void> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return;
}

export async function headModel(
  context: Client,
  input: VisibilityModel,
  options: HeadModelOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _headModelSend(context, input, options);
  return _headModelDeserialize(result);
}

export function _putModelSend(
  context: Client,
  input: VisibilityModel,
  options: PutModelOptionalParams = { requestOptions: {} },
): StreamableMethod<PutModel204Response> {
  return context
    .path("/type/model/visibility")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        queryProp: input["queryProp"],
        createProp: input["createProp"],
        updateProp: input["updateProp"],
        deleteProp: input["deleteProp"],
      },
    });
}

export async function _putModelDeserialize(
  result: PutModel204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function putModel(
  context: Client,
  input: VisibilityModel,
  options: PutModelOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putModelSend(context, input, options);
  return _putModelDeserialize(result);
}

export function _patchModelSend(
  context: Client,
  input: VisibilityModel,
  options: PatchModelOptionalParams = { requestOptions: {} },
): StreamableMethod<PatchModel204Response> {
  return context
    .path("/type/model/visibility")
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        queryProp: input["queryProp"],
        createProp: input["createProp"],
        updateProp: input["updateProp"],
        deleteProp: input["deleteProp"],
      },
    });
}

export async function _patchModelDeserialize(
  result: PatchModel204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function patchModel(
  context: Client,
  input: VisibilityModel,
  options: PatchModelOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _patchModelSend(context, input, options);
  return _patchModelDeserialize(result);
}

export function _postModelSend(
  context: Client,
  input: VisibilityModel,
  options: PostModelOptionalParams = { requestOptions: {} },
): StreamableMethod<PostModel204Response> {
  return context
    .path("/type/model/visibility")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        queryProp: input["queryProp"],
        createProp: input["createProp"],
        updateProp: input["updateProp"],
        deleteProp: input["deleteProp"],
      },
    });
}

export async function _postModelDeserialize(
  result: PostModel204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function postModel(
  context: Client,
  input: VisibilityModel,
  options: PostModelOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _postModelSend(context, input, options);
  return _postModelDeserialize(result);
}

export function _deleteModelSend(
  context: Client,
  input: VisibilityModel,
  options: DeleteModelOptionalParams = { requestOptions: {} },
): StreamableMethod<DeleteModel204Response> {
  return context
    .path("/type/model/visibility")
    .delete({
      ...operationOptionsToRequestParameters(options),
      body: {
        queryProp: input["queryProp"],
        createProp: input["createProp"],
        updateProp: input["updateProp"],
        deleteProp: input["deleteProp"],
      },
    });
}

export async function _deleteModelDeserialize(
  result: DeleteModel204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function deleteModel(
  context: Client,
  input: VisibilityModel,
  options: DeleteModelOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteModelSend(context, input, options);
  return _deleteModelDeserialize(result);
}
