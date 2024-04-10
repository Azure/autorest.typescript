// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface RequestRegisterCCOutput
  extends CommonRegistrationRequestOutput {
  payMethod: "01";
}

export interface CommonRegistrationRequestOutput {
  /** Possible values: "01" */
  payMethod: string;
}

export interface RequestRegisterVAOutput {
  prop: string;
}
