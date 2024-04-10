// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface RequestRegisterCC extends CommonRegistrationRequest {
  payMethod: "01";
}

export interface CommonRegistrationRequest {
  /** Possible values: "01" */
  payMethod: string;
}

export interface RequestRegisterVA {
  prop: string;
}
