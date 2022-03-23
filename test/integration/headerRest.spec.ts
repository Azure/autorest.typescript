import * as coreHttp from "@azure/core-http";
import { should, assert } from "chai";
import { isEqual } from "lodash";
import HeaderRest, { HeaderRestClient } from "./generated/headerRest/src";

should();

describe("header Rest", function() {
  describe("Swagger Header BAT", function() {
    describe("Basic Header Operations", function() {
      let testClient: HeaderRestClient;
      beforeEach(() => {
        testClient = HeaderRest();
      });

      it("should override existing headers (nodejs only)", async function() {
        if (!coreHttp.isNode) {
          this.skip();
        }

        await testClient.path("/header/param/existingkey").post({
          headers: {
            "User-Agent": "overwrite"
          },
          allowInsecureConnection: true
        });
        const response = await testClient.path("/header/response/existingkey").post({
          allowInsecureConnection: true
        });
        response.headers["user-agent"]!.should.be.deep.equal("overwrite");
      });

      it("should throw on changing protected headers", async function() {
        await testClient.path("/header/param/protectedkey").post({
          headers: {
            "Content-Type": "text/html"
          },
          allowInsecureConnection: true
        })
        const response = await testClient.path("/header/response/protectedkey").post({
          allowInsecureConnection: true
        })
        response.headers['content-type']!.should.be.deep.equal("text/html; charset=utf-8");
      });

      it("should send and receive integer type headers", async function() {
        await testClient.path("/header/param/prim/integer").post({
          headers:{
            scenario: "positive", 
            value: 1
          },
          allowInsecureConnection: true
        });
        await testClient.path("/header/param/prim/integer").post({
          headers:{
            scenario: "negative", 
            value: -2
          },
          allowInsecureConnection: true
        });

        const response1 = await testClient.path("/header/response/prim/integer").post({
          headers: {
            scenario: "positive"
          },
          allowInsecureConnection: true
        })
        response1.headers.value!.should.be.deep.equal('1');

        const response2 = await testClient.path("/header/response/prim/integer").post({
          headers: {
            scenario: "negative",
            value: -2
          },
          allowInsecureConnection: true
        })
        response2.headers.value!.should.be.deep.equal('-2');
      });


      it("should send and receive long type headers", async function() {
        await testClient.path("/header/param/prim/long").post({
          headers:{
            scenario: "positive",
            value: 105
          },
          allowInsecureConnection: true
        });

        const response1 = await testClient.path("/header/response/prim/long").post({
          headers:{
            scenario: "positive"
          },
          allowInsecureConnection: true
        });

        response1.headers.value!.should.be.deep.equal("105");


        await testClient.path("/header/param/prim/long").post({
          headers:{
            scenario: "negative",
            value: -2
          },
          allowInsecureConnection: true
        });

        const response2 = await testClient.path("/header/response/prim/long").post({
          headers:{
            scenario: "negative"
          },
          allowInsecureConnection: true
        });

        response2.headers.value!.should.be.deep.equal("-2");
      });

      it("should send and receive float type headers", async function() {
        await testClient.path("/header/param/prim/float").post({
          headers:{
            scenario: "positive",
            value: 0.07
          },
          allowInsecureConnection: true
        });

        const response1 = await testClient.path("/header/response/prim/float").post({
          headers:{
            scenario: "positive"
          },
          allowInsecureConnection: true
        });

        response1.headers.value!.should.be.deep.equal("0.07");


        await testClient.path("/header/param/prim/float").post({
          headers:{
            scenario: "negative",
            value: -3.0
          },
          allowInsecureConnection: true
        });

        const response2 = await testClient.path("/header/response/prim/float").post({
          headers:{
            scenario: "negative"
          },
          allowInsecureConnection: true
        });

        response2.headers.value!.should.be.deep.equal("-3");
      });

      it("should send and receive double type headers", async function() {
        // await testClient.header.paramDouble("positive", 7e120);
        // await testClient.header.paramDouble("negative", -3.0);

        // const response1 = await testClient.header.responseDouble("positive");
        // response1.value!.should.be.deep.equal(7e120);

        // const response2 = await testClient.header.responseDouble("negative");
        // response2.value!.should.be.deep.equal(-3.0);

        await testClient.path("/header/param/prim/double").post({
          headers:{
            scenario: "positive",
            value: 7e120
          },
          allowInsecureConnection: true
        });

        const response1 = await testClient.path("/header/response/prim/double").post({
          headers:{
            scenario: "positive"
          },
          allowInsecureConnection: true
        });

        response1.headers.value!.should.be.deep.equal("7e+120");

        await testClient.path("/header/param/prim/double").post({
          headers:{
            scenario: "negative",
            value: -3.0
          },
          allowInsecureConnection: true
        });

        const response2 = await testClient.path("/header/response/prim/double").post({
          headers:{
            scenario: "negative"
          },
          allowInsecureConnection: true
        });

        response2.headers.value!.should.be.deep.equal("-3");
      });

      it("should send and receive boolean type headers", async function() {
        await testClient.path("/header/param/prim/bool").post({
          headers:{
            scenario: "true",
            value: true
          },
          allowInsecureConnection: true
        });

        const response1 = await testClient.path("/header/response/prim/bool").post({
          headers:{
            scenario: "true"
          },
          allowInsecureConnection: true
        });

        response1.headers.value!.should.be.deep.equal("true");


        await testClient.path("/header/param/prim/bool").post({
          headers:{
            scenario: "false",
            value: false
          },
          allowInsecureConnection: true
        });

        const response2 = await testClient.path("/header/response/prim/bool").post({
          headers:{
            scenario: "false"
          },
          allowInsecureConnection: true
        });

        response2.headers.value!.should.be.deep.equal("false");
      });

      it("should send and receive string type headers", async function() {
        await testClient.path("/header/param/prim/string").post({
          headers:{
            scenario: "valid",
            value: "The quick brown fox jumps over the lazy dog"
          },
          allowInsecureConnection: true
        });

        const response1 = await testClient.path("/header/response/prim/string").post({
          headers:{
            scenario: "valid"
          },
          allowInsecureConnection: true
        });

        response1.headers.value!.should.be.deep.equal("The quick brown fox jumps over the lazy dog");

        await testClient.path("/header/param/prim/string").post({
          headers:{
            scenario: "null",
          },
          allowInsecureConnection: true
        });
  
        const response2 = await testClient.path("/header/response/prim/string").post({
          headers:{
            scenario: "null"
          },
          allowInsecureConnection: true
        });
  
        response2.headers.value!.should.be.deep.equal("null");

        await testClient.path("/header/param/prim/string").post({
          headers:{
            scenario: "empty",
            value: ""
          },
          allowInsecureConnection: true
        });

        const response3 = await testClient.path("/header/response/prim/string").post({
          headers:{
            scenario: "empty"
          },
          allowInsecureConnection: true
        });
  
        assert.deepEqual(response3.status, "200");
        // assert.deepEqual(response3.headers.value, undefined);
      });

      it("should send and receive enum type headers", async function() {

        await testClient.path("/header/param/prim/enum").post({
          headers:{
            scenario: "valid",
            value: "GREY"
          },
          allowInsecureConnection: true
        });
  
        const response1 = await testClient.path("/header/response/prim/enum").post({
          headers:{
            scenario: "valid"
          },
          allowInsecureConnection: true
        });
  
        assert.deepEqual(response1.headers.value, "GREY");


        await testClient.path("/header/param/prim/enum").post({
          headers:{
            scenario: "null",
          },
          allowInsecureConnection: true
        });
  
        const response2 = await testClient.path("/header/response/prim/enum").post({
          headers:{
            scenario: "null"
          },
          allowInsecureConnection: true
        });
  
        assert.deepEqual(response2.status, "200");
        // assert.deepEqual(response2.headers.value, undefined);
      });

      // it.skip("should send and receive date type headers", async function() {

      //   await testClient.path("/header/param/prim/date").post({
      //     headers:{
      //       scenario: "valid",
      //       value: new Date("2010-01-01")
      //     },
      //     allowInsecureConnection: true
      //   });
  
      //   const response1 = await testClient.path("/header/response/prim/date").post({
      //     headers:{
      //       scenario: "valid"
      //     },
      //     allowInsecureConnection: true
      //   });
  
      //   assert.deepEqual(response1.headers.value, "2010-01-01");


      //   await testClient.path("/header/param/prim/date").post({
      //     headers:{
      //       scenario: "min",
      //       value: new Date("0001-01-01")
      //     },
      //     allowInsecureConnection: true
      //   });
  
      //   const response2 = await testClient.path("/header/response/prim/date").post({
      //     headers:{
      //       scenario: "min"
      //     },
      //     allowInsecureConnection: true
      //   });
  
      //   assert.deepEqual(response2.headers.value, "0001-01-01");
      // });

      // it.skip("should send and receive datetime type headers", async function() {

      //   await testClient.path("/header/param/prim/datetime").post({
      //     headers:{
      //       scenario: "valid",
      //       value: new Date("2010-01-01T12:34:56Z")
      //     },
      //     allowInsecureConnection: true
      //   });
  
      //   const response1 = await testClient.path("/header/response/prim/datetime").post({
      //     headers:{
      //       scenario: "valid"
      //     },
      //     allowInsecureConnection: true
      //   });
  
      //   assert.deepEqual(response1.headers.value, "2010-01-01T12:34:56Z");


      //   await testClient.path("/header/param/prim/datetime").post({
      //     headers:{
      //       scenario: "min",
      //       value: new Date("0001-01-01T00:00:00Z")
      //     },
      //     allowInsecureConnection: true
      //   });
  
      //   const response2 = await testClient.path("/header/response/prim/datetime").post({
      //     headers:{
      //       scenario: "min"
      //     },
      //     allowInsecureConnection: true
      //   });
  
      //   assert.deepEqual(response2.headers.value, "0001-01-01T00:00:00Z");
      // });

      // it.skip("should send and receive datetimerfc1123 type headers", async function() {

      //   await testClient.path("/header/param/prim/datetimerfc1123").post({
      //     headers:{
      //       scenario: "valid",
      //       value: new Date("2010-01-01T12:34:56Z")
      //     },
      //     allowInsecureConnection: true
      //   });
  
      //   const response1 = await testClient.path("/header/response/prim/datetimerfc1123").post({
      //     headers:{
      //       scenario: "valid"
      //     },
      //     allowInsecureConnection: true
      //   });
  
      //   assert.deepEqual(response1.headers.value, "Mon, 01 Jan 0001 00:00:00 GMT");


      //   await testClient.path("/header/param/prim/datetimerfc1123").post({
      //     headers:{
      //       scenario: "min",
      //       value: new Date("0001-01-01T00:00:00Z")
      //     },
      //     allowInsecureConnection: true
      //   });
  
      //   const response2 = await testClient.path("/header/response/prim/datetimerfc1123").post({
      //     headers:{
      //       scenario: "min"
      //     },
      //     allowInsecureConnection: true
      //   });
  
      //   assert.deepEqual(response2.headers.value, "Mon, 01 Jan 0001 00:00:00 GMT");
      // });

      it("should send and receive duration type headers", async function() {

        await testClient.path("/header/param/prim/duration").post({
          headers:{
            scenario: "valid",
            value: "P123DT22H14M12.011S"
          },
          allowInsecureConnection: true
        });
  
        const response1 = await testClient.path("/header/response/prim/duration").post({
          headers:{
            scenario: "valid"
          },
          allowInsecureConnection: true
        });
  
        assert.deepEqual(response1.headers.value, "P123DT22H14M12.011S");
      });

      it.skip("should send and receive byte array type headers", async function() {
        const value = "啊齄丂狛狜隣郎隣兀﨩";

        await testClient.path("/header/param/prim/byte").post({
          headers:{
            scenario: "valid",
            value: value
          },
          allowInsecureConnection: true
        });
  
        const response = await testClient.path("/header/response/prim/byte").post({
          headers:{
            scenario: "valid"
          },
          allowInsecureConnection: true
        });

        assert.deepEqual(response.headers.value, value)
      });
    });
  });
});
