import { TestingContext as Client } from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError
} from "@azure-rest/core-client";

export function _customGet1Send(
  context: Client,
  body: Widget1,
  options: CustomGet1OptionalParams = { requestOptions: {} }
): StreamableMethod<CustomGet1204Response> {
  return context.path("/customGet1").get({
    ...operationOptionsToRequestParameters(options),
    body: {
      id: body["id"],
      weight: body["weight"],
      color: body["color"],
      data: body["data"]
    }
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
  options: CustomGet1OptionalParams = { requestOptions: {} }
): Promise<void> {
  const result = await _customGet1Send(context, body, options);
  return _customGet1Deserialize(result);
}
