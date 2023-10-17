import { expect } from "chai";
import "mocha";
import {
  TypeScriptType,
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
  leaveBracket,
  leaveStringQuotes,
  toTypeScriptTypeFromName,
  toTypeScriptTypeFromSchema
} from "../../src/helpers/typeUtil.js";

describe("#isStringLiteral", () => {
  it("should return true if the string is quoted", () => {
    expect(isStringLiteral(`''`)).to.be.true;
    expect(isStringLiteral(`""`)).to.be.true;
    expect(isStringLiteral(`"'xxx'"`)).to.be.true;
    expect(isStringLiteral(`"string"`)).to.be.true;
    expect(isStringLiteral(`"string|test|aaa "`)).to.be.true;
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
    expect(isStringLiteral(`123`)).to.be.false;
    expect(isStringLiteral(`null`)).to.be.false;
    expect(isStringLiteral(`undefined`)).to.be.false;
    expect(isStringLiteral(`"application/json" | "application/octet-stream"`))
      .to.be.false;
  });
});

describe("#isNumericLiteral", () => {
  it("should return true if the string is numeric", () => {
    expect(isNumericLiteral(`123`)).to.be.true;
    expect(isNumericLiteral(`0.123`)).to.be.true;
  });

  it("should return false if the string is not numeric", () => {
    expect(isNumericLiteral(`string`)).to.be.false;
    expect(isNumericLiteral(`"123"`)).to.be.false;
  });
});

describe("#isBoolLiteral", () => {
  it("should return true if the string is boolean", () => {
    expect(isBoolLiteral(`true`)).to.be.true;
    expect(isBoolLiteral(`false`)).to.be.true;
  });

  it("should return false if the string is not boolean", () => {
    expect(isBoolLiteral(`unknown`)).to.be.false;
    expect(isBoolLiteral(`"true"`)).to.be.false;
    expect(isBoolLiteral(`"false"`)).to.be.false;
    expect(isBoolLiteral('"boolean"')).to.be.false;
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
    expect(isRecord(`Record<string, string[]>`)).to.be.true;
    expect(isRecord(`Record<string, Array<SimpleModel>>`)).to.be.true;
    expect(isRecord(`Record<string, SimpleModel>`)).to.be.true;
    expect(isRecord(`Record<string, "a" | "b">`)).to.be.true;
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
    expect(getRecordType(`Record<string, string[]>`)).to.equal("string[]");
    expect(getRecordType(`Record<string, Array<SimpleModel>>`)).to.equal(
      "Array<SimpleModel>"
    );
    expect(getRecordType(`Record<string, SimpleModel>`)).to.equal(
      "SimpleModel"
    );
    expect(getRecordType(`Record<string, "a" | "b">`)).to.equal(`"a" | "b"`);
  });
});

describe("#isArray", () => {
  it("should return true if the string is array", () => {
    expect(isArray(`string[]`)).to.be.true;
    expect(isArray(`Array<Model>`)).to.be.true;
    expect(isArray(`Array<string | number>`)).to.be.true;
    expect(isArray(`Array<A>`)).to.be.true;
    expect(isArray(`true[]`)).to.be.true;
    expect(isArray(`false[]`)).to.be.true;
    expect(isArray(`null[]`)).to.be.true;
    expect(isArray(`undefined[]`)).to.be.true;
    expect(isArray(`"string"[]`)).to.be.true;
    expect(isArray(`123[]`)).to.be.true;
  });

  it("should return false if the string is not array", () => {
    expect(isArray(`Record<string, string[]>`)).to.be.false;
  });
});

describe("#getArrayObjectType", () => {
  it("should return the type of the array", () => {
    expect(getArrayObjectType(`Array<Model>`)).to.equal("Model");
    expect(getArrayObjectType(`Array<A>`)).to.equal("A");
    expect(getArrayObjectType(`Array<string | number>`)).to.equal(
      "string | number"
    );
  });
});

describe("#getNativeArrayType", () => {
  it("should return the type of the array", () => {
    expect(getNativeArrayType(`string[]`)).to.equal("string");
    expect(getNativeArrayType(`"t"[]`)).to.equal(`"t"`);
    expect(getNativeArrayType(`true[]`)).to.equal(`true`);
    expect(getNativeArrayType(`123[]`)).to.equal(`123`);
  });
});

