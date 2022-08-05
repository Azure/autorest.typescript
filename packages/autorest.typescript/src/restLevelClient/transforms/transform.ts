import { CodeModel } from "@autorest/codemodel";
import { RLCModel } from "@azure-tools/rlc-codegen";
import { getAutorestOptions } from "../../autorestSession";
import { transformSchemas } from "./transformSchemas";

export function transform(model: CodeModel): RLCModel {
    const { packageDetails, srcPath, rlcShortcut } = getAutorestOptions();
    const rlcModel = {
      libraryName: packageDetails.name,
      srcPath,
      paths: {},
      options: { includeShortcuts: rlcShortcut },
      schemas: transformSchemas(model)
    };
    return rlcModel;
  }
  