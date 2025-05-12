// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createHelp,
  HelpContext,
  HelpClientOptionalParams,
} from "./api/index.js";
import {
  DiscoverySolutionNLPOperationGroupOperations,
  _getDiscoverySolutionNLPOperationGroupOperations,
} from "./classic/discoverySolutionNLPOperationGroup/index.js";
import {
  DiscoverySolutionOperationGroupOperations,
  _getDiscoverySolutionOperationGroupOperations,
} from "./classic/discoverySolutionOperationGroup/index.js";
import {
  CheckNameAvailabilityOperationGroupOperations,
  _getCheckNameAvailabilityOperationGroupOperations,
} from "./classic/checkNameAvailabilityOperationGroup/index.js";
import {
  SolutionResourceSelfHelpsOperations,
  _getSolutionResourceSelfHelpsOperations,
} from "./classic/solutionResourceSelfHelps/index.js";
import {
  TroubleshooterResourcesOperations,
  _getTroubleshooterResourcesOperations,
} from "./classic/troubleshooterResources/index.js";
import {
  SimplifiedSolutionsResourcesOperations,
  _getSimplifiedSolutionsResourcesOperations,
} from "./classic/simplifiedSolutionsResources/index.js";
import {
  SolutionResourcesOperations,
  _getSolutionResourcesOperations,
} from "./classic/solutionResources/index.js";
import {
  DiagnosticResourcesOperations,
  _getDiagnosticResourcesOperations,
} from "./classic/diagnosticResources/index.js";
import {
  OperationsOperations,
  _getOperationsOperations,
} from "./classic/operations/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { HelpClientOptionalParams } from "./api/helpContext.js";

export class HelpClient {
  private _client: HelpContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Help RP provider */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: HelpClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createHelp(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.discoverySolutionNLPOperationGroup =
      _getDiscoverySolutionNLPOperationGroupOperations(this._client);
    this.discoverySolutionOperationGroup =
      _getDiscoverySolutionOperationGroupOperations(this._client);
    this.checkNameAvailabilityOperationGroup =
      _getCheckNameAvailabilityOperationGroupOperations(this._client);
    this.solutionResourceSelfHelps = _getSolutionResourceSelfHelpsOperations(
      this._client,
    );
    this.troubleshooterResources = _getTroubleshooterResourcesOperations(
      this._client,
    );
    this.simplifiedSolutionsResources =
      _getSimplifiedSolutionsResourcesOperations(this._client);
    this.solutionResources = _getSolutionResourcesOperations(this._client);
    this.diagnosticResources = _getDiagnosticResourcesOperations(this._client);
    this.operations = _getOperationsOperations(this._client);
  }

  /** The operation groups for discoverySolutionNLPOperationGroup */
  public readonly discoverySolutionNLPOperationGroup: DiscoverySolutionNLPOperationGroupOperations;
  /** The operation groups for discoverySolutionOperationGroup */
  public readonly discoverySolutionOperationGroup: DiscoverySolutionOperationGroupOperations;
  /** The operation groups for checkNameAvailabilityOperationGroup */
  public readonly checkNameAvailabilityOperationGroup: CheckNameAvailabilityOperationGroupOperations;
  /** The operation groups for solutionResourceSelfHelps */
  public readonly solutionResourceSelfHelps: SolutionResourceSelfHelpsOperations;
  /** The operation groups for troubleshooterResources */
  public readonly troubleshooterResources: TroubleshooterResourcesOperations;
  /** The operation groups for simplifiedSolutionsResources */
  public readonly simplifiedSolutionsResources: SimplifiedSolutionsResourcesOperations;
  /** The operation groups for solutionResources */
  public readonly solutionResources: SolutionResourcesOperations;
  /** The operation groups for diagnosticResources */
  public readonly diagnosticResources: DiagnosticResourcesOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}
