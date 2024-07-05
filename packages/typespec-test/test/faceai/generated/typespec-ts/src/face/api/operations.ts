// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  FaceRecognitionModel,
  FaceDetectionResult,
  GlassesType,
  HairColorType,
  AccessoryType,
  BlurLevel,
  ExposureLevel,
  NoiseLevel,
  MaskType,
  QualityForRecognition,
  FaceFindSimilarResult,
  FaceVerificationResult,
  FaceGroupingResult,
} from "../models/models.js";
import {
  isUnexpected,
  FaceContext as Client,
  Detect200Response,
  DetectDefaultResponse,
  DetectFromUrl200Response,
  DetectFromUrlDefaultResponse,
  FindSimilar200Response,
  FindSimilarDefaultResponse,
  Group200Response,
  GroupDefaultResponse,
  VerifyFaceToFace200Response,
  VerifyFaceToFaceDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  DetectFromUrlOptionalParams,
  DetectOptionalParams,
  FindSimilarOptionalParams,
  VerifyFaceToFaceOptionalParams,
  GroupOptionalParams,
} from "../models/options.js";

export function _detectFromUrlSend(
  context: Client,
  url: string,
  options: DetectFromUrlOptionalParams = { requestOptions: {} },
): StreamableMethod<DetectFromUrl200Response | DetectFromUrlDefaultResponse> {
  return context
    .path("/detect")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "application/json",
      queryParameters: {
        detectionModel: options?.detectionModel,
        recognitionModel: options?.recognitionModel,
        returnFaceId: options?.returnFaceId,
        returnFaceAttributes: options?.returnFaceAttributes,
        returnFaceLandmarks: options?.returnFaceLandmarks,
        returnRecognitionModel: options?.returnRecognitionModel,
        faceIdTimeToLive: options?.faceIdTimeToLive,
      },
      body: { url: url },
    }) as StreamableMethod<
    DetectFromUrl200Response | DetectFromUrlDefaultResponse
  >;
}

