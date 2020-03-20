import { BodyByteClient } from "./generated/bodyByte/src/bodyByteClient";
import { expect } from "chai";
describe("Bool Quirks Client", function() {
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
    testClient = new BodyByteClient();
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
    const result = await testClient.byte.putNonAscii(testBytes);
    expect(result._response.status).to.equal(200);
  });

  it("should get invalid value", async () => {
    // Output of Buffer.from(':::SWAGGER::::', 'base64')
    const expected = new Uint8Array([73, 96, 6, 24, 68]);

    const { body } = await testClient.byte.getInvalid();
    for (let i = 0; i < body.length; i++) {
      expect(body[i]).to.equal(expected[i]);
    }
  });
});
