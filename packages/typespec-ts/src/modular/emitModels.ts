import { Project, SourceFile } from "ts-morph";
import { getType } from "./helpers/typeHelpers.js";
import { ModularCodeModel } from "./modularCodeModel.js";

/**
 * This function creates the file containing all the models defined in TypeSpec
 */
export function buildModels(
  codeModel: ModularCodeModel,
  project: Project,
  srcPath: string = "src"
): SourceFile {
  const modelsFile = project.createSourceFile(`${srcPath}/src/api/models.ts`);

  // We are generating both models and enums here
  const models = codeModel.types.filter(
    (t) => t.type === "model" || t.type === "enum"
  );

  for (const model of codeModel.types) {
    if (model.type === "combined" && model.nullable) {
      for (const unionModel of model.types ?? []) {
        if (unionModel.type === "model") {
          models.push(unionModel);
        }
      }
    }
  }

  for (const model of models) {
    const properties = model.properties ?? [];
    const typeMetadata = getType(model);
    let typeName = typeMetadata.name;
    if (typeMetadata.modifier === "Array") {
      typeName = `${typeName}[]`;
    }
    if (model.type === "enum") {
      if (modelsFile.getTypeAlias(model.name!)) {
        // If the enum is already defined, we don't need to do anything
        continue;
      }
      modelsFile.addTypeAlias({
        name: model.name!,
        isExported: true,
        docs: [
          model.description ?? "",
          // If it is a fixed enum we don't need to list the known values in the docs as the
          // output will be a literal union which is self documenting
          model.isFixed
            ? ""
            : // When we generate an "extensible" enum, the type will be "string" so we list the known values
              // in the docs for user reference.
              (model.values ?? []).map((v) => `"${v.value}"`).join(", ")
        ],
        type: model.isFixed
          ? (model.values ?? []).map((v) => `"${v.value}"`).join(" | ")
          : "string"
      });
    } else {
      if (!model.name) {
        throw new Error("Can't generate a model that has no name");
      }
      modelsFile.addInterface({
        name: model.name,
        isExported: true,
        docs: [model.description ?? ""],
        properties: properties.map((p) => {
          const propertyMetadata = getType(p.type);
          let propertyTypeName = propertyMetadata.name;
          if (propertyMetadata.modifier === "Array") {
            propertyTypeName = `${propertyTypeName}[]`;
          }
          return {
            name: `"${p.clientName}"`,
            docs: [p.description],
            hasQuestionToken: p.optional,
            isReadonly: p.readonly,
            type: propertyTypeName
          };
        })
      });
    }
  }

  return modelsFile;
}
