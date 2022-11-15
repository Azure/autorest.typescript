import {
  PlayFabAuthenticationOperationsGetEntityTokenParameters,
  PlayFabAuthenticationOperationsAuthenticateWithAndroidDeviceIdParameters,
  PlayFabAuthenticationOperationsAuthenticateWithCustomIdParameters,
  PlayFabAuthenticationOperationsAuthenticateWithIOSDeviceIdParameters,
  PlayFabAuthenticationOperationsAuthenticateWithNintendoSwitchDeviceIDParameters,
  PlayFabAuthenticationOperationsGetLinkedPlayerIdentitiesParameters,
  PlayFabAuthenticationOperationsUnlinkPlayerIdentityParameters,
  PlayFabFileOperationsAbortFileUploadsParameters,
  PlayFabFileOperationsDeleteFilesParameters,
  PlayFabFileOperationsFinalizeFileUploadsParameters,
  PlayFabFileOperationsGetFilesParameters,
  PlayFabFileOperationsInitiateFileUploadsParameters,
  PlayFabFileOperationsGetObjectsParameters,
  PlayFabFileOperationsSetObjectsParameters,
  PlayFabEventsOperationsWriteEventsParameters,
  PlayFabProfilesOperationsLoginPlayerParameters,
} from "./parameters";
import {
  PlayFabAuthenticationOperationsGetEntityToken200Response,
  PlayFabAuthenticationOperationsGetEntityTokenDefaultResponse,
  PlayFabAuthenticationOperationsAuthenticateWithAndroidDeviceId200Response,
  PlayFabAuthenticationOperationsAuthenticateWithAndroidDeviceIdDefaultResponse,
  PlayFabAuthenticationOperationsAuthenticateWithCustomId200Response,
  PlayFabAuthenticationOperationsAuthenticateWithCustomIdDefaultResponse,
  PlayFabAuthenticationOperationsAuthenticateWithIOSDeviceId200Response,
  PlayFabAuthenticationOperationsAuthenticateWithIOSDeviceIdDefaultResponse,
  PlayFabAuthenticationOperationsAuthenticateWithNintendoSwitchDeviceID200Response,
  PlayFabAuthenticationOperationsAuthenticateWithNintendoSwitchDeviceIDDefaultResponse,
  PlayFabAuthenticationOperationsGetLinkedPlayerIdentities200Response,
  PlayFabAuthenticationOperationsGetLinkedPlayerIdentitiesDefaultResponse,
  PlayFabAuthenticationOperationsUnlinkPlayerIdentity200Response,
  PlayFabAuthenticationOperationsUnlinkPlayerIdentityDefaultResponse,
  PlayFabFileOperationsAbortFileUploads200Response,
  PlayFabFileOperationsAbortFileUploadsDefaultResponse,
  PlayFabFileOperationsDeleteFiles200Response,
  PlayFabFileOperationsDeleteFilesDefaultResponse,
  PlayFabFileOperationsFinalizeFileUploads200Response,
  PlayFabFileOperationsFinalizeFileUploadsDefaultResponse,
  PlayFabFileOperationsGetFiles200Response,
  PlayFabFileOperationsGetFilesDefaultResponse,
  PlayFabFileOperationsInitiateFileUploads200Response,
  PlayFabFileOperationsInitiateFileUploadsDefaultResponse,
  PlayFabFileOperationsGetObjects200Response,
  PlayFabFileOperationsGetObjectsDefaultResponse,
  PlayFabFileOperationsSetObjects200Response,
  PlayFabFileOperationsSetObjectsDefaultResponse,
  PlayFabEventsOperationsWriteEvents200Response,
  PlayFabEventsOperationsWriteEventsDefaultResponse,
  PlayFabProfilesOperationsLoginPlayer200Response,
  PlayFabProfilesOperationsLoginPlayerDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface PlayFabAuthenticationOperationsGetEntityToken {
  /**
   * This feature is in private preview with a set of managed partners. Method to
   * exchange a legacy AuthenticationTicket or title SecretKey for an Entity Token
   * or to refresh a still valid Entity Token.
   */
  post(
    options: PlayFabAuthenticationOperationsGetEntityTokenParameters
  ): StreamableMethod<
    | PlayFabAuthenticationOperationsGetEntityToken200Response
    | PlayFabAuthenticationOperationsGetEntityTokenDefaultResponse
  >;
}

export interface PlayFabAuthenticationOperationsAuthenticateWithAndroidDeviceId {
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
    options: PlayFabAuthenticationOperationsAuthenticateWithAndroidDeviceIdParameters
  ): StreamableMethod<
    | PlayFabAuthenticationOperationsAuthenticateWithAndroidDeviceId200Response
    | PlayFabAuthenticationOperationsAuthenticateWithAndroidDeviceIdDefaultResponse
  >;
}

