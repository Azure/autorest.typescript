import { CodeModel } from '@azure-tools/codemodel';
import { Host } from '@azure-tools/autorest-extension-base';
import { ParametersGenerator } from './parametersGenerator';
import { ClientGenerator } from './clientGenerator';

export class TypescriptGenerator {
    private codeModel:CodeModel;
    private host:Host;

    constructor(codeModel: CodeModel, host: Host) {
        this.codeModel = codeModel;
        this.host = host;
    }

    public process() {
        const clientGenerator = new ClientGenerator(this.codeModel, this.host);
        clientGenerator.process();

        const parametersGenerator = new ParametersGenerator(this.codeModel, this.host)
        parametersGenerator.process();
    }
}