export async function _detectFromUrlDeserialize(
  result: DetectFromUrl200Response | DetectFromUrlDefaultResponse,
): Promise<FaceDetectionResult[]> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body === undefined
    ? result.body
    : result.body.map((p) => ({
        faceId: p["faceId"],
        recognitionModel: p["recognitionModel"] as FaceRecognitionModel,
        faceRectangle: {
          top: p.faceRectangle["top"],
          left: p.faceRectangle["left"],
          width: p.faceRectangle["width"],
          height: p.faceRectangle["height"],
        },
        faceLandmarks: !p.faceLandmarks
          ? undefined
          : {
              pupilLeft: {
                x: p.faceLandmarks?.pupilLeft["x"],
                y: p.faceLandmarks?.pupilLeft["y"],
              },
              pupilRight: {
                x: p.faceLandmarks?.pupilRight["x"],
                y: p.faceLandmarks?.pupilRight["y"],
              },
              noseTip: {
                x: p.faceLandmarks?.noseTip["x"],
                y: p.faceLandmarks?.noseTip["y"],
              },
              mouthLeft: {
                x: p.faceLandmarks?.mouthLeft["x"],
                y: p.faceLandmarks?.mouthLeft["y"],
              },
              mouthRight: {
                x: p.faceLandmarks?.mouthRight["x"],
                y: p.faceLandmarks?.mouthRight["y"],
              },
              eyebrowLeftOuter: {
                x: p.faceLandmarks?.eyebrowLeftOuter["x"],
                y: p.faceLandmarks?.eyebrowLeftOuter["y"],
              },
              eyebrowLeftInner: {
                x: p.faceLandmarks?.eyebrowLeftInner["x"],
                y: p.faceLandmarks?.eyebrowLeftInner["y"],
              },
              eyeLeftOuter: {
                x: p.faceLandmarks?.eyeLeftOuter["x"],
                y: p.faceLandmarks?.eyeLeftOuter["y"],
              },
              eyeLeftTop: {
                x: p.faceLandmarks?.eyeLeftTop["x"],
                y: p.faceLandmarks?.eyeLeftTop["y"],
              },
              eyeLeftBottom: {
                x: p.faceLandmarks?.eyeLeftBottom["x"],
                y: p.faceLandmarks?.eyeLeftBottom["y"],
              },
              eyeLeftInner: {
                x: p.faceLandmarks?.eyeLeftInner["x"],
                y: p.faceLandmarks?.eyeLeftInner["y"],
              },
              eyebrowRightInner: {
                x: p.faceLandmarks?.eyebrowRightInner["x"],
                y: p.faceLandmarks?.eyebrowRightInner["y"],
              },
              eyebrowRightOuter: {
                x: p.faceLandmarks?.eyebrowRightOuter["x"],
                y: p.faceLandmarks?.eyebrowRightOuter["y"],
              },
              eyeRightInner: {
                x: p.faceLandmarks?.eyeRightInner["x"],
                y: p.faceLandmarks?.eyeRightInner["y"],
              },
              eyeRightTop: {
                x: p.faceLandmarks?.eyeRightTop["x"],
                y: p.faceLandmarks?.eyeRightTop["y"],
              },
              eyeRightBottom: {
                x: p.faceLandmarks?.eyeRightBottom["x"],
                y: p.faceLandmarks?.eyeRightBottom["y"],
              },
              eyeRightOuter: {
                x: p.faceLandmarks?.eyeRightOuter["x"],
                y: p.faceLandmarks?.eyeRightOuter["y"],
              },
              noseRootLeft: {
                x: p.faceLandmarks?.noseRootLeft["x"],
                y: p.faceLandmarks?.noseRootLeft["y"],
              },
              noseRootRight: {
                x: p.faceLandmarks?.noseRootRight["x"],
                y: p.faceLandmarks?.noseRootRight["y"],
              },
              noseLeftAlarTop: {
                x: p.faceLandmarks?.noseLeftAlarTop["x"],
                y: p.faceLandmarks?.noseLeftAlarTop["y"],
              },
              noseRightAlarTop: {
                x: p.faceLandmarks?.noseRightAlarTop["x"],
                y: p.faceLandmarks?.noseRightAlarTop["y"],
              },
              noseLeftAlarOutTip: {
                x: p.faceLandmarks?.noseLeftAlarOutTip["x"],
                y: p.faceLandmarks?.noseLeftAlarOutTip["y"],
              },
              noseRightAlarOutTip: {
                x: p.faceLandmarks?.noseRightAlarOutTip["x"],
                y: p.faceLandmarks?.noseRightAlarOutTip["y"],
              },
              upperLipTop: {
                x: p.faceLandmarks?.upperLipTop["x"],
                y: p.faceLandmarks?.upperLipTop["y"],
              },
              upperLipBottom: {
                x: p.faceLandmarks?.upperLipBottom["x"],
                y: p.faceLandmarks?.upperLipBottom["y"],
              },
              underLipTop: {
                x: p.faceLandmarks?.underLipTop["x"],
                y: p.faceLandmarks?.underLipTop["y"],
              },
              underLipBottom: {
                x: p.faceLandmarks?.underLipBottom["x"],
                y: p.faceLandmarks?.underLipBottom["y"],
              },
            },
        faceAttributes: !p.faceAttributes
          ? undefined
          : {
              age: p.faceAttributes?.["age"],
              smile: p.faceAttributes?.["smile"],
              facialHair: !p.faceAttributes?.facialHair
                ? undefined
                : {
                    moustache: p.faceAttributes?.facialHair?.["moustache"],
                    beard: p.faceAttributes?.facialHair?.["beard"],
                    sideburns: p.faceAttributes?.facialHair?.["sideburns"],
                  },
              glasses: p.faceAttributes?.["glasses"] as GlassesType,
              headPose: !p.faceAttributes?.headPose
                ? undefined
                : {
                    pitch: p.faceAttributes?.headPose?.["pitch"],
                    roll: p.faceAttributes?.headPose?.["roll"],
                    yaw: p.faceAttributes?.headPose?.["yaw"],
                  },
              hair: !p.faceAttributes?.hair
                ? undefined
                : {
                    bald: p.faceAttributes?.hair?.["bald"],
                    invisible: p.faceAttributes?.hair?.["invisible"],
                    hairColor: p.faceAttributes?.hair?.["hairColor"].map(
                      (p) => ({
                        color: p["color"] as HairColorType,
                        confidence: p["confidence"],
                      }),
                    ),
                  },
              occlusion: !p.faceAttributes?.occlusion
                ? undefined
                : {
                    foreheadOccluded:
                      p.faceAttributes?.occlusion?.["foreheadOccluded"],
                    eyeOccluded: p.faceAttributes?.occlusion?.["eyeOccluded"],
                    mouthOccluded:
                      p.faceAttributes?.occlusion?.["mouthOccluded"],
                  },
              accessories:
                p.faceAttributes?.["accessories"] === undefined
                  ? p.faceAttributes?.["accessories"]
                  : p.faceAttributes?.["accessories"].map((p) => ({
                      type: p["type"] as AccessoryType,
                      confidence: p["confidence"],
                    })),
              blur: !p.faceAttributes?.blur
                ? undefined
                : {
                    blurLevel: p.faceAttributes?.blur?.[
                      "blurLevel"
                    ] as BlurLevel,
                    value: p.faceAttributes?.blur?.["value"],
                  },
              exposure: !p.faceAttributes?.exposure
                ? undefined
                : {
                    exposureLevel: p.faceAttributes?.exposure?.[
                      "exposureLevel"
                    ] as ExposureLevel,
                    value: p.faceAttributes?.exposure?.["value"],
                  },
              noise: !p.faceAttributes?.noise
                ? undefined
                : {
                    noiseLevel: p.faceAttributes?.noise?.[
                      "noiseLevel"
                    ] as NoiseLevel,
                    value: p.faceAttributes?.noise?.["value"],
                  },
              mask: !p.faceAttributes?.mask
                ? undefined
                : {
                    noseAndMouthCovered:
                      p.faceAttributes?.mask?.["noseAndMouthCovered"],
                    type: p.faceAttributes?.mask?.["type"] as MaskType,
                  },
              qualityForRecognition: p.faceAttributes?.[
                "qualityForRecognition"
              ] as QualityForRecognition,
            },
      }));
}

