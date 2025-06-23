// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createMigrate,
  MigrateContext,
  MigrateClientOptionalParams,
} from "./api/index.js";
import {
  EvaluatedAvsMachinesOperationsOperations,
  _getEvaluatedAvsMachinesOperationsOperations,
} from "./classic/evaluatedAvsMachinesOperations/index.js";
import {
  EvaluatedWebAppsOperationsOperations,
  _getEvaluatedWebAppsOperationsOperations,
} from "./classic/evaluatedWebAppsOperations/index.js";
import {
  EvaluatedSqlEntitiesOperationsOperations,
  _getEvaluatedSqlEntitiesOperationsOperations,
} from "./classic/evaluatedSqlEntitiesOperations/index.js";
import {
  EvaluatedMachinesOperationsOperations,
  _getEvaluatedMachinesOperationsOperations,
} from "./classic/evaluatedMachinesOperations/index.js";
import {
  BusinessCaseAvsSummaryOperationsOperations,
  _getBusinessCaseAvsSummaryOperationsOperations,
} from "./classic/businessCaseAvsSummaryOperations/index.js";
import {
  BusinessCaseOverviewSummaryOperationsOperations,
  _getBusinessCaseOverviewSummaryOperationsOperations,
} from "./classic/businessCaseOverviewSummaryOperations/index.js";
import {
  BusinessCasePaasSummaryOperationsOperations,
  _getBusinessCasePaasSummaryOperationsOperations,
} from "./classic/businessCasePaasSummaryOperations/index.js";
import {
  BusinessCaseIaasSummaryOperationsOperations,
  _getBusinessCaseIaasSummaryOperationsOperations,
} from "./classic/businessCaseIaasSummaryOperations/index.js";
import {
  BusinessCaseOperationsOperations,
  _getBusinessCaseOperationsOperations,
} from "./classic/businessCaseOperations/index.js";
import {
  OperationsOperations,
  _getOperationsOperations,
} from "./classic/operations/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { MigrateClientOptionalParams } from "./api/migrateContext.js";

export class MigrateClient {
  private _client: MigrateContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Azure Migrate Resource Provider management API. */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: MigrateClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createMigrate(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.evaluatedAvsMachinesOperations =
      _getEvaluatedAvsMachinesOperationsOperations(this._client);
    this.evaluatedWebAppsOperations = _getEvaluatedWebAppsOperationsOperations(
      this._client,
    );
    this.evaluatedSqlEntitiesOperations =
      _getEvaluatedSqlEntitiesOperationsOperations(this._client);
    this.evaluatedMachinesOperations =
      _getEvaluatedMachinesOperationsOperations(this._client);
    this.businessCaseAvsSummaryOperations =
      _getBusinessCaseAvsSummaryOperationsOperations(this._client);
    this.businessCaseOverviewSummaryOperations =
      _getBusinessCaseOverviewSummaryOperationsOperations(this._client);
    this.businessCasePaasSummaryOperations =
      _getBusinessCasePaasSummaryOperationsOperations(this._client);
    this.businessCaseIaasSummaryOperations =
      _getBusinessCaseIaasSummaryOperationsOperations(this._client);
    this.businessCaseOperations = _getBusinessCaseOperationsOperations(
      this._client,
    );
    this.operations = _getOperationsOperations(this._client);
  }

  /** The operation groups for evaluatedAvsMachinesOperations */
  public readonly evaluatedAvsMachinesOperations: EvaluatedAvsMachinesOperationsOperations;
  /** The operation groups for evaluatedWebAppsOperations */
  public readonly evaluatedWebAppsOperations: EvaluatedWebAppsOperationsOperations;
  /** The operation groups for evaluatedSqlEntitiesOperations */
  public readonly evaluatedSqlEntitiesOperations: EvaluatedSqlEntitiesOperationsOperations;
  /** The operation groups for evaluatedMachinesOperations */
  public readonly evaluatedMachinesOperations: EvaluatedMachinesOperationsOperations;
  /** The operation groups for businessCaseAvsSummaryOperations */
  public readonly businessCaseAvsSummaryOperations: BusinessCaseAvsSummaryOperationsOperations;
  /** The operation groups for businessCaseOverviewSummaryOperations */
  public readonly businessCaseOverviewSummaryOperations: BusinessCaseOverviewSummaryOperationsOperations;
  /** The operation groups for businessCasePaasSummaryOperations */
  public readonly businessCasePaasSummaryOperations: BusinessCasePaasSummaryOperationsOperations;
  /** The operation groups for businessCaseIaasSummaryOperations */
  public readonly businessCaseIaasSummaryOperations: BusinessCaseIaasSummaryOperationsOperations;
  /** The operation groups for businessCaseOperations */
  public readonly businessCaseOperations: BusinessCaseOperationsOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}
