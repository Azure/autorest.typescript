// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import {
  GetEntityTokenRequest,
  AuthenticateAndroidDeviceIdIdentityRequest,
  AuthenticateCustomIdIdentityRequest,
  AuthenticateIOSDeviceIdIdentityRequest,
  AuthenticateNintendoSwitchDeviceIDIdentityRequest,
  GetLinkedPlayerIdentitiesRequest,
  UnlinkPlayerIdentityRequest,
  AbortFileUploadsRequest,
  DeleteFilesRequest,
  FinalizeFileUploadsRequest,
  GetFilesRequest,
  InitiateFileUploadsRequest,
  GetObjectsRequest,
  SetObjectsRequest,
  WriteEventsRequest,
  LoginPlayerRequest,
} from "./models";

export interface GetEntityTokenHeaders {
  /** Accept header */
  accept: "application/json";
}

export interface GetEntityTokenBodyParam {
  /**
   * This API must be called with X-SecretKey, X-Authentication or X-EntityToken
   * headers. An optional EntityKey may be included to attempt to set the resulting
   * EntityToken to a specific entity, however the entity must be a relation of the
   * caller, such as the master_player_account of a character. If sending
   * X-EntityToken the account will be marked as freshly logged in and will issue a
   * new token. If using X-Authentication or X-EntityToken the header must still be
   * valid and cannot be expired or revoked.
   */
  body: GetEntityTokenRequest;
}

export interface GetEntityTokenHeaderParam {
  headers: RawHttpHeadersInput & GetEntityTokenHeaders;
}

export type GetEntityTokenParameters = GetEntityTokenHeaderParam &
  GetEntityTokenBodyParam &
  RequestParameters;

export interface AuthenticateWithAndroidDeviceIdHeaders {
  /** Accept header */
  accept: "application/json";
}

export interface AuthenticateWithAndroidDeviceIdBodyParam {
  body: AuthenticateAndroidDeviceIdIdentityRequest;
}

export interface AuthenticateWithAndroidDeviceIdHeaderParam {
  headers: RawHttpHeadersInput & AuthenticateWithAndroidDeviceIdHeaders;
}

export type AuthenticateWithAndroidDeviceIdParameters =
  AuthenticateWithAndroidDeviceIdHeaderParam &
    AuthenticateWithAndroidDeviceIdBodyParam &
    RequestParameters;

export interface AuthenticateWithCustomIdHeaders {
  /** Accept header */
  accept: "application/json";
}

export interface AuthenticateWithCustomIdBodyParam {
  body: AuthenticateCustomIdIdentityRequest;
}

export interface AuthenticateWithCustomIdHeaderParam {
  headers: RawHttpHeadersInput & AuthenticateWithCustomIdHeaders;
}

export type AuthenticateWithCustomIdParameters =
  AuthenticateWithCustomIdHeaderParam &
    AuthenticateWithCustomIdBodyParam &
    RequestParameters;

export interface AuthenticateWithIOSDeviceIdHeaders {
  /** Accept header */
  accept: "application/json";
}

export interface AuthenticateWithIOSDeviceIdBodyParam {
  body: AuthenticateIOSDeviceIdIdentityRequest;
}

export interface AuthenticateWithIOSDeviceIdHeaderParam {
  headers: RawHttpHeadersInput & AuthenticateWithIOSDeviceIdHeaders;
}

export type AuthenticateWithIOSDeviceIdParameters =
  AuthenticateWithIOSDeviceIdHeaderParam &
    AuthenticateWithIOSDeviceIdBodyParam &
    RequestParameters;

export interface AuthenticateWithNintendoSwitchDeviceIDHeaders {
  /** Accept header */
  accept: "application/json";
}

export interface AuthenticateWithNintendoSwitchDeviceIDBodyParam {
  body: AuthenticateNintendoSwitchDeviceIDIdentityRequest;
}

export interface AuthenticateWithNintendoSwitchDeviceIDHeaderParam {
  headers: RawHttpHeadersInput & AuthenticateWithNintendoSwitchDeviceIDHeaders;
}

export type AuthenticateWithNintendoSwitchDeviceIDParameters =
  AuthenticateWithNintendoSwitchDeviceIDHeaderParam &
    AuthenticateWithNintendoSwitchDeviceIDBodyParam &
    RequestParameters;

export interface GetLinkedPlayerIdentitiesHeaders {
  /** Token */
  "x-entity-token": string;
  /** Accept header */
  accept: "application/json";
}

export interface GetLinkedPlayerIdentitiesBodyParam {
  body: GetLinkedPlayerIdentitiesRequest;
}

export interface GetLinkedPlayerIdentitiesHeaderParam {
  headers: RawHttpHeadersInput & GetLinkedPlayerIdentitiesHeaders;
}

export type GetLinkedPlayerIdentitiesParameters =
  GetLinkedPlayerIdentitiesHeaderParam &
    GetLinkedPlayerIdentitiesBodyParam &
    RequestParameters;

export interface UnlinkPlayerIdentityHeaders {
  /** Token */
  "x-entity-token": string;
  /** Accept header */
  accept: "application/json";
}

export interface UnlinkPlayerIdentityBodyParam {
  body: UnlinkPlayerIdentityRequest;
}

export interface UnlinkPlayerIdentityHeaderParam {
  headers: RawHttpHeadersInput & UnlinkPlayerIdentityHeaders;
}

export type UnlinkPlayerIdentityParameters = UnlinkPlayerIdentityHeaderParam &
  UnlinkPlayerIdentityBodyParam &
  RequestParameters;

