import { assert } from "chai";
import {
  BodyDictionaryClient,
  DictionaryGetBase64UrlResponse,
  DictionaryGetBooleanTfftResponse,
  DictionaryGetBooleanInvalidNullResponse,
  DictionaryGetBooleanInvalidStringResponse,
  DictionaryGetIntegerValidResponse,
  DictionaryGetIntInvalidNullResponse,
  DictionaryGetIntInvalidStringResponse,
  DictionaryGetLongValidResponse,
  DictionaryGetLongInvalidNullResponse,
  DictionaryGetLongInvalidStringResponse,
  DictionaryGetFloatValidResponse,
  DictionaryGetFloatInvalidNullResponse,
  DictionaryGetFloatInvalidStringResponse
} from "./generated/bodyDictionary/src";
import { responseStatusChecker } from "../utils/responseStatusChecker";

describe("BodyDictionary", () => {
  let client: BodyDictionaryClient;

  beforeEach(() => {
    client = new BodyDictionaryClient({ allowInsecureConnection: true });
  });

  it("should getArrayItemEmpty", async () => {
    const result = await client.dictionary.getArrayItemEmpty(
      responseStatusChecker
    );
    assert.deepEqual(result, {
      "0": ["1", "2", "3"],
      "1": [],
      "2": ["7", "8", "9"]
    });
  });

  // FIXME we should de-serialize the incoming value as a null
  // https://github.com/Azure/azure-sdk-for-js/issues/12009
  it("should getArrayNull", async () => {
    const result = await client.dictionary.getArrayNull(responseStatusChecker);
    assert.deepEqual(result, {});
  });

  it("should getArrayEmpty", async () => {
    const result = await client.dictionary.getArrayEmpty(responseStatusChecker);
    assert.deepEqual(result, {});
  });

  it("should getArrayItemNull", async () => {
    const result = await client.dictionary.getArrayItemNull(
      responseStatusChecker
    );
    const expected: { [propertyName: string]: string[] | null } = {
      "0": ["1", "2", "3"],
      "1": null,
      "2": ["7", "8", "9"]
    };
    assert.deepEqual(result, expected);
  });

  it("should getArrayValid", async () => {
    const result = await client.dictionary.getArrayValid(responseStatusChecker);
    const expected: { [propertyName: string]: string[] } = {
      "0": ["1", "2", "3"],
      "1": ["4", "5", "6"],
      "2": ["7", "8", "9"]
    };
    assert.deepEqual(result, expected);
  });

  it("should getComplexEmpty", async () => {
    const result = await client.dictionary.getComplexEmpty(
      responseStatusChecker
    );
    assert.deepEqual(result, {});
  });

  // FIXME we should de-serialize the incoming value as a null
  // https://github.com/Azure/azure-sdk-for-js/issues/12009
  it("should getComplexNull", async () => {
    const result = await client.dictionary.getComplexNull(
      responseStatusChecker
    );
    assert.deepEqual(result, {});
  });

  it("should getComplexItemNull", async () => {
    const result = await client.dictionary.getComplexItemNull(
      responseStatusChecker
    );
    assert.deepEqual(result, {
      "0": { integer: 1, string: "2" },
      "1": null,
      "2": { integer: 5, string: "6" }
    });
  });

  it("should getComplexValid", async () => {
    const result = await client.dictionary.getComplexValid(
      responseStatusChecker
    );
    assert.deepEqual(result, {
      "0": { integer: 1, string: "2" },
      "1": { integer: 3, string: "4" },
      "2": { integer: 5, string: "6" }
    });
  });

  it("should putComplexValid", async () => {
    await client.dictionary.putComplexValid(
      {
        "0": { integer: 1, string: "2" },
        "1": { integer: 3, string: "4" },
        "2": { integer: 5, string: "6" }
      },
      responseStatusChecker
    );
  });

  it("should getComplexItemEmpty", async () => {
    const result = await client.dictionary.getComplexItemEmpty(
      responseStatusChecker
    );
    assert.deepEqual(result, {
      "0": { integer: 1, string: "2" },
      "1": {},
      "2": { integer: 5, string: "6" }
    });
  });

  // FIXME we should de-serialize the incoming value as a null
  // https://github.com/Azure/azure-sdk-for-js/issues/12009
  it("should getDictionaryNull", async () => {
    const result = await client.dictionary.getDictionaryNull(
      responseStatusChecker
    );
    assert.deepEqual(result, {});
  });

  it("should getDictionaryEmpty", async () => {
    const result = await client.dictionary.getDictionaryEmpty(
      responseStatusChecker
    );
    assert.deepEqual(result, {});
  });

  it("should getDictionaryItemEmpty", async () => {
    const result = await client.dictionary.getDictionaryItemEmpty(
      responseStatusChecker
    );
    const expected = {
      "0": { "1": "one", "2": "two", "3": "three" },
      "1": {},
      "2": { "7": "seven", "8": "eight", "9": "nine" }
    };
    assert.deepEqual(result, expected);
  });

  it("should getDictionaryItemNull", async () => {
    const result = await client.dictionary.getDictionaryItemNull(
      responseStatusChecker
    );
    const expected = {
      "0": { "1": "one", "2": "two", "3": "three" },
      "1": null as any,
      "2": { "7": "seven", "8": "eight", "9": "nine" }
    };
    assert.deepEqual(result, expected);
  });

  it("should getDictionaryValid", async () => {
    const result = await client.dictionary.getDictionaryValid(
      responseStatusChecker
    );
    const expected = {
      "0": { "1": "one", "2": "two", "3": "three" },
      "1": { "4": "four", "5": "five", "6": "six" },
      "2": { "7": "seven", "8": "eight", "9": "nine" }
    };
    assert.deepEqual(result, expected);
  });

  it("should putArrayValid", async () => {
    await client.dictionary.putArrayValid(
      {
        "0": ["1", "2", "3"],
        "1": ["4", "5", "6"],
        "2": ["7", "8", "9"]
      },
      responseStatusChecker
    );
  });

  it("should putDictionaryValid", async () => {
    await client.dictionary.putDictionaryValid(
      {
        "0": { "1": "one", "2": "two", "3": "three" },
        "1": { "4": "four", "5": "five", "6": "six" },
        "2": { "7": "seven", "8": "eight", "9": "nine" }
      },
      responseStatusChecker
    );
  });

  it("should get empty", async () => {
    const result = await client.dictionary.getEmpty();
    assert.lengthOf(Object.keys(result), 0);
  });

  it("should put an empty dictionary", async () => {
    await client.dictionary.putEmpty({}, responseStatusChecker);
  });

  it("should get null dictionary", async () => {
    const response = await client.dictionary.getNull();
    assert.deepEqual(response, {});
  });

  it("should get an invalid dictionary", async () => {
    let foundError = false;
    try {
      await client.dictionary.getInvalid();
    } catch {
      foundError = true;
    } finally {
      assert.isTrue(foundError);
    }
  });

  it("should get null value", async () => {
    const result = await client.dictionary.getNullValue();
    assert.equal(result["key1"], null);
  });

  it("should throw error when getting a null key", async () => {
    let foundError = false;
    try {
      await client.dictionary.getNullKey();
    } catch {
      foundError = true;
    } finally {
      assert.isTrue(foundError);
    }
  });

  it("should get empty string key", async () => {
    const result = await client.dictionary.getEmptyStringKey();
    assert.equal(result[""], "val1");
  });

  it("should get base64 dictionaries", async () => {
    const encoder = new TextEncoder();
    const stringToByteArray = (str: string) => encoder.encode(str);
    const base64Url1 = stringToByteArray(
      "a string that gets encoded with base64url"
    );
    const base64Url2 = stringToByteArray("test string");
    const base64Url3 = stringToByteArray("Lorem ipsum");
    const expected: Partial<DictionaryGetBase64UrlResponse> = {
      "0": base64Url1,
      "1": base64Url2,
      "2": base64Url3
    };

    const result = await client.dictionary.getBase64Url();
    assert.deepEqual(result, expected);
  });

  it("should get boolean dictionaries", async () => {
    const expected: Partial<DictionaryGetBooleanTfftResponse> = {
      "0": true,
      "1": false,
      "2": false,
      "3": true
    };
    const result = await client.dictionary.getBooleanTfft();
    assert.deepEqual(result, expected);
  });

  it("should put boolean dictionaries", async () => {
    const testDictionary: { [propertyName: string]: boolean } = {
      "0": true,
      "1": false,
      "2": false,
      "3": true
    };

    await client.dictionary.putBooleanTfft(
      testDictionary,
      responseStatusChecker
    );
  });

  it("should get boolean dictionaries with null value", async () => {
    const expected: Partial<DictionaryGetBooleanInvalidNullResponse> = {
      "0": true,
      "1": null as any,
      "2": false
    };

    const result = await client.dictionary.getBooleanInvalidNull();
    assert.deepEqual(result, expected);
  });

  it("should get boolean dictionaries with string value", async () => {
    const expected: Partial<DictionaryGetBooleanInvalidStringResponse> = {
      "0": true,
      "1": "boolean" as any,
      "2": false
    };

    const result = await client.dictionary.getBooleanInvalidString();
    assert.deepEqual(result, expected);
  });

  it("should get integer dictionaries", async () => {
    const dictionary: Partial<DictionaryGetIntegerValidResponse> = {
      "0": 1,
      "1": -1,
      "2": 3,
      "3": 300
    };

    const result = await client.dictionary.getIntegerValid();
    assert.deepEqual(result, dictionary);
  });

  it("should put integer dictionaries", async () => {
    const dictionary: { [propertyName: string]: number } = {
      "0": 1,
      "1": -1,
      "2": 3,
      "3": 300
    };

    await client.dictionary.putIntegerValid(dictionary, responseStatusChecker);
  });

  it("should get integer dictionaries with null value", async () => {
    const dictionary: Partial<DictionaryGetIntInvalidNullResponse> = {
      "0": 1,
      "1": null as any,
      "2": 0
    };

    const result = await client.dictionary.getIntInvalidNull();
    assert.deepEqual(result, dictionary);
  });

  it("should get integer dictionaries with string value", async () => {
    const dictionary: Partial<DictionaryGetIntInvalidStringResponse> = {
      "0": 1,
      "1": "integer" as any,
      "2": 0
    };

    const result = await client.dictionary.getIntInvalidString();
    assert.deepEqual(result, dictionary);
  });

  it("should get long dictionaries", async () => {
    const dictionary: Partial<DictionaryGetLongValidResponse> = {
      "0": 1,
      "1": -1,
      "2": 3,
      "3": 300
    };

    const result = await client.dictionary.getLongValid();
    assert.deepEqual(result, dictionary);
  });

  it("should put long dictionaries", async () => {
    const dictionary: { [propertyName: string]: number } = {
      "0": 1,
      "1": -1,
      "2": 3,
      "3": 300
    };

    await client.dictionary.putLongValid(dictionary, responseStatusChecker);
  });

  it("should get long dictionaries with null value", async () => {
    const dictionary: Partial<DictionaryGetLongInvalidNullResponse> = {
      "0": 1,
      "1": null as any,
      "2": 0
    };

    const result = await client.dictionary.getLongInvalidNull();
    assert.deepEqual(result, dictionary);
  });

  it("should get long dictionaries with string value", async () => {
    const dictionary: Partial<DictionaryGetLongInvalidStringResponse> = {
      "0": 1,
      "1": "integer" as any,
      "2": 0
    };
    const result = await client.dictionary.getLongInvalidString();
    assert.deepEqual(result, dictionary);
  });

  it("should get float dictionaries", async () => {
    const dictionary: Partial<DictionaryGetFloatValidResponse> = {
      "0": 0,
      "1": -0.01,
      "2": -1.2e20
    };
    const result = await client.dictionary.getFloatValid();
    assert.deepEqual(result, dictionary);
  });

  it("should put float dictionaries", async () => {
    const dictionary: { [propertyName: string]: number } = {
      "0": 0,
      "1": -0.01,
      "2": -1.2e20
    };
    await client.dictionary.putFloatValid(dictionary, responseStatusChecker);
  });

  it("should get float dictionaries with null value", async () => {
    const dictionary: Partial<DictionaryGetFloatInvalidNullResponse> = {
      "0": 0.0,
      "1": null as any,
      "2": -1.2e20
    };
    const result = await client.dictionary.getFloatInvalidNull();
    assert.deepEqual(result, dictionary);
  });

  it("should get float dictionaries with string value", async () => {
    const dictionary: Partial<DictionaryGetFloatInvalidStringResponse> = {
      "0": 1,
      "1": "number" as any,
      "2": 0
    };
    const result = await client.dictionary.getFloatInvalidString();
    assert.deepEqual(result, dictionary);
  });

  it("should get double dictionaries", async () => {
    const dictionary: { [propertyName: string]: number } = {
      "0": 0,
      "1": -0.01,
      "2": -1.2e20
    };
    const result = await client.dictionary.getDoubleValid();
    assert.deepEqual(result, dictionary);
  });

  it("should put double dictionaries", async () => {
    const dictionary: { [propertyName: string]: number } = {
      "0": 0,
      "1": -0.01,
      "2": -1.2e20
    };
    await client.dictionary.putDoubleValid(dictionary, responseStatusChecker);
  });

  it("should get double dictionaries with null value", async () => {
    const dictionary: { [propertyName: string]: number } = {
      "0": 0.0,
      "1": null as any,
      "2": -1.2e20
    };
    const result = await client.dictionary.getDoubleInvalidNull();
    assert.deepEqual(result, dictionary);
  });

  it("should get double dictionaries with string value", async () => {
    const dictionary: { [propertyName: string]: number } = {
      "0": 1,
      "1": "number" as any,
      "2": 0
    };
    const result = await client.dictionary.getDoubleInvalidString();
    assert.deepEqual(result, dictionary);
  });

  it("should get string dictionaries", async () => {
    const dictionary: { [propertyName: string]: string } = {
      "0": "foo1",
      "1": "foo2",
      "2": "foo3"
    };
    const result = await client.dictionary.getStringValid();
    assert.deepEqual(result, dictionary);
  });

  it("should put string dictionaries", async () => {
    const dictionary: { [propertyName: string]: string } = {
      "0": "foo1",
      "1": "foo2",
      "2": "foo3"
    };
    await client.dictionary.putStringValid(dictionary, responseStatusChecker);
  });

  it("should get string dictionaries with null value", async () => {
    const dictionary: { [propertyName: string]: string } = {
      "0": "foo",
      "1": null as any,
      "2": "foo2"
    };
    const result = await client.dictionary.getStringWithNull();
    assert.deepEqual(result, dictionary);
  });

  it("should get string dictionaries with number value", async () => {
    const dictionary: { [propertyName: string]: string } = {
      "0": "foo",
      "1": 123 as any,
      "2": "foo2"
    };
    const result = await client.dictionary.getStringWithInvalid();
    assert.deepEqual(result, dictionary);
  });

  it("should get date dictionaries", async () => {
    const dictionary: { [propertyName: string]: Date } = {
      0: new Date("2000-12-01"),
      1: new Date("1980-01-02"),
      2: new Date("1492-10-12")
    };
    const result = await client.dictionary.getDateValid();
    assert.deepEqual(result, dictionary);
  });

  it("should put date dictionaries", async () => {
    const dictionary: { [propertyName: string]: Date } = {
      0: new Date("2000-12-01"),
      1: new Date("1980-01-02"),
      2: new Date("1492-10-12")
    };
    await client.dictionary.putDateValid(dictionary, responseStatusChecker);
  });

  it("should get date dictionaries with null value", async () => {
    const dictionary: { [propertyName: string]: Date } = {
      "0": new Date("2012-01-01"),
      "1": null as any,
      "2": new Date("1776-07-04")
    };
    const result = await client.dictionary.getDateInvalidNull();
    assert.deepEqual(result, dictionary);
  });

  it("should get date dictionaries with string value", async () => {
    const dictionary: { [propertyName: string]: Date } = {
      "0": new Date("2011-03-22"),
      "1": new Date("date")
    };
    const result = await client.dictionary.getDateInvalidChars();
    assert.deepEqual(result, dictionary);
  });

  it("should get datetime dictionaries", async () => {
    const dictionary: { [propertyName: string]: Date } = {
      0: new Date("2000-12-01t00:00:01z"),
      1: new Date("1980-01-02T00:11:35+01:00"),
      2: new Date("1492-10-12T10:15:01-08:00")
    };
    const result = await client.dictionary.getDateTimeValid();
    assert.deepEqual(result, dictionary);
  });

  it("should put datetime dictionaries", async () => {
    const dictionary: { [propertyName: string]: Date } = {
      0: new Date("2000-12-01T00:00:01Z"),
      1: new Date("1980-01-01T23:11:35Z"),
      2: new Date("1492-10-12T18:15:01Z")
    };
    await client.dictionary.putDateTimeValid(dictionary, responseStatusChecker);
  });

  it("should get datetime dictionaries with null value", async () => {
    const dictionary: { [propertyName: string]: Date } = {
      "0": new Date("2000-12-01T00:00:01.000Z"),
      "1": null as any
    };
    const result = await client.dictionary.getDateTimeInvalidNull();
    assert.deepEqual(result, dictionary);
  });

  it("should get datetime dictionaries with string value", async () => {
    const dictionary: { [propertyName: string]: Date } = {
      "0": new Date("2000-12-01T00:00:01.000Z"),
      "1": new Date("date")
    };
    const result = await client.dictionary.getDateTimeInvalidChars();
    assert.deepEqual(result, dictionary);
  });

  it("should get dateTimeRfc1123 dictionaries", async () => {
    const dictionary: { [propertyName: string]: Date } = {
      0: new Date("Fri, 01 Dec 2000 00:00:01 GMT"),
      1: new Date("Wed, 02 Jan 1980 00:11:35 GMT"),
      2: new Date("Wed, 12 Oct 1492 10:15:01 GMT")
    };
    const result = await client.dictionary.getDateTimeRfc1123Valid();
    assert.deepEqual(result, dictionary);
  });

  it("should put dateTimeRfc1123 dictionaries", async () => {
    const dictionary: { [propertyName: string]: Date } = {
      0: new Date("Fri, 01 Dec 2000 00:00:01 GMT"),
      1: new Date("Wed, 02 Jan 1980 00:11:35 GMT"),
      2: new Date("Wed, 12 Oct 1492 10:15:01 GMT")
    };
    await client.dictionary.putDateTimeRfc1123Valid(
      dictionary,
      responseStatusChecker
    );
  });

  it("should get duration dictionaries", async () => {
    const dictionary: { [propertyName: string]: string } = {
      0: "P123DT22H14M12.011S",
      1: "P5DT1H"
    };
    const result = await client.dictionary.getDurationValid();
    assert.deepEqual(result, dictionary);
  });

  it("should put duration dictionaries", async () => {
    const dictionary: { [propertyName: string]: string } = {
      0: "P123DT22H14M12.011S",
      1: "P5DT1H"
    };
    await client.dictionary.putDurationValid(dictionary, responseStatusChecker);
  });

  it("should get byte dictionaries", async () => {
    const bytes1 = new Uint8Array([255, 255, 255, 250]);
    const bytes2 = new Uint8Array([1, 2, 3]);
    const bytes3 = new Uint8Array([37, 41, 67]);
    const dictionary: { [propertyName: string]: Uint8Array } = {
      0: bytes1,
      1: bytes2,
      2: bytes3
    };
    const result = await client.dictionary.getByteValid();
    assert.deepEqual(result, dictionary);
  });

  it("should put byte dictionaries", async () => {
    const bytes1 = new Uint8Array([255, 255, 255, 250]);
    const bytes2 = new Uint8Array([1, 2, 3]);
    const bytes3 = new Uint8Array([37, 41, 67]);
    const dictionary: { [propertyName: string]: Uint8Array } = {
      0: bytes1,
      1: bytes2,
      2: bytes3
    };
    await client.dictionary.putByteValid(dictionary, responseStatusChecker);
  });

  it("should get byte dictionaries with null values", async () => {
    const dictionary: { [propertyName: string]: Uint8Array } = {
      0: new Uint8Array([171, 172, 173]),
      1: null as any
    };

    const result = await client.dictionary.getByteInvalidNull();
    assert.deepEqual(result, dictionary);
  });
});
