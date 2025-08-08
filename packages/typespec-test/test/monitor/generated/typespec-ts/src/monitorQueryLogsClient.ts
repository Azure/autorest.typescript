// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createMonitorQueryLogs,
  MonitorQueryLogsContext,
  MonitorQueryLogsClientOptionalParams,
} from "./api/index.js";
import {
  MetadataOperations,
  _getMetadataOperations,
} from "./classic/metadata/index.js";
import { QueryOperations, _getQueryOperations } from "./classic/query/index.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { MonitorQueryLogsClientOptionalParams } from "./api/monitorQueryLogsContext.js";

export class MonitorQueryLogsClient {
  private _client: MonitorQueryLogsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    credential: TokenCredential,
    options: MonitorQueryLogsClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createMonitorQueryLogs(credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.metadata = _getMetadataOperations(this._client);
    this.query = _getQueryOperations(this._client);
  }

  /** The operation groups for metadata */
  public readonly metadata: MetadataOperations;
  /** The operation groups for query */
  public readonly query: QueryOperations;
}
