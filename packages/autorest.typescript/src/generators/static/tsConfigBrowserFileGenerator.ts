// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { getAutorestOptions } from "../../autorestSession";

const highLevelTsBrowserConfig: Record<string, any> = {
    "extends": [
        "./tsconfig.test.json",
        "../../../tsconfig.browser.base.json"
    ]
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
