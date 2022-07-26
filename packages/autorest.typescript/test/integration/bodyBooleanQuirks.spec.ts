import { BodyBooleanQuirksClient } from "./generated/bodyBooleanQuirks/src";
import { expect } from "chai";
import { responseStatusChecker } from "../utils/responseStatusChecker";

describe("Bool Quirks Client", function() {
  let testClient: BodyBooleanQuirksClient;

  beforeEach(() => {
    testClient = new BodyBooleanQuirksClient({ allowInsecureConnection: true });
  });

  it("should get true value", async () => {
    const { body } = await testClient.bool.getTrue();
    expect(body).to.equal(true);
  });

  it("should get false value", async () => {
    const { body } = await testClient.bool.getFalse();
    expect(body).to.equal(false);
  });

  it("should put true value", async () => {
    await testClient.bool.putTrue(true, responseStatusChecker);
  });

  it("should put false value", async () => {
    await testClient.bool.putFalse(false, responseStatusChecker);
  });

  it("should get null boolean value", async () => {
    const { body } = await testClient.bool.getNull();
    expect(body).to.equal(undefined);
  });

  it("should get invalid boolean value", async () => {
    let failed = false;
    try {
      await testClient.bool.getInvalid();
      throw new Error("Expected error to be thrown");
    } catch (error) {
      failed = true;
    } finally {
      expect(failed).to.equal(true);
    }
  });
});
