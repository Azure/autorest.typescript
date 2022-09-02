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
  response:
    | PlayFabAuthenticationOperationsGetEntityToken200Response
    | PlayFabAuthenticationOperationsGetEntityTokenDefaultResponse
): response is PlayFabAuthenticationOperationsGetEntityTokenDefaultResponse;
export function isUnexpected(
  response:
    | PlayFabAuthenticationOperationsAuthenticateWithAndroidDeviceId200Response
    | PlayFabAuthenticationOperationsAuthenticateWithAndroidDeviceIdDefaultResponse
): response is PlayFabAuthenticationOperationsAuthenticateWithAndroidDeviceIdDefaultResponse;
export function isUnexpected(
  response:
    | PlayFabAuthenticationOperationsAuthenticateWithCustomId200Response
    | PlayFabAuthenticationOperationsAuthenticateWithCustomIdDefaultResponse
): response is PlayFabAuthenticationOperationsAuthenticateWithCustomIdDefaultResponse;
export function isUnexpected(
  response:
    | PlayFabAuthenticationOperationsAuthenticateWithIOSDeviceId200Response
    | PlayFabAuthenticationOperationsAuthenticateWithIOSDeviceIdDefaultResponse
): response is PlayFabAuthenticationOperationsAuthenticateWithIOSDeviceIdDefaultResponse;
export function isUnexpected(
  response:
    | PlayFabAuthenticationOperationsAuthenticateWithNintendoSwitchDeviceID200Response
    | PlayFabAuthenticationOperationsAuthenticateWithNintendoSwitchDeviceIDDefaultResponse
): response is PlayFabAuthenticationOperationsAuthenticateWithNintendoSwitchDeviceIDDefaultResponse;
export function isUnexpected(
  response:
    | PlayFabAuthenticationOperationsGetLinkedPlayerIdentities200Response
    | PlayFabAuthenticationOperationsGetLinkedPlayerIdentitiesDefaultResponse
): response is PlayFabAuthenticationOperationsGetLinkedPlayerIdentitiesDefaultResponse;
export function isUnexpected(
  response:
    | PlayFabAuthenticationOperationsUnlinkPlayerIdentity200Response
    | PlayFabAuthenticationOperationsUnlinkPlayerIdentityDefaultResponse
): response is PlayFabAuthenticationOperationsUnlinkPlayerIdentityDefaultResponse;
export function isUnexpected(
  response:
    | PlayFabFileOperationsAbortFileUploads200Response
    | PlayFabFileOperationsAbortFileUploadsDefaultResponse
): response is PlayFabFileOperationsAbortFileUploadsDefaultResponse;
export function isUnexpected(
  response:
    | PlayFabFileOperationsDeleteFiles200Response
    | PlayFabFileOperationsDeleteFilesDefaultResponse
): response is PlayFabFileOperationsDeleteFilesDefaultResponse;
export function isUnexpected(
  response:
    | PlayFabFileOperationsFinalizeFileUploads200Response
    | PlayFabFileOperationsFinalizeFileUploadsDefaultResponse
): response is PlayFabFileOperationsFinalizeFileUploadsDefaultResponse;
export function isUnexpected(
  response:
    | PlayFabFileOperationsGetFiles200Response
    | PlayFabFileOperationsGetFilesDefaultResponse
): response is PlayFabFileOperationsGetFilesDefaultResponse;
export function isUnexpected(
  response:
    | PlayFabFileOperationsInitiateFileUploads200Response
    | PlayFabFileOperationsInitiateFileUploadsDefaultResponse
): response is PlayFabFileOperationsInitiateFileUploadsDefaultResponse;
export function isUnexpected(
  response:
    | PlayFabFileOperationsGetObjects200Response
    | PlayFabFileOperationsGetObjectsDefaultResponse
): response is PlayFabFileOperationsGetObjectsDefaultResponse;
export function isUnexpected(
  response:
    | PlayFabFileOperationsSetObjects200Response
    | PlayFabFileOperationsSetObjectsDefaultResponse
): response is PlayFabFileOperationsSetObjectsDefaultResponse;
export function isUnexpected(
  response:
    | PlayFabEventsOperationsWriteEvents200Response
    | PlayFabEventsOperationsWriteEventsDefaultResponse
): response is PlayFabEventsOperationsWriteEventsDefaultResponse;
export function isUnexpected(
  response:
    | PlayFabProfilesOperationsLoginPlayer200Response
    | PlayFabProfilesOperationsLoginPlayerDefaultResponse
): response is PlayFabProfilesOperationsLoginPlayerDefaultResponse;
export function isUnexpected(
  response:
    | PlayFabAuthenticationOperationsGetEntityToken200Response
    | PlayFabAuthenticationOperationsGetEntityTokenDefaultResponse
    | PlayFabAuthenticationOperationsAuthenticateWithAndroidDeviceId200Response
    | PlayFabAuthenticationOperationsAuthenticateWithAndroidDeviceIdDefaultResponse
    | PlayFabAuthenticationOperationsAuthenticateWithCustomId200Response
    | PlayFabAuthenticationOperationsAuthenticateWithCustomIdDefaultResponse
    | PlayFabAuthenticationOperationsAuthenticateWithIOSDeviceId200Response
    | PlayFabAuthenticationOperationsAuthenticateWithIOSDeviceIdDefaultResponse
    | PlayFabAuthenticationOperationsAuthenticateWithNintendoSwitchDeviceID200Response
    | PlayFabAuthenticationOperationsAuthenticateWithNintendoSwitchDeviceIDDefaultResponse
    | PlayFabAuthenticationOperationsGetLinkedPlayerIdentities200Response
    | PlayFabAuthenticationOperationsGetLinkedPlayerIdentitiesDefaultResponse
    | PlayFabAuthenticationOperationsUnlinkPlayerIdentity200Response
    | PlayFabAuthenticationOperationsUnlinkPlayerIdentityDefaultResponse
    | PlayFabFileOperationsAbortFileUploads200Response
    | PlayFabFileOperationsAbortFileUploadsDefaultResponse
    | PlayFabFileOperationsDeleteFiles200Response
    | PlayFabFileOperationsDeleteFilesDefaultResponse
    | PlayFabFileOperationsFinalizeFileUploads200Response
    | PlayFabFileOperationsFinalizeFileUploadsDefaultResponse
    | PlayFabFileOperationsGetFiles200Response
    | PlayFabFileOperationsGetFilesDefaultResponse
    | PlayFabFileOperationsInitiateFileUploads200Response
    | PlayFabFileOperationsInitiateFileUploadsDefaultResponse
    | PlayFabFileOperationsGetObjects200Response
    | PlayFabFileOperationsGetObjectsDefaultResponse
    | PlayFabFileOperationsSetObjects200Response
    | PlayFabFileOperationsSetObjectsDefaultResponse
    | PlayFabEventsOperationsWriteEvents200Response
    | PlayFabEventsOperationsWriteEventsDefaultResponse
    | PlayFabProfilesOperationsLoginPlayer200Response
    | PlayFabProfilesOperationsLoginPlayerDefaultResponse
): response is
  | PlayFabAuthenticationOperationsGetEntityTokenDefaultResponse
  | PlayFabAuthenticationOperationsAuthenticateWithAndroidDeviceIdDefaultResponse
  | PlayFabAuthenticationOperationsAuthenticateWithCustomIdDefaultResponse
  | PlayFabAuthenticationOperationsAuthenticateWithIOSDeviceIdDefaultResponse
  | PlayFabAuthenticationOperationsAuthenticateWithNintendoSwitchDeviceIDDefaultResponse
  | PlayFabAuthenticationOperationsGetLinkedPlayerIdentitiesDefaultResponse
  | PlayFabAuthenticationOperationsUnlinkPlayerIdentityDefaultResponse
  | PlayFabFileOperationsAbortFileUploadsDefaultResponse
  | PlayFabFileOperationsDeleteFilesDefaultResponse
  | PlayFabFileOperationsFinalizeFileUploadsDefaultResponse
  | PlayFabFileOperationsGetFilesDefaultResponse
  | PlayFabFileOperationsInitiateFileUploadsDefaultResponse
  | PlayFabFileOperationsGetObjectsDefaultResponse
  | PlayFabFileOperationsSetObjectsDefaultResponse
  | PlayFabEventsOperationsWriteEventsDefaultResponse
  | PlayFabProfilesOperationsLoginPlayerDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  const pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    return true;
  }
  return !pathDetails.includes(response.status);
}