export interface PlayFabAuthenticationOperationsAuthenticateWithCustomId {
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
    options: PlayFabAuthenticationOperationsAuthenticateWithCustomIdParameters
  ): StreamableMethod<
    | PlayFabAuthenticationOperationsAuthenticateWithCustomId200Response
    | PlayFabAuthenticationOperationsAuthenticateWithCustomIdDefaultResponse
  >;
}

export interface PlayFabAuthenticationOperationsAuthenticateWithIOSDeviceId {
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
    options: PlayFabAuthenticationOperationsAuthenticateWithIOSDeviceIdParameters
  ): StreamableMethod<
    | PlayFabAuthenticationOperationsAuthenticateWithIOSDeviceId200Response
    | PlayFabAuthenticationOperationsAuthenticateWithIOSDeviceIdDefaultResponse
  >;
}

export interface PlayFabAuthenticationOperationsAuthenticateWithNintendoSwitchDeviceID {
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
    options: PlayFabAuthenticationOperationsAuthenticateWithNintendoSwitchDeviceIDParameters
  ): StreamableMethod<
    | PlayFabAuthenticationOperationsAuthenticateWithNintendoSwitchDeviceID200Response
    | PlayFabAuthenticationOperationsAuthenticateWithNintendoSwitchDeviceIDDefaultResponse
  >;
}

export interface PlayFabAuthenticationOperationsGetLinkedPlayerIdentities {
  /**
   * This feature is in private preview with a set of managed partners. Lists the
   * player identities currently linked to a master_player_account.
   */
  post(
    options: PlayFabAuthenticationOperationsGetLinkedPlayerIdentitiesParameters
  ): StreamableMethod<
    | PlayFabAuthenticationOperationsGetLinkedPlayerIdentities200Response
    | PlayFabAuthenticationOperationsGetLinkedPlayerIdentitiesDefaultResponse
  >;
}

export interface PlayFabAuthenticationOperationsUnlinkPlayerIdentity {
  /**
   * This feature is in private preview with a set of managed partners. Removes the
   * link from a player identity to a master_player_account.
   */
  post(
    options: PlayFabAuthenticationOperationsUnlinkPlayerIdentityParameters
  ): StreamableMethod<
    | PlayFabAuthenticationOperationsUnlinkPlayerIdentity200Response
    | PlayFabAuthenticationOperationsUnlinkPlayerIdentityDefaultResponse
  >;
}

export interface PlayFabFileOperationsAbortFileUploads {
  /**
   * This feature is in private preview with a set of managed partners. Abort
   * pending file uploads to an entity's profile.
   */
  post(
    options: PlayFabFileOperationsAbortFileUploadsParameters
  ): StreamableMethod<
    | PlayFabFileOperationsAbortFileUploads200Response
    | PlayFabFileOperationsAbortFileUploadsDefaultResponse
  >;
}

export interface PlayFabFileOperationsDeleteFiles {
  /**
   * This feature is in private preview with a set of managed partners. Delete files
   * on an entity's profile.
   */
  post(
    options: PlayFabFileOperationsDeleteFilesParameters
  ): StreamableMethod<
    | PlayFabFileOperationsDeleteFiles200Response
    | PlayFabFileOperationsDeleteFilesDefaultResponse
  >;
}

export interface PlayFabFileOperationsFinalizeFileUploads {
  /**
   * This feature is in private preview with a set of managed partners. Finalize
   * file uploads to an entity's profile.
   */
  post(
    options: PlayFabFileOperationsFinalizeFileUploadsParameters
  ): StreamableMethod<
    | PlayFabFileOperationsFinalizeFileUploads200Response
    | PlayFabFileOperationsFinalizeFileUploadsDefaultResponse
  >;
}

export interface PlayFabFileOperationsGetFiles {
  /**
   * This feature is in private preview with a set of managed partners. Retrieves
   * file metadata from an entity's profile.
   */
  post(
    options: PlayFabFileOperationsGetFilesParameters
  ): StreamableMethod<
    | PlayFabFileOperationsGetFiles200Response
    | PlayFabFileOperationsGetFilesDefaultResponse
  >;
}

export interface PlayFabFileOperationsInitiateFileUploads {
  /**
   * This feature is in private preview with a set of managed partners. Initiates
   * file uploads to an entity's profile.
   */
  post(
    options: PlayFabFileOperationsInitiateFileUploadsParameters
  ): StreamableMethod<
    | PlayFabFileOperationsInitiateFileUploads200Response
    | PlayFabFileOperationsInitiateFileUploadsDefaultResponse
  >;
}

export interface PlayFabFileOperationsGetObjects {
  /**
   * This feature is in private preview with a set of managed partners. Retrieves
   * objects from an entity's profile.
   */
  post(
    options: PlayFabFileOperationsGetObjectsParameters
  ): StreamableMethod<
    | PlayFabFileOperationsGetObjects200Response
    | PlayFabFileOperationsGetObjectsDefaultResponse
  >;
}

