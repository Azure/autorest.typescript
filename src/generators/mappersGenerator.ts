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
    `${clientDetails.srcPath}/mappers/index.ts`,
    undefined,
    { overwrite: true }
  );

  writeMappers(mappersFile, clientDetails, project);
  writeDiscriminatorsMapping(project, mappersFile, clientDetails);
}

/**
 * This function writes to the mappers.ts file all the mappers to be used by @azure/core-http for serialization
 */
function writeMappers(
  sourceFile: SourceFile,
  { mappers, srcPath }: ClientDetails,
  project: Project
) {
  const generatedMappers: Map<string, Mapper> = new Map<string, Mapper>();

  mappers.forEach(mapper => {
    const compositeMapper = mapper as CompositeMapper;
    const mapperClassName = compositeMapper.type.className;
    if (!mapperClassName) {
      logger.warning(`Expected a mapper with a className, skipping generation`);
      logger.verbose(JSON.stringify(mapper));
      return;
    }

    const fileName = normalizeName(mapperClassName, NameType.File);
    const mapperFile = project.createSourceFile(
      `${srcPath}/mappers/${fileName}.ts`,
      undefined,
      { overwrite: true }
    );

    const existingMapper = generatedMappers.get(mapperClassName);

    if (existingMapper) {
      if (isEqual(existingMapper, compositeMapper)) {
        // If we already generated the same mapper, skip
        return;
      }

      throw new Error(
        "There are different mapper definitions with the same name. This may be caused by a Swagger defining multiple Success responses with different return types"
      );
    }

    writeMapperImports(compositeMapper, mapperClassName, mapperFile);

    mapperFile.addVariableStatement({
      isExported: true,
      declarations: [
        {
          name: normalizeName(
            (mapper as CompositeMapper).type.className || "MISSING_MAPPER",
            NameType.Class
          ),
          type: "CompositeMapper",
          initializer: writer => writeMapper(writer, mapper)
        }
      ],
      declarationKind: VariableDeclarationKind.Const,
      leadingTrivia: writer => writer.blankLine()
    });

    sourceFile.addExportDeclaration({
      namedExports: [mapperClassName],
      moduleSpecifier: `./${fileName}`
    });

    // Keep track of the mapper we just generated
    generatedMappers.set(mapperClassName, mapper);
  });
}

/**
 * Write the necessary imports to build the mapper, these include any referenced mappers
 * and dependencies such as core-http
 */
function writeMapperImports(
  mapper: CompositeMapper,
  mapperClassName: string,
  mapperFile: SourceFile
) {
  let uberParent: string[] = [];

  if (mapper.type.uberParent && mapper.type.uberParent !== mapperClassName) {
    uberParent = [mapper.type.uberParent];
  }

  const parents = extractParents(mapper) || [];

  const importedParents =
    [...new Set<string>([...parents, ...uberParent])] || [];

  mapperFile.addImportDeclarations(
    importedParents.map(parent => {
      const fileName = normalizeName(parent, NameType.File);
      return {
        namedImports: [parent],
        moduleSpecifier: `./${fileName}`
      };
    })
  );

  mapperFile.addImportDeclaration({
    namedImports: ["CompositeMapper"],
    moduleSpecifier: "@azure/core-http"
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
  project: Project,
  mappersIndex: SourceFile,
  clientDetails: ClientDetails
) {
  let discriminatorMappers: { [discriminator: string]: string } = {};

  // Populate discriminatorMappers
  getAllPolymorphicObjects(clientDetails).forEach(object => {
    const { name: mapperName, discriminatorPath } = object;
    discriminatorMappers[discriminatorPath] = mapperName;
  });

  if (!isEmpty(discriminatorMappers)) {
    // Create a new discriminators file
    const discriminatorsFile = project.createSourceFile(
      `${clientDetails.srcPath}/mappers/discriminators.ts`,
      undefined,
      { overwrite: true }
    );

    discriminatorsFile.addVariableStatement({
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

    writeDiscriminatorsImports(discriminatorMappers, discriminatorsFile);

    // Export the discriminators map
    mappersIndex.addExportDeclaration({
      namedExports: ["discriminators"],
      moduleSpecifier: `./discriminators`
    });
  }
}

/**
 * Writes all the imports needed by the discriminators map,
 * these imports include the required mappers
 */
function writeDiscriminatorsImports(
  discriminatorMappers: { [discriminator: string]: string },
  discriminatorsFile: SourceFile
) {
  // Import all mappers necessary to build the discriminators map
  Object.keys(discriminatorMappers).forEach(key => {
    const mapper = discriminatorMappers[key];
    const mapperFileName = normalizeName(mapper, NameType.File);
    discriminatorsFile.addImportDeclaration({
      namedImports: [mapper],
      moduleSpecifier: `./${mapperFileName}`
    });
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
        if (key === "parentsRefs") {
          // Don't add parentsRefs, this is handled by writeParentMappers
          return;
        }
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
  let parents: string[] = [];
  if (mapper.type.name === MapperType.Composite) {
    const compositeMapper = mapper as CompositeMapper;
    const { parentsRefs } = (compositeMapper.type.modelProperties ||
      {}) as ModelProperties;
    parents = parentsRefs as string[];
  }
  return parents;
}
