import {
  ChoiceSchema,
  ChoiceValue,
  SchemaType,
  SealedChoiceSchema,
} from "@autorest/codemodel";
import { CadlChoiceValue, CadlEnum } from "../interfaces";
import { transformValue } from "../utils/values";

export function transformEnum(
  schema: SealedChoiceSchema | ChoiceSchema
): CadlEnum {
  return {
    name: schema.language.default.name,
    members: schema.choices.map((choice) => transformChoiceMember(choice)),
    isExtensible: !isSealedChoiceSchema(schema),
  };
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
