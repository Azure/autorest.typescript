// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { getAutorestOptions } from "../../autorestSession";

export function generateTsBrowserConfig(project: Project) {
    const {
        packageDetails,
        generateMetadata,
    } = getAutorestOptions();

    if (!generateMetadata) {
        return;
    }

    const highLevelTsBrowserConfig: Record<string, any> = {
        "extends": "../../../tsconfig.browser.base.json",
        "compilerOptions": {
            "paths": {
                [packageDetails.name]: ["./dist/browser/index.d.ts"],
                [`${packageDetails.name}/*`]: ["./dist/browser/*"],
                "$internal/*": ["./dist/browser/*"]
            }
        }
    };

    project.createSourceFile("tsconfig.browser.config.json", JSON.stringify(highLevelTsBrowserConfig), {
        overwrite: true
    });
}
