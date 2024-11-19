import { describe, it, expect } from "vitest";
import { buildCsvCollection } from "../../../static/static-helpers/serialization/build-csv-collection.js";
import { buildPipeCollection } from "../../../static/static-helpers/serialization/build-pipe-collection.js";
import { buildSsvCollection } from "../../../static/static-helpers/serialization/build-ssv-collection.js";
import { buildTsvCollection } from "../../../static/static-helpers/serialization/build-tsv-collection.js";

describe("Collection Functions", () => {
  const items = [1, 2, 3];
  const stringItems = ["a", "b", "c"];

  describe("buildCsvCollection", () => {
    it("should join numbers with a comma", () => {
      expect(buildCsvCollection(items)).toBe("1,2,3");
    });

    it("should join strings with a comma", () => {
      expect(buildCsvCollection(stringItems)).toBe("a,b,c");
    });
  });

  describe("buildPipeCollection", () => {
    it("should join numbers with a pipe", () => {
      expect(buildPipeCollection(items)).toBe("1|2|3");
    });

    it("should join strings with a pipe", () => {
      expect(buildPipeCollection(stringItems)).toBe("a|b|c");
    });
  });

  describe("buildSsvCollection", () => {
    it("should join numbers with a space", () => {
      expect(buildSsvCollection(items)).toBe("1 2 3");
    });

    it("should join strings with a space", () => {
      expect(buildSsvCollection(stringItems)).toBe("a b c");
    });
  });

  describe("buildTsvCollection", () => {
    it("should join numbers with a tab", () => {
      expect(buildTsvCollection(items)).toBe("1\t2\t3");
    });

    it("should join strings with a tab", () => {
      expect(buildTsvCollection(stringItems)).toBe("a\tb\tc");
    });
  });
});
