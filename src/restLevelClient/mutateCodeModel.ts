import { CodeModel, Operation, Parameter, Schema } from "@autorest/codemodel";
import { getLanguageMetadata } from "../utils/languageHelpers";

/**
 * In order to avoid common calculations, we can use the language specific fields
 * to store commonly calculated information
 */
export function performCodeModelMutations(model: CodeModel) {
  setOperationName(model);
  escapeDescriptionOnAllSchemas(model);
}

/**
 * Sets the operation name appending the operationGroup name if there are more than one OperationGroups
 */
function setOperationName(model: CodeModel) {
  model.operationGroups.forEach(og =>
    og.operations.forEach(o => {
      const operationName = getLanguageMetadata(o.language).name;
      if (!o.language.typescript) {
        o.language.typescript = { ...o.language.default };
      }
      // No need to append operation group name if there is only a single OperationGroup
      if (model.operationGroups.length > 1) {
        o.language.typescript.name = `${
          getLanguageMetadata(og.language).name
        }${operationName}`;
      }
    })
  );
}

/**
 * Escapes the description according to azure-sdks-for-js repo lint rules to make sure
 * TSDoc strings are renderd correctly
 */
function escapeDescription(schema: Schema | Operation | Parameter) {
  if (!schema.language.typescript) {
    schema.language.typescript = { ...schema.language.default };
  }

  schema.language.default.description = schema.language.default.description.replace(
    /@/g,
    "\\@"
  );
  schema.language.default.description = schema.language.default.description.replace(
    /{/g,
    "\\{"
  );
  schema.language.default.description = schema.language.default.description.replace(
    /}/g,
    "\\}"
  );
}

/**
 * Apply description escaping to all Schemas
 */
function escapeDescriptionOnAllSchemas(model: CodeModel) {
  model.schemas.objects?.forEach(escapeDescription);
  model.schemas.choices?.forEach(escapeDescription);
  model.schemas.sealedChoices?.forEach(escapeDescription);

  model.operationGroups.forEach(og => {
    og.operations.forEach(o => {
      escapeDescription(o);
      o.signatureParameters?.forEach(escapeDescription);
    });
  });
}
