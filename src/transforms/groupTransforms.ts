import { CodeModel, GroupSchema, ObjectSchema } from "@autorest/codemodel";
import { getLanguageMetadata } from "../utils/languageHelpers";
import { ObjectDetails, ObjectKind } from "../models/modelDetails";
import { transformProperty } from "./objectTransforms";

export function transformGroups(codeModel: CodeModel) {
  codeModel.schemas.groups = codeModel.schemas.groups || [];
  return (codeModel.schemas.groups ?? []).map(group => transformGroup(group));
}

function transformGroup({ language, properties }: GroupSchema): ObjectDetails {
  const { name, description } = getLanguageMetadata(language);
  const groupProperties = (properties || []).map(prop =>
    transformProperty(prop)
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
