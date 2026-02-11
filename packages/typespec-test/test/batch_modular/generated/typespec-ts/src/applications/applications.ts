// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createApplications,
  ApplicationsContext,
  ApplicationsOptionalParams,
} from "./api/index.js";
import { BatchApplication } from "../models/models.js";
import { PagedAsyncIterableIterator } from "../static-helpers/pagingHelpers.js";
import { getApplication, listApplications } from "./api/operations.js";
import { GetApplicationOptionalParams, ListApplicationsOptionalParams } from "./api/options.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { ApplicationsOptionalParams } from "./api/applicationsContext.js";

export class Applications {
  private _client: ApplicationsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: TokenCredential,
    options: ApplicationsOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createApplications(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /**
   * This operation returns only Applications and versions that are available for
   * use on Compute Nodes; that is, that can be used in an Package reference. For
   * administrator information about Applications and versions that are not yet
   * available to Compute Nodes, use the Azure portal or the Azure Resource Manager
   * API.
   */
  getApplication(
    applicationId: string,
    options: GetApplicationOptionalParams = { requestOptions: {} },
  ): Promise<BatchApplication> {
    return getApplication(this._client, applicationId, options);
  }

  /**
   * This operation returns only Applications and versions that are available for
   * use on Compute Nodes; that is, that can be used in an Package reference. For
   * administrator information about applications and versions that are not yet
   * available to Compute Nodes, use the Azure portal or the Azure Resource Manager
   * API.
   */
  listApplications(
    options: ListApplicationsOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<BatchApplication> {
    return listApplications(this._client, options);
  }
}