/**
 * > [!IMPORTANT]
 * > Microsoft has retired or limited facial recognition capabilities that can be used to try to infer emotional states and identity attributes which, if misused, can subject people to stereotyping, discrimination or unfair denial of services. The retired capabilities are emotion and gender. The limited capabilities are age, smile, facial hair, hair and makeup. Email Azure Face API <azureface@microsoft.com> if you have a responsible use case that would benefit from the use of any of the limited capabilities. Read more about this decision https://azure.microsoft.com/blog/responsible-ai-investments-and-safeguards-for-facial-recognition/.
 *
 * *
 *   * No image will be stored. Only the extracted face feature(s) will be stored on server. The faceId is an identifier of the face feature and will be used in "Identify", "Verify", and "Find Similar". The stored face features will expire and be deleted at the time specified by faceIdTimeToLive after the original detection call.
 *   * Optional parameters include faceId, landmarks, and attributes. Attributes include headPose, glasses, occlusion, accessories, blur, exposure, noise, mask, and qualityForRecognition. Some of the results returned for specific attributes may not be highly accurate.
 *   * JPEG, PNG, GIF (the first frame), and BMP format are supported. The allowed image file size is from 1KB to 6MB.
 *   * The minimum detectable face size is 36x36 pixels in an image no larger than 1920x1080 pixels. Images with dimensions higher than 1920x1080 pixels will need a proportionally larger minimum face size.
 *   * Up to 100 faces can be returned for an image. Faces are ranked by face rectangle size from large to small.
 *   * For optimal results when querying "Identify", "Verify", and "Find Similar" ('returnFaceId' is true), please use faces that are: frontal, clear, and with a minimum size of 200x200 pixels (100 pixels between eyes).
 *   * Different 'detectionModel' values can be provided. To use and compare different detection models, please refer to https://learn.microsoft.com/azure/ai-services/computer-vision/how-to/specify-detection-model
 *     * 'detection_02': Face attributes and landmarks are disabled if you choose this detection model.
 *     * 'detection_03': Face attributes (mask, blur, and headPose) and landmarks are supported if you choose this detection model.
 *   * Different 'recognitionModel' values are provided. If follow-up operations like "Verify", "Identify", "Find Similar" are needed, please specify the recognition model with 'recognitionModel' parameter. The default value for 'recognitionModel' is 'recognition_01', if latest model needed, please explicitly specify the model you need in this parameter. Once specified, the detected faceIds will be associated with the specified recognition model. More details, please refer to https://learn.microsoft.com/azure/ai-services/computer-vision/how-to/specify-recognition-model.
 */
