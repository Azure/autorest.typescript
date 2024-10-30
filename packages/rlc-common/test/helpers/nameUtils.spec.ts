import { expect } from "chai";
import "mocha";
import { NameType, normalizeName } from "../../src/helpers/nameUtils.js";

describe("#normalizeName", () => {
  describe("for parameter", () => {
    it("should return the name with the suffix 'Param' if the name is a reserved name", () => {
      expect(normalizeName("static", NameType.Parameter, true)).to.equal(
        "staticParam"
      );
      expect(normalizeName("any", NameType.Parameter, true)).to.equal(
        "anyParam"
      );
    });

    it("should normalize the name with camel case", () => {
      expect(normalizeName("API_KEY", NameType.Parameter, true)).to.equal("apiKey");
      expect(normalizeName("pascalCase", NameType.Parameter, true)).to.equal(
        "pascalCase"
      );
      expect(normalizeName("PascalCase", NameType.Parameter, true)).to.equal(
        "pascalCase"
      );
      expect(normalizeName("pascal_case_", NameType.Parameter, true)).to.equal(
        "pascalCase"
      );
      expect(normalizeName("_pascal_case", NameType.Parameter, true)).to.equal(
        "pascalCase"
      );
      expect(normalizeName("pascal, case", NameType.Parameter, true)).to.equal(
        "pascalCase"
      );
      expect(normalizeName("MAX_of_MLD", NameType.Parameter, true)).to.equal(
        "maxOfMld"
      );
      expect(normalizeName("___pascal____case6666", NameType.Parameter, true)).to.equal(
        "pascalCase6666"
      );

      expect(normalizeName("_10Pascal", NameType.Parameter, true)).to.equal(
        "10Pascal"
      );

    });
  });

  describe("for operation", () => {
    it("should return the name with the suffix 'Operation' if the name is a reserved name", () => {
      expect(normalizeName("export", NameType.Operation, true)).to.equal(
        "export"
      );
    });

    it("should normalize the name with camel case", () => {
      expect(
        normalizeName("create_ wideget", NameType.Parameter, true)
      ).to.equal("createWideget");
    });
  });

  describe("for operation group", () => {
    it("should normalize the name with pasel case", () => {
      expect(
        normalizeName("LoadTest_Administration ", NameType.OperationGroup, true)
      ).to.equal("LoadTestAdministration");
    });
  });
});
