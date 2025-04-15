// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { expect } from "chai";
import {
    ModuleName,
    getImportModuleName
} from "../../../src/utils/nameConstructors";

describe("#getImportModuleName", () => {
    describe("when using cjs", () => {
        it("generates the correct module name for simple files", () => {
            const name: ModuleName = "myModule";
            expect(getImportModuleName(name, true)).to.equal("myModule");
        });

        it("generates the correct module name for directories", () => {
            const name: ModuleName = {
                cjsName: "myModule",
                esModulesName: "myModule/index.js"
            };
            expect(getImportModuleName(name, true)).to.equal("myModule");
        });
    });

    describe("when using esm", () => {
        it("generates the correct module name for simple files", () => {
            const name: ModuleName = "myModule";
            expect(getImportModuleName(name, false)).to.equal("myModule.js");
        });

        it("generates the correct module name for directories", () => {
            const name: ModuleName = {
                cjsName: "myModule",
                esModulesName: "myModule/index.js"
            };
            expect(getImportModuleName(name, false)).to.equal("myModule/index.js");
        });
    });

    describe("when omitting module kind", () => {
        it("defaults to esm", () => {
            const name: ModuleName = "myModule";
            expect(getImportModuleName(name)).to.equal("myModule.js");
        });
    });
});