// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Model of an access-token linked to an account. */
export interface AccessToken {
  /** The access-token name. */
  name: string;
  /** The access-token expiryAt utcDateTime. */
  expiryAt: Date | string;
}

/** Alias for AccessTokenState */
export type AccessTokenState = string;
/** Alias for Os */
export type Os = string;
