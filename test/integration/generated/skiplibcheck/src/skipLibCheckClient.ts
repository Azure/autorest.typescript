import * as coreClient from "@azure/core-client";
import * as Parameters from "./models/parameters";
import { SkipLibCheckClientContext } from "./skipLibCheckClientContext";
import {
  SkipLibCheckClientOptionalParams,
  Enum0,
  SkipLibCheckClientApiV1ValueGetOptionalParams,
  SkipLibCheckClientApiV1ValueGetResponse
} from "./models";

export class SkipLibCheckClient extends SkipLibCheckClientContext {
  /**
   * Initializes a new instance of the SkipLibCheckClient class.
   * @param $host server parameter
   * @param apiVersion
   * @param options The parameter options
   */
  constructor(
    $host: string,
    apiVersion: Enum0,
    options?: SkipLibCheckClientOptionalParams
  ) {
    super($host, apiVersion, options);
  }

  /** @param options The options parameters. */
  apiV1ValueGet(
    options?: SkipLibCheckClientApiV1ValueGetOptionalParams
  ): Promise<SkipLibCheckClientApiV1ValueGetResponse> {
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
