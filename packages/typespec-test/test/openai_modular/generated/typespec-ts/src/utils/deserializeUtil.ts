// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

function deserializeUnion(obj: undefined): undefined {
  if (isImageGenerations(obj)) {
    return deserializeImageGenerations(obj);
  }
  if (is(obj)) {
    return deserialize(obj);
  }
  return obj;
}
function deserializeImageLocationAndImagePayloadUnion(
  obj: ImageLocation[] | ImagePayload[]
): ImageLocation[] | ImagePayload[] {
  if (isImageGenerations(obj)) {
    return deserializeImageGenerations(obj);
  }
  if (is(obj)) {
    return deserialize(obj);
  }
  return obj;
}
