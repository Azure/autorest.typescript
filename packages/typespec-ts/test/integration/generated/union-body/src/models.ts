// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface RequestRegisterCC extends CommonRegistrationRequest {
  payMethod: "01";
}

export interface CommonRegistrationRequest {
  payMethod: PaymentMethods;
}

export interface RequestRegisterVA {
  prop: string;
}

/** Alias for PaymentMethods */
export type PaymentMethods = "01";
