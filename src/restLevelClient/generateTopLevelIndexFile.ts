import { Project } from 'ts-morph';
import * as path from 'path';
import { getAutorestOptions } from '../autorestSession';
import { CodeModel } from '@autorest/codemodel';
import { NameType, normalizeName } from '../utils/nameUtils';

const batchOutputFolder: [string, string, string][] = [];

export function generateTopLevelIndexFile(model: CodeModel, project: Project) {
    const { multiClient, batch, srcPath } = getAutorestOptions();
    if (srcPath) {
        const clientName = model.language.default.name;
        const moduleName = normalizeName(clientName, NameType.File);
        const relativePath = srcPath.replace('/src', '');
        batchOutputFolder.push([relativePath, clientName, moduleName]);
    }

    if (multiClient && batch && batch.length > 1 && batchOutputFolder.length === batch.length) {
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
            allModules.push(item[1]);
        });
        file.addExportDeclaration({
            namedExports: [...allModules]
        });
    }
}
