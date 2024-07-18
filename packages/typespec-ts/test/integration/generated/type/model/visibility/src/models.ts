// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Output model with visibility properties. */
export interface VisibilityModel {
  /** Required int32, illustrating a query property. */
  queryProp: number;
  /** Required string[], illustrating a create property. */
  createProp: string[];
  /** Required int32[], illustrating a update property. */
  updateProp: number[];
  /** Required bool, illustrating a delete property. */
  deleteProp: boolean;
}

/** RoundTrip model with readonly optional properties. */
export interface ReadOnlyModel {}
