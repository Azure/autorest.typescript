// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createDataMap,
  DataMapContext,
  DataMapClientOptionalParams,
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
import {
  TypeDefinitionOperations,
  _getTypeDefinitionOperations,
} from "./classic/typeDefinition/index.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { DataMapClientOptionalParams } from "./api/dataMapContext.js";

export class DataMapClient {
  private _client: DataMapContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: TokenCredential,
    options: DataMapClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createDataMap(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.typeDefinition = _getTypeDefinitionOperations(this._client);
    this.relationship = _getRelationshipOperations(this._client);
    this.lineage = _getLineageOperations(this._client);
    this.discovery = _getDiscoveryOperations(this._client);
    this.glossary = _getGlossaryOperations(this._client);
    this.entity = _getEntityOperations(this._client);
  }

  /** The operation groups for typeDefinition */
  public readonly typeDefinition: TypeDefinitionOperations;
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
