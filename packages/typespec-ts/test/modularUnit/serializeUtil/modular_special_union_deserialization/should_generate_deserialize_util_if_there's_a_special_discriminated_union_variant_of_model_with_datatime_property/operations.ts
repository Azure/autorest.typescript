import { TestingContext as Client } from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError
} from "@azure-rest/core-client";
export function _customGet1Send(
  context: Client,
  options: CustomGet1OptionalParams = { requestOptions: {} }
): StreamableMethod<CustomGet1200Response> {
  return context
    .path("/customGet1")
    .get({ ...operationOptionsToRequestParameters(options) });
}
export async function _customGet1Deserialize(
  result: CustomGet1200Response
): Promise<Widget1> {
  if (result.status !== "200") {
    throw createRestError(result);
  }
  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
    data: deserializeWidgetData(result.body["data"])
  };
}
export async function customGet1(
  context: Client,
  options: CustomGet1OptionalParams = { requestOptions: {} }
): Promise<Widget1> {
  const result = await _customGet1Send(context, options);
  return _customGet1Deserialize(result);
}
