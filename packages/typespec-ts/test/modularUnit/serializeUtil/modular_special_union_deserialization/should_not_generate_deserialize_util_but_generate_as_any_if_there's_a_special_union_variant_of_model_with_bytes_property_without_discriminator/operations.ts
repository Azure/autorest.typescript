import { TestingContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError
} from "@azure-rest/core-client";
export function _customGet1Send(
  context: Client,
  options: CustomGet1OptionalParams = { requestOptions: {} }
): StreamableMethod {
  return context
    .path("/customGet1")
    .get({ ...operationOptionsToRequestParameters(options) });
}
export async function _customGet1Deserialize(
  result: PathUncheckedResponse
): Promise<Widget1> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }
  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
    data: result.body["data"] as any
  };
}
export async function customGet1(
  context: Client,
  options: CustomGet1OptionalParams = { requestOptions: {} }
): Promise<Widget1> {
  const result = await _customGet1Send(context, options);
  return _customGet1Deserialize(result);
}