export interface AbortFileUploadsHeaders {
  /** Token */
  "x-entity-token": string;
  /** Accept header */
  accept: "application/json";
}

export interface AbortFileUploadsBodyParam {
  /** Aborts the pending upload of the requested files. */
  body: AbortFileUploadsRequest;
}

export interface AbortFileUploadsHeaderParam {
  headers: RawHttpHeadersInput & AbortFileUploadsHeaders;
}

export type AbortFileUploadsParameters = AbortFileUploadsHeaderParam &
  AbortFileUploadsBodyParam &
  RequestParameters;

export interface DeleteFilesHeaders {
  /** Token */
  "x-entity-token": string;
  /** Accept header */
  accept: "application/json";
}

export interface DeleteFilesBodyParam {
  /** Deletes the requested files from the entity's profile. */
  body: DeleteFilesRequest;
}

export interface DeleteFilesHeaderParam {
  headers: RawHttpHeadersInput & DeleteFilesHeaders;
}

export type DeleteFilesParameters = DeleteFilesHeaderParam &
  DeleteFilesBodyParam &
  RequestParameters;

export interface FinalizeFileUploadsHeaders {
  /** Token */
  "x-entity-token": string;
  /** Accept header */
  accept: "application/json";
}

export interface FinalizeFileUploadsBodyParam {
  /**
   * Finalizes the upload of the requested files. Verifies that the files have been
   * successfully uploaded and moves the file pointers from pending to live.
   */
  body: FinalizeFileUploadsRequest;
}

export interface FinalizeFileUploadsHeaderParam {
  headers: RawHttpHeadersInput & FinalizeFileUploadsHeaders;
}

export type FinalizeFileUploadsParameters = FinalizeFileUploadsHeaderParam &
  FinalizeFileUploadsBodyParam &
  RequestParameters;

export interface GetFilesHeaders {
  /** Token */
  "x-entity-token": string;
  /** Accept header */
  accept: "application/json";
}

export interface GetFilesBodyParam {
  /**
   * Returns URLs that may be used to download the files for a profile for a limited
   * length of time. Only returns files that have been successfully uploaded, files
   * that are still pending will either return the old value, if it exists, or
   * nothing.
   */
  body: GetFilesRequest;
}

export interface GetFilesHeaderParam {
  headers: RawHttpHeadersInput & GetFilesHeaders;
}

export type GetFilesParameters = GetFilesHeaderParam &
  GetFilesBodyParam &
  RequestParameters;

export interface InitiateFileUploadsHeaders {
  /** Token */
  "x-entity-token": string;
  /** Accept header */
  accept: "application/json";
}

export interface InitiateFileUploadsBodyParam {
  /**
   * Returns URLs that may be used to upload the files for a profile 5 minutes.
   * After using the upload calls FinalizeFileUploads must be called to move the
   * file status from pending to live.
   */
  body: InitiateFileUploadsRequest;
}

export interface InitiateFileUploadsHeaderParam {
  headers: RawHttpHeadersInput & InitiateFileUploadsHeaders;
}

export type InitiateFileUploadsParameters = InitiateFileUploadsHeaderParam &
  InitiateFileUploadsBodyParam &
  RequestParameters;

export interface GetObjectsHeaders {
  /** Token */
  "x-entity-token": string;
  /** Accept header */
  accept: "application/json";
}

export interface GetObjectsBodyParam {
  /** Gets JSON objects from an entity profile and returns it. */
  body: GetObjectsRequest;
}

export interface GetObjectsHeaderParam {
  headers: RawHttpHeadersInput & GetObjectsHeaders;
}

export type GetObjectsParameters = GetObjectsHeaderParam &
  GetObjectsBodyParam &
  RequestParameters;

export interface SetObjectsHeaders {
  /** Token */
  "x-entity-token": string;
  /** Accept header */
  accept: "application/json";
}

export interface SetObjectsBodyParam {
  /**
   * Sets JSON objects on the requested entity profile. May include a version number
   * to be used to perform optimistic concurrency operations during update. If the
   * current version differs from the version in the request the request will be
   * ignored. If no version is set on the request then the value will always be
   * updated if the values differ. Using the version value does not guarantee a
   * write though, ConcurrentEditError may still occur if multiple clients are
   * attempting to update the same profile.
   */
  body: SetObjectsRequest;
}

export interface SetObjectsHeaderParam {
  headers: RawHttpHeadersInput & SetObjectsHeaders;
}

export type SetObjectsParameters = SetObjectsHeaderParam &
  SetObjectsBodyParam &
  RequestParameters;

export interface WriteEventsHeaders {
  /** Token */
  "x-entity-token": string;
  /** Accept header */
  accept: "application/json";
}

export interface WriteEventsBodyParam {
  body: WriteEventsRequest;
}

export interface WriteEventsHeaderParam {
  headers: RawHttpHeadersInput & WriteEventsHeaders;
}

export type WriteEventsParameters = WriteEventsHeaderParam &
  WriteEventsBodyParam &
  RequestParameters;

export interface LoginPlayerHeaders {
  /** Token */
  "x-entity-token": string;
  /** Accept header */
  accept: "application/json";
}

export interface LoginPlayerBodyParam {
  body: LoginPlayerRequest;
}

export interface LoginPlayerHeaderParam {
  headers: RawHttpHeadersInput & LoginPlayerHeaders;
}

export type LoginPlayerParameters = LoginPlayerHeaderParam &
  LoginPlayerBodyParam &
  RequestParameters;
