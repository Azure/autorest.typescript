import { Project } from "ts-morph";
import * as path from "path";
import * as fs from "fs";
import * as hbs from "handlebars";
import { CodeModel } from "@autorest/codemodel";
import { ClientDetails } from "../../models/clientDetails";
import { getAutorestOptions } from "../../autorestSession";
import { getClientAndServiceName, hasClientSubscriptionId } from "../static/readmeFileGenerator";

export function generateSnippetsFile(
    codeModel: CodeModel,
    project: Project,
    clientDetails?: ClientDetails
) {
    const { generateTest, azureSdkForJs, azureArm } = getAutorestOptions();
    if (!generateTest || !azureSdkForJs) {
        return;
    }
    const { clientClassName } = getClientAndServiceName(
        codeModel.language,
        codeModel.info
    );
    const metadata = {
        clientClassName: clientClassName,
        azureArm: azureArm,
        hasClientSubscriptionId: hasClientSubscriptionId(clientDetails?.samples)
    };
    const file = fs.readFileSync(path.join(__dirname, "snippets.ts.hbs"), {
        encoding: "utf-8"
    });
    const readmeFileContents = hbs.compile(file, { noEscape: true });
    project.createSourceFile("test/snippets.spec.ts", readmeFileContents(metadata), {
        overwrite: true
    });
}