export interface PlayFabFileOperationsSetObjects {
  /**
   * This feature is in private preview with a set of managed partners. Sets objects
   * on an entity's profile.
   */
  post(
    options: PlayFabFileOperationsSetObjectsParameters
  ): StreamableMethod<
    | PlayFabFileOperationsSetObjects200Response
    | PlayFabFileOperationsSetObjectsDefaultResponse
  >;
}

export interface PlayFabEventsOperationsWriteEvents {
  /**
   * This feature is in private preview with a set of managed partners. Write
   * batches of entity based events to PlayStream. The namespace of the Event must
   * be 'custom' or start with 'custom.'.
   */
  post(
    options: PlayFabEventsOperationsWriteEventsParameters
  ): StreamableMethod<
    | PlayFabEventsOperationsWriteEvents200Response
    | PlayFabEventsOperationsWriteEventsDefaultResponse
  >;
}

export interface PlayFabProfilesOperationsLoginPlayer {
  /**
   * This feature is in private preview with a set of managed partners. Begins a
   * title session for a master_player_account, returning an entity token for the
   * associated title_player_account, creating a profile for it if necessary.
   */
  post(
    options: PlayFabProfilesOperationsLoginPlayerParameters
  ): StreamableMethod<
    | PlayFabProfilesOperationsLoginPlayer200Response
    | PlayFabProfilesOperationsLoginPlayerDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/Authentication/GetEntityToken' has methods for the following verbs: post */
  (
    path: "/Authentication/GetEntityToken"
  ): PlayFabAuthenticationOperationsGetEntityToken;
  /** Resource for '/PlayerIdentity/AuthenticateWithAndroidDeviceId' has methods for the following verbs: post */
  (
    path: "/PlayerIdentity/AuthenticateWithAndroidDeviceId"
  ): PlayFabAuthenticationOperationsAuthenticateWithAndroidDeviceId;
  /** Resource for '/PlayerIdentity/AuthenticateWithCustomId' has methods for the following verbs: post */
  (
    path: "/PlayerIdentity/AuthenticateWithCustomId"
  ): PlayFabAuthenticationOperationsAuthenticateWithCustomId;
  /** Resource for '/PlayerIdentity/AuthenticateWithIOSDeviceId' has methods for the following verbs: post */
  (
    path: "/PlayerIdentity/AuthenticateWithIOSDeviceId"
  ): PlayFabAuthenticationOperationsAuthenticateWithIOSDeviceId;
  /** Resource for '/PlayerIdentity/AuthenticateWithNintendoSwitchDeviceID' has methods for the following verbs: post */
  (
    path: "/PlayerIdentity/AuthenticateWithNintendoSwitchDeviceID"
  ): PlayFabAuthenticationOperationsAuthenticateWithNintendoSwitchDeviceID;
  /** Resource for '/PlayerIdentity/GetLinkedPlayerIdentities' has methods for the following verbs: post */
  (
    path: "/PlayerIdentity/GetLinkedPlayerIdentities"
  ): PlayFabAuthenticationOperationsGetLinkedPlayerIdentities;
  /** Resource for '/PlayerIdentity/UnlinkPlayerIdentity' has methods for the following verbs: post */
  (
    path: "/PlayerIdentity/UnlinkPlayerIdentity"
  ): PlayFabAuthenticationOperationsUnlinkPlayerIdentity;
  /** Resource for '/File/AbortFileUploads' has methods for the following verbs: post */
  (path: "/File/AbortFileUploads"): PlayFabFileOperationsAbortFileUploads;
  /** Resource for '/File/DeleteFiles' has methods for the following verbs: post */
  (path: "/File/DeleteFiles"): PlayFabFileOperationsDeleteFiles;
  /** Resource for '/File/FinalizeFileUploads' has methods for the following verbs: post */
  (path: "/File/FinalizeFileUploads"): PlayFabFileOperationsFinalizeFileUploads;
  /** Resource for '/File/GetFiles' has methods for the following verbs: post */
  (path: "/File/GetFiles"): PlayFabFileOperationsGetFiles;
  /** Resource for '/File/InitiateFileUploads' has methods for the following verbs: post */
  (path: "/File/InitiateFileUploads"): PlayFabFileOperationsInitiateFileUploads;
  /** Resource for '/Object/GetObjects' has methods for the following verbs: post */
  (path: "/Object/GetObjects"): PlayFabFileOperationsGetObjects;
  /** Resource for '/Object/SetObjects' has methods for the following verbs: post */
  (path: "/Object/SetObjects"): PlayFabFileOperationsSetObjects;
  /** Resource for '/Event/WriteEvents' has methods for the following verbs: post */
  (path: "/Event/WriteEvents"): PlayFabEventsOperationsWriteEvents;
  /** Resource for '/TitlePlayer/LoginPlayer' has methods for the following verbs: post */
  (path: "/TitlePlayer/LoginPlayer"): PlayFabProfilesOperationsLoginPlayer;
}

export type PlayFabClient = Client & {
  path: Routes;
};
