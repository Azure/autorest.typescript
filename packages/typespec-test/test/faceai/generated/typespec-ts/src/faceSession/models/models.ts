// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { uint8ArrayToString } from "@azure/core-util";
import {
  CreateLivenessSessionContent as CreateLivenessSessionContentRest,
  CreateLivenessWithVerifySessionContent as CreateLivenessWithVerifySessionContentRest,
} from "../../rest/index.js";

/** The detection model for the face. */
export type FaceDetectionModel =
  | "detection_01"
  | "detection_02"
  | "detection_03";
/** The recognition model for the face. */
export type FaceRecognitionModel =
  | "recognition_01"
  | "recognition_02"
  | "recognition_03"
  | "recognition_04";
/** Available options for detect face with attribute. */
export type FaceAttributeType =
  | "headPose"
  | "glasses"
  | "occlusion"
  | "accessories"
  | "blur"
  | "exposure"
  | "noise"
  | "mask"
  | "qualityForRecognition"
  | "age"
  | "smile"
  | "facialHair"
  | "hair";

/** Response for detect API. */
export interface FaceDetectionResult {
  /** Unique faceId of the detected face, created by detection API and it will expire 24 hours after the detection call. To return this, it requires 'returnFaceId' parameter to be true. */
  faceId?: string;
  /** The 'recognitionModel' associated with this faceId. This is only returned when 'returnRecognitionModel' is explicitly set as true. */
  recognitionModel?: FaceRecognitionModel;
  /** A rectangle area for the face location on image. */
  faceRectangle: FaceRectangle;
  /** An array of 27-point face landmarks pointing to the important positions of face components. To return this, it requires 'returnFaceLandmarks' parameter to be true. */
  faceLandmarks?: FaceLandmarks;
  /** Face attributes for detected face. */
  faceAttributes?: FaceAttributes;
}

/** A rectangle within which a face can be found. */
export interface FaceRectangle {
  /** The distance from the top edge if the image to the top edge of the rectangle, in pixels. */
  top: number;
  /** The distance from the left edge if the image to the left edge of the rectangle, in pixels. */
  left: number;
  /** The width of the rectangle, in pixels. */
  width: number;
  /** The height of the rectangle, in pixels. */
  height: number;
}

/** A collection of 27-point face landmarks pointing to the important positions of face components. */
export interface FaceLandmarks {
  /** The coordinates of the left eye pupil. */
  pupilLeft: LandmarkCoordinate;
  /** The coordinates of the right eye pupil. */
  pupilRight: LandmarkCoordinate;
  /** The coordinates of the nose tip. */
  noseTip: LandmarkCoordinate;
  /** The coordinates of the mouth left. */
  mouthLeft: LandmarkCoordinate;
  /** The coordinates of the mouth right. */
  mouthRight: LandmarkCoordinate;
  /** The coordinates of the left eyebrow outer. */
  eyebrowLeftOuter: LandmarkCoordinate;
  /** The coordinates of the left eyebrow inner. */
  eyebrowLeftInner: LandmarkCoordinate;
  /** The coordinates of the left eye outer. */
  eyeLeftOuter: LandmarkCoordinate;
  /** The coordinates of the left eye top. */
  eyeLeftTop: LandmarkCoordinate;
  /** The coordinates of the left eye bottom. */
  eyeLeftBottom: LandmarkCoordinate;
  /** The coordinates of the left eye inner. */
  eyeLeftInner: LandmarkCoordinate;
  /** The coordinates of the right eyebrow inner. */
  eyebrowRightInner: LandmarkCoordinate;
  /** The coordinates of the right eyebrow outer. */
  eyebrowRightOuter: LandmarkCoordinate;
  /** The coordinates of the right eye inner. */
  eyeRightInner: LandmarkCoordinate;
  /** The coordinates of the right eye top. */
  eyeRightTop: LandmarkCoordinate;
  /** The coordinates of the right eye bottom. */
  eyeRightBottom: LandmarkCoordinate;
  /** The coordinates of the right eye outer. */
  eyeRightOuter: LandmarkCoordinate;
  /** The coordinates of the nose root left. */
  noseRootLeft: LandmarkCoordinate;
  /** The coordinates of the nose root right. */
  noseRootRight: LandmarkCoordinate;
  /** The coordinates of the nose left alar top. */
  noseLeftAlarTop: LandmarkCoordinate;
  /** The coordinates of the nose right alar top. */
  noseRightAlarTop: LandmarkCoordinate;
  /** The coordinates of the nose left alar out tip. */
  noseLeftAlarOutTip: LandmarkCoordinate;
  /** The coordinates of the nose right alar out tip. */
  noseRightAlarOutTip: LandmarkCoordinate;
  /** The coordinates of the upper lip top. */
  upperLipTop: LandmarkCoordinate;
  /** The coordinates of the upper lip bottom. */
  upperLipBottom: LandmarkCoordinate;
  /** The coordinates of the under lip top. */
  underLipTop: LandmarkCoordinate;
  /** The coordinates of the under lip bottom. */
  underLipBottom: LandmarkCoordinate;
}

