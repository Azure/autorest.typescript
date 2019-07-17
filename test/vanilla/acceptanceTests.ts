// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

'use strict';

import "chai/register-should";
import { should } from "chai";
import * as util from 'util';
import * as assert from 'assert';
import * as msAssert from "../util/msAssert";
import * as coreHttp from '@azure/core-http';
import * as fs from "fs";

import { AutoRestBoolTestService } from './generated/BodyBoolean/autoRestBoolTestService';
import { AutoRestSwaggerBATService, AutoRestSwaggerBATServiceModels } from './generated/BodyString/autoRestSwaggerBATService';
import { AutoRestIntegerTestService } from './generated/BodyInteger/autoRestIntegerTestService';
import { CompositeBoolInt } from './generated/CompositeBoolIntClient/compositeBoolInt';
import { AutoRestNumberTestService } from './generated/BodyNumber/autoRestNumberTestService';
import { AutoRestSwaggerBATByteService } from './generated/BodyByte/autoRestSwaggerBATByteService';
import { AutoRestDateTestService } from './generated/BodyDate/autoRestDateTestService';
import { AutoRestDateTimeTestService } from './generated/BodyDateTime/autoRestDateTimeTestService';
import { AutoRestRFC1123DateTimeTestService } from './generated/BodyDateTimeRfc1123/autoRestRFC1123DateTimeTestService';
import { AutoRestDurationTestService } from './generated/BodyDuration/autoRestDurationTestService';
import { AutoRestUrlTestService, AutoRestUrlTestServiceModels } from './generated/Url/autoRestUrlTestService';
import { AutoRestSwaggerBATFileService } from './generated/BodyFile/autoRestSwaggerBATFileService';
import { AutoRestSwaggerBATArrayService } from './generated/BodyArray/autoRestSwaggerBATArrayService';
import { AutoRestSwaggerBATdictionaryService, AutoRestSwaggerBATdictionaryServiceModels } from './generated/BodyDictionary/autoRestSwaggerBATdictionaryService';
import { AutoRestHttpInfrastructureTestService, AutoRestHttpInfrastructureTestServiceMappers } from './generated/Http/autoRestHttpInfrastructureTestService';
import { AutoRestSwaggerBATFormDataService } from './generated/BodyFormData/autoRestSwaggerBATFormDataService';
import { AutoRestParameterizedCustomHostTestClient } from './generated/CustomBaseUriMoreOptions/autoRestParameterizedCustomHostTestClient';
import { Colors } from './generated/BodyString/models';
import { AutoRestBoolTestServiceOptions } from './generated/BodyBoolean/models';
import { FooEnum } from './generated/BodyArray/models';

const readStreamToBuffer = async function (strm: NodeJS.ReadableStream): Promise<Buffer> {
  return new Promise<Buffer>((resolve, reject) => {
    const bufs: Buffer[] = [];
    strm.on('data', function (d: Buffer) {
      bufs.push(d);
    });
    strm.on('end', function () {
      resolve(Buffer.concat(bufs));
    });
    strm.on('error', reject);
  });
};

const readStreamCountBytes = async function (stream: NodeJS.ReadableStream): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    let bytesRead = 0;
    stream.on('data', function (d: Buffer) {
      bytesRead = bytesRead + d.length;
    });

    stream.on('end', function () {
      resolve(bytesRead);
    });

    stream.on('error', reject);
  });
}

function stringToByteArray(str: string): Uint8Array {
  if (coreHttp.isNode) {
    return Buffer.from(str, "utf-8");
  } else {
    return new TextEncoder().encode(str);
  }
}

