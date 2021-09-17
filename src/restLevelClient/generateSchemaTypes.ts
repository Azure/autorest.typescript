import { CodeModel, SchemaContext } from "@autorest/codemodel";
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

  const objectsDefinitions = buildObjectInterfaces(model, importedModels, [
    SchemaContext.Input
  ]);
  const objectTypeAliases = buildPolymorphicAliases(model, [
    SchemaContext.Input
  ]);

  if (objectTypeAliases.length || objectsDefinitions.length) {
    const inputModelsFile = project.createSourceFile(
      `src/models.ts`,
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
      `src/outputModels.ts`,
      undefined,
      {
        overwrite: true
      }
    );

    outputModelsFile.addInterfaces(outputObjectsDefinitions);
    outputModelsFile.addTypeAliases(outputObjectTypeAliases);
  }
}
