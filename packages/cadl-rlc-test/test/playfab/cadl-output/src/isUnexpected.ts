// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

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

const responseMap: Record<string, string[]> = {
  "POST /Authentication/GetEntityToken": ["200"],
  "POST /PlayerIdentity/AuthenticateWithAndroidDeviceId": ["200"],
  "POST /PlayerIdentity/AuthenticateWithCustomId": ["200"],
  "POST /PlayerIdentity/AuthenticateWithIOSDeviceId": ["200"],
  "POST /PlayerIdentity/AuthenticateWithNintendoSwitchDeviceID": ["200"],
  "POST /PlayerIdentity/GetLinkedPlayerIdentities": ["200"],
  "POST /PlayerIdentity/UnlinkPlayerIdentity": ["200"],
  "POST /File/AbortFileUploads": ["200"],
  "POST /File/DeleteFiles": ["200"],
  "POST /File/FinalizeFileUploads": ["200"],
  "POST /File/GetFiles": ["200"],
  "POST /File/InitiateFileUploads": ["200"],
  "POST /Object/GetObjects": ["200"],
  "POST /Object/SetObjects": ["200"],
  "POST /Event/WriteEvents": ["200"],
  "POST /TitlePlayer/LoginPlayer": ["200"],
};

export function isUnexpected(
  response: GetEntityToken200Response | GetEntityTokenDefaultResponse
): response is GetEntityTokenDefaultResponse;
export function isUnexpected(
  response:
    | AuthenticateWithAndroidDeviceId200Response
    | AuthenticateWithAndroidDeviceIdDefaultResponse
): response is AuthenticateWithAndroidDeviceIdDefaultResponse;
export function isUnexpected(
  response:
    | AuthenticateWithCustomId200Response
    | AuthenticateWithCustomIdDefaultResponse
): response is AuthenticateWithCustomIdDefaultResponse;
export function isUnexpected(
  response:
    | AuthenticateWithIOSDeviceId200Response
    | AuthenticateWithIOSDeviceIdDefaultResponse
): response is AuthenticateWithIOSDeviceIdDefaultResponse;
export function isUnexpected(
  response:
    | AuthenticateWithNintendoSwitchDeviceID200Response
    | AuthenticateWithNintendoSwitchDeviceIDDefaultResponse
): response is AuthenticateWithNintendoSwitchDeviceIDDefaultResponse;
export function isUnexpected(
  response:
    | GetLinkedPlayerIdentities200Response
    | GetLinkedPlayerIdentitiesDefaultResponse
): response is GetLinkedPlayerIdentitiesDefaultResponse;
export function isUnexpected(
  response:
    | UnlinkPlayerIdentity200Response
    | UnlinkPlayerIdentityDefaultResponse
): response is UnlinkPlayerIdentityDefaultResponse;
export function isUnexpected(
  response: AbortFileUploads200Response | AbortFileUploadsDefaultResponse
): response is AbortFileUploadsDefaultResponse;
export function isUnexpected(
  response: DeleteFiles200Response | DeleteFilesDefaultResponse
): response is DeleteFilesDefaultResponse;
export function isUnexpected(
  response: FinalizeFileUploads200Response | FinalizeFileUploadsDefaultResponse
): response is FinalizeFileUploadsDefaultResponse;
export function isUnexpected(
  response: GetFiles200Response | GetFilesDefaultResponse
): response is GetFilesDefaultResponse;
export function isUnexpected(
  response: InitiateFileUploads200Response | InitiateFileUploadsDefaultResponse
): response is InitiateFileUploadsDefaultResponse;
export function isUnexpected(
  response: GetObjects200Response | GetObjectsDefaultResponse
): response is GetObjectsDefaultResponse;
export function isUnexpected(
  response: SetObjects200Response | SetObjectsDefaultResponse
): response is SetObjectsDefaultResponse;
export function isUnexpected(
  response: WriteEvents200Response | WriteEventsDefaultResponse
): response is WriteEventsDefaultResponse;
export function isUnexpected(
  response: LoginPlayer200Response | LoginPlayerDefaultResponse
): response is LoginPlayerDefaultResponse;
export function isUnexpected(
  response:
    | GetEntityToken200Response
    | GetEntityTokenDefaultResponse
    | AuthenticateWithAndroidDeviceId200Response
    | AuthenticateWithAndroidDeviceIdDefaultResponse
    | AuthenticateWithCustomId200Response
    | AuthenticateWithCustomIdDefaultResponse
    | AuthenticateWithIOSDeviceId200Response
    | AuthenticateWithIOSDeviceIdDefaultResponse
    | AuthenticateWithNintendoSwitchDeviceID200Response
    | AuthenticateWithNintendoSwitchDeviceIDDefaultResponse
    | GetLinkedPlayerIdentities200Response
    | GetLinkedPlayerIdentitiesDefaultResponse
    | UnlinkPlayerIdentity200Response
    | UnlinkPlayerIdentityDefaultResponse
    | AbortFileUploads200Response
    | AbortFileUploadsDefaultResponse
    | DeleteFiles200Response
    | DeleteFilesDefaultResponse
    | FinalizeFileUploads200Response
    | FinalizeFileUploadsDefaultResponse
    | GetFiles200Response
    | GetFilesDefaultResponse
    | InitiateFileUploads200Response
    | InitiateFileUploadsDefaultResponse
    | GetObjects200Response
    | GetObjectsDefaultResponse
    | SetObjects200Response
    | SetObjectsDefaultResponse
    | WriteEvents200Response
    | WriteEventsDefaultResponse
    | LoginPlayer200Response
    | LoginPlayerDefaultResponse
): response is
  | GetEntityTokenDefaultResponse
  | AuthenticateWithAndroidDeviceIdDefaultResponse
  | AuthenticateWithCustomIdDefaultResponse
  | AuthenticateWithIOSDeviceIdDefaultResponse
  | AuthenticateWithNintendoSwitchDeviceIDDefaultResponse
  | GetLinkedPlayerIdentitiesDefaultResponse
  | UnlinkPlayerIdentityDefaultResponse
  | AbortFileUploadsDefaultResponse
  | DeleteFilesDefaultResponse
  | FinalizeFileUploadsDefaultResponse
  | GetFilesDefaultResponse
  | InitiateFileUploadsDefaultResponse
  | GetObjectsDefaultResponse
  | SetObjectsDefaultResponse
  | WriteEventsDefaultResponse
  | LoginPlayerDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  const pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    return true;
  }
  return !pathDetails.includes(response.status);
}
