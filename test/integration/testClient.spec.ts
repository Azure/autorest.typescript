import { ping } from "./testClient";
import { equal } from "assert";

/**
 * Basic test suite that verifies that the Test Server is up and running
 */
describe("TestServer", () => {
  it("should get true as response", async () => {
    const result = await ping(true);
    equal(result, true);
  });

  it("should get false as response", async () => {
    const result = await ping(false);
    equal(result, false);
  });
});
