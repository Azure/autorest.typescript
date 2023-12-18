// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Widget1 } from "../../models/models.js";
import {
  CustomGet1204Response,
  DemoServiceContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { WidgetServiceCustomGet1Options } from "../../models/options.js";

export function _customGet1Send(
  context: Client,
  body: Widget1,
  options: WidgetServiceCustomGet1Options = { requestOptions: {} }
): StreamableMethod<CustomGet1204Response> {
  return context
    .path("/customGet1")
    .get({
      ...operationOptionsToRequestParameters(options),
      body: {
        id: body["id"],
        weight: body["weight"],
        color: body["color"],
        data: serializeWidgetData0AndWidgetData1Union(body["data"]),
      },
    });
}

export async function _customGet1Deserialize(
  result: CustomGet1204Response
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function customGet1(
  context: Client,
  body: Widget1,
  options: WidgetServiceCustomGet1Options = { requestOptions: {} }
): Promise<void> {
  const result = await _customGet1Send(context, body, options);
  return _customGet1Deserialize(result);
}
