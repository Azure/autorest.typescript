import "@typespec/http";
import "@typespec/openapi";

import "../common/errors.tsp";
import "./models.tsp";

using TypeSpec.Http;
using TypeSpec.OpenAPI;

namespace OpenAI;

@route("/images")
interface Images {
  @route("edits")
  @post
  @operationId("createImageEdit")
  @tag("OpenAI")
  @summary("Creates an edited or extended image given an original image and a prompt.")
  createEdit(
    @header contentType: "multipart/form-data",
    @multipartBody image: CreateImageEditRequest,
  ): ImagesResponse | ErrorResponse;

  @route("variations")
  @post
  @operationId("createImageVariation")
  @tag("OpenAI")
  @summary("Creates an edited or extended image given an original image and a prompt.")
  createVariation(
    @header contentType: "multipart/form-data",
    @multipartBody image: CreateImageVariationRequest,
  ): ImagesResponse | ErrorResponse;
}
