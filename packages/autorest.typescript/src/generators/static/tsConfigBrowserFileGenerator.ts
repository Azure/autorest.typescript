// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { getAutorestOptions } from "../../autorestSession";

const highLevelTsBrowserConfig: Record<string, any> = {
    extends: "./.tshy/build.json",
    include: [
        "./src/**/*.ts",
        "./src/**/*.mts",
        "./test/**/*.spec.ts",
        "./test/**/*.mts"
    ],
    exclude: [
        "./test/**/node/**/*.ts"
    ],
    compilerOptions: {
        outDir: "./dist-test/browser",
        rootDir: ".",
        skipLibCheck: true
    }
};

export function generateTsBrowserConfig(project: Project) {
    const {
        generateMetadata,
    } = getAutorestOptions();

    if (!generateMetadata) {
        return;
    }
    project.createSourceFile("tsconfig.browser.config.json", JSON.stringify(highLevelTsBrowserConfig), {
        overwrite: true
    });
}
