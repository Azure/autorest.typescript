import { BodyBooleanClient } from "./generated/bodyBoolean/src/bodyBooleanClient";
import { expect } from "chai";
describe("Bool Client", function() {
  let testClient: BodyBooleanClient;

  beforeEach(() => {
    testClient = new BodyBooleanClient();
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
    const result = await testClient.bool.putTrue();
    expect(result._response.status).to.equal(200);
  });

  it("should put false value", async () => {
    const result = await testClient.bool.putFalse();
    expect(result._response.status).to.equal(200);
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
