import { expect } from "chai";
import { BodyArrayClient } from "./generated/bodyArray/src/bodyArrayClient";

describe("Integration tests for BodyArrayClient", () => {
  let client: BodyArrayClient;

  beforeEach(() => {
    client = new BodyArrayClient();
  });

  describe("test empty", () => {
    it("get_empty returns an empty list", async () => {
      const response = await client.array.getEmpty();
      expect(response).to.deep.equal([]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });

    it("get_null returns an empty list", async () => {
      // TODO: Investigate expected behavior
      const response = await client.array.getNull();
      expect(response).to.deep.equal([]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });

    it("put_empty sends an empty list", async () => {
      const response = await client.array.putEmpty([]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getBooleanTfft", () => {
    it("returns [true, false, false, true]", async () => {
      const response = await client.array.getBooleanTfft();
      expect(response).to.deep.equal([true, false, false, true]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getIntegerValid", () => {
    it("returns [1, -1, 3, 300]", async () => {
      const response = await client.array.getIntegerValid();
      expect(response).to.deep.equal([1, -1, 3, 300]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#putIntegerValid", () => {
    it("sends [1, -1, 3, 300] successfully", async () => {
      const response = await client.array.putIntegerValid([1, -1, 3, 300]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getLongValid", () => {
    it("returns [1, -1, 3, 300]", async () => {
      const response = await client.array.getLongValid();
      expect(response).to.deep.equal([1, -1, 3, 300]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#putLongValid", () => {
    it("sends [1, -1, 3, 300] successfully", async () => {
      const response = await client.array.putLongValid([1, -1, 3, 300]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getFloatValid", () => {
    it("returns [0, -0.01, -1.2e20]", async () => {
      const response = await client.array.getFloatValid();
      expect(response).to.deep.equal([0, -0.01, -1.2e20]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#putFloatValid", () => {
    it("sends [0, -0.01, -1.2e20] successfully", async () => {
      const response = await client.array.putFloatValid([0, -0.01, -1.2e20]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getDoubleValid", () => {
    it("returns [0, -0.01, -1.2e20]", async () => {
      const response = await client.array.getDoubleValid();
      expect(response).to.deep.equal([0, -0.01, -1.2e20]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#putDoubleValid", () => {
    it("sends [0, -0.01, -1.2e20] successfully", async () => {
      const response = await client.array.putDoubleValid([0, -0.01, -1.2e20]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getStringValid", () => {
    it(`returns ["foo1", "foo2", "foo3"]`, async () => {
      const response = await client.array.getStringValid();
      expect(response).to.deep.equal(["foo1", "foo2", "foo3"]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#putStringValid", () => {
    it(`sends ["foo1", "foo2", "foo3"] successfully`, async () => {
      const response = await client.array.putStringValid([
        "foo1",
        "foo2",
        "foo3"
      ]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getStringWithNull", () => {
    it(`returns ["foo", null, "foo2"]`, async () => {
      const response = await client.array.getStringWithNull();
      expect(response).to.deep.equal(["foo", null, "foo2"]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getStringWithInvalid", () => {
    it(`returns ["foo", 123, "foo2"]`, async () => {
      const response = await client.array.getStringWithInvalid();
      expect(response).to.deep.equal(["foo", 123, "foo2"]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getUuidValid", () => {
    it("returns a list of uuids", async () => {
      const response = await client.array.getUuidValid();
      expect(response).to.deep.equal([
        "6dcc7237-45fe-45c4-8a6b-3a8a3f625652",
        "d1399005-30f7-40d6-8da6-dd7c89ad34db",
        "f42f6aa1-a5bc-4ddf-907e-5f915de43205"
      ]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#putUuidValid", () => {
    it(`sends a list of uuids successfully`, async () => {
      const response = await client.array.putUuidValid([
        "6dcc7237-45fe-45c4-8a6b-3a8a3f625652",
        "d1399005-30f7-40d6-8da6-dd7c89ad34db",
        "f42f6aa1-a5bc-4ddf-907e-5f915de43205"
      ]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getUuidInvalidChars", () => {
    it("returns a list of uuids and invalid chars", async () => {
      const response = await client.array.getUuidInvalidChars();
      expect(response).to.deep.equal([
        "6dcc7237-45fe-45c4-8a6b-3a8a3f625652",
        "foo"
      ]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getDateValid", () => {
    it("returns a list of dates", async () => {
      const response = await client.array.getDateValid();
      expect(response).to.deep.equal([
        new Date("2000-12-01T00:00:00.000Z"),
        new Date("1980-01-02T00:00:00.000Z"),
        new Date("1492-10-12T00:00:00.000Z")
      ]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#putDateValid", () => {
    it(`sends a list of dates successfully`, async () => {
      const response = await client.array.putDateValid([
        new Date("2000-12-01T00:00:00.000Z"),
        new Date("1980-01-02T00:00:00.000Z"),
        new Date("1492-10-12T00:00:00.000Z")
      ]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getDateTimeValid", () => {
    it("returns a list of dates", async () => {
      const response = await client.array.getDateTimeValid();
      expect(response).to.deep.equal([
        new Date("2000-12-01T00:00:01.000Z"),
        new Date("1980-01-02T00:11:35.000Z"),
        new Date("1492-10-12T10:15:01.000Z")
      ]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#putDateTimeValid", () => {
    it(`sends a list of dates successfully`, async () => {
      const response = await client.array.putDateTimeValid([
        new Date("2000-12-01T00:00:01.000Z"),
        new Date("1980-01-02T00:11:35.000Z"),
        new Date("1492-10-12T10:15:01.000Z")
      ]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getDateTimeRfc1123Valid", () => {
    it("returns a list of dates", async () => {
      const response = await client.array.getDateTimeRfc1123Valid();
      expect(response).to.deep.equal([
        new Date("Fri, 01 Dec 2000 00:00:01 GMT"),
        new Date("Wed, 02 Jan 1980 00:11:35 GMT"),
        new Date("Wed, 12 Oct 1492 10:15:01 GMT")
      ]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#putDateTimeRfc1123Valid", () => {
    it(`sends a list of dates successfully`, async () => {
      const response = await client.array.putDateTimeRfc1123Valid([
        new Date("Fri, 01 Dec 2000 00:00:01 GMT"),
        new Date("Wed, 02 Jan 1980 00:11:35 GMT"),
        new Date("Wed, 12 Oct 1492 10:15:01 GMT")
      ]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getDurationValid", () => {
    it("returns a list of duration strings", async () => {
      const response = await client.array.getDurationValid();
      expect(response).to.deep.equal(["P123DT22H14M12.011S", "P5DT1H0M0S"]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#putDurationValid", () => {
    it(`sends a list of duration strings successfully`, async () => {
      const response = await client.array.putDurationValid([
        "P123DT22H14M12.011S",
        "P5DT1H"
      ]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getByteValid", () => {
    it("returns a list of byte arrays", async () => {
      const response = await client.array.getByteValid();
      expect(response).to.deep.equal([
        Buffer.from([0xff, 0xff, 0xff, 0xfa]),
        Buffer.from([0x01, 0x02, 0x03]),
        Buffer.from([0x25, 0x29, 0x43])
      ]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#putByteValid", () => {
    it(`sends a list of duration strings successfully`, async () => {
      const response = await client.array.putByteValid([
        Buffer.from([0xff, 0xff, 0xff, 0xfa]),
        Buffer.from([0x01, 0x02, 0x03]),
        Buffer.from([0x25, 0x29, 0x43])
      ]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getByteInvalidNull", () => {
    it("returns [hex(AB, AC, AD), null]", async () => {
      const response = await client.array.getByteInvalidNull();
      expect(response).to.deep.equal([Buffer.from([0xab, 0xac, 0xad]), null]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getComplexNull", () => {
    it("returns an empty array", async () => {
      const response = await client.array.getComplexNull();
      expect(response).to.deep.equal([]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getComplexEmpty", () => {
    it("returns an empty array", async () => {
      const response = await client.array.getComplexEmpty();
      expect(response).to.deep.equal([]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getArrayValid", () => {
    it("returns an array of arrays", async () => {
      const response = await client.array.getArrayValid();
      expect(response).to.deep.equal([
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"]
      ]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#putArrayValid", () => {
    it(`sends a list of arrays successfully`, async () => {
      const response = await client.array.putArrayValid([
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"]
      ]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getArrayItemNull", () => {
    it("returns a list of arrays and null", async () => {
      const response = await client.array.getArrayItemNull();
      expect(response).to.deep.equal([["1", "2", "3"], null, ["7", "8", "9"]]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getArrayItemEmpty", () => {
    it("returns a list of arrays and an empty list", async () => {
      const response = await client.array.getArrayItemEmpty();
      expect(response).to.deep.equal([["1", "2", "3"], [], ["7", "8", "9"]]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getDictionaryValid", () => {
    it("returns an array of objects", async () => {
      const response = await client.array.getDictionaryValid();
      expect(response).to.deep.equal([
        { "1": "one", "2": "two", "3": "three" },
        { "4": "four", "5": "five", "6": "six" },
        { "7": "seven", "8": "eight", "9": "nine" }
      ]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#putDictionaryValid", () => {
    it(`sends a list of objects successfully`, async () => {
      const response = await client.array.putDictionaryValid([
        { "1": "one", "2": "two", "3": "three" },
        { "4": "four", "5": "five", "6": "six" },
        { "7": "seven", "8": "eight", "9": "nine" }
      ]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getDictionaryItemNull", () => {
    it("returns a list of objects and null", async () => {
      const response = await client.array.getDictionaryItemNull();
      expect(response).to.deep.equal([
        { "1": "one", "2": "two", "3": "three" },
        null,
        { "7": "seven", "8": "eight", "9": "nine" }
      ]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getDictionaryItemEmpty", () => {
    it("returns a list of objects and an empty object", async () => {
      const response = await client.array.getDictionaryItemEmpty();
      expect(response).to.deep.equal([
        { "1": "one", "2": "two", "3": "three" },
        {},
        { "7": "seven", "8": "eight", "9": "nine" }
      ]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getComplexItemNull", () => {
    it("returns a list of objects and null", async () => {
      const response = await client.array.getComplexItemNull();
      expect(response).to.deep.equal([
        { integer: 1, string: "2" },
        null,
        { integer: 5, string: "6" }
      ]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getComplexItemEmpty", () => {
    it("returns aa list of objects and an empty object", async () => {
      const response = await client.array.getComplexItemEmpty();
      expect(response).to.deep.equal([
        { integer: 1, string: "2" },
        {},
        { integer: 5, string: "6" }
      ]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getArrayNull", () => {
    it("returns an empty array", async () => {
      const response = await client.array.getArrayNull();
      expect(response).to.deep.equal([]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getArrayEmpty", () => {
    it("returns an empty array", async () => {
      const response = await client.array.getArrayEmpty();
      expect(response).to.deep.equal([]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getDictionaryNull", () => {
    it("returns an empty array", async () => {
      const response = await client.array.getDictionaryNull();
      expect(response).to.deep.equal([]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getDictionaryEmpty", () => {
    it("returns an empty array", async () => {
      const response = await client.array.getDictionaryEmpty();
      expect(response).to.deep.equal([]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getInvalid", () => {
    it("raises an error", async () => {
      try {
        await client.array.getInvalid();
        throw new Error("Test failure");
      } catch (err) {
        expect(err.code).to.equal("PARSE_ERROR");
      }
    });
  });

  describe("#getBooleanInvalidNull", () => {
    it("returns [true, null, false]", async () => {
      const response = await client.array.getBooleanInvalidNull();
      expect(response).to.deep.equal([true, null, false]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getBooleanInvalidString", () => {
    // TODO throw error during deserialization. Azure/azure-sdk-for-js/issues/9078
    it("returns [true, 'boolean', false]", async () => {
      const response = await client.array.getBooleanInvalidString();
      expect(response).to.deep.equal([true, "boolean", false]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getIntInvalidNull", () => {
    it("returns [1, null, 0]", async () => {
      // TODO throw error during deserialization. Azure/azure-sdk-for-js/issues/9078
      const response = await client.array.getIntInvalidNull();
      expect(response).to.deep.equal([1, null, 0]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getIntInvalidString", () => {
    it("returns [1, 'integer', 0]", async () => {
      // TODO: Should throw deserialization error. Azure/azure-sdk-for-js/issues/9078
      const response = await client.array.getIntInvalidString();
      expect(response).to.deep.equal([1, "integer", 0]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getLongInvalidNull", () => {
    it("returns [1, null, 0]", async () => {
      const response = await client.array.getLongInvalidNull();
      expect(response).to.deep.equal([1, null, 0]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getLongInvalidString", () => {
    it("returns [1, 'integer', 0]", async () => {
      const response = await client.array.getLongInvalidString();
      expect(response).to.deep.equal([1, "integer", 0]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getFloatInvalidNull", () => {
    it("returns [0.0, null, -1.2e20]", async () => {
      const response = await client.array.getFloatInvalidNull();
      expect(response).to.deep.equal([0.0, null, -1.2e20]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getFloatInvalidString", () => {
    it("returns [1.0, 'number', 0.0]", async () => {
      // TODO throw error during deserialization. Azure/azure-sdk-for-js/issues/9078
      const response = await client.array.getFloatInvalidString();
      expect(response).to.deep.equal([1.0, "number", 0.0]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getDoubleInvalidNull", () => {
    it("returns [0.0, null, -1.2e20]", async () => {
      const response = await client.array.getDoubleInvalidNull();
      expect(response).to.deep.equal([0.0, null, -1.2e20]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getDoubleInvalidString", () => {
    it("returns [1.0, 'number', 0.0]", async () => {
      // TODO: Should throw deserialization error. Azure/azure-sdk-for-js/issues/9078
      const response = await client.array.getDoubleInvalidString();
      expect(response).to.deep.equal([1.0, "number", 0.0]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getDateInvalidNull", () => {
    it("returns ['2012-01-01', null, '1776-07-04']", async () => {
      const response = await client.array.getDateInvalidNull();
      expect(response).to.deep.equal([
        new Date("2012-01-01"),
        null,
        new Date("1776-07-04")
      ]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getDateInvalidChars", () => {
    it("returns ['2011-03-22', 'date']", async () => {
      // TODO throw error during deserialization. Azure/azure-sdk-for-js/issues/9078
      const response = await client.array.getDateInvalidChars();
      expect(response).to.deep.equal([
        new Date("2011-03-22"),
        new Date("date")
      ]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getBase64Url", () => {
    it("returns a list of buffers", async () => {
      const response = await client.array.getBase64Url();
      expect(response).to.deep.equal([
        Buffer.from("a string that gets encoded with base64url"),
        Buffer.from("test string"),
        Buffer.from("Lorem ipsum")
      ]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getEnumValid", () => {
    it("returns ['foo1', 'foo2', 'foo3']", async () => {
      const response = await client.array.getEnumValid();
      expect(response).to.deep.equal(["foo1", "foo2", "foo3"]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#putEnumValid", () => {
    it("sends ['foo1', 'foo2', 'foo3'] successfully", async () => {
      const response = await client.array.putEnumValid([
        "foo1",
        "foo2",
        "foo3"
      ]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#getStringEnumValid", () => {
    it("returns ['foo1', 'foo2', 'foo3']", async () => {
      const response = await client.array.getStringEnumValid();
      expect(response).to.deep.equal(["foo1", "foo2", "foo3"]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });

  describe("#putStringEnumValid", () => {
    it("sends ['foo1', 'foo2', 'foo3'] successfully", async () => {
      const response = await client.array.putStringEnumValid([
        "foo1",
        "foo2",
        "foo3"
      ]);
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });
});
