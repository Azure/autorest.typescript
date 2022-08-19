import {
  ChoiceSchema,
  ChoiceValue,
  CodeModel,
  SchemaType,
  SealedChoiceSchema,
} from "@autorest/codemodel";
import { getDataTypes } from "../dataTypes";
import { CadlChoiceValue, CadlEnum } from "../interfaces";
import { transformValue } from "../utils/values";

export function transformEnum(
  schema: SealedChoiceSchema | ChoiceSchema,
  codeModel: CodeModel
): CadlEnum {
  const dataTypes = getDataTypes(codeModel);

  let cadlEnum = dataTypes.get(schema) as CadlEnum;

  if (!cadlEnum) {
    cadlEnum = {
      doc: schema.language.default.documentation,
      kind: "enum",
      name: schema.language.default.name,
      members: schema.choices.map((choice) => transformChoiceMember(choice)),
      isExtensible: !isSealedChoiceSchema(schema),
    };
  }
  return cadlEnum;
}

function transformChoiceMember(member: ChoiceValue): CadlChoiceValue {
  return {
    name: member.language.default.name,
    value: transformValue(member.value),
  };
}

const isSealedChoiceSchema = (schema: any): schema is SealedChoiceSchema => {
  return schema.type === SchemaType.SealedChoice;
};
