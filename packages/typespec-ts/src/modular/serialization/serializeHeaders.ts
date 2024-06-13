import { SdkHeaderParameter } from "@azure-tools/typespec-client-generator-core";
import {
  SerializeTypeOptions,
  serializeArray,
  serializeType
} from "./serializers.js";
import { SerializerOutput } from "./util.js";
import { getCollectionSeparator } from "./collectionUtils.js";

export function serializeHeader(
  options: SerializeTypeOptions<
    SdkHeaderParameter & {
      kind: "header";
    }
  >
): SerializerOutput {
  const { type } = options;

  if (type.type.kind === "array") {
    const serializedArray = serializeArray({ ...options, type: type.type });
    const separator = JSON.stringify(
      getCollectionSeparator(type.collectionFormat)
    );
    return `${serializedArray}.join(${separator})`;
  }

  return serializeType({ ...options, type: type.type });
}
