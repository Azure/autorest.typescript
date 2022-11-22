// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

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
export interface GetEntityToken200Response extends HttpResponse {
  status: "200";
  body: GetEntityTokenResponseOutput;
}

export interface GetEntityTokenDefaultResponse extends HttpResponse {
  status: string;
  body: ApiErrorWrapperOutput;
}

/** The request has succeeded. */
export interface AuthenticateWithAndroidDeviceId200Response
  extends HttpResponse {
  status: "200";
  body: AuthenticateIdentityResultOutput;
}

export interface AuthenticateWithAndroidDeviceIdDefaultResponse
  extends HttpResponse {
  status: string;
  body: ApiErrorWrapperOutput;
}

/** The request has succeeded. */
export interface AuthenticateWithCustomId200Response extends HttpResponse {
  status: "200";
  body: AuthenticateIdentityResultOutput;
}

export interface AuthenticateWithCustomIdDefaultResponse extends HttpResponse {
  status: string;
  body: ApiErrorWrapperOutput;
}

/** The request has succeeded. */
export interface AuthenticateWithIOSDeviceId200Response extends HttpResponse {
  status: "200";
  body: AuthenticateIdentityResultOutput;
}

export interface AuthenticateWithIOSDeviceIdDefaultResponse
  extends HttpResponse {
  status: string;
  body: ApiErrorWrapperOutput;
}

/** The request has succeeded. */
export interface AuthenticateWithNintendoSwitchDeviceID200Response
  extends HttpResponse {
  status: "200";
  body: AuthenticateIdentityResultOutput;
}

export interface AuthenticateWithNintendoSwitchDeviceIDDefaultResponse
  extends HttpResponse {
  status: string;
  body: ApiErrorWrapperOutput;
}

/** The request has succeeded. */
export interface GetLinkedPlayerIdentities200Response extends HttpResponse {
  status: "200";
  body: GetLinkedPlayerIdentitiesResultOutput;
}

export interface GetLinkedPlayerIdentitiesDefaultResponse extends HttpResponse {
  status: string;
  body: ApiErrorWrapperOutput;
}

/** The request has succeeded. */
export interface UnlinkPlayerIdentity200Response extends HttpResponse {
  status: "200";
  body: UnlinkPlayerIdentityResultOutput;
}

export interface UnlinkPlayerIdentityDefaultResponse extends HttpResponse {
  status: string;
  body: ApiErrorWrapperOutput;
}

/** The request has succeeded. */
export interface AbortFileUploads200Response extends HttpResponse {
  status: "200";
  body: AbortFileUploadsResponseOutput;
}

export interface AbortFileUploadsDefaultResponse extends HttpResponse {
  status: string;
  body: ApiErrorWrapperOutput;
}

/** The request has succeeded. */
export interface DeleteFiles200Response extends HttpResponse {
  status: "200";
  body: DeleteFilesResponseOutput;
}

export interface DeleteFilesDefaultResponse extends HttpResponse {
  status: string;
  body: ApiErrorWrapperOutput;
}

/** The request has succeeded. */
export interface FinalizeFileUploads200Response extends HttpResponse {
  status: "200";
  body: FinalizeFileUploadsResponseOutput;
}

export interface FinalizeFileUploadsDefaultResponse extends HttpResponse {
  status: string;
  body: ApiErrorWrapperOutput;
}

/** The request has succeeded. */
export interface GetFiles200Response extends HttpResponse {
  status: "200";
  body: GetFilesResponseOutput;
}

export interface GetFilesDefaultResponse extends HttpResponse {
  status: string;
  body: ApiErrorWrapperOutput;
}

/** The request has succeeded. */
export interface InitiateFileUploads200Response extends HttpResponse {
  status: "200";
  body: InitiateFileUploadsResponseOutput;
}

export interface InitiateFileUploadsDefaultResponse extends HttpResponse {
  status: string;
  body: ApiErrorWrapperOutput;
}

/** The request has succeeded. */
export interface GetObjects200Response extends HttpResponse {
  status: "200";
  body: GetObjectsResponseOutput;
}

export interface GetObjectsDefaultResponse extends HttpResponse {
  status: string;
  body: ApiErrorWrapperOutput;
}

/** The request has succeeded. */
export interface SetObjects200Response extends HttpResponse {
  status: "200";
  body: SetObjectsResponseOutput;
}

export interface SetObjectsDefaultResponse extends HttpResponse {
  status: string;
  body: ApiErrorWrapperOutput;
}

/** The request has succeeded. */
export interface WriteEvents200Response extends HttpResponse {
  status: "200";
  body: WriteEventsResponseOutput;
}

export interface WriteEventsDefaultResponse extends HttpResponse {
  status: string;
  body: ApiErrorWrapperOutput;
}

/** The request has succeeded. */
export interface LoginPlayer200Response extends HttpResponse {
  status: "200";
  body: LoginPlayerResultOutput;
}

export interface LoginPlayerDefaultResponse extends HttpResponse {
  status: string;
  body: ApiErrorWrapperOutput;
}
