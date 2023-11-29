// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ImageLocationOutput, ImagePayloadOutput } from "../rest/index.js";
import { ImageLocation, ImagePayload } from "../models/models.js";

/** type predict function for ImagePayloadOutput array from ImageLocationOutput[] | ImagePayloadOutput[] */
function isImagePayloadArray(
  obj: ImageLocationOutput[] | ImagePayloadOutput[]
): obj is ImagePayloadOutput[] {
  if (Array.isArray(obj) && obj.length > 0) {
    return (obj as ImagePayloadOutput[])[0].b64_json !== undefined;
  }

  return false;
}

/** deserialize function for ImagePayload array */
function deserializeImagePayloadArray(
  obj: ImagePayloadOutput[]
): ImagePayload[] {
  return (obj || []).map((item) => {
    return { base64Data: item["b64_json"] };
  });
}

/** deserialize function for ImageLocationOutput[] | ImagePayloadOutput[] */
export function deserializeImageLocationArrayAndImagePayloadArrayUnion(
  obj: ImageLocationOutput[] | ImagePayloadOutput[]
): ImageLocation[] | ImagePayload[] {
  if (isImagePayloadArray(obj)) {
    return deserializeImagePayloadArray(obj);
  }
  return obj;
}
