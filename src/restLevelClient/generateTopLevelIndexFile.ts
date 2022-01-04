import { Project } from 'ts-morph';
import * as path from 'path';
import { getAutorestOptions } from '../autorestSession';
import { CodeModel } from '@autorest/codemodel';
import { NameType, normalizeName } from '../utils/nameUtils';

const batchOutputFolder: [string, string, string][] = [];

export function generateTopLevelIndexFile(model: CodeModel, project: Project) {
    const { batch, srcPath } = getAutorestOptions();
    if (srcPath) {
        const clientName = model.language.default.name;
        const moduleName = normalizeName(clientName, NameType.File);
        batchOutputFolder.push([srcPath, clientName, moduleName]);
    }
    
    if (batch && batch.length > 1 && batchOutputFolder.length === batch.length) {
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
}
