// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ClientDetails } from "../models/clientDetails";
import { Project, VariableDeclarationKind, CodeBlockWriter } from "ts-morph";
import { NameType, normalizeName } from "../utils/nameUtils";
import {
  MapperType,
  Mapper,
  CompositeMapper,
  CompositeMapperType,
  PolymorphicDiscriminator
} from "@azure/core-http";
import { ModelProperties } from "../transforms/mapperTransforms";
import { keys, isEmpty, isString, isNil } from "lodash";
import { getStringForValue } from "../utils/valueHelpers";

export function generateMappers(
  clientDetails: ClientDetails,
  project: Project
) {
  const mappersFile = project.createSourceFile(
    `${clientDetails.srcPath}/models/mappers.ts`,
    undefined,
    { overwrite: true }
  );

  mappersFile.addImportDeclaration({
    namespaceImport: "coreHttp",
    moduleSpecifier: "@azure/core-http"
  });

  /**
   * discriminator will be the name of the property that decides which schema definition validates the structure of the model
   * For more info: http://spec.openapis.org/oas/v3.0.2#composition-and-inheritance-polymorphism
   */
  let discriminators: { [key: string]: string } = {};

  for (const mapper of clientDetails.mappers) {
    const serializedName = mapper.serializedName;
    if (mapper.type.name === MapperType.Composite && serializedName) {
      const compositeMapper = mapper as CompositeMapper;

      if (!compositeMapper.type.className) {
        throw new Error("Composite mapper type does not have a class name");
      }

      if (compositeMapper.type.polymorphicDiscriminator) {
        const { uberParent, className } = compositeMapper.type;
        if (!uberParent || !className) {
          throw new Error(
            `Expected CompositeMapper with polymorphicDiscriminator to specify uberParent property (uberParent: ${uberParent}, className: ${className})`
          );
        }

        if (uberParent === className) {
          discriminators[serializedName] = className;
        } else {
          discriminators[`${uberParent}.${serializedName}`] = className;
        }
      }

      mappersFile.addVariableStatement({
        isExported: true,
        declarations: [
          {
            name: normalizeName(compositeMapper.type.className, NameType.Class),
            type: "coreHttp.CompositeMapper",
            initializer: writer => writeMapper(writer, mapper)
          }
        ],
        declarationKind: VariableDeclarationKind.Const,
        leadingTrivia: writer => writer.blankLine()
      });
    } else {
      throw new Error(
        `Don't know how to create a mapper for type ${mapper.type.name}`
      );
    }
  }

  !isEmpty(discriminators) &&
    mappersFile.addVariableStatement({
      isExported: true,
      declarations: [
        {
          name: "discriminators",
          initializer: writer => {
            writer.block(() => {
              keys(discriminators).forEach(key => {
                writer.write(`'${key}': ${discriminators[key]},`);
              });
            });
          }
        }
      ]
    });
}

type ModelPropertiesType =
  | {
      [propertyName: string]: Mapper;
    }
  | undefined;

export function writeMapper(writer: CodeBlockWriter, mapper: Mapper) {
  const parents = extractParents(mapper);

  // We want to handle modelProperties and polimorphicDiscriminator
  // so we extract them from the type object. The remaining of the type
  // object we'll just write all its properties as they are using writeObjectProps
  const { type, defaultValue, ...restMapper } = mapper;
  const {
    modelProperties,
    polymorphicDiscriminator,
    ...restType
  } = type as CompositeMapperType;
  writer.block(() => {
    // we need to handle default value differently, since some types need to be
    // converted, such as ByteAttay, hence extracting it from the props
    writeDefaultValue(writer, defaultValue, restType);
    // Writing the rest of the props
    writeObjectProps(restMapper, writer)
      .write("type:")
      .block(() => {
        // Write all type properties that don't need special handling
        writeObjectProps(restType, writer);
        // Write ptype roperties that need special handling
        writePolymorphicDiscrimitator(writer, polymorphicDiscriminator);
        writeModelProperties(writer, parents, modelProperties);
      });
  });
}

function writeModelProperties(
  writer: CodeBlockWriter,
  parents: string[] = [],
  modelProperties: ModelPropertiesType = {}
) {
  if (isEmpty(parents) && isEmpty(modelProperties)) {
    return writer;
  }

  return writer.write("modelProperties:").block(() => {
    // We'll first inherit from the parents and then write
    // its own mappers, it will look like this when generated
    // modelProperties: {
    //  ...Mappers.Parent,
    //  color: { type: { name: "String" }, serializedName: "color" }
    // }
    writeParentMappers(parents, writer);
    writeObjectProps(modelProperties, writer);
  });
}

function writePolymorphicDiscrimitator(
  writer: CodeBlockWriter,
  polymorphicDiscriminator?: PolymorphicDiscriminator
) {
  if (!polymorphicDiscriminator) {
    return writer;
  }

  // When the discriminator is a string, we know it is a reference.
  const isReferenceDicriminator = isString(polymorphicDiscriminator);

  writer.write("polymorphicDiscriminator:");

  if (isReferenceDicriminator) {
    // If the polymorphic discriminator is a reference, we just need to
    // to assign polymorphicDiscriminator to the string we got
    // example polymorphicDiscriminator: Mappers.SomeObject
    writer.write(`${polymorphicDiscriminator}`);
  } else {
    // Since the discriminator is not a reference, we need to inline it,
    // so we need to write its properties within a block  i.e. polymorphicDiscriminator: {...}
    writer.block(() => {
      writeObjectProps(polymorphicDiscriminator, writer);
    });
  }

  return writer.write(",");
}

function writeDefaultValue(
  writer: CodeBlockWriter,
  defaultValue: any,
  mapperType: MapperType
) {
  if (!isNil(defaultValue)) {
    return writer.write(
      `defaultValue: ${getStringForValue(defaultValue, mapperType.name)},`
    );
  }

  return writer;
}

function writeParentMappers(parents: string[], writer: CodeBlockWriter) {
  (parents || []).forEach(parent => {
    writer.write(`...${parent}.type.modelProperties,`);
  });
}

function writeObjectProps(obj: any, writer: CodeBlockWriter) {
  let currentPos = writer;
  keys(obj).forEach(key => {
    currentPos = currentPos.writeLine(`${key}: ${JSON.stringify(obj[key])},`);
  });

  return currentPos;
}

function extractParents(mapper: Mapper) {
  // TODO(#538): We may need to create a MapperDetails of some sort which contains
  // the mapper itself and property with its parents for easier manipulation
  // and avoid the side effect of this function mutating the mapper
  let parents: string[] = [];
  if (mapper.type.name === MapperType.Composite) {
    const compositeMapper = mapper as CompositeMapper;
    const { parentsRefs, ...modelProperties } = compositeMapper.type
      .modelProperties as ModelProperties;
    parents = parentsRefs as string[];
    compositeMapper.type.modelProperties = modelProperties as {
      [propertyName: string]: Mapper;
    };
  }
  return parents;
}
