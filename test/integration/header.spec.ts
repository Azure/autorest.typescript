import { isNode } from "@azure/core-util";
import { should, assert } from "chai";
import { isEqual } from "lodash";
import { HeaderClient } from "./generated/header/src";

should();

describe("typescript", function() {
  describe("Swagger Header BAT", function() {
    describe("Basic Header Operations", function() {
      let testClient: HeaderClient;
      beforeEach(() => {
        testClient = new HeaderClient({ allowInsecureConnection: true });
      });

      it("should override existing headers (nodejs only)", async function() {
        if (!isNode) {
          this.skip();
        }

        await testClient.header.paramExistingKey("overwrite");
        const response = await testClient.header.responseExistingKey();
        response.userAgent!.should.be.deep.equal("overwrite");
      });

      it("should throw on changing protected headers", async function() {
        await testClient.header.paramProtectedKey("text/html");
        const response = await testClient.header.responseProtectedKey();
        response.contentType!.should.be.deep.equal("text/html; charset=utf-8");
      });

      it("should send and receive integer type headers", async function() {
        await testClient.header.paramInteger("positive", 1);
        await testClient.header.paramInteger("negative", -2);

        const response1 = await testClient.header.responseInteger("positive");
        response1.value!.should.be.deep.equal(1);

        const response2 = await testClient.header.responseInteger("negative");
        response2.value!.should.be.deep.equal(-2);
      });

      it("should send and receive long type headers", async function() {
        await testClient.header.paramLong("positive", 105);
        await testClient.header.paramLong("negative", -2);

        const response1 = await testClient.header.responseLong("positive");
        response1.value!.should.be.deep.equal(105);

        const response2 = await testClient.header.responseLong("negative");
        response2.value!.should.be.deep.equal(-2);
      });

      it("should send and receive float type headers", async function() {
        await testClient.header.paramFloat("positive", 0.07);
        await testClient.header.paramFloat("negative", -3.0);

        const response1 = await testClient.header.responseFloat("positive");
        response1.value!.should.be.deep.equal(0.07);

        const response2 = await testClient.header.responseFloat("negative");
        response2.value!.should.be.deep.equal(-3.0);
      });

      it("should send and receive double type headers", async function() {
        await testClient.header.paramDouble("positive", 7e120);
        await testClient.header.paramDouble("negative", -3.0);

        const response1 = await testClient.header.responseDouble("positive");
        response1.value!.should.be.deep.equal(7e120);

        const response2 = await testClient.header.responseDouble("negative");
        response2.value!.should.be.deep.equal(-3.0);
      });

      it("should send and receive boolean type headers", async function() {
        await testClient.header.paramBool("true", true);
        await testClient.header.paramBool("false", false);

        const response1 = await testClient.header.responseBool("true");
        response1.value!.should.be.deep.equal(true);

        const response2 = await testClient.header.responseBool("false");
        response2.value!.should.be.deep.equal(false);
      });

      it.skip("should send and receive string type headers", async function() {
        await testClient.header.paramString("valid", {
          value: "The quick brown fox jumps over the lazy dog"
        });
        await testClient.header.paramString("null", { value: null as any });
        await testClient.header.paramString("empty", { value: "" });

        const response1 = await testClient.header.responseString("valid");
        response1.value!.should.be.deep.equal(
          "The quick brown fox jumps over the lazy dog"
        );

        // Note: Currently core-http wouldn't deserialize "null" as null when coming from headers
        // all other languages are doing the same for now. Filed https://github.com/Azure/autorest.typescript/issues/739
        // to track this.
        const response2 = await testClient.header.responseString("null");
        response2.value!.should.be.deep.equal("null");

        const response3 = await testClient.header.responseString("empty");
        assert.equal(response3.value, undefined);
      });

      it.skip("should send and receive enum type headers", async function() {
        await testClient.header.paramEnum("valid", { value: "GREY" });
        await testClient.header.paramEnum("null", { value: null as any });

        const response1 = await testClient.header.responseEnum("valid");
        response1.value!.should.be.deep.equal("GREY");

        const response2 = await testClient.header.responseEnum("null");
        assert.equal(response2.value, undefined);
      });

      it("should send and receive date type headers", async function() {
        await testClient.header.paramDate("valid", new Date("2010-01-01"));
        await testClient.header.paramDate("min", new Date("0001-01-01"));

        const response1 = await testClient.header.responseDate("valid");
        isEqual(
          new Date(response1.value!),
          new Date("2010-01-01")
        ).should.be.deep.equal(true);

        const response2 = await testClient.header.responseDate("min");
        isEqual(response2.value!, new Date("0001-01-01")).should.be.deep.equal(
          true
        );
      });

      it("should send and receive datetime type headers", async function() {
        await testClient.header.paramDatetime(
          "valid",
          new Date("2010-01-01T12:34:56Z")
        );
        await testClient.header.paramDatetime(
          "min",
          new Date("0001-01-01T00:00:00Z")
        );

        const response1 = await testClient.header.responseDatetime("valid");
        isEqual(
          response1.value!,
          new Date("2010-01-01T12:34:56Z")
        ).should.be.deep.equal(true);

        const response2 = await testClient.header.responseDatetime("min");
        isEqual(
          response2.value!,
          new Date("0001-01-01T00:00:00Z")
        ).should.be.deep.equal(true);
      });

      it("should send and receive datetimerfc1123 type headers", async function() {
        await testClient.header.paramDatetimeRfc1123("valid", {
          value: new Date("2010-01-01T12:34:56Z")
        });
        await testClient.header.paramDatetimeRfc1123("min", {
          value: new Date("0001-01-01T00:00:00Z")
        });

        const response1 = await testClient.header.responseDatetimeRfc1123(
          "valid"
        );
        isEqual(
          response1.value,
          new Date("Fri, 01 Jan 2010 12:34:56 GMT")
        ).should.be.deep.equal(true);

        const response2 = await testClient.header.responseDatetimeRfc1123(
          "min"
        );
        isEqual(
          response2.value,
          new Date("Mon, 01 Jan 0001 00:00:00 GMT")
        ).should.be.deep.equal(true);
      });

      it("should send and receive duration type headers", async function() {
        const duration = "P123DT22H14M12.011S";
        await testClient.header.paramDuration("valid", duration);

        const response = await testClient.header.responseDuration("valid");
        isEqual(response.value!, "P123DT22H14M12.011S").should.be.deep.equal(
          true
        );
      });

      it("should send and receive byte array type headers", async function() {
        const value = "啊齄丂狛狜隣郎隣兀﨩";
        const encoder = new TextEncoder();
        const bytes = encoder.encode(value);
        await testClient.header.paramByte("valid", bytes);

        const response = await testClient.header.responseByte("valid");

        response.value!.length.should.equal(bytes.length);
        for (let i = 0; i < bytes.length; i++) {
          response.value![i].should.equal(bytes[i]);
        }
      });
    });
  });
});
