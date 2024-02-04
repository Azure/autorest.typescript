// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Resource, ResourcePatch } from "../models/models.js";
import {
  CreateResource200Response,
  JsonMergePatchContext as Client,
  UpdateOptionalResource200Response,
  UpdateResource200Response,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  CreateResourceOptions,
  UpdateResourceOptions,
  UpdateOptionalResourceOptions,
} from "../models/options.js";

export function _createResourceSend(
  context: Client,
  body: Resource,
  options: CreateResourceOptions = { requestOptions: {} },
): StreamableMethod<CreateResource200Response> {
  return context
    .path("/json-merge-patch/create/resource")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        name: body["name"],
        description: body["description"],
        map: body["map"],
        array: !body["array"]
          ? body["array"]
          : body["array"].map((p) => ({
              name: p["name"],
              description: p["description"],
            })),
        intValue: body["intValue"],
        floatValue: body["floatValue"],
        innerModel: !body.innerModel
          ? undefined
          : {
              name: body.innerModel?.["name"],
              description: body.innerModel?.["description"],
            },
        intArray: body["intArray"],
      },
    });
}

export async function _createResourceDeserialize(
  result: CreateResource200Response,
): Promise<Resource> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    name: result.body["name"],
    description: result.body["description"],
    map: result.body["map"],
    array: !result.body["array"]
      ? result.body["array"]
      : result.body["array"].map((p) => ({
          name: p["name"],
          description: p["description"],
        })),
    intValue: result.body["intValue"],
    floatValue: result.body["floatValue"],
    innerModel: !result.body.innerModel
      ? undefined
      : {
          name: result.body.innerModel?.["name"],
          description: result.body.innerModel?.["description"],
        },
    intArray: result.body["intArray"],
  };
}

/** Test content-type: application/merge-patch+json with required body */
export async function createResource(
  context: Client,
  body: Resource,
  options: CreateResourceOptions = { requestOptions: {} },
): Promise<Resource> {
  const result = await _createResourceSend(context, body, options);
  return _createResourceDeserialize(result);
}

export function _updateResourceSend(
  context: Client,
  body: ResourcePatch,
  options: UpdateResourceOptions = { requestOptions: {} },
): StreamableMethod<UpdateResource200Response> {
  return context
    .path("/json-merge-patch/update/resource")
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: {
        description: body["description"],
        map: body["map"],
        array: !body["array"]
          ? body["array"]
          : body["array"].map((p) => ({
              name: p["name"],
              description: p["description"],
            })),
        intValue: body["intValue"],
        floatValue: body["floatValue"],
        innerModel: !body.innerModel
          ? undefined
          : {
              name: body.innerModel?.["name"],
              description: body.innerModel?.["description"],
            },
        intArray: body["intArray"],
      },
    });
}

export async function _updateResourceDeserialize(
  result: UpdateResource200Response,
): Promise<Resource> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    name: result.body["name"],
    description: result.body["description"],
    map: result.body["map"],
    array: !result.body["array"]
      ? result.body["array"]
      : result.body["array"].map((p) => ({
          name: p["name"],
          description: p["description"],
        })),
    intValue: result.body["intValue"],
    floatValue: result.body["floatValue"],
    innerModel: !result.body.innerModel
      ? undefined
      : {
          name: result.body.innerModel?.["name"],
          description: result.body.innerModel?.["description"],
        },
    intArray: result.body["intArray"],
  };
}

/** Test content-type: application/merge-patch+json with required body */
export async function updateResource(
  context: Client,
  body: ResourcePatch,
  options: UpdateResourceOptions = { requestOptions: {} },
): Promise<Resource> {
  const result = await _updateResourceSend(context, body, options);
  return _updateResourceDeserialize(result);
}

export function _updateOptionalResourceSend(
  context: Client,
  body: ResourcePatch,
  options: UpdateOptionalResourceOptions = { requestOptions: {} },
): StreamableMethod<UpdateOptionalResource200Response> {
  return context
    .path("/json-merge-patch/update/resource/optional")
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: {
        description: body["description"],
        map: body["map"],
        array: !body["array"]
          ? body["array"]
          : body["array"].map((p) => ({
              name: p["name"],
              description: p["description"],
            })),
        intValue: body["intValue"],
        floatValue: body["floatValue"],
        innerModel: !body.innerModel
          ? undefined
          : {
              name: body.innerModel?.["name"],
              description: body.innerModel?.["description"],
            },
        intArray: body["intArray"],
      },
    });
}

export async function _updateOptionalResourceDeserialize(
  result: UpdateOptionalResource200Response,
): Promise<Resource> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    name: result.body["name"],
    description: result.body["description"],
    map: result.body["map"],
    array: !result.body["array"]
      ? result.body["array"]
      : result.body["array"].map((p) => ({
          name: p["name"],
          description: p["description"],
        })),
    intValue: result.body["intValue"],
    floatValue: result.body["floatValue"],
    innerModel: !result.body.innerModel
      ? undefined
      : {
          name: result.body.innerModel?.["name"],
          description: result.body.innerModel?.["description"],
        },
    intArray: result.body["intArray"],
  };
}

/** Test content-type: application/merge-patch+json with optional body */
export async function updateOptionalResource(
  context: Client,
  body: ResourcePatch,
  options: UpdateOptionalResourceOptions = { requestOptions: {} },
): Promise<Resource> {
  const result = await _updateOptionalResourceSend(context, body, options);
  return _updateOptionalResourceDeserialize(result);
}
