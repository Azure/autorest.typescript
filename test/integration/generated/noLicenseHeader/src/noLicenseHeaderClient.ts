import * as coreClient from "@azure/core-client";
import * as Parameters from "./models/parameters";
import { NoLicenseHeaderClientContext } from "./noLicenseHeaderClientContext";
import {
  NoLicenseHeaderClientOptionalParams,
  Enum0,
  ApiV1ValueGetOptionalParams,
  ApiV1ValueGetResponse
} from "./models";

export class NoLicenseHeaderClient extends NoLicenseHeaderClientContext {
  /**
   * Initializes a new instance of the NoLicenseHeaderClient class.
   * @param $host server parameter
   * @param apiVersion
   * @param options The parameter options
   */
  constructor(
    $host: string,
    apiVersion: Enum0,
    options?: NoLicenseHeaderClientOptionalParams
  ) {
    super($host, apiVersion, options);
  }

  /** @param options The options parameters. */
  apiV1ValueGet(
    options?: ApiV1ValueGetOptionalParams
  ): Promise<ApiV1ValueGetResponse> {
    return this.sendOperationRequest({ options }, apiV1ValueGetOperationSpec);
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer({}, /* isXml */ false);

const apiV1ValueGetOperationSpec: coreClient.OperationSpec = {
  path: "/api/v1/value",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "String" } }
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.apiVersion],
  serializer
};
