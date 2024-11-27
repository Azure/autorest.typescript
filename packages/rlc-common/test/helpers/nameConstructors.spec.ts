import { expect } from "chai";
import { getImportModuleName, ModuleName } from "../../src/helpers/nameConstructors";
import { RLCModel } from "../../src/interfaces";

describe("#getImportModuleName", () => {
	describe("when using cjs", () => {
		it("generates the correct module name for simple files", () => {
			const name: ModuleName = "myModule";
			expect(getImportModuleName(name, "cjs")).to.equal("myModule");
			expect(getImportModuleName(name, { options: { moduleKind: "cjs" } } as RLCModel)).to.equal("myModule");
		});

		it("generates the correct module name for directories", () => {
			const name: ModuleName = { cjsName: "myModule", esModulesName: "myModule/index.js" };
			expect(getImportModuleName(name, "cjs")).to.equal("myModule");
			expect(getImportModuleName(name, { options: { moduleKind: "cjs" } } as RLCModel)).to.equal("myModule");
		});
	});
	describe("when using esm", () => {
		it("generates the correct module name for simple files", () => {
			const name: ModuleName = "myModule";
			expect(getImportModuleName(name, "esm")).to.equal("myModule.js");
			expect(getImportModuleName(name, { options: { moduleKind: "esm" } } as RLCModel)).to.equal("myModule.js");
		});

		it("generates the correct module name for directories", () => {
			const name: ModuleName = { cjsName: "myModule", esModulesName: "myModule/index.js" };
			expect(getImportModuleName(name, "esm")).to.equal("myModule/index.js");
			expect(getImportModuleName(name, { options: { moduleKind: "esm" } } as RLCModel)).to.equal("myModule/index.js");
		});
	});
});
