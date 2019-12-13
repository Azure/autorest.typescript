import * as assert from "assert";
import * as moment from "moment";

import {
  BodyComplexClient,
  BodyComplexModels
} from "./generated/bodyComplex/src/bodyComplexClient";
import { Shark } from "./generated/bodyComplex/src/models";

var clientOptions = {
  baseUri: "http://localhost:3000"
};

describe("typescript", function() {
  describe("Swagger Complex Type BAT", function() {
    describe("Basic Types Operations", function() {
      var testClient = new BodyComplexClient(clientOptions);
      it("should get and put valid basic type properties", async function() {
        const result = await testClient.basic.getValid();
        assert.equal(result.id, 2);
        assert.equal(result.name, "abc");
        assert.equal(result.color, "YELLOW");
        await testClient.basic.putValid({
          id: 2,
          name: "abc",
          color: "Magenta"
        });
      });

      it("should get null basic type properties", async function() {
        const result = await testClient.basic.getNull();
        assert.equal(null, result.id);
        assert.equal(null, result.name);
      });

      it("should get empty basic type properties", function(done) {
        testClient.basic.getEmpty(function(error, result) {
          assert.equal(error, undefined);
          assert.equal(result.id, undefined);
          assert.equal(result.name, undefined);
          done();
        });
      });

      it("should get basic type properties when the payload is empty", function(done) {
        testClient.basic.getNotProvided(function(error, result) {
          assert.equal(error, undefined);
          assert.equal(result, undefined);
          done();
        });
      });

      it("should deserialize invalid basic types without throwing", function(done) {
        testClient.basic.getInvalid(function(error, result) {
          assert.equal(error, undefined);
          assert.equal(!!result, true);
          done();
        });
      });
    });

    describe("Primitive Types Operations", function() {
      var testClient = new BodyComplexClient(clientOptions);
      it("should get and put valid int properties", function(done) {
        testClient.primitive.getInt(function(error, result) {
          assert.equal(error, undefined);
          assert.equal(result.field1, -1);
          assert.equal(result.field2, 2);
          testClient.primitive.putInt({ field1: -1, field2: 2 }, function(
            error,
            result
          ) {
            assert.equal(error, undefined);
            done();
          });
        });
      });

      it("should get and put valid long properties", function(done) {
        testClient.primitive.getLong(function(error, result) {
          assert.equal(error, undefined);
          assert.equal(result.field1, 1099511627775);
          assert.equal(result.field2, -999511627788);
          testClient.primitive.putLong(
            { field1: 1099511627775, field2: -999511627788 },
            function(error, result) {
              assert.equal(error, undefined);
              done();
            }
          );
        });
      });

      it("should get and put valid float properties", function(done) {
        testClient.primitive.getFloat(function(error, result) {
          assert.equal(error, undefined);
          assert.equal(result.field1, 1.05);
          assert.equal(result.field2, -0.003);
          testClient.primitive.putFloat(
            { field1: 1.05, field2: -0.003 },
            function(error, result) {
              assert.equal(error, undefined);
              done();
            }
          );
        });
      });

      it("should get and put valid double properties", function(done) {
        testClient.primitive.getDouble(function(error, result) {
          assert.equal(error, undefined);
          assert.equal(result.field1, 3e-100);
          result.field56ZerosAfterTheDotAndNegativeZeroBeforeDotAndThisIsALongFieldNameOnPurpose.should.equal(
            -0.000000000000000000000000000000000000000000000000000000005
          );
          testClient.primitive.putDouble(
            {
              field1: 3e-100,
              field56ZerosAfterTheDotAndNegativeZeroBeforeDotAndThisIsALongFieldNameOnPurpose: -0.000000000000000000000000000000000000000000000000000000005
            },
            function(error, result) {
              assert.equal(error, undefined);
              done();
            }
          );
        });
      });

      it("should get and put valid bool properties", function(done) {
        testClient.primitive.getBool(function(error, result) {
          assert.equal(error, undefined);
          result.fieldTrue.should.equal(true);
          result.fieldFalse.should.equal(false);
          testClient.primitive.putBool(
            { fieldTrue: true, fieldFalse: false },
            function(error, result) {
              assert.equal(error, undefined);
              done();
            }
          );
        });
      });

      it("should get and put valid string properties", function(done) {
        testClient.primitive.getString(function(error, result) {
          assert.equal(error, undefined);
          result.field.should.equal("goodrequest");
          result.empty.should.equal("");
          assert.equal(result["nullProperty"], undefined);
          testClient.primitive.putString(
            { field: "goodrequest", empty: "" },
            function(error, result) {
              assert.equal(error, undefined);
              done();
            }
          );
        });
      });

      it("should get and put valid date properties", function(done) {
        testClient.primitive.getDate(function(error, result) {
          assert.equal(error, undefined);
          assert.deepEqual(result.field, new Date("0001-01-01"));
          assert.deepEqual(result.leap, new Date("2016-02-29"));
          var complexBody = <BodyComplexModels.DateWrapper>{
            field: new Date("0001-01-01"),
            leap: new Date("2016-02-29")
          };
          testClient.primitive.putDate(complexBody, function(error, result) {
            assert.equal(error, undefined);
            done();
          });
        });
      });
      it("should get and put valid date-time properties", function(done) {
        testClient.primitive.getDateTime(function(error, result) {
          assert.equal(error, undefined);
          assert.deepEqual(result.field, new Date("0001-01-01T00:00:00Z"));
          assert.deepEqual(result.now, new Date("2015-05-18T18:38:00Z"));
          testClient.primitive.putDateTime(
            {
              field: new Date("0001-01-01T00:00:00Z"),
              now: new Date("2015-05-18T18:38:00Z")
            },
            function(error, result) {
              assert.equal(error, undefined);
              done();
            }
          );
        });
      });

      it("should get and put valid date-time-rfc1123 properties", function(done) {
        var timeStringOne = "Mon, 01 Jan 0001 00:00:00 GMT";
        var timeStringTwo = "Mon, 18 May 2015 11:38:00 GMT";
        testClient.primitive.getDateTimeRfc1123(function(error, result) {
          assert.equal(error, undefined);
          assert.deepEqual(result.field, new Date(timeStringOne));
          assert.deepEqual(result.now, new Date(timeStringTwo));
          var dateFormat = "ddd, DD MMM YYYY HH:mm:ss";

          //Have to use moment.js to construct the date object because NodeJS default Date constructor doesn't parse "old" RFC dates right
          var fieldDate = moment.utc(timeStringOne, dateFormat).toDate();
          testClient.primitive.putDateTimeRfc1123(
            { field: fieldDate, now: new Date(timeStringTwo) },
            function(error, result) {
              assert.equal(error, undefined);
              done();
            }
          );
        });
      });

      it("should get and put valid duration properties", async function() {
        const durationString = "P123DT22H14M12.011S";
        const result = await testClient.primitive.getDuration();
        assert.equal(result.field, durationString);
        await testClient.primitive.putDuration({ field: durationString });
      });

      it("should get and put valid byte properties", function(done) {
        var byteBuffer = new Uint8Array([
          255,
          254,
          253,
          252,
          0,
          250,
          249,
          248,
          247,
          246
        ]);
        testClient.primitive.getByte(function(error, result) {
          assert.equal(error, undefined);
          assert.deepEqual(
            [].slice.apply(result.field),
            [].slice.apply(byteBuffer)
          );
          testClient.primitive.putByte({ field: byteBuffer }, function(
            error,
            result
          ) {
            assert.equal(error, undefined);
            done();
          });
        });
      });
    });

    describe("Array Types Operations", function() {
      var testClient = new BodyComplexClient(clientOptions);
      it("should get valid array type properties", function(done) {
        var testArray = [
          "1, 2, 3, 4",
          "",
          null,
          "&S#$(*Y",
          "The quick brown fox jumps over the lazy dog"
        ];
        testClient.array.getValid(function(error, result) {
          assert.equal(error, undefined);
          assert.deepEqual(result.arrayProperty, testArray);
          testClient.array.putValid({ array: testArray }, function(
            error,
            result
          ) {
            assert.equal(error, undefined);
            done();
          });
        });
      });

      it("should get and put empty array type properties", function(done) {
        testClient.array.getEmpty(function(error, result) {
          assert.equal(error, undefined);
          assert.deepEqual(result.arrayProperty, []);
          testClient.array.putEmpty({ array: [] }, function(error, result) {
            assert.equal(error, undefined);
            done();
          });
        });
      });

      it("should get array type properties when the payload is empty", function(done) {
        testClient.array.getNotProvided(function(error, result) {
          assert.equal(error, undefined);
          assert.equal(result.arrayProperty, undefined);
          done();
        });
      });
    });

    describe("Dictionary Types Operations", function() {
      var testClient = new BodyComplexClient(clientOptions);
      it("should get and put valid dictionary type properties", function(done) {
        var testDictionary: { [propertyName: string]: any } = {
          txt: "notepad",
          bmp: "mspaint",
          xls: "excel",
          exe: "",
          "": null
        };
        testClient.dictionary.getValid(function(error, result) {
          assert.equal(error, undefined);
          assert.deepEqual(result.defaultProgram, testDictionary);
          testClient.dictionary.putValid(
            { defaultProgram: testDictionary },
            function(error, result) {
              assert.equal(error, undefined);
              done();
            }
          );
        });
      });

      it("should get and put empty dictionary type properties", function(done) {
        testClient.dictionary.getEmpty(function(error, result) {
          assert.equal(error, undefined);
          assert.deepEqual(result.defaultProgram, {});
          testClient.dictionary.putEmpty({ defaultProgram: {} }, function(
            error,
            result
          ) {
            assert.equal(error, undefined);
            done();
          });
        });
      });

      it("should get null dictionary type properties", function(done) {
        testClient.dictionary.getNull(function(error, result) {
          assert.equal(error, undefined);
          assert.equal(result.defaultProgram, undefined);
          done();
        });
      });

      it("should get dictionary type properties when the payload is empty", function(done) {
        testClient.dictionary.getNotProvided(function(error, result) {
          assert.equal(error, undefined);
          assert.equal(result.defaultProgram, undefined);
          done();
        });
      });
    });

    describe("Complex Types with Inheritance Operations", function() {
      var siamese = {
        breed: "persian",
        color: "green",
        hates: [
          { food: "tomato", id: 1, name: "Potato" },
          { food: "french fries", id: -1, name: "Tomato" }
        ],
        id: 2,
        name: "Siameeee"
      };
      var testClient = new BodyComplexClient(clientOptions);
      it("should get valid basic type properties", function(done) {
        testClient.inheritance.getValid(function(error, result) {
          assert.equal(error, undefined);
          assert.deepEqual(result, siamese);
          testClient.inheritance.putValid(siamese, function(error, result) {
            assert.equal(error, undefined);
            done();
          });
        });
      });
    });

    describe("Complex Types with ReadOnly Properties", function() {
      var testClient = new BodyComplexClient(clientOptions);
      it("should get and put complex types with readonly properties", function(done) {
        testClient.readonlyproperty.getValid(function(error, result) {
          assert.equal(error, undefined);
          testClient.readonlyproperty.putValid(result, function(error, result) {
            assert.equal(error, undefined);
            done();
          });
        });
      });
    });

    describe("Complex Types with Polymorphism Operations", function() {
      var getFish = () => ({
        fishtype: "salmon",
        location: "alaska",
        iswild: true,
        species: "king",
        length: 1.0,
        siblings: [
          {
            fishtype: "shark",
            age: 6,
            birthday: new Date("2012-01-05T01:00:00Z"),
            length: 20.0,
            species: "predator"
          },
          {
            fishtype: "sawshark",
            age: 105,
            birthday: new Date("1900-01-05T01:00:00Z"),
            length: 10.0,
            picture: new Uint8Array([255, 255, 255, 255, 254]),
            species: "dangerous"
          },
          {
            fishtype: "goblin",
            color: "pinkish-gray" as BodyComplexModels.GoblinSharkColor,
            age: 1,
            length: 30,
            species: "scary",
            birthday: new Date("2015-08-08T00:00:00Z"),
            jawsize: 5
          }
        ]
      });
      var testClient = new BodyComplexClient(clientOptions);
      it("should get valid polymorphic properties", async function() {
        const getResult = await testClient.polymorphism.getValid();

        const actualBytes = getResult.siblings[1].picture;
        assert.equal(!!actualBytes, true);
        assert.equal(actualBytes.length, 5);
        assert.equal(actualBytes[0], 255);
        assert.equal(actualBytes[1], 255);
        assert.equal(actualBytes[2], 255);
        assert.equal(actualBytes[3], 255);
        assert.equal(actualBytes[4], 254);

        // Working around the fact that Uint8Array doesn't work with deepEqual
        delete (getResult.siblings[1] as BodyComplexModels.Sawshark).picture;
        const expectedFish = getFish();
        delete (expectedFish.siblings[1] as BodyComplexModels.Sawshark).picture;
        assert.deepEqual(getResult, expectedFish);

        await testClient.polymorphism.putValid(getFish());
      });
      var getBadfish = () => ({
        fishtype: "sawshark",
        species: "snaggle toothed",
        length: 18.5,
        age: 2,
        birthday: new Date("2013-06-01T01:00:00Z"),
        location: "alaska",
        picture: new Uint8Array([255, 255, 255, 255, 254]),
        siblings: [
          {
            fishtype: "shark",
            species: "predator",
            birthday: new Date("2012-01-05T01:00:00Z"),
            length: 20,
            age: 6
          },
          {
            fishtype: "sawshark",
            species: "dangerous",
            picture: new Uint8Array([255, 255, 255, 255, 254]),
            length: 10,
            age: 105
          }
        ]
      });
      it("should throw when required fields are omitted from polymorphic types", async function() {
        try {
          await testClient.polymorphism.putValidMissingRequired(getBadfish());
          assert.fail("Expected to throw");
        } catch (error) {
          assert.equal(!!error, true);
          assert.ok(error.message.indexOf("birthday") > -1);
          assert.ok(error.message.indexOf("cannot be null or undefined") > -1);
        }
      });

      var getRawSalmon = () => ({
        fishtype: "smart_salmon",
        location: "alaska",
        iswild: true,
        species: "king",
        additionalProperty1: 1,
        additionalProperty2: false,
        additionalProperty3: "hello",
        additionalProperty4: { a: 1, b: 2 },
        additionalProperty5: [1, 3],
        length: 1,
        siblings: [
          {
            species: "predator",
            length: 20,
            fishtype: "shark",
            age: 6,
            birthday: new Date("2012-01-05T01:00:00.000Z")
          },
          {
            species: "dangerous",
            length: 10,
            fishtype: "sawshark",
            age: 105,
            birthday: new Date("1900-01-05T01:00:00.000Z"),
            picture: new Uint8Array([255, 255, 255, 255, 254])
          },
          {
            species: "scary",
            length: 30,
            color: "pinkish-gray" as BodyComplexModels.GoblinSharkColor,
            fishtype: "goblin",
            age: 1,
            birthday: new Date("2015-08-08T00:00:00.000Z"),
            jawsize: 5
          }
        ]
      });

      it("should get complicated polymorphic types", async function() {
        const result = await testClient.polymorphism.getComplicated();

        const picture =
          (result.siblings[1] as BodyComplexModels.Sawshark).picture || [];
        assert.equal(!!picture, true);
        assert.equal(picture.length, 5);
        assert.equal(picture[0], 255);
        assert.equal(picture[1], 255);
        assert.equal(picture[2], 255);
        assert.equal(picture[3], 255);
        assert.equal(picture[4], 254);
        delete (result.siblings[1] as BodyComplexModels.Sawshark).picture;

        const rawSalmon = getRawSalmon();
        delete (rawSalmon.siblings[1] as BodyComplexModels.Sawshark).picture;

        assert.deepEqual(result, rawSalmon);
      });

      it("should put complicated polymorphic types", async function() {
        await testClient.polymorphism.putComplicated(getRawSalmon());
      });

      it("should put polymorphic types missing discriminator", async function() {
        const requestBody = getFish();
        delete requestBody.fishtype;

        const response = await testClient.polymorphism.putMissingDiscriminator(
          requestBody as BodyComplexModels.Salmon
        );

        const picture =
          (response.siblings[1] as BodyComplexModels.Sawshark).picture || [];
        delete (response.siblings[1] as BodyComplexModels.Sawshark).picture;
        assert.equal(!!picture, true);
        assert.equal(picture.length, 5);
        assert.equal(picture[0], 255);
        assert.equal(picture[1], 255);
        assert.equal(picture[2], 255);
        assert.equal(picture[3], 255);
        assert.equal(picture[4], 254);

        const expected = getFish();
        delete (expected.siblings[1] as BodyComplexModels.Sawshark).picture;

        assert.deepStrictEqual(response, expected);
      });
    });

    describe("Complex Types with recursive definitions", function() {
      var getBigfish = () => ({
        fishtype: "salmon",
        location: "alaska",
        iswild: true,
        species: "king",
        length: 1,
        siblings: [
          <BodyComplexModels.Shark>{
            fishtype: "shark",
            age: 6,
            birthday: new Date("2012-01-05T01:00:00Z"),
            species: "predator",
            length: 20,
            siblings: [
              <BodyComplexModels.Salmon>{
                fishtype: "salmon",
                location: "atlantic",
                iswild: true,
                species: "coho",
                length: 2,
                siblings: [
                  <BodyComplexModels.Shark>{
                    fishtype: "shark",
                    age: 6,
                    birthday: new Date("2012-01-05T01:00:00Z"),
                    species: "predator",
                    length: 20
                  },
                  <BodyComplexModels.Sawshark>{
                    fishtype: "sawshark",
                    age: 105,
                    birthday: new Date("1900-01-05T01:00:00Z"),
                    picture: new Uint8Array([255, 255, 255, 255, 254]),
                    species: "dangerous",
                    length: 10
                  }
                ]
              },
              <BodyComplexModels.Sawshark>{
                fishtype: "sawshark",
                age: 105,
                birthday: new Date("1900-01-05T01:00:00Z"),
                picture: new Uint8Array([255, 255, 255, 255, 254]),
                species: "dangerous",
                length: 10,
                siblings: []
              }
            ]
          },
          <BodyComplexModels.Sawshark>{
            fishtype: "sawshark",
            age: 105,
            birthday: new Date("1900-01-05T01:00:00Z"),
            picture: new Uint8Array([255, 255, 255, 255, 254]),
            species: "dangerous",
            length: 10,
            siblings: []
          }
        ]
      });
      var testClient = new BodyComplexClient(clientOptions);
      it("should get and put valid basic type properties", async function() {
        const result = await testClient.polymorphicrecursive.getValid();

        function checkSawshark(sawshark) {
          const actualBytes = sawshark.picture;
          actualBytes.should.exist;
          actualBytes.length.should.equal(5);
          assert.equal(actualBytes[0], 255);
          assert.equal(actualBytes[1], 255);
          assert.equal(actualBytes[2], 255);
          assert.equal(actualBytes[3], 255);
          assert.equal(actualBytes[4], 254);
          delete sawshark.picture;
        }

        checkSawshark(result.siblings[0].siblings[0].siblings[1]);
        checkSawshark(result.siblings[0].siblings[1]);
        checkSawshark(result.siblings[1]);

        const bigfish = getBigfish();
        delete ((bigfish.siblings[0] as any).siblings[0]
          .siblings[1] as BodyComplexModels.Sawshark).picture;
        delete ((bigfish.siblings[0] as any)
          .siblings[1] as BodyComplexModels.Sawshark).picture;
        delete (bigfish.siblings[1] as BodyComplexModels.Sawshark).picture;

        assert.deepEqual(result, bigfish);
        await testClient.polymorphicrecursive.putValid(getBigfish());
      });
    });
  });
});
