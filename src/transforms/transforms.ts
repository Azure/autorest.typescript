// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ClientDetails } from "../models/clientDetails";
import { UnionDetails, UnionElement } from "../models/unionDetails";

import {
  CodeModel,
  ChoiceSchema,
  SealedChoiceSchema,
  SchemaType,
  OAuth2SecurityScheme,
  KeySecurityScheme
} from "@autorest/codemodel";
import { normalizeName, NameType } from "../utils/nameUtils";
import { getStringForValue } from "../utils/valueHelpers";
import { getLanguageMetadata } from "../utils/languageHelpers";
import { transformMappers } from "./mapperTransforms";
import { transformOperationGroups } from "./operationTransforms";
import { transformOptions } from "./optionsTransforms";
import { transformParameters } from "./parameterTransforms";
import { transformObjects, transformObject } from "./objectTransforms";
import { ObjectDetails } from "../models/modelDetails";
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

function extractProperties(
  choice: ChoiceSchema | SealedChoiceSchema
): UnionElement[] {
  return choice.choices.map(c => {
    const metadata = getLanguageMetadata(c.language);
    return {
      name: metadata.name,
      value: getStringForValue(
        c.value,
        choice?.choiceType?.type ?? SchemaType.String,
        false
      ),
      description: metadata.description
    };
  });
}

export function transformChoice(
  choice: ChoiceSchema | SealedChoiceSchema
): UnionDetails {
  const metadata = getLanguageMetadata(choice.language);
  let name = normalizeName(metadata.name, NameType.Interface);
  let schemaType = choice.type;
  let itemType =
    //@ts-ignore
    choice.choiceType.type === SchemaType.Integer ||
    //@ts-ignore
    choice.choiceType.type === SchemaType.Number
      ? SchemaType.Number
      : choice.choiceType.type;

  return {
    name,
    schemaType,
    itemType,
    description: `Defines values for ${normalizeName(
      metadata.name,
      NameType.Interface
    )}.`,
    serializedName: metadata.name,
    properties: extractProperties(choice)
  };
}

export async function transformCodeModel(
  codeModel: CodeModel
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

  const options = await transformOptions(operationGroups);

  const [objects, groups, parameters, mappers, unions] = await Promise.all([
    transformObjects(codeModel, uberParents),
    transformGroups(codeModel),
    transformParameters(codeModel, options),
    transformMappers(codeModel, uberParents, options),
    transformChoices(codeModel)
  ]);

  const baseUrl = transformBaseUrl(codeModel);

  return {
    name: className,
    className,
    info: codeModel.info,
    sourceFileName: normalizeName(className, NameType.File),
    objects: [...objects, ...groups],
    mappers,
    unions,
    operationGroups,
    parameters,
    options,
    endpoint: baseUrl,
    allTypes: [],
    security: codeModel.security
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
