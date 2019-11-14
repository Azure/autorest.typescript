import { Host, startSession, Channel } from '@azure-tools/autorest-extension-base';
import { codeModelSchema, CodeModel } from '@azure-tools/codemodel';
import { TypescriptGenerator } from "./typescriptGenerator";

export async function processRequest(host: Host) {
    try {
        const session = await startSession<CodeModel>(host, undefined, codeModelSchema);
        const tsGenerator = new TypescriptGenerator(session.model, host);
        await tsGenerator.process();
    } catch (E) {
        throw E;
    }
}