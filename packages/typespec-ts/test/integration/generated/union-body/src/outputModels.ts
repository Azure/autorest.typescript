// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface RequestRegisterCCOutput
  extends CommonRegistrationRequestOutput {
  payMethod: "01";
}

export interface CommonRegistrationRequestOutput {
  payMethod: PaymentMethodsOutput;
}

export interface RequestRegisterVAOutput {
  prop: string;
}

/** Alias for PaymentMethodsOutput */
export type PaymentMethodsOutput = "01";
