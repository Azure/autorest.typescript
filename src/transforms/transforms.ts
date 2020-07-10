// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ClientDetails } from "../models/clientDetails";
import { UnionDetails } from "../models/unionDetails";

import {
  CodeModel,
  ChoiceSchema,
  SealedChoiceSchema,
  SchemaType
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
import { normalizeModelWithExtensions } from "./extensions";
import { transformGroups } from "./groupTransforms";
import { getSchemaParents } from "../utils/schemaHelpers";
import { sortObjectSchemasHierarchically } from "../utils/sortObjectSchemasHierarchically";

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
  let name = normalizeName(metadata.name, NameType.Interface);

  return {
    name,
    description: `Defines values for ${metadata.name}.`,
    serializedName: metadata.name,
    values: choice.choices.map(c =>
      getStringForValue(c.value, choice?.choiceType?.type ?? SchemaType.String)
    )
  };
}

export async function transformCodeModel(
  codeModel: CodeModel,
  host: Host
): Promise<ClientDetails> {
  const { name: clientName } = getLanguageMetadata(codeModel.language);
  const className = normalizeName(
    clientName,
    NameType.Class,
    true /** shouldGuard */
  );

  sortObjectSchemasHierarchically(codeModel);
  normalizeModelWithExtensions(codeModel);

  const [uberParents, operationGroups] = await Promise.all([
    getUberParents(codeModel),

    transformOperationGroups(codeModel)
  ]);

  const options = await transformOptions(host, operationGroups);

  const [
    objects,
    groups,
    mappers,
    unions,
    parameters,
    baseUrl
  ] = await Promise.all([
    transformObjects(codeModel, uberParents),
    transformGroups(codeModel),
    transformMappers(codeModel, uberParents, options),
    transformChoices(codeModel),
    transformParameters(codeModel, options),
    transformBaseUrl(codeModel)
  ]);

  return {
    name: className,
    className,
    description: codeModel.info.description,
    sourceFileName: normalizeName(className, NameType.File),
    objects: [...objects, ...groups],
    mappers,
    unions,
    operationGroups,
    parameters,
    options,
    endpoint: baseUrl
  };
}

/**
 * This function gets all top level objects with children, aka UberParents
 * An UberParent is an object schema that has no parents but is extended
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
    const hasParents = getSchemaParents(object).length > 0;

    if (hasChildren && !hasParents && !isPresent) {
      const baseObject = transformObject(object, uberParents);
      uberParents.push(baseObject);
    }
  });

  return uberParents;
}
