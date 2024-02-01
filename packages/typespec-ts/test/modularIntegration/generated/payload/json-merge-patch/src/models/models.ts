// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Details about a resource. */
export interface Resource {
  name: string;
  description?: string;
  map?: Record<string, InnerModel>;
  array?: InnerModel[];
  intValue?: number;
  floatValue?: number;
  innerModel?: InnerModel;
  intArray?: number[];
}

/** It is the model used by Resource model */
export interface InnerModel {
  name?: string;
  description?: string;
}

/** Details about a resource for patch operation. */
export interface ResourcePatch {
  description?: string;
  map?: Record<string, InnerModel>;
  array?: InnerModel[];
  intValue?: number;
  floatValue?: number;
  innerModel?: InnerModel;
  intArray?: number[];
}
