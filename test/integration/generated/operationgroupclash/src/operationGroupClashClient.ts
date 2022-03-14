import * as coreClient from "@azure/core-client";
import { ProductOperationsImpl, PipelineOperationsImpl } from "./operations";
import { ProductOperations, PipelineOperations } from "./operationsInterfaces";
import { Enum0, OperationGroupClashClientOptionalParams } from "./models";

export class OperationGroupClashClient extends coreClient.ServiceClient {
  $host: string;
  apiVersion: Enum0;

  /**
   * Initializes a new instance of the OperationGroupClashClient class.
   * @param $host server parameter
   * @param apiVersion
   * @param options The parameter options
   */
  constructor(
    $host: string,
    apiVersion: Enum0,
    options?: OperationGroupClashClientOptionalParams
  ) {
    if ($host === undefined) {
      throw new Error("'$host' cannot be null");
    }
    if (apiVersion === undefined) {
      throw new Error("'apiVersion' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: OperationGroupClashClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-operationgroupclash/1.0.0-preview1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri: options.endpoint ?? options.baseUri ?? "{$host}"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.$host = $host;
    this.apiVersion = apiVersion;
    this.productOperations = new ProductOperationsImpl(this);
    this.pipelineOperations = new PipelineOperationsImpl(this);
  }

  productOperations: ProductOperations;
  pipelineOperations: PipelineOperations;
}
