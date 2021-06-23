import { CodeModel } from "@autorest/codemodel";
import { Project } from "ts-morph";
import {
  buildObjectInterfaces,
  buildPolymorphicAliases
} from "./generateObjectTypes";

/**
 * Generates types to represent schema definitions in the swagger
 */
export function generateSchemaTypes(model: CodeModel, project: Project) {
  // Track models that need to be imported
  const importedModels = new Set<string>();
  const modelsFile = project.createSourceFile(`src/models.ts`, undefined, {
    overwrite: true
  });

  const objectsDefinitions = buildObjectInterfaces(model, importedModels);
  const objectTypeAliases = buildPolymorphicAliases(model);
  modelsFile.addInterfaces(objectsDefinitions);
  modelsFile.addTypeAliases(objectTypeAliases);
}
