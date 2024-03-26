// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  CodeSigningAccount,
  CodeSigningAccountPatch,
  CheckNameAvailability,
  CertificateProfile,
  RevokeCertificate,
} from "./models.js";

export type OperationsListParameters = RequestParameters;
export type CodeSigningAccountsGetParameters = RequestParameters;

export interface CodeSigningAccountsCreateBodyParam {
  /** Parameters to create the trusted signing account */
  body: CodeSigningAccount;
}

export type CodeSigningAccountsCreateParameters =
  CodeSigningAccountsCreateBodyParam & RequestParameters;

export interface CodeSigningAccountsUpdateBodyParam {
  /** Parameters supplied to update the trusted signing account */
  body: CodeSigningAccountPatch;
}

export type CodeSigningAccountsUpdateParameters =
  CodeSigningAccountsUpdateBodyParam & RequestParameters;
export type CodeSigningAccountsDeleteParameters = RequestParameters;
export type CodeSigningAccountsListByResourceGroupParameters =
  RequestParameters;
export type CodeSigningAccountsListBySubscriptionParameters = RequestParameters;

export interface CodeSigningAccountsCheckNameAvailabilityBodyParam {
  /** The CheckAvailability request */
  body: CheckNameAvailability;
}

export type CodeSigningAccountsCheckNameAvailabilityParameters =
  CodeSigningAccountsCheckNameAvailabilityBodyParam & RequestParameters;
export type CertificateProfilesGetParameters = RequestParameters;

export interface CertificateProfilesCreateBodyParam {
  /** Parameters to create the certificate profile */
  body: CertificateProfile;
}

export type CertificateProfilesCreateParameters =
  CertificateProfilesCreateBodyParam & RequestParameters;
export type CertificateProfilesDeleteParameters = RequestParameters;
export type CertificateProfilesListByCodeSigningAccountParameters =
  RequestParameters;

export interface CertificateProfilesRevokeCertificateBodyParam {
  /** Parameters to revoke the certificate profile */
  body: RevokeCertificate;
}

export type CertificateProfilesRevokeCertificateParameters =
  CertificateProfilesRevokeCertificateBodyParam & RequestParameters;
