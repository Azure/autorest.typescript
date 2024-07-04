// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface NewModelOutput {
  newProp: string;
  enumProp: NewEnumOutput;
  unionProp: NewUnionOutput;
}

/** Alias for NewEnumOutput */
export type NewEnumOutput = "newEnumMember";
/** Alias for NewUnionOutput */
export type NewUnionOutput = string | number;
