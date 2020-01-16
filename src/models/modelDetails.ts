// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * Details of a model's property, transformed from Property.
 */
export interface PropertyDetails {
  name: string;
  description?: string;
  defaultValue?: string;
  serializedName: string;
  type: string;
  required: boolean;
  readOnly: boolean;
  isConstant: boolean;
}

/**
 * Details of a property's type
 */
export interface PropertyTypeDetails {
  typeName: string;
  isConstant: boolean;
  defaultValue?: string;
  kind: PropertyKind;
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

/**
 * Details what the kind of property for handling
 */
export enum PropertyKind {
  Primitive,
  Enum,
  Composite
}
