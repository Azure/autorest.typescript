import { CodeModel } from "@autorest/codemodel";
import { StringMappingType } from "@ts-morph/common/node_modules/typescript";
import { Project } from 'ts-morph';
import { getAutorestOptions } from "../autorestSession";

interface BatchInfo {
    srcPath: string,
    subModules: [string, string][],
}

function getBatchInfo(batchOutputFolder: [string, string, string][]) {
    const batchOutput = batchOutputFolder.map(value => {
        return value[0];
    });
    batchOutput.forEach(item => {

    });
    
}

export function generateTopLevelIndexFile(batchOutputFolder: [string, string, string][], project: Project) {

    const indexFile = project.createSourceFile(`../src/index.ts`, undefined, {
      overwrite: true
    });
}

