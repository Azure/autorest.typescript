import { CodeModel } from "@autorest/codemodel";

/**
 * In order to avoid common calculations, we can use the language specific fields
 * to store commonly calculated information
 */
export function performCodeModelMutations(model: CodeModel) {
  setOperationName(model);
}

/**
 * Sets the operation name appending the operationGroup name if there are more than one OperationGroups
 */
function setOperationName(model: CodeModel) {
  model.operationGroups.forEach(og =>
    og.operations.forEach(o => {
      const operationName = o.language.default.name;
      if (!o.language.typescript) {
        o.language.typescript = o.language.default;
      }
      // No need to append operation group name if there is only a single OperationGroup
      if (model.operationGroups.length > 1) {
        o.language.typescript.name = `${og.language.default.name}${operationName}`;
      }
    })
  );
}
