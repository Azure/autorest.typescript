import {
  SdkHeaderParameter,
  isSdkFloatKind,
  isSdkIntKind
} from "@azure-tools/typespec-client-generator-core";
import { SerializeTypeOptions } from "./serializers.js";
import { SerializerOutput } from "./util.js";

export function headerSerializer({
  type,
  valueExpr
}: SerializeTypeOptions<
  SdkHeaderParameter & {
    kind: "header";
  }
>): SerializerOutput {
  if (type.type.kind === "string") {
    return `${valueExpr}`;
  }

  if (isSdkFloatKind(type.type.kind) || isSdkIntKind(type.type.kind)) {
    return `String(${valueExpr})`;
  }

  if (type.type.kind === "boolean") {
    return `String(${valueExpr})`;
  }

  console.log(type.type.kind);

  return "NYI";
}
