// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface Project {
  /** Only valid value is 'DPG' */
  codegen?: string;
  /** Only valid value is 'DPG' */
  builtfrom?: string;
  /** Only valid value is 'customers' */
  wasMadeFor?: string;
}
