import {
  CodeModel,
  GroupSchema,
  GroupProperty,
  ObjectSchema
} from "@autorest/codemodel";
import { getLanguageMetadata } from "../utils/languageHelpers";
import { ObjectDetails, ObjectKind } from "../models/modelDetails";
import { transformProperty } from "./objectTransforms";
import { OptionsBag } from "../utils/optionsBag";

export function transformGroups(codeModel: CodeModel, optionsBag: OptionsBag) {
  codeModel.schemas.groups = codeModel.schemas.groups || [];
  return (codeModel.schemas.groups ?? []).map(group =>
    transformGroup(group, optionsBag)
  );
}

function transformGroup(
  { language, properties }: GroupSchema,
  optionsBag: OptionsBag
): ObjectDetails {
  const { name, description } = getLanguageMetadata(language);
  const groupProperties = (properties || []).map(prop =>
    transformProperty(prop, optionsBag)
  );

  return {
    children: [],
    parents: [],
    hasAdditionalProperties: false,
    kind: ObjectKind.Basic,
    name,
    // Groups are created by modelerfour so they don't have a serializedName
    serializedName: name,
    description: description || undefined,
    schema: new ObjectSchema(name, description),
    properties: groupProperties
  };
}
