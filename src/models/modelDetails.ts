// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * Details of a model's property, transformed from Property.
 */
export interface PropertyDetails {
  name: string;
  description?: string;
  serializedName: string;
  type: string;
  required: boolean;
  readOnly: boolean;
  isConstant: boolean;
}

/**
 * Details of a model, transformed from ObjectSchema.
 */
export interface ModelDetails {
  name: string;
  description: string;
  serializedName: string;
  properties: PropertyDetails[];
}
