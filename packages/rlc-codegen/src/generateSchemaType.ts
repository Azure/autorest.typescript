// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import * as path from "path";
import {
  buildObjectInterfaces,
  buildPolymorphicAliases
} from "./generateObjectTypes.js";
import { RLCModel, SchemaContext } from "./interfaces.js";

/**
 * Generates types to represent schema definitions in the swagger
 */
export function generateSchemaTypes(model: RLCModel, project: Project) {
  const { srcPath } = model;
  let filePath = path.join(srcPath, `models.ts`);
  const inputModelFile = generateModelFiles(model, project, filePath, [
    SchemaContext.Input
  ]);
  filePath = path.join(srcPath, `outputModels.ts`);
  const outputModelFile = generateModelFiles(model, project, filePath, [
    SchemaContext.Output,
    SchemaContext.Exception
  ]);
  return { inputModelFile, outputModelFile };
}

export function generateModelFiles(
  model: RLCModel,
  project: Project,
  filePath: string,
  schemaContext: SchemaContext[]
) {
  // Track models that need to be imported
  const importedModels = new Set<string>();

  const objectsDefinitions = buildObjectInterfaces(
    model,
    importedModels,
    schemaContext
  );
  const objectTypeAliases = buildPolymorphicAliases(model, schemaContext);

  if (objectTypeAliases.length || objectsDefinitions.length) {
    const modelsFile = project.createSourceFile(filePath, undefined, {
      overwrite: true
    });

    modelsFile.addInterfaces(objectsDefinitions);
    modelsFile.addTypeAliases(objectTypeAliases);
    return { path: filePath, content: modelsFile.getFullText() };
  }
  return undefined;
}
