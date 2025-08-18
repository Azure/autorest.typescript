// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { PurviewDataMapContext } from "../../api/purviewDataMapContext.js";
import {
  $delete,
  get,
  update,
  create,
} from "../../api/relationship/operations.js";
import {
  RelationshipDeleteOptionalParams,
  RelationshipGetOptionalParams,
  RelationshipUpdateOptionalParams,
  RelationshipCreateOptionalParams,
} from "../../api/relationship/options.js";
import {
  AtlasRelationship,
  AtlasRelationshipWithExtInfo,
} from "../../models/models.js";

/** Interface representing a Relationship operations. */
export interface RelationshipOperations {
  /** Delete a relationship between entities by its GUID. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    guid: string,
    options?: RelationshipDeleteOptionalParams,
  ) => Promise<void>;
  /** Get relationship information between entities by its GUID. */
  get: (
    guid: string,
    options?: RelationshipGetOptionalParams,
  ) => Promise<AtlasRelationshipWithExtInfo>;
  /** Update an existing relationship between entities. */
  update: (
    body: AtlasRelationship,
    options?: RelationshipUpdateOptionalParams,
  ) => Promise<AtlasRelationship>;
  /** Create a new relationship between entities. */
  create: (
    body: AtlasRelationship,
    options?: RelationshipCreateOptionalParams,
  ) => Promise<AtlasRelationship>;
}

function _getRelationship(context: PurviewDataMapContext) {
  return {
    delete: (guid: string, options?: RelationshipDeleteOptionalParams) =>
      $delete(context, guid, options),
    get: (guid: string, options?: RelationshipGetOptionalParams) =>
      get(context, guid, options),
    update: (
      body: AtlasRelationship,
      options?: RelationshipUpdateOptionalParams,
    ) => update(context, body, options),
    create: (
      body: AtlasRelationship,
      options?: RelationshipCreateOptionalParams,
    ) => create(context, body, options),
  };
}

export function _getRelationshipOperations(
  context: PurviewDataMapContext,
): RelationshipOperations {
  return {
    ..._getRelationship(context),
  };
}
