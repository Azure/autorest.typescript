// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { PurviewDataMapContext } from "../../api/purviewDataMapContext.js";
import {
  getByUniqueAttribute,
  getNextPage,
  get,
} from "../../api/lineage/operations.js";
import {
  LineageGetByUniqueAttributeOptionalParams,
  LineageGetNextPageOptionalParams,
  LineageGetOptionalParams,
} from "../../api/lineage/options.js";
import { AtlasLineageInfo, LineageDirection } from "../../models/models.js";

/** Interface representing a Lineage operations. */
export interface LineageOperations {
  /**
   * Return lineage info about entity.
   *
   * In addition to the typeName path parameter,
   * attribute key-value pair(s) can be provided in the following
   * format
   *
   * attr:[attrName]=[attrValue]
   *
   * NOTE: The attrName and attrValue should be
   * unique across entities, eg. qualifiedName.
   *
   * The REST request would look
   * something like this:
   *
   * GET
   * /v2/lineage/uniqueAttribute/type/aType?attr:aTypeAttribute=someValue.
   */
  getByUniqueAttribute: (
    typeName: string,
    direction: LineageDirection,
    options?: LineageGetByUniqueAttributeOptionalParams,
  ) => Promise<AtlasLineageInfo>;
  /** Return immediate next page lineage info about entity with pagination */
  getNextPage: (
    guid: string,
    direction: LineageDirection,
    options?: LineageGetNextPageOptionalParams,
  ) => Promise<AtlasLineageInfo>;
  /** Get lineage info of the entity specified by GUID. */
  get: (
    guid: string,
    direction: LineageDirection,
    options?: LineageGetOptionalParams,
  ) => Promise<AtlasLineageInfo>;
}

function _getLineage(context: PurviewDataMapContext) {
  return {
    getByUniqueAttribute: (
      typeName: string,
      direction: LineageDirection,
      options?: LineageGetByUniqueAttributeOptionalParams,
    ) => getByUniqueAttribute(context, typeName, direction, options),
    getNextPage: (
      guid: string,
      direction: LineageDirection,
      options?: LineageGetNextPageOptionalParams,
    ) => getNextPage(context, guid, direction, options),
    get: (
      guid: string,
      direction: LineageDirection,
      options?: LineageGetOptionalParams,
    ) => get(context, guid, direction, options),
  };
}

export function _getLineageOperations(
  context: PurviewDataMapContext,
): LineageOperations {
  return {
    ..._getLineage(context),
  };
}
