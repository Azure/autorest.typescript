// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  FaceDetectionResult,
  FaceFindSimilarResult,
  FaceVerificationResult,
  FaceGroupingResult,
} from "./models/models.js";
import {
  DetectFromUrlOptionalParams,
  DetectOptionalParams,
  FindSimilarOptionalParams,
  VerifyFaceToFaceOptionalParams,
  GroupOptionalParams,
} from "./models/options.js";
import {
  createFace,
  FaceClientOptions,
  FaceContext,
  detectFromUrl,
  detect,
  findSimilar,
  verifyFaceToFace,
  group,
} from "./api/index.js";

export { FaceClientOptions } from "./api/faceContext.js";

export class FaceClient {
  private _client: FaceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: KeyCredential | TokenCredential,
    options: FaceClientOptions = {},
  ) {
    this._client = createFace(endpointParam, credential, options);
    this.pipeline = this._client.pipeline;
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
  detectFromUrl(
    url: string,
    options: DetectFromUrlOptionalParams = { requestOptions: {} },
  ): Promise<FaceDetectionResult[]> {
    return detectFromUrl(this._client, url, options);
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
  detect(
    imageContent: Uint8Array,
    options: DetectOptionalParams = { requestOptions: {} },
  ): Promise<FaceDetectionResult[]> {
    return detect(this._client, imageContent, options);
  }

  /**
   * Depending on the input the returned similar faces list contains faceIds or persistedFaceIds ranked by similarity.
   *
   * Find similar has two working modes, "matchPerson" and "matchFace". "matchPerson" is the default mode that it tries to find faces of the same person as possible by using internal same-person thresholds. It is useful to find a known person's other photos. Note that an empty list will be returned if no faces pass the internal thresholds. "matchFace" mode ignores same-person thresholds and returns ranked similar faces anyway, even the similarity is low. It can be used in the cases like searching celebrity-looking faces.
   *
   * The 'recognitionModel' associated with the query faceId should be the same as the 'recognitionModel' used by the target faceId array.
   */
  findSimilar(
    faceId: string,
    faceIds: string[],
    options: FindSimilarOptionalParams = { requestOptions: {} },
  ): Promise<FaceFindSimilarResult[]> {
    return findSimilar(this._client, faceId, faceIds, options);
  }

  /**
   * > [!NOTE]
   * >
   * > *
   * >   * Higher face image quality means better identification precision. Please consider high-quality faces: frontal, clear, and face size is 200x200 pixels (100 pixels between eyes) or bigger.
   * >   * For the scenarios that are sensitive to accuracy please make your own judgment.
   * >   * The 'recognitionModel' associated with the both faces should be the same.
   */
  verifyFaceToFace(
    faceId1: string,
    faceId2: string,
    options: VerifyFaceToFaceOptionalParams = { requestOptions: {} },
  ): Promise<FaceVerificationResult> {
    return verifyFaceToFace(this._client, faceId1, faceId2, options);
  }

  /**
   * >
   * *
   *   * The output is one or more disjointed face groups and a messyGroup. A face group contains faces that have similar looking, often of the same person. Face groups are ranked by group size, i.e. number of faces. Notice that faces belonging to a same person might be split into several groups in the result.
   *   * MessyGroup is a special face group containing faces that cannot find any similar counterpart face from original faces. The messyGroup will not appear in the result if all faces found their counterparts.
   *   * Group API needs at least 2 candidate faces and 1000 at most. We suggest to try "Verify Face To Face" when you only have 2 candidate faces.
   *   * The 'recognitionModel' associated with the query faces' faceIds should be the same.
   */
  group(
    faceIds: string[],
    options: GroupOptionalParams = { requestOptions: {} },
  ): Promise<FaceGroupingResult> {
    return group(this._client, faceIds, options);
  }
}
