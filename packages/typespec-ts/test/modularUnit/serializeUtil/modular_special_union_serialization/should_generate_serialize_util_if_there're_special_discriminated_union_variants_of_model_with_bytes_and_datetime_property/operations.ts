import { TestingContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError
} from "@azure-rest/core-client";
export function _customGet1Send(
  context: Client,
  body: Widget1,
  options: CustomGet1OptionalParams = { requestOptions: {} }
): StreamableMethod {
  return context.path("/customGet1").get({
    ...operationOptionsToRequestParameters(options),
    body: {
      id: body["id"],
      weight: body["weight"],
      color: body["color"],
      data: serializeWidgetData(body["data"])
    }
  });
}
export async function _customGet1Deserialize(
  result: PathUncheckedResponse
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
