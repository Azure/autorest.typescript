// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ClientDetails } from "../models/clientDetails";
import { Project, VariableDeclarationKind, CodeBlockWriter } from "ts-morph";
import { NameType, normalizeName } from "../utils/nameUtils";
import {
  MapperType,
  Mapper,
  CompositeMapper,
  CompositeMapperType
} from "@azure/core-http";
import { ModelProperties } from "../transforms/mapperTransforms";
import { keys, isEmpty, isString } from "lodash";

export function generateMappers(
  clientDetails: ClientDetails,
  project: Project
) {
  const mappersFile = project.createSourceFile(
    "src/models/mappers.ts",
    undefined,
    { overwrite: true }
  );

  mappersFile.addImportDeclaration({
    namespaceImport: "coreHttp",
    moduleSpecifier: "@azure/core-http"
  });

  let discriminators: { [key: string]: string } = {};

  for (const mapper of clientDetails.mappers) {
    if (mapper.type.name === MapperType.Composite && mapper.serializedName) {
      const compositeMapper = mapper as CompositeMapper;

      if (compositeMapper.type.polymorphicDiscriminator) {
        const { uberParent, className } = compositeMapper.type;
        if (!uberParent || !className) {
          throw new Error(
            `Expected CompositeMapper with polymorphicDiscriminator to specify uberParent property uberParent: ${uberParent} className: ${className}`
          );
        }

        if (uberParent === className) {
          discriminators[className] = className;
        } else {
          discriminators[`${uberParent}.${mapper.serializedName}`] = className;
        }
      }

      mappersFile.addVariableStatement({
        isExported: true,
        declarations: [
          {
            name: normalizeName(
              compositeMapper.type.className || "",
              NameType.Class
            ),
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

const writeMapper = (writer: CodeBlockWriter, mapper: Mapper) => {
  const parents = extractParents(mapper);
  const { type, ...restMapper } = mapper;
  const {
    modelProperties,
    polymorphicDiscriminator,
    ...restType
  } = type as CompositeMapperType;
  const isReferenceDicriminator = isString(polymorphicDiscriminator);
  writer.block(() => {
    writeObjectProps(restMapper, writer)
      .write("type:")
      .block(() => {
        writeObjectProps(restType, writer)
          .conditionalWrite(
            !!polymorphicDiscriminator,
            "polymorphicDiscriminator:"
          )
          .conditionalWrite(
            polymorphicDiscriminator && isReferenceDicriminator,
            `${polymorphicDiscriminator as any},`
          );
        !isReferenceDicriminator &&
          polymorphicDiscriminator &&
          writer
            .block(() => {
              writeObjectProps(polymorphicDiscriminator, writer);
            })
            .write(",");
        writer.write("modelProperties:").block(() => {
          writeParentMappers(parents, writer);
          writeObjectProps(modelProperties, writer);
        });
      });
  });
};

const writeParentMappers = (parents: string[], writer: CodeBlockWriter) => {
  (parents || []).forEach(parent => {
    writer.write(`...${parent}.type.modelProperties,`);
  });
};

const writeObjectProps = (obj: any, writer: CodeBlockWriter) => {
  let currentPos = writer;
  keys(obj).map(key => {
    currentPos = currentPos.writeLine(`${key}: ${JSON.stringify(obj[key])},`);
  });

  return currentPos;
};

const extractParents = (mapper: Mapper) => {
  // TODO: We may need to create a MapperDetails of some sort which containes
  // the mapper itself and a property with its parents for easier manipulation
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
};
