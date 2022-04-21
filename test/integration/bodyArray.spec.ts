import { expect, assert } from "chai";
import { BodyArrayClient } from "./generated/bodyArray/src";
import { responseStatusChecker } from "../utils/responseStatusChecker";

describe("Integration tests for BodyArrayClient", () => {
  let client: BodyArrayClient;

  beforeEach(() => {
    client = new BodyArrayClient();
    client = new BodyArrayClient({ allowInsecureConnection: true });
  });

  describe("test empty", () => {
    it("get_empty returns an empty list", async () => {
      const response = await client.array.getEmpty(responseStatusChecker);
      expect(response).to.deep.equal([]);
    });

    it("get_null returns an empty list", async () => {
      // TODO: Investigate expected behavior
      const response = await client.array.getNull(responseStatusChecker);
      expect(response).to.deep.equal([]);
    });

    it("put_empty sends an empty list", async () => {
      await client.array.putEmpty([], responseStatusChecker);
    });
  });

  describe("#getBooleanTfft", () => {
    it("returns [true, false, false, true]", async () => {
      const response = await client.array.getBooleanTfft(responseStatusChecker);
      expect(response).to.deep.equal([true, false, false, true]);
    });
  });

  describe("#getIntegerValid", () => {
    it("returns [1, -1, 3, 300]", async () => {
      const response = await client.array.getIntegerValid(
        responseStatusChecker
      );
      expect(response).to.deep.equal([1, -1, 3, 300]);
    });
  });

  describe("#putIntegerValid", () => {
    it("sends [1, -1, 3, 300] successfully", async () => {
      await client.array.putIntegerValid(
        [1, -1, 3, 300],
        responseStatusChecker
      );
    });
  });

  describe("#getLongValid", () => {
    it("returns [1, -1, 3, 300]", async () => {
      const response = await client.array.getLongValid(responseStatusChecker);
      expect(response).to.deep.equal([1, -1, 3, 300]);
    });
  });

  describe("#putLongValid", () => {
    it("sends [1, -1, 3, 300] successfully", async () => {
      await client.array.putLongValid([1, -1, 3, 300], responseStatusChecker);
    });
  });

  describe("#getFloatValid", () => {
    it("returns [0, -0.01, -1.2e20]", async () => {
      const response = await client.array.getFloatValid(responseStatusChecker);
      expect(response).to.deep.equal([0, -0.01, -1.2e20]);
    });
  });

  describe("#putFloatValid", () => {
    it("sends [0, -0.01, -1.2e20] successfully", async () => {
      await client.array.putFloatValid(
        [0, -0.01, -1.2e20],
        responseStatusChecker
      );
    });
  });

  describe("#getDoubleValid", () => {
    it("returns [0, -0.01, -1.2e20]", async () => {
      const response = await client.array.getDoubleValid(responseStatusChecker);
      expect(response).to.deep.equal([0, -0.01, -1.2e20]);
    });
  });

  describe("#putDoubleValid", () => {
    it("sends [0, -0.01, -1.2e20] successfully", async () => {
      await client.array.putDoubleValid(
        [0, -0.01, -1.2e20],
        responseStatusChecker
      );
    });
  });

  describe("#getStringValid", () => {
    it(`returns ["foo1", "foo2", "foo3"]`, async () => {
      const response = await client.array.getStringValid(responseStatusChecker);
      expect(response).to.deep.equal(["foo1", "foo2", "foo3"]);
    });
  });

  describe("#putStringValid", () => {
    it(`sends ["foo1", "foo2", "foo3"] successfully`, async () => {
      await client.array.putStringValid(
        ["foo1", "foo2", "foo3"],
        responseStatusChecker
      );
    });
  });

  describe("#getStringWithNull", () => {
    it(`returns ["foo", null, "foo2"]`, async () => {
      const response = await client.array.getStringWithNull(
        responseStatusChecker
      );
      expect(response).to.deep.equal(["foo", null, "foo2"]);
    });
  });

  describe("#getStringWithInvalid", () => {
    it(`returns ["foo", 123, "foo2"]`, async () => {
      const response = await client.array.getStringWithInvalid(
        responseStatusChecker
      );
      expect(response).to.deep.equal(["foo", 123, "foo2"]);
    });
  });

  describe("#getUuidValid", () => {
    it("returns a list of uuids", async () => {
      const response = await client.array.getUuidValid(responseStatusChecker);
      expect(response).to.deep.equal([
        "6dcc7237-45fe-45c4-8a6b-3a8a3f625652",
        "d1399005-30f7-40d6-8da6-dd7c89ad34db",
        "f42f6aa1-a5bc-4ddf-907e-5f915de43205"
      ]);
    });
  });

  describe("#putUuidValid", () => {
    it(`sends a list of uuids successfully`, async () => {
      await client.array.putUuidValid(
        [
          "6dcc7237-45fe-45c4-8a6b-3a8a3f625652",
          "d1399005-30f7-40d6-8da6-dd7c89ad34db",
          "f42f6aa1-a5bc-4ddf-907e-5f915de43205"
        ],
        {
          onResponse: response => {
            assert.equal(response.status, 200, "Unexpected status code.");
          }
        }
      );
    });
  });

  describe("#getUuidInvalidChars", () => {
    it("returns a list of uuids and invalid chars", async () => {
      const response = await client.array.getUuidInvalidChars(
        responseStatusChecker
      );
      expect(response).to.deep.equal([
        "6dcc7237-45fe-45c4-8a6b-3a8a3f625652",
        "foo"
      ]);
    });
  });

  describe("#getDateValid", () => {
    it("returns a list of dates", async () => {
      const response = await client.array.getDateValid(responseStatusChecker);
      expect(response).to.deep.equal([
        new Date("2000-12-01T00:00:00.000Z"),
        new Date("1980-01-02T00:00:00.000Z"),
        new Date("1492-10-12T00:00:00.000Z")
      ]);
    });
  });

  describe("#putDateValid", () => {
    it(`sends a list of dates successfully`, async () => {
      await client.array.putDateValid(
        [
          new Date("2000-12-01T00:00:00.000Z"),
          new Date("1980-01-02T00:00:00.000Z"),
          new Date("1492-10-12T00:00:00.000Z")
        ],
        {
          onResponse: response => {
            assert.equal(response.status, 200, "Unexpected status code.");
          }
        }
      );
    });
  });

  describe("#getDateTimeValid", () => {
    it("returns a list of dates", async () => {
      const response = await client.array.getDateTimeValid(
        responseStatusChecker
      );
      expect(response).to.deep.equal([
        new Date("2000-12-01T00:00:01.000Z"),
        new Date("1980-01-01T23:11:35.000Z"),
        new Date("1492-10-12T18:15:01.000Z")
      ]);
    });
  });

  describe("#putDateTimeValid", () => {
    it(`sends a list of dates successfully`, async () => {
      await client.array.putDateTimeValid(
        [
          new Date("2000-12-01T00:00:01.000Z"),
          new Date("1980-01-02T00:11:35.000Z"),
          new Date("1492-10-12T10:15:01.000Z")
        ],
        {
          onResponse: response => {
            assert.equal(response.status, 200, "Unexpected status code.");
          }
        }
      );
    });
  });

  describe("#getDateTimeRfc1123Valid", () => {
    it("returns a list of dates", async () => {
      const response = await client.array.getDateTimeRfc1123Valid(
        responseStatusChecker
      );
      expect(response).to.deep.equal([
        new Date("Fri, 01 Dec 2000 00:00:01 GMT"),
        new Date("Wed, 02 Jan 1980 00:11:35 GMT"),
        new Date("Wed, 12 Oct 1492 10:15:01 GMT")
      ]);
    });
  });

  describe("#putDateTimeRfc1123Valid", () => {
    it(`sends a list of dates successfully`, async () => {
      await client.array.putDateTimeRfc1123Valid(
        [
          new Date("Fri, 01 Dec 2000 00:00:01 GMT"),
          new Date("Wed, 02 Jan 1980 00:11:35 GMT"),
          new Date("Wed, 12 Oct 1492 10:15:01 GMT")
        ],
        {
          onResponse: response => {
            assert.equal(response.status, 200, "Unexpected status code.");
          }
        }
      );
    });
  });

  describe("#getDurationValid", () => {
    it("returns a list of duration strings", async () => {
      const response = await client.array.getDurationValid(
        responseStatusChecker
      );
      expect(response).to.deep.equal(["P123DT22H14M12.011S", "P5DT1H0M0S"]);
    });
  });

  describe("#putDurationValid", () => {
    it(`sends a list of duration strings successfully`, async () => {
      await client.array.putDurationValid(
        ["P123DT22H14M12.011S", "P5DT1H"],
        responseStatusChecker
      );
    });
  });

  describe("#getByteValid", () => {
    it("returns a list of byte arrays", async () => {
      const response = await client.array.getByteValid(responseStatusChecker);
      expect(response).to.deep.equal([
        new Uint8Array([0xff, 0xff, 0xff, 0xfa]),
        new Uint8Array([0x01, 0x02, 0x03]),
        new Uint8Array([0x25, 0x29, 0x43])
      ]);
    });
  });

  describe("#putByteValid", () => {
    it(`sends a list of duration strings successfully`, async () => {
      await client.array.putByteValid(
        [
          new Uint8Array([0xff, 0xff, 0xff, 0xfa]),
          new Uint8Array([0x01, 0x02, 0x03]),
          new Uint8Array([0x25, 0x29, 0x43])
        ],
        {
          onResponse: response => {
            assert.equal(response.status, 200, "Unexpected status code.");
          }
        }
      );
    });
  });

  describe("#getByteInvalidNull", () => {
    it("returns [hex(AB, AC, AD), null]", async () => {
      const response = await client.array.getByteInvalidNull(
        responseStatusChecker
      );
      expect(response).to.deep.equal([
        new Uint8Array([0xab, 0xac, 0xad]),
        null
      ]);
    });
  });

  describe("#getComplexNull", () => {
    it("returns an empty array", async () => {
      const response = await client.array.getComplexNull(responseStatusChecker);
      expect(response).to.deep.equal([]);
    });
  });

  describe("#getComplexEmpty", () => {
    it("returns an empty array", async () => {
      const response = await client.array.getComplexEmpty(
        responseStatusChecker
      );
      expect(response).to.deep.equal([]);
    });
  });

  describe("#getArrayValid", () => {
    it("returns an array of arrays", async () => {
      const response = await client.array.getArrayValid(responseStatusChecker);
      expect(response).to.deep.equal([
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"]
      ]);
    });
  });

  describe("#putArrayValid", () => {
    it(`sends a list of arrays successfully`, async () => {
      await client.array.putArrayValid(
        [
          ["1", "2", "3"],
          ["4", "5", "6"],
          ["7", "8", "9"]
        ],
        {
          onResponse: response => {
            assert.equal(response.status, 200, "Unexpected status code.");
          }
        }
      );
    });
  });

  describe("#getArrayItemNull", () => {
    it("returns a list of arrays and null", async () => {
      const response = await client.array.getArrayItemNull(
        responseStatusChecker
      );
      expect(response).to.deep.equal([["1", "2", "3"], null, ["7", "8", "9"]]);
    });
  });

  describe("#getArrayItemEmpty", () => {
    it("returns a list of arrays and an empty list", async () => {
      const response = await client.array.getArrayItemEmpty(
        responseStatusChecker
      );
      expect(response).to.deep.equal([["1", "2", "3"], [], ["7", "8", "9"]]);
    });
  });

  describe("#getArrayComplex", () => {
    it("returns a list of complex arrays", async () => {
      const response = await client.array.getComplexValid(
        responseStatusChecker
      );
      expect(response).to.deep.equal([
        { integer: 1, string: "2" },
        { integer: 3, string: "4" },
        { integer: 5, string: "6" }
      ]);
    });
  });

  describe("#getArrayDateTimeWithInvalidChars", () => {
    it("returns an invalid date in the array", async () => {
      const response = await client.array.getDateTimeInvalidChars(
        responseStatusChecker
      );
      expect(response).to.deep.equal([
        new Date("2000-12-01T00:00:01.000Z"),
        new Date("date-time") //Invalid Value
      ]);
    });
  });

  describe("#getArrayDateTimeWithNull", () => {
    it("returns null date in the array", async () => {
      const response = await client.array.getDateTimeInvalidNull(
        responseStatusChecker
      );
      expect(response).to.deep.equal([
        new Date("2000-12-01T00:00:01.000Z"),
        null
      ]);
    });
  });

  describe("#putArrayBooleanValid", () => {
    it("sends an array of boolean values successfully", async () => {
      await client.array.putBooleanTfft(
        [true, false, false, true],
        responseStatusChecker
      );
    });
  });

  describe("#putArrayComplexValid", () => {
    it("sends an array of complex objects successfully", async () => {
      await client.array.putComplexValid(
        [
          { integer: 1, string: "2" },
          { integer: 3, string: "4" },
          { integer: 5, string: "6" }
        ],
        {
          onResponse: response => {
            assert.equal(response.status, 200, "Unexpected status code.");
          }
        }
      );
    });
  });

  describe("#getDictionaryValid", () => {
    it("returns an array of objects", async () => {
      const response = await client.array.getDictionaryValid(
        responseStatusChecker
      );
      expect(response).to.deep.equal([
        { "1": "one", "2": "two", "3": "three" },
        { "4": "four", "5": "five", "6": "six" },
        { "7": "seven", "8": "eight", "9": "nine" }
      ]);
    });
  });

  describe("#putDictionaryValid", () => {
    it(`sends a list of objects successfully`, async () => {
      await client.array.putDictionaryValid(
        [
          { "1": "one", "2": "two", "3": "three" },
          { "4": "four", "5": "five", "6": "six" },
          { "7": "seven", "8": "eight", "9": "nine" }
        ],
        {
          onResponse: response => {
            assert.equal(response.status, 200, "Unexpected status code.");
          }
        }
      );
    });
  });

  describe("#getDictionaryItemNull", () => {
    it("returns a list of objects and null", async () => {
      const response = await client.array.getDictionaryItemNull(
        responseStatusChecker
      );
      expect(response).to.deep.equal([
        { "1": "one", "2": "two", "3": "three" },
        null,
        { "7": "seven", "8": "eight", "9": "nine" }
      ]);
    });
  });

  describe("#getDictionaryItemEmpty", () => {
    it("returns a list of objects and an empty object", async () => {
      const response = await client.array.getDictionaryItemEmpty(
        responseStatusChecker
      );
      expect(response).to.deep.equal([
        { "1": "one", "2": "two", "3": "three" },
        {},
        { "7": "seven", "8": "eight", "9": "nine" }
      ]);
    });
  });

  describe("#getComplexItemNull", () => {
    it("returns a list of objects and null", async () => {
      const response = await client.array.getComplexItemNull(
        responseStatusChecker
      );
      expect(response).to.deep.equal([
        { integer: 1, string: "2" },
        null,
        { integer: 5, string: "6" }
      ]);
    });
  });

  describe("#getComplexItemEmpty", () => {
    it("returns aa list of objects and an empty object", async () => {
      const response = await client.array.getComplexItemEmpty(
        responseStatusChecker
      );
      expect(response).to.deep.equal([
        { integer: 1, string: "2" },
        {},
        { integer: 5, string: "6" }
      ]);
    });
  });

  describe("#getArrayNull", () => {
    it("returns an empty array", async () => {
      const response = await client.array.getArrayNull(responseStatusChecker);
      expect(response).to.deep.equal([]);
    });
  });

  describe("#getArrayEmpty", () => {
    it("returns an empty array", async () => {
      const response = await client.array.getArrayEmpty(responseStatusChecker);
      expect(response).to.deep.equal([]);
    });
  });

  describe("#getDictionaryNull", () => {
    it("returns an empty array", async () => {
      const response = await client.array.getDictionaryNull(
        responseStatusChecker
      );
      expect(response).to.deep.equal([]);
    });
  });

  describe("#getDictionaryEmpty", () => {
    it("returns an empty array", async () => {
      const response = await client.array.getDictionaryEmpty(
        responseStatusChecker
      );
      expect(response).to.deep.equal([]);
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
      const response = await client.array.getBooleanInvalidNull(
        responseStatusChecker
      );
      expect(response).to.deep.equal([true, null, false]);
    });
  });

  describe("#getBooleanInvalidString", () => {
    // TODO throw error during deserialization. Azure/azure-sdk-for-js/issues/9078
    it("returns [true, 'boolean', false]", async () => {
      const response = await client.array.getBooleanInvalidString(
        responseStatusChecker
      );
      expect(response).to.deep.equal([true, "boolean", false]);
    });
  });

  describe("#getIntInvalidNull", () => {
    it("returns [1, null, 0]", async () => {
      // TODO throw error during deserialization. Azure/azure-sdk-for-js/issues/9078
      const response = await client.array.getIntInvalidNull(
        responseStatusChecker
      );
      expect(response).to.deep.equal([1, null, 0]);
    });
  });

  describe("#getIntInvalidString", () => {
    it("returns [1, 'integer', 0]", async () => {
      // TODO: Should throw deserialization error. Azure/azure-sdk-for-js/issues/9078
      const response = await client.array.getIntInvalidString(
        responseStatusChecker
      );
      expect(response).to.deep.equal([1, "integer", 0]);
    });
  });

  describe("#getLongInvalidNull", () => {
    it("returns [1, null, 0]", async () => {
      const response = await client.array.getLongInvalidNull(
        responseStatusChecker
      );
      expect(response).to.deep.equal([1, null, 0]);
    });
  });

  describe("#getLongInvalidString", () => {
    it("returns [1, 'integer', 0]", async () => {
      const response = await client.array.getLongInvalidString(
        responseStatusChecker
      );
      expect(response).to.deep.equal([1, "integer", 0]);
    });
  });

  describe("#getFloatInvalidNull", () => {
    it("returns [0.0, null, -1.2e20]", async () => {
      const response = await client.array.getFloatInvalidNull(
        responseStatusChecker
      );
      expect(response).to.deep.equal([0.0, null, -1.2e20]);
    });
  });

  describe("#getFloatInvalidString", () => {
    it("returns [1.0, 'number', 0.0]", async () => {
      // TODO throw error during deserialization. Azure/azure-sdk-for-js/issues/9078
      const response = await client.array.getFloatInvalidString(
        responseStatusChecker
      );
      expect(response).to.deep.equal([1.0, "number", 0.0]);
    });
  });

  describe("#getDoubleInvalidNull", () => {
    it("returns [0.0, null, -1.2e20]", async () => {
      const response = await client.array.getDoubleInvalidNull(
        responseStatusChecker
      );
      expect(response).to.deep.equal([0.0, null, -1.2e20]);
    });
  });

  describe("#getDoubleInvalidString", () => {
    it("returns [1.0, 'number', 0.0]", async () => {
      // TODO: Should throw deserialization error. Azure/azure-sdk-for-js/issues/9078
      const response = await client.array.getDoubleInvalidString(
        responseStatusChecker
      );
      expect(response).to.deep.equal([1.0, "number", 0.0]);
    });
  });

  describe("#getDateInvalidNull", () => {
    it("returns ['2012-01-01', null, '1776-07-04']", async () => {
      const response = await client.array.getDateInvalidNull(
        responseStatusChecker
      );
      expect(response).to.deep.equal([
        new Date("2012-01-01"),
        null,
        new Date("1776-07-04")
      ]);
    });
  });

  describe("#getDateInvalidChars", () => {
    it("returns ['2011-03-22', 'date']", async () => {
      // TODO throw error during deserialization. Azure/azure-sdk-for-js/issues/9078
      const response = await client.array.getDateInvalidChars(
        responseStatusChecker
      );
      expect(response).to.deep.equal([
        new Date("2011-03-22"),
        new Date("date")
      ]);
    });
  });

  describe("#getBase64Url", () => {
    it("returns a list of buffers", async () => {
      const response = await client.array.getBase64Url(responseStatusChecker);
      const encoder = new TextEncoder();
      expect(response).to.deep.equal([
        encoder.encode("a string that gets encoded with base64url"),
        encoder.encode("test string"),
        encoder.encode("Lorem ipsum")
      ]);
    });
  });

  describe("#getEnumValid", () => {
    it("returns ['foo1', 'foo2', 'foo3']", async () => {
      const response = await client.array.getEnumValid(responseStatusChecker);
      expect(response).to.deep.equal(["foo1", "foo2", "foo3"]);
    });
  });

  describe("#putEnumValid", () => {
    it("sends ['foo1', 'foo2', 'foo3'] successfully", async () => {
      await client.array.putEnumValid(
        ["foo1", "foo2", "foo3"],
        responseStatusChecker
      );
    });
  });

  describe("#getStringEnumValid", () => {
    it("returns ['foo1', 'foo2', 'foo3']", async () => {
      const response = await client.array.getStringEnumValid(
        responseStatusChecker
      );
      expect(response).to.deep.equal(["foo1", "foo2", "foo3"]);
    });
  });

  describe("#putStringEnumValid", () => {
    it("sends ['foo1', 'foo2', 'foo3'] successfully", async () => {
      await client.array.putStringEnumValid(
        ["foo1", "foo2", "foo3"],
        responseStatusChecker
      );
    });
  });
});
