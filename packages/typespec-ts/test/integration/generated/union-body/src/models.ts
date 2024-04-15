// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface RequestRegisterCC extends CommonRegistrationRequest {
  payMethod: "01";
}

export interface CommonRegistrationRequest {
  payMethod: PAYMENT_METHODS;
}

export interface RequestRegisterVA {
  prop: string;
}

/** Alias for PAYMENT_METHODS */
export type PAYMENT_METHODS = "01";