/** Landmark coordinates within an image. */
export interface LandmarkCoordinate {
  /** The horizontal component, in pixels. */
  x: number;
  /** The vertical component, in pixels. */
  y: number;
}

/** Face attributes for the detected face. */
export interface FaceAttributes {
  /** Age in years. */
  age?: number;
  /** Smile intensity, a number between [0,1]. */
  smile?: number;
  /** Properties describing facial hair attributes. */
  facialHair?: FacialHair;
  /** Glasses type if any of the face. */
  glasses?: GlassesType;
  /** 3-D roll/yaw/pitch angles for face direction. */
  headPose?: HeadPose;
  /** Properties describing hair attributes. */
  hair?: HairProperties;
  /** Properties describing occlusions on a given face. */
  occlusion?: OcclusionProperties;
  /** Properties describing any accessories on a given face. */
  accessories?: AccessoryItem[];
  /** Properties describing any presence of blur within the image. */
  blur?: BlurProperties;
  /** Properties describing exposure level of the image. */
  exposure?: ExposureProperties;
  /** Properties describing noise level of the image. */
  noise?: NoiseProperties;
  /** Properties describing the presence of a mask on a given face. */
  mask?: MaskProperties;
  /** Properties describing the overall image quality regarding whether the image being used in the detection is of sufficient quality to attempt face recognition on. */
  qualityForRecognition?: QualityForRecognition;
}

/** Properties describing facial hair attributes. */
export interface FacialHair {
  /** A number ranging from 0 to 1 indicating a level of confidence associated with a property. */
  moustache: number;
  /** A number ranging from 0 to 1 indicating a level of confidence associated with a property. */
  beard: number;
  /** A number ranging from 0 to 1 indicating a level of confidence associated with a property. */
  sideburns: number;
}

/** Glasses type of the face. */
export type GlassesType =
  | "noGlasses"
  | "readingGlasses"
  | "sunglasses"
  | "swimmingGoggles";

/** 3-D roll/yaw/pitch angles for face direction. */
export interface HeadPose {
  /** Value of angles. */
  pitch: number;
  /** Value of angles. */
  roll: number;
  /** Value of angles. */
  yaw: number;
}

/** Properties describing hair attributes. */
export interface HairProperties {
  /** A number describing confidence level of whether the person is bald. */
  bald: number;
  /** A boolean value describing whether the hair is visible in the image. */
  invisible: boolean;
  /** An array of candidate colors and confidence level in the presence of each. */
  hairColor: HairColor[];
}

/** An array of candidate colors and confidence level in the presence of each. */
export interface HairColor {
  /** Name of the hair color. */
  color: HairColorType;
  /** Confidence level of the color. Range between [0,1]. */
  confidence: number;
}

/** Name of the hair color. */
export type HairColorType =
  | "unknown"
  | "white"
  | "gray"
  | "blond"
  | "brown"
  | "red"
  | "black"
  | "other";

/** Properties describing occlusions on a given face. */
export interface OcclusionProperties {
  /** A boolean value indicating whether forehead is occluded. */
  foreheadOccluded: boolean;
  /** A boolean value indicating whether eyes are occluded. */
  eyeOccluded: boolean;
  /** A boolean value indicating whether the mouth is occluded. */
  mouthOccluded: boolean;
}

/** Accessory item and corresponding confidence level. */
export interface AccessoryItem {
  /** Type of the accessory. */
  type: AccessoryType;
  /** Confidence level of the accessory type. Range between [0,1]. */
  confidence: number;
}

