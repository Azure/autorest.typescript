import { BodyDurationClient } from "./generated/bodyDuration/src";
import { expect, assert } from "chai";
import { responseStatusChecker } from "../utils/responseStatusChecker";

describe("BodyDateClient", function() {
  let testClient: BodyDurationClient;

  beforeEach(() => {
    testClient = new BodyDurationClient({ allowInsecureConnection: true });
  });

  it("should properly handle null value for Duration", async () => {
    const { body } = await testClient.duration.getNull();
    expect(body).to.equal(undefined);
  });

  it("should properly handle invalid value for Duration", async () => {
    let isError = false;
    try {
      await testClient.duration.getInvalid();
      assert.fail("Expected to throw");
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
    await testClient.duration.putPositiveDuration(
      duration,
      responseStatusChecker
    );
  });
});
