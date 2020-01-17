// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ClientDetails } from "../models/clientDetails";
import { UnionDetails } from "../models/unionDetails";

import {
  CodeModel,
  ChoiceSchema,
  SealedChoiceSchema
} from "@azure-tools/codemodel";
import {
  normalizeName,
  NameType,
  guardReservedNames
} from "../utils/nameUtils";
import { getStringForValue } from "../utils/valueHelpers";
import { getLanguageMetadata } from "../utils/languageHelpers";
import { transformMapper } from "./mapperTransforms";
import { transformOperationGroup } from "./operationTransforms";
import { transformParameters } from "./parameterTransforms";
import { transformObjects, transformObject } from "./objectTransforms";
import { ObjectDetails } from "../models/modelDetails";

export function transformChoice(
  choice: ChoiceSchema | SealedChoiceSchema
): UnionDetails {
  const metadata = getLanguageMetadata(choice.language);
  let name = guardReservedNames(metadata.name);

  return {
    name,
    description: `Defines values for ${metadata.name}.`,
    serializedName: metadata.name,
    values: choice.choices.map(c =>
      getStringForValue(c.value, choice.choiceType)
    )
  };
}

export function transformCodeModel(codeModel: CodeModel): ClientDetails {
  const className = normalizeName(codeModel.info.title, NameType.Class);
  const uberParents = getUberParents(codeModel);
  return {
    name: codeModel.info.title,
    className,
    description: codeModel.info.description,
    sourceFileName: normalizeName(className, NameType.File),
    objects: transformObjects(codeModel, uberParents),
    mappers: (codeModel.schemas.objects || []).map(schema =>
      transformMapper({ schema })
    ),
    unions: [
      ...(codeModel.schemas.choices || []),
      ...(codeModel.schemas.sealedChoices || [])
    ].map(transformChoice),
    operationGroups: codeModel.operationGroups.map(transformOperationGroup),
    parameters: transformParameters(codeModel)
  };
}

/**
 * This function gets all top level objects with children, aka UberParents
 * @param codeModel CodeModel
 */
function getUberParents(codeModel: CodeModel): ObjectDetails[] {
  if (!codeModel.schemas.objects) {
    return [];
  }

  let uberParents: ObjectDetails[] = [];

  codeModel.schemas.objects.forEach(object => {
    const name = getLanguageMetadata(object.language).name;
    const isPresent = uberParents.some(up => up.name === name);
    const hasChildren = object.children && object.children.all.length;
    const hasParents = object.parents && object.parents.all.length;

    if (hasChildren && !hasParents && !isPresent) {
      const baseObject = transformObject(object, uberParents);
      uberParents.push(baseObject);
    }
  });

  return uberParents;
}