export async function detectFromUrl(
  context: Client,
  url: string,
  options: DetectFromUrlOptionalParams = { requestOptions: {} },
): Promise<FaceDetectionResult[]> {
  const result = await _detectFromUrlSend(context, url, options);
  return _detectFromUrlDeserialize(result);
}

export function _detectSend(
  context: Client,
  imageContent: Uint8Array,
  options: DetectOptionalParams = { requestOptions: {} },
): StreamableMethod<Detect200Response | DetectDefaultResponse> {
  return context
    .path("/detect")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "application/octet-stream",
      queryParameters: {
        detectionModel: options?.detectionModel,
        recognitionModel: options?.recognitionModel,
        returnFaceId: options?.returnFaceId,
        returnFaceAttributes: options?.returnFaceAttributes,
        returnFaceLandmarks: options?.returnFaceLandmarks,
        returnRecognitionModel: options?.returnRecognitionModel,
        faceIdTimeToLive: options?.faceIdTimeToLive,
      },
      body: imageContent,
    }) as StreamableMethod<Detect200Response | DetectDefaultResponse>;
}

export async function _detectDeserialize(
  result: Detect200Response | DetectDefaultResponse,
): Promise<FaceDetectionResult[]> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body === undefined
    ? result.body
    : result.body.map((p) => ({
        faceId: p["faceId"],
        recognitionModel: p["recognitionModel"] as FaceRecognitionModel,
        faceRectangle: {
          top: p.faceRectangle["top"],
          left: p.faceRectangle["left"],
          width: p.faceRectangle["width"],
          height: p.faceRectangle["height"],
        },
        faceLandmarks: !p.faceLandmarks
          ? undefined
          : {
              pupilLeft: {
                x: p.faceLandmarks?.pupilLeft["x"],
                y: p.faceLandmarks?.pupilLeft["y"],
              },
              pupilRight: {
                x: p.faceLandmarks?.pupilRight["x"],
                y: p.faceLandmarks?.pupilRight["y"],
              },
              noseTip: {
                x: p.faceLandmarks?.noseTip["x"],
                y: p.faceLandmarks?.noseTip["y"],
              },
              mouthLeft: {
                x: p.faceLandmarks?.mouthLeft["x"],
                y: p.faceLandmarks?.mouthLeft["y"],
              },
              mouthRight: {
                x: p.faceLandmarks?.mouthRight["x"],
                y: p.faceLandmarks?.mouthRight["y"],
              },
              eyebrowLeftOuter: {
                x: p.faceLandmarks?.eyebrowLeftOuter["x"],
                y: p.faceLandmarks?.eyebrowLeftOuter["y"],
              },
              eyebrowLeftInner: {
                x: p.faceLandmarks?.eyebrowLeftInner["x"],
                y: p.faceLandmarks?.eyebrowLeftInner["y"],
              },
              eyeLeftOuter: {
                x: p.faceLandmarks?.eyeLeftOuter["x"],
                y: p.faceLandmarks?.eyeLeftOuter["y"],
              },
              eyeLeftTop: {
                x: p.faceLandmarks?.eyeLeftTop["x"],
                y: p.faceLandmarks?.eyeLeftTop["y"],
              },
              eyeLeftBottom: {
                x: p.faceLandmarks?.eyeLeftBottom["x"],
                y: p.faceLandmarks?.eyeLeftBottom["y"],
              },
              eyeLeftInner: {
                x: p.faceLandmarks?.eyeLeftInner["x"],
                y: p.faceLandmarks?.eyeLeftInner["y"],
              },
              eyebrowRightInner: {
                x: p.faceLandmarks?.eyebrowRightInner["x"],
                y: p.faceLandmarks?.eyebrowRightInner["y"],
              },
              eyebrowRightOuter: {
                x: p.faceLandmarks?.eyebrowRightOuter["x"],
                y: p.faceLandmarks?.eyebrowRightOuter["y"],
              },
              eyeRightInner: {
                x: p.faceLandmarks?.eyeRightInner["x"],
                y: p.faceLandmarks?.eyeRightInner["y"],
              },
              eyeRightTop: {
                x: p.faceLandmarks?.eyeRightTop["x"],
                y: p.faceLandmarks?.eyeRightTop["y"],
              },
              eyeRightBottom: {
                x: p.faceLandmarks?.eyeRightBottom["x"],
                y: p.faceLandmarks?.eyeRightBottom["y"],
              },
              eyeRightOuter: {
                x: p.faceLandmarks?.eyeRightOuter["x"],
                y: p.faceLandmarks?.eyeRightOuter["y"],
              },
              noseRootLeft: {
                x: p.faceLandmarks?.noseRootLeft["x"],
                y: p.faceLandmarks?.noseRootLeft["y"],
              },
              noseRootRight: {
                x: p.faceLandmarks?.noseRootRight["x"],
                y: p.faceLandmarks?.noseRootRight["y"],
              },
              noseLeftAlarTop: {
                x: p.faceLandmarks?.noseLeftAlarTop["x"],
                y: p.faceLandmarks?.noseLeftAlarTop["y"],
              },
              noseRightAlarTop: {
                x: p.faceLandmarks?.noseRightAlarTop["x"],
                y: p.faceLandmarks?.noseRightAlarTop["y"],
              },
              noseLeftAlarOutTip: {
                x: p.faceLandmarks?.noseLeftAlarOutTip["x"],
                y: p.faceLandmarks?.noseLeftAlarOutTip["y"],
              },
              noseRightAlarOutTip: {
                x: p.faceLandmarks?.noseRightAlarOutTip["x"],
                y: p.faceLandmarks?.noseRightAlarOutTip["y"],
              },
              upperLipTop: {
                x: p.faceLandmarks?.upperLipTop["x"],
                y: p.faceLandmarks?.upperLipTop["y"],
              },
              upperLipBottom: {
                x: p.faceLandmarks?.upperLipBottom["x"],
                y: p.faceLandmarks?.upperLipBottom["y"],
              },
              underLipTop: {
                x: p.faceLandmarks?.underLipTop["x"],
                y: p.faceLandmarks?.underLipTop["y"],
              },
              underLipBottom: {
                x: p.faceLandmarks?.underLipBottom["x"],
                y: p.faceLandmarks?.underLipBottom["y"],
              },
            },
        faceAttributes: !p.faceAttributes
          ? undefined
          : {
              age: p.faceAttributes?.["age"],
              smile: p.faceAttributes?.["smile"],
              facialHair: !p.faceAttributes?.facialHair
                ? undefined
                : {
                    moustache: p.faceAttributes?.facialHair?.["moustache"],
                    beard: p.faceAttributes?.facialHair?.["beard"],
                    sideburns: p.faceAttributes?.facialHair?.["sideburns"],
                  },
              glasses: p.faceAttributes?.["glasses"] as GlassesType,
              headPose: !p.faceAttributes?.headPose
                ? undefined
                : {
                    pitch: p.faceAttributes?.headPose?.["pitch"],
                    roll: p.faceAttributes?.headPose?.["roll"],
                    yaw: p.faceAttributes?.headPose?.["yaw"],
                  },
              hair: !p.faceAttributes?.hair
                ? undefined
                : {
                    bald: p.faceAttributes?.hair?.["bald"],
                    invisible: p.faceAttributes?.hair?.["invisible"],
                    hairColor: p.faceAttributes?.hair?.["hairColor"].map(
                      (p) => ({
                        color: p["color"] as HairColorType,
                        confidence: p["confidence"],
                      }),
                    ),
                  },
              occlusion: !p.faceAttributes?.occlusion
                ? undefined
                : {
                    foreheadOccluded:
                      p.faceAttributes?.occlusion?.["foreheadOccluded"],
                    eyeOccluded: p.faceAttributes?.occlusion?.["eyeOccluded"],
                    mouthOccluded:
                      p.faceAttributes?.occlusion?.["mouthOccluded"],
                  },
              accessories:
                p.faceAttributes?.["accessories"] === undefined
                  ? p.faceAttributes?.["accessories"]
                  : p.faceAttributes?.["accessories"].map((p) => ({
                      type: p["type"] as AccessoryType,
                      confidence: p["confidence"],
                    })),
              blur: !p.faceAttributes?.blur
                ? undefined
                : {
                    blurLevel: p.faceAttributes?.blur?.[
                      "blurLevel"
                    ] as BlurLevel,
                    value: p.faceAttributes?.blur?.["value"],
                  },
              exposure: !p.faceAttributes?.exposure
                ? undefined
                : {
                    exposureLevel: p.faceAttributes?.exposure?.[
                      "exposureLevel"
                    ] as ExposureLevel,
                    value: p.faceAttributes?.exposure?.["value"],
                  },
              noise: !p.faceAttributes?.noise
                ? undefined
                : {
                    noiseLevel: p.faceAttributes?.noise?.[
                      "noiseLevel"
                    ] as NoiseLevel,
                    value: p.faceAttributes?.noise?.["value"],
                  },
              mask: !p.faceAttributes?.mask
                ? undefined
                : {
                    noseAndMouthCovered:
                      p.faceAttributes?.mask?.["noseAndMouthCovered"],
                    type: p.faceAttributes?.mask?.["type"] as MaskType,
                  },
              qualityForRecognition: p.faceAttributes?.[
                "qualityForRecognition"
              ] as QualityForRecognition,
            },
      }));
}

