import { OptionalKind, ParameterDeclarationStructure } from "ts-morph";
import { Client } from "../modularCodeModel.js";
import { getParameterType } from "./parameterHelpers.js";

export function getClientParameters(
  client: Client
): OptionalKind<ParameterDeclarationStructure>[] {
  const { name, parameters } = client;
  const optionsParam = {
    name: "options",
    type: `${name}ClientOptions`,
    initializer: "{}"
  };

  const params: OptionalKind<ParameterDeclarationStructure>[] = [
    ...parameters
      .filter(
        (p) =>
          p.type.type !== "constant" &&
          (p.clientDefaultValue === null || p.clientDefaultValue === undefined)
      )
      .map<OptionalKind<ParameterDeclarationStructure>>((p) => {
        return {
          name: p.clientName,
          type: getParameterType(p)
        };
      }),
    optionsParam
  ];

  return params;
}
