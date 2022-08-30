import { createTestHost, TestHost } from "@cadl-lang/compiler/testing";

describe("Schemas generation", () => {
  let testHost: TestHost;

  beforeEach(async () => {
    testHost = await createTestHost();
    console.log(testHost);
  });
});
