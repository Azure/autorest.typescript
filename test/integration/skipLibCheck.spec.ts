import { expect } from "chai";
import * as fs from "fs";

describe("Skiplib Check", () => {
  it("tsconfig must have skiplibcheck property", async () => {
    const content: string = fs.readFileSync(
      "./test/integration/generated/skiplibcheck/tsconfig.json",
      "utf-8"
    );
    const containsLicenseHeader = content.includes('"skipLibCheck": true');
    expect(containsLicenseHeader).to.equal(
      true,
      "Expected skipLibCheck in tsconfig file"
    );
  });
});
