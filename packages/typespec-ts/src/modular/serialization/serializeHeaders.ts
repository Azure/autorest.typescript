import { SdkHeaderParameter } from "@azure-tools/typespec-client-generator-core";
import { isNumericTypeKind } from "../helpers/typeHelpers.js";
import { getCollectionSeparator } from "./collectionUtils.js";
import { serializeArray } from "./serializeArray.js";
import { serializeType, SerializeTypeOptions } from "./serializers.js";
import { SerializerOutput } from "./util.js";

export function serializeHeader(
  options: SerializeTypeOptions<
    SdkHeaderParameter & {
      kind: "header";
    }
  >
): SerializerOutput {
  const { type, functionType, valueExpr } = options;

  // We need to handle arrays differently than other types.
  // For headers arrays are serialized as a single string with a separator.
  if (type.type.kind === "array") {
    const separator = JSON.stringify(
      getCollectionSeparator(type.collectionFormat)
    );

    if (functionType === "serialize") {
      // Serialization
      // Here we need to turn an array into a string with a separator.
      // We can use the serializeArray function to do this.
      const serializedArray = serializeArray({
        ...options,
        type: type.type
      });

      // Now that we have serialized the array, we can join the elements with the separator.
      return `${serializedArray}.join(${separator})`;
    } else {
      // Deserialization
      // Here we have a string that we need to split into an array.
      const array = `${valueExpr}.split(${separator})`;

      // No need to parse if the elements ar strings
      if (type.type.valueType.kind === "string") {
        return array;
      }

      if (
        isNumericTypeKind(type.type.valueType.kind) ||
        type.type.valueType.kind === "boolean"
      ) {
        return `${array}.map(e => JSON.parse(e))`;
      }

      return `${array}.map(e => ${serializeType({
        ...options,
        type: type.type.valueType,
        valueExpr: "e"
      })})`;
    }
  }

  return serializeType({ ...options, type: type.type });
}
