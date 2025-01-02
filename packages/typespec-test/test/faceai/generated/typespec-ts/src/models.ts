// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export interface FaceErrorResponse {
  /** faceId of the query face. User needs to call "Detect" first to get a valid faceId. Note that this faceId is not persisted and will expire 24 hours after the detection call. */
  faceId: string;
  /** The number of top similar faces returned. The valid range is [1, 1000]. Default value is 20. */
  maxNumOfCandidatesReturned?: number;
  /**
   * Similar face searching mode. It can be 'matchPerson' or 'matchFace'. Default value is 'matchPerson'.
   *
   * Possible values: "matchPerson", "matchFace"
   */
  mode?: FindSimilarMatchMode;
  /** An array of candidate faceIds. All of them are created by "Detect" and the faceIds will expire 24 hours after the detection call. The number of faceIds is limited to 1000. */
  faceIds: string[];
}

export interface FaceErrorResponse {
  /** faceId of the query face. User needs to call "Detect" first to get a valid faceId. Note that this faceId is not persisted and will expire 24 hours after the detection call. */
  faceId: string;
  /** The number of top similar faces returned. The valid range is [1, 1000]. Default value is 20. */
  maxNumOfCandidatesReturned?: number;
  /**
   * Similar face searching mode. It can be 'matchPerson' or 'matchFace'. Default value is 'matchPerson'.
   *
   * Possible values: "matchPerson", "matchFace"
   */
  mode?: FindSimilarMatchMode;
  /** An existing user-specified unique candidate Face List, created in "Create Face List". Face List contains a set of persistedFaceIds which are persisted and will never expire. */
  faceListId: string;
}

export interface FaceErrorResponse {
  /** faceId of the query face. User needs to call "Detect" first to get a valid faceId. Note that this faceId is not persisted and will expire 24 hours after the detection call. */
  faceId: string;
  /** The number of top similar faces returned. The valid range is [1, 1000]. Default value is 20. */
  maxNumOfCandidatesReturned?: number;
  /**
   * Similar face searching mode. It can be 'matchPerson' or 'matchFace'. Default value is 'matchPerson'.
   *
   * Possible values: "matchPerson", "matchFace"
   */
  mode?: FindSimilarMatchMode;
  /** An existing user-specified unique candidate Large Face List, created in "Create Large Face List". Large Face List contains a set of persistedFaceIds which are persisted and will never expire. */
  largeFaceListId: string;
}

export interface FaceErrorResponse {
  /** Array of query faces faceIds, created by the "Detect". Each of the faces are identified independently. The valid number of faceIds is between [1, 10]. */
  faceIds: string[];
  /** personGroupId of the target Person Group, created by "Create Person Group". Parameter personGroupId and largePersonGroupId should not be provided at the same time. */
  personGroupId: string;
  /** The range of maxNumOfCandidatesReturned is between 1 and 100. Default value is 10. */
  maxNumOfCandidatesReturned?: number;
  /** Customized identification confidence threshold, in the range of [0, 1]. Advanced user can tweak this value to override default internal threshold for better precision on their scenario data. Note there is no guarantee of this threshold value working on other data and after algorithm updates. */
  confidenceThreshold?: number;
}

export interface FaceErrorResponse {
  /** Array of query faces faceIds, created by the "Detect". Each of the faces are identified independently. The valid number of faceIds is between [1, 10]. */
  faceIds: string[];
  /** largePersonGroupId of the target Large Person Group, created by "Create Large Person Group". Parameter personGroupId and largePersonGroupId should not be provided at the same time. */
  largePersonGroupId: string;
  /** The range of maxNumOfCandidatesReturned is between 1 and 100. Default value is 10. */
  maxNumOfCandidatesReturned?: number;
  /** Customized identification confidence threshold, in the range of [0, 1]. Advanced user can tweak this value to override default internal threshold for better precision on their scenario data. Note there is no guarantee of this threshold value working on other data and after algorithm updates. */
  confidenceThreshold?: number;
}

export interface FaceErrorResponse {
  /** Array of query faces faceIds, created by the "Detect". Each of the faces are identified independently. The valid number of faceIds is between [1, 10]. */
  faceIds: string[];
  /** Array of personIds created in Person Directory "Create Person". The valid number of personIds is between [1,30]. */
  personIds: string[];
  /** The range of maxNumOfCandidatesReturned is between 1 and 100. Default value is 10. */
  maxNumOfCandidatesReturned?: number;
  /** Customized identification confidence threshold, in the range of [0, 1]. Advanced user can tweak this value to override default internal threshold for better precision on their scenario data. Note there is no guarantee of this threshold value working on other data and after algorithm updates. */
  confidenceThreshold?: number;
}

export interface FaceErrorResponse {
  /** Array of query faces faceIds, created by the "Detect". Each of the faces are identified independently. The valid number of faceIds is between [1, 10]. */
  faceIds: string[];
  /** DynamicPersonGroupId of the target PersonDirectory DynamicPersonGroup to match against. */
  dynamicPersonGroupId: string;
  /** The range of maxNumOfCandidatesReturned is between 1 and 100. Default value is 10. */
  maxNumOfCandidatesReturned?: number;
  /** Customized identification confidence threshold, in the range of [0, 1]. Advanced user can tweak this value to override default internal threshold for better precision on their scenario data. Note there is no guarantee of this threshold value working on other data and after algorithm updates. */
  confidenceThreshold?: number;
}

