// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** The Contoso Widget Manager service version. */
export enum KnownVersions {
  /** Version 2022-08-31 */
  _20220830 = "2022-08-30",
}

/** Defines headers for operation response. */
export interface GetAvatarAsPngResponse {
  accept: "image/png";
}

/** Defines headers for operation response. */
export interface GetAvatarAsJpegResponse {
  accept: "image/jpeg";
}
