import { CodeModel } from "@autorest/codemodel";

export function hasPollingOperations(model: CodeModel): boolean {
  return model.operationGroups.some(og =>
    og.operations.some(
      o => o.extensions && o.extensions["x-ms-long-running-operation"]
    )
  );
}
