// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Record used in operation parameters */
export interface InputRecord {
  requiredProp: string;
}

/** Record used in operation return type */
export interface OutputRecord {
  requiredProp: string;
}

/** Record used both as operation parameter and return type */
export interface InputOutputRecord {
  requiredProp: string;
}
