import { expect } from "chai";
import { BodyNumberClient } from "./generated/bodyNumber/src/bodyNumberClient";

describe("Integration tests for BodyInteger", () => {
  let testClient: BodyNumberClient;

  beforeEach(() => {
    testClient = new BodyNumberClient();
  });

  it("should put big float", async () => {
    const result = await testClient.numberOperations.putBigFloat(3.402823e20);
    expect(result._response.status).to.equal(200);
  });

  it("should put big double", async () => {
    const result = await testClient.numberOperations.putBigDouble(2.5976931e101);
    expect(result._response.status).to.equal(200);
  });

  it("should get big float", async () => {
    const { body } = await testClient.numberOperations.getBigFloat();
    expect(body).to.equal(3.402823e20);
  });

  it("should get big double", async () => {
    const { body } = await testClient.numberOperations.getBigDouble();
    expect(body).to.equal(2.5976931e101);
  });

  it("should put small float", async () => {
    const result = await testClient.numberOperations.putSmallFloat(3.402823e-20);
    expect(result._response.status).to.equal(200);
  });

  it("should put small double values", async () => {
    const result = await testClient.numberOperations.putSmallDouble(2.5976931e-101);
    expect(result._response.status).to.equal(200);
  });

  it("should get small float value", async () => {
    const { body } = await testClient.numberOperations.getSmallFloat();
    expect(body).to.equal(3.402823e-20);
  });

  it("should get small double value", async () => {
    const { body } = await testClient.numberOperations.getSmallDouble();
    expect(body).to.equal(2.5976931e-101);
  });

  it("should put big positive double value", async () => {
    const result = await testClient.numberOperations.putBigDoublePositiveDecimal();
    expect(result._response.status).to.equal(200);
  });

  it("should put big negative double value", async () => {
    const result = await testClient.numberOperations.putBigDoubleNegativeDecimal();
    expect(result._response.status).to.equal(200);
  });

  it("should get big positive double value", async () => {
    const { body } = await testClient.numberOperations.getBigDoublePositiveDecimal();
    expect(body).to.equal(99999999.99);
  });

  it("should get big negative double value", async () => {
    const { body } = await testClient.numberOperations.getBigDoubleNegativeDecimal();
    expect(body).to.equal(-99999999.99);
  });

  it("should get null value", async () => {
    const { body } = await testClient.numberOperations.getNull();
    expect(body).to.equal(undefined);
  });

  it("should get  invalid float  values", async () => {
    let isError = false;
    try {
      await testClient.numberOperations.getInvalidFloat();
    } catch {
      isError = true;
    } finally {
      expect(isError).to.equal(true);
    }
  });

  it("should get  invalid double values", async () => {
    let isError = false;
    try {
      await testClient.numberOperations.getInvalidDouble();
    } catch {
      isError = true;
    } finally {
      expect(isError).to.equal(true);
    }
  });
});