/** Type of the accessory. */
export type AccessoryType = "headwear" | "glasses" | "mask";

/** Properties describing any presence of blur within the image. */
export interface BlurProperties {
  /** An enum value indicating level of blurriness. */
  blurLevel: BlurLevel;
  /** A number indicating level of blurriness ranging from 0 to 1. */
  value: number;
}

/** Indicates level of blurriness. */
export type BlurLevel = "low" | "medium" | "high";

/** Properties describing exposure level of the image. */
export interface ExposureProperties {
  /** An enum value indicating level of exposure. */
  exposureLevel: ExposureLevel;
  /** A number indicating level of exposure level ranging from 0 to 1. [0, 0.25) is under exposure. [0.25, 0.75) is good exposure. [0.75, 1] is over exposure. */
  value: number;
}

/** Indicates level of exposure. */
export type ExposureLevel = "underExposure" | "goodExposure" | "overExposure";

/** Properties describing noise level of the image. */
export interface NoiseProperties {
  /** An enum value indicating level of noise. */
  noiseLevel: NoiseLevel;
  /** A number indicating level of noise level ranging from 0 to 1. [0, 0.25) is under exposure. [0.25, 0.75) is good exposure. [0.75, 1] is over exposure. [0, 0.3) is low noise level. [0.3, 0.7) is medium noise level. [0.7, 1] is high noise level. */
  value: number;
}

/** Indicates level of noise. */
export type NoiseLevel = "low" | "medium" | "high";

/** Properties describing the presence of a mask on a given face. */
export interface MaskProperties {
  /** A boolean value indicating whether nose and mouth are covered. */
  noseAndMouthCovered: boolean;
  /** Type of the mask. */
  type: MaskType;
}

/** Type of the mask. */
export type MaskType =
  | "faceMask"
  | "noMask"
  | "otherMaskOrOcclusion"
  | "uncertain";
/** Indicates quality of image for recognition. */
export type QualityForRecognition = "low" | "medium" | "high";

/** A response containing error details. */
export interface FaceErrorResponse {
  /** The error object. */
  error: FaceError;
}

/** The error object. For comprehensive details on error codes and messages returned by the Face Service, please refer to the following link: https://aka.ms/face-error-codes-and-messages. */
export interface FaceError {
  /** One of a server-defined set of error codes. */
  code: string;
  /** A human-readable representation of the error. */
  message: string;
}

/** Similar face searching mode. */
export type FindSimilarMatchMode = "matchPerson" | "matchFace";

/** Response body for find similar face operation. */
export interface FaceFindSimilarResult {
  /** Confidence value of the candidate. The higher confidence, the more similar. Range between [0,1]. */
  confidence: number;
  /** faceId of candidate face when find by faceIds. faceId is created by "Detect" and will expire 24 hours after the detection call. */
  faceId?: string;
  /** persistedFaceId of candidate face when find by faceListId or largeFaceListId. persistedFaceId in face list/large face list is persisted and will not expire. */
  persistedFaceId?: string;
}

/** Verify result. */
export interface FaceVerificationResult {
  /** True if the two faces belong to the same person or the face belongs to the person, otherwise false. */
  isIdentical: boolean;
  /** A number indicates the similarity confidence of whether two faces belong to the same person, or whether the face belongs to the person. By default, isIdentical is set to True if similarity confidence is greater than or equal to 0.5. This is useful for advanced users to override 'isIdentical' and fine-tune the result on their own data. */
  confidence: number;
}

/** Response body for group face operation. */
export interface FaceGroupingResult {
  /** A partition of the original faces based on face similarity. Groups are ranked by number of faces. */
  groups: string[][];
  /** Face ids array of faces that cannot find any similar faces from original faces. */
  messyGroup: string[];
}

/** Response of liveness session with verify creation with verify image provided. */
export interface CreateLivenessWithVerifySessionResult {
  /** The unique session ID of the created session. It will expire 48 hours after it was created or may be deleted sooner using the corresponding Session DELETE operation. */
  sessionId: string;
  /** Bearer token to provide authentication for the Vision SDK running on a client application. This Bearer token has limited permissions to perform only the required action and expires after the TTL time. It is also auditable. */
  authToken: string;
  /** The detail of face for verification. */
  verifyImage?: LivenessWithVerifyImage;
}

