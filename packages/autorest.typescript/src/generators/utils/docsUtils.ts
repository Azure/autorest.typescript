import { OptionalKind, ParameterDeclarationStructure } from "ts-morph";
import { formatJsDocParam } from "./parameterUtils";
import { wrapString } from "./stringUtils";

export type ParameterWithDescription = OptionalKind<
  ParameterDeclarationStructure & {
    description: string;
  }
>;

export function generateOperationJSDoc(
  params: ParameterWithDescription[] = [],
  description: string = ""
): string {
  const paramJSDoc =
    !params || !params.length ? "" : formatJsDocParam(params).join("\n");

  return `${
    description ? wrapString(description) + "\n" : description
  }${paramJSDoc}`;
}
