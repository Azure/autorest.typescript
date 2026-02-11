// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createTestOperations,
  TestOperationsContext,
  TestOperationsOptionalParams,
} from "./api/index.js";
import { YDataverseDataverseSourceConnectorProperties } from "../../models/y/dataverse/models.js";
import { YDataverseV2DataverseSourceConnectorV2Properties } from "../../models/y/dataverseV2/models.js";
import { testDataverseV2, testDataverse } from "./api/operations.js";
import { TestDataverseV2OptionalParams, TestDataverseOptionalParams } from "./api/options.js";
import { Pipeline } from "@azure/core-rest-pipeline";

export { TestOperationsOptionalParams } from "./api/testOperationsContext.js";

export class TestOperations {
  private _client: TestOperationsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(endpointParam: string, options: TestOperationsOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createTestOperations(endpointParam, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  testDataverseV2(
    options: TestDataverseV2OptionalParams = { requestOptions: {} },
  ): Promise<YDataverseV2DataverseSourceConnectorV2Properties> {
    return testDataverseV2(this._client, options);
  }

  testDataverse(
    options: TestDataverseOptionalParams = { requestOptions: {} },
  ): Promise<YDataverseDataverseSourceConnectorProperties> {
    return testDataverse(this._client, options);
  }
}
