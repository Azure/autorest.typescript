// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Used in internal operations, should be generated but not exported. */
export interface BaseModel {
  name: string;
}

/** Used in internal operations, should be generated but not exported. */
export interface OuterModel extends BaseModel {
  inner: InnerModel;
}

/** Used in internal operations, should be generated but not exported. */
export interface InnerModel {
  name: string;
}

/** Used in internal operations, should be generated but not exported. */
export interface AbstractModel {
  name: string;
  /** the discriminator possible values: real */
  kind: string;
}

/** Used in internal operations, should be generated but not exported. */
export interface RealModel extends AbstractModel {
  kind: "real";
}

/** Used by both public and internal operation. It should be generated and exported. */
export interface SharedModel {
  name: string;
}

/** Used in an internal operation, should be generated but not exported. */
export interface NoDecoratorModelInInternal {
  name: string;
}

/** Used in an internal operation, should be generated but not exported. */
export interface InternalDecoratorModelInInternal {
  name: string;
}

/** Used in an internal operation but with public decorator, should be generated and exported. */
export interface PublicDecoratorModelInInternal {
  name: string;
}

/** Used in a public operation, should be generated and exported. */
export interface NoDecoratorModelInPublic {
  name: string;
}

/** Used in a public operation, should be generated and exported. */
export interface PublicDecoratorModelInPublic {
  name: string;
}

/** Alias for AbstractModelUnion */
export type AbstractModelUnion = RealModel | AbstractModel;
