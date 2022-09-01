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

export interface PlayFabAuthenticationOperationsGetEntityTokenHeaders {
  /** Accept header */
  accept: "application/json";
}

export interface PlayFabAuthenticationOperationsGetEntityTokenBodyParam {
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

export interface PlayFabAuthenticationOperationsGetEntityTokenHeaderParam {
  headers: RawHttpHeadersInput &
    PlayFabAuthenticationOperationsGetEntityTokenHeaders;
}

export type PlayFabAuthenticationOperationsGetEntityTokenParameters =
  PlayFabAuthenticationOperationsGetEntityTokenHeaderParam &
    PlayFabAuthenticationOperationsGetEntityTokenBodyParam &
    RequestParameters;

export interface PlayFabAuthenticationOperationsAuthenticateWithAndroidDeviceIdHeaders {
  /** Accept header */
  accept: "application/json";
}

export interface PlayFabAuthenticationOperationsAuthenticateWithAndroidDeviceIdBodyParam {
  body: AuthenticateAndroidDeviceIdIdentityRequest;
}

export interface PlayFabAuthenticationOperationsAuthenticateWithAndroidDeviceIdHeaderParam {
  headers: RawHttpHeadersInput &
    PlayFabAuthenticationOperationsAuthenticateWithAndroidDeviceIdHeaders;
}

export type PlayFabAuthenticationOperationsAuthenticateWithAndroidDeviceIdParameters =
  PlayFabAuthenticationOperationsAuthenticateWithAndroidDeviceIdHeaderParam &
    PlayFabAuthenticationOperationsAuthenticateWithAndroidDeviceIdBodyParam &
    RequestParameters;

export interface PlayFabAuthenticationOperationsAuthenticateWithCustomIdHeaders {
  /** Accept header */
  accept: "application/json";
}

export interface PlayFabAuthenticationOperationsAuthenticateWithCustomIdBodyParam {
  body: AuthenticateCustomIdIdentityRequest;
}

export interface PlayFabAuthenticationOperationsAuthenticateWithCustomIdHeaderParam {
  headers: RawHttpHeadersInput &
    PlayFabAuthenticationOperationsAuthenticateWithCustomIdHeaders;
}

export type PlayFabAuthenticationOperationsAuthenticateWithCustomIdParameters =
  PlayFabAuthenticationOperationsAuthenticateWithCustomIdHeaderParam &
    PlayFabAuthenticationOperationsAuthenticateWithCustomIdBodyParam &
    RequestParameters;

export interface PlayFabAuthenticationOperationsAuthenticateWithIOSDeviceIdHeaders {
  /** Accept header */
  accept: "application/json";
}

export interface PlayFabAuthenticationOperationsAuthenticateWithIOSDeviceIdBodyParam {
  body: AuthenticateIOSDeviceIdIdentityRequest;
}

export interface PlayFabAuthenticationOperationsAuthenticateWithIOSDeviceIdHeaderParam {
  headers: RawHttpHeadersInput &
    PlayFabAuthenticationOperationsAuthenticateWithIOSDeviceIdHeaders;
}

export type PlayFabAuthenticationOperationsAuthenticateWithIOSDeviceIdParameters =
  PlayFabAuthenticationOperationsAuthenticateWithIOSDeviceIdHeaderParam &
    PlayFabAuthenticationOperationsAuthenticateWithIOSDeviceIdBodyParam &
    RequestParameters;

export interface PlayFabAuthenticationOperationsAuthenticateWithNintendoSwitchDeviceIDHeaders {
  /** Accept header */
  accept: "application/json";
}

export interface PlayFabAuthenticationOperationsAuthenticateWithNintendoSwitchDeviceIDBodyParam {
  body: AuthenticateNintendoSwitchDeviceIDIdentityRequest;
}

export interface PlayFabAuthenticationOperationsAuthenticateWithNintendoSwitchDeviceIDHeaderParam {
  headers: RawHttpHeadersInput &
    PlayFabAuthenticationOperationsAuthenticateWithNintendoSwitchDeviceIDHeaders;
}

export type PlayFabAuthenticationOperationsAuthenticateWithNintendoSwitchDeviceIDParameters =
  PlayFabAuthenticationOperationsAuthenticateWithNintendoSwitchDeviceIDHeaderParam &
    PlayFabAuthenticationOperationsAuthenticateWithNintendoSwitchDeviceIDBodyParam &
    RequestParameters;

export interface PlayFabAuthenticationOperationsGetLinkedPlayerIdentitiesHeaders {
  /** Token */
  "x-entity-token": string;
  /** Accept header */
  accept: "application/json";
}

export interface PlayFabAuthenticationOperationsGetLinkedPlayerIdentitiesBodyParam {
  body: GetLinkedPlayerIdentitiesRequest;
}

export interface PlayFabAuthenticationOperationsGetLinkedPlayerIdentitiesHeaderParam {
  headers: RawHttpHeadersInput &
    PlayFabAuthenticationOperationsGetLinkedPlayerIdentitiesHeaders;
}

export type PlayFabAuthenticationOperationsGetLinkedPlayerIdentitiesParameters =
  PlayFabAuthenticationOperationsGetLinkedPlayerIdentitiesHeaderParam &
    PlayFabAuthenticationOperationsGetLinkedPlayerIdentitiesBodyParam &
    RequestParameters;

export interface PlayFabAuthenticationOperationsUnlinkPlayerIdentityHeaders {
  /** Token */
  "x-entity-token": string;
  /** Accept header */
  accept: "application/json";
}

export interface PlayFabAuthenticationOperationsUnlinkPlayerIdentityBodyParam {
  body: UnlinkPlayerIdentityRequest;
}

export interface PlayFabAuthenticationOperationsUnlinkPlayerIdentityHeaderParam {
  headers: RawHttpHeadersInput &
    PlayFabAuthenticationOperationsUnlinkPlayerIdentityHeaders;
}

export type PlayFabAuthenticationOperationsUnlinkPlayerIdentityParameters =
  PlayFabAuthenticationOperationsUnlinkPlayerIdentityHeaderParam &
    PlayFabAuthenticationOperationsUnlinkPlayerIdentityBodyParam &
    RequestParameters;

export interface PlayFabFileOperationsAbortFileUploadsHeaders {
  /** Token */
  "x-entity-token": string;
  /** Accept header */
  accept: "application/json";
}

export interface PlayFabFileOperationsAbortFileUploadsBodyParam {
  /** Aborts the pending upload of the requested files. */
  body: AbortFileUploadsRequest;
}

export interface PlayFabFileOperationsAbortFileUploadsHeaderParam {
  headers: RawHttpHeadersInput & PlayFabFileOperationsAbortFileUploadsHeaders;
}

export type PlayFabFileOperationsAbortFileUploadsParameters =
  PlayFabFileOperationsAbortFileUploadsHeaderParam &
    PlayFabFileOperationsAbortFileUploadsBodyParam &
    RequestParameters;

export interface PlayFabFileOperationsDeleteFilesHeaders {
  /** Token */
  "x-entity-token": string;
  /** Accept header */
  accept: "application/json";
}

export interface PlayFabFileOperationsDeleteFilesBodyParam {
  /** Deletes the requested files from the entity's profile. */
  body: DeleteFilesRequest;
}

export interface PlayFabFileOperationsDeleteFilesHeaderParam {
  headers: RawHttpHeadersInput & PlayFabFileOperationsDeleteFilesHeaders;
}

export type PlayFabFileOperationsDeleteFilesParameters =
  PlayFabFileOperationsDeleteFilesHeaderParam &
    PlayFabFileOperationsDeleteFilesBodyParam &
    RequestParameters;

export interface PlayFabFileOperationsFinalizeFileUploadsHeaders {
  /** Token */
  "x-entity-token": string;
  /** Accept header */
  accept: "application/json";
}

export interface PlayFabFileOperationsFinalizeFileUploadsBodyParam {
  /**
   * Finalizes the upload of the requested files. Verifies that the files have been
   * successfully uploaded and moves the file pointers from pending to live.
   */
  body: FinalizeFileUploadsRequest;
}

export interface PlayFabFileOperationsFinalizeFileUploadsHeaderParam {
  headers: RawHttpHeadersInput &
    PlayFabFileOperationsFinalizeFileUploadsHeaders;
}

export type PlayFabFileOperationsFinalizeFileUploadsParameters =
  PlayFabFileOperationsFinalizeFileUploadsHeaderParam &
    PlayFabFileOperationsFinalizeFileUploadsBodyParam &
    RequestParameters;

export interface PlayFabFileOperationsGetFilesHeaders {
  /** Token */
  "x-entity-token": string;
  /** Accept header */
  accept: "application/json";
}

export interface PlayFabFileOperationsGetFilesBodyParam {
  /**
   * Returns URLs that may be used to download the files for a profile for a limited
   * length of time. Only returns files that have been successfully uploaded, files
   * that are still pending will either return the old value, if it exists, or
   * nothing.
   */
  body: GetFilesRequest;
}

export interface PlayFabFileOperationsGetFilesHeaderParam {
  headers: RawHttpHeadersInput & PlayFabFileOperationsGetFilesHeaders;
}

export type PlayFabFileOperationsGetFilesParameters =
  PlayFabFileOperationsGetFilesHeaderParam &
    PlayFabFileOperationsGetFilesBodyParam &
    RequestParameters;

export interface PlayFabFileOperationsInitiateFileUploadsHeaders {
  /** Token */
  "x-entity-token": string;
  /** Accept header */
  accept: "application/json";
}

export interface PlayFabFileOperationsInitiateFileUploadsBodyParam {
  /**
   * Returns URLs that may be used to upload the files for a profile 5 minutes.
   * After using the upload calls FinalizeFileUploads must be called to move the
   * file status from pending to live.
   */
  body: InitiateFileUploadsRequest;
}

export interface PlayFabFileOperationsInitiateFileUploadsHeaderParam {
  headers: RawHttpHeadersInput &
    PlayFabFileOperationsInitiateFileUploadsHeaders;
}

export type PlayFabFileOperationsInitiateFileUploadsParameters =
  PlayFabFileOperationsInitiateFileUploadsHeaderParam &
    PlayFabFileOperationsInitiateFileUploadsBodyParam &
    RequestParameters;

export interface PlayFabFileOperationsGetObjectsHeaders {
  /** Token */
  "x-entity-token": string;
  /** Accept header */
  accept: "application/json";
}

export interface PlayFabFileOperationsGetObjectsBodyParam {
  /** Gets JSON objects from an entity profile and returns it. */
  body: GetObjectsRequest;
}

export interface PlayFabFileOperationsGetObjectsHeaderParam {
  headers: RawHttpHeadersInput & PlayFabFileOperationsGetObjectsHeaders;
}

export type PlayFabFileOperationsGetObjectsParameters =
  PlayFabFileOperationsGetObjectsHeaderParam &
    PlayFabFileOperationsGetObjectsBodyParam &
    RequestParameters;

export interface PlayFabFileOperationsSetObjectsHeaders {
  /** Token */
  "x-entity-token": string;
  /** Accept header */
  accept: "application/json";
}

export interface PlayFabFileOperationsSetObjectsBodyParam {
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

export interface PlayFabFileOperationsSetObjectsHeaderParam {
  headers: RawHttpHeadersInput & PlayFabFileOperationsSetObjectsHeaders;
}

export type PlayFabFileOperationsSetObjectsParameters =
  PlayFabFileOperationsSetObjectsHeaderParam &
    PlayFabFileOperationsSetObjectsBodyParam &
    RequestParameters;

export interface PlayFabEventsOperationsWriteEventsHeaders {
  /** Token */
  "x-entity-token": string;
  /** Accept header */
  accept: "application/json";
}

export interface PlayFabEventsOperationsWriteEventsBodyParam {
  body: WriteEventsRequest;
}

export interface PlayFabEventsOperationsWriteEventsHeaderParam {
  headers: RawHttpHeadersInput & PlayFabEventsOperationsWriteEventsHeaders;
}

export type PlayFabEventsOperationsWriteEventsParameters =
  PlayFabEventsOperationsWriteEventsHeaderParam &
    PlayFabEventsOperationsWriteEventsBodyParam &
    RequestParameters;

export interface PlayFabProfilesOperationsLoginPlayerHeaders {
  /** Token */
  "x-entity-token": string;
  /** Accept header */
  accept: "application/json";
}

export interface PlayFabProfilesOperationsLoginPlayerBodyParam {
  body: LoginPlayerRequest;
}

export interface PlayFabProfilesOperationsLoginPlayerHeaderParam {
  headers: RawHttpHeadersInput & PlayFabProfilesOperationsLoginPlayerHeaders;
}

export type PlayFabProfilesOperationsLoginPlayerParameters =
  PlayFabProfilesOperationsLoginPlayerHeaderParam &
    PlayFabProfilesOperationsLoginPlayerBodyParam &
    RequestParameters;
