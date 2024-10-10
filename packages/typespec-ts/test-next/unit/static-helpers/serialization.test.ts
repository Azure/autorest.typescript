import { describe, it, expect, vi } from "vitest";
import {
  serializeRecord,
  serializePassthrough,
  serializeArray,
  serializeUtcDateTime,
  serializeBytes,
  withNullChecks,
  isPassthroughElement
} from "../../../static/static-helpers/serialization/serializers.js";
import { EncodingType } from "@typespec/ts-http-runtime";

describe("serializeRecord", () => {
  it("should serialize a record using the provided serializer", () => {
    const input = { a: 1, b: 2 };
    const serializer = (item: number) => item.toString();
    const result = serializeRecord(input, serializer);
    expect(result).toEqual({ a: 1, b: 2 });
  });

  it("should handle null and undefined correctly", () => {
    const input = { a: 1, b: null, c: undefined };
    const serializer = (item: number | null) => item?.toString() ?? "null";
    const result = serializeRecord(input, serializer);
    expect(result).toEqual({ a: 1, b: "null" });
  });

  it("should use passthrough for passthrough elements", () => {
    const input = { a: 1, b: "string", c: new Date("2023-08-01") };
    const result = serializeRecord(input);
    expect(result).toEqual(input);
  });

  it("should warn and passthrough unhandled types", () => {
    const input = { a: {}, b: [] };
    console.warn = vi.fn(); // Mock console.warn
    const result = serializeRecord(input);
    expect(result).toEqual(input);
    expect(console.warn).toHaveBeenCalledWith(
      "Don't know how to serialize [object Object]"
    );
    expect(console.warn).toHaveBeenCalledWith("Don't know how to serialize ");
  });
});

describe("serializePassthrough", () => {
  it("should return the input as-is", () => {
    const input = { a: 1, b: "test" };
    const result = serializePassthrough(input);
    expect(result).toBe(input);
  });

  it("should handle null and undefined correctly", () => {
    const nullResult = serializePassthrough(null);
    const undefinedResult = serializePassthrough(undefined);
    expect(nullResult).toBeNull();
    expect(undefinedResult).toBeUndefined();
  });
});

describe("serializeArray", () => {
  it("should serialize an array using the provided serializer", () => {
    const input = [1, 2, 3];
    const serializer = (item: number) => item.toString();
    const result = serializeArray(input, serializer);
    expect(result).toEqual([1, 2, 3]);
  });

  it("should use passthrough for passthrough elements", () => {
    const input = [1, "string", new Date("2023-08-01")];
    const result = serializeArray(input, (item) => item);
    expect(result).toEqual(input);
  });

  it("should handle empty arrays correctly", () => {
    const input: any[] = [];
    const serializer = (item: any) => item.toString();
    const result = serializeArray(input, serializer);
    expect(result).toEqual([]);
  });
});

describe("serializeUtcDateTime", () => {
  it("should serialize a Date object to UTC string", () => {
    const input = new Date("2023-08-01T00:00:00Z");
    const result = serializeUtcDateTime(input);
    expect(result).toBe("2023-08-01T00:00:00.000Z");
  });

  it("should handle null and undefined correctly", () => {
    const nullResult = serializeUtcDateTime(null);
    const undefinedResult = serializeUtcDateTime(undefined);
    expect(nullResult).toBeNull();
    expect(undefinedResult).toBeUndefined();
  });
});

describe("serializeBytes", () => {
  it("should serialize a Uint8Array to a string with given encoding", () => {
    const input = new Uint8Array([72, 101, 108, 108, 111]); // 'Hello'
    const encoding: EncodingType = "utf-8";
    const result = serializeBytes(input, encoding);
    expect(result).toBe("Hello");
  });

  it("should handle null and undefined correctly", () => {
    const nullResult = serializeBytes(null, "utf-8");
    const undefinedResult = serializeBytes(undefined, "utf-8");
    expect(nullResult).toBeNull();
    expect(undefinedResult).toBeUndefined();
  });
});

describe("withNullChecks", () => {
  it("should return null or undefined if input is null or undefined", () => {
    const fn = withNullChecks((input: number) => input + 1);
    expect(fn(null)).toBeNull();
    expect(fn(undefined)).toBeUndefined();
  });

  it("should apply the function if input is not null or undefined", () => {
    const fn = withNullChecks((input: number) => input + 1);
    expect(fn(1)).toBe(2);
  });
});

describe("isPassthroughElement", () => {
  it("should return true for numbers, strings, booleans, null, and dates", () => {
    expect(isPassthroughElement(1)).toBe(true);
    expect(isPassthroughElement("string")).toBe(true);
    expect(isPassthroughElement(true)).toBe(true);
  });

  it("should return false for other types", () => {
    expect(isPassthroughElement({})).toBe(false);
    expect(isPassthroughElement([])).toBe(false);
    expect(isPassthroughElement(() => {})).toBe(false);
    expect(isPassthroughElement(null)).toBe(false);
  });
});
