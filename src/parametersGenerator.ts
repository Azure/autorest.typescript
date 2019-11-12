import { CodeModel } from '@azure-tools/codemodel';
import { Host } from '@azure-tools/autorest-extension-base';
import * as ejs from 'ejs';
import * as fs from 'fs';
import {Schema} from '@azure-tools/codemodel';

export class ParametersGenerator {
    private codeModel:CodeModel;
    private host:Host;

    constructor(codeModel: CodeModel, host: Host) {
        this.codeModel = codeModel;
        this.host = host;
    }

    private getTemplate(): string {
        return fs.readFileSync('./src/template/parameters_template.ejs', {
            encoding: 'utf8'
        });
    }

    public process() {
        this.codeModel.operationGroups.forEach(operationGroup => {
            operationGroup.operations.forEach(operation => {
                operation.request.parameters!.forEach(parameter => {
                    const key:string = parameter.$key;
                });
            });
        });
        let template:string = this.getTemplate();
        let data = ejs.render(template);
        this.host.WriteFile(
            'parameters.ts',
            data,
            undefined,
            "source-files-typescript"
        );
    }
}