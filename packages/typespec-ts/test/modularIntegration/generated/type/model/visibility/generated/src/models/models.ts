// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { VisibilityModel as VisibilityModelRest } from "../rest/index.js";

/** Output model with visibility properties. */
export interface VisibilityModel {
  /** Required string, illustrating a readonly property. */
  readonly readProp: string;
  /** Required int32, illustrating a query property. */
  queryProp: number;
  /** Required string[], illustrating a create property. */
  createProp: string[];
  /** Required int32[], illustrating a update property. */
  updateProp: number[];
  /** Required bool, illustrating a delete property. */
  deleteProp: boolean;
}

export function visibilityModelSerializer(
  item: VisibilityModel,
): VisibilityModelRest {
  return {
    queryProp: item["queryProp"],
    createProp: item["createProp"],
    updateProp: item["updateProp"],
    deleteProp: item["deleteProp"],
  };
}
