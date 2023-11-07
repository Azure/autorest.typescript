import { expect } from "chai";
import "mocha";
import {
  build3ndPartyImports,
  getImportSpecifier
} from "../../src/helpers/importsUtil.js";

describe("#build3ndPartyImports", () => {
  it("should return the correct import set for branded scope", () => {
    const imports = build3ndPartyImports(true);
    expect(imports.commonFallback).to.be.undefined;
    expect(imports.restClient).to.deep.equal({
      type: "restClient",
      specifier: "@azure-rest/core-client",
      version: "^1.1.4"
    });
  });

  it("should return the correct import set for non-branded scope", () => {
    const imports = build3ndPartyImports(false);
    expect(imports.commonFallback).to.deep.equal({
      type: "commonFallback",
      specifier: "@typespec/ts-http-runtime",
      version: "1.0.0-alpha.20231103.1"
    });
    expect(imports.restClient).to.be.undefined;
  });
});

describe("#getImportSpecifier", () => {
  describe("#empty-imports", () => {
    it("should return the correct import specifier for core auth", () => {
      expect(getImportSpecifier("coreAuth", {} as any)).to.equal(
        "@azure/core-auth"
      );

      expect(getImportSpecifier("restClient", {} as any)).to.equal(
        "@azure-rest/core-client"
      );
    });
  });

  describe("#branded", () => {
    const branded = build3ndPartyImports(true);
    it("should return the correct import specifier for core auth", () => {
      expect(getImportSpecifier("coreAuth", branded)).to.equal(
        "@azure/core-auth"
      );

      expect(getImportSpecifier("restClient", branded)).to.equal(
        "@azure-rest/core-client"
      );
    });
  });

  describe("#non-branded", () => {
    const nonBranded = build3ndPartyImports(false);
    it("should return the correct import specifier for core auth", () => {
      expect(getImportSpecifier("coreAuth", nonBranded)).to.equal(
        "@typespec/ts-http-runtime"
      );
      expect(getImportSpecifier("restClient", nonBranded)).to.equal(
        "@typespec/ts-http-runtime"
      );
      expect(getImportSpecifier("coreAuth", nonBranded, false)).to.equal("");
    });
  });
});
