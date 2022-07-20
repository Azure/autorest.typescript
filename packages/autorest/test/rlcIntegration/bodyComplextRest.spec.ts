import { assert } from "chai";
import BodyComplexRest, {
  BodyComplexRestClient,
  DotSalmonOutput,
  Fish,
  FishOutput,
  Salmon,
  SalmonOutput,
  Sawshark,
  SmartSalmon,
  Siamese,
  isUnexpected,
  SawsharkOutput
} from "./generated/bodyComplexRest/src";

describe("BodyComplex Rest Client", () => {
  let client: BodyComplexRestClient;

  beforeEach(() => {
    client = BodyComplexRest({ allowInsecureConnection: true });
  });

  describe("Swagger Complex Type BAT", () => {
    describe("Basic Types Operations", function() {
      it("should get and put valid basic type properties", async () => {
        const result = await client.path("/complex/basic/valid").get();
        try {
          if (isUnexpected(result)) {
            const error = `Unexpected status code ${result.body.message}`;
            assert.fail(error);
          }

          assert.strictEqual(result.body.id, 2);
          assert.strictEqual(result.body.name, "abc");
          assert.strictEqual(result.body.color, "YELLOW");

          const resultPut = await client
            .path("/complex/basic/valid")
            .put({ body: { id: 2, name: "abc", color: "Magenta" } });

          assert.equal(resultPut.status, "200");
        } catch (err) {
          assert.fail(err);
        }
      });

      it("should get null basic type properties", async () => {
        // const result = await testClient.basic.getNull();
        try {
          const result = await client.path("/complex/basic/null").get();

          if (isUnexpected(result)) {
            const error = `Unexpected status code ${result.status}`;
            assert.fail(error);
            throw error;
          }

          assert.strictEqual(null, result.body.id);
          assert.strictEqual(null, result.body.name);
        } catch (err) {
          assert.fail(err);
        }
      });

      it("should get empty basic type properties", async () => {
        // const result = await testClient.basic.getEmpty();
        try {
          const result = await client.path("/complex/basic/empty").get();

          if (isUnexpected(result)) {
            const error = `Unexpected status code ${result.status}`;
            assert.fail(error);
            throw error;
          }

          assert.strictEqual(result.body.id, undefined);
          assert.strictEqual(result.body.name, undefined);
        } catch (err) {
          assert.fail(err);
        }
      });

      it("should get basic type properties when the payload is empty", async () => {
        const result = await client.path("/complex/basic/notprovided").get();
        assert.equal(result.body, undefined);
      });

      it("should deserialize invalid basic types without throwing", async () => {
        const result = await client.path("/complex/basic/invalid").get();

        if (isUnexpected(result)) {
          const error = `Unexpected status code ${result.status}`;
          assert.fail(error);
          throw error;
        }

        assert.deepEqual(result.body, { id: "a", name: "abc" } as any);
      });
    });

    describe("Primitive Types Operations", function() {
      it("should handle getComplexPolymorphismDotSyntax", async () => {
        const result = await client.path("/complex/primitive/double").put({
          body: {
            field1: 3e-100,
            field_56_zeros_after_the_dot_and_negative_zero_before_dot_and_this_is_a_long_field_name_on_purpose: -5e-57
          }
        });

        assert.equal(result.status, "200");
      });

      it("should handle getComplexPolymorphismDotSyntax", async () => {
        const result = await client.path("/complex/primitive/double").get();

        if (isUnexpected(result)) {
          const error = `Unexpected status code ${result.status}`;
          assert.fail(error);
          throw error;
        }

        assert.strictEqual(result.body.field1, 3e-100);
        assert.strictEqual(
          result.body
            .field_56_zeros_after_the_dot_and_negative_zero_before_dot_and_this_is_a_long_field_name_on_purpose,
          -0.000000000000000000000000000000000000000000000000000000005
        );
      });

      it("should get and put valid int properties", async () => {
        const result = await client.path("/complex/primitive/integer").get();

        if (isUnexpected(result)) {
          const error = `Unexpected status code ${result.status}`;
          assert.fail(error);
          throw error;
        }

        assert.strictEqual(result.body.field1, -1);
        assert.strictEqual(result.body.field2, 2);

        const resultPut = await client
          .path("/complex/primitive/integer")
          .put({ body: { field1: -1, field2: 2 } });
        assert.equal(resultPut.status, "200");
      });

      it("should get and put valid long properties", async () => {
        const result = await client.path("/complex/primitive/long").get();

        if (isUnexpected(result)) {
          const error = `Unexpected status code ${result.status}`;
          assert.fail(error);
          throw error;
        }
        assert.strictEqual(result.body.field1, 1099511627775);
        assert.strictEqual(result.body.field2, -999511627788);

        const resultPut = await client.path("/complex/primitive/long").put({
          body: {
            field1: 1099511627775,
            field2: -999511627788
          }
        });

        assert.equal(resultPut.status, "200");
      });

      it("should get and put valid float properties", async () => {
        const result = await client.path("/complex/primitive/float").get();

        if (isUnexpected(result)) {
          const error = `Unexpected status code ${result.status}`;
          assert.fail(error);
          throw error;
        }
        assert.strictEqual(result.body.field1, 1.05);
        assert.strictEqual(result.body.field2, -0.003);

        const resultPut = await client.path("/complex/primitive/float").put({
          body: {
            field1: 1.05,
            field2: -0.003
          }
        });

        assert(resultPut.status, "200");
      });

      it("should get and put valid bool properties", async () => {
        const result = await client.path("/complex/primitive/bool").get();

        if (isUnexpected(result)) {
          const error = `Unexpected status code ${result.status}`;
          assert.fail(error);
          throw error;
        }

        assert.strictEqual(result.body.field_true, true);
        assert.strictEqual(result.body.field_false, false);

        const resultPut = await client.path("/complex/primitive/bool").put({
          body: {
            field_true: true,
            field_false: false
          }
        });

        assert.equal(resultPut.status, "200");
      });

      it("should get and put valid string properties", async () => {
        const result = await client.path("/complex/primitive/string").get();

        if (isUnexpected(result)) {
          const error = `Unexpected status code ${result.status}`;
          assert.fail(error);
          throw error;
        }

        assert.strictEqual(result.body.field, "goodrequest");
        assert.strictEqual(result.body.empty, "");
        assert.strictEqual((result as any)["nullProperty"], undefined);

        const resultPut = await client.path("/complex/primitive/string").put({
          body: {
            field: "goodrequest",
            empty: ""
          }
        });

        assert.equal(resultPut.status, "200");
      });

      it("should get and put valid date properties", async () => {
        const result = await client.path("/complex/primitive/date").get();

        if (isUnexpected(result)) {
          const error = `Unexpected status code ${result.status}`;
          assert.fail(error);
          throw error;
        }
        assert.deepEqual(result.body.field, "0001-01-01");
        assert.deepEqual(result.body.leap, "2016-02-29");

        const resultPut = await client.path("/complex/primitive/date").put({
          body: {
            field: "0001-01-01",
            leap: "2016-02-29"
          }
        });

        assert.equal(resultPut.status, "200");
      });

      it("should get and put valid date-time properties", async () => {
        const result = await client.path("/complex/primitive/datetime").get();

        if (isUnexpected(result)) {
          const error = `Unexpected status code ${result.status}`;
          assert.fail(error);
          throw error;
        }
        assert.deepEqual(result.body.field, "0001-01-01T00:00:00Z");
        assert.deepEqual(result.body.now, "2015-05-18T18:38:00Z");

        const resultPut = await client.path("/complex/primitive/datetime").put({
          body: {
            field: new Date("0001-01-01T00:00:00Z"),
            now: new Date("2015-05-18T18:38:00Z")
          }
        });

        assert.equal(resultPut.status, "200");
      });

      it("should get and put valid date-time-rfc1123 properties", async () => {
        const timeStringOne = "Mon, 01 Jan 0001 00:00:00 GMT";
        const timeStringTwo = "Mon, 18 May 2015 11:38:00 GMT";

        const result = await client
          .path("/complex/primitive/datetimerfc1123")
          .get();

        if (isUnexpected(result)) {
          const error = `Unexpected status code ${result.status}`;
          assert.fail(error);
          throw error;
        }
        assert.deepEqual(result.body.field, timeStringOne);
        assert.deepEqual(result.body.now, timeStringTwo);

        const resultPut = await client
          .path("/complex/primitive/datetimerfc1123")
          .put({
            body: {
              field: timeStringOne,
              now: timeStringTwo
            }
          });
        assert.equal(resultPut.status, "200");
      });

      it("should get and put valid duration properties", async function() {
        const durationString = "P123DT22H14M12.011S";
        const result = await client.path("/complex/primitive/duration").get();

        if (isUnexpected(result)) {
          const error = `Unexpected status code ${result.status}`;
          assert.fail(error);
          throw error;
        }

        assert.strictEqual(result.body.field, durationString);

        const resultPut = await client.path("/complex/primitive/duration").put({
          body: {
            field: durationString
          }
        });

        assert.equal(resultPut.status, "200");
      });

      it("should get and put valid byte properties", async () => {
        const expectedBytes = "//79/AD6+fj39g==";

        const result = await client.path("/complex/primitive/byte").get();

        if (isUnexpected(result)) {
          const error = `Unexpected status code ${result.status}`;
          assert.fail(error);
          throw error;
        }

        assert.deepEqual(result.body.field, expectedBytes);

        const resultPut = await client.path("/complex/primitive/byte").put({
          body: {
            field: expectedBytes
          }
        });

        assert.equal(resultPut.status, "200");
      });
    });

    describe("Array Types Operations", function() {
      it("should get valid array type properties", async () => {
        const testArray: string[] = [
          "1, 2, 3, 4",
          "",
          null as any,
          "&S#$(*Y",
          "The quick brown fox jumps over the lazy dog"
        ];
        const result = await client.path("/complex/array/valid").get();

        if (isUnexpected(result)) {
          const error = `Unexpected status code ${result.status}`;
          assert.fail(error);
          throw error;
        }

        assert.deepEqual(result.body.array, testArray);

        const resultPut = await client
          .path("/complex/array/valid")
          .put({ body: { array: testArray } });

        assert.equal(resultPut.status, "200");
      });

      it("should get and put empty array type properties", async () => {
        const result = await client.path("/complex/array/empty").get();
        if (isUnexpected(result)) {
          const error = `Unexpected status code ${result.status}`;
          assert.fail(error);
          throw error;
        }

        assert.deepEqual(result.body.array, []);

        const resultPut = await client
          .path("/complex/array/empty")
          .put({ body: { array: [] } });

        assert.equal(resultPut.status, "200");
      });

      it("should get array type properties when the payload is empty", async () => {
        const result = await client.path("/complex/array/notprovided").get();
        if (isUnexpected(result)) {
          const error = `Unexpected status code ${result.status}`;
          assert.fail(error);
          throw error;
        }
        assert.strictEqual(result.body.array, undefined);
      });
    });

    describe("Dictionary Types Operations", function() {
      it("should get and put valid dictionary type properties", async () => {
        const testDictionary: { [propertyName: string]: any } = {
          txt: "notepad",
          bmp: "mspaint",
          xls: "excel",
          exe: "",
          "": null
        };
        const result = await client
          .path("/complex/dictionary/typed/valid")
          .get();

        if (isUnexpected(result)) {
          const error = `Unexpected status code ${result.status}`;
          assert.fail(error);
          throw error;
        }

        assert.deepEqual(result.body.defaultProgram, testDictionary);

        const resultPut = await client
          .path("/complex/dictionary/typed/valid")
          .put({ body: { defaultProgram: testDictionary } });
        assert.deepEqual(resultPut.status, "200");
      });

      it("should get and put empty dictionary type properties", async () => {
        const result = await client
          .path("/complex/dictionary/typed/empty")
          .get();

        if (isUnexpected(result)) {
          const error = `Unexpected status code ${result.status}`;
          assert.fail(error);
          throw error;
        }

        assert.deepEqual(result.body.defaultProgram, {});
        const resultPut = await client
          .path("/complex/dictionary/typed/empty")
          .put({ body: { defaultProgram: {} } });
        assert.deepEqual(resultPut.status, "200");
      });

      it("should get null dictionary type properties", async () => {
        const result = await client
          .path("/complex/dictionary/typed/null")
          .get();

        if (isUnexpected(result)) {
          const error = `Unexpected status code ${result.status}`;
          assert.fail(error);
          throw error;
        }

        assert.strictEqual(result.body.defaultProgram, null);
      });

      it("should get dictionary type properties when the payload is empty", async () => {
        const result = await client
          .path("/complex/dictionary/typed/notprovided")
          .get();

        if (isUnexpected(result)) {
          const error = `Unexpected status code ${result.status}`;
          assert.fail(error);
          throw error;
        }
        assert.strictEqual(result.body.defaultProgram, undefined);
      });
    });

    describe("Complex Types with Inheritance Operations", function() {
      const siamese: Siamese = {
        breed: "persian",
        color: "green",
        hates: [
          { food: "tomato", id: 1, name: "Potato" },
          { food: "french fries", id: -1, name: "Tomato" }
        ],
        id: 2,
        name: "Siameeee"
      };

      it("should get valid basic type properties", async () => {
        const result = await client.path("/complex/inheritance/valid").get();

        if (isUnexpected(result)) {
          const error = `Unexpected status code ${result.status}`;
          assert.fail(error);
          throw error;
        }

        assert.deepEqual(result.body, siamese);
        const resultPut = await client
          .path("/complex/inheritance/valid")
          .put({ body: siamese });
        assert.equal(resultPut.status, "200");
      });
    });

    describe("Complex Types with ReadOnly Properties", function() {
      it("should get and put complex types with readonly properties", async () => {
        const result = await client
          .path("/complex/readonlyproperty/valid")
          .get();

        if (isUnexpected(result)) {
          const error = `Unexpected status code ${result.status}`;
          assert.fail(error);
          throw error;
        }

        assert.deepEqual(result.body, { id: "1234", size: 2 });

        const resultPut = await client
          .path("/complex/readonlyproperty/valid")
          .put({ body: { size: result.body.size } });

        assert.equal(resultPut.status, "200");
      });
    });

    describe("Complex Types with Polymorphism Operations", function() {
      function isSawShark(fish: FishOutput): fish is SawsharkOutput {
        return fish.fishtype === "sawshark";
      }

      const testSalmon = {
        fishtype: "salmon",
        location: "alaska",
        iswild: true,
        species: "king",
        length: 1.0,
        siblings: [
          {
            fishtype: "shark",
            age: 6,
            birthday: "2012-01-05T01:00:00Z",
            length: 20.0,
            species: "predator"
          },
          {
            fishtype: "sawshark",
            age: 105,
            birthday: "1900-01-05T01:00:00Z",
            length: 10.0,
            picture: "//////4=",
            species: "dangerous"
          },
          {
            fishtype: "goblin",
            color: "pinkish-gray",
            age: 1,
            length: 30,
            species: "scary",
            birthday: "2015-08-08T00:00:00Z",
            jawsize: 5
          }
        ]
      };

      it("should handle getComplexPolymorphismDotSyntax", async () => {
        const result = await client
          .path("/complex/polymorphism/dotsyntax")
          .get();

        if (isUnexpected(result)) {
          const error = `Unexpected status code ${result.status}`;
          assert.fail(error);
          throw error;
        }

        assert.strictEqual(result.body["fish.type"], "DotSalmon");
        assert.strictEqual(result.body.species, "king");
        assert.strictEqual(result.body.location, "sweden");
        assert.strictEqual(result.body.iswild, true);
      });

      it("should handle getComposedWithoutDiscriminator", async () => {
        const result = await client
          .path("/complex/polymorphism/composedWithoutDiscriminator")
          .get();

        if (isUnexpected(result)) {
          const error = `Unexpected status code ${result.status}`;
          assert.fail(error);
          throw error;
        }

        assert.deepStrictEqual(result.body.sampleSalmon, {
          location: "sweden",
          iswild: false,
          species: "king"
        } as DotSalmonOutput);

        assert.deepStrictEqual(result.body.sampleFish, {
          location: "australia",
          iswild: false,
          species: "king"
        } as DotSalmonOutput);

        assert.deepStrictEqual(result.body.salmons, [
          {
            location: "sweden",
            iswild: false,
            species: "king"
          },
          {
            location: "atlantic",
            iswild: true,
            species: "king"
          }
        ] as DotSalmonOutput[]);

        assert.deepStrictEqual(result.body.fishes, [
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
        ] as DotSalmonOutput[]);
      });

      it("should handle getComposedWithDiscriminator", async () => {
        // const result = await testClient.polymorphism.getComposedWithDiscriminator();
        const result = await client
          .path("/complex/polymorphism/composedWithDiscriminator")
          .get();

        if (isUnexpected(result)) {
          const error = `Unexpected status code ${result.status}`;
          assert.fail(error);
          throw error;
        }

        assert.deepStrictEqual(result.body.sampleSalmon, {
          "fish.type": "DotSalmon",
          location: "sweden",
          iswild: false,
          species: "king"
        });

        assert.deepStrictEqual(result.body.sampleFish, {
          "fish.type": "DotSalmon",
          location: "australia",
          iswild: false,
          species: "king"
        });

        assert.deepStrictEqual(result.body.salmons, [
          {
            "fish.type": "DotSalmon",
            location: "sweden",
            iswild: false,
            species: "king"
          },
          {
            "fish.type": "DotSalmon",
            location: "atlantic",
            iswild: true,
            species: "king"
          }
        ]);

        assert.deepStrictEqual(result.body.fishes, [
          {
            "fish.type": "DotSalmon",
            location: "australia",
            iswild: false,
            species: "king"
          },
          {
            "fish.type": "DotSalmon",
            location: "canada",
            iswild: true,
            species: "king"
          }
        ]);
      });

      it("should get valid polymorphic properties", async function() {
        const result = await client.path("/complex/polymorphism/valid").get();

        if (isUnexpected(result)) {
          const error = `Unexpected status code ${result.status}`;
          assert.fail(error);
          throw error;
        }

        const fish = result.body.siblings![1];
        if (isSawShark(fish)) {
          const actualBytes = fish.picture;
          assert.strictEqual(actualBytes, "//////4=");
        } else {
          assert.fail("Expected a sawshark");
        }

        const expectedFish: SalmonOutput = {
          fishtype: "salmon",
          location: "alaska",
          iswild: true,
          species: "king",
          length: 1.0,
          siblings: [
            {
              fishtype: "shark",
              age: 6,
              birthday: "2012-01-05T01:00:00Z",
              length: 20.0,
              species: "predator"
            },
            {
              fishtype: "sawshark",
              age: 105,
              birthday: "1900-01-05T01:00:00Z",
              length: 10.0,
              picture: "//////4=",
              species: "dangerous"
            },
            {
              fishtype: "goblin",
              age: 1,
              birthday: "2015-08-08T00:00:00Z",
              length: 30.0,
              species: "scary",
              jawsize: 5,
              // Intentionally requiring a value not defined in the enum, since
              // such values should be allowed to be sent to/received from the server
              color: "pinkish-gray"
            }
          ]
        };

        assert.deepEqual(result.body, expectedFish);

        const resultPut = await client
          .path("/complex/polymorphism/valid")
          .put({ body: expectedFish });

        assert.equal(resultPut.status, "200");
      });

      it("should throw when required fields are omitted from polymorphic types", async function() {
        const badFish = {
          fishtype: "sawshark",
          species: "snaggle toothed",
          length: 18.5,
          age: 2,
          birthday: new Date("2013-06-01T01:00:00Z"),
          location: "alaska",
          picture: "//////4=",
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
              picture: "//////4=",
              length: 10,
              age: 105
            }
          ]
        };

        const result = await client
          .path("/complex/polymorphism/missingrequired/invalid")
          .put({ body: badFish as Fish });

        assert.equal(result.status, "400");
      });

      const inputSiblings: Fish[] = [
        {
          species: "predator",
          length: 20,
          fishtype: "shark",
          age: 6,
          birthday: new Date("2012-01-05T01:00:00Z")
        },
        {
          species: "dangerous",
          length: 10,
          fishtype: "sawshark",
          age: 105,
          birthday: new Date("1900-01-05T01:00:00Z"),
          picture: "//////4="
        },
        {
          species: "scary",
          length: 30,
          color: "pinkish-gray",
          fishtype: "goblin",
          age: 1,
          birthday: new Date("2015-08-08T00:00:00.000Z"),
          jawsize: 5
        }
      ];

      const outputSiblings: FishOutput[] = [
        {
          species: "predator",
          length: 20,
          fishtype: "shark",
          age: 6,
          birthday: "2012-01-05T01:00:00Z"
        },
        {
          species: "dangerous",
          length: 10,
          fishtype: "sawshark",
          age: 105,
          birthday: "1900-01-05T01:00:00Z",
          picture: "//////4="
        },
        {
          species: "scary",
          length: 30,
          color: "pinkish-gray",
          fishtype: "goblin",
          age: 1,
          birthday: "2015-08-08T00:00:00Z",
          jawsize: 5
        }
      ];
      const inputSalmon: SmartSalmon = {
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
        siblings: inputSiblings
      };

      const outputSalmon: SalmonOutput = {
        ...inputSalmon,
        siblings: outputSiblings
      };

      it("should get complicated polymorphic types", async function() {
        const result = await client
          .path("/complex/polymorphism/complicated")
          .get();

        if (isUnexpected(result)) {
          const error = `Unexpected status code ${result.status}`;
          assert.fail(error);
          throw error;
        }
        const fish = result.body.siblings![1];
        if (isSawShark(fish)) {
          const picture = fish.picture;
          assert.strictEqual(picture, "//////4=");
        } else {
          assert.fail("Expected to get a SawShark");
        }

        assert.deepEqual(result.body, outputSalmon);
      });

      it("should put complicated polymorphic types", async function() {
        const result = await client
          .path("/complex/polymorphism/complicated")
          .put({ body: inputSalmon });

        assert.equal(result.status, "200");
      });

      it("should put polymorphic types missing discriminator", async function() {
        const regularSalmon = {
          fishtype: "salmon",
          location: "alaska",
          iswild: true,
          species: "king",
          length: 1.0,
          siblings: [
            {
              fishtype: "shark",
              age: 6,
              birthday: "2012-01-05T01:00:00Z",
              length: 20.0,
              species: "predator"
            },
            {
              fishtype: "sawshark",
              age: 105,
              birthday: "1900-01-05T01:00:00Z",
              length: 10.0,
              picture: "//////4=",
              species: "dangerous"
            },
            {
              fishtype: "goblin",
              age: 1,
              birthday: "2015-08-08T00:00:00Z",
              length: 30.0,
              species: "scary",
              jawsize: 5,
              color: "pinkish-gray"
            }
          ]
        };

        const result = await client
          .path("/complex/polymorphism/missingdiscriminator")
          .put({ body: regularSalmon as Salmon });

        if (isUnexpected(result)) {
          const error = `Unexpected status code ${result.status}`;
          assert.fail(error);
          throw error;
        }

        const fish = result.body.siblings![1];

        if (isSawShark(fish)) {
          const picture = fish.picture;
          assert.strictEqual(picture, "//////4=");
        } else {
          assert.fail("Expected to get a SawShark");
        }

        const { fishtype, ...expected } = regularSalmon;
        assert.deepStrictEqual(result.body, expected as SalmonOutput);
      });
    });
  });
});
