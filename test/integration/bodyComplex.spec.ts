import { assert } from "chai";
import * as moment from "moment";
import {
  BodyComplexWithTracing,
  DotFishUnion
} from "./generated/bodyComplexWithTracing/src";
import {
  BodyComplexClient,
  Sawshark,
  Salmon,
  ArrayWrapper,
  Shark,
  Goblinshark,
  FishUnion,
  DateWrapper,
  GoblinSharkColor,
  DotSalmon
} from "./generated/bodyComplex/src";
import { responseStatusChecker } from "../utils/responseStatusChecker";
import { PipelinePolicy } from "@azure/core-rest-pipeline";

const clientOptions = {
  endpoint: "http://localhost:3000",
  allowInsecureConnection: true
};

[BodyComplexWithTracing, BodyComplexClient].forEach(Client => {
  describe(`${Client.name}`, function() {
    describe("Swagger Complex Type BAT", function() {
      describe("Basic Types Operations", function() {
        let testClient: BodyComplexClient | BodyComplexWithTracing;
        beforeEach(() => {
          testClient = new Client(clientOptions);
        });
        it("should get and put valid basic type properties", async function() {
          const result = await testClient.basic.getValid();
          assert.strictEqual(result.id, 2);
          assert.strictEqual(result.name, "abc");
          assert.strictEqual(result.color, "YELLOW");

          await testClient.basic.putValid(
            {
              id: 2,
              name: "abc",
              color: "Magenta"
            },
            responseStatusChecker
          );
        });

        it("should get null basic type properties", async function() {
          const result = await testClient.basic.getNull();
          assert.strictEqual(null, result.id);
          assert.strictEqual(null, result.name);
        });

        it("should get empty basic type properties", async () => {
          const result = await testClient.basic.getEmpty();
          assert.strictEqual(result.id, undefined);
          assert.strictEqual(result.name, undefined);
        });

        it("should get basic type properties when the payload is empty", async () => {
          await testClient.basic.getNotProvided();
          assert.ok("Request succeeded with no errors");
        });

        it("should deserialize invalid basic types without throwing", async () => {
          // TODO double check
          const result = await testClient.basic.getInvalid();
          assert.ok("Deserialized invalid basic types without throwing");
        });
      });

      describe("Primitive Types Operations", function() {
        let testClient: BodyComplexClient | BodyComplexWithTracing;
        beforeEach(() => {
          testClient = new BodyComplexClient(clientOptions);
        });

        it("should handle getComplexPolymorphismDotSyntax", async () => {
          await testClient.primitive.putDouble(
            {
              field1: 3e-100,
              field56ZerosAfterTheDotAndNegativeZeroBeforeDotAndThisIsALongFieldNameOnPurpose: -5e-57
            },
            responseStatusChecker
          );
        });

        it("should handle getComplexPolymorphismDotSyntax", async () => {
          const result = await testClient.primitive.getDouble();
          assert.strictEqual(result.field1, 3e-100);
          assert.strictEqual(
            result.field56ZerosAfterTheDotAndNegativeZeroBeforeDotAndThisIsALongFieldNameOnPurpose,
            -0.000000000000000000000000000000000000000000000000000000005
          );
        });

        it("should get and put valid int properties", async () => {
          const result = await testClient.primitive.getInt();
          assert.strictEqual(result.field1, -1);
          assert.strictEqual(result.field2, 2);

          await testClient.primitive.putInt(
            {
              field1: -1,
              field2: 2
            },
            responseStatusChecker
          );
        });

        it("should get and put valid long properties", async () => {
          const result = await testClient.primitive.getLong();
          assert.strictEqual(result.field1, 1099511627775);
          assert.strictEqual(result.field2, -999511627788);

          await testClient.primitive.putLong(
            {
              field1: 1099511627775,
              field2: -999511627788
            },
            responseStatusChecker
          );
        });

        it("should get and put valid float properties", async () => {
          const result = await testClient.primitive.getFloat();
          assert.strictEqual(result.field1, 1.05);
          assert.strictEqual(result.field2, -0.003);

          await testClient.primitive.putFloat(
            {
              field1: 1.05,
              field2: -0.003
            },
            responseStatusChecker
          );
        });

        it("should get and put valid bool properties", async () => {
          const result = await testClient.primitive.getBool();
          assert.strictEqual(result.fieldTrue, true);
          assert.strictEqual(result.fieldFalse, false);

          await testClient.primitive.putBool(
            {
              fieldTrue: true,
              fieldFalse: false
            },
            responseStatusChecker
          );
        });

        it("should get and put valid string properties", async () => {
          const result = await testClient.primitive.getString();
          assert.strictEqual(result.field, "goodrequest");
          assert.strictEqual(result.empty, "");
          assert.strictEqual((result as any)["nullProperty"], undefined);

          await testClient.primitive.putString(
            {
              field: "goodrequest",
              empty: ""
            },
            responseStatusChecker
          );
        });

        it("should get and put valid date properties", async () => {
          const result = await testClient.primitive.getDate();
          assert.deepEqual(result.field, new Date("0001-01-01"));
          assert.deepEqual(result.leap, new Date("2016-02-29"));

          const complexBody = <DateWrapper>{
            field: new Date("0001-01-01"),
            leap: new Date("2016-02-29")
          };

          await testClient.primitive.putDate(
            complexBody,
            responseStatusChecker
          );
        });

        it("should get and put valid date-time properties", async () => {
          const result = await testClient.primitive.getDateTime();
          assert.deepEqual(result.field, new Date("0001-01-01T00:00:00Z"));
          assert.deepEqual(result.now, new Date("2015-05-18T18:38:00Z"));

          await testClient.primitive.putDateTime(
            {
              field: new Date("0001-01-01T00:00:00Z"),
              now: new Date("2015-05-18T18:38:00Z")
            },
            responseStatusChecker
          );
        });

        it("should get and put valid date-time-rfc1123 properties", async () => {
          const timeStringOne = "Mon, 01 Jan 0001 00:00:00 GMT";
          const timeStringTwo = "Mon, 18 May 2015 11:38:00 GMT";

          const result = await testClient.primitive.getDateTimeRfc1123();
          assert.deepEqual(result.field, new Date(timeStringOne));
          assert.deepEqual(result.now, new Date(timeStringTwo));

          const dateFormat = "ddd, DD MMM YYYY HH:mm:ss";
          const fieldDate = moment.utc(timeStringOne, dateFormat).toDate();
          await testClient.primitive.putDateTimeRfc1123(
            {
              field: fieldDate,
              now: new Date(timeStringTwo)
            },
            responseStatusChecker
          );
        });

        it("should get and put valid duration properties", async function() {
          const durationString = "P123DT22H14M12.011S";
          const result = await testClient.primitive.getDuration();
          assert.strictEqual(result.field, durationString);

          await testClient.primitive.putDuration(
            {
              field: durationString
            },
            responseStatusChecker
          );
        });

        it("should get and put valid byte properties", async () => {
          const byteBuffer = new Uint8Array([
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
          const result = await testClient.primitive.getByte();
          assert.deepEqual(
            [].slice.apply(result.field),
            [].slice.apply(byteBuffer)
          );

          await testClient.primitive.putByte(
            {
              field: byteBuffer
            },
            responseStatusChecker
          );
        });
      });

      describe("Array Types Operations", function() {
        let testClient: BodyComplexClient | BodyComplexWithTracing;
        beforeEach(() => {
          testClient = new BodyComplexClient(clientOptions);
        });
        it("should get valid array type properties", async () => {
          const testArray: string[] = [
            "1, 2, 3, 4",
            "",
            null as any,
            "&S#$(*Y",
            "The quick brown fox jumps over the lazy dog"
          ];
          const wrapper: ArrayWrapper = { array: testArray };
          const result = await testClient.array.getValid();
          assert.deepEqual(result.array, testArray);

          await testClient.array.putValid(wrapper, responseStatusChecker);
        });

        it("should get and put empty array type properties", async () => {
          const result = await testClient.array.getEmpty();
          assert.deepEqual(result.array, []);
          await testClient.array.putEmpty({ array: [] });
          assert.ok("putEmpty succeeded");
        });

        it("should get array type properties when the payload is empty", async () => {
          const result = await testClient.array.getNotProvided();
          assert.strictEqual(result.array, undefined);
        });
      });

      describe("Dictionary Types Operations", function() {
        let testClient: BodyComplexClient | BodyComplexWithTracing;
        beforeEach(() => {
          testClient = new BodyComplexClient(clientOptions);
        });

        it("should get and put valid dictionary type properties", async () => {
          const testDictionary: { [propertyName: string]: any } = {
            txt: "notepad",
            bmp: "mspaint",
            xls: "excel",
            exe: "",
            "": null
          };
          const result = await testClient.dictionary.getValid();
          assert.deepEqual(result.defaultProgram, testDictionary);

          await testClient.dictionary.putValid({
            defaultProgram: testDictionary
          });

          assert.ok("putValid succeeded");
        });

        it("should get and put empty dictionary type properties", async () => {
          const result = await testClient.dictionary.getEmpty();
          assert.deepEqual(result.defaultProgram, {});
          await testClient.dictionary.putEmpty({ defaultProgram: {} });
          assert.ok("putEmpty Dictionary succeeded");
        });

        it("should get null dictionary type properties", async () => {
          const result = await testClient.dictionary.getNull();
          assert.strictEqual(result.defaultProgram, null);
        });

        it("should get dictionary type properties when the payload is empty", async () => {
          const result = await testClient.dictionary.getNotProvided();
          assert.strictEqual(result.defaultProgram, undefined);
        });
      });

      describe("Complex Types with Inheritance Operations", function() {
        const siamese = {
          breed: "persian",
          color: "green",
          hates: [
            { food: "tomato", id: 1, name: "Potato" },
            { food: "french fries", id: -1, name: "Tomato" }
          ],
          id: 2,
          name: "Siameeee"
        };
        let testClient: BodyComplexClient | BodyComplexWithTracing;

        beforeEach(() => {
          testClient = new BodyComplexClient(clientOptions);
        });

        it("should get valid basic type properties", async () => {
          const result = await testClient.inheritance.getValid();
          assert.deepEqual(result, siamese);
          await testClient.inheritance.putValid(siamese);
          assert.ok("putValid succeeded");
        });
      });

      describe("Complex Types with ReadOnly Properties", function() {
        let testClient: BodyComplexClient | BodyComplexWithTracing;
        beforeEach(() => {
          testClient = new BodyComplexClient(clientOptions);
        });
        it("should get and put complex types with readonly properties", async () => {
          const result = await testClient.readonlyproperty.getValid();
          // TODO verify result properties?
          await testClient.readonlyproperty.putValid(result);
          assert.ok("putComplex succeeded");
        });
      });

      describe("Complex Types with Polymorphism Operations", function() {
        const getFish = (): Salmon => ({
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
            } as Shark,
            {
              fishtype: "sawshark",
              age: 105,
              birthday: new Date("1900-01-05T01:00:00Z"),
              length: 10.0,
              picture: new Uint8Array([255, 255, 255, 255, 254]),
              species: "dangerous"
            } as Sawshark,
            {
              fishtype: "goblin",
              color: "pinkish-gray" as GoblinSharkColor,
              age: 1,
              length: 30,
              species: "scary",
              birthday: new Date("2015-08-08T00:00:00Z"),
              jawsize: 5
            } as Goblinshark
          ]
        });
        let testClient: BodyComplexClient | BodyComplexWithTracing;
        beforeEach(() => {
          testClient = new BodyComplexClient(clientOptions);
        });

        it("should handle getComplexPolymorphismDotSyntax", async () => {
          const result: DotSalmon = await testClient.polymorphism.getDotSyntax();
          assert.strictEqual(result.fishType, "DotSalmon");
          assert.strictEqual(result.species, "king");
          assert.strictEqual(result.location, "sweden");
          assert.strictEqual(result.iswild, true);
        });

        it("should handle getComposedWithoutDiscriminator", async () => {
          const result = await testClient.polymorphism.getComposedWithoutDiscriminator();
          assert.deepStrictEqual(result.sampleSalmon, {
            location: "sweden",
            iswild: false,
            species: "king"
          } as DotSalmon);

          assert.deepStrictEqual(result.sampleFish, {
            location: "australia",
            iswild: false,
            species: "king"
          } as DotSalmon);

          assert.deepStrictEqual(result.salmons, [
            {
              fishType: "DotSalmon",
              location: "sweden",
              iswild: false,
              species: "king"
            },
            {
              fishType: "DotSalmon",
              location: "atlantic",
              iswild: true,
              species: "king"
            }
          ] as DotSalmon[]);

          assert.deepStrictEqual(result.fishes, [
            {
              location: "australia",
              iswild: false,
              species: "king"
            },
            {
              location: "canada",
              iswild: true,
              species: "king"
            }
          ] as DotSalmon[]);
        });

        it("should handle getComposedWithDiscriminator", async () => {
          const result = await testClient.polymorphism.getComposedWithDiscriminator();
          assert.deepStrictEqual(result.sampleSalmon, {
            fishType: "DotSalmon",
            location: "sweden",
            iswild: false,
            species: "king"
          });

          assert.deepStrictEqual(result.sampleFish, {
            fishType: "DotSalmon",
            location: "australia",
            iswild: false,
            species: "king"
          });

          assert.deepStrictEqual(result.salmons, [
            {
              fishType: "DotSalmon",
              location: "sweden",
              iswild: false,
              species: "king"
            },
            {
              fishType: "DotSalmon",
              location: "atlantic",
              iswild: true,
              species: "king"
            }
          ]);

          assert.deepStrictEqual(result.fishes, [
            {
              fishType: "DotSalmon",
              location: "australia",
              iswild: false,
              species: "king"
            },
            {
              fishType: "DotSalmon",
              location: "canada",
              iswild: true,
              species: "king"
            }
          ]);
        });

        it("should get valid polymorphic properties", async function() {
          const getResult = await testClient.polymorphism.getValid();
          const actualBytes = (getResult.siblings![1] as Sawshark)!.picture;
          assert.strictEqual(!!actualBytes, true);
          assert.strictEqual(actualBytes!.length, 5);
          assert.strictEqual(actualBytes![0], 255);
          assert.strictEqual(actualBytes![1], 255);
          assert.strictEqual(actualBytes![2], 255);
          assert.strictEqual(actualBytes![3], 255);
          assert.strictEqual(actualBytes![4], 254);

          // Working around the fact that Uint8Array doesn't work with deepEqual
          delete (getResult.siblings![1] as Sawshark).picture;
          const expectedFish = getFish();
          delete (expectedFish.siblings![1] as Sawshark).picture;
          assert.deepEqual(getResult, expectedFish);

          await testClient.polymorphism.putValid(getFish());
        });
        const getBadfish = (): FishUnion =>
          ({
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
              } as Shark,
              {
                fishtype: "sawshark",
                species: "dangerous",
                picture: new Uint8Array([255, 255, 255, 255, 254]),
                length: 10,
                age: 105
              } as Sawshark
            ]
          } as Sawshark);
        it("should throw when required fields are omitted from polymorphic types", async function() {
          try {
            await testClient.polymorphism.putValidMissingRequired(getBadfish());
            assert.fail("Expected to throw");
          } catch (error) {
            assert.strictEqual(!!error, true);
            assert.ok(error.message.indexOf("birthday") > -1);
            assert.ok(
              error.message.indexOf("cannot be null or undefined") > -1
            );
          }
        });

        // TODO: Handle additionalProperties
        const getRawSalmon = (): any => ({
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
              color: "pinkish-gray" as GoblinSharkColor,
              fishtype: "goblin",
              age: 1,
              birthday: new Date("2015-08-08T00:00:00.000Z"),
              jawsize: 5
            }
          ]
        });

        it("should get complicated polymorphic types", async function() {
          const result = await testClient.polymorphism.getComplicated();
          const picture = (result.siblings![1] as Sawshark)!.picture || [];
          assert.strictEqual(!!picture, true);
          assert.strictEqual(picture.length, 5);
          assert.strictEqual(picture[0], 255);
          assert.strictEqual(picture[1], 255);
          assert.strictEqual(picture[2], 255);
          assert.strictEqual(picture[3], 255);
          assert.strictEqual(picture[4], 254);
          delete (result.siblings![1] as Sawshark).picture;

          const rawSalmon = getRawSalmon();
          delete (rawSalmon.siblings![1] as Sawshark).picture;

          assert.deepEqual(result, rawSalmon);
        });

        it("should put complicated polymorphic types", async function() {
          await testClient.polymorphism.putComplicated(getRawSalmon());
        });

        it("should put polymorphic types missing discriminator", async function() {
          const { fishtype, ...requestBody } = getFish();

          const response = await testClient.polymorphism.putMissingDiscriminator(
            requestBody as any
          );

          const picture = (response.siblings![1] as Sawshark).picture || [];
          delete (response.siblings![1] as Sawshark).picture;
          assert.strictEqual(!!picture, true);
          assert.strictEqual(picture.length, 5);
          assert.strictEqual(picture[0], 255);
          assert.strictEqual(picture[1], 255);
          assert.strictEqual(picture[2], 255);
          assert.strictEqual(picture[3], 255);
          assert.strictEqual(picture[4], 254);

          const expected = getFish();
          delete (expected.siblings![1] as Sawshark).picture;

          assert.deepStrictEqual(response, expected);
        });
      });

      describe("Complex Types with recursive definitions", function() {
        const getBigfish = (): FishUnion => ({
          fishtype: "salmon",
          location: "alaska",
          iswild: true,
          species: "king",
          length: 1,
          siblings: [
            <Shark>{
              fishtype: "shark",
              age: 6,
              birthday: new Date("2012-01-05T01:00:00Z"),
              species: "predator",
              length: 20,
              siblings: [
                <Salmon>{
                  fishtype: "salmon",
                  location: "atlantic",
                  iswild: true,
                  species: "coho",
                  length: 2,
                  siblings: [
                    <Shark>{
                      fishtype: "shark",
                      age: 6,
                      birthday: new Date("2012-01-05T01:00:00Z"),
                      species: "predator",
                      length: 20
                    },
                    <Sawshark>{
                      fishtype: "sawshark",
                      age: 105,
                      birthday: new Date("1900-01-05T01:00:00Z"),
                      picture: new Uint8Array([255, 255, 255, 255, 254]),
                      species: "dangerous",
                      length: 10
                    }
                  ]
                },
                <Sawshark>{
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
            <Sawshark>{
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
        let testClient: BodyComplexClient | BodyComplexWithTracing;
        beforeEach(() => {
          testClient = new BodyComplexClient(clientOptions);
        });
        it("should get and put valid basic type properties", async function() {
          const result = await testClient.polymorphicrecursive.getValid();

          function checkSawshark(sawshark: Sawshark) {
            const actualBytes = sawshark.picture;
            if (actualBytes === undefined) {
              assert.fail("Expected actualBytes to be defined");
            }

            assert.strictEqual(actualBytes!.length, 5);
            assert.strictEqual(actualBytes![0], 255);
            assert.strictEqual(actualBytes![1], 255);
            assert.strictEqual(actualBytes![2], 255);
            assert.strictEqual(actualBytes![3], 255);
            assert.strictEqual(actualBytes![4], 254);
            delete sawshark.picture;
          }

          checkSawshark(
            result.siblings![0].siblings![0].siblings![1] as Sawshark
          );
          checkSawshark(result.siblings![0].siblings![1] as Sawshark);
          checkSawshark(result.siblings![1] as Sawshark);

          const bigfish = getBigfish();
          delete ((bigfish.siblings![0] as any).siblings[0]
            .siblings[1] as Sawshark).picture;
          delete ((bigfish.siblings![0] as any).siblings[1] as Sawshark)
            .picture;
          delete (bigfish.siblings![1] as Sawshark).picture;

          assert.deepEqual(result, bigfish);
          await testClient.polymorphicrecursive.putValid(getBigfish());
        });
      });
    });
  });
});

describe("Validate pipelines", () => {
  let customPolicy: PipelinePolicy;
  let calledCustomPolicy: boolean;

  beforeEach(() => {
    calledCustomPolicy = false;
    customPolicy = {
      sendRequest: (req, next) => {
        calledCustomPolicy = true;
        return next(req);
      },
      name: "test"
    };
  });

  it("should execute custom pipeline when passed in a factory array", async () => {
    const client = new BodyComplexClient({ allowInsecureConnection: true });
    client.pipeline.addPolicy(customPolicy);
    const result = await client.basic.getValid({
      onResponse: rawResponse => {
        // Verify that a default policy was executed
        assert.isTrue(
          rawResponse.request.headers.has("x-ms-client-request-id")
        );
      }
    });

    assert.deepEqual(result.id, 2);
    assert.deepEqual(result.name, "abc");
    assert.deepEqual(result.color, "YELLOW");

    // Verify that a custom policy was executed
    assert.isTrue(calledCustomPolicy);
  });
});
