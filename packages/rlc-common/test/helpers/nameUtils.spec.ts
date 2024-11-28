import { expect } from "chai";
import "mocha";
import { NameType, normalizeName } from "../../src/helpers/nameUtils.js";

describe("#normalizeName", () => {
  describe("for enum member name", () => {
    it("should normalize any chars including digits properly", () => {
      expect(normalizeName("-10Min", NameType.EnumMemberName)).to.equal("Num-10Min");
      expect(normalizeName("LROsPut202Retry200_202Response", NameType.EnumMemberName)).to.equal("LROsPut202Retry200_202Response");
      expect(normalizeName("LROsPut202Retry200_Response", NameType.EnumMemberName)).to.equal("LROsPut202Retry200_Response");
      expect(normalizeName("LROsPut202Retry200 202Response", NameType.EnumMemberName)).to.equal("LROsPut202Retry200202Response");
      expect(normalizeName("LROsPut202Retry200-Response", NameType.EnumMemberName)).to.equal("LROsPut202Retry200-Response");
      expect(normalizeName("LROsPut202Retry200.Response", NameType.EnumMemberName)).to.equal("LROsPut202Retry200.Response");
      expect(normalizeName("090", NameType.EnumMemberName)).to.equal("Num090");
      expect(normalizeName("10", NameType.EnumMemberName)).to.equal("Num10");
      // pls note `1` is a numeric literal number but `1.0` is not
      expect(normalizeName("1", NameType.EnumMemberName)).to.equal("Num1");
      expect(normalizeName("1.0", NameType.EnumMemberName)).to.equal("Num1.0");
      expect(normalizeName(".5", NameType.EnumMemberName)).to.equal("Num.5");
      expect(normalizeName(".0", NameType.EnumMemberName)).to.equal("Num.0");
      expect(normalizeName("$DO_NOT_NORMALIZE$Number1.0", NameType.EnumMemberName)).to.equal("Number1.0");
      expect(normalizeName("1.1", NameType.EnumMemberName)).to.equal("Num1.1");
      expect(normalizeName("-1.1", NameType.EnumMemberName)).to.equal("Num-1.1");
      expect(normalizeName("v2023_11_15", NameType.EnumMemberName)).to.equal("V2023_11_15");
      expect(normalizeName("2024-07-01-preview", NameType.EnumMemberName)).to.equal("Num2024-07-01-Preview");
      expect(normalizeName("Version-2024-07-01-preview", NameType.EnumMemberName)).to.equal("Version-2024-07-01-Preview");
      expect(normalizeName("Version-101-preview", NameType.EnumMemberName)).to.equal("Version-101-Preview");
      expect(normalizeName("100_Inc_200", NameType.EnumMemberName)).to.equal("Num100_Inc_200");
      expect(normalizeName("v1_1", NameType.EnumMemberName, {
        numberPrefixOverride: "V"
      })).to.equal("V1_1");
      expect(normalizeName("v20231001Preview", NameType.EnumMemberName)).to.equal("V20231001Preview");
      expect(normalizeName("2022-08-30", NameType.EnumMemberName, {
        numberPrefixOverride: "V"
      })).to.equal("V2022-08-30");
    });
    it("should keep whole upper case or convert to lower ones", () => {
      expect(normalizeName("SAS", NameType.EnumMemberName)).to.equal("SAS");
      expect(normalizeName("SAS_AUTHENTICATION_IP", NameType.EnumMemberName)).to.equal("SASAuthenticationIP");
    });
    it("should normalize the name", () => {
      expect(normalizeName("OAuthTokensGetOAuthConnectionLinkMediaTypesParam", NameType.EnumMemberName)).to.equal("OAuthTokensGetOAuthConnectionLinkMediaTypesParam");
      expect(normalizeName("LRORetrysPut201CreatingSucceeded200BodyParam", NameType.EnumMemberName)).to.equal("LRORetrysPut201CreatingSucceeded200BodyParam");
      expect(normalizeName("$DO_NOT_NORMALIZE$VALIDATION_NOT_REQUIRED", NameType.EnumMemberName)).to.equal("VALIDATION_NOT_REQUIRED");
      expect(normalizeName("BasicGetNull", NameType.EnumMemberName)).to.equal("BasicGetNull");
      expect(normalizeName("size256x256", NameType.EnumMemberName)).to.equal("Size256X256");
      expect(normalizeName("LRORetrysPut201CreatingSucceeded200BodyParam", NameType.EnumMemberName)).to.equal("LRORetrysPut201CreatingSucceeded200BodyParam");
      expect(normalizeName("PagingGetNullNextLinkNamePagesParameters", NameType.EnumMemberName)).to.equal("PagingGetNullNextLinkNamePagesParameters");
      expect(normalizeName("AKV_cert_URI", NameType.EnumMemberName)).to.equal("AKVCertURI");
      expect(normalizeName("AzureOpenAIOperationStateOutput", NameType.EnumMemberName)).to.equal("AzureOpenAIOperationStateOutput");
      expect(normalizeName("TSModel", NameType.EnumMemberName)).to.equal("TSModel");
      expect(normalizeName("VALIDATION_NOT_REQUIRED", NameType.EnumMemberName)).to.equal("ValidationNOTRequired");
      expect(normalizeName("ValidationNotRequired", NameType.EnumMemberName)).to.equal("ValidationNotRequired");
      expect(normalizeName("KnownPFTestResult", NameType.EnumMemberName)).to.equal("KnownPFTestResult");
      expect(normalizeName("repeatabilityRequestID", NameType.EnumMemberName)).to.equal("RepeatabilityRequestID");
      expect(normalizeName("C", NameType.EnumMemberName)).to.equal("C");
      expect(normalizeName("splitAllCSVs", NameType.EnumMemberName)).to.equal("SplitAllCSVs");
      expect(normalizeName("publicIPDisabled", NameType.EnumMemberName)).to.equal("PublicIPDisabled");
    });
  });
  describe("for property", () => {
    it("should remove $ char", () => {
      expect(normalizeName("$select", NameType.Property)).to.equal(
        "select"
      );
      expect(normalizeName("hate/threatening", NameType.Property)).to.equal(
        "hateThreatening"
      );
    });
    it("should keep whole upper case or convert to lower ones", () => {
      expect(normalizeName("SAS", NameType.Property)).to.equal("sas");
      expect(normalizeName("SAS_AUTHENTICATION_IP", NameType.Property)).to.equal("sasAuthenticationIP");
    });
    it("should normalize number properly", () => {
      expect(normalizeName("2024-07-01-preview", NameType.Property)).to.equal("num2024-07-01Preview");
      expect(normalizeName("-10Min", NameType.Property)).to.equal("num-10Min");
      expect(normalizeName("090", NameType.Property)).to.equal("num090");
      expect(normalizeName("10", NameType.Property)).to.equal("num10");
      // pls note `1` is a numeric literal number but `1.0` is not
      expect(normalizeName("1", NameType.Property)).to.equal("num1");
      expect(normalizeName("1.0", NameType.Property)).to.equal("num1.0");
      expect(normalizeName(".5", NameType.Property)).to.equal("num.5");
      expect(normalizeName(".0", NameType.Property)).to.equal("num.0");
      expect(normalizeName("$DO_NOT_NORMALIZE$Number1.0", NameType.Property)).to.equal("Number1.0");
      expect(normalizeName("1.1", NameType.Property)).to.equal("num1.1");
      expect(normalizeName("-1.1", NameType.Property)).to.equal("num-1.1");
      expect(normalizeName("v2023_11_15", NameType.Property)).to.equal("v2023_11_15");

      expect(normalizeName("v1_1", NameType.Property, {
        numberPrefixOverride: "V"
      })).to.equal("v1_1");
      expect(normalizeName("v20231001Preview", NameType.Property)).to.equal("v20231001Preview");
      expect(normalizeName("2022-08-30", NameType.Property, {
        numberPrefixOverride: "V"
      })).to.equal("v2022-08-30");
    });
    it("should normalize the name", () => {
      expect(normalizeName("OAuthTokensGetOAuthConnectionLinkMediaTypesParam", NameType.Property)).to.equal("oAuthTokensGetOAuthConnectionLinkMediaTypesParam");
      expect(normalizeName("LRORetrysPut201CreatingSucceeded200BodyParam", NameType.Property)).to.equal("lroRetrysPut201CreatingSucceeded200BodyParam");
      expect(normalizeName("$DO_NOT_NORMALIZE$VALIDATION_NOT_REQUIRED", NameType.Property)).to.equal("VALIDATION_NOT_REQUIRED");
      expect(normalizeName("BasicGetNull", NameType.Property)).to.equal("basicGetNull");
      expect(normalizeName("size256x256", NameType.Property)).to.equal("size256X256");
      expect(normalizeName("LRORetrysPut201CreatingSucceeded200BodyParam", NameType.Property)).to.equal("lroRetrysPut201CreatingSucceeded200BodyParam");
      expect(normalizeName("PagingGetNullNextLinkNamePagesParameters", NameType.Property)).to.equal("pagingGetNullNextLinkNamePagesParameters");
      expect(normalizeName("AKV_cert_URI", NameType.Property)).to.equal("akvCertURI");
      expect(normalizeName("AzureOpenAIOperationStateOutput", NameType.Property)).to.equal("azureOpenAIOperationStateOutput");
      expect(normalizeName("TSModel", NameType.Property)).to.equal("tsModel");
      expect(normalizeName("VALIDATION_NOT_REQUIRED", NameType.Property)).to.equal("validationNOTRequired");
      expect(normalizeName("ValidationNotRequired", NameType.Property)).to.equal("validationNotRequired");
      expect(normalizeName("KnownPFTestResult", NameType.Property)).to.equal("knownPFTestResult");
      expect(normalizeName("repeatabilityRequestID", NameType.Property)).to.equal("repeatabilityRequestID");
      expect(normalizeName("C", NameType.Property)).to.equal("c");
      expect(normalizeName("splitAllCSVs", NameType.Property)).to.equal("splitAllCSVs");
      expect(normalizeName("publicIPDisabled", NameType.Property)).to.equal("publicIPDisabled");
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
      expect(normalizeName("SAS", NameType.Parameter)).to.equal("sas");
    });

    it("should normalize the name", () => {
      expect(normalizeName("NodeVMExtension", NameType.Parameter)).to.equal("nodeVMExtension");
      expect(normalizeName("TSModel", NameType.Parameter)).to.equal("tsModel");
      expect(normalizeName("Base64urlArrayBytesProperty", NameType.Parameter)).to.equal("base64UrlArrayBytesProperty");
      expect(normalizeName("ISO8601DurationProperty", NameType.Parameter,)).to.equal("iso8601DurationProperty");
      expect(normalizeName("C", NameType.Parameter,)).to.equal("c");
      expect(normalizeName("pascalCase", NameType.Parameter,)).to.equal(
        "pascalCase"
      );
      expect(normalizeName("PascalCase", NameType.Parameter,)).to.equal(
        "pascalCase"
      );
      expect(normalizeName("pascal_case_", NameType.Parameter,)).to.equal(
        "pascalCase"
      );
      expect(normalizeName("_pascal_case", NameType.Parameter,)).to.equal(
        "pascalCase"
      );
      expect(normalizeName("pascal, case", NameType.Parameter,)).to.equal(
        "pascalCase"
      );
      expect(normalizeName("MAX_of_MLD", NameType.Parameter,)).to.equal(
        "maxOfMLD"
      );
      expect(normalizeName("___pascal____case6666", NameType.Parameter,)).to.equal(
        "pascalCase6666"
      );
      expect(normalizeName("_10Pascal", NameType.Parameter,)).to.equal(
        "_10Pascal"
      );

    });
  });

  describe("for operation", () => {
    it("should return the name with the suffix 'Operation' if the name is a reserved name", () => {
      expect(normalizeName("export", NameType.Operation,)).to.equal(
        "export"
      );
    });

    it("should normalize the name", () => {
      expect(
        normalizeName("create_ wideget", NameType.Parameter,)
      ).to.equal("createWideget");
    });
  });

  describe("for operation group", () => {
    it("should normalize the name", () => {
      expect(
        normalizeName("LoadTest_Administration ", NameType.OperationGroup,)
      ).to.equal("LoadTestAdministration");
      expect(
        normalizeName("LRORetrysPostAsyncRelativeRetrySucceeded", NameType.OperationGroup,)
      ).to.equal("LRORetrysPostAsyncRelativeRetrySucceeded");
      expect(
        normalizeName("_LRORetrysPostAsyncRelativeRetrySucceeded", NameType.OperationGroup,)
      ).to.equal("LRORetrysPostAsyncRelativeRetrySucceeded");
      expect(normalizeName("LROsPut202Retry200_Response", NameType.OperationGroup)).to.equal("LROsPut202Retry200Response");
      expect(normalizeName("LROsPut202Retry200-Response", NameType.OperationGroup)).to.equal("LROsPut202Retry200Response");
      expect(normalizeName("LROsPut202Retry200.Response", NameType.OperationGroup)).to.equal("LROsPut202Retry200Response");
    });
  });
});
