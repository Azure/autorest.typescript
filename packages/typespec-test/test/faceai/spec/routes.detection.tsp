import "@typespec/http";
import "@typespec/rest";
import "@azure-tools/typespec-azure-core";
import "./models.common.tsp";
import "./models.detect.tsp";

using TypeSpec.Http;
using TypeSpec.Rest;
using Azure.Core;
using Azure.Core.Traits;
using Foundations;

namespace Face;

@summary("Detect human faces in an image, return face rectangles, and optionally with faceIds, landmarks, and attributes.")
@doc("""
> [!IMPORTANT]
> To mitigate potential misuse that can subject people to stereotyping, discrimination, or unfair denial of services, we are retiring Face API attributes that predict emotion, gender, age, smile, facial hair, hair, and makeup. Read more about this decision https://azure.microsoft.com/en-us/blog/responsible-ai-investments-and-safeguards-for-facial-recognition/.

*
  * No image will be stored. Only the extracted face feature(s) will be stored on server. The faceId is an identifier of the face feature and will be used in \"Identify\", \"Verify\", and \"Find Similar\". The stored face features will expire and be deleted at the time specified by faceIdTimeToLive after the original detection call.
  * Optional parameters include faceId, landmarks, and attributes. Attributes include headPose, glasses, occlusion, accessories, blur, exposure, noise, mask, and qualityForRecognition. Some of the results returned for specific attributes may not be highly accurate.
  * JPEG, PNG, GIF (the first frame), and BMP format are supported. The allowed image file size is from 1KB to 6MB.
  * The minimum detectable face size is 36x36 pixels in an image no larger than 1920x1080 pixels. Images with dimensions higher than 1920x1080 pixels will need a proportionally larger minimum face size.
  * Up to 100 faces can be returned for an image. Faces are ranked by face rectangle size from large to small.
  * For optimal results when querying \"Identify\", \"Verify\", and \"Find Similar\" ('returnFaceId' is true), please use faces that are: frontal, clear, and with a minimum size of 200x200 pixels (100 pixels between eyes).
  * Different 'detectionModel' values can be provided. To use and compare different detection models, please refer to https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/how-to/specify-detection-model
    * 'detection_02': Face attributes and landmarks are disabled if you choose this detection model.
    * 'detection_03': Face attributes (mask and headPose only) and landmarks are supported if you choose this detection model.
  * Different 'recognitionModel' values are provided. If follow-up operations like \"Verify\", \"Identify\", \"Find Similar\" are needed, please specify the recognition model with 'recognitionModel' parameter. The default value for 'recognitionModel' is 'recognition_01', if latest model needed, please explicitly specify the model you need in this parameter. Once specified, the detected faceIds will be associated with the specified recognition model. More details, please refer to https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/how-to/specify-recognition-model.
""")
@returnsDoc("A successful call returns an array of face entries ranked by face rectangle size in descending order. An empty response indicates no faces detected.")
@post
@sharedRoute
@route("detect")
op DetectOperation<T extends TypeSpec.Reflection.Model> is Azure.Core.RpcOperation<
  FaceDetectionOptions & T,
  Body<FaceDetectionResult[]>,
  ServiceTraits,
  FaceErrorResponse
>;

interface FaceDetectionOperations {
  detectFromUrl is DetectOperation<{
    @doc("The format of the HTTP payload.")
    @header
    contentType: "application/json";

    @doc("URL of input image.")
    url: url;
  }>;

  #suppress "@azure-tools/typespec-azure-core/byos" "It's an RPC call to detect face from an image, it doesn't store anything. There's a BYOS version of this call, but it's not this one."
  detect is DetectOperation<{
    @doc("The format of the HTTP payload.")
    @header
    contentType: "application/octet-stream";

    @doc("The input image binary.")
    @body
    imageContent: bytes;
  }>;
}