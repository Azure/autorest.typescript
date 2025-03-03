import { expect } from "chai";
import "mocha";
import { NameType, normalizeName } from "../../src/helpers/nameUtils.js";

describe("#normalizeName", () => {
  describe("general cases", () => {
    describe("Step 1 - split words", () => {
      it("should use uppercase words", () => {
        expect(normalizeName("someSQLConnection", NameType.EnumMemberName)).to.equal(
          "SomeSQLConnection"
        );
      });
      it("should use special chars to help split", () => {
        expect(normalizeName("pascal_case", NameType.EnumMemberName)).to.equal(
          "PascalCase"
        );
        expect(normalizeName("pascal case", NameType.EnumMemberName)).to.equal(
          "PascalCase"
        );
        expect(normalizeName("pascal/case", NameType.EnumMemberName)).to.equal(
          "PascalCase"
        );
      });
      it("should split a plural upper cased word correctly", () => {
        expect(normalizeName("diskMBpsReadWrite", NameType.EnumMemberName)).to.equal(
          "DiskMBpsReadWrite"
        );
        expect(
          normalizeName("LRORetrysPost", NameType.OperationGroup,)
        ).to.equal("LRORetrysPost");
        expect(
          normalizeName("_LRORetrysPost", NameType.OperationGroup,)
        ).to.equal("LRORetrysPost");
      });

      it("should limit the charset to alphanumeric characters", () => {
        expect(normalizeName("base64urlArray", NameType.Property)).to.equal("base64UrlArray");
        expect(normalizeName("R-10Min", NameType.EnumMemberName)).to.equal("R10Min");
        expect(normalizeName("___pascal____case6666", NameType.EnumMemberName)).to.equal("PascalCase6666");
        expect(normalizeName("system,user", NameType.EnumMemberName)).to.equal("SystemUser");
        expect(normalizeName("x86_64_mac", NameType.EnumMemberName)).to.equal("X8664Mac");
        expect(normalizeName("size256x256", NameType.EnumMemberName)).to.equal("Size256X256");
      });
    });
    describe("Step 2 - convert words", () => {
      it("should convert to lowercases if lex > 3 for full upper-case words", () => {
        expect(normalizeName("V", NameType.EnumMemberName)).to.equal("V");
        expect(normalizeName("VA", NameType.EnumMemberName)).to.equal("VA");
        expect(normalizeName("VAL", NameType.EnumMemberName)).to.equal("VAL");
        expect(normalizeName("VALI", NameType.EnumMemberName)).to.equal("Vali");
        expect(normalizeName("VALID", NameType.EnumMemberName)).to.equal("Valid");
      });
      it("should add underscore _ for the first leading number", () => {
        expect(normalizeName("10Min", NameType.EnumMemberName)).to.equal("_10Min");
        expect(normalizeName("-1.0Min", NameType.EnumMemberName)).to.equal("_10Min");
      });
    });

    describe("Step 3 - to target casing", () => {
      it("should keep whole upper case for enum member", () => {
        expect(normalizeName("SAS_AUTHENTICATION_IP", NameType.EnumMemberName)).to.equal("SASAuthenticationIP");
      });
      it("should keep whole lower case for property", () => {
        expect(normalizeName("SAS_AUTHENTICATION_IP", NameType.Property)).to.equal("sasAuthenticationIP");
      });
    });

    describe("$DO_NOT_NORMALIZE", () => {
      it("should keep the whole name if it starts with $DO_NOT_NORMALIZE$", () => {
        expect(normalizeName("$DO_NOT_NORMALIZE$VALIDATION_NOT_REQUIRED", NameType.EnumMemberName)).to.equal("VALIDATION_NOT_REQUIRED");
      });

    });
  });
  describe("for enum member name", () => {
    it("should handle pure numeric", () => {
      expect(normalizeName("10", NameType.EnumMemberName)).to.equal("_10");
    });
    it("should handle api-version enums as normal enum", () => {
      expect(normalizeName("V1.1", NameType.EnumMemberName)).to.equal("V11");
      expect(normalizeName("2024-07-01-preview ", NameType.EnumMemberName)).to.equal("_20240701Preview");
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
  });

  describe("for operation", () => {
    it("should return the name with the suffix 'Operation' if the name is a reserved name", () => {
      expect(normalizeName("export", NameType.Operation,)).to.equal(
        "export"
      );
    });

    it("should normalize the name", () => {
      expect(
        normalizeName("create_ widget", NameType.Parameter,)
      ).to.equal("createWidget");
    });
  });
});
