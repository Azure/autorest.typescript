import { expect } from "chai";
import * as fs from "fs";

describe("License Header Parameter", () => {
  it("source files must not have a license header", async () => {
    const content: string = fs.readFileSync(
      "./test/integration/generated/noLicenseHeader/src/noLicenseHeaderClient.ts",
      "utf-8"
    );
    const containsLicenseHeader = content.includes(
      "* Copyright (c) Microsoft Corporation."
    );
    expect(containsLicenseHeader).to.equal(false, "Unexpected License Header");
  });

  it("source files must have a license header", async () => {
    const content: string = fs.readFileSync(
      "./test/integration/generated/licenseHeader/src/licenseHeaderClient.ts",
      "utf-8"
    );
    const containsLicenseHeader = content.includes(
      "* Copyright (c) Microsoft Corporation."
    );
    expect(containsLicenseHeader).to.equal(true, "Expected License Header");
  });
});
