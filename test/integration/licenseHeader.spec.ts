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

  it("sdk must not have a license file", async () => {
    const licenseFileExists: boolean = fs.existsSync(
      "./test/integration/generated/noLicenseHeader/LICENSE.txt"
    );

    expect(licenseFileExists).to.equal(false, "Unexpected License File");
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

  it("sdk must have a license file", async () => {
    const licenseFileExists: boolean = fs.existsSync(
      "./test/integration/generated/licenseHeader/LICENSE.txt"
    );

    expect(licenseFileExists).to.equal(true, "Expected License File");
  });
});
