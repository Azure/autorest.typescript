import { ImageLocationOutput, ImagePayloadOutput } from '../rest/index.js';
import { ImageLocation, ImagePayload } from '../models/models.js';

function isImagePayloadArray(
  obj: ImageLocationOutput[] | ImagePayloadOutput[]
): obj is ImagePayloadOutput[] {
  if (obj.length > 0) {
    return (obj as ImagePayloadOutput[])[0].b64_json !== undefined;
  }
  return false;
}

function deserializeImagePayloadArray(data: ImagePayloadOutput[]): ImagePayload[] {
  return data.map((item) => {
    return {
      base64Data: item.b64_json,
    };
  });
}

export function deserializeImagePayloadAndImageLocationUnion(
  data: ImageLocationOutput[] | ImagePayloadOutput[]
): ImagePayload[] | ImageLocation[] {
  if (isImagePayloadArray(data)) {
    return deserializeImagePayloadArray(data);
  }
  return data;
}
