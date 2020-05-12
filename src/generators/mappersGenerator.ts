// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ClientDetails } from "../models/clientDetails";
import {
  Project,
  VariableDeclarationKind,
  CodeBlockWriter,
  SourceFile
} from "ts-morph";
import { NameType, normalizeName } from "../utils/nameUtils";
import {
  MapperType,
  Mapper,
  CompositeMapper,
  CompositeMapperType,
  PolymorphicDiscriminator,
  MapperConstraints
} from "@azure/core-http";
import { ModelProperties } from "../transforms/mapperTransforms";
import { keys, isEmpty, isString, isNil, isEqual } from "lodash";
import { getStringForValue } from "../utils/valueHelpers";
import { PolymorphicObjectDetails, ObjectKind } from "../models/modelDetails";
import { logger } from "../utils/logger";

export function generateMappers(
  clientDetails: ClientDetails,
  project: Project
) {
  if (!clientDetails.mappers.length) {
    logger.info("No mappers in code model, skipping mapper file generation");
    return;
  }
  const mappersFile = project.createSourceFile(
    `${clientDetails.srcPath}/models/mappers.ts`,
    undefined,
    { overwrite: true }
  );

  writeMappers(mappersFile, clientDetails);
  writeDiscriminatorsMapping(mappersFile, clientDetails);

  mappersFile.addImportDeclaration({
    namespaceImport: "coreHttp",
    moduleSpecifier: "@azure/core-http"
  });
}

/**
 * This function writes to the mappers.ts file all the mappers to be used by @azure/core-http for serialization
 */
function writeMappers(sourceFile: SourceFile, { mappers }: ClientDetails) {
  const generatedMappers: Map<string, Mapper> = new Map<string, Mapper>();

  mappers.forEach(mapper => {
    const mapperClassName = (mapper as CompositeMapper).type.className;
    if (!mapperClassName) {
      logger.warning(`Expected a mapper with a className, skipping generation`);
      logger.verbose(JSON.stringify(mapper));
      return;
    }

    const existingMapper = generatedMappers.get(mapperClassName);

    if (existingMapper) {
      if (isEqual(existingMapper, mapper)) {
        // If we already generated the same mapper, skip
        return;
      }

      throw new Error(
        "There are different mapper definitions with the same name. This may be caused by a Swagger defining multiple Success responses with different return types"
      );
    }

    sourceFile.addVariableStatement({
      isExported: true,
      declarations: [
        {
          name: normalizeName(
            (mapper as CompositeMapper).type.className || "MISSING_MAPPER",
            NameType.Class
          ),
          type: "coreHttp.CompositeMapper",
          initializer: writer => writeMapper(writer, mapper)
        }
      ],
      declarationKind: VariableDeclarationKind.Const,
      leadingTrivia: writer => writer.blankLine()
    });

    // Keep track of the mapper we just generated
    generatedMappers.set(mapperClassName, mapper);
  });
}

function getAllPolymorphicObjects({
  objects
}: ClientDetails): PolymorphicObjectDetails[] {
  return objects
    .filter(object => object.kind === ObjectKind.Polymorphic)
    .map(object => object as PolymorphicObjectDetails);
}

/**
 * This function generates a mapping which is used by @azure/core-http for serializing
 * polymorphic objects. This is a mapping tells core-http which mapper to use, given a
 * discriminator value.
 */
function writeDiscriminatorsMapping(
  sourceFile: SourceFile,
  clientDetails: ClientDetails
) {
  let discriminatorMappers: { [discriminator: string]: string } = {};

  // Populate discriminatorMappers
  getAllPolymorphicObjects(clientDetails).forEach(object => {
    const { name: mapperName, discriminatorPath } = object;
    discriminatorMappers[discriminatorPath] = mapperName;
  });

  if (!isEmpty(discriminatorMappers)) {
    sourceFile.addVariableStatement({
      isExported: true,
      declarations: [
        {
          name: "discriminators",
          initializer: writer => {
            writer.block(() => {
              keys(discriminatorMappers).forEach(key => {
                writer.write(`'${key}': ${discriminatorMappers[key]},`);
              });
            });
          }
        }
      ],
      leadingTrivia: writer => writer.blankLine()
    });
  }
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
  const { type, defaultValue, constraints, ...restMapper } = mapper;
  const {
    modelProperties,
    polymorphicDiscriminator,
    ...restType
  } = type as CompositeMapperType;
  writer.block(() => {
    // we need to handle default value differently, since some types need to be
    // converted, such as ByteAttay, hence extracting it from the props
    writeDefaultValue(writer, defaultValue, restType);
    // Write mapper constraints
    writeMapperContraints(writer, constraints);
    // Writing the rest of the props
    writeObjectProps(restMapper, writer)
      .write("type:")
      .block(() => {
        // Write all type properties that don't need special handling
        writeObjectProps(restType, writer);
        // Write type properties that need special handling
        writePolymorphicDiscriminator(writer, polymorphicDiscriminator);
        writeModelProperties(writer, parents, modelProperties);
      });
  });
}

function writeMapperContraints(
  writer: CodeBlockWriter,
  constraints?: MapperConstraints
) {
  if (!constraints) {
    return writer;
  }

  const { Pattern, ...restContstraints } = constraints;
  return writer
    .write("constraints:")
    .block(() => {
      if (Pattern) {
        writer.write(`Pattern: new RegExp("${Pattern.source}"), `);
      }

      writeObjectProps(restContstraints, writer);
    })
    .write(",");
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
    // Write all sub-mappers
    if (modelProperties) {
      keys(modelProperties).forEach(key => {
        writer.write(`"${key}":`);
        writeMapper(writer, modelProperties[key]);
        writer.write(",");
      });
    }
  });
}

function writePolymorphicDiscriminator(
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
    const { parentsRefs, ...modelProperties } = (compositeMapper.type
      .modelProperties || {}) as ModelProperties;
    parents = parentsRefs as string[];
    compositeMapper.type.modelProperties = modelProperties as {
      [propertyName: string]: Mapper;
    };
  }
  return parents;
}
