import { CodeModel, SchemaContext } from "@autorest/codemodel";
import { Project } from "ts-morph";
import * as path from 'path';
import {
  buildObjectInterfaces,
  buildPolymorphicAliases
} from "./generateObjectTypes";
import { getAutorestOptions } from "../autorestSession";

/**
 * Generates types to represent schema definitions in the swagger
 */
export function generateSchemaTypes(model: CodeModel, project: Project) {
  // Track models that need to be imported
  const importedModels = new Set<string>();

  const objectsDefinitions = buildObjectInterfaces(model, importedModels, [
    SchemaContext.Input
  ]);
  const objectTypeAliases = buildPolymorphicAliases(model, [
    SchemaContext.Input
  ]);
  const { srcPath } = getAutorestOptions();
  if (objectTypeAliases.length || objectsDefinitions.length) {
    const inputModelsFile = project.createSourceFile(
      path.join(srcPath, `models.ts`),
      undefined,
      {
        overwrite: true
      }
    );
    inputModelsFile.addInterfaces(objectsDefinitions);
    inputModelsFile.addTypeAliases(objectTypeAliases);
  }
  const outputObjectsDefinitions = buildObjectInterfaces(
    model,
    importedModels,
    [SchemaContext.Output, SchemaContext.Exception]
  );
  const outputObjectTypeAliases = buildPolymorphicAliases(model, [
    SchemaContext.Output,
    SchemaContext.Exception
  ]);

  if (outputObjectTypeAliases.length || outputObjectsDefinitions.length) {
    const outputModelsFile = project.createSourceFile(
      path.join(srcPath, `outputModels.ts`),
      undefined,
      {
        overwrite: true
      }
    );

    outputModelsFile.addInterfaces(outputObjectsDefinitions);
    outputModelsFile.addTypeAliases(outputObjectTypeAliases);
  }
}
