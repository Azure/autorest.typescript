import { OptionalKind, ParameterDeclarationStructure } from "ts-morph";
import { Client } from "../modularCodeModel.js";
import { getParameterType } from "./parameterHelpers.js";

export function getClientParameters(
  client: Client
): OptionalKind<ParameterDeclarationStructure>[] {
  const { name, parameters } = client;
  let optionsParam = {
    name: "options",
    type: `${name}Options`,
    initializer: "{}"
  };
  if (
    !client.parameters
      .filter((p) => p.implementation === "Client" && !p.isApiVersion)
      .some((p) => p.optional || (!p.optional && p.clientDefaultValue))
  ) {
    optionsParam = {
      name: "options",
      type: `ClientOptions`,
      initializer: "{}"
    };
  }
  const params: OptionalKind<ParameterDeclarationStructure>[] = [
    ...parameters
      .filter((p) => p.type.type !== "constant")
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
