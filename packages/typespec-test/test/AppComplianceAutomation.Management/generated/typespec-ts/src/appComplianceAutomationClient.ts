// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getReportOperations,
  ReportOperations,
} from "./classic/report/index.js";
import {
  getWebhookOperations,
  WebhookOperations,
} from "./classic/webhook/index.js";
import {
  getSnapshotOperations,
  SnapshotOperations,
} from "./classic/snapshot/index.js";
import {
  getScopingConfigurationOperations,
  ScopingConfigurationOperations,
} from "./classic/scopingConfiguration/index.js";
import {
  getEvidenceOperations,
  EvidenceOperations,
} from "./classic/evidence/index.js";
import {
  getOperationsOperations,
  OperationsOperations,
} from "./classic/operations/index.js";
import {
  getProviderActionsOperations,
  ProviderActionsOperations,
} from "./classic/providerActions/index.js";
import {
  createAppComplianceAutomation,
  AppComplianceAutomationClientOptions,
  AppComplianceAutomationContext,
} from "./api/index.js";

export { AppComplianceAutomationClientOptions } from "./api/appComplianceAutomationContext.js";

export class AppComplianceAutomationClient {
  private _client: AppComplianceAutomationContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** App Compliance Automation Tool for Microsoft 365 API spec */
  constructor(
    credential: TokenCredential,
    options: AppComplianceAutomationClientOptions = {},
  ) {
    this._client = createAppComplianceAutomation(credential, options);
    this.pipeline = this._client.pipeline;
    this.report = getReportOperations(this._client);
    this.webhook = getWebhookOperations(this._client);
    this.snapshot = getSnapshotOperations(this._client);
    this.scopingConfiguration = getScopingConfigurationOperations(this._client);
    this.evidence = getEvidenceOperations(this._client);
    this.operations = getOperationsOperations(this._client);
    this.providerActions = getProviderActionsOperations(this._client);
  }

  /** The operation groups for Report */
  public readonly report: ReportOperations;
  /** The operation groups for Webhook */
  public readonly webhook: WebhookOperations;
  /** The operation groups for Snapshot */
  public readonly snapshot: SnapshotOperations;
  /** The operation groups for ScopingConfiguration */
  public readonly scopingConfiguration: ScopingConfigurationOperations;
  /** The operation groups for Evidence */
  public readonly evidence: EvidenceOperations;
  /** The operation groups for Operations */
  public readonly operations: OperationsOperations;
  /** The operation groups for ProviderActions */
  public readonly providerActions: ProviderActionsOperations;
}
