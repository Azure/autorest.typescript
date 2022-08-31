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
  accept: "application/json";
}

export interface PlayFabAuthenticationOperationsGetEntityTokenBodyParam {
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
  xEntityToken: string;
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
  xEntityToken: string;
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
  xEntityToken: string;
  accept: "application/json";
}

export interface PlayFabFileOperationsAbortFileUploadsBodyParam {
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
  xEntityToken: string;
  accept: "application/json";
}

export interface PlayFabFileOperationsDeleteFilesBodyParam {
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
  xEntityToken: string;
  accept: "application/json";
}

export interface PlayFabFileOperationsFinalizeFileUploadsBodyParam {
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
  xEntityToken: string;
  accept: "application/json";
}

export interface PlayFabFileOperationsGetFilesBodyParam {
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
  xEntityToken: string;
  accept: "application/json";
}

export interface PlayFabFileOperationsInitiateFileUploadsBodyParam {
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
  xEntityToken: string;
  accept: "application/json";
}

export interface PlayFabFileOperationsGetObjectsBodyParam {
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
  xEntityToken: string;
  accept: "application/json";
}

export interface PlayFabFileOperationsSetObjectsBodyParam {
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
  xEntityToken: string;
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
  xEntityToken: string;
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