/**
 * > [!IMPORTANT]
 * > Microsoft has retired or limited facial recognition capabilities that can be used to try to infer emotional states and identity attributes which, if misused, can subject people to stereotyping, discrimination or unfair denial of services. The retired capabilities are emotion and gender. The limited capabilities are age, smile, facial hair, hair and makeup. Email Azure Face API <azureface@microsoft.com> if you have a responsible use case that would benefit from the use of any of the limited capabilities. Read more about this decision https://azure.microsoft.com/blog/responsible-ai-investments-and-safeguards-for-facial-recognition/.
 *
 * *
 *   * No image will be stored. Only the extracted face feature(s) will be stored on server. The faceId is an identifier of the face feature and will be used in "Identify", "Verify", and "Find Similar". The stored face features will expire and be deleted at the time specified by faceIdTimeToLive after the original detection call.
 *   * Optional parameters include faceId, landmarks, and attributes. Attributes include headPose, glasses, occlusion, accessories, blur, exposure, noise, mask, and qualityForRecognition. Some of the results returned for specific attributes may not be highly accurate.
 *   * JPEG, PNG, GIF (the first frame), and BMP format are supported. The allowed image file size is from 1KB to 6MB.
 *   * The minimum detectable face size is 36x36 pixels in an image no larger than 1920x1080 pixels. Images with dimensions higher than 1920x1080 pixels will need a proportionally larger minimum face size.
 *   * Up to 100 faces can be returned for an image. Faces are ranked by face rectangle size from large to small.
 *   * For optimal results when querying "Identify", "Verify", and "Find Similar" ('returnFaceId' is true), please use faces that are: frontal, clear, and with a minimum size of 200x200 pixels (100 pixels between eyes).
 *   * Different 'detectionModel' values can be provided. To use and compare different detection models, please refer to https://learn.microsoft.com/azure/ai-services/computer-vision/how-to/specify-detection-model
 *     * 'detection_02': Face attributes and landmarks are disabled if you choose this detection model.
 *     * 'detection_03': Face attributes (mask, blur, and headPose) and landmarks are supported if you choose this detection model.
 *   * Different 'recognitionModel' values are provided. If follow-up operations like "Verify", "Identify", "Find Similar" are needed, please specify the recognition model with 'recognitionModel' parameter. The default value for 'recognitionModel' is 'recognition_01', if latest model needed, please explicitly specify the model you need in this parameter. Once specified, the detected faceIds will be associated with the specified recognition model. More details, please refer to https://learn.microsoft.com/azure/ai-services/computer-vision/how-to/specify-recognition-model.
 */
