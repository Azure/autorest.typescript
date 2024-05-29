// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getReportResourcesOperations,
  ReportResourcesOperations,
} from "./classic/reportResources/index.js";
import {
  getWebhookResourcesOperations,
  WebhookResourcesOperations,
} from "./classic/webhookResources/index.js";
import {
  getSnapshotResourcesOperations,
  SnapshotResourcesOperations,
} from "./classic/snapshotResources/index.js";
import {
  getScopingConfigurationResourcesOperations,
  ScopingConfigurationResourcesOperations,
} from "./classic/scopingConfigurationResources/index.js";
import {
  getEvidenceResourcesOperations,
  EvidenceResourcesOperations,
} from "./classic/evidenceResources/index.js";
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
    this.reportResources = getReportResourcesOperations(this._client);
    this.webhookResources = getWebhookResourcesOperations(this._client);
    this.snapshotResources = getSnapshotResourcesOperations(this._client);
    this.scopingConfigurationResources =
      getScopingConfigurationResourcesOperations(this._client);
    this.evidenceResources = getEvidenceResourcesOperations(this._client);
    this.operations = getOperationsOperations(this._client);
    this.providerActions = getProviderActionsOperations(this._client);
  }

  /** The operation groups for ReportResources */
  public readonly reportResources: ReportResourcesOperations;
  /** The operation groups for WebhookResources */
  public readonly webhookResources: WebhookResourcesOperations;
  /** The operation groups for SnapshotResources */
  public readonly snapshotResources: SnapshotResourcesOperations;
  /** The operation groups for ScopingConfigurationResources */
  public readonly scopingConfigurationResources: ScopingConfigurationResourcesOperations;
  /** The operation groups for EvidenceResources */
  public readonly evidenceResources: EvidenceResourcesOperations;
  /** The operation groups for Operations */
  public readonly operations: OperationsOperations;
  /** The operation groups for ProviderActions */
  public readonly providerActions: ProviderActionsOperations;
}
