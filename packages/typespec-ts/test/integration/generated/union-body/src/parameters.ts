// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { RequestRegisterCC, RequestRegisterVA } from "./models";

export interface RegistrationBodyParam {
  body: RequestRegisterCC | RequestRegisterVA;
}

export type RegistrationParameters = RegistrationBodyParam & RequestParameters;
