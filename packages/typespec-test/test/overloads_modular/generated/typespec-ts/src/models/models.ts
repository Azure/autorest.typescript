// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { KeyCredential, TokenCredential } from "@azure/core-auth";

/** The Contoso Widget Manager service version. */
export enum KnownVersions {
  /** Version 2022-08-31 */
  _20220830 = "2022-08-30",
}

/** Alias for _WidgetManagerEndpoint */
export type _WidgetManagerEndpoint = string | string;
/** Alias for _WidgetManagerCredentialUnion */
export type _WidgetManagerCredentialUnion = KeyCredential | TokenCredential;
