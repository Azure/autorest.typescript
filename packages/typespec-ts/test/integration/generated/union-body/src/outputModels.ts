// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface RequestRegisterCCOutput
  extends CommonRegistrationRequestOutput {
  payMethod: "01";
}

export interface CommonRegistrationRequestOutput {
  payMethod: PAYMENT_METHODSOutput;
}

export interface RequestRegisterVAOutput {
  prop: string;
}

/** Alias for PAYMENT_METHODSOutput */
export type PAYMENT_METHODSOutput = "01";
