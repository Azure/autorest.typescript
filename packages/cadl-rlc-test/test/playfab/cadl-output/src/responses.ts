import { HttpResponse } from "@azure-rest/core-client";
import {
  GetEntityTokenResponseOutput,
  ApiErrorWrapperOutput,
  AuthenticateIdentityResultOutput,
  GetLinkedPlayerIdentitiesResultOutput,
  UnlinkPlayerIdentityResultOutput,
  AbortFileUploadsResponseOutput,
  DeleteFilesResponseOutput,
  FinalizeFileUploadsResponseOutput,
  GetFilesResponseOutput,
  InitiateFileUploadsResponseOutput,
  GetObjectsResponseOutput,
  SetObjectsResponseOutput,
  WriteEventsResponseOutput,
  LoginPlayerResultOutput,
} from "./outputModels";

/** The request has succeeded. */
export interface PlayFabAuthenticationOperationsGetEntityToken200Response
  extends HttpResponse {
  status: "200";
  body: GetEntityTokenResponseOutput;
}

export interface PlayFabAuthenticationOperationsGetEntityTokenDefaultResponse
  extends HttpResponse {
  status: string;
  body: ApiErrorWrapperOutput;
}

/** The request has succeeded. */
export interface PlayFabAuthenticationOperationsAuthenticateWithAndroidDeviceId200Response
  extends HttpResponse {
  status: "200";
  body: AuthenticateIdentityResultOutput;
}

export interface PlayFabAuthenticationOperationsAuthenticateWithAndroidDeviceIdDefaultResponse
  extends HttpResponse {
  status: string;
  body: ApiErrorWrapperOutput;
}

/** The request has succeeded. */
export interface PlayFabAuthenticationOperationsAuthenticateWithCustomId200Response
  extends HttpResponse {
  status: "200";
  body: AuthenticateIdentityResultOutput;
}

export interface PlayFabAuthenticationOperationsAuthenticateWithCustomIdDefaultResponse
  extends HttpResponse {
  status: string;
  body: ApiErrorWrapperOutput;
}

/** The request has succeeded. */
export interface PlayFabAuthenticationOperationsAuthenticateWithIOSDeviceId200Response
  extends HttpResponse {
  status: "200";
  body: AuthenticateIdentityResultOutput;
}

export interface PlayFabAuthenticationOperationsAuthenticateWithIOSDeviceIdDefaultResponse
  extends HttpResponse {
  status: string;
  body: ApiErrorWrapperOutput;
}

/** The request has succeeded. */
export interface PlayFabAuthenticationOperationsAuthenticateWithNintendoSwitchDeviceID200Response
  extends HttpResponse {
  status: "200";
  body: AuthenticateIdentityResultOutput;
}

export interface PlayFabAuthenticationOperationsAuthenticateWithNintendoSwitchDeviceIDDefaultResponse
  extends HttpResponse {
  status: string;
  body: ApiErrorWrapperOutput;
}

/** The request has succeeded. */
export interface PlayFabAuthenticationOperationsGetLinkedPlayerIdentities200Response
  extends HttpResponse {
  status: "200";
  body: GetLinkedPlayerIdentitiesResultOutput;
}

export interface PlayFabAuthenticationOperationsGetLinkedPlayerIdentitiesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ApiErrorWrapperOutput;
}

/** The request has succeeded. */
export interface PlayFabAuthenticationOperationsUnlinkPlayerIdentity200Response
  extends HttpResponse {
  status: "200";
  body: UnlinkPlayerIdentityResultOutput;
}

export interface PlayFabAuthenticationOperationsUnlinkPlayerIdentityDefaultResponse
  extends HttpResponse {
  status: string;
  body: ApiErrorWrapperOutput;
}

/** The request has succeeded. */
export interface PlayFabFileOperationsAbortFileUploads200Response
  extends HttpResponse {
  status: "200";
  body: AbortFileUploadsResponseOutput;
}

export interface PlayFabFileOperationsAbortFileUploadsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ApiErrorWrapperOutput;
}

/** The request has succeeded. */
export interface PlayFabFileOperationsDeleteFiles200Response
  extends HttpResponse {
  status: "200";
  body: DeleteFilesResponseOutput;
}

export interface PlayFabFileOperationsDeleteFilesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ApiErrorWrapperOutput;
}

/** The request has succeeded. */
export interface PlayFabFileOperationsFinalizeFileUploads200Response
  extends HttpResponse {
  status: "200";
  body: FinalizeFileUploadsResponseOutput;
}

export interface PlayFabFileOperationsFinalizeFileUploadsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ApiErrorWrapperOutput;
}

/** The request has succeeded. */
export interface PlayFabFileOperationsGetFiles200Response extends HttpResponse {
  status: "200";
  body: GetFilesResponseOutput;
}

export interface PlayFabFileOperationsGetFilesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ApiErrorWrapperOutput;
}

/** The request has succeeded. */
export interface PlayFabFileOperationsInitiateFileUploads200Response
  extends HttpResponse {
  status: "200";
  body: InitiateFileUploadsResponseOutput;
}

export interface PlayFabFileOperationsInitiateFileUploadsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ApiErrorWrapperOutput;
}

/** The request has succeeded. */
export interface PlayFabFileOperationsGetObjects200Response
  extends HttpResponse {
  status: "200";
  body: GetObjectsResponseOutput;
}

export interface PlayFabFileOperationsGetObjectsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ApiErrorWrapperOutput;
}

/** The request has succeeded. */
export interface PlayFabFileOperationsSetObjects200Response
  extends HttpResponse {
  status: "200";
  body: SetObjectsResponseOutput;
}

export interface PlayFabFileOperationsSetObjectsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ApiErrorWrapperOutput;
}

/** The request has succeeded. */
export interface PlayFabEventsOperationsWriteEvents200Response
  extends HttpResponse {
  status: "200";
  body: WriteEventsResponseOutput;
}

export interface PlayFabEventsOperationsWriteEventsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ApiErrorWrapperOutput;
}

/** The request has succeeded. */
export interface PlayFabProfilesOperationsLoginPlayer200Response
  extends HttpResponse {
  status: "200";
  body: LoginPlayerResultOutput;
}

export interface PlayFabProfilesOperationsLoginPlayerDefaultResponse
  extends HttpResponse {
  status: string;
  body: ApiErrorWrapperOutput;
}
