// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { expect } from "chai";
import {
    ModuleName,
    getImportModuleName
} from "../../../src/utils/nameConstructors";

describe("#getImportModuleName", () => {
    describe("generate without .js suffix", () => {
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

    describe("generate with .js suffix", () => {
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
        it(".js suffix should be generated by default", () => {
            const name: ModuleName = "myModule";
            expect(getImportModuleName(name)).to.equal("myModule.js");
        });
    });
});