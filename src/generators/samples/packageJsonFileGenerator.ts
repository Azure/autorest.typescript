import { PackageDetails } from "../../models/packageDetails";
import { getAutorestOptions, getSession } from "../../autorestSession";
import { Project } from "ts-morph";


export function generateSamplePackageJson(
    packageDetails: PackageDetails,
    project: Project
) {
    const packageJsonContents = samplePackageJson(packageDetails)
    project.createSourceFile(
        "samples/v1/typescript/package.json",
        JSON.stringify(packageJsonContents),
        {
          overwrite: true
        }
    );
}

function samplePackageJson(
    packageDetails: PackageDetails
) {
    const { azureOutputDirectory } = getAutorestOptions();
    const packageInfo: Record<string, any> = {
        "name": `azure-${packageDetails.nameWithoutScope}-samples-ts`,
        "private": true,
        "version": "1.0.0",
        "description": `A generated TypeScript SDK samples for ${packageDetails.name}`,
        "engines": {
            "node": ">=12.0.0"
        },
        "scripts": {
            "build": "tsc",
            "prebuild": "rimraf dist/"
        },
        "repository": {
            "type": "git",
            "url": "git+https://github.com/Azure/azure-sdk-for-js.git",
            "directory": `${azureOutputDirectory}`
        },
        "keywords": [
            "node",
            "azure",
            "cloud",
            "typescript",
            "browser",
            "isomorphic"
        ],
        "author": "Microsoft Corporation",
        "license": "MIT",
        "bugs": {
            "url": "https://github.com/Azure/azure-sdk-for-js/issues"
        },
        "homepage": `https://github.com/Azure/azure-sdk-for-js/tree/main/${azureOutputDirectory}`,
        "dependencies": {
            "dotenv": "latest",
            "@azure/identity": "^2.0.0"
        },
        "devDependencies": {
            "typescript": "~4.4.0",
            "rimraf": "latest"
        }
    };
    packageInfo.dependencies[`${packageDetails.name}`] = "next";
    return packageInfo;
}

  