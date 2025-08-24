// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createPurviewDataMap,
  PurviewDataMapContext,
  PurviewDataMapClientOptionalParams,
} from "./api/index.js";
import {
  DiscoveryOperations,
  _getDiscoveryOperations,
} from "./classic/discovery/index.js";
import {
  EntityOperations,
  _getEntityOperations,
} from "./classic/entity/index.js";
import {
  GlossaryOperations,
  _getGlossaryOperations,
} from "./classic/glossary/index.js";
import {
  LineageOperations,
  _getLineageOperations,
} from "./classic/lineage/index.js";
import {
  RelationshipOperations,
  _getRelationshipOperations,
} from "./classic/relationship/index.js";
import { TypeOperations, _getTypeOperations } from "./classic/type/index.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { PurviewDataMapClientOptionalParams } from "./api/purviewDataMapContext.js";

export class PurviewDataMapClient {
  private _client: PurviewDataMapContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /**
   * Purview Data Map Service is a fully managed cloud service whose users can
   * discover the data sources they need and understand the data sources they find.
   * At the same time, Data Map helps organizations get more value from their
   * existing investments. This spec defines REST API of Purview Data Map Service.
   */
  constructor(
    endpointParam: string,
    credential: TokenCredential,
    options: PurviewDataMapClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createPurviewDataMap(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.type = _getTypeOperations(this._client);
    this.relationship = _getRelationshipOperations(this._client);
    this.lineage = _getLineageOperations(this._client);
    this.discovery = _getDiscoveryOperations(this._client);
    this.glossary = _getGlossaryOperations(this._client);
    this.entity = _getEntityOperations(this._client);
  }

  /** The operation groups for type */
  public readonly type: TypeOperations;
  /** The operation groups for relationship */
  public readonly relationship: RelationshipOperations;
  /** The operation groups for lineage */
  public readonly lineage: LineageOperations;
  /** The operation groups for discovery */
  public readonly discovery: DiscoveryOperations;
  /** The operation groups for glossary */
  public readonly glossary: GlossaryOperations;
  /** The operation groups for entity */
  public readonly entity: EntityOperations;
}