export interface FaceErrorResponse {
  /** The faceId of one face, come from "Detect". */
  faceId1: string;
  /** The faceId of another face, come from "Detect". */
  faceId2: string;
}

export interface FaceErrorResponse {
  /** The faceId of the face, come from "Detect". */
  faceId: string;
  /** Using existing personGroupId and personId for fast loading a specified person. personGroupId is created in "Create Person Group". */
  personGroupId: string;
  /** Specify a certain person in Person Group. */
  personId: string;
}

export interface FaceErrorResponse {
  /** The faceId of the face, come from "Detect". */
  faceId: string;
  /** Using existing largePersonGroupId and personId for fast loading a specified person. largePersonGroupId is created in "Create Large Person Group". */
  largePersonGroupId: string;
  /** Specify a certain person in Large Person Group. */
  personId: string;
}

export interface FaceErrorResponse {
  /** The faceId of the face, come from "Detect". */
  faceId: string;
  /** Specify a certain person in PersonDirectory Person. */
  personId: string;
}

export interface FaceErrorResponse {
  /** Array of candidate faceIds created by "Detect". The maximum is 1000 faces. */
  faceIds: string[];
}

export interface FaceErrorResponse {
  /** User defined name, maximum length is 128. */
  name: string;
  /** Optional user defined data. Length should not exceed 16K. */
  userData?: string;
}

/** Request for creating liveness session. */
export interface LivenessSessionCreationContent {
  /**
   * Type of liveness mode the client should follow.
   *
   * Possible values: "Passive"
   */
  livenessOperationMode: LivenessOperationMode;
  /** Whether or not to allow a '200 - Success' response body to be sent to the client, which may be undesirable for security reasons. Default is false, clients will receive a '204 - NoContent' empty body response. Regardless of selection, calling Session GetResult will always contain a response body enabling business logic to be implemented. */
  sendResultsToClient?: boolean;
  /** Whether or not to allow client to set their own 'deviceCorrelationId' via the Vision SDK. Default is false, and 'deviceCorrelationId' must be set in this request body. */
  deviceCorrelationIdSetInClient?: boolean;
  /** Unique Guid per each end-user device. This is to provide rate limiting and anti-hammering. If 'deviceCorrelationIdSetInClient' is true in this request, this 'deviceCorrelationId' must be null. */
  deviceCorrelationId?: string;
  /** Seconds the session should last for. Range is 60 to 86400 seconds. Default value is 600. */
  authTokenTimeToLiveInSeconds?: number;
}

export interface LivenessSessionWithVerifyImageCreationContentParametersPartDescriptor {
  name: "Parameters";
  body: LivenessSessionCreationContentForMultipart;
}

export interface LivenessSessionWithVerifyImageCreationContentVerifyImagePartDescriptor {
  name: "VerifyImage";
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream
    | File;
  filename?: string;
  contentType?: string;
}

/** Dedicated parameter model for multipart/form-data. */
export interface LivenessSessionCreationContentForMultipart {
  /**
   * Type of liveness mode the client should follow.
   *
   * Possible values: "Passive"
   */
  livenessOperationMode: LivenessOperationMode;
  /** Whether or not to allow a '200 - Success' response body to be sent to the client, which may be undesirable for security reasons. Default is false, clients will receive a '204 - NoContent' empty body response. Regardless of selection, calling Session GetResult will always contain a response body enabling business logic to be implemented. */
  sendResultsToClient?: boolean;
  /** Whether or not to allow client to set their own 'deviceCorrelationId' via the Vision SDK. Default is false, and 'deviceCorrelationId' must be set in this request body. */
  deviceCorrelationIdSetInClient?: boolean;
  /** Unique Guid per each end-user device. This is to provide rate limiting and anti-hammering. If 'deviceCorrelationIdSetInClient' is true in this request, this 'deviceCorrelationId' must be null. */
  deviceCorrelationId?: string;
  /** Seconds the session should last for. Range is 60 to 86400 seconds. Default value is 600. */
  authTokenTimeToLiveInSeconds?: number;
}

/** Alias for FaceAttributeType */
export type FaceAttributeType = string;
/** Alias for RecognitionModel */
export type RecognitionModel = string;
/** Alias for DetectionModel */
export type DetectionModel = string;
/** Alias for FindSimilarMatchMode */
export type FindSimilarMatchMode = string;
/** Alias for LivenessOperationMode */
export type LivenessOperationMode = string;
/** Request of liveness with verify session creation. */
export type LivenessSessionWithVerifyImageCreationContent =
  | FormData
  | Array<
      | LivenessSessionWithVerifyImageCreationContentParametersPartDescriptor
      | LivenessSessionWithVerifyImageCreationContentVerifyImagePartDescriptor
    >;
/** API versions for Azure AI Face API. */
export type Versions = "v1.1-preview.1";
