import { BodyDurationClient } from "./generated/bodyDuration/src/bodyDurationClient";
import { expect } from "chai";
import { fail } from "assert";

describe("BodyDateClient", function() {
  let testClient: BodyDurationClient;

  beforeEach(() => {
    testClient = new BodyDurationClient();
  });

  it("should properly handle null value for Duration", async () => {
    const { body } = await testClient.duration.getNull();
    expect(body).to.equal(undefined);
  });

  it("should properly handle invalid value for Duration", async () => {
    let isError = false;
    try {
      await testClient.duration.getInvalid();
      fail("Expected to throw");
    } catch (error) {
      isError = true;
    } finally {
      expect(isError).to.equal(true);
    }
  });

  it("should properly handle positive value for Duration", async () => {
    const { body } = await testClient.duration.getPositiveDuration();
    expect(body).to.equal("P3Y6M4DT12H30M5S");
  });

  it("should properly put positive value for Duration", async () => {
    var duration = "P123DT22H14M12.011S";
    const result = await testClient.duration.putPositiveDuration(duration);
    expect(result._response.status).to.equal(200);
  });
});
