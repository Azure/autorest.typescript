// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Used in a public operation, should be generated and exported. */
export interface NoDecoratorModelInPublicOutput {
  name: string;
}

/** Used in a public operation, should be generated and exported. */
export interface PublicDecoratorModelInPublicOutput {
  name: string;
}

/** Used in an internal operation, should be generated but not exported. */
export interface NoDecoratorModelInInternalOutput {
  name: string;
}

/** Used in an internal operation, should be generated but not exported. */
export interface InternalDecoratorModelInInternalOutput {
  name: string;
}

/** Used in an internal operation but with public decorator, should be generated and exported. */
export interface PublicDecoratorModelInInternalOutput {
  name: string;
}

/** Used by both public and internal operation. It should be generated and exported. */
export interface SharedModelOutput {
  name: string;
}

/** Used in internal operations, should be generated but not exported. */
export interface OuterModelOutput extends BaseModelOutput {
  inner: InnerModelOutput;
}

/** Used in internal operations, should be generated but not exported. */
export interface InnerModelOutput {
  name: string;
}

/** Used in internal operations, should be generated but not exported. */
export interface BaseModelOutput {
  name: string;
}

/** Used in internal operations, should be generated but not exported. */
export interface AbstractModelOutputParent {
  name: string;
  kind: string;
}

/** Used in internal operations, should be generated but not exported. */
export interface RealModelOutput extends AbstractModelOutputParent {
  kind: "real";
}

/** Used in internal operations, should be generated but not exported. */
export type AbstractModelOutput = RealModelOutput;
