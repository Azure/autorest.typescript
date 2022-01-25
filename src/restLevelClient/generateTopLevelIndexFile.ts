import { Project } from 'ts-morph';
import * as path from 'path';
import { getAutorestOptions } from '../autorestSession';
import { CodeModel } from '@autorest/codemodel';
import { NameType, normalizeName } from '../utils/nameUtils';

const batchOutput = new Map<string | undefined, {clientName: string; moduleName: string, relativePath: string}[]>()

export function generateTopLevelIndexFile(model: CodeModel, project: Project) {
    const { isMultiClient, srcPath, packageDetails } = getAutorestOptions();
    const packageName = packageDetails.name;
    if (srcPath) {
        const clientName = model.language.default.name;
        const moduleName = normalizeName(clientName, NameType.File);
        const relativePath = srcPath.replace('/src', '');
        if (!batchOutput.has(packageName)) {
          batchOutput.set(packageName, []);
        }
        batchOutput.get(packageName)?.push({clientName, moduleName, relativePath});
    }

    if (isMultiClient) {
        const { srcPath } = getAutorestOptions();
        const fileDirectory= path.join(srcPath as string, '../../');
        const file = project.createSourceFile('/src/index.ts', undefined, {
            overwrite: true
        });
        file.moveToDirectory(fileDirectory);
        const allModules: string[] = [];
        batchOutput.get(packageName)?.forEach(item => {
            file.addImportDeclaration({
                namespaceImport: item.clientName,
                moduleSpecifier: `${item.relativePath}`
            });
            file.addExportDeclaration({
                moduleSpecifier: `${item.relativePath}/${item.moduleName}`,
                namedExports: [`${item.clientName} as ${item.clientName}Client`]
            })
            allModules.push(item.clientName);
        });
        file.addExportDeclaration({
            namedExports: [...allModules]
        });
    }
}
