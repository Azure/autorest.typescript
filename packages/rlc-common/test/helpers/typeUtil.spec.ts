import { expect } from "chai";
import "mocha";
import {
  getArrayObjectType,
  getNativeArrayType,
  getRecordType,
  getUnionType,
  isArray,
  isBoolLiteral,
  isConstant,
  isNumericLiteral,
  isRecord,
  isStringLiteral,
  isUnion,
  leaveBracket
} from "../../src/helpers/typeUtil.js";

describe("#isStringLiteral", () => {
  it("should return true if the string is quoted", () => {
    expect(isStringLiteral(`''`)).to.be.true;
    expect(isStringLiteral(`""`)).to.be.true;
    expect(isStringLiteral(`"'xxx'"`)).to.be.true;
    expect(isStringLiteral(`"string"`)).to.be.true;
    expect(isStringLiteral(`'string'`)).to.be.true;
    expect(isStringLiteral(`'   string  ssss '`)).to.be.true;
    expect(
      isStringLiteral(
        `"啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€"`
      )
    ).to.be.true;
  });

  it("should return false if the string is not quoted", () => {
    expect(isStringLiteral(`string`)).to.be.false;
    expect(isStringLiteral(`true`)).to.be.false;
  });
});

describe("#isNumericLiteral", () => {
  it("should return true if the string is numeric", () => {
    expect(isNumericLiteral(`123`)).to.be.true;
    expect(isNumericLiteral(`0.123`)).to.be.true;
  });

  it("should return false if the string is not numeric", () => {
    expect(isNumericLiteral(`string`)).to.be.false;
  });
});

describe("#isBoolLiteral", () => {
  it("should return true if the string is boolean", () => {
    expect(isBoolLiteral(`true`)).to.be.true;
    expect(isBoolLiteral(`false`)).to.be.true;
  });

  it("should return false if the string is not boolean", () => {
    expect(isBoolLiteral(`unknown`)).to.be.false;
  });
});

describe("#isConstant", () => {
  it("should return true if the string is constant", () => {
    expect(isConstant(`null`)).to.be.true;
  });

  it("should return false if the string is not constant", () => {
    expect(isConstant(`undefined`)).to.be.false;
  });
});

describe("#isRecord", () => {
  it("should return true if the string is record", () => {
    expect(isRecord(`Record<string, string>`)).to.be.true;
    expect(isRecord(`Record<string, string | "1">`)).to.be.true;
    expect(isRecord(`Record<string, Record<string, any>>`)).to.be.true;
  });

  it("should return false if the string is not record", () => {
    expect(isRecord(`Record<string, string> | string`)).to.be.false;
  });
});

describe("#getRecordType", () => {
  it("should return the type of the record", () => {
    expect(getRecordType(`Record<string, string>`)).to.equal("string");
    expect(getRecordType(`Record<string, string | "1">`)).to.equal(
      'string | "1"'
    );
    expect(getRecordType(`Record<string, Record<string, any>>`)).to.equal(
      "Record<string, any>"
    );
  });
});

describe("#isArray", () => {
  it("should return true if the string is array", () => {
    expect(isArray(`string[]`)).to.be.true;
    expect(isArray(`Array<Model>`)).to.be.true;
    expect(isArray(`Array<string | number>`)).to.be.true;
  });

  it("should return false if the string is not array", () => {
    expect(isArray(`Record<string, string[]>`)).to.be.false;
  });
});

describe("#getArrayObjectType", () => {
  it("should return the type of the array", () => {
    expect(getArrayObjectType(`Array<Model>`)).to.equal("Model");
    expect(getArrayObjectType(`Array<string | number>`)).to.equal(
      "string | number"
    );
  });
});

describe("#getNativeArrayType", () => {
  it("should return the type of the array", () => {
    expect(getNativeArrayType(`string[]`)).to.equal("string");
  });
});

describe("#isUnion", () => {
  it("should return true if the string is union", () => {
    expect(isUnion(`string | number`)).to.be.true;
    expect(isUnion(`string | "a"`)).to.be.true;
    expect(isUnion(`1 | "a"`)).to.be.true;
    expect(isUnion(`Record<string, string> | string`)).to.be.true;
    expect(isUnion(`string[] | string`)).to.be.true;
  });

  it("should return false if the string is not union", () => {
    expect(isUnion(`Record<string, string | "sss">`)).to.be.false;
    expect(isUnion(`"sss | tt"`)).to.be.false;
  });
});

describe("#getUnionType", () => {
  it("should return the type of the union", () => {
    expect(getUnionType(`string | number`)).to.equal("string");
  });
});

describe("#leaveBracket", () => {
  it("should return the string without bracket", () => {
    expect(leaveBracket(`(string)`)).to.equal("string");
  });

  it("should return the string without bracket", () => {
    expect(leaveBracket(`" include (not in)"`)).to.equal(`" include (not in)"`);
  });
});
