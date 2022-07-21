import {
  MethodSignatureStructure,
  OptionalKind,
  ParameterDeclarationStructure
} from "ts-morph";
import { Methods, PathParameter } from "../interfaces";

export function buildMethodDefinitions(
  methods: Methods,
  pathParams: PathParameter[] = []
): OptionalKind<MethodSignatureStructure>[] {
  const methodDefinitions: OptionalKind<MethodSignatureStructure>[] = [];
  for (const key of Object.keys(methods)) {
    const method = methods[key];
    const description = methods[key][0].description;

    let areAllOptional = methods[key][0].hasOptionalOptions;

    methodDefinitions.push({
      name: key,
      ...(description && { docs: [{ description }] }),
      parameters: [
        ...getPathParamDefinitions(pathParams),
        {
          name: "options",
          hasQuestionToken: areAllOptional,
          type: method.map(m => m.optionsName).join(" | ")
        }
      ],
      returnType: method.map(m => m.returnType).join(" | ")
    });
  }

  return methodDefinitions;
}

export function getPathParamDefinitions(
  pathParams: PathParameter[]
): OptionalKind<ParameterDeclarationStructure>[] {
  return pathParams.map(({ name, type, description }) => {
    return {
      name,
      type,
      description
    };
  });
}
