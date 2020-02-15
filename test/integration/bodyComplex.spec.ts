import * as assert from "assert";
import * as moment from "moment";

import {
  BodyComplexClient,
  BodyComplexModels
} from "./generated/bodyComplex/src/bodyComplexClient";
import {
  Sawshark,
  Salmon,
  ArrayWrapper,
  Shark,
  Goblinshark,
  FishUnion
} from "./generated/bodyComplex/src/models";
import { RestError } from "@azure/core-http";

const clientOptions = {
  endpoint: "http://localhost:3000"
};

describe("typescript", function() {
  describe("Swagger Complex Type BAT", function() {
    describe("Basic Types Operations", function() {
      let testClient: BodyComplexClient;
      beforeEach(() => {
        testClient = new BodyComplexClient(clientOptions);
      });
      it("should get and put valid basic type properties", async function() {
        const result = await testClient.basic.getValid();
        assert.equal(result.id, 2);
        assert.equal(result.name, "abc");
        assert.equal(result.color, "YELLOW");

        const putResult = await testClient.basic.putValid({
          id: 2,
          name: "abc",
          color: "Magenta"
        });

        assert.equal(putResult._response.status, 200);
      });

      it("should get null basic type properties", async function() {
        const result = await testClient.basic.getNull();
        assert.equal(null, result.id);
        assert.equal(null, result.name);
      });

      it("should get empty basic type properties", async () => {
        const result = await testClient.basic.getEmpty();
        assert.equal(result.id, undefined);
        assert.equal(result.name, undefined);
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
      let testClient: BodyComplexClient;
      beforeEach(() => {
        testClient = new BodyComplexClient(clientOptions);
      });
      it("should get and put valid int properties", async () => {
        const result = await testClient.primitive.getInt();
        assert.equal(result.field1, -1);
        assert.equal(result.field2, 2);

        const putResult = await testClient.primitive.putInt({
          field1: -1,
          field2: 2
        });
        assert.equal(putResult._response.status, 200);
      });

      it("should get and put valid long properties", async () => {
        const result = await testClient.primitive.getLong();
        assert.equal(result.field1, 1099511627775);
        assert.equal(result.field2, -999511627788);

        const putResult = await testClient.primitive.putLong({
          field1: 1099511627775,
          field2: -999511627788
        });
        assert.equal(putResult._response.status, 200);
      });

      it("should get and put valid float properties", async () => {
        const result = await testClient.primitive.getFloat();
        assert.equal(result.field1, 1.05);
        assert.equal(result.field2, -0.003);

        const putResult = await testClient.primitive.putFloat({
          field1: 1.05,
          field2: -0.003
        });
        assert.equal(putResult._response.status, 200);
      });

      it("should get and put valid bool properties", async () => {
        const result = await testClient.primitive.getBool();
        assert.equal(result.fieldTrue, true);
        assert.equal(result.fieldFalse, false);

        const putResult = await testClient.primitive.putBool({
          fieldTrue: true,
          fieldFalse: false
        });
        assert.equal(putResult._response.status, 200);
      });

      it("should get and put valid string properties", async () => {
        const result = await testClient.primitive.getString();
        assert.equal(result.field, "goodrequest");
        assert.equal(result.empty, "");
        assert.equal((result as any)["nullProperty"], undefined);

        const putResult = await testClient.primitive.putString({
          field: "goodrequest",
          empty: ""
        });
        assert.equal(putResult._response.status, 200);
      });

      it("should get and put valid date properties", async () => {
        const result = await testClient.primitive.getDate();
        assert.deepEqual(result.field, new Date("0001-01-01"));
        assert.deepEqual(result.leap, new Date("2016-02-29"));

        const complexBody = <BodyComplexModels.DateWrapper>{
          field: new Date("0001-01-01"),
          leap: new Date("2016-02-29")
        };

        const putResult = await testClient.primitive.putDate(complexBody);
        assert.equal(putResult._response.status, 200);
      });

      it("should get and put valid date-time properties", async () => {
        const result = await testClient.primitive.getDateTime();
        assert.deepEqual(result.field, new Date("0001-01-01T00:00:00Z"));
        assert.deepEqual(result.now, new Date("2015-05-18T18:38:00Z"));

        const putResult = await testClient.primitive.putDateTime({
          field: new Date("0001-01-01T00:00:00Z"),
          now: new Date("2015-05-18T18:38:00Z")
        });
        assert.equal(putResult._response.status, 200);
      });

      it("should get and put valid date-time-rfc1123 properties", async () => {
        const timeStringOne = "Mon, 01 Jan 0001 00:00:00 GMT";
        const timeStringTwo = "Mon, 18 May 2015 11:38:00 GMT";

        const result = await testClient.primitive.getDateTimeRfc1123();
        assert.deepEqual(result.field, new Date(timeStringOne));
        assert.deepEqual(result.now, new Date(timeStringTwo));

        const dateFormat = "ddd, DD MMM YYYY HH:mm:ss";
        const fieldDate = moment.utc(timeStringOne, dateFormat).toDate();
        const putResult = await testClient.primitive.putDateTimeRfc1123({
          field: fieldDate,
          now: new Date(timeStringTwo)
        });

        assert.equal(putResult._response.status, 200);
      });

      it("should get and put valid duration properties", async function() {
        const durationString = "P123DT22H14M12.011S";
        const result = await testClient.primitive.getDuration();
        assert.equal(result.field, durationString);

        const putResult = await testClient.primitive.putDuration({
          field: durationString
        });
        assert.equal(putResult._response.status, 200);
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

        const putResult = await testClient.primitive.putByte({
          field: byteBuffer
        });
        assert.equal(putResult._response.status, 200);
      });
    });

    describe("Array Types Operations", function() {
      let testClient: BodyComplexClient;
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

        const putResult = await testClient.array.putValid(wrapper);
        assert.equal(putResult._response.status, 200);
      });

      it("should get and put empty array type properties", async () => {
        const result = await testClient.array.getEmpty();
        assert.deepEqual(result.array, []);
        await testClient.array.putEmpty({ array: [] });
        assert.ok("putEmpty succeeded");
      });

      it("should get array type properties when the payload is empty", async () => {
        const result = await testClient.array.getNotProvided();
        assert.equal(result.array, undefined);
      });
    });

    describe("Dictionary Types Operations", function() {
      let testClient: BodyComplexClient;
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
        assert.equal(result.defaultProgram, undefined);
      });

      it("should get dictionary type properties when the payload is empty", async () => {
        const result = await testClient.dictionary.getNotProvided();
        assert.equal(result.defaultProgram, undefined);
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
      let testClient: BodyComplexClient;

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
      let testClient: BodyComplexClient;
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
            color: "pinkish-gray" as BodyComplexModels.GoblinSharkColor,
            age: 1,
            length: 30,
            species: "scary",
            birthday: new Date("2015-08-08T00:00:00Z"),
            jawsize: 5
          } as Goblinshark
        ]
      });
      let testClient: BodyComplexClient;
      beforeEach(() => {
        testClient = new BodyComplexClient(clientOptions);
      });
      it("should get valid polymorphic properties", async function() {
        const getResult = await testClient.polymorphism.getValid();
        const actualBytes = (getResult.siblings![1] as Sawshark)!.picture;
        assert.equal(!!actualBytes, true);
        assert.equal(actualBytes!.length, 5);
        assert.equal(actualBytes![0], 255);
        assert.equal(actualBytes![1], 255);
        assert.equal(actualBytes![2], 255);
        assert.equal(actualBytes![3], 255);
        assert.equal(actualBytes![4], 254);

        // Working around the fact that Uint8Array doesn't work with deepEqual
        delete (getResult.siblings![1] as BodyComplexModels.Sawshark).picture;
        const expectedFish = getFish();
        delete (expectedFish.siblings![1] as BodyComplexModels.Sawshark)
          .picture;
        assert.deepEqual(getResult, expectedFish);

        await testClient.polymorphism.putValid(getFish());
      });
      const getBadfish = (): FishUnion => ({
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
          (result.siblings![1] as BodyComplexModels.Sawshark)!.picture || [];
        assert.equal(!!picture, true);
        assert.equal(picture.length, 5);
        assert.equal(picture[0], 255);
        assert.equal(picture[1], 255);
        assert.equal(picture[2], 255);
        assert.equal(picture[3], 255);
        assert.equal(picture[4], 254);
        delete (result.siblings![1] as BodyComplexModels.Sawshark).picture;

        const rawSalmon = getRawSalmon();
        delete (rawSalmon.siblings![1] as BodyComplexModels.Sawshark).picture;

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
          (response.siblings![1] as BodyComplexModels.Sawshark).picture || [];
        delete (response.siblings![1] as BodyComplexModels.Sawshark).picture;
        assert.equal(!!picture, true);
        assert.equal(picture.length, 5);
        assert.equal(picture[0], 255);
        assert.equal(picture[1], 255);
        assert.equal(picture[2], 255);
        assert.equal(picture[3], 255);
        assert.equal(picture[4], 254);

        const expected = getFish();
        delete (expected.siblings![1] as BodyComplexModels.Sawshark).picture;

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
      let testClient: BodyComplexClient;
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

          assert.equal(actualBytes!.length, 5);
          assert.equal(actualBytes![0], 255);
          assert.equal(actualBytes![1], 255);
          assert.equal(actualBytes![2], 255);
          assert.equal(actualBytes![3], 255);
          assert.equal(actualBytes![4], 254);
          delete sawshark.picture;
        }

        checkSawshark(
          result.siblings![0].siblings![0].siblings![1] as Sawshark
        );
        checkSawshark(result.siblings![0].siblings![1] as Sawshark);
        checkSawshark(result.siblings![1] as Sawshark);

        const bigfish = getBigfish();
        delete ((bigfish.siblings![0] as any).siblings[0]
          .siblings[1] as BodyComplexModels.Sawshark).picture;
        delete ((bigfish.siblings![0] as any)
          .siblings[1] as BodyComplexModels.Sawshark).picture;
        delete (bigfish.siblings![1] as BodyComplexModels.Sawshark).picture;

        assert.deepEqual(result, bigfish);
        await testClient.polymorphicrecursive.putValid(getBigfish());
      });
    });
  });
});
