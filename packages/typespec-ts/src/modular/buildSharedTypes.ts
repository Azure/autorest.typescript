import { Project, SourceFile } from "ts-morph";

const content = `
import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
 
/**
 * Common options to set on an outgoing operation
 */
export interface RequestOptions {
/**
 * Options to set on an outgoing HTTP request
 */
  requestOptions?: {
    /**
     * Headers to send along with the request
     */
    headers?: RawHttpHeadersInput;
    /** Set to true if the request is sent over HTTP instead of HTTPS */
    allowInsecureConnection?: boolean;
    /** Set to true if you want to skip encoding the path parameters */
    skipUrlEncoding?: boolean;
  };
}`;

/**
 * Creates a file with common interfaces. This should be moved to core
 */
export function buildSharedTypes(
  project: Project,
  srcPath: string
): SourceFile {
  const path = `${srcPath}/src/common/interfaces.ts`;
  const commonTypes = project.createSourceFile(path, content);

  commonTypes.fixMissingImports({}, { importModuleSpecifierEnding: "js" });

  return commonTypes;
}
