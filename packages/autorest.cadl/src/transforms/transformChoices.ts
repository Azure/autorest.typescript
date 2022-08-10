import {
  ChoiceSchema,
  SchemaType,
  SealedChoiceSchema,
} from "@autorest/codemodel";
import { CadlEnum } from "../interfaces";
import { transformValue } from "../utils/values";

export function transformEnum(
  schema: SealedChoiceSchema | ChoiceSchema
): CadlEnum {
  return {
    name: schema.language.default.name,
    members: schema.choices.map((choice) => transformValue(choice.value)),
    isExtensible: !isSealedChoiceSchema(schema),
  };
}

const isSealedChoiceSchema = (schema: any): schema is SealedChoiceSchema => {
  return schema.type === SchemaType.SealedChoice;
};
