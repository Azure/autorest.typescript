// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ImageLocationOutput, ImagePayloadOutput } from "../rest/index.js";
import { ImageLocation, ImagePayload } from "../models/models.js";

function isImagePayloadArray(
  obj: ImageLocationOutput[] | ImagePayloadOutput[]
): obj is ImagePayloadOutput[] {
  if (obj.length > 0) {
    return (obj as ImagePayloadOutput[])[0].b64_json !== undefined;
  }
  return false;
}
function deserializeImagePayloadArray(
  obj: ImagePayloadOutput[]
): ImagePayload[] {
  return (obj || []).map((item) => {
    return { base64Data: item["b64_json"] };
  });
}
export function deserializeImageLocationArrayAndImagePayloadArrayUnion(
  obj: ImageLocationOutput[] | ImagePayloadOutput[]
): ImageLocation[] | ImagePayload[] {
  if (isImagePayloadArray(obj)) {
    return deserializeImagePayloadArray(obj);
  }
  return obj;
}
