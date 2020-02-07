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
import { transformMappers } from "./mapperTransforms";
import { transformOperationGroups } from "./operationTransforms";
import { transformOptions } from "./optionsTransforms";
import { transformParameters } from "./parameterTransforms";
import { transformObjects, transformObject } from "./objectTransforms";
import { ObjectDetails } from "../models/modelDetails";
import { Host } from "@azure-tools/autorest-extension-base";
import { transformBaseUrl } from "./urlTransforms";
import { KnownMediaType } from "@azure-tools/codegen";
import { OperationGroupDetails } from "../models/operationDetails";

export async function transformChoices(codeModel: CodeModel) {
  const choices = [
    ...(codeModel.schemas.choices || []),
    ...(codeModel.schemas.sealedChoices || [])
  ];

  return choices.map(transformChoice);
}

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
      getStringForValue(c.value, choice.choiceType.type)
    )
  };
}

export async function transformCodeModel(
  codeModel: CodeModel,
  host: Host
): Promise<ClientDetails> {
  const className = normalizeName(codeModel.info.title, NameType.Class);

  const [uberParents, operationGroups] = await Promise.all([
    getUberParents(codeModel),

    transformOperationGroups(codeModel)
  ]);

  const options = await transformOptions(host, operationGroups);

  const [objects, mappers, unions, parameters, baseUrl] = await Promise.all([
    transformObjects(codeModel, uberParents),
    transformMappers(codeModel, options),
    transformChoices(codeModel),
    transformParameters(codeModel, options),
    transformBaseUrl(codeModel)
  ]);

  return {
    name: codeModel.info.title,
    className,
    description: codeModel.info.description,
    sourceFileName: normalizeName(className, NameType.File),
    objects,
    mappers,
    unions,
    operationGroups,
    parameters,
    options,
    baseUrl
  };
}

/**
 * This function gets all top level objects with children, aka UberParents
 * @param codeModel CodeModel
 */
async function getUberParents(codeModel: CodeModel): Promise<ObjectDetails[]> {
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
