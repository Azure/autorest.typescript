import { expect } from "chai";
import "mocha";
import { NameType, normalizeName } from "../../src/helpers/nameUtils.js";

describe("#normalizeName", () => {
  describe("for enum member name", () => {
    it("should normalize the name with pascal case", () => {
      expect(normalizeName("OAuthTokensGetOAuthConnectionLinkMediaTypesParam", NameType.EnumMemberName, true)).to.equal("OAuthTokensGetOAuthConnectionLinkMediaTypesParam");
      expect(normalizeName("LRORetrysPut201CreatingSucceeded200BodyParam", NameType.EnumMemberName, true)).to.equal("LRORetrysPut201CreatingSucceeded200BodyParam");
      expect(normalizeName("$DO_NOT_NORMALIZE$VALIDATION_NOT_REQUIRED", NameType.EnumMemberName, true)).to.equal("VALIDATION_NOT_REQUIRED");
      expect(normalizeName("_10Min", NameType.EnumMemberName, true)).to.equal("Number10Min");
      expect(normalizeName("090", NameType.EnumMemberName, true)).to.equal("Number090");
      expect(normalizeName("10", NameType.EnumMemberName, true)).to.equal("Number10");
      // pls note `1` is a numeric literal number but `1.0` is not
      expect(normalizeName("1", NameType.EnumMemberName, true)).to.equal("Number1");
      expect(normalizeName("1.0", NameType.EnumMemberName, true)).to.equal("Number10");
      expect(normalizeName("$DO_NOT_NORMALIZE$Number1.0", NameType.EnumMemberName, true)).to.equal("Number1.0");
      expect(normalizeName("1.1", NameType.EnumMemberName, true)).to.equal("Number1.1");
      expect(normalizeName("-1.1", NameType.EnumMemberName, true)).to.equal("Number-1.1");
      expect(normalizeName("BasicGetNull", NameType.EnumMemberName, true)).to.equal("BasicGetNull");
      expect(normalizeName("size256x256", NameType.EnumMemberName, true)).to.equal("Size256X256");
      expect(normalizeName("LRORetrysPut201CreatingSucceeded200BodyParam", NameType.EnumMemberName, true)).to.equal("LRORetrysPut201CreatingSucceeded200BodyParam");
      expect(normalizeName("PagingGetNullNextLinkNamePagesParameters", NameType.EnumMemberName, true)).to.equal("PagingGetNullNextLinkNamePagesParameters");
      expect(normalizeName("AKV_cert_URI", NameType.EnumMemberName, true)).to.equal("AKVCertURI");
      expect(normalizeName("AzureOpenAIOperationStateOutput", NameType.EnumMemberName, true)).to.equal("AzureOpenAIOperationStateOutput");
      expect(normalizeName("TSModel", NameType.EnumMemberName, true)).to.equal("TSModel");
      expect(normalizeName("VALIDATION_NOT_REQUIRED", NameType.EnumMemberName, true)).to.equal("ValidationNOTRequired");
      expect(normalizeName("ValidationNotRequired", NameType.EnumMemberName, true)).to.equal("ValidationNotRequired");
      expect(normalizeName("KnownPFTestResult", NameType.EnumMemberName, true)).to.equal("KnownPFTestResult");
      expect(normalizeName("repeatabilityRequestID", NameType.EnumMemberName, true)).to.equal("RepeatabilityRequestID");
      expect(normalizeName("C", NameType.EnumMemberName, true)).to.equal("C");
      expect(normalizeName("splitAllCSVs", NameType.EnumMemberName, true)).to.equal("SplitAllCSVs");
      expect(normalizeName("publicIPDisabled", NameType.EnumMemberName, true)).to.equal("PublicIPDisabled");
    });
  });
  describe("for property", () => {
    it("should remove $ char", () => {
      expect(normalizeName("$select", NameType.Parameter, true)).to.equal(
        "select"
      );
      expect(normalizeName("hate/threatening", NameType.Parameter, true)).to.equal(
        "hateThreatening"
      );
    });
  });
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
      expect(normalizeName("NodeVMExtension", NameType.Parameter, true)).to.equal("nodeVMExtension");
      expect(normalizeName("TSModel", NameType.Property, true)).to.equal("tSModel");
      expect(normalizeName("Base64urlArrayBytesProperty", NameType.Property, true)).to.equal("base64UrlArrayBytesProperty");
      expect(normalizeName("ISO8601DurationProperty", NameType.Property, true)).to.equal("iSO8601DurationProperty");
      expect(normalizeName("C", NameType.Parameter, true)).to.equal("c");
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
      expect(
        normalizeName("LRORetrysPostAsyncRelativeRetrySucceeded", NameType.OperationGroup, true)
      ).to.equal("LRORetrysPostAsyncRelativeRetrySucceeded");
      expect(
        normalizeName("_LRORetrysPostAsyncRelativeRetrySucceeded", NameType.OperationGroup, true)
      ).to.equal("LRORetrysPostAsyncRelativeRetrySucceeded");
    });
  });
});