export async function detect(
  context: Client,
  imageContent: Uint8Array,
  options: DetectOptionalParams = { requestOptions: {} },
): Promise<FaceDetectionResult[]> {
  const result = await _detectSend(context, imageContent, options);
  return _detectDeserialize(result);
}

export function _findSimilarSend(
  context: Client,
  faceId: string,
  faceIds: string[],
  options: FindSimilarOptionalParams = { requestOptions: {} },
): StreamableMethod<FindSimilar200Response | FindSimilarDefaultResponse> {
  return context
    .path("/findsimilars")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        faceId: faceId,
        maxNumOfCandidatesReturned: options?.maxNumOfCandidatesReturned,
        mode: options?.mode,
        faceIds: faceIds,
      },
    }) as StreamableMethod<FindSimilar200Response | FindSimilarDefaultResponse>;
}

export async function _findSimilarDeserialize(
  result: FindSimilar200Response | FindSimilarDefaultResponse,
): Promise<FaceFindSimilarResult[]> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body === undefined
    ? result.body
    : result.body.map((p) => ({
        confidence: p["confidence"],
        faceId: p["faceId"],
        persistedFaceId: p["persistedFaceId"],
      }));
}

/**
 * Depending on the input the returned similar faces list contains faceIds or persistedFaceIds ranked by similarity.
 *
 * Find similar has two working modes, "matchPerson" and "matchFace". "matchPerson" is the default mode that it tries to find faces of the same person as possible by using internal same-person thresholds. It is useful to find a known person's other photos. Note that an empty list will be returned if no faces pass the internal thresholds. "matchFace" mode ignores same-person thresholds and returns ranked similar faces anyway, even the similarity is low. It can be used in the cases like searching celebrity-looking faces.
 *
 * The 'recognitionModel' associated with the query faceId should be the same as the 'recognitionModel' used by the target faceId array.
 */