var clientOptions: AutoRestBoolTestServiceOptions = { noRetryPolicy: true, baseUri: 'http://localhost:3000' };
describe('typescript', function () {
  describe('Swagger BAT', function () {
    describe('Custom BaseUri Client with more options', function () {
      var customOptions = {
        dnsSuffix: 'host:3000'
      };
      var testClient = new AutoRestParameterizedCustomHostTestClient('test12', customOptions);
      it('should return 200', function (done) {
        testClient.paths.getEmpty('http://lo', 'cal', 'key1', function (error, result, request, response) {
          should().not.exist(error);
          response.status.should.equal(200);
          done();
        });
      });
    });
    describe('Bool Client', function () {
      var testClient = new AutoRestBoolTestService(clientOptions);
      it('should get valid boolean values', function (done) {
        testClient.bool.getTrue(function (error, result) {
          should().not.exist(error);
          result.should.equal(true);
          testClient.bool.getFalse(function (error, result) {
            should().not.exist(error);
            result.should.equal(false);
            done();
          });
        });
      });

      it('should put valid boolean values', function (done) {
        testClient.bool.putTrue(function (error) {
          should().not.exist(error);
          testClient.bool.putFalse(function (error) {
            should().not.exist(error);
            done();
          });
        });
      });

      it('should get null and invalid boolean value', function (done) {
        testClient.bool.getNull(function (error, result) {
          should().not.exist(result);
          testClient.bool.getInvalid(function (error, result) {
            error.should.exist;
            should().not.exist(result);
            done();
          });
        });
      });
    });

    describe('Integer Client', function () {
      var testClient = new AutoRestIntegerTestService(clientOptions);
      it('should put max value for 32 and 64 bit Integers', function (done) {
        testClient.intModel.putMax32((Math.pow(2, 32 - 1) - 1), function (error, result) {
          should().not.exist(error);
          testClient.intModel.putMax64(9223372036854776000, function (error, result) {
            should().not.exist(error);
            done();
          });
        });
      });

      it('should put min value for 32 and 64 bit Integers', function (done) {
        testClient.intModel.putMin32(-Math.pow(2, 32 - 1), function (error, result) {
          should().not.exist(error);
          testClient.intModel.putMin64(-9223372036854776000, function (error, result) {
            should().not.exist(error);
            done();
          });
        });
      });

      it('should get null and invalid integer value', function (done) {
        testClient.intModel.getNull(function (error, result) {
          should().not.exist(result);
          testClient.intModel.getInvalid(function (error, result) {
            error.should.exist;
            should().not.exist(result);
            done();
          });
        });
      });

      it('should get overflow and underflow for 32 bit integer value', function (done) {
        testClient.intModel.getOverflowInt32(function (error, result) {
          should().not.exist(error);
          result.should.equal(2147483656);
          testClient.intModel.getUnderflowInt32(function (error, result) {
            should().not.exist(error);
            result.should.equal(-2147483656);
            done();
          });
        });
      });

      it('should get overflow and underflow for 64 bit integer value', function (done) {
        testClient.intModel.getOverflowInt64(function (error, result) {
          should().not.exist(error);
          result.should.equal(9223372036854775910);
          testClient.intModel.getUnderflowInt64(function (error, result) {
            should().not.exist(error);
            result.should.equal(-9223372036854775910);
            done();
          });
        });
      });

      it('should put and get UnixTime date correctly', function (done) {
        var d = new Date('2016-04-13T00:00:00.000Z');
        testClient.intModel.putUnixTimeDate(d, function (error, result) {
          should().not.exist(error);
          testClient.intModel.getUnixTime(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, d);
            done();
          });
        });
      });

      it('should throw an error for invalid UnixTime date anf get null value for UnixTime', function (done) {
        testClient.intModel.getInvalidUnixTime(function (error, result) {
          error.should.exist;
          testClient.intModel.getNullUnixTime(function (error, result) {
            should().not.exist(error);
            should().not.exist(result);
            done();
          });
        });
      });
    });

    describe('CompositeBoolInt Client', function () {
      var testClient = new CompositeBoolInt(clientOptions);
      it('should get valid boolean values', function (done) {
        testClient.bool.getTrue(function (error, result) {
          should().not.exist(error);
          result.should.equal(true);
          testClient.bool.getFalse(function (error, result) {
            should().not.exist(error);
            result.should.equal(false);
            done();
          });
        });
      });

      it('should put valid boolean values', function (done) {
        testClient.bool.putTrue(function (error) {
          should().not.exist(error);
          testClient.bool.putFalse(function (error) {
            should().not.exist(error);
            done();
          });
        });
      });

      it('should get null and invalid boolean value', function (done) {
        testClient.bool.getNull(function (error, result) {
          should().not.exist(result);
          testClient.bool.getInvalid(function (error, result) {
            error.should.exist;
            should().not.exist(result);
            done();
          });
        });
      });

      it('should put max value for 32 and 64 bit Integers', function (done) {
        testClient.intModel.putMax32((Math.pow(2, 32 - 1) - 1), function (error, result) {
          should().not.exist(error);
          testClient.intModel.putMax64(9223372036854776000, function (error, result) {
            should().not.exist(error);
            done();
          });
        });
      });

      it('should put min value for 32 and 64 bit Integers', function (done) {
        testClient.intModel.putMin32(-Math.pow(2, 32 - 1), function (error, result) {
          should().not.exist(error);
          testClient.intModel.putMin64(-9223372036854776000, function (error, result) {
            should().not.exist(error);
            done();
          });
        });
      });

      it('should get null and invalid integer value', function (done) {
        testClient.intModel.getNull(function (error, result) {
          should().not.exist(result);
          testClient.intModel.getInvalid(function (error, result) {
            error.should.exist;
            should().not.exist(result);
            done();
          });
        });
      });

      it('should get overflow and underflow for 32 bit integer value', function (done) {
        testClient.intModel.getOverflowInt32(function (error, result) {
          should().not.exist(error);
          result.should.equal(2147483656);
          testClient.intModel.getUnderflowInt32(function (error, result) {
            should().not.exist(error);
            result.should.equal(-2147483656);
            done();
          });
        });
      });

      it('should get overflow and underflow for 64 bit integer value', function (done) {
        testClient.intModel.getOverflowInt64(function (error, result) {
          should().not.exist(error);
          result.should.equal(9223372036854775910);
          testClient.intModel.getUnderflowInt64(function (error, result) {
            should().not.exist(error);
            result.should.equal(-9223372036854775910);
            done();
          });
        });
      });
    });

    describe('Number Client', function () {
      var testClient = new AutoRestNumberTestService(clientOptions);
      it('should put big float and double values', function (done) {
        testClient.number.putBigFloat(3.402823e+20, function (error, result) {
          should().not.exist(error);
          testClient.number.putBigDouble(2.5976931e+101, function (error, result) {
            should().not.exist(error);
            done();
          });
        });
      });

      it('should get big float and double value', function (done) {
        testClient.number.getBigFloat(function (error, result) {
          should().not.exist(error);
          result.should.equal(3.402823e+20);
          testClient.number.getBigDouble(function (error, result) {
            should().not.exist(error);
            result.should.equal(2.5976931e+101);
            done();
          });
        });
      });

      it('should put small float and double values', function (done) {
        testClient.number.putSmallFloat(3.402823e-20, function (error, result) {
          should().not.exist(error);
          testClient.number.putSmallDouble(2.5976931e-101, function (error, result) {
            should().not.exist(error);
            done();
          });
        });
      });

      it('should get small float and double value', function (done) {
        testClient.number.getSmallFloat(function (error, result) {
          should().not.exist(error);
          result.should.equal(3.402823e-20);
          testClient.number.getSmallDouble(function (error, result) {
            should().not.exist(error);
            result.should.equal(2.5976931e-101);
            done();
          });
        });
      });

      it('should put big positive and negative double value', function (done) {
        testClient.number.putBigDoublePositiveDecimal(function (error) {
          should().not.exist(error);
          testClient.number.putBigDoubleNegativeDecimal(function (error) {
            should().not.exist(error);
            done();
          });
        });
      });

      it('should get big positive and negative double value', function (done) {
        testClient.number.getBigDoublePositiveDecimal(function (error, result) {
          should().not.exist(error);
          result.should.equal(99999999.99);
          testClient.number.getBigDoubleNegativeDecimal(function (error, result) {
            should().not.exist(error);
            result.should.equal(-99999999.99);
            done();
          });
        });
      });

      it('should get null and invalid float and double values', function (done) {
        testClient.number.getNull(function (error, result) {
          should().not.exist(result);
          testClient.number.getInvalidFloat(function (error, result) {
            error.should.exist;
            should().not.exist(result);
            testClient.number.getInvalidDouble(function (error, result) {
              error.should.exist;
              should().not.exist(result);
              done();
            });
          });
        });
      });
    });

    describe('String Client', function () {
      var testClient = new AutoRestSwaggerBATService(clientOptions);
      it('should support valid null value', async function () {
        const result = await testClient.string.getNull();
        assert.deepStrictEqual(result, { body: undefined });

        await testClient.string.putNull({ stringBody: null });
      });

      it('should support valid empty string value', async function () {
        await testClient.string.putEmpty();
        const result = await testClient.string.getEmpty();
        assert.deepStrictEqual(result, { body: "" });
      });

      it('should support valid MBC string value', async function () {
        if (!coreHttp.isNode) {
          // Safari doesn't putMbcs correctly
          this.skip();
        }

        await testClient.string.putMbcs();
        const result = await testClient.string.getMbcs();
        assert.deepStrictEqual(result, { body: '啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€' });
      });

      it('should support whitespace string value', async function () {
        await testClient.string.putWhitespace();
        const result = await testClient.string.getWhitespace();
        assert.deepStrictEqual(result, { body: '    Now is the time for all good men to come to the aid of their country    ' });
      });

      it('should support not provided value', async function () {
        const result = await testClient.string.getNotProvided();
        assert.deepStrictEqual(result, { body: undefined });
      });

      it('should support valid enum valid value', async function () {
        const result = await testClient.enumModel.getNotExpandable();
        assert.deepStrictEqual(result, { body: 'red color' });
        await testClient.enumModel.putNotExpandable('red color');
      });

      it('should correctly handle invalid values for enum', async function () {
        const error = await msAssert.throwsAsync(testClient.enumModel.putNotExpandable('orange color' as AutoRestSwaggerBATServiceModels.Colors))
        error.should.exist;
        error.message.should.match(/.*is not a valid value.*/ig);
      });

      it('should correctly deserialize base64 encoded string', async function () {
        const result: any = await testClient.string.getBase64Encoded();
        assert(result);
        assert(result.body);

        const expected = 'a string that gets encoded with base64';
        if (coreHttp.isNode) {
          assert.strictEqual((result.body as Buffer).toString("utf8"), expected);
        } else {
          assert.strictEqual(new TextDecoder("utf8").decode(result.body), expected);
        }
      });

      it('should correctly handle null base64url encoded string', function (done) {
        testClient.string.getNullBase64UrlEncoded(function (error, result) {
          should().not.exist(error);
          should().not.exist(result);
          done();
        });
      });

      it('should correctly serialize and deserialize base64url encoded string', function (done) {
        testClient.string.getBase64UrlEncoded(function (error, result) {
          should().not.exist(error);
          result.should.exist;

          const decodedString = 'a string that gets encoded with base64url';
          if (coreHttp.isNode) {
            (result as Buffer).toString("utf8").should.equal(decodedString);
          } else {
            new TextDecoder("utf8").decode(result).should.equal(decodedString);
          }

          testClient.string.putBase64UrlEncoded(stringToByteArray(decodedString), function (error, result) {
            should().not.exist(error);
            should().not.exist(result);
            done();
          });
        });
      });

      it('should getEnumReferenced', async function () {
        const result = await testClient.enumModel.getReferenced();
        result.body.should.equal('red color');
      });

      it('should putEnumReferenced', async function () {
        await testClient.enumModel.putReferenced('red color');
      });

      it('should getEnumReferencedConstant', async function () {
        const result = await testClient.enumModel.getReferencedConstant();
        result.field1.should.equal('Sample String');
      });

      it('should putEnumReferencedConstant', async function () {
        await testClient.enumModel.putReferencedConstant({ field1: '' });
      });
    });

    describe('Byte Client', function () {
      var testClient = new AutoRestSwaggerBATByteService(clientOptions);
      var bytes = new Uint8Array([255, 254, 253, 252, 251, 250, 249, 248, 247, 246]);
      it('should support valid null and empty value', function (done) {
        testClient.byteModel.getNull(function (error, result) {
          should().not.exist(error);
          should().not.exist(result);

          testClient.byteModel.getEmpty(function (error, result) {
            should().not.exist(error);
            result.should.be.instanceof(Uint8Array);
            result.length.should.equal(0);
            done();
          });
        });
      });

      // TODO coverage
      it('should get invalid byte value', function (done) {
        testClient.byteModel.getInvalid(function (error, result) {
          should().not.exist(error);
          // Output of Buffer.from(':::SWAGGER::::', 'base64')
          const expected = new Uint8Array([73, 96, 6, 24, 68]);
          result.length.should.equal(expected.length);
          for (let i = 0; i < result.length; i++) {
            result[i].should.equal(expected[i]);
          }
          done();
        });
      });

      it('should support valid non Ascii byte values', function (done) {
        testClient.byteModel.putNonAscii(bytes, function (error, result) {
          should().not.exist(error);
          testClient.byteModel.getNonAscii(function (error, result) {
            should().not.exist(error);
            result.length.should.equal(bytes.length);
            for (let i = 0; i < bytes.length; i++) {
              result[i].should.equal(bytes[i]);
            }
            done();
          });
        });
      });
    });

    describe('Date Client', function () {
      var testClient = new AutoRestDateTestService(clientOptions);
      it('should get min and max date', function (done) {
        testClient.dateModel.getMinDate(function (error, result) {
          should().not.exist(error);
          result.should.exist;
          var date = result;
          date.getUTCFullYear().should.equal(1);
          date.getUTCMonth().should.equal(0);
          date.getUTCDate().should.equal(1);
          date.getUTCHours().should.equal(0);
          date.getUTCMinutes().should.equal(0);
          date.getUTCSeconds().should.equal(0);
          date.getUTCMilliseconds().should.equal(0);
          testClient.dateModel.getMaxDate(function (error, result) {
            should().not.exist(error);
            result.should.exist;
            var date = result;
            date.getUTCFullYear().should.equal(9999);
            date.getUTCMonth().should.equal(11);
            date.getUTCDate().should.equal(31);
            date.getUTCHours().should.equal(0);
            date.getUTCMinutes().should.equal(0);
            date.getUTCSeconds().should.equal(0);
            date.getUTCMilliseconds().should.equal(0);
            done();
          });
        });
      });

      it('should properly handle underflow and overflow date', function (done) {
        testClient.dateModel.getUnderflowDate(function (error, result) {
          isNaN(result.valueOf()).should.equal(true);
          should().not.exist(error)
          testClient.dateModel.getOverflowDate(function (error, result) {
            isNaN(result.valueOf()).should.equal(true);
            should().not.exist(error);
            done();
          });
        });
      });

      it('should properly handle null value for Date', function (done) {
        testClient.dateModel.getNull(function (error, result) {
          should().not.exist(result);
          should().not.exist(error);
          done();
        });
      });

      it('should properly handle invalid Date value', function (done) {
        testClient.dateModel.getInvalidDate(function (error, result) {
          isNaN(result.valueOf()).should.equal(true);
          should().not.exist(error);
          done();
        });
      });

      it('should put min and max date', function (done) {
        testClient.dateModel.putMinDate(new Date('0001-01-01'), function (error, result) {
          should().not.exist(error);
          should().not.exist(result);
          testClient.dateModel.putMaxDate(new Date('9999-12-31'), function (error, result) {
            should().not.exist(error);
            should().not.exist(result);
            done();
          });
        });
      });
    });

    describe('DateTime Client', function () {
      var testClient = new AutoRestDateTimeTestService(clientOptions);
      it('should properly handle null value for DateTime', function (done) {
        testClient.datetime.getNull(function (error, result) {
          should().not.exist(result);
          should().not.exist(error);
          done();
        });
      });

      it('should properly handle invalid dateTime value', function (done) {
        testClient.datetime.getInvalid(function (error, result) {
          isNaN(result.valueOf()).should.equal(true);
          should().not.exist(error);
          done();
        });
      });

      it('should get uppercase and lowercase UTC max date time', async function () {
        if (!coreHttp.isNode) {
          // browser behaviors vary for parsing date values
          this.skip();
        }

        const date = (await testClient.datetime.getUtcUppercaseMaxDateTime()).body;
        date.getUTCFullYear().should.equal(9999);
        date.getUTCMonth().should.equal(11);
        date.getUTCDate().should.equal(31);
        date.getUTCHours().should.equal(23);
        date.getUTCMinutes().should.equal(59);
        date.getUTCSeconds().should.equal(59);
        date.getUTCMilliseconds().should.equal(999);

        const date2 = (await testClient.datetime.getUtcLowercaseMaxDateTime()).body;
        date2.getUTCFullYear().should.equal(9999);
        date2.getUTCMonth().should.equal(11);
        date2.getUTCDate().should.equal(31);
        date2.getUTCHours().should.equal(23);
        date2.getUTCMinutes().should.equal(59);
        date2.getUTCSeconds().should.equal(59);
      });

      it('should get UTC min dateTime value', async function () {
        const date = (await testClient.datetime.getUtcMinDateTime()).body;
        date.getUTCFullYear().should.equal(1);
        date.getUTCMonth().should.equal(0);
        date.getUTCDate().should.equal(1);
        date.getUTCHours().should.equal(0);
        date.getUTCMinutes().should.equal(0);
        date.getUTCSeconds().should.equal(0);
        date.getUTCMilliseconds().should.equal(0);
      });

      it('should get local negative and positive offset Min DateTime value', async function () {
        const date = (await testClient.datetime.getLocalNegativeOffsetMinDateTime()).body;
        date.getUTCFullYear().should.equal(1);
        date.getUTCMonth().should.equal(0);
        date.getUTCDate().should.equal(1);
        date.getUTCHours().should.equal(14);
        date.getUTCMinutes().should.equal(0);
        date.getUTCSeconds().should.equal(0);
        date.getUTCMilliseconds().should.equal(0);

        const date2 = (await testClient.datetime.getLocalPositiveOffsetMinDateTime()).body;
        date2.getUTCFullYear().should.equal(0);
        date2.getUTCMonth().should.equal(11);
        date2.getUTCDate().should.equal(31);
        date2.getUTCHours().should.equal(10);
        date2.getUTCMinutes().should.equal(0);
        date2.getUTCSeconds().should.equal(0);
        date2.getUTCMilliseconds().should.equal(0);
      });

      it('should get local negative offset lowercase and uppercase Max DateTime', async function () {
        if (!coreHttp.isNode) {
          // browser behaviors vary for parsing date values
          this.skip();
        }

        const date = (await testClient.datetime.getLocalNegativeOffsetLowercaseMaxDateTime()).body;
        date.getUTCFullYear().should.equal(10000);
        date.getUTCMonth().should.equal(0);
        date.getUTCDate().should.equal(1);
        date.getUTCHours().should.equal(13);
        date.getUTCMinutes().should.equal(59);
        date.getUTCSeconds().should.equal(59);
        date.getUTCMilliseconds().should.equal(999);

        const date2 = (await testClient.datetime.getLocalNegativeOffsetUppercaseMaxDateTime()).body;
        assert.deepEqual(date2, new Date('9999-12-31T23:59:59.9999999-14:00'));
        date2.getUTCFullYear().should.equal(10000);
        date2.getUTCMonth().should.equal(0);
        date2.getUTCDate().should.equal(1);
        date2.getUTCHours().should.equal(13);
        date2.getUTCMinutes().should.equal(59);
        date2.getUTCSeconds().should.equal(59);
        date2.getUTCMilliseconds().should.equal(999);
      });

      it('should get local positive offset lowercase and uppercase Max DateTime', async function () {
        if (!coreHttp.isNode) {
          // browser behaviors vary for parsing date values
          this.skip();
        }

        const date = (await testClient.datetime.getLocalPositiveOffsetLowercaseMaxDateTime()).body;
        date.getUTCFullYear().should.equal(9999);
        date.getUTCMonth().should.equal(11);
        date.getUTCDate().should.equal(31);
        date.getUTCHours().should.equal(9);
        date.getUTCMinutes().should.equal(59);
        date.getUTCSeconds().should.equal(59);
        date.getUTCMilliseconds().should.equal(999);

        const date2 = (await testClient.datetime.getLocalPositiveOffsetUppercaseMaxDateTime()).body;
        assert.deepEqual(date2, new Date('9999-12-31T23:59:59.9999999+14:00'));
        date2.getUTCFullYear().should.equal(9999);
        date2.getUTCMonth().should.equal(11);
        date2.getUTCDate().should.equal(31);
        date2.getUTCHours().should.equal(9);
        date2.getUTCMinutes().should.equal(59);
        date2.getUTCSeconds().should.equal(59);
        date2.getUTCMilliseconds().should.equal(999);
      });

      it('should get overflow and underflow', async function () {
        if (!coreHttp.isNode) {
          // browser behaviors vary for parsing date values
          this.skip();
        }

        const date = (await testClient.datetime.getOverflow()).body;
        date.getUTCFullYear().should.equal(10000);
        date.getUTCMonth().should.equal(0);
        date.getUTCDate().should.equal(1);
        date.getUTCHours().should.equal(13);
        date.getUTCMinutes().should.equal(59);
        date.getUTCSeconds().should.equal(59);
        date.getUTCMilliseconds().should.equal(999);

        const date2 = (await testClient.datetime.getUnderflow()).body;
        isNaN(date2.valueOf()).should.equal(true);
      });

      it('should put UTC min and max date time', async function () {
        if (!coreHttp.isNode) {
          // browser behaviors vary for parsing date values
          this.skip();
        }

        await testClient.datetime.putUtcMinDateTime('0001-01-01T00:00:00Z');
        await testClient.datetime.putUtcMaxDateTime('9999-12-31T23:59:59.9999999Z');
      });

      it('should put local negative and positive offset min DateTime', async function () {
        await testClient.datetime.putLocalNegativeOffsetMinDateTime('0001-01-01T00:00:00-14:00');
        await testClient.datetime.putLocalPositiveOffsetMinDateTime('0001-01-01T00:00:00+14:00');
      });

      it('should put local negative offset max DateTime', async function () {
        if (!coreHttp.isNode) {
          // browser behaviors vary for parsing date values
          this.skip();
        }

        await testClient.datetime.putLocalNegativeOffsetMaxDateTime('9999-12-31T23:59:59.9999999-14:00');
      });

      it('should put local positive offset max Date', async function () {
        if (!coreHttp.isNode) {
          // browser behaviors vary for parsing date values
          this.skip();
        }

        await testClient.datetime.putLocalPositiveOffsetMaxDateTime('9999-12-31t23:59:59.9999999+14:00');
      });
    });

    describe('DateTimeRfc1123 Client', function () {
      var testClient = new AutoRestRFC1123DateTimeTestService(clientOptions);
      it('should properly handle null value for DateTimeRfc1123', function (done) {
        testClient.datetimerfc1123.getNull(function (error, result) {
          should().not.exist(result);
          should().not.exist(error);
          done();
        });
      });

      it('should properly handle invalid dateTimeRfc1123 value', function (done) {
        testClient.datetimerfc1123.getInvalid(function (error, result) {
          isNaN(result.valueOf()).should.equal(true);
          should().not.exist(error);
          done();
        });
      });


      it('should get uppercase and lowercase UTC max date time dateTimeRfc1123', function (done) {
        testClient.datetimerfc1123.getUtcUppercaseMaxDateTime(function (error, result) {
          should().not.exist(error);
          result.should.exist;
          var date = result;
          date.getUTCFullYear().should.equal(9999);
          date.getUTCMonth().should.equal(11);
          date.getUTCDate().should.equal(31);
          date.getUTCHours().should.equal(23);
          date.getUTCMinutes().should.equal(59);
          date.getUTCSeconds().should.equal(59);
          testClient.datetimerfc1123.getUtcLowercaseMaxDateTime(function (error, result) {
            should().not.exist(error);
            result.should.exist;
            var date = result;
            date.getUTCFullYear().should.equal(9999);
            date.getUTCMonth().should.equal(11);
            date.getUTCDate().should.equal(31);
            date.getUTCHours().should.equal(23);
            date.getUTCMinutes().should.equal(59);
            date.getUTCSeconds().should.equal(59);
            done();
          });
        });
      });

      it('should get UTC min dateTimeRfc1123 value', function (done) {
        testClient.datetimerfc1123.getUtcMinDateTime(function (error, result) {
          should().not.exist(error);
          result.should.exist;
          // Parsing the minimum date 'Mon, 01 Jan 0001 00:00:00 GMT' doesn't
          // work properly in nodejs, so we'll just test that the result exists
          done();
        });
      });

      it('should get overflow and underflow', function (done) {
        if (!coreHttp.isNode) {
          // browser behaviors vary for parsing date values
          this.skip();
        }

        testClient.datetimerfc1123.getOverflow(function (error, result) {
          should().not.exist(error);
          result.should.exist;
          var date = result;
          date.getUTCFullYear().should.equal(10000);
          date.getUTCMonth().should.equal(0);
          date.getUTCDate().should.equal(1);
          date.getUTCHours().should.equal(0);
          date.getUTCMinutes().should.equal(0);
          date.getUTCSeconds().should.equal(0);
          testClient.datetimerfc1123.getUnderflow(function (error, result) {
            isNaN(result.valueOf()).should.equal(true);
            should().not.exist(error);
            done();
          });
        });
      });

      it('should put UTC min and max dateTimeRfc1123', function (done) {
        testClient.datetimerfc1123.putUtcMinDateTime(new Date('Mon, 01 Jan 0001 00:00:00 GMT'), function (error, result) {
          should().not.exist(error);
          should().not.exist(result);

          testClient.datetimerfc1123.putUtcMaxDateTime(new Date('Fri, 31 Dec 9999 23:59:59 GMT'), function (error, result) {
            should().not.exist(error);
            should().not.exist(result);
            done();
          });
        });
      });
    });

    describe('Duration Client', function () {
      var testClient = new AutoRestDurationTestService(clientOptions);
      it('should properly handle null value for Duration', function (done) {
        testClient.duration.getNull(function (error, result) {
          should().not.exist(result);
          should().not.exist(error);
          done();
        });
      });

      it('should properly handle invalid value for Duration', function (done) {
        testClient.duration.getInvalid(function (error) {
          error.should.exist;
          done();
        });
      });

      it('should properly handle positive value for Duration', function (done) {
        testClient.duration.getPositiveDuration(function (error, result) {
          result.should.exist;
          should().not.exist(error);
          result.should.equal('P3Y6M4DT12H30M5S');
          done();
        });
      });

      it('should properly put positive value for Duration', function (done) {
        var duration = 'P123DT22H14M12.011S';
        testClient.duration.putPositiveDuration(duration, function (error, result) {
          should().not.exist(error);
          should().not.exist(result);
          done();
        });
      });
    });

    describe('Array Client', function () {

      describe('for primitive types', function () {
        var testClient = new AutoRestSwaggerBATArrayService(clientOptions);
        it('should get and put empty arrays', function (done) {
          testClient.arrayModel.getEmpty(function (error, result) {
            if (error) { done(error); return; }

            assert.deepEqual(result, []);
            testClient.arrayModel.putEmpty([], function (error, result) {
              should().not.exist(error);
              done();
            });
          });
        });

        it('should handle null and invalid value for arrays', function (done) {
          testClient.arrayModel.getNull(function (error, result) {
            console.error(error);
            should().not.exist(error);
            assert.equal(result, null);
            testClient.arrayModel.getInvalid(function (error, result) {
              error.should.exist;
              should().not.exist(result);
              done();
            });
          });
        });

        it('should get base64url arrays', function (done) {
          var base64Url1 = stringToByteArray('a string that gets encoded with base64url');
          var base64Url2 = stringToByteArray('test string');
          var base64Url3 = stringToByteArray('Lorem ipsum');
          var arr = [base64Url1, base64Url2, base64Url3];
          testClient.arrayModel.getBase64Url(function (error, result) {
            should().not.exist(error);
            result.should.exist;
            assert.deepEqual(result, arr);
            done();
          });
        });

        it('should get and put boolean arrays', function (done) {
          var boolArray = [true, false, false, true];
          testClient.arrayModel.getBooleanTfft(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, boolArray);
            testClient.arrayModel.putBooleanTfft(boolArray, function (error, result) {
              should().not.exist(error);
              testClient.arrayModel.getBooleanInvalidNull(function (error, result) {
                should().not.exist(error);
                assert.deepEqual(result, [true, null, false]);
                testClient.arrayModel.getBooleanInvalidString(function (error, result) {
                  should().not.exist(error);
                  assert.deepEqual(result, [true, 'boolean', false]);
                  done();
                });
              });
            });
          });
        });

        it('should get and put integer arrays', function (done) {
          var testArray = [1, -1, 3, 300];
          testClient.arrayModel.getIntegerValid(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, testArray);
            testClient.arrayModel.putIntegerValid(testArray, function (error, result) {
              should().not.exist(error);
              testClient.arrayModel.getIntInvalidNull(function (error, result) {
                should().not.exist(error);
                testClient.arrayModel.getIntInvalidString(function (error, result) {
                  should().not.exist(error);
                  done();
                });
              });
            });
          });
        });

        it('should get and put long arrays', function (done) {
          var testArray = [1, -1, 3, 300];
          testClient.arrayModel.getLongValid(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, testArray);
            testClient.arrayModel.putLongValid(testArray, function (error, result) {
              should().not.exist(error);
              testClient.arrayModel.getLongInvalidNull(function (error, result) {
                should().not.exist(error);
                testClient.arrayModel.getLongInvalidString(function (error, result) {
                  should().not.exist(error);
                  done();
                });
              });
            });
          });
        });

        it('should get and put float arrays', function (done) {
          var testArray = [0, -0.01, -1.2e20];
          testClient.arrayModel.getFloatValid(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, testArray);
            testClient.arrayModel.putFloatValid(testArray, function (error, result) {
              should().not.exist(error);
              testClient.arrayModel.getFloatInvalidNull(function (error, result) {
                should().not.exist(error);
                testClient.arrayModel.getFloatInvalidString(function (error, result) {
                  should().not.exist(error);
                  done();
                });
              });
            });
          });
        });

        it('should get and put double arrays', function (done) {
          var testArray = [0, -0.01, -1.2e20];
          testClient.arrayModel.getDoubleValid(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, testArray);
            testClient.arrayModel.putDoubleValid(testArray, function (error, result) {
              should().not.exist(error);
              testClient.arrayModel.getDoubleInvalidNull(function (error, result) {
                should().not.exist(error);
                testClient.arrayModel.getDoubleInvalidString(function (error, result) {
                  should().not.exist(error);
                  done();
                });
              });
            });
          });
        });

        it('should get and put string arrays', function (done) {
          var testArray = ['foo1', 'foo2', 'foo3'];
          testClient.arrayModel.getStringValid(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result.slice(), testArray);
            testClient.arrayModel.putStringValid(testArray, function (error, result) {
              should().not.exist(error);
              testClient.arrayModel.getStringWithNull(function (error, result) {
                should().not.exist(error);
                testClient.arrayModel.getStringWithInvalid(function (error, result) {
                  should().not.exist(error);
                  done();
                });
              });
            });
          });
        });

        it('should get and put enum arrays', async function () {
          const testArray: FooEnum[] = ["foo1", "foo2", "foo3"];
          const result = await testClient.arrayModel.getEnumValid();
          assert.deepEqual(result.slice(), testArray);
          await testClient.arrayModel.putEnumValid(testArray);
        });

        it('should get and put string enum arrays', async function () {
          const testArray = ["foo1", "foo2", "foo3"];
          const result = await testClient.arrayModel.getStringEnumValid();
          assert.deepEqual(result.slice(), testArray);
          await testClient.arrayModel.putStringEnumValid(testArray);
        });

        it('should get and put uuid arrays', function (done) {
          var testArray = ["6dcc7237-45fe-45c4-8a6b-3a8a3f625652", "d1399005-30f7-40d6-8da6-dd7c89ad34db", "f42f6aa1-a5bc-4ddf-907e-5f915de43205"];
          testClient.arrayModel.getUuidValid(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result.slice(), testArray);
            testClient.arrayModel.putUuidValid(testArray, function (error, result) {
              should().not.exist(error);
              testClient.arrayModel.getUuidInvalidChars(function (error, result) {
                should().not.exist(error);
                done();
              });
            });
          });
        });

        it('should get and put date arrays', function (done) {
          var testArray = [new Date('2000-12-01'), new Date('1980-01-02'), new Date('1492-10-12')];
          testClient.arrayModel.getDateValid(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result.slice(), testArray);
            testClient.arrayModel.putDateValid(testArray, function (error, result) {
              should().not.exist(error);
              testClient.arrayModel.getDateInvalidNull(function (error, result) {
                should().not.exist(error);
                assert.deepEqual(result, [new Date('2012-01-01'), null, new Date('1776-07-04')]);
                testClient.arrayModel.getDateInvalidChars(function (error, result) {
                  should().not.exist(error);
                  JSON.stringify(result).should.equal(JSON.stringify([new Date('2011-03-22'), new Date('date')]));
                  done();
                });
              });
            });
          });
        });

        it('should get and put dateTime arrays', async function () {
          if (!coreHttp.isNode) {
            // browser behaviors vary for parsing date times
            this.skip();
          }

          const testArray = [new Date('2000-12-01t00:00:01z'), new Date('1980-01-02T01:11:35+01:00'), new Date('1492-10-12T02:15:01-08:00')];
          const result = await testClient.arrayModel.getDateTimeValid();
          assert.deepEqual(result.slice(), testArray);

          await testClient.arrayModel.putDateTimeValid(testArray);

          const result2 = await testClient.arrayModel.getDateTimeInvalidNull();
          assert.deepEqual(result2.slice(), [new Date('2000-12-01t00:00:01z'), null]);

          const result3 = await testClient.arrayModel.getDateTimeInvalidChars();
          JSON.stringify(result3.slice()).should.equal(JSON.stringify([new Date('2000-12-01t00:00:01z'), new Date('date-time')]));
        });

        it('should get and put dateTimeRfc1123 arrays', function (done) {
          var testArray = [new Date('Fri, 01 Dec 2000 00:00:01 GMT'), new Date('Wed, 02 Jan 1980 00:11:35 GMT'), new Date('Wed, 12 Oct 1492 10:15:01 GMT')];
          testClient.arrayModel.getDateTimeRfc1123Valid(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result.slice(), testArray);
            testClient.arrayModel.putDateTimeRfc1123Valid(testArray, function (error, result) {
              should().not.exist(error);
              done();
            });
          });
        });

        it('should get and put duration arrays', function (done) {
          var testArray = ['P123DT22H14M12.011S', 'P5DT1H'];
          testClient.arrayModel.getDurationValid(function (error, result) {
            should().not.exist(error);
            assert.deepStrictEqual(result.slice(), ['P123DT22H14M12.011S', 'P5DT1H0M0S']);
            testClient.arrayModel.putDurationValid(testArray, function (error, result) {
              should().not.exist(error);
              done();
            });
          });
        });

        it('should get and put byte arrays', function (done) {
          var bytes1 = new Uint8Array([255, 255, 255, 250]);
          var bytes2 = new Uint8Array([1, 2, 3]);
          var bytes3 = new Uint8Array([37, 41, 67]);
          var testArray = [bytes1, bytes2, bytes3];
          testClient.arrayModel.getByteValid(function (error, result) {
            should().not.exist(error);

            result.length.should.equal(testArray.length);
            for (let i = 0; i < testArray.length; i++) {
              for (let j = 0; j < testArray[i].length; j++) {
                result[i].length.should.equal(testArray[i].length);
                result[i][j].should.equal(testArray[i][j]);
              }
            }

            testClient.arrayModel.putByteValid(testArray, function (error, result) {
              should().not.exist(error);
              done();
            });
          });
        });

        it('should get byte arrays with null values', function (done) {
          testClient.arrayModel.getByteInvalidNull(function (error, result) {
            should().not.exist(error);
            result.should.exist;

            result.length.should.equal(2);
            result[0].length.should.equal(3);
            result[0][0].should.equal(171);
            result[0][1].should.equal(172);
            result[0][2].should.equal(173);
            should().not.exist(result[1]);

            done();
          });
        });
      });

      describe('for complex types', function () {
        var testClient = new AutoRestSwaggerBATArrayService(clientOptions);
        it('should get null and empty complex types in array', function (done) {
          testClient.arrayModel.getComplexEmpty(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, []);
            testClient.arrayModel.getComplexNull(function (error, result) {
              should().not.exist(error);
              assert.equal(result, null);
              done();
            });
          });
        });

        it('should get complex items with empty and null values in array', function (done) {
          var testNull = [{ 'integer': 1, 'string': '2' }, null, { 'integer': 5, 'string': '6' }];
          var testEmpty = [{ 'integer': 1, 'string': '2' }, {}, { 'integer': 5, 'string': '6' }];
          testClient.arrayModel.getComplexItemNull(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, testNull);
            testClient.arrayModel.getComplexItemEmpty(function (error, result) {
              should().not.exist(error);
              JSON.stringify(result).should.equal(JSON.stringify(testEmpty));
              done();
            });
          });
        });

        it('should get and put valid complex items in arrays', function (done) {
          var testArray = [{ 'integer': 1, 'string': '2' }, { 'integer': 3, 'string': '4' }, { 'integer': 5, 'string': '6' }];
          testClient.arrayModel.getComplexValid(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, testArray);
            testClient.arrayModel.putComplexValid(testArray, function (error, result) {
              should().not.exist(error);
              done();
            });
          });
        });
      });

      describe('for array of arrays', function () {
        var testClient = new AutoRestSwaggerBATArrayService(clientOptions);
        it('should get null and empty array in an array', function (done) {
          testClient.arrayModel.getArrayNull(function (error, result) {
            should().not.exist(error);
            assert.equal(result, null);
            testClient.arrayModel.getArrayEmpty(function (error, result) {
              should().not.exist(error);
              assert.deepEqual(result, []);
              done();
            });
          });
        });

        it('should get arrays with empty and null items in an array', function (done) {
          var testNull = [['1', '2', '3'], null, ['7', '8', '9']];
          var testEmpty = [['1', '2', '3'], [], ['7', '8', '9']];
          testClient.arrayModel.getArrayItemNull(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, testNull);
            testClient.arrayModel.getArrayItemEmpty(function (error, result) {
              should().not.exist(error);
              assert.deepEqual(result, testEmpty);
              done();
            });
          });
        });

        it('should get and put valid array items in an array', function (done) {
          var testArray = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];
          testClient.arrayModel.getArrayValid(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, testArray);
            testClient.arrayModel.putArrayValid(testArray, function (error, result) {
              should().not.exist(error);
              done();
            });
          });
        });
      });

      describe('for array of dictionaries', function () {
        var testClient = new AutoRestSwaggerBATArrayService(clientOptions);
        it('should get null and empty dictionary in an array', function (done) {
          testClient.arrayModel.getDictionaryNull(function (error, result) {
            should().not.exist(error);
            assert.equal(result, null);
            testClient.arrayModel.getDictionaryEmpty(function (error, result) {
              should().not.exist(error);
              assert.deepEqual(result, []);
              done();
            });
          });
        });

        it('should get array of dictionaries with empty and null items in an array', function (done) {
          var testNull = [{ '1': 'one', '2': 'two', '3': 'three' }, null, { '7': 'seven', '8': 'eight', '9': 'nine' }];
          var testEmpty = [{ '1': 'one', '2': 'two', '3': 'three' }, {}, { '7': 'seven', '8': 'eight', '9': 'nine' }];
          testClient.arrayModel.getDictionaryItemNull(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, testNull);
            testClient.arrayModel.getDictionaryItemEmpty(function (error, result) {
              should().not.exist(error);
              assert.deepEqual(result, testEmpty);
              done();
            });
          });
        });

        it('should get and put valid dicitonary items in arrays', function (done) {
          var testArray: { [propertyName: string]: string }[] =
            [{ '1': 'one', '2': 'two', '3': 'three' }, { '4': 'four', '5': 'five', '6': 'six' }, { '7': 'seven', '8': 'eight', '9': 'nine' }];
          testClient.arrayModel.getDictionaryValid(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, testArray);
            testClient.arrayModel.putDictionaryValid(testArray, function (error, result) {
              should().not.exist(error);
              done();
            });
          });
        });
      });
    });

    describe('Dictionary Client', function () {

      describe('for primitive types', function () {
        var testClient = new AutoRestSwaggerBATdictionaryService(clientOptions);
        it('should get and put empty dictionaries', function (done) {
          testClient.dictionary.getEmpty(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, {});
            testClient.dictionary.putEmpty({}, function (error, result) {
              should().not.exist(error);
              done();
            });
          });
        });

        it('should handle null and invalid value for dictionaries', function (done) {
          testClient.dictionary.getNull(function (error, result) {
            should().not.exist(error);
            assert.equal(result, null);
            testClient.dictionary.getInvalid(function (error, result) {
              error.should.exist;
              should().not.exist(result);
              done();
            });
          });
        });

        it('should handle null value, null key and empty key for dictionaries', function (done) {
          testClient.dictionary.getNullValue(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, { "key1": null });
            testClient.dictionary.getNullKey(function (error, result) {
              error.should.exist;
              testClient.dictionary.getEmptyStringKey(function (error, result) {
                should().not.exist(error);
                assert.deepEqual(result, { "": "val1" });
                done();
              });
            });
          });
        });

        it('should get base64url dictionaries', function (done) {
          var base64Url1 = stringToByteArray('a string that gets encoded with base64url');
          var base64Url2 = stringToByteArray('test string');
          var base64Url3 = stringToByteArray('Lorem ipsum');
          var dict: { [propertyName: string]: Uint8Array } = { "0": base64Url1, "1": base64Url2, "2": base64Url3 };
          testClient.dictionary.getBase64Url(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, dict);
            done();
          });
        });

        it('should get and put boolean dictionaries', function (done) {
          var boolDictionary: { [propertyName: string]: boolean } = { "0": true, "1": false, "2": false, "3": true };
          testClient.dictionary.getBooleanTfft(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, boolDictionary);
            testClient.dictionary.putBooleanTfft(boolDictionary, function (error, result) {
              should().not.exist(error);
              done();
            });
          });
        });

        it('should get boolean dictionaries with null value', function (done) {
          var boolDictionary: { [propertyName: string]: boolean } = { "0": true, "1": null, "2": false };
          testClient.dictionary.getBooleanInvalidNull(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, boolDictionary);
            done();
          });
        });

        it('should get boolean dictionaries with string value', function (done) {
          var boolDictionary = { "0": true, "1": "boolean", "2": false };
          testClient.dictionary.getBooleanInvalidString(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, boolDictionary);
            done();
          });
        });

        it('should get and put integer dictionaries', function (done) {
          var testDictionary: { [propertyName: string]: number } = { "0": 1, "1": -1, "2": 3, "3": 300 };
          testClient.dictionary.getIntegerValid(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, testDictionary);
            testClient.dictionary.putIntegerValid(testDictionary, function (error, result) {
              should().not.exist(error);
              done();
            });
          });
        });

        it('should get integer dictionaries with null value', function (done) {
          var testDictionary: { [propertyName: string]: number } = { "0": 1, "1": null, "2": 0 };
          testClient.dictionary.getIntInvalidNull(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, testDictionary);
            done();
          });
        });

        it('should get integer dictionaries with string value', function (done) {
          var testDictionary = { "0": 1, "1": "integer", "2": 0 };
          testClient.dictionary.getIntInvalidString(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, testDictionary);
            done();
          });
        });

        it('should get and put long dictionaries', function (done) {
          var testDictionary: { [propertyName: string]: number } = { "0": 1, "1": -1, "2": 3, "3": 300 };
          testClient.dictionary.getLongValid(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, testDictionary);
            testClient.dictionary.putLongValid(testDictionary, function (error, result) {
              should().not.exist(error);
              done();
            });
          });
        });

        it('should get long dictionaries with null value', function (done) {
          var testDictionary: { [propertyName: string]: number } = { "0": 1, "1": null, "2": 0 };
          testClient.dictionary.getLongInvalidNull(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, testDictionary);
            done();
          });
        });

        it('should get long dictionaries with string value', function (done) {
          var testDictionary = { "0": 1, "1": "integer", "2": 0 };
          testClient.dictionary.getLongInvalidString(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, testDictionary);
            done();
          });
        });

        it('should get and put float dictionaries', function (done) {
          var testDictionary: { [propertyName: string]: number } = { "0": 0, "1": -0.01, "2": -1.2e20 };
          testClient.dictionary.getFloatValid(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, testDictionary);
            testClient.dictionary.putFloatValid(testDictionary, function (error, result) {
              should().not.exist(error);
              done();
            });
          });
        });

        it('should get float dictionaries with null value', function (done) {
          var testDictionary: { [propertyName: string]: number } = { "0": 0.0, "1": null, "2": -1.2e20 };
          testClient.dictionary.getFloatInvalidNull(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, testDictionary);
            done();
          });
        });

        it('should get float dictionaries with string value', function (done) {
          var testDictionary = { "0": 1, "1": "number", "2": 0 };
          testClient.dictionary.getFloatInvalidString(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, testDictionary);
            done();
          });
        });

        it('should get and put double dictionaries', function (done) {
          var testDictionary: { [propertyName: string]: number } = { "0": 0, "1": -0.01, "2": -1.2e20 };
          testClient.dictionary.getDoubleValid(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, testDictionary);
            testClient.dictionary.putDoubleValid(testDictionary, function (error, result) {
              should().not.exist(error);
              done();
            });
          });
        });

        it('should get double dictionaries with null value', function (done) {
          var testDictionary: { [propertyName: string]: number } = { "0": 0.0, "1": null, "2": -1.2e20 };
          testClient.dictionary.getDoubleInvalidNull(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, testDictionary);
            done();
          });
        });

        it('should get double dictionaries with string value', function (done) {
          var testDictionary = { "0": 1, "1": "number", "2": 0 };
          testClient.dictionary.getDoubleInvalidString(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, testDictionary);
            done();
          });
        });

        it('should get and put string dictionaries', function (done) {
          var testDictionary: { [propertyName: string]: string } = { "0": "foo1", "1": "foo2", "2": "foo3" };
          testClient.dictionary.getStringValid(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, testDictionary);
            testClient.dictionary.putStringValid(testDictionary, function (error, result) {
              should().not.exist(error);
              done();
            });
          });
        });

        it('should get string dictionaries with null value', function (done) {
          var testDictionary: { [propertyName: string]: string } = { "0": "foo", "1": null, "2": "foo2" };
          testClient.dictionary.getStringWithNull(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, testDictionary);
            done();
          });
        });

        it('should get string dictionaries with number as string value', function (done) {
          var testDictionary = { "0": "foo", "1": 123, "2": "foo2" };
          testClient.dictionary.getStringWithInvalid(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, testDictionary);
            done();
          });
        });

        it('should get and put date dictionaries', function (done) {
          var testDictionary: { [propertyName: string]: Date } = { 0: new Date('2000-12-01'), 1: new Date('1980-01-02'), 2: new Date('1492-10-12') };
          testClient.dictionary.getDateValid(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, testDictionary);
            testClient.dictionary.putDateValid(testDictionary, function (error, result) {
              should().not.exist(error);
              done();
            });
          });
        });

        it('should get date dictionaries with null value', function (done) {
          var testDictionary: { [propertyName: string]: Date } = { "0": new Date("2012-01-01"), "1": null, "2": new Date("1776-07-04") };
          testClient.dictionary.getDateInvalidNull(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, testDictionary);
            done();
          });
        });

        it('should get date dictionaries with string value', function (done) {
          var testDictionary: { [propertyName: string]: Date } = { "0": new Date("2011-03-22"), "1": new Date("date") };
          testClient.dictionary.getDateInvalidChars(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(util.inspect(result), util.inspect(testDictionary));
            done();
          });
        });

        it('should get and put dateTime dictionaries', async function () {
          if (!coreHttp.isNode) {
            // browser behaviors vary for parsing date values
            this.skip();
          }

          var getDictionary: { [propertyName: string]: Date } =
            { 0: new Date('2000-12-01t00:00:01z'), 1: new Date('1980-01-02T00:11:35+01:00'), 2: new Date('1492-10-12T10:15:01-08:00') };
          var putDictionary: { [propertyName: string]: Date } =
            { 0: new Date('2000-12-01T00:00:01Z'), 1: new Date('1980-01-01T23:11:35Z'), 2: new Date('1492-10-12T18:15:01Z') };
          const result = await testClient.dictionary.getDateTimeValid();
          assert.deepEqual(result, getDictionary);
          await testClient.dictionary.putDateTimeValid(putDictionary);
        });

        it('should get and put dateTimeRfc1123 dictionaries', function (done) {
          var dictionary: { [propertyName: string]: Date } =
            { 0: new Date('Fri, 01 Dec 2000 00:00:01 GMT'), 1: new Date('Wed, 02 Jan 1980 00:11:35 GMT'), 2: new Date('Wed, 12 Oct 1492 10:15:01 GMT') };
          testClient.dictionary.getDateTimeRfc1123Valid(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, dictionary);
            testClient.dictionary.putDateTimeRfc1123Valid(dictionary, function (error, result) {
              should().not.exist(error);
              done();
            });
          });
        });

        it('should get and put duration dictionaries', function (done) {
          var dictionary: { [propertyName: string]: string } = {
            0: 'P123DT22H14M12.011S',
            1: 'P5DT1H'
          };
          testClient.dictionary.getDurationValid(function (error, result) {
            should().not.exist(error);
            for (const key in dictionary) {
              assert.deepStrictEqual(result[key], dictionary[key]);
            }
            testClient.dictionary.putDurationValid(dictionary, function (error, result) {
              should().not.exist(error);
              done();
            });
          });
        });

        it('should get dateTime dictionaries with null value', async function () {
          if (!coreHttp.isNode) {
            // browser behaviors vary for parsing date values
            this.skip();
          }

          const testDictionary: { [propertyName: string]: Date } = { "0": new Date("2000-12-01t00:00:01z"), "1": null };
          const result = await testClient.dictionary.getDateTimeInvalidNull();
          assert.deepEqual(result, testDictionary);
        });

        it('should get dateTime dictionaries with string value', function (done) {
          var testDictionary: { [propertyName: string]: Date } = { "0": new Date("2000-12-01t00:00:01z"), "1": new Date("date-time") };
          testClient.dictionary.getDateTimeInvalidChars(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(util.inspect(result), util.inspect(testDictionary));
            done();
          });
        });

        it('should get and put byte dictionaries', function (done) {
          var bytes1 = new Uint8Array([255, 255, 255, 250]);
          var bytes2 = new Uint8Array([1, 2, 3]);
          var bytes3 = new Uint8Array([37, 41, 67]);
          var testDictionary: { [propertyName: string]: Uint8Array } = { 0: bytes1, 1: bytes2, 2: bytes3 };
          testClient.dictionary.getByteValid(function (error, result) {
            should().not.exist(error);

            result[0].length.should.equal(4);
            result[0][0].should.equal(255);
            result[0][1].should.equal(255);
            result[0][2].should.equal(255);
            result[0][3].should.equal(250);

            result[1].length.should.equal(3);
            result[1][0].should.equal(1);
            result[1][1].should.equal(2);
            result[1][2].should.equal(3);

            result[2].length.should.equal(3);
            result[2][0].should.equal(37);
            result[2][1].should.equal(41);
            result[2][2].should.equal(67);

            testClient.dictionary.putByteValid(testDictionary, function (error, result) {
              should().not.exist(error);
              done();
            });
          });
        });

        it('should get byte dictionaries with null values', function (done) {
          testClient.dictionary.getByteInvalidNull(function (error, result) {
            should().not.exist(error);
            result.should.exist;

            result[0].length.should.equal(3);
            result[0][0].should.equal(171);
            result[0][1].should.equal(172);
            result[0][2].should.equal(173);
            should().not.exist(result[1]);

            done();
          });
        });
      });

      describe('for complex types', function () {
        var testClient = new AutoRestSwaggerBATdictionaryService(clientOptions);
        it('should get null and empty complex types in dictionary', function (done) {
          testClient.dictionary.getComplexEmpty(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, {});
            testClient.dictionary.getComplexNull(function (error, result) {
              should().not.exist(error);
              assert.equal(result, null);
              done();
            });
          });
        });

        it('should get complex items with empty and null values in dictionary', function (done) {
          var testNull: { [propertyName: string]: AutoRestSwaggerBATdictionaryServiceModels.Widget } = { 0: { 'integer': 1, 'string': '2' }, 1: null, 2: { 'integer': 5, 'string': '6' } };
          var testEmpty = { 0: { 'integer': 1, 'string': '2' }, 1: {}, 2: { 'integer': 5, 'string': '6' } };
          testClient.dictionary.getComplexItemNull(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, testNull);
            testClient.dictionary.getComplexItemEmpty(function (error, result) {
              should().not.exist(error);
              JSON.stringify(result).should.equal(JSON.stringify(testEmpty));
              done();
            });
          });
        });

        it('should get and put valid complex items in dictionaries', function (done) {
          var testDictionary: { [propertyName: string]: AutoRestSwaggerBATdictionaryServiceModels.Widget } = { 0: { 'integer': 1, 'string': '2' }, 1: { 'integer': 3, 'string': '4' }, 2: { 'integer': 5, 'string': '6' } };
          testClient.dictionary.getComplexValid(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, testDictionary);
            testClient.dictionary.putComplexValid(testDictionary, function (error, result) {
              should().not.exist(error);
              done();
            });
          });
        });
      });

      describe('for dictionary of arrays', function () {
        var testClient = new AutoRestSwaggerBATdictionaryService(clientOptions);
        it('should get null and empty array in dictionary', function (done) {
          testClient.dictionary.getArrayNull(function (error, result) {
            should().not.exist(error);
            assert.equal(result, null);
            testClient.dictionary.getArrayEmpty(function (error, result) {
              should().not.exist(error);
              assert.deepEqual(result, {});
              done();
            });
          });
        });

        it('should get arrays with empty and null items in dictionary', function (done) {
          var testNull: { [propertyName: string]: string[] } = { 0: ['1', '2', '3'], 1: null, 2: ['7', '8', '9'] };
          var testEmpty: { [propertyName: string]: string[] } = { 0: ['1', '2', '3'], 1: [], 2: ['7', '8', '9'] };
          testClient.dictionary.getArrayItemNull(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, testNull);
            testClient.dictionary.getArrayItemEmpty(function (error, result) {
              should().not.exist(error);
              assert.deepEqual(result, testEmpty);
              done();
            });
          });
        });

        it('should get and put valid array items in dictionary', function (done) {
          var testDictionary: { [propertyName: string]: string[] } = { 0: ['1', '2', '3'], 1: ['4', '5', '6'], 2: ['7', '8', '9'] };
          testClient.dictionary.getArrayValid(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, testDictionary);
            testClient.dictionary.putArrayValid(testDictionary, function (error, result) {
              should().not.exist(error);
              done();
            });
          });
        });
      });

      describe('for dictionary of dictionaries', function () {
        var testClient = new AutoRestSwaggerBATdictionaryService(clientOptions);
        it('should get null and empty dictionary in dictionary', function (done) {
          testClient.dictionary.getDictionaryNull(function (error, result) {
            should().not.exist(error);
            assert.equal(result, null);
            testClient.dictionary.getDictionaryEmpty(function (error, result) {
              should().not.exist(error);
              assert.deepEqual(result, {});
              done();
            });
          });
        });

        it('should get dictionaries with empty and null items in dictionary', function (done) {
          var testNull: { [propertyName: string]: { [propertyName: string]: string } } =
            { 0: { '1': 'one', '2': 'two', '3': 'three' }, 1: null, 2: { '7': 'seven', '8': 'eight', '9': 'nine' } };
          var testEmpty: { [propertyName: string]: { [propertyName: string]: string } } =
            { 0: { '1': 'one', '2': 'two', '3': 'three' }, 1: {}, 2: { '7': 'seven', '8': 'eight', '9': 'nine' } };
          testClient.dictionary.getDictionaryItemNull(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, testNull);
            testClient.dictionary.getDictionaryItemEmpty(function (error, result) {
              should().not.exist(error);
              assert.deepEqual(result, testEmpty);
              done();
            });
          });
        });

        it('should get and put valid dicitonary items in dictionaries', function (done) {
          var testDictionary: { [propertyName: string]: { [propertyName: string]: string } } =
            { 0: { '1': 'one', '2': 'two', '3': 'three' }, 1: { '4': 'four', '5': 'five', '6': 'six' }, 2: { '7': 'seven', '8': 'eight', '9': 'nine' } };
          testClient.dictionary.getDictionaryValid(function (error, result) {
            should().not.exist(error);
            assert.deepEqual(result, testDictionary);
            testClient.dictionary.putDictionaryValid(testDictionary, function (error, result) {
              should().not.exist(error);
              done();
            });
          });
        });
      });
    });
    describe('Files Client', function () {
      var testClient = new AutoRestSwaggerBATFileService(clientOptions);

      if (coreHttp.isNode) {
        it('nodejs should correctly deserialize binary streams', async function () {
          const result = await testClient.files.getFile()
          const buf = await readStreamToBuffer(result.readableStreamBody);
          assert.deepEqual(buf, fs.readFileSync(__dirname + '/sample.png'));
        });
      }

      if (!coreHttp.isNode) {
        it('browser should correctly deserialize binary streams', async function () {
          const result = await testClient.files.getFile();
          result.should.exist;
          result.blobBody.should.exist;
          const body = await result.blobBody;
          const reader = new FileReader();
          const readPromise = new Promise(function (resolve, reject) {
            reader.addEventListener("error", reject);
            reader.addEventListener("abort", reject);
            reader.addEventListener("load", resolve);
          });
          reader.readAsArrayBuffer(body);
          await readPromise;
          const actualBytes: Uint8Array = new Uint8Array(reader.result as ArrayBuffer);
          const expectedBytes: Uint8Array = new Uint8Array(require(`arraybuffer-loader!${__dirname}/sample.png`));
          actualBytes.length.should.equal(expectedBytes.length, "length");
          for (let i = 0; i < actualBytes.length; i++) {
            actualBytes[i].should.equal(expectedBytes[i], `position ${i}`);
          }
        });
      }

      if (coreHttp.isNode) {
        it('nodejs should correctly deserialize empty streams', async function () {
          const result = await testClient.files.getEmptyFile()
          const byteCount = await readStreamCountBytes(result.readableStreamBody as any);
          byteCount.should.equal(0);
        });
      }

      if (!coreHttp.isNode) {
        it('browser should correctly deserialize empty streams', async function () {
          const result = await testClient.files.getEmptyFile();
          const body = await result.blobBody;
          body.size.should.equal(0);
        });
      }

      if (coreHttp.isNode) {
        it('nodejs should correctly deserialize large streams', async function () {
          const result = await testClient.files.getFileLarge();
          const byteCount = await readStreamCountBytes(result.readableStreamBody);
          byteCount.should.equal(3000 * 1024 * 1024);
        });
      }

      if (!coreHttp.isNode) {
        it('browser should correctly deserialize large streams', async function () {
          this.timeout(1000 * 60 * 10);
          const result = await testClient.files.getFileLarge();
          const body = await result.blobBody;
          body.size.should.equal(3000 * 1024 * 1024);
        });
      }
    });

    describe('Form Data Client', function () {
      var testClient = new AutoRestSwaggerBATFormDataService(clientOptions);

      if (coreHttp.isNode) {
        it('nodejs should correctly accept file via form-dat', async function () {
          const result = await testClient.formdata.uploadFile(() => fs.createReadStream(__dirname + '/sample.png'), 'sample.png');
          const buff = await readStreamToBuffer(result.readableStreamBody)
          assert.deepEqual(buff, fs.readFileSync(__dirname + '/sample.png'));
        });
      }

      if (!coreHttp.isNode) {
        it('browser should correctly accept file via form-dat', async function () {
          const content = require(`arraybuffer-loader!${__dirname}/sample.png`);
          const blob = new Blob([content]);
          const response = await testClient.formdata.uploadFile(blob, 'sample.png');
          const body = await response.blobBody;
          const reader = new FileReader();
          const readPromise = new Promise(function (resolve, reject) {
            reader.addEventListener("error", reject);
            reader.addEventListener("abort", reject);
            reader.addEventListener("load", resolve);
          });
          reader.readAsArrayBuffer(body);
          await readPromise;
          const actualBytes = new Uint8Array(reader.result as ArrayBuffer);
          const expectedBytes = new Uint8Array(content);
          actualBytes.length.should.equal(expectedBytes.length, 'length');
          for (let i = 0; i < actualBytes.length; i++) {
            actualBytes[i].should.equal(expectedBytes[i], `position ${i}`);
          }
        });
      }

      if (coreHttp.isNode) {
        it('nodejs should correctly accept file via body', async function () {
          const result = await testClient.formdata.uploadFileViaBody(() => fs.createReadStream(__dirname + '/sample.png'));
          const buff = await readStreamToBuffer(result.readableStreamBody);
          assert.deepEqual(buff, fs.readFileSync(__dirname + '/sample.png'));
        });
      }

      if (!coreHttp.isNode) {
        it('browser should correctly accept file via body', async function () {
          const content = require(`arraybuffer-loader!${__dirname}/sample.png`);
          const response = await testClient.formdata.uploadFileViaBody(new Blob([content]));
          const reader = new FileReader();
          const readPromise = new Promise((resolve, reject) => {
            reader.addEventListener("abort", reject);
            reader.addEventListener("error", reject);
            reader.addEventListener("load", resolve);
          });
          reader.readAsArrayBuffer(await response.blobBody);
          await readPromise;
          const actual = new Uint8Array(reader.result as ArrayBuffer);
          const expected = new Uint8Array(content);
          actual.length.should.equal(expected.length, "length");
          for (let i = 0; i < actual.length; i++) {
            actual[i].should.equal(expected[i], `position ${i}`);
          }
        });
      }

      it('should report upload/download progress', async function () {
        const content = new Uint8Array(1024 * 1024 * 1);
        let uploadNotified = false;
        let downloadNotified = false;
        const response = await testClient.formdata.uploadFileViaBody(content, {
          onUploadProgress: ev => {
            uploadNotified = true;
            ev.loadedBytes.should.be.a("Number");
          },
          onDownloadProgress: ev => {
            downloadNotified = true;
            ev.loadedBytes.should.be.a("Number");
          }
        });
        const streamBody = response.readableStreamBody;
        if (response.blobBody) {
          await response.blobBody;
        } else if (streamBody) {
          streamBody.on('data', () => { });
          await new Promise((resolve, reject) => {
            streamBody.on('end', resolve);
            streamBody.on('error', reject);
          });
        }

        assert(uploadNotified);
        assert(downloadNotified);
      });
    });

    describe('Url Client', function () {
      var testClient = new AutoRestUrlTestService('globalStringPath', clientOptions);
      testClient.globalStringQuery = 'globalStringQuery';
      it('should work when path has null, empty, and multi-byte byte values', function (done) {
        testClient.paths.byteNull(null, function (error, result) {
          error.should.exist;
          should().not.exist(result);
          testClient.paths.byteEmpty(function (error, result) {
            should().not.exist(error);
            testClient.paths.byteMultiByte(stringToByteArray('啊齄丂狛狜隣郎隣兀﨩'), function (error, result) {
              should().not.exist(error);
              done();
            });
          });
        });
      });
      it('should work when path has string', function (done) {
        testClient.paths.stringEmpty(function (error, result) {
          should().not.exist(error);
          testClient.paths.stringNull(null, function (error, result) {
            error.should.exist;
            testClient.paths.stringUrlEncoded(function (error, result) {
              should().not.exist(error);
              done();
            });
          });
        });
      });

      it('should work when path has base64url encoded string', function (done) {
        testClient.paths.base64Url(stringToByteArray('lorem'), function (error, result) {
          should().not.exist(error);
          should().not.exist(result);
          done();
        });
      });

      it('should work when path has a paramaeter in UnixTime format', function (done) {
        testClient.paths.unixTimeUrl(new Date('2016-04-13T00:00:00.000Z'), function (error, result) {
          should().not.exist(error);
          done();
        });
      });

      it('should work when path has datetime', function (done) {
        testClient.paths.dateTimeValid(function (error, result) {
          should().not.exist(error);
          testClient.paths.dateTimeNull(null, function (error, result) {
            error.should.exist;
            done();
          });
        });
      });

      it('should work when path has date', async function () {
        await testClient.paths.dateValid();
      });

      it('should work when query has date', async function () {
        await testClient.queries.dateValid();
      });

      it('should work when path has enum', async function () {
        const error1 = await msAssert.throwsAsync(testClient.paths.enumValid(<AutoRestUrlTestServiceModels.UriColor>''));
        error1.message.should.equal(` is not a valid value for enumPath. The valid values are: ["red color","green color","blue color"].`);

        const error2 = await msAssert.throwsAsync(testClient.paths.enumNull(<AutoRestUrlTestServiceModels.UriColor>null));
        error2.message.should.equal(`enumPath cannot be null or undefined.`);

        await testClient.paths.enumValid('green color');
      });

      it('should work when path has bool', async function () {
        await testClient.paths.getBooleanTrue();
        await testClient.paths.getBooleanFalse();
      });

      it('should work when path has double decimal values', function (done) {
        testClient.paths.doubleDecimalNegative(function (error, result) {
          should().not.exist(error);
          testClient.paths.doubleDecimalPositive(function (error, result) {
            should().not.exist(error);
            done();
          });
        });
      });

      it('should work when path has float values', function (done) {
        testClient.paths.floatScientificNegative(function (error, result) {
          should().not.exist(error);
          testClient.paths.floatScientificPositive(function (error, result) {
            should().not.exist(error);
            done();
          });
        });
      });

      it('should work when path has integer values', function (done) {
        testClient.paths.getIntNegativeOneMillion(function (error, result) {
          should().not.exist(error);
          testClient.paths.getIntOneMillion(function (error, result) {
            should().not.exist(error);
            done();
          });
        });
      });

      it('should work when path has big integer values', function (done) {
        testClient.paths.getNegativeTenBillion(function (error, result) {
          should().not.exist(error);
          testClient.paths.getTenBillion(function (error, result) {
            should().not.exist(error);
            done();
          });
        });
      });

      it('should work when use values in different portion of url', function (done) {
        var optionalParams = { localStringQuery: 'localStringQuery', pathItemStringQuery: 'pathItemStringQuery' };
        testClient.pathItems.getAllWithValues('localStringPath', 'pathItemStringPath', optionalParams, function (error, result) {
          should().not.exist(error);
          done();
        });
      });
      it('should work when use null values in different portion of url', function (done) {
        testClient.globalStringQuery = null;
        var optionalParams = { localStringQuery: <string>null, pathItemStringQuery: 'pathItemStringQuery' };
        testClient.pathItems.getGlobalAndLocalQueryNull('localStringPath', 'pathItemStringPath', optionalParams, function (error, result) {
          should().not.exist(error);
          optionalParams = { localStringQuery: 'localStringQuery', pathItemStringQuery: 'pathItemStringQuery' };
          testClient.pathItems.getGlobalQueryNull('localStringPath', 'pathItemStringPath', optionalParams, function (error, result) {
            should().not.exist(error);
            testClient.globalStringQuery = 'globalStringQuery';
            optionalParams = { localStringQuery: null, pathItemStringQuery: null };
            testClient.pathItems.getLocalPathItemQueryNull('localStringPath', 'pathItemStringPath', optionalParams, function (error, result) {
              should().not.exist(error);
              done();
            });
          });
        });
      });
      it('should work when query has bool', function (done) {
        testClient.queries.getBooleanTrue(function (error, result) {
          should().not.exist(error);
          testClient.queries.getBooleanFalse(function (error, result) {
            should().not.exist(error);
            done();
          });
        });
      });
      it('should work when query has double values', function (done) {
        testClient.queries.doubleDecimalNegative(function (error, result) {
          should().not.exist(error);
          testClient.queries.doubleDecimalPositive(function (error, result) {
            should().not.exist(error);
            done();
          });
        });
      });
      it('should work when query has float values', function (done) {
        testClient.queries.floatScientificNegative(function (error, result) {
          should().not.exist(error);
          testClient.queries.floatScientificPositive(function (error, result) {
            should().not.exist(error);
            done();
          });
        });
      });
      it('should work when query has int values', function (done) {
        testClient.queries.getIntNegativeOneMillion(function (error, result) {
          should().not.exist(error);
          testClient.queries.getIntOneMillion(function (error, result) {
            should().not.exist(error);
            done();
          });
        });
      });
      it('should work when query has billion values', function (done) {
        testClient.queries.getNegativeTenBillion(function (error, result) {
          should().not.exist(error);
          testClient.queries.getTenBillion(function (error, result) {
            should().not.exist(error);
            done();
          });
        });
      });
      it('should work when query has string values', function (done) {
        testClient.queries.stringEmpty(function (error, result) {
          should().not.exist(error);
          testClient.queries.stringUrlEncoded(function (error, result) {
            should().not.exist(error);
            done();
          });
        });
      });
      it('should work when query has datetime', function (done) {
        testClient.queries.dateTimeValid(function (error, result) {
          should().not.exist(error);
          done();
        });
      });
      it('should work when query has byte values', async function () {
        await testClient.queries.byteEmpty();
        await testClient.queries.byteMultiByte({ byteQuery: stringToByteArray('啊齄丂狛狜隣郎隣兀﨩') });
      });
      it('should work when query has enum values', async function () {
        await msAssert.throwsAsync(testClient.queries.enumValid({ enumQuery: <AutoRestUrlTestServiceModels.UriColor>'' }));
        await testClient.queries.enumNull({ enumQuery: null });
        await testClient.queries.enumValid({ enumQuery: 'green color' });
      });
      it('should work when query has string array values', async function () {
        const testArray = ['ArrayQuery1', 'begin!*\'();:@ &=+$,/?#[]end', null, ''];
        await testClient.queries.arrayStringCsvEmpty({ arrayQuery: [] });
        await testClient.queries.arrayStringCsvValid({ arrayQuery: testArray });
        await testClient.queries.arrayStringPipesValid({ arrayQuery: testArray });
        await testClient.queries.arrayStringSsvValid({ arrayQuery: testArray });
        await testClient.queries.arrayStringTsvValid({ arrayQuery: testArray });
      });
      it('should work when path has string array values', async function () {
        await testClient.paths.arrayCsvInPath(['ArrayPath1', 'begin!*\'();:@ &=+$,/?#[]end', null, '']);
      });
      it('should work when use null values in url query', async function () {
        await testClient.queries.byteNull({ byteQuery: null });
        await testClient.queries.dateNull({ dateQuery: null });
        await testClient.queries.dateTimeNull({ dateTimeQuery: null });
        await testClient.queries.doubleNull({ doubleQuery: null });
        await testClient.queries.floatNull({ floatQuery: null });
        await testClient.queries.getBooleanNull({ boolQuery: null });
        await testClient.queries.getIntNull({ intQuery: null });
        await testClient.queries.getLongNull({ longQuery: null });
        await testClient.queries.stringNull({ stringQuery: null });
        await testClient.queries.arrayStringCsvNull({ arrayQuery: null });
      });
    });
    describe('Http infrastructure Client', function () {
      const serializer = new coreHttp.Serializer(AutoRestHttpInfrastructureTestServiceMappers);
      var testOptions = { ...clientOptions };

      // Prevents caching redirects
      const preventCachingPolicy: coreHttp.RequestPolicyFactory = {
        create: next => ({
          sendRequest: req => {
            if (!req.query) {
              req.query = {};
            }
            req.query._ = new Date().toISOString();
            return next.sendRequest(req);
          }
        })
      };
      testOptions.requestPolicyFactories = [
        preventCachingPolicy,
        coreHttp.redirectPolicy(),
        coreHttp.exponentialRetryPolicy(3, 0, 0, 0),
        coreHttp.deserializationPolicy()
      ];
      var testClient = new AutoRestHttpInfrastructureTestService(testOptions);
      it('should work for all http success status codes with different verbs', function (done) {
        testClient.httpSuccess.head200(function (error, result) {
          should().not.exist(error);
          testClient.httpSuccess.get200(function (error, result) {
            should().not.exist(error);
            testClient.httpSuccess.put200({ booleanValue: true }, function (error, result) {
              should().not.exist(error);
              testClient.httpSuccess.post200({ booleanValue: true }, function (error, result) {
                should().not.exist(error);
                testClient.httpSuccess.patch200({ booleanValue: true }, function (error, result) {
                  should().not.exist(error);
                  testClient.httpSuccess.delete200({ booleanValue: true }, function (error, result) {
                    should().not.exist(error);
                    testClient.httpSuccess.put201({ booleanValue: true }, function (error, result) {
                      should().not.exist(error);
                      testClient.httpSuccess.post201({ booleanValue: true }, function (error, result) {
                        should().not.exist(error);
                        testClient.httpSuccess.put202({ booleanValue: true }, function (error, result) {
                          should().not.exist(error);
                          testClient.httpSuccess.post202({ booleanValue: true }, function (error, result) {
                            should().not.exist(error);
                            testClient.httpSuccess.patch202({ booleanValue: true }, function (error, result) {
                              should().not.exist(error);
                              testClient.httpSuccess.delete202({ booleanValue: true }, function (error, result) {
                                should().not.exist(error);
                                testClient.httpSuccess.head204(function (error, result) {
                                  should().not.exist(error);
                                  testClient.httpSuccess.put204({ booleanValue: true }, function (error, result) {
                                    should().not.exist(error);
                                    testClient.httpSuccess.post204({ booleanValue: true }, function (error, result) {
                                      should().not.exist(error);
                                      testClient.httpSuccess.delete204({ booleanValue: true }, function (error, result) {
                                        should().not.exist(error);
                                        testClient.httpSuccess.patch204({ booleanValue: true }, function (error, result) {
                                          should().not.exist(error);
                                          testClient.httpSuccess.head404(function (error, result) {
                                            should().not.exist(error);
                                            done();
                                          });
                                        });
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
      it('should work for all http redirect status codes with different verbs', async function () {
        (await testClient.httpRedirects.head300())._response.status.should.equal(200);
        (await testClient.httpRedirects.get300())._response.status.should.equal(200);
        (await testClient.httpRedirects.head301())._response.status.should.equal(200);
        (await testClient.httpRedirects.get301())._response.status.should.equal(200);
        (await testClient.httpRedirects.head302())._response.status.should.equal(200);
        (await testClient.httpRedirects.get302())._response.status.should.equal(200);
        (await testClient.httpRedirects.post303({ booleanValue: true }))._response.status.should.equal(200);
        (await testClient.httpRedirects.head307())._response.status.should.equal(200);
        (await testClient.httpRedirects.get307())._response.status.should.equal(200);
        (await testClient.httpRedirects.put307({ booleanValue: true }))._response.status.should.equal(200);
        (await testClient.httpRedirects.post307({ booleanValue: true }))._response.status.should.equal(200);
        (await testClient.httpRedirects.patch307({ booleanValue: true }))._response.status.should.equal(200);
        (await testClient.httpRedirects.delete307({ booleanValue: true }))._response.status.should.equal(200);
      });

      it('should work for all client failure status codes (4xx) with different verbs', async function () {
        await msAssert.throwsAsync(() => testClient.httpClientFailure.head400(), (err: coreHttp.RestError) => err.statusCode.should.equal(400));
        await msAssert.throwsAsync(() => testClient.httpClientFailure.get400(), (err: coreHttp.RestError) => err.statusCode.should.equal(400));
        await msAssert.throwsAsync(() => testClient.httpClientFailure.put400({ booleanValue: true }), (err: coreHttp.RestError) => err.statusCode.should.equal(400));
        await msAssert.throwsAsync(() => testClient.httpClientFailure.patch400({ booleanValue: true }), (err: coreHttp.RestError) => err.statusCode.should.equal(400));
        await msAssert.throwsAsync(() => testClient.httpClientFailure.post400({ booleanValue: true }), (err: coreHttp.RestError) => err.statusCode.should.equal(400));
        await msAssert.throwsAsync(() => testClient.httpClientFailure.delete400({ booleanValue: true }), (err: coreHttp.RestError) => err.statusCode.should.equal(400));

        await msAssert.throwsAsync(() => testClient.httpClientFailure.head401(), (err: coreHttp.RestError) => err.statusCode.should.equal(401));
        await msAssert.throwsAsync(() => testClient.httpClientFailure.get402(), (err: coreHttp.RestError) => err.statusCode.should.equal(402));
        await msAssert.throwsAsync(() => testClient.httpClientFailure.get403(), (err: coreHttp.RestError) => err.statusCode.should.equal(403));
        await msAssert.throwsAsync(() => testClient.httpClientFailure.put404({ booleanValue: true }), (err: coreHttp.RestError) => err.statusCode.should.equal(404));
        await msAssert.throwsAsync(() => testClient.httpClientFailure.patch405({ booleanValue: true }), (err: coreHttp.RestError) => err.statusCode.should.equal(405));
        await msAssert.throwsAsync(() => testClient.httpClientFailure.post406({ booleanValue: true }), (err: coreHttp.RestError) => err.statusCode.should.equal(406));

        // In browser, HTTP 407 causes an XHR-level error
        // https://bugs.chromium.org/p/chromium/issues/detail?id=372136
        await msAssert.throwsAsync(() => testClient.httpClientFailure.delete407({ booleanValue: true }), (err: coreHttp.RestError) => {
          if (coreHttp.isNode) {
            err.statusCode.should.equal(407);
          } else {
            err.should.exist;
          }
        });

        await msAssert.throwsAsync(() => testClient.httpClientFailure.put409({ booleanValue: true }), (err: coreHttp.RestError) => err.statusCode.should.equal(409));
        await msAssert.throwsAsync(() => testClient.httpClientFailure.head410(), (err: coreHttp.RestError) => err.statusCode.should.equal(410));
        await msAssert.throwsAsync(() => testClient.httpClientFailure.get411(), (err: coreHttp.RestError) => err.statusCode.should.equal(411));
        await msAssert.throwsAsync(() => testClient.httpClientFailure.get412(), (err: coreHttp.RestError) => err.statusCode.should.equal(412));
        await msAssert.throwsAsync(() => testClient.httpClientFailure.put413({ booleanValue: true }), (err: coreHttp.RestError) => err.statusCode.should.equal(413));
        await msAssert.throwsAsync(() => testClient.httpClientFailure.patch414({ booleanValue: true }), (err: coreHttp.RestError) => err.statusCode.should.equal(414));
        await msAssert.throwsAsync(() => testClient.httpClientFailure.post415({ booleanValue: true }), (err: coreHttp.RestError) => err.statusCode.should.equal(415));
        await msAssert.throwsAsync(() => testClient.httpClientFailure.get416(), (err: coreHttp.RestError) => err.statusCode.should.equal(416));
        await msAssert.throwsAsync(() => testClient.httpClientFailure.delete417({ booleanValue: true }), (err: coreHttp.RestError) => err.statusCode.should.equal(417));
        await msAssert.throwsAsync(() => testClient.httpClientFailure.head429(), (err: coreHttp.RestError) => err.statusCode.should.equal(429));
        await msAssert.throwsAsync(() => testClient.httpFailure.getEmptyError(), (err: coreHttp.RestError) => err).should.exist;
        await msAssert.throwsAsync(() => testClient.httpFailure.getNoModelError(), (err: coreHttp.RestError) => err.message).should.exist;
      });

      it('should work for all server failure status codes (5xx) with different verbs', async () => {
        await msAssert.throwsAsync(testClient.httpServerFailure.head501(),
          (error: coreHttp.RestError) => {
            error.statusCode.should.equal(501);
          });

        await msAssert.throwsAsync(testClient.httpServerFailure.get501(),
          (error: coreHttp.RestError) => {
            error.statusCode.should.equal(501);
          });

        await msAssert.throwsAsync(testClient.httpServerFailure.post505({ booleanValue: true }),
          (error: coreHttp.RestError) => {
            error.statusCode.should.equal(505);
          });

        await msAssert.throwsAsync(testClient.httpServerFailure.delete505({ booleanValue: true }),
          (error: coreHttp.RestError) => {
            error.statusCode.should.equal(505);
          });
      });

      it('should properly perform the Http retry', function (done) {
        testClient.httpRetry.head408(function (error, result, request, response) {
          should().not.exist(error);
          response.status.should.equal(200);
          testClient.httpRetry.get502(function (error, result, request, response) {
            should().not.exist(error);
            response.status.should.equal(200);
            testClient.httpRetry.put500({ booleanValue: true }, function (error, result, request, response) {
              should().not.exist(error);
              response.status.should.equal(200);
              testClient.httpRetry.patch500({ booleanValue: true }, function (error, result, request, response) {
                should().not.exist(error);
                response.status.should.equal(200);
                testClient.httpRetry.post503({ booleanValue: true }, function (error, result, request, response) {
                  should().not.exist(error);
                  response.status.should.equal(200);
                  testClient.httpRetry.delete503({ booleanValue: true }, function (error, result, request, response) {
                    should().not.exist(error);
                    response.status.should.equal(200);
                    testClient.httpRetry.put504({ booleanValue: true }, function (error, result, request, response) {
                      should().not.exist(error);
                      response.status.should.equal(200);
                      testClient.httpRetry.patch504({ booleanValue: true }, function (error, result, request, response) {
                        should().not.exist(error);
                        response.status.should.equal(200);
                        done();
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });

      it('should properly handle multiple responses with different verbs', async () => {
        const result1 = await testClient.multipleResponses.get200Model204NoModelDefaultError200Valid();
        result1.should.exist;
        result1.statusCode.should.equal("200");

        //should use models.Error to deserialize and set it as body of javascript Error object
        await msAssert.throwsAsync(testClient.multipleResponses.get200Model204NoModelDefaultError201Invalid(),
          (error: coreHttp.RestError) => error.statusCode.should.equal(201));

        await msAssert.throwsAsync(testClient.multipleResponses.get200Model204NoModelDefaultError202None(),
          (error: coreHttp.RestError) => error.statusCode.should.equal(202));

        //should we set body property of coreHttp.HttpOperationResponse to {}.
        //C3 does this Assert.Null(client.MultipleResponses.Get200Model204NoModelDefaultError204Valid());
        await testClient.multipleResponses.get200Model204NoModelDefaultError204Valid();

        //{"message":"client error","status":400} shouldn't we set this to error model defined in swagger?
        await msAssert.throwsAsync(testClient.multipleResponses.get200Model204NoModelDefaultError400Valid(),
          (error: coreHttp.RestError) => error.statusCode.should.equal(400));

        const result2 = await testClient.multipleResponses.get200Model201ModelDefaultError200Valid();
        result2.should.exist;
        result2.statusCode.should.equal("200");

        const result3 = await testClient.multipleResponses.get200Model201ModelDefaultError201Valid();
        result3.should.exist;
        assert.deepEqual(result3, { 'statusCode': '201', 'textStatusCode': 'Created' });

        await msAssert.throwsAsync(testClient.multipleResponses.get200Model201ModelDefaultError400Valid(),
          (error: coreHttp.RestError) => error.statusCode.should.equal(400));

        const result4 = await testClient.multipleResponses.get200ModelA201ModelC404ModelDDefaultError200Valid();
        result4.should.exist;
        result4._response.status.should.equal(200);

        const result5 = await testClient.multipleResponses.get200ModelA201ModelC404ModelDDefaultError201Valid();
        result5.should.exist;
        result5._response.status.should.equal(201);

        const result6 = await testClient.multipleResponses.get200ModelA201ModelC404ModelDDefaultError404Valid();
        result6.should.exist;
        result6._response.status.should.equal(404);

        await msAssert.throwsAsync(testClient.multipleResponses.get200ModelA201ModelC404ModelDDefaultError400Valid(),
          (error: coreHttp.RestError) => error.statusCode.should.equal(400));

        await testClient.multipleResponses.get202None204NoneDefaultError202None();

        await testClient.multipleResponses.get202None204NoneDefaultError204None();

        await msAssert.throwsAsync(testClient.multipleResponses.get202None204NoneDefaultError400Valid(),
          (error: coreHttp.RestError) => error.statusCode.should.equal(400));

        await testClient.multipleResponses.get202None204NoneDefaultNone202Invalid();

        await testClient.multipleResponses.get202None204NoneDefaultNone204None();

        await msAssert.throwsAsync(testClient.multipleResponses.get202None204NoneDefaultNone400None(),
          (error: coreHttp.RestError) => error.statusCode.should.equal(400));

        await msAssert.throwsAsync(testClient.multipleResponses.get202None204NoneDefaultNone400Invalid(),
          (error: coreHttp.RestError) => error.statusCode.should.equal(400));

        const result7 = await testClient.multipleResponses.getDefaultModelA200Valid();
        result7.should.exist;
        result7.statusCode.should.equal("200");

        await testClient.multipleResponses.getDefaultModelA200None();

        await msAssert.throwsAsync(testClient.multipleResponses.getDefaultModelA400Valid(),
          (error: coreHttp.RestError) => error.statusCode.should.equal(400));

        await msAssert.throwsAsync(testClient.multipleResponses.getDefaultModelA400None(),
          (error: coreHttp.RestError) => error.statusCode.should.equal(400));

        await testClient.multipleResponses.getDefaultNone200Invalid();

        await testClient.multipleResponses.getDefaultNone200None();

        await msAssert.throwsAsync(testClient.multipleResponses.getDefaultNone400Invalid(),
          (error: coreHttp.RestError) => error.statusCode.should.equal(400));

        await msAssert.throwsAsync(testClient.multipleResponses.getDefaultNone400None(),
          (error: coreHttp.RestError) => error.statusCode.should.equal(400));

        await testClient.multipleResponses.get200ModelA200None();

        const result8 = await testClient.multipleResponses.get200ModelA200Valid();
        result8.statusCode.should.equal("200");

        await testClient.multipleResponses.get200ModelA200Invalid();

        await msAssert.throwsAsync(testClient.multipleResponses.get200ModelA400None(),
          (error: coreHttp.RestError) => error.statusCode.should.equal(400));

        await msAssert.throwsAsync(testClient.multipleResponses.get200ModelA400Valid(),
          (error: coreHttp.RestError) => error.statusCode.should.equal(400));

        await msAssert.throwsAsync(testClient.multipleResponses.get200ModelA400Invalid(),
          (error: coreHttp.RestError) => error.statusCode.should.equal(400));

        await msAssert.throwsAsync(testClient.multipleResponses.get200ModelA202Valid(),
          (error: coreHttp.RestError) => error.statusCode.should.equal(202));
      });
    });
  });
});
