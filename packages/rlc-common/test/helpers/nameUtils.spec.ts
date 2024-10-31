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

    it.only("should normalize the name with camel case", () => {
      expect(normalizeName("NodeVMExtension", NameType.Parameter, true)).to.equal("nodeVMExtension");
      expect(normalizeName("AKV_cert_URI", NameType.EnumMemberName, true)).to.equal("AKVCertURI");
      expect(normalizeName("AzureOpenAIOperationStateOutput", NameType.EnumMemberName, true)).to.equal("AzureOpenAIOperationStateOutput");
      expect(normalizeName("TSModel", NameType.EnumMemberName, true)).to.equal("TSModel");
      expect(normalizeName("TSModel", NameType.Property, true)).to.equal("tSModel");
      expect(normalizeName("Base64urlArrayBytesProperty", NameType.Property, true)).to.equal("base64UrlArrayBytesProperty");
      expect(normalizeName("ISO8601DurationProperty", NameType.Property, true)).to.equal("iSO8601DurationProperty");
      expect(normalizeName("VALIDATION_NOT_REQUIRED", NameType.EnumMemberName, true)).to.equal("ValidationNOTRequired");
      expect(normalizeName("ValidationNotRequired", NameType.EnumMemberName, true)).to.equal("ValidationNotRequired");
      expect(normalizeName("KnownPFTestResult", NameType.EnumMemberName, true)).to.equal("KnownPFTestResult");
      expect(normalizeName("repeatabilityRequestID", NameType.EnumMemberName, true)).to.equal("RepeatabilityRequestID");
      expect(normalizeName("C", NameType.EnumMemberName, true)).to.equal("C");
      expect(normalizeName("C", NameType.Parameter, true)).to.equal("c");
      expect(normalizeName("splitAllCSVs", NameType.EnumMemberName, true)).to.equal("SplitAllCSVs");
      expect(normalizeName("publicIPDisabled", NameType.EnumMemberName, true)).to.equal("PublicIPDisabled");
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
      // expect(normalizeName("pascal, case", NameType.Parameter, true)).to.equal(
      //   "pascalCase"
      // );
      expect(normalizeName("MAX_of_MLD", NameType.Parameter, true)).to.equal(
        "mAXOfMLD"
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
