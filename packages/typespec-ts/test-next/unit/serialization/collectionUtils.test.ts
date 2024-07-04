import { describe, it, expect } from "vitest";
import { getCollectionSeparator } from "../../../src/modular/serialization/collectionUtils.js";

describe("getCollectionSeparator", () => {
  it("should return ',' for csv", () => {
    const result = getCollectionSeparator("csv");
    expect(result).toBe(",");
  });

  it("should return ' ' for ssv", () => {
    const result = getCollectionSeparator("ssv");
    expect(result).toBe(" ");
  });

  it("should return '\\t' for tsv", () => {
    const result = getCollectionSeparator("tsv");
    expect(result).toBe("\t");
  });

  it("should return '|' for pipes", () => {
    const result = getCollectionSeparator("pipes");
    expect(result).toBe("|");
  });

  it("should return '&' for multi", () => {
    const result = getCollectionSeparator("multi");
    expect(result).toBe("&");
  });

  it("should return ',' by default", () => {
    const result = getCollectionSeparator(undefined);
    expect(result).toBe(",");
  });
});
