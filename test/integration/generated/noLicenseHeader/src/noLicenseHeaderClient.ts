import * as coreHttp from "@azure/core-http";
import * as Parameters from "./models/parameters";
import { NoLicenseHeaderClientContext } from "./noLicenseHeaderClientContext";
import {
  NoLicenseHeaderClientOptionalParams,
  Enum0,
  NoLicenseHeaderClientApiV1ValueGetResponse
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
    options?: coreHttp.OperationOptions
  ): Promise<NoLicenseHeaderClientApiV1ValueGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      apiV1ValueGetOperationSpec
    ) as Promise<NoLicenseHeaderClientApiV1ValueGetResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer({}, /* isXml */ false);

const apiV1ValueGetOperationSpec: coreHttp.OperationSpec = {
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