/** The detail of face for verification. */
export interface LivenessWithVerifyImage {
  /** The face region where the comparison image's classification was made. */
  faceRectangle: FaceRectangle;
  /** Quality of face image for recognition. */
  qualityForRecognition: QualityForRecognition;
}

/** API versions for Azure AI Face API. */
export type Versions = "v1.1-preview.1";

/** Request for creating liveness session. */
export interface CreateLivenessSessionContent {
  /** Type of liveness mode the client should follow. */
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

export function createLivenessSessionContentSerializer(
  item: CreateLivenessSessionContent,
): CreateLivenessSessionContentRest {
  return {
    livenessOperationMode: item["livenessOperationMode"],
    sendResultsToClient: item["sendResultsToClient"],
    deviceCorrelationIdSetInClient: item["deviceCorrelationIdSetInClient"],
    deviceCorrelationId: item["deviceCorrelationId"],
    authTokenTimeToLiveInSeconds: item["authTokenTimeToLiveInSeconds"],
  };
}

/** The liveness operation mode to drive the client’s end-user experience. */
export type LivenessOperationMode = "Passive" | "PassiveActive";

/** Response of liveness session creation. */
export interface CreateLivenessSessionResult {
  /** The unique session ID of the created session. It will expire 48 hours after it was created or may be deleted sooner using the corresponding Session DELETE operation. */
  sessionId: string;
  /** Bearer token to provide authentication for the Vision SDK running on a client application. This Bearer token has limited permissions to perform only the required action and expires after the TTL time. It is also auditable. */
  authToken: string;
}

/** Session result of detect liveness. */
export interface LivenessSession {
  /** The unique ID to reference this session. */
  readonly id: string;
  /** DateTime when this session was created. */
  createdDateTime: Date;
  /** DateTime when this session was started by the client. */
  sessionStartDateTime?: Date;
  /** Whether or not the session is expired. */
  sessionExpired: boolean;
  /** Unique Guid per each end-user device. This is to provide rate limiting and anti-hammering. If 'deviceCorrelationIdSetInClient' is true in this request, this 'deviceCorrelationId' must be null. */
  deviceCorrelationId?: string;
  /** Seconds the session should last for. Range is 60 to 86400 seconds. Default value is 600. */
  authTokenTimeToLiveInSeconds?: number;
  /** The current status of the session. */
  status: FaceSessionStatus;
  /** The latest session audit result only populated if status == 'ResultAvailable'. */
  result?: LivenessSessionAuditEntry;
}

/** The current status of the session. */
export type FaceSessionStatus = "NotStarted" | "Started" | "ResultAvailable";

/** Audit entry for a request in session. */
export interface LivenessSessionAuditEntry {
  /** The unique id to refer to this audit request. Use this id with the 'start' query parameter to continue on to the next page of audit results. */
  id: number;
  /** The unique sessionId of the created session. It will expire 48 hours after it was created or may be deleted sooner using the corresponding session DELETE operation. */
  sessionId: string;
  /** The unique requestId that is returned by the service to the client in the 'apim-request-id' header. */
  requestId: string;
  /** The unique clientRequestId that is sent by the client in the 'client-request-id' header. */
  clientRequestId: string;
  /** The UTC DateTime that the request was received. */
  receivedDateTime: Date;
  /** The request of this entry. */
  request: AuditRequestInfo;
  /** The response of this entry. */
  response: AuditLivenessResponseInfo;
  /** The server calculated digest for this request. If the client reported digest differs from the server calculated digest, then the message integrity between the client and service has been compromised and the result should not be trusted. For more information, see how to guides on how to leverage this value to secure your end-to-end solution. */
  digest: string;
}

/** Audit entry for a request in the session. */
export interface AuditRequestInfo {
  /** The relative URL and query of the liveness request. */
  url: string;
  /** The HTTP method of the request (i.e., GET, POST, DELETE). */
  method: string;
  /** The length of the request body in bytes. */
  contentLength?: number;
  /** The content type of the request. */
  contentType: string;
  /** The user agent used to submit the request. */
  userAgent?: string;
}

/** Audit entry for a response in the session. */
export interface AuditLivenessResponseInfo {
  /** The response body. The schema of this field will depend on the request.url and request.method used by the client. */
  body: LivenessResponseBody;
  /** The HTTP status code returned to the client. */
  statusCode: number;
  /** The server measured latency for this request in milliseconds. */
  latencyInMilliseconds: number;
}

/** The response body of detect liveness API call. */
export interface LivenessResponseBody extends Record<string, any> {
  /** The liveness classification for the target face. */
  livenessDecision?: FaceLivenessDecision;
  /** Specific targets used for liveness classification. */
  target?: LivenessOutputsTarget;
  /** The model version used for liveness classification. */
  modelVersionUsed?: LivenessModel;
  /** The face verification output. Only available when the request is liveness with verify. */
  verifyResult?: LivenessWithVerifyOutputs;
}

/** The outcome of the liveness classification. */
export type FaceLivenessDecision = "uncertain" | "realface" | "spoofface";

/** The liveness classification for target face. */
export interface LivenessOutputsTarget {
  /** The face region where the liveness classification was made on. */
  faceRectangle: FaceRectangle;
  /** The file name which contains the face rectangle where the liveness classification was made on. */
  fileName: string;
  /** The time offset within the file of the frame which contains the face rectangle where the liveness classification was made on. */
  timeOffsetWithinFile: number;
  /** The image type which contains the face rectangle where the liveness classification was made on. */
  imageType: FaceImageType;
}

/** The type of image. */
export type FaceImageType = "Color" | "Infrared" | "Depth";
/** The model version used for liveness classification. */
export type LivenessModel =
  | "2020-02-15-preview.01"
  | "2021-11-12-preview.03"
  | "2022-10-15-preview.04"
  | "2023-03-02-preview.05";

/** The face verification output. */
export interface LivenessWithVerifyOutputs {
  /** The detail of face for verification. */
  verifyImage: LivenessWithVerifyImage;
  /** The target face liveness face and comparison image face verification confidence. */
  matchConfidence: number;
  /** Whether the target liveness face and comparison image face match. */
  isIdentical: boolean;
}

/** Session data returned for enumeration. */
export interface LivenessSessionItem {
  /** The unique ID to reference this session. */
  readonly id: string;
  /** DateTime when this session was created. */
  createdDateTime: Date;
  /** DateTime when this session was started by the client. */
  sessionStartDateTime?: Date;
  /** Whether or not the session is expired. */
  sessionExpired: boolean;
  /** Unique Guid per each end-user device. This is to provide rate limiting and anti-hammering. If 'deviceCorrelationIdSetInClient' is true in this request, this 'deviceCorrelationId' must be null. */
  deviceCorrelationId?: string;
  /** Seconds the session should last for. Range is 60 to 86400 seconds. Default value is 600. */
  authTokenTimeToLiveInSeconds?: number;
}

/** Request of liveness with verify session creation. */
export interface CreateLivenessWithVerifySessionContent {
  /** The parameters for creating session. */
  parameters: CreateLivenessSessionContent;
  /** The image stream for verify. Content-Disposition header field for this part must have filename. */
  verifyImage: Uint8Array;
}

export function createLivenessWithVerifySessionContentSerializer(
  item: CreateLivenessWithVerifySessionContent,
): CreateLivenessWithVerifySessionContentRest {
  return {
    Parameters: createLivenessSessionContentSerializer(item.parameters),
    VerifyImage: uint8ArrayToString(item["verifyImage"], "base64"),
  };
}

/** Session result of detect liveness with verify. */
export interface LivenessWithVerifySession {
  /** The unique ID to reference this session. */
  readonly id: string;
  /** DateTime when this session was created. */
  createdDateTime: Date;
  /** DateTime when this session was started by the client. */
  sessionStartDateTime?: Date;
  /** Whether or not the session is expired. */
  sessionExpired: boolean;
  /** Unique Guid per each end-user device. This is to provide rate limiting and anti-hammering. If 'deviceCorrelationIdSetInClient' is true in this request, this 'deviceCorrelationId' must be null. */
  deviceCorrelationId?: string;
  /** Seconds the session should last for. Range is 60 to 86400 seconds. Default value is 600. */
  authTokenTimeToLiveInSeconds?: number;
  /** The current status of the session. */
  status: FaceSessionStatus;
  /** The latest session audit result only populated if status == 'ResultAvailable'. */
  result?: LivenessSessionAuditEntry;
}