export async function findSimilar(
  context: Client,
  faceId: string,
  faceIds: string[],
  options: FindSimilarOptionalParams = { requestOptions: {} },
): Promise<FaceFindSimilarResult[]> {
  const result = await _findSimilarSend(context, faceId, faceIds, options);
  return _findSimilarDeserialize(result);
}

export function _verifyFaceToFaceSend(
  context: Client,
  faceId1: string,
  faceId2: string,
  options: VerifyFaceToFaceOptionalParams = { requestOptions: {} },
): StreamableMethod<
  VerifyFaceToFace200Response | VerifyFaceToFaceDefaultResponse
> {
  return context
    .path("/verify")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { faceId1: faceId1, faceId2: faceId2 },
    }) as StreamableMethod<
    VerifyFaceToFace200Response | VerifyFaceToFaceDefaultResponse
  >;
}

export async function _verifyFaceToFaceDeserialize(
  result: VerifyFaceToFace200Response | VerifyFaceToFaceDefaultResponse,
): Promise<FaceVerificationResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    isIdentical: result.body["isIdentical"],
    confidence: result.body["confidence"],
  };
}

/**
 * > [!NOTE]
 * >
 * > *
 * >   * Higher face image quality means better identification precision. Please consider high-quality faces: frontal, clear, and face size is 200x200 pixels (100 pixels between eyes) or bigger.
 * >   * For the scenarios that are sensitive to accuracy please make your own judgment.
 * >   * The 'recognitionModel' associated with the both faces should be the same.
 */
export async function verifyFaceToFace(
  context: Client,
  faceId1: string,
  faceId2: string,
  options: VerifyFaceToFaceOptionalParams = { requestOptions: {} },
): Promise<FaceVerificationResult> {
  const result = await _verifyFaceToFaceSend(
    context,
    faceId1,
    faceId2,
    options,
  );
  return _verifyFaceToFaceDeserialize(result);
}

export function _groupSend(
  context: Client,
  faceIds: string[],
  options: GroupOptionalParams = { requestOptions: {} },
): StreamableMethod<Group200Response | GroupDefaultResponse> {
  return context
    .path("/group")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { faceIds: faceIds },
    });
}

export async function _groupDeserialize(
  result: Group200Response | GroupDefaultResponse,
): Promise<FaceGroupingResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    groups: result.body["groups"].map((p) => p),
    messyGroup: result.body["messyGroup"],
  };
}

/**
 * >
 * *
 *   * The output is one or more disjointed face groups and a messyGroup. A face group contains faces that have similar looking, often of the same person. Face groups are ranked by group size, i.e. number of faces. Notice that faces belonging to a same person might be split into several groups in the result.
 *   * MessyGroup is a special face group containing faces that cannot find any similar counterpart face from original faces. The messyGroup will not appear in the result if all faces found their counterparts.
 *   * Group API needs at least 2 candidate faces and 1000 at most. We suggest to try "Verify Face To Face" when you only have 2 candidate faces.
 *   * The 'recognitionModel' associated with the query faces' faceIds should be the same.
 */
export async function group(
  context: Client,
  faceIds: string[],
  options: GroupOptionalParams = { requestOptions: {} },
): Promise<FaceGroupingResult> {
  const result = await _groupSend(context, faceIds, options);
  return _groupDeserialize(result);
}
