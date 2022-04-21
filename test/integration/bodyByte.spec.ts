import { BodyByteClient } from "./generated/bodyByte/src";
import { expect } from "chai";
import { isNode } from "@azure/core-util";
import { responseStatusChecker } from "../utils/responseStatusChecker";

describe("Body Byte Client", function() {
  let testClient: BodyByteClient;
  const testBytes = new Uint8Array([
    255,
    254,
    253,
    252,
    251,
    250,
    249,
    248,
    247,
    246
  ]);

  beforeEach(() => {
    testClient = new BodyByteClient({ allowInsecureConnection: true });
  });

  it("should get null value", async () => {
    const { body } = await testClient.byte.getNull();
    expect(body).to.equal(undefined);
  });

  it("should get empty value", async () => {
    const { body } = await testClient.byte.getEmpty();
    expect(body).to.be.instanceOf(Uint8Array);
    expect(body.length).to.equal(0);
  });

  it("should get non-ascii value", async () => {
    const { body } = await testClient.byte.getNonAscii();
    expect(body.length).to.equal(testBytes.length);
    for (let i = 0; i < testBytes.length; i++) {
      expect(body[i]).to.equal(testBytes[i]);
    }
  });

  it("should put non-ascii value", async () => {
    const result = await testClient.byte.putNonAscii(
      testBytes,
      responseStatusChecker
    );
  });

  // This test should cause an error to be thrown during deserialization.
  if (isNode) {
    it("should get invalid value", async () => {
      // Output of Buffer.from(':::SWAGGER::::', 'base64')
      const expected = new Uint8Array([73, 96, 6, 24, 68]);

      const { body } = await testClient.byte.getInvalid();
      for (let i = 0; i < body.length; i++) {
        expect(body[i]).to.equal(expected[i]);
      }
    });
  } else {
    it("should throw on get invalid value", async () => {
      // Browser environments will fail to parse invalid base64 strings.
      try {
        await testClient.byte.getInvalid();
        throw new Error("Test failure");
      } catch (err) {
        expect(err.message).to.not.equal("Test failure");
      }
    });
  }
});
