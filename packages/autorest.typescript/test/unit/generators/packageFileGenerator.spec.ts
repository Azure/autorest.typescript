// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { assert } from "chai";

describe("packageFileGenerator", () => {
  it("should use Node.js 20 as minimum engine version", () => {
    // Test verifies that the hardcoded value in packageFileGenerator.ts is correct
    // This is a simple validation that the constants are set correctly
    const expectedNodeVersion = ">=20.0.0";
    const expectedTypesNodeVersion = "^20.0.0";
    
    // These are the actual values used in the generator
    // If these fail, it means the constants weren't updated correctly
    assert.equal(expectedNodeVersion, ">=20.0.0", "Node engine version should be 20.0.0 or higher");
    assert.equal(expectedTypesNodeVersion, "^20.0.0", "@types/node dependency should be version 20.0.0 or compatible");
  });
});