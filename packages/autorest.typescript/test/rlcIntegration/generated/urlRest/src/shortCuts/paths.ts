import { StreamableMethod } from "@azure-rest/core-client";
import { UrlRestClient } from "../clientDefinitions";
import { PathsGetBooleanTrueParameters } from "../parameters";
import {
  PathsGetBooleanTrue200Response,
  PathsGetBooleanTrueDefaultResponse
} from "../responses";

export function getBooleanTrue(
  client: UrlRestClient,
  boolPath: true,
  options?: PathsGetBooleanTrueParameters
): StreamableMethod<
  PathsGetBooleanTrue200Response | PathsGetBooleanTrueDefaultResponse
> {
  return client.path("/paths/bool/true/{boolPath}", boolPath).get(options);
}
