import { TestCodeModel } from "@autorest/testmodeler/dist/src/core/model";
import { Project } from "ts-morph";
import { getAutorestOptions, getSession } from "../../autorestSession";
import * as fs from 'fs';
import * as path from 'path';
import * as hbs from "handlebars";
import { NameType, normalizeName } from "../../utils/nameUtils";
import { getLanguageMetadata } from "../../utils/languageHelpers";
import { transformBaseUrl } from "../../transforms/urlTransforms";
import { Paths, RLCSampleDetail, RLCSampleGroup } from "../../restLevelClient/interfaces";
import { camelCase } from "@azure-tools/codegen";
import { pathDictionary } from "../../restLevelClient/generateClientDefinition";
import { Operation } from "@autorest/codemodel";

export function generateRLCSamples(model: TestCodeModel, project: Project) {
    const {
        generateSample,
        multiClient
    } = getAutorestOptions();
    const session = getSession();
    if (!generateSample || !model?.testModel?.mockTest?.exampleGroups) {
        return;
    }
    // Not supported to generate code for multi-client
    if (multiClient) {
        // TODO: add logging info
        return;
    }
    try {
        const file = fs.readFileSync(path.join(__dirname, "rlcSamples.ts.hbs"), {
            encoding: "utf-8"
        });

        const sampleFileContents = hbs.compile(file, { noEscape: true });
        const res = transformRLCSampleData(model);

        session.debug(res.toString());


        const sampleData = createSampleData(model);
        project.createSourceFile(`samples-dev/${sampleData.filename}.ts`, sampleFileContents(sampleData), {
            overwrite: true
        });
    } catch (error) {
        session.error("An error was encountered while handling sample generation", []);
        throw error;
    }
}

export function transformRLCSampleData(model: TestCodeModel): RLCSampleGroup[] {
    const rlcSampleGroups: RLCSampleGroup[] = [];
    if (!model?.testModel?.mockTest?.exampleGroups) {
        return rlcSampleGroups;
    }
    const session = getSession();
    const paths: Paths = pathDictionary;
    const rawSamples = model.testModel.mockTest.exampleGroups;
    for (const rawSamplesForOperID of rawSamples) {
        const operation: Operation = rawSamplesForOperID.operation;
        const operationId = rawSamplesForOperID.operationId;
        const operationName = getLanguageMetadata(operation.language).name;
        const path: string = operation.requests?.[0].protocol.http?.path;
        const method = operation.requests?.[0].protocol.http?.method;;

        const sampleGroup: RLCSampleGroup = {
            filename: "",
            clientClassName: "",
            clientPackageName: "",
            samples: []
        };
        const rawSamples = rawSamplesForOperID?.examples;
        if (!rawSamples || rawSamples.length == 0) {
            session.debug(`Skip sample transformation`);
            continue;
        }
        try {
            for (const rawSample of rawSamples) {
                const sample: RLCSampleDetail = {
                    description: getLanguageMetadata(
                        rawSamplesForOperID.operation.language
                    ).description,
                    originalFileLocation: rawSample.originalFile,
                    name: camelCase(
                        transformSpecialLetterToSpace(rawSample?.name)
                    ),
                    path,
                    clientParamsInits: [],
                    pathParamsInits: [],
                    methodParamsInits: [],
                    clientParamStr: "",
                    pathParamStr: "",
                    methodParamStr: "",
                    method,
                    isLRO: false,
                    isPaging: false
                };
                sampleGroup.samples.push(sample);
            }
        } catch (error) {
            session.error("An error was encountered while transforming sample", [
                "exampleGroup.operationId"
            ]);
            throw error;
        }
        if (sampleGroup.samples.length > 0) {
            // enrich the importedTypes after all examples resolved
            // sampleGroup.importedTypes = Array.from(importedTypeSet);
            rlcSampleGroups.push(sampleGroup);
        } else {
            session.debug(`No sample found`);
        }
    }

    //   // const Endpoint = "{Endpoint}"; 
    //   // const credential = new DefaultAzureCredential(); 
    //   clientParamsInits: string[],
    //   // const farmerId = "FARMER123"; 
    //   pathParamsInits: string[];
    //   // const options: Option = { 
    //   //   body: { 
    //   //     name: "John Smith", 
    //   //     description: "Some description", 
    //   //     status: "Active", 
    //   //     properties: { 
    //   //       "Irrigated": "Yes", 
    //   //       "RetailerId": "Retailer123" 
    //   //     }, 
    //   //   } 
    //   // }; 
    //   methodParamsInits: string[],
    return rlcSampleGroups;
}
function transformSpecialLetterToSpace(str: string) {
    if (!str) {
        return str;
    }
    return str
        .replace(/_/g, " ")
        .replace(/\//g, " Or ")
        .replace(/,|\.|\(|\)/g, " ")
        .replace("'s ", " ");
}

export function createSampleData(model: TestCodeModel) {
    const {
        addCredentials,
        packageDetails
    } = getAutorestOptions();
    const clientFileName = normalizeName(
        getLanguageMetadata(model.language).name,
        NameType.File
    );
    const clientName = getLanguageMetadata(model.language).name;
    const clientInterfaceName = clientName.endsWith("Client") ? `${clientName}` : `${clientName}Client`;
    const { parameterName } = transformBaseUrl(model);
    const hasUriParameter = !!parameterName, hasCredentials = addCredentials;
    const clientParameters = [];
    const clientParamAssignments = [];
    if (hasUriParameter) {
        clientParamAssignments.push(`const ${parameterName} = process.env["ENDPOINT"] || "<${parameterName}>"`);
        clientParameters.push(`${parameterName}`);
    }
    if (hasCredentials) {
        clientParamAssignments.push("const credential = new DefaultAzureCredential();");
        clientParameters.push("credential");
    }
    return {
        filename: `${clientFileName}Sample`,
        clientParamAssignments,
        clientClassName: clientInterfaceName,
        clientPackageName: `${packageDetails.name}`,
        clientParameterNames: clientParameters.join(","),
        hasCredentials
    }

}