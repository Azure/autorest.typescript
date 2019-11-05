import { CodeModel } from '@azure-tools/codemodel';
import { Host } from '@azure-tools/autorest-extension-base';
import { ParametersGenerator } from './parametersGenerator';

export class TypescriptGenerator {
    private codeModel:CodeModel;
    private host:Host;

    constructor(codeModel: CodeModel, host: Host) {
        this.codeModel = codeModel;
        this.host = host;
    }

    public process() {
        const parametersGenerator = new ParametersGenerator(this.codeModel, this.host)
        parametersGenerator.process();
    }
}