describe("#isUnion", () => {
  it("should return true if the string is union", () => {
    expect(isUnion(`string | number`)).to.be.true;
    expect(isUnion(`string | "a"`)).to.be.true;
    expect(isUnion(`1 | "a"`)).to.be.true;
    expect(isUnion(`Record<string, string> | string`)).to.be.true;
    expect(isUnion(`string[] | string`)).to.be.true;
    expect(isUnion(`"application/json" | "application/octet-stream"`)).to.be
      .true;
    expect(isUnion(`true | 123 | "application/xml"`)).to.be.true;
  });

  it("should return false if the string is not union", () => {
    expect(isUnion(`Record<string, string | "sss">`)).to.be.false;
    expect(isUnion(`"sss | tt"`)).to.be.false;
    expect(isUnion(`"application/json | application/octet-stream"`)).to.be
      .false;
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

describe("#leaveStringQuotes", () => {
  it("should return the string without quotes", () => {
    expect(leaveStringQuotes(`"string"`)).to.equal("string");
    expect(leaveStringQuotes(`'string'`)).to.equal("string");
  });

  it("should return the string without quotes", () => {
    expect(leaveStringQuotes(`"s" | "b"`)).to.equal(`"s" | "b"`);
    expect(leaveStringQuotes(`'s' | 'b'`)).to.equal(`'s' | 'b'`);
    expect(leaveStringQuotes(`"s" | 'b'`)).to.equal(`"s" | 'b'`);
    expect(leaveStringQuotes(`true`)).to.equal(`true`);
    expect(leaveStringQuotes(`'sss"`)).to.equal(`'sss"`);
  });
});

describe("#toTypeScriptTypeFromName", () => {
  it("should return the typeScriptType from the type name", () => {
    expect(toTypeScriptTypeFromName("string")).to.equal(TypeScriptType.string);
    expect(toTypeScriptTypeFromName("number")).to.equal(TypeScriptType.number);
    expect(toTypeScriptTypeFromName("boolean")).to.equal(
      TypeScriptType.boolean
    );
    expect(toTypeScriptTypeFromName("Date")).to.equal(TypeScriptType.date);
    expect(toTypeScriptTypeFromName("string[]")).to.equal(TypeScriptType.array);
    expect(toTypeScriptTypeFromName("Record<string, string>")).to.equal(
      TypeScriptType.record
    );
    expect(toTypeScriptTypeFromName("Date | string")).to.equal(
      TypeScriptType.union
    );
    expect(toTypeScriptTypeFromName(`"constant"`)).to.equal(
      TypeScriptType.constant
    );
    expect(toTypeScriptTypeFromName("unknown")).to.equal(
      TypeScriptType.unknown
    );
  });

  it("should return undefined if the type name is not supported", () => {
    expect(toTypeScriptTypeFromName("unknownType")).to.be.undefined;
  });
});

describe("#toTypeScriptTypeFromSchema", () => {
  it("should return the typeScriptType from the schema", () => {
    expect(
      toTypeScriptTypeFromSchema({ type: "string", name: "foo" })
    ).to.equal(TypeScriptType.string);
    expect(
      toTypeScriptTypeFromSchema({ type: "number", name: "foo" })
    ).to.equal(TypeScriptType.number);
    expect(
      toTypeScriptTypeFromSchema({ type: "boolean", name: "foo" })
    ).to.equal(TypeScriptType.boolean);
    expect(
      toTypeScriptTypeFromSchema({
        type: "string",
        name: "string",
        typeName: "Date | string",
        outputTypeName: "string"
      })
    ).to.equal(TypeScriptType.date);
    expect(
      toTypeScriptTypeFromSchema({ type: "object", name: "foo" })
    ).to.equal(TypeScriptType.object);
    expect(toTypeScriptTypeFromSchema({ type: "array", name: "foo" })).to.equal(
      TypeScriptType.array
    );
    expect(
      toTypeScriptTypeFromSchema({ type: "dictionary", name: "foo" })
    ).to.equal(TypeScriptType.record);
    expect(
      toTypeScriptTypeFromSchema({
        type: "union",
        name: "foo",
        enum: [{ type: "number", format: "int32" }]
      })
    ).to.equal(TypeScriptType.union);
    expect(
      toTypeScriptTypeFromSchema({
        type: "string",
        enum: ["val1", "val2"],
        name: "foo"
      })
    ).to.equal(TypeScriptType.enum);
    expect(
      toTypeScriptTypeFromSchema({
        isConstant: true,
        name: "foo",
        type: `"test"`
      })
    ).to.equal(TypeScriptType.constant);
    expect(
      toTypeScriptTypeFromSchema({ type: "unknown", name: "foo" })
    ).to.equal(TypeScriptType.unknown);
  });
  it("should return undefined if the schema is not supported", () => {
    expect(toTypeScriptTypeFromSchema({ type: "unknownType", name: "foo" })).to
      .be.undefined;
  });
});
