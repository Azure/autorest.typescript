import { Project } from 'ts-morph';
import * as path from 'path';
import { getAutorestOptions } from '../autorestSession';

export function generateTopLevelIndexFile(batchOutputFolder: [string, string, string][], project: Project) {
    const { srcPath } = getAutorestOptions();
    const fileDirectory= path.join(srcPath as string, '../../');
    const file = project.createSourceFile('/src/index.ts', undefined, {
        overwrite: true
    });
    file.moveToDirectory(fileDirectory);
    const allModules: string[] = [];  
    batchOutputFolder.forEach(item => {
        file.addImportDeclaration({
            namespaceImport: item[1],
            moduleSpecifier: `${item[0]}`
        });
        file.addExportDeclaration({
            moduleSpecifier: `${item[0]}/${item[2]}`,
            namedExports: [`${item[1]} as ${item[1]}Client`]
        })
        allModules.push(item[1]);
    });
    file.addExportDeclaration({
        namedExports: [...allModules]
    });
}
