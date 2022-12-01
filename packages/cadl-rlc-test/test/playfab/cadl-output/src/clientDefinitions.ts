// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetEntityTokenParameters,
  AuthenticateWithAndroidDeviceIdParameters,
  AuthenticateWithCustomIdParameters,
  AuthenticateWithIOSDeviceIdParameters,
  AuthenticateWithNintendoSwitchDeviceIDParameters,
  GetLinkedPlayerIdentitiesParameters,
  UnlinkPlayerIdentityParameters,
  AbortFileUploadsParameters,
  DeleteFilesParameters,
  FinalizeFileUploadsParameters,
  GetFilesParameters,
  InitiateFileUploadsParameters,
  GetObjectsParameters,
  SetObjectsParameters,
  WriteEventsParameters,
  LoginPlayerParameters,
} from "./parameters";
import {
  GetEntityToken200Response,
  GetEntityTokenDefaultResponse,
  AuthenticateWithAndroidDeviceId200Response,
  AuthenticateWithAndroidDeviceIdDefaultResponse,
  AuthenticateWithCustomId200Response,
  AuthenticateWithCustomIdDefaultResponse,
  AuthenticateWithIOSDeviceId200Response,
  AuthenticateWithIOSDeviceIdDefaultResponse,
  AuthenticateWithNintendoSwitchDeviceID200Response,
  AuthenticateWithNintendoSwitchDeviceIDDefaultResponse,
  GetLinkedPlayerIdentities200Response,
  GetLinkedPlayerIdentitiesDefaultResponse,
  UnlinkPlayerIdentity200Response,
  UnlinkPlayerIdentityDefaultResponse,
  AbortFileUploads200Response,
  AbortFileUploadsDefaultResponse,
  DeleteFiles200Response,
  DeleteFilesDefaultResponse,
  FinalizeFileUploads200Response,
  FinalizeFileUploadsDefaultResponse,
  GetFiles200Response,
  GetFilesDefaultResponse,
  InitiateFileUploads200Response,
  InitiateFileUploadsDefaultResponse,
  GetObjects200Response,
  GetObjectsDefaultResponse,
  SetObjects200Response,
  SetObjectsDefaultResponse,
  WriteEvents200Response,
  WriteEventsDefaultResponse,
  LoginPlayer200Response,
  LoginPlayerDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetEntityToken {
  /**
   * This feature is in private preview with a set of managed partners. Method to
   * exchange a legacy AuthenticationTicket or title SecretKey for an Entity Token
   * or to refresh a still valid Entity Token.
   */
  post(
    options: GetEntityTokenParameters
  ): StreamableMethod<
    GetEntityToken200Response | GetEntityTokenDefaultResponse
  >;
}

export interface AuthenticateWithAndroidDeviceId {
  /**
   * This feature is in private preview with a set of managed partners.
   * Authenticates a player from the specified player account pool using the
   * "Android Device ID" player identity provider, finds or provisions a
   * master_player_account associated with the player identity, and returns an
   * entity token for it. Optionally logs the authenticated player into the
   * specified title and returns an additional entity token for the
   * title_player_account.
   */
  post(
    options: AuthenticateWithAndroidDeviceIdParameters
  ): StreamableMethod<
    | AuthenticateWithAndroidDeviceId200Response
    | AuthenticateWithAndroidDeviceIdDefaultResponse
  >;
}

export interface AuthenticateWithCustomId {
  /**
   * This feature is in private preview with a set of managed partners.
   * Authenticates a player from the specified player account pool using the
   * "Custom ID" player identity provider, finds or provisions a
   * master_player_account associated with the player identity, and returns an
   * entity token for it. Optionally logs the authenticated player into the
   * specified title and returns an additional entity token for the
   * title_player_account.
   */
  post(
    options: AuthenticateWithCustomIdParameters
  ): StreamableMethod<
    | AuthenticateWithCustomId200Response
    | AuthenticateWithCustomIdDefaultResponse
  >;
}

export interface AuthenticateWithIOSDeviceId {
  /**
   * This feature is in private preview with a set of managed partners.
   * Authenticates a player from the specified player account pool using the "IOS
   * Device ID" player identity provider, finds or provisions a
   * master_player_account associated with the player identity, and returns an
   * entity token for it. Optionally logs the authenticated player into the
   * specified title and returns an additional entity token for the
   * title_player_account.
   */
  post(
    options: AuthenticateWithIOSDeviceIdParameters
  ): StreamableMethod<
    | AuthenticateWithIOSDeviceId200Response
    | AuthenticateWithIOSDeviceIdDefaultResponse
  >;
}

export interface AuthenticateWithNintendoSwitchDeviceID {
  /**
   * This feature is in private preview with a set of managed partners.
   * Authenticates a player from the specified player account pool using the
   * "Nintendo Switch Device ID" player identity provider, finds or provisions a
   * master_player_account associated with the player identity, and returns an
   * entity token for it. Optionally logs the authenticated player into the
   * specified title and returns an additional entity token for the
   * title_player_account.
   */
  post(
    options: AuthenticateWithNintendoSwitchDeviceIDParameters
  ): StreamableMethod<
    | AuthenticateWithNintendoSwitchDeviceID200Response
    | AuthenticateWithNintendoSwitchDeviceIDDefaultResponse
  >;
}

export interface GetLinkedPlayerIdentities {
  /**
   * This feature is in private preview with a set of managed partners. Lists the
   * player identities currently linked to a master_player_account.
   */
  post(
    options: GetLinkedPlayerIdentitiesParameters
  ): StreamableMethod<
    | GetLinkedPlayerIdentities200Response
    | GetLinkedPlayerIdentitiesDefaultResponse
  >;
}

export interface UnlinkPlayerIdentity {
  /**
   * This feature is in private preview with a set of managed partners. Removes the
   * link from a player identity to a master_player_account.
   */
  post(
    options: UnlinkPlayerIdentityParameters
  ): StreamableMethod<
    UnlinkPlayerIdentity200Response | UnlinkPlayerIdentityDefaultResponse
  >;
}

export interface AbortFileUploads {
  /**
   * This feature is in private preview with a set of managed partners. Abort
   * pending file uploads to an entity's profile.
   */
  post(
    options: AbortFileUploadsParameters
  ): StreamableMethod<
    AbortFileUploads200Response | AbortFileUploadsDefaultResponse
  >;
}

export interface DeleteFiles {
  /**
   * This feature is in private preview with a set of managed partners. Delete files
   * on an entity's profile.
   */
  post(
    options: DeleteFilesParameters
  ): StreamableMethod<DeleteFiles200Response | DeleteFilesDefaultResponse>;
}

export interface FinalizeFileUploads {
  /**
   * This feature is in private preview with a set of managed partners. Finalize
   * file uploads to an entity's profile.
   */
  post(
    options: FinalizeFileUploadsParameters
  ): StreamableMethod<
    FinalizeFileUploads200Response | FinalizeFileUploadsDefaultResponse
  >;
}

export interface GetFiles {
  /**
   * This feature is in private preview with a set of managed partners. Retrieves
   * file metadata from an entity's profile.
   */
  post(
    options: GetFilesParameters
  ): StreamableMethod<GetFiles200Response | GetFilesDefaultResponse>;
}

export interface InitiateFileUploads {
  /**
   * This feature is in private preview with a set of managed partners. Initiates
   * file uploads to an entity's profile.
   */
  post(
    options: InitiateFileUploadsParameters
  ): StreamableMethod<
    InitiateFileUploads200Response | InitiateFileUploadsDefaultResponse
  >;
}

export interface GetObjects {
  /**
   * This feature is in private preview with a set of managed partners. Retrieves
   * objects from an entity's profile.
   */
  post(
    options: GetObjectsParameters
  ): StreamableMethod<GetObjects200Response | GetObjectsDefaultResponse>;
}

export interface SetObjects {
  /**
   * This feature is in private preview with a set of managed partners. Sets objects
   * on an entity's profile.
   */
  post(
    options: SetObjectsParameters
  ): StreamableMethod<SetObjects200Response | SetObjectsDefaultResponse>;
}

export interface WriteEvents {
  /**
   * This feature is in private preview with a set of managed partners. Write
   * batches of entity based events to PlayStream. The namespace of the Event must
   * be 'custom' or start with 'custom.'.
   */
  post(
    options: WriteEventsParameters
  ): StreamableMethod<WriteEvents200Response | WriteEventsDefaultResponse>;
}

export interface LoginPlayer {
  /**
   * This feature is in private preview with a set of managed partners. Begins a
   * title session for a master_player_account, returning an entity token for the
   * associated title_player_account, creating a profile for it if necessary.
   */
  post(
    options: LoginPlayerParameters
  ): StreamableMethod<LoginPlayer200Response | LoginPlayerDefaultResponse>;
}

export interface Routes {
  /** Resource for '/Authentication/GetEntityToken' has methods for the following verbs: post */
  (path: "/Authentication/GetEntityToken"): GetEntityToken;
  /** Resource for '/PlayerIdentity/AuthenticateWithAndroidDeviceId' has methods for the following verbs: post */
  (
    path: "/PlayerIdentity/AuthenticateWithAndroidDeviceId"
  ): AuthenticateWithAndroidDeviceId;
  /** Resource for '/PlayerIdentity/AuthenticateWithCustomId' has methods for the following verbs: post */
  (path: "/PlayerIdentity/AuthenticateWithCustomId"): AuthenticateWithCustomId;
  /** Resource for '/PlayerIdentity/AuthenticateWithIOSDeviceId' has methods for the following verbs: post */
  (
    path: "/PlayerIdentity/AuthenticateWithIOSDeviceId"
  ): AuthenticateWithIOSDeviceId;
  /** Resource for '/PlayerIdentity/AuthenticateWithNintendoSwitchDeviceID' has methods for the following verbs: post */
  (
    path: "/PlayerIdentity/AuthenticateWithNintendoSwitchDeviceID"
  ): AuthenticateWithNintendoSwitchDeviceID;
  /** Resource for '/PlayerIdentity/GetLinkedPlayerIdentities' has methods for the following verbs: post */
  (
    path: "/PlayerIdentity/GetLinkedPlayerIdentities"
  ): GetLinkedPlayerIdentities;
  /** Resource for '/PlayerIdentity/UnlinkPlayerIdentity' has methods for the following verbs: post */
  (path: "/PlayerIdentity/UnlinkPlayerIdentity"): UnlinkPlayerIdentity;
  /** Resource for '/File/AbortFileUploads' has methods for the following verbs: post */
  (path: "/File/AbortFileUploads"): AbortFileUploads;
  /** Resource for '/File/DeleteFiles' has methods for the following verbs: post */
  (path: "/File/DeleteFiles"): DeleteFiles;
  /** Resource for '/File/FinalizeFileUploads' has methods for the following verbs: post */
  (path: "/File/FinalizeFileUploads"): FinalizeFileUploads;
  /** Resource for '/File/GetFiles' has methods for the following verbs: post */
  (path: "/File/GetFiles"): GetFiles;
  /** Resource for '/File/InitiateFileUploads' has methods for the following verbs: post */
  (path: "/File/InitiateFileUploads"): InitiateFileUploads;
  /** Resource for '/Object/GetObjects' has methods for the following verbs: post */
  (path: "/Object/GetObjects"): GetObjects;
  /** Resource for '/Object/SetObjects' has methods for the following verbs: post */
  (path: "/Object/SetObjects"): SetObjects;
  /** Resource for '/Event/WriteEvents' has methods for the following verbs: post */
  (path: "/Event/WriteEvents"): WriteEvents;
  /** Resource for '/TitlePlayer/LoginPlayer' has methods for the following verbs: post */
  (path: "/TitlePlayer/LoginPlayer"): LoginPlayer;
}

export type PlayFabClient = Client & {
  path: Routes;
};
