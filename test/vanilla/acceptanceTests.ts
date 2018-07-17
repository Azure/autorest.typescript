﻿// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

'use strict';

import * as should from 'should';
import * as util from 'util';
import * as assert from 'assert';
import * as msAssert from "../util/msAssert";
import * as msRest from 'ms-rest-js';
import * as stream from 'stream';
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
import * as AutoRestHttpInfrastructureMappers from "./generated/Http/models/mappers";
import { AutoRestSwaggerBATFormDataService } from './generated/BodyFormData/autoRestSwaggerBATFormDataService';
import { AutoRestParameterizedHostTestClient } from './generated/CustomBaseUri/autoRestParameterizedHostTestClient';
import { AutoRestParameterizedCustomHostTestClient } from './generated/CustomBaseUriMoreOptions/autoRestParameterizedCustomHostTestClient';
import { fail } from "assert";
import { timeoutPromise } from '../util/util';
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
  if (msRest.isNode) {
    return Buffer.from(str, "utf-8");
  } else {
    return new TextEncoder().encode(str);
  }
}

var clientOptions: msRest.ServiceClientOptions = { noRetryPolicy: true };
var baseUri = 'http://localhost:3000';
describe('typescript', function () {
  describe('Swagger BAT', function () {
    describe('Custom BaseUri Client with more options', function () {
      var customOptions = {
        dnsSuffix: 'host:3000'
      };
      var testClient = new AutoRestParameterizedCustomHostTestClient('test12', customOptions);
      it('should return 200', function (done) {
        testClient.paths.getEmpty('http://lo', 'cal', 'key1', function (error, result, request, response) {
          should.not.exist(error);
          response.status.should.equal(200);
          done();
        });
      });
    });
    describe('Bool Client', function () {
      var testClient = new AutoRestBoolTestService(baseUri, clientOptions);
      it('should get valid boolean values', function (done) {
        testClient.bool.getTrue(function (error, result) {
          should.not.exist(error);
          result.should.equal(true);
          testClient.bool.getFalse(function (error, result) {
            should.not.exist(error);
            result.should.equal(false);
            done();
          });
        });
      });

      it('should put valid boolean values', function (done) {
        testClient.bool.putTrue(true, function (error, result) {
          should.not.exist(error);
          testClient.bool.putFalse(false, function (error, result) {
            should.not.exist(error);
            done();
          });
        });
      });

      it('should get null and invalid boolean value', function (done) {
        testClient.bool.getNull(function (error, result) {
          should.not.exist(result);
          testClient.bool.getInvalid(function (error, result) {
            should.exist(error);
            should.not.exist(result);
            done();
          });
        });
      });
    });

    describe('Integer Client', function () {
      var testClient = new AutoRestIntegerTestService(baseUri, clientOptions);
      it('should put max value for 32 and 64 bit Integers', function (done) {
        testClient.intModel.putMax32((Math.pow(2, 32 - 1) - 1), function (error, result) {
          should.not.exist(error);
          testClient.intModel.putMax64(9223372036854776000, function (error, result) {
            should.not.exist(error);
            done();
          });
        });
      });

      it('should put min value for 32 and 64 bit Integers', function (done) {
        testClient.intModel.putMin32(-Math.pow(2, 32 - 1), function (error, result) {
          should.not.exist(error);
          testClient.intModel.putMin64(-9223372036854776000, function (error, result) {
            should.not.exist(error);
            done();
          });
        });
      });

      it('should get null and invalid integer value', function (done) {
        testClient.intModel.getNull(function (error, result) {
          should.not.exist(result);
          testClient.intModel.getInvalid(function (error, result) {
            should.exist(error);
            should.not.exist(result);
            done();
          });
        });
      });

      it('should get overflow and underflow for 32 bit integer value', function (done) {
        testClient.intModel.getOverflowInt32(function (error, result) {
          should.not.exist(error);
          result.should.equal(2147483656);
          testClient.intModel.getUnderflowInt32(function (error, result) {
            should.not.exist(error);
            result.should.equal(-2147483656);
            done();
          });
        });
      });

      it('should get overflow and underflow for 64 bit integer value', function (done) {
        testClient.intModel.getOverflowInt64(function (error, result) {
          should.not.exist(error);
          result.should.equal(9223372036854775910);
          testClient.intModel.getUnderflowInt64(function (error, result) {
            should.not.exist(error);
            result.should.equal(-9223372036854775910);
            done();
          });
        });
      });

      it('should put and get UnixTime date correctly', function (done) {
        var d = new Date('2016-04-13T00:00:00.000Z');
        testClient.intModel.putUnixTimeDate(d, function (error, result) {
          should.not.exist(error);
          testClient.intModel.getUnixTime(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, d);
            done();
          });
        });
      });

      it('should throw an error for invalid UnixTime date anf get null value for UnixTime', function (done) {
        testClient.intModel.getInvalidUnixTime(function (error, result) {
          should.exist(error);
          testClient.intModel.getNullUnixTime(function (error, result) {
            should.not.exist(error);
            should.not.exist(result);
            done();
          });
        });
      });
    });

    describe('CompositeBoolInt Client', function () {
      var testClient = new CompositeBoolInt(baseUri, clientOptions);
      it('should get valid boolean values', function (done) {
        testClient.bool.getTrue(function (error, result) {
          should.not.exist(error);
          result.should.equal(true);
          testClient.bool.getFalse(function (error, result) {
            should.not.exist(error);
            result.should.equal(false);
            done();
          });
        });
      });

      it('should put valid boolean values', function (done) {
        testClient.bool.putTrue(true, function (error, result) {
          should.not.exist(error);
          testClient.bool.putFalse(false, function (error, result) {
            should.not.exist(error);
            done();
          });
        });
      });

      it('should get null and invalid boolean value', function (done) {
        testClient.bool.getNull(function (error, result) {
          should.not.exist(result);
          testClient.bool.getInvalid(function (error, result) {
            should.exist(error);
            should.not.exist(result);
            done();
          });
        });
      });

      it('should put max value for 32 and 64 bit Integers', function (done) {
        testClient.intModel.putMax32((Math.pow(2, 32 - 1) - 1), function (error, result) {
          should.not.exist(error);
          testClient.intModel.putMax64(9223372036854776000, function (error, result) {
            should.not.exist(error);
            done();
          });
        });
      });

      it('should put min value for 32 and 64 bit Integers', function (done) {
        testClient.intModel.putMin32(-Math.pow(2, 32 - 1), function (error, result) {
          should.not.exist(error);
          testClient.intModel.putMin64(-9223372036854776000, function (error, result) {
            should.not.exist(error);
            done();
          });
        });
      });

      it('should get null and invalid integer value', function (done) {
        testClient.intModel.getNull(function (error, result) {
          should.not.exist(result);
          testClient.intModel.getInvalid(function (error, result) {
            should.exist(error);
            should.not.exist(result);
            done();
          });
        });
      });

      it('should get overflow and underflow for 32 bit integer value', function (done) {
        testClient.intModel.getOverflowInt32(function (error, result) {
          should.not.exist(error);
          result.should.equal(2147483656);
          testClient.intModel.getUnderflowInt32(function (error, result) {
            should.not.exist(error);
            result.should.equal(-2147483656);
            done();
          });
        });
      });

      it('should get overflow and underflow for 64 bit integer value', function (done) {
        testClient.intModel.getOverflowInt64(function (error, result) {
          should.not.exist(error);
          result.should.equal(9223372036854775910);
          testClient.intModel.getUnderflowInt64(function (error, result) {
            should.not.exist(error);
            result.should.equal(-9223372036854775910);
            done();
          });
        });
      });
    });

    describe('Number Client', function () {
      var testClient = new AutoRestNumberTestService(baseUri, clientOptions);
      it('should put big float and double values', function (done) {
        testClient.number.putBigFloat(3.402823e+20, function (error, result) {
          should.not.exist(error);
          testClient.number.putBigDouble(2.5976931e+101, function (error, result) {
            should.not.exist(error);
            done();
          });
        });
      });

      it('should get big float and double value', function (done) {
        testClient.number.getBigFloat(function (error, result) {
          should.not.exist(error);
          result.should.equal(3.402823e+20);
          testClient.number.getBigDouble(function (error, result) {
            should.not.exist(error);
            result.should.equal(2.5976931e+101);
            done();
          });
        });
      });

      it('should put small float and double values', function (done) {
        testClient.number.putSmallFloat(3.402823e-20, function (error, result) {
          should.not.exist(error);
          testClient.number.putSmallDouble(2.5976931e-101, function (error, result) {
            should.not.exist(error);
            done();
          });
        });
      });

      it('should get small float and double value', function (done) {
        testClient.number.getSmallFloat(function (error, result) {
          should.not.exist(error);
          result.should.equal(3.402823e-20);
          testClient.number.getSmallDouble(function (error, result) {
            should.not.exist(error);
            result.should.equal(2.5976931e-101);
            done();
          });
        });
      });

      it('should put big positive and negative double value', function (done) {
        testClient.number.putBigDoublePositiveDecimal(99999999.99, function (error, result) {
          should.not.exist(error);
          testClient.number.putBigDoubleNegativeDecimal(-99999999.99, function (error, result) {
            should.not.exist(error);
            done();
          });
        });
      });

      it('should get big positive and negative double value', function (done) {
        testClient.number.getBigDoublePositiveDecimal(function (error, result) {
          should.not.exist(error);
          result.should.equal(99999999.99);
          testClient.number.getBigDoubleNegativeDecimal(function (error, result) {
            should.not.exist(error);
            result.should.equal(-99999999.99);
            done();
          });
        });
      });

      it('should get null and invalid float and double values', function (done) {
        testClient.number.getNull(function (error, result) {
          should.not.exist(result);
          testClient.number.getInvalidFloat(function (error, result) {
            should.exist(error);
            should.not.exist(result);
            testClient.number.getInvalidDouble(function (error, result) {
              should.exist(error);
              should.not.exist(result);
              done();
            });
          });
        });
      });
    });

    describe('String Client', function () {
      var testClient = new AutoRestSwaggerBATService(baseUri, clientOptions);
      it('should support valid null value', function (done) {
        testClient.string.getNull(function (error, result) {
          should.not.exist(result);
          testClient.string.putNull({ stringBody: AutoRestSwaggerBATServiceModels.StringBody.Null }, function (error, result) {
            should.not.exist(error);
            done();
          });
        });
      });

      it('should support valid empty string value', function (done) {
        testClient.string.putEmpty(AutoRestSwaggerBATServiceModels.StringBody1.EmptyString, function (error, result) {
          should.not.exist(error);
          testClient.string.getEmpty(function (error, result) {
            result.should.equal('');
            done();
          });
        });
      });

      it('should support valid MBC string value', function (done) {
        testClient.string.putMbcs(AutoRestSwaggerBATServiceModels.StringBody2.啊齄丂狛狜隣郎隣兀﨩ˊーぁんァヶΑАЯаяāɡㄅㄩɑɡ䜣, function (error, result) {
          should.not.exist(error);
          testClient.string.getMbcs(function (error, result) {
            result.should.equal(AutoRestSwaggerBATServiceModels.GetMbcsOKResponse.啊齄丂狛狜隣郎隣兀﨩ˊーぁんァヶΑАЯаяāɡㄅㄩɑɡ䜣);
            done();
          });
        });
      });

      it('should support whitespace string value', function (done) {
        testClient.string.putWhitespace(AutoRestSwaggerBATServiceModels.StringBody3.Nowisthetimeforallgoodmentocometotheaidoftheircountry, function (error, result) {
          should.not.exist(error);
          testClient.string.getWhitespace(function (error, result) {
            result.should.equal(AutoRestSwaggerBATServiceModels.GetWhitespaceOKResponse.Nowisthetimeforallgoodmentocometotheaidoftheircountry);
            done();
          });
        });
      });

      it('should support not provided value', function (done) {
        testClient.string.getNotProvided(function (error, result) {
          should.not.exist(error);
          should.not.exist(result);
          done();
        });
      });

      it('should support valid enum valid value', function (done) {
        testClient.enumModel.getNotExpandable(function (error, result) {
          should.not.exist(error);
          result.should.equal(AutoRestSwaggerBATServiceModels.Colors.Redcolor);
          testClient.enumModel.putNotExpandable(AutoRestSwaggerBATServiceModels.Colors.Redcolor, function (error, result) {
            should.not.exist(error);
            done();
          });
        });
      });

      it('should correctly handle invalid values for enum', function (done) {
        testClient.enumModel.putNotExpandable(<AutoRestSwaggerBATServiceModels.Colors>'orange color', function (error, result) {
          should.exist(error);
          error.message.should.match(/.*is not a valid value.*/ig);
          done();
        });
      });

      it('should correctly deserialize base64 encoded string', function (done) {
        testClient.string.getBase64Encoded(function (error, result) {
          should.not.exist(error);
          should.exist(result);

          const expected = 'a string that gets encoded with base64';
          if (msRest.isNode) {
            (result as Buffer).toString("utf8").should.equal(expected);
          } else {
            new TextDecoder("utf8").decode(result).should.equal(expected);
          }
          done();
        });
      });

      it('should correctly handle null base64url encoded string', function (done) {
        testClient.string.getNullBase64UrlEncoded(function (error, result) {
          should.not.exist(error);
          should.not.exist(result);
          done();
        });
      });

      it('should correctly serialize and deserialize base64url encoded string', function (done) {
        testClient.string.getBase64UrlEncoded(function (error, result) {
          should.not.exist(error);
          should.exist(result);

          const decodedString = 'a string that gets encoded with base64url';
          if (msRest.isNode) {
            (result as Buffer).toString("utf8").should.equal(decodedString);
          } else {
            new TextDecoder("utf8").decode(result).should.equal(decodedString);
          }

          testClient.string.putBase64UrlEncoded(stringToByteArray(decodedString), function (error, result) {
            should.not.exist(error);
            should.not.exist(result);
            done();
          });
        });
      });
    });

    describe('Byte Client', function () {
      var testClient = new AutoRestSwaggerBATByteService(baseUri, clientOptions);
      var bytes = new Uint8Array([255, 254, 253, 252, 251, 250, 249, 248, 247, 246]);
      it('should support valid null and empty value', function (done) {
        testClient.byteModel.getNull(function (error, result) {
          should.not.exist(result);
          should.not.exist(error);
          testClient.byteModel.getEmpty(function (error, result) {
            should.not.exist(error);
            result.should.be.instanceof(Uint8Array);
            result.length.should.equal(0);
            done();
          });
        });
      });

      //TODO Client does not consider the string as invalid byte
      it.skip('should get invalid byte value', function (done) {
        testClient.byteModel.getInvalid(function (error, result) {
          should.not.exist(error);
          // Output of Buffer.from(':::SWAGGER::::', 'base64')
          const expected = new Uint8Array([73, 96, 6, 24, 68]);
          result.length.should.equal(expected.length);
          for (let i = 0; i < result.length; i++) {
            console.log(result[i]);
            result[i].should.equal(expected[i]);
          }
          done();
        });
      });

      it('should support valid non Ascii byte values', function (done) {
        testClient.byteModel.putNonAscii(bytes, function (error, result) {
          should.not.exist(error);
          testClient.byteModel.getNonAscii(function (error, result) {
            should.not.exist(error);
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
      var testClient = new AutoRestDateTestService(baseUri, clientOptions);
      it('should get min and max date', function (done) {
        testClient.dateModel.getMinDate(function (error, result) {
          should.not.exist(error);
          should.exist(result);
          var date = result;
          date.getUTCFullYear().should.equal(1);
          date.getUTCMonth().should.equal(0);
          date.getUTCDate().should.equal(1);
          date.getUTCHours().should.equal(0);
          date.getUTCMinutes().should.equal(0);
          date.getUTCSeconds().should.equal(0);
          date.getUTCMilliseconds().should.equal(0);
          testClient.dateModel.getMaxDate(function (error, result) {
            should.not.exist(error);
            should.exist(result);
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
          should.not.exist(error);
          testClient.dateModel.getOverflowDate(function (error, result) {
            isNaN(result.valueOf()).should.equal(true);
            should.not.exist(error);
            done();
          });
        });
      });

      it('should properly handle null value for Date', function (done) {
        testClient.dateModel.getNull(function (error, result) {
          should.not.exist(result);
          should.not.exist(error);
          done();
        });
      });

      it('should properly handle invalid Date value', function (done) {
        testClient.dateModel.getInvalidDate(function (error, result) {
          isNaN(result.valueOf()).should.equal(true);
          should.not.exist(error);
          done();
        });
      });

      it('should put min and max date', function (done) {
        testClient.dateModel.putMinDate(new Date('0001-01-01'), function (error, result) {
          should.not.exist(error);
          should.not.exist(result);
          testClient.dateModel.putMaxDate(new Date('9999-12-31'), function (error, result) {
            should.not.exist(error);
            should.not.exist(result);
            done();
          });
        });
      });
    });

    describe('DateTime Client', function () {
      var testClient = new AutoRestDateTimeTestService(baseUri, clientOptions);
      it('should properly handle null value for DateTime', function (done) {
        testClient.datetime.getNull(function (error, result) {
          should.not.exist(result);
          should.not.exist(error);
          done();
        });
      });

      it('should properly handle invalid dateTime value', function (done) {
        testClient.datetime.getInvalid(function (error, result) {
          isNaN(result.valueOf()).should.equal(true);
          should.not.exist(error);
          done();
        });
      });

      it('should get uppercase and lowercase UTC max date time', function (done) {
        testClient.datetime.getUtcUppercaseMaxDateTime(function (error, result) {
          should.not.exist(error);
          should.exist(result);
          var date = result;
          date.getUTCFullYear().should.equal(9999);
          date.getUTCMonth().should.equal(11);
          date.getUTCDate().should.equal(31);
          date.getUTCHours().should.equal(23);
          date.getUTCMinutes().should.equal(59);
          date.getUTCSeconds().should.equal(59);
          date.getUTCMilliseconds().should.equal(999);
          testClient.datetime.getUtcLowercaseMaxDateTime(function (error, result) {
            should.not.exist(error);
            should.exist(result);
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

      it('should get UTC min dateTime value', function (done) {
        testClient.datetime.getUtcMinDateTime(function (error, result) {
          should.not.exist(error);
          should.exist(result);
          var date = result;
          date.getUTCFullYear().should.equal(1);
          date.getUTCMonth().should.equal(0);
          date.getUTCDate().should.equal(1);
          date.getUTCHours().should.equal(0);
          date.getUTCMinutes().should.equal(0);
          date.getUTCSeconds().should.equal(0);
          date.getUTCMilliseconds().should.equal(0);
          done();
        });
      });

      it('should get local negative and positive offset Min DateTime value', function (done) {
        testClient.datetime.getLocalNegativeOffsetMinDateTime(function (error, result) {
          should.not.exist(error);
          should.exist(result);
          var date = result;
          date.getUTCFullYear().should.equal(1);
          date.getUTCMonth().should.equal(0);
          date.getUTCDate().should.equal(1);
          date.getUTCHours().should.equal(14);
          date.getUTCMinutes().should.equal(0);
          date.getUTCSeconds().should.equal(0);
          date.getUTCMilliseconds().should.equal(0);
          testClient.datetime.getLocalPositiveOffsetMinDateTime(function (error, result) {
            should.not.exist(error);
            should.exist(result);
            var date = result;
            date.getUTCFullYear().should.equal(0);
            date.getUTCMonth().should.equal(11);
            date.getUTCDate().should.equal(31);
            date.getUTCHours().should.equal(10);
            date.getUTCMinutes().should.equal(0);
            date.getUTCSeconds().should.equal(0);
            date.getUTCMilliseconds().should.equal(0);
            done();
          });
        });
      });

      it('should get local negative offset lowercase and uppercase Max DateTime', function (done) {
        testClient.datetime.getLocalNegativeOffsetLowercaseMaxDateTime(function (error, result) {
          should.not.exist(error);
          should.exist(result);
          assert.deepEqual(result, new Date('9999-12-31t23:59:59.9999999-14:00'));
          var date = result;
          date.getUTCFullYear().should.equal(10000);
          date.getUTCMonth().should.equal(0);
          date.getUTCDate().should.equal(1);
          date.getUTCHours().should.equal(13);
          date.getUTCMinutes().should.equal(59);
          date.getUTCSeconds().should.equal(59);
          date.getUTCMilliseconds().should.equal(999);
          testClient.datetime.getLocalNegativeOffsetUppercaseMaxDateTime(function (error, result) {
            should.not.exist(error);
            should.exist(result);
            assert.deepEqual(result, new Date('9999-12-31T23:59:59.9999999-14:00'));
            var date = result;
            date.getUTCFullYear().should.equal(10000);
            date.getUTCMonth().should.equal(0);
            date.getUTCDate().should.equal(1);
            date.getUTCHours().should.equal(13);
            date.getUTCMinutes().should.equal(59);
            date.getUTCSeconds().should.equal(59);
            date.getUTCMilliseconds().should.equal(999);
            done();
          });
        });
      });

      it('should get local positive offset lowercase and uppercase Max DateTime', function (done) {
        testClient.datetime.getLocalPositiveOffsetLowercaseMaxDateTime(function (error, result) {
          should.not.exist(error);
          should.exist(result);
          assert.deepEqual(result, new Date('9999-12-31t23:59:59.9999999+14:00'));
          var date = result;
          date.getUTCFullYear().should.equal(9999);
          date.getUTCMonth().should.equal(11);
          date.getUTCDate().should.equal(31);
          date.getUTCHours().should.equal(9);
          date.getUTCMinutes().should.equal(59);
          date.getUTCSeconds().should.equal(59);
          date.getUTCMilliseconds().should.equal(999);
          testClient.datetime.getLocalPositiveOffsetUppercaseMaxDateTime(function (error, result) {
            should.not.exist(error);
            should.exist(result);
            assert.deepEqual(result, new Date('9999-12-31T23:59:59.9999999+14:00'));
            var date = result;
            date.getUTCFullYear().should.equal(9999);
            date.getUTCMonth().should.equal(11);
            date.getUTCDate().should.equal(31);
            date.getUTCHours().should.equal(9);
            date.getUTCMinutes().should.equal(59);
            date.getUTCSeconds().should.equal(59);
            date.getUTCMilliseconds().should.equal(999);
            done();
          });
        });
      });

      it('should get overflow and underflow', function (done) {
        testClient.datetime.getOverflow(function (error, result) {
          should.not.exist(error);
          should.exist(result);
          var date = result;
          date.getUTCFullYear().should.equal(10000);
          date.getUTCMonth().should.equal(0);
          date.getUTCDate().should.equal(1);
          date.getUTCHours().should.equal(13);
          date.getUTCMinutes().should.equal(59);
          date.getUTCSeconds().should.equal(59);
          date.getUTCMilliseconds().should.equal(999);
          testClient.datetime.getUnderflow(function (error, result) {
            isNaN(result.valueOf()).should.equal(true);
            should.not.exist(error);
            done();
          });
        });
      });

      it('should put UTC min and max date time', function (done) {
        testClient.datetime.putUtcMinDateTime('0001-01-01T00:00:00Z', function (error, result) {
          should.not.exist(error);
          should.not.exist(result);
          testClient.datetime.putUtcMaxDateTime('9999-12-31T23:59:59.9999999Z', function (error, result) {
            should.not.exist(error);
            should.not.exist(result);
            done();
          });
        });
      });

      it('should put local negative and positive offset min DateTime', function (done) {
        testClient.datetime.putLocalNegativeOffsetMinDateTime('0001-01-01T00:00:00-14:00', function (error, result) {
          should.not.exist(error);
          should.not.exist(result);
          testClient.datetime.putLocalPositiveOffsetMinDateTime('0001-01-01T00:00:00+14:00', function (error, result) {
            should.not.exist(error);
            should.not.exist(result);
            done();
          });
        });
      });

      it('should put local negative offset max DateTime', function (done) {
        testClient.datetime.putLocalNegativeOffsetMaxDateTime('9999-12-31T23:59:59.9999999-14:00', function (error, result) {
          should.not.exist(error);
          should.not.exist(result);
          done();
        });
      });

      it('should put local positive offset max Date', function (done) {
        testClient.datetime.putLocalPositiveOffsetMaxDateTime('9999-12-31t23:59:59.9999999+14:00', function (error, result) {
          should.not.exist(error);
          should.not.exist(result);
          done();
        });
      });
    });

    describe('DateTimeRfc1123 Client', function () {
      var testClient = new AutoRestRFC1123DateTimeTestService(baseUri, clientOptions);
      it('should properly handle null value for DateTimeRfc1123', function (done) {
        testClient.datetimerfc1123.getNull(function (error, result) {
          should.not.exist(result);
          should.not.exist(error);
          done();
        });
      });

      it('should properly handle invalid dateTimeRfc1123 value', function (done) {
        testClient.datetimerfc1123.getInvalid(function (error, result) {
          isNaN(result.valueOf()).should.equal(true);
          should.not.exist(error);
          done();
        });
      });

      it('should get uppercase and lowercase UTC max date time dateTimeRfc1123', function (done) {
        testClient.datetimerfc1123.getUtcUppercaseMaxDateTime(function (error, result) {
          should.not.exist(error);
          should.exist(result);
          var date = result;
          date.getUTCFullYear().should.equal(9999);
          date.getUTCMonth().should.equal(11);
          date.getUTCDate().should.equal(31);
          date.getUTCHours().should.equal(23);
          date.getUTCMinutes().should.equal(59);
          date.getUTCSeconds().should.equal(59);
          testClient.datetimerfc1123.getUtcLowercaseMaxDateTime(function (error, result) {
            should.not.exist(error);
            should.exist(result);
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
          should.not.exist(error);
          should.exist(result);
          // Parsing the minimum date 'Mon, 01 Jan 0001 00:00:00 GMT' doesn't
          // work properly in nodejs, so we'll just test that the result exists
          done();
        });
      });

      it('should get overflow and underflow', function (done) {
        testClient.datetimerfc1123.getOverflow(function (error, result) {
          should.not.exist(error);
          should.exist(result);
          var date = result;
          date.getUTCFullYear().should.equal(10000);
          date.getUTCMonth().should.equal(0);
          date.getUTCDate().should.equal(1);
          date.getUTCHours().should.equal(0);
          date.getUTCMinutes().should.equal(0);
          date.getUTCSeconds().should.equal(0);
          testClient.datetimerfc1123.getUnderflow(function (error, result) {
            isNaN(result.valueOf()).should.equal(true);
            should.not.exist(error);
            done();
          });
        });
      });

      it('should put UTC min and max dateTimeRfc1123', function (done) {
        testClient.datetimerfc1123.putUtcMinDateTime(new Date('Mon, 01 Jan 0001 00:00:00 GMT'), function (error, result) {
          should.not.exist(error);
          should.not.exist(result);
          testClient.datetimerfc1123.putUtcMaxDateTime(new Date('Fri, 31 Dec 9999 23:59:59 GMT'), function (error, result) {
            should.not.exist(error);
            should.not.exist(result);
            done();
          });
        });
      });
    });

    describe('Duration Client', function () {
      var testClient = new AutoRestDurationTestService(baseUri, clientOptions);
      it('should properly handle null value for Duration', function (done) {
        testClient.duration.getNull(function (error, result) {
          should.not.exist(result);
          should.not.exist(error);
          done();
        });
      });

      it.skip('should properly handle invalid value for Duration', function (done) {
        testClient.duration.getInvalid(function (error, result) {
          should.exist(error);
          done();
        });
      });

      it('should properly handle positive value for Duration', function (done) {
        testClient.duration.getPositiveDuration(function (error, result) {
          should.exist(result);
          should.not.exist(error);
          should.equal(result, 'P3Y6M4DT12H30M5S');
          done();
        });
      });

      it('should properly put positive value for Duration', function (done) {
        var duration = 'P123DT22H14M12.011S';
        testClient.duration.putPositiveDuration(duration, function (error, result) {
          should.not.exist(error);
          should.not.exist(result);
          done();
        });
      });
    });

    describe('Array Client', function () {

      describe('for primitive types', function () {
        var testClient = new AutoRestSwaggerBATArrayService(baseUri, clientOptions);
        it('should get and put empty arrays', function (done) {
          testClient.arrayModel.getEmpty(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, []);
            testClient.arrayModel.putEmpty([], function (error, result) {
              should.not.exist(error);
              done();
            });
          });
        });

        it('should handle null and invalid value for arrays', function (done) {
          testClient.arrayModel.getNull(function (error, result) {
            should.not.exist(error);
            assert.equal(result, null);
            testClient.arrayModel.getInvalid(function (error, result) {
              should.exist(error);
              should.not.exist(result);
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
            should.not.exist(error);
            should.exist(result);
            assert.deepEqual(result, arr);
            done();
          });
        });

        it('should get and put boolean arrays', function (done) {
          var boolArray = [true, false, false, true];
          testClient.arrayModel.getBooleanTfft(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, boolArray);
            testClient.arrayModel.putBooleanTfft(boolArray, function (error, result) {
              should.not.exist(error);
              testClient.arrayModel.getBooleanInvalidNull(function (error, result) {
                should.not.exist(error);
                assert.deepEqual(result, [true, null, false]);
                testClient.arrayModel.getBooleanInvalidString(function (error, result) {
                  should.not.exist(error);
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
            should.not.exist(error);
            assert.deepEqual(result, testArray);
            testClient.arrayModel.putIntegerValid(testArray, function (error, result) {
              should.not.exist(error);
              testClient.arrayModel.getIntInvalidNull(function (error, result) {
                should.not.exist(error);
                testClient.arrayModel.getIntInvalidString(function (error, result) {
                  should.not.exist(error);
                  done();
                });
              });
            });
          });
        });

        it('should get and put long arrays', function (done) {
          var testArray = [1, -1, 3, 300];
          testClient.arrayModel.getLongValid(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, testArray);
            testClient.arrayModel.putLongValid(testArray, function (error, result) {
              should.not.exist(error);
              testClient.arrayModel.getLongInvalidNull(function (error, result) {
                should.not.exist(error);
                testClient.arrayModel.getLongInvalidString(function (error, result) {
                  should.not.exist(error);
                  done();
                });
              });
            });
          });
        });

        it('should get and put float arrays', function (done) {
          var testArray = [0, -0.01, -1.2e20];
          testClient.arrayModel.getFloatValid(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, testArray);
            testClient.arrayModel.putFloatValid(testArray, function (error, result) {
              should.not.exist(error);
              testClient.arrayModel.getFloatInvalidNull(function (error, result) {
                should.not.exist(error);
                testClient.arrayModel.getFloatInvalidString(function (error, result) {
                  should.not.exist(error);
                  done();
                });
              });
            });
          });
        });

        it('should get and put double arrays', function (done) {
          var testArray = [0, -0.01, -1.2e20];
          testClient.arrayModel.getDoubleValid(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, testArray);
            testClient.arrayModel.putDoubleValid(testArray, function (error, result) {
              should.not.exist(error);
              testClient.arrayModel.getDoubleInvalidNull(function (error, result) {
                should.not.exist(error);
                testClient.arrayModel.getDoubleInvalidString(function (error, result) {
                  should.not.exist(error);
                  done();
                });
              });
            });
          });
        });

        it('should get and put string arrays', function (done) {
          var testArray = ['foo1', 'foo2', 'foo3'];
          testClient.arrayModel.getStringValid(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, testArray);
            testClient.arrayModel.putStringValid(testArray, function (error, result) {
              should.not.exist(error);
              testClient.arrayModel.getStringWithNull(function (error, result) {
                should.not.exist(error);
                testClient.arrayModel.getStringWithInvalid(function (error, result) {
                  should.not.exist(error);
                  done();
                });
              });
            });
          });
        });

        it('should get and put enum arrays', async function () {
          const testArray = [FooEnum.Foo1, FooEnum.Foo2, FooEnum.Foo3];
          const result = await testClient.arrayModel.getEnumValid();
          assert.deepEqual(result, testArray);
          await testClient.arrayModel.putEnumValid(testArray);
        });

        it('should get and put string enum arrays', async function () {
          const testArray = ["foo1", "foo2", "foo3"];
          const result = await testClient.arrayModel.getStringEnumValid();
          assert.deepEqual(result, testArray);
          await testClient.arrayModel.putStringEnumValid(testArray);
        });

        it('should get and put uuid arrays', function (done) {
          var testArray = ["6dcc7237-45fe-45c4-8a6b-3a8a3f625652", "d1399005-30f7-40d6-8da6-dd7c89ad34db", "f42f6aa1-a5bc-4ddf-907e-5f915de43205"];
          testClient.arrayModel.getUuidValid(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, testArray);
            testClient.arrayModel.putUuidValid(testArray, function (error, result) {
              should.not.exist(error);
              testClient.arrayModel.getUuidInvalidChars(function (error, result) {
                should.not.exist(error);
                done();
              });
            });
          });
        });

        it('should get and put date arrays', function (done) {
          var testArray = [new Date('2000-12-01'), new Date('1980-01-02'), new Date('1492-10-12')];
          testClient.arrayModel.getDateValid(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, testArray);
            testClient.arrayModel.putDateValid(testArray, function (error, result) {
              should.not.exist(error);
              testClient.arrayModel.getDateInvalidNull(function (error, result) {
                should.not.exist(error);
                assert.deepEqual(result, [new Date('2012-01-01'), null, new Date('1776-07-04')]);
                testClient.arrayModel.getDateInvalidChars(function (error, result) {
                  should.not.exist(error);
                  JSON.stringify(result).should.equal(JSON.stringify([new Date('2011-03-22'), new Date('date')]));
                  done();
                });
              });
            });
          });
        });

        it('should get and put dateTime arrays', function (done) {
          var testArray = [new Date('2000-12-01t00:00:01z'), new Date('1980-01-02T01:11:35+01:00'), new Date('1492-10-12T02:15:01-08:00')];
          testClient.arrayModel.getDateTimeValid(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, testArray);
            testClient.arrayModel.putDateTimeValid(testArray, function (error, result) {
              should.not.exist(error);
              testClient.arrayModel.getDateTimeInvalidNull(function (error, result) {
                should.not.exist(error);
                assert.deepEqual(result, [new Date('2000-12-01t00:00:01z'), null]);
                testClient.arrayModel.getDateTimeInvalidChars(function (error, result) {
                  should.not.exist(error);
                  JSON.stringify(result).should.equal(JSON.stringify([new Date('2000-12-01t00:00:01z'), new Date('date-time')]));
                  done();
                });
              });
            });
          });
        });

        it('should get and put dateTimeRfc1123 arrays', function (done) {
          var testArray = [new Date('Fri, 01 Dec 2000 00:00:01 GMT'), new Date('Wed, 02 Jan 1980 00:11:35 GMT'), new Date('Wed, 12 Oct 1492 10:15:01 GMT')];
          testClient.arrayModel.getDateTimeRfc1123Valid(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, testArray);
            testClient.arrayModel.putDateTimeRfc1123Valid(testArray, function (error, result) {
              should.not.exist(error);
              done();
            });
          });
        });

        it('should get and put duration arrays', function (done) {
          var testArray = ['P123DT22H14M12.011S', 'P5DT1H'];
          testClient.arrayModel.getDurationValid(function (error, result) {
            should.not.exist(error);
            assert.deepStrictEqual(result, ['P123DT22H14M12.011S', 'P5DT1H0M0S']);
            testClient.arrayModel.putDurationValid(testArray, function (error, result) {
              should.not.exist(error);
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
            should.not.exist(error);

            result.length.should.equal(testArray.length);
            for (let i = 0; i < testArray.length; i++) {
              for (let j = 0; j < testArray[i].length; j++) {
                result[i].length.should.equal(testArray[i].length);
                result[i][j].should.equal(testArray[i][j]);
              }
            }

            testClient.arrayModel.putByteValid(testArray, function (error, result) {
              should.not.exist(error);
              done();
            });
          });
        });

        it('should get byte arrays with null values', function (done) {
          testClient.arrayModel.getByteInvalidNull(function (error, result) {
            should.not.exist(error);
            should.exist(result);

            result.length.should.equal(2);
            result[0].length.should.equal(3);
            result[0][0].should.equal(171);
            result[0][1].should.equal(172);
            result[0][2].should.equal(173);
            should(result[1]).be.null;

            done();
          });
        });
      });

      describe('for complex types', function () {
        var testClient = new AutoRestSwaggerBATArrayService(baseUri, clientOptions);
        it('should get null and empty complex types in array', function (done) {
          testClient.arrayModel.getComplexEmpty(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, []);
            testClient.arrayModel.getComplexNull(function (error, result) {
              should.not.exist(error);
              assert.equal(result, null);
              done();
            });
          });
        });

        it('should get complex items with empty and null values in array', function (done) {
          var testNull = [{ 'integer': 1, 'string': '2' }, null, { 'integer': 5, 'string': '6' }];
          var testEmpty = [{ 'integer': 1, 'string': '2' }, {}, { 'integer': 5, 'string': '6' }];
          testClient.arrayModel.getComplexItemNull(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, testNull);
            testClient.arrayModel.getComplexItemEmpty(function (error, result) {
              should.not.exist(error);
              JSON.stringify(result).should.equal(JSON.stringify(testEmpty));
              done();
            });
          });
        });

        it('should get and put valid complex items in arrays', function (done) {
          var testArray = [{ 'integer': 1, 'string': '2' }, { 'integer': 3, 'string': '4' }, { 'integer': 5, 'string': '6' }];
          testClient.arrayModel.getComplexValid(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, testArray);
            testClient.arrayModel.putComplexValid(testArray, function (error, result) {
              should.not.exist(error);
              done();
            });
          });
        });
      });

      describe('for array of arrays', function () {
        var testClient = new AutoRestSwaggerBATArrayService(baseUri, clientOptions);
        it('should get null and empty array in an array', function (done) {
          testClient.arrayModel.getArrayNull(function (error, result) {
            should.not.exist(error);
            assert.equal(result, null);
            testClient.arrayModel.getArrayEmpty(function (error, result) {
              should.not.exist(error);
              assert.deepEqual(result, []);
              done();
            });
          });
        });

        it('should get arrays with empty and null items in an array', function (done) {
          var testNull = [['1', '2', '3'], null, ['7', '8', '9']];
          var testEmpty = [['1', '2', '3'], [], ['7', '8', '9']];
          testClient.arrayModel.getArrayItemNull(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, testNull);
            testClient.arrayModel.getArrayItemEmpty(function (error, result) {
              should.not.exist(error);
              assert.deepEqual(result, testEmpty);
              done();
            });
          });
        });

        it('should get and put valid array items in an array', function (done) {
          var testArray = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];
          testClient.arrayModel.getArrayValid(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, testArray);
            testClient.arrayModel.putArrayValid(testArray, function (error, result) {
              should.not.exist(error);
              done();
            });
          });
        });
      });

      describe('for array of dictionaries', function () {
        var testClient = new AutoRestSwaggerBATArrayService(baseUri, clientOptions);
        it('should get null and empty dictionary in an array', function (done) {
          testClient.arrayModel.getDictionaryNull(function (error, result) {
            should.not.exist(error);
            assert.equal(result, null);
            testClient.arrayModel.getDictionaryEmpty(function (error, result) {
              should.not.exist(error);
              assert.deepEqual(result, []);
              done();
            });
          });
        });

        it('should get array of dictionaries with empty and null items in an array', function (done) {
          var testNull = [{ '1': 'one', '2': 'two', '3': 'three' }, null, { '7': 'seven', '8': 'eight', '9': 'nine' }];
          var testEmpty = [{ '1': 'one', '2': 'two', '3': 'three' }, {}, { '7': 'seven', '8': 'eight', '9': 'nine' }];
          testClient.arrayModel.getDictionaryItemNull(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, testNull);
            testClient.arrayModel.getDictionaryItemEmpty(function (error, result) {
              should.not.exist(error);
              assert.deepEqual(result, testEmpty);
              done();
            });
          });
        });

        it('should get and put valid dicitonary items in arrays', function (done) {
          var testArray: { [propertyName: string]: string }[] =
            [{ '1': 'one', '2': 'two', '3': 'three' }, { '4': 'four', '5': 'five', '6': 'six' }, { '7': 'seven', '8': 'eight', '9': 'nine' }];
          testClient.arrayModel.getDictionaryValid(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, testArray);
            testClient.arrayModel.putDictionaryValid(testArray, function (error, result) {
              should.not.exist(error);
              done();
            });
          });
        });
      });
    });

    describe('Dictionary Client', function () {

      describe('for primitive types', function () {
        var testClient = new AutoRestSwaggerBATdictionaryService(baseUri, clientOptions);
        it('should get and put empty dictionaries', function (done) {
          testClient.dictionary.getEmpty(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, {});
            testClient.dictionary.putEmpty({}, function (error, result) {
              should.not.exist(error);
              done();
            });
          });
        });

        it('should handle null and invalid value for dictionaries', function (done) {
          testClient.dictionary.getNull(function (error, result) {
            should.not.exist(error);
            assert.equal(result, null);
            testClient.dictionary.getInvalid(function (error, result) {
              should.exist(error);
              should.not.exist(result);
              done();
            });
          });
        });

        it('should handle null value, null key and empty key for dictionaries', function (done) {
          testClient.dictionary.getNullValue(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, { "key1": null });
            testClient.dictionary.getNullKey(function (error, result) {
              should.exist(error);
              testClient.dictionary.getEmptyStringKey(function (error, result) {
                should.not.exist(error);
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
            should.not.exist(error);
            assert.deepEqual(result, dict);
            done();
          });
        });

        it('should get and put boolean dictionaries', function (done) {
          var boolDictionary: { [propertyName: string]: boolean } = { "0": true, "1": false, "2": false, "3": true };
          testClient.dictionary.getBooleanTfft(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, boolDictionary);
            testClient.dictionary.putBooleanTfft(boolDictionary, function (error, result) {
              should.not.exist(error);
              done();
            });
          });
        });

        it('should get boolean dictionaries with null value', function (done) {
          var boolDictionary: { [propertyName: string]: boolean } = { "0": true, "1": null, "2": false };
          testClient.dictionary.getBooleanInvalidNull(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, boolDictionary);
            done();
          });
        });

        it('should get boolean dictionaries with string value', function (done) {
          var boolDictionary = { "0": true, "1": "boolean", "2": false };
          testClient.dictionary.getBooleanInvalidString(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, boolDictionary);
            done();
          });
        });

        it('should get and put integer dictionaries', function (done) {
          var testDictionary: { [propertyName: string]: number } = { "0": 1, "1": -1, "2": 3, "3": 300 };
          testClient.dictionary.getIntegerValid(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, testDictionary);
            testClient.dictionary.putIntegerValid(testDictionary, function (error, result) {
              should.not.exist(error);
              done();
            });
          });
        });

        it('should get integer dictionaries with null value', function (done) {
          var testDictionary: { [propertyName: string]: number } = { "0": 1, "1": null, "2": 0 };
          testClient.dictionary.getIntInvalidNull(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, testDictionary);
            done();
          });
        });

        it('should get integer dictionaries with string value', function (done) {
          var testDictionary = { "0": 1, "1": "integer", "2": 0 };
          testClient.dictionary.getIntInvalidString(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, testDictionary);
            done();
          });
        });

        it('should get and put long dictionaries', function (done) {
          var testDictionary: { [propertyName: string]: number } = { "0": 1, "1": -1, "2": 3, "3": 300 };
          testClient.dictionary.getLongValid(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, testDictionary);
            testClient.dictionary.putLongValid(testDictionary, function (error, result) {
              should.not.exist(error);
              done();
            });
          });
        });

        it('should get long dictionaries with null value', function (done) {
          var testDictionary: { [propertyName: string]: number } = { "0": 1, "1": null, "2": 0 };
          testClient.dictionary.getLongInvalidNull(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, testDictionary);
            done();
          });
        });

        it('should get long dictionaries with string value', function (done) {
          var testDictionary = { "0": 1, "1": "integer", "2": 0 };
          testClient.dictionary.getLongInvalidString(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, testDictionary);
            done();
          });
        });

        it('should get and put float dictionaries', function (done) {
          var testDictionary: { [propertyName: string]: number } = { "0": 0, "1": -0.01, "2": -1.2e20 };
          testClient.dictionary.getFloatValid(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, testDictionary);
            testClient.dictionary.putFloatValid(testDictionary, function (error, result) {
              should.not.exist(error);
              done();
            });
          });
        });

        it('should get float dictionaries with null value', function (done) {
          var testDictionary: { [propertyName: string]: number } = { "0": 0.0, "1": null, "2": -1.2e20 };
          testClient.dictionary.getFloatInvalidNull(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, testDictionary);
            done();
          });
        });

        it('should get float dictionaries with string value', function (done) {
          var testDictionary = { "0": 1, "1": "number", "2": 0 };
          testClient.dictionary.getFloatInvalidString(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, testDictionary);
            done();
          });
        });

        it('should get and put double dictionaries', function (done) {
          var testDictionary: { [propertyName: string]: number } = { "0": 0, "1": -0.01, "2": -1.2e20 };
          testClient.dictionary.getDoubleValid(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, testDictionary);
            testClient.dictionary.putDoubleValid(testDictionary, function (error, result) {
              should.not.exist(error);
              done();
            });
          });
        });

        it('should get double dictionaries with null value', function (done) {
          var testDictionary: { [propertyName: string]: number } = { "0": 0.0, "1": null, "2": -1.2e20 };
          testClient.dictionary.getDoubleInvalidNull(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, testDictionary);
            done();
          });
        });

        it('should get double dictionaries with string value', function (done) {
          var testDictionary = { "0": 1, "1": "number", "2": 0 };
          testClient.dictionary.getDoubleInvalidString(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, testDictionary);
            done();
          });
        });

        it('should get and put string dictionaries', function (done) {
          var testDictionary: { [propertyName: string]: string } = { "0": "foo1", "1": "foo2", "2": "foo3" };
          testClient.dictionary.getStringValid(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, testDictionary);
            testClient.dictionary.putStringValid(testDictionary, function (error, result) {
              should.not.exist(error);
              done();
            });
          });
        });

        it('should get string dictionaries with null value', function (done) {
          var testDictionary: { [propertyName: string]: string } = { "0": "foo", "1": null, "2": "foo2" };
          testClient.dictionary.getStringWithNull(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, testDictionary);
            done();
          });
        });

        it('should get string dictionaries with number as string value', function (done) {
          var testDictionary = { "0": "foo", "1": 123, "2": "foo2" };
          testClient.dictionary.getStringWithInvalid(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, testDictionary);
            done();
          });
        });

        it('should get and put date dictionaries', function (done) {
          var testDictionary: { [propertyName: string]: Date } = { 0: new Date('2000-12-01'), 1: new Date('1980-01-02'), 2: new Date('1492-10-12') };
          testClient.dictionary.getDateValid(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, testDictionary);
            testClient.dictionary.putDateValid(testDictionary, function (error, result) {
              should.not.exist(error);
              done();
            });
          });
        });

        it('should get date dictionaries with null value', function (done) {
          var testDictionary: { [propertyName: string]: Date } = { "0": new Date("2012-01-01"), "1": null, "2": new Date("1776-07-04") };
          testClient.dictionary.getDateInvalidNull(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, testDictionary);
            done();
          });
        });

        it('should get date dictionaries with string value', function (done) {
          var testDictionary: { [propertyName: string]: Date } = { "0": new Date("2011-03-22"), "1": new Date("date") };
          testClient.dictionary.getDateInvalidChars(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(util.inspect(result), util.inspect(testDictionary));
            done();
          });
        });

        it('should get and put dateTime dictionaries', function (done) {
          var getDictionary: { [propertyName: string]: Date } =
            { 0: new Date('2000-12-01t00:00:01z'), 1: new Date('1980-01-02T00:11:35+01:00'), 2: new Date('1492-10-12T10:15:01-08:00') };
          var putDictionary: { [propertyName: string]: Date } =
            { 0: new Date('2000-12-01T00:00:01Z'), 1: new Date('1980-01-01T23:11:35Z'), 2: new Date('1492-10-12T18:15:01Z') };
          testClient.dictionary.getDateTimeValid(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, getDictionary);
            testClient.dictionary.putDateTimeValid(putDictionary, function (error, result) {
              should.not.exist(error);
              done();
            });
          });
        });

        it('should get and put dateTimeRfc1123 dictionaries', function (done) {
          var dictionary: { [propertyName: string]: Date } =
            { 0: new Date('Fri, 01 Dec 2000 00:00:01 GMT'), 1: new Date('Wed, 02 Jan 1980 00:11:35 GMT'), 2: new Date('Wed, 12 Oct 1492 10:15:01 GMT') };
          testClient.dictionary.getDateTimeRfc1123Valid(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, dictionary);
            testClient.dictionary.putDateTimeRfc1123Valid(dictionary, function (error, result) {
              should.not.exist(error);
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
            should.not.exist(error);
            for (const key in dictionary) {
              assert.deepStrictEqual(result[key], dictionary[key]);
            }
            testClient.dictionary.putDurationValid(dictionary, function (error, result) {
              should.not.exist(error);
              done();
            });
          });
        });

        it('should get dateTime dictionaries with null value', function (done) {
          var testDictionary: { [propertyName: string]: Date } = { "0": new Date("2000-12-01t00:00:01z"), "1": null };
          testClient.dictionary.getDateTimeInvalidNull(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, testDictionary);
            done();
          });
        });

        it('should get dateTime dictionaries with string value', function (done) {
          var testDictionary: { [propertyName: string]: Date } = { "0": new Date("2000-12-01t00:00:01z"), "1": new Date("date-time") };
          testClient.dictionary.getDateTimeInvalidChars(function (error, result) {
            should.not.exist(error);
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
            should.not.exist(error);

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
              should.not.exist(error);
              done();
            });
          });
        });

        it('should get byte dictionaries with null values', function (done) {
          var testDictionary: { [propertyName: string]: Uint8Array } = { 0: new Uint8Array([171, 172, 173]), 1: null };
          testClient.dictionary.getByteInvalidNull(function (error, result) {
            should.not.exist(error);
            should.exist(result);

            result[0].length.should.equal(3);
            result[0][0].should.equal(171);
            result[0][1].should.equal(172);
            result[0][2].should.equal(173);
            should(result[1]).be.null;

            done();
          });
        });
      });

      describe('for complex types', function () {
        var testClient = new AutoRestSwaggerBATdictionaryService(baseUri, clientOptions);
        it('should get null and empty complex types in dictionary', function (done) {
          testClient.dictionary.getComplexEmpty(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, {});
            testClient.dictionary.getComplexNull(function (error, result) {
              should.not.exist(error);
              assert.equal(result, null);
              done();
            });
          });
        });

        it('should get complex items with empty and null values in dictionary', function (done) {
          var testNull: { [propertyName: string]: AutoRestSwaggerBATdictionaryServiceModels.Widget } = { 0: { 'integer': 1, 'string': '2' }, 1: null, 2: { 'integer': 5, 'string': '6' } };
          var testEmpty = { 0: { 'integer': 1, 'string': '2' }, 1: {}, 2: { 'integer': 5, 'string': '6' } };
          testClient.dictionary.getComplexItemNull(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, testNull);
            testClient.dictionary.getComplexItemEmpty(function (error, result) {
              should.not.exist(error);
              JSON.stringify(result).should.equal(JSON.stringify(testEmpty));
              done();
            });
          });
        });

        it('should get and put valid complex items in dictionaries', function (done) {
          var testDictionary: { [propertyName: string]: AutoRestSwaggerBATdictionaryServiceModels.Widget } = { 0: { 'integer': 1, 'string': '2' }, 1: { 'integer': 3, 'string': '4' }, 2: { 'integer': 5, 'string': '6' } };
          testClient.dictionary.getComplexValid(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, testDictionary);
            testClient.dictionary.putComplexValid(testDictionary, function (error, result) {
              should.not.exist(error);
              done();
            });
          });
        });
      });

      describe('for dictionary of arrays', function () {
        var testClient = new AutoRestSwaggerBATdictionaryService(baseUri, clientOptions);
        it('should get null and empty array in dictionary', function (done) {
          testClient.dictionary.getArrayNull(function (error, result) {
            should.not.exist(error);
            assert.equal(result, null);
            testClient.dictionary.getArrayEmpty(function (error, result) {
              should.not.exist(error);
              assert.deepEqual(result, {});
              done();
            });
          });
        });

        it('should get arrays with empty and null items in dictionary', function (done) {
          var testNull: { [propertyName: string]: string[] } = { 0: ['1', '2', '3'], 1: null, 2: ['7', '8', '9'] };
          var testEmpty: { [propertyName: string]: string[] } = { 0: ['1', '2', '3'], 1: [], 2: ['7', '8', '9'] };
          testClient.dictionary.getArrayItemNull(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, testNull);
            testClient.dictionary.getArrayItemEmpty(function (error, result) {
              should.not.exist(error);
              assert.deepEqual(result, testEmpty);
              done();
            });
          });
        });

        it('should get and put valid array items in dictionary', function (done) {
          var testDictionary: { [propertyName: string]: string[] } = { 0: ['1', '2', '3'], 1: ['4', '5', '6'], 2: ['7', '8', '9'] };
          testClient.dictionary.getArrayValid(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, testDictionary);
            testClient.dictionary.putArrayValid(testDictionary, function (error, result) {
              should.not.exist(error);
              done();
            });
          });
        });
      });

      describe('for dictionary of dictionaries', function () {
        var testClient = new AutoRestSwaggerBATdictionaryService(baseUri, clientOptions);
        it('should get null and empty dictionary in dictionary', function (done) {
          testClient.dictionary.getDictionaryNull(function (error, result) {
            should.not.exist(error);
            assert.equal(result, null);
            testClient.dictionary.getDictionaryEmpty(function (error, result) {
              should.not.exist(error);
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
            should.not.exist(error);
            assert.deepEqual(result, testNull);
            testClient.dictionary.getDictionaryItemEmpty(function (error, result) {
              should.not.exist(error);
              assert.deepEqual(result, testEmpty);
              done();
            });
          });
        });

        it('should get and put valid dicitonary items in dictionaries', function (done) {
          var testDictionary: { [propertyName: string]: { [propertyName: string]: string } } =
            { 0: { '1': 'one', '2': 'two', '3': 'three' }, 1: { '4': 'four', '5': 'five', '6': 'six' }, 2: { '7': 'seven', '8': 'eight', '9': 'nine' } };
          testClient.dictionary.getDictionaryValid(function (error, result) {
            should.not.exist(error);
            assert.deepEqual(result, testDictionary);
            testClient.dictionary.putDictionaryValid(testDictionary, function (error, result) {
              should.not.exist(error);
              done();
            });
          });
        });
      });
    });
    describe('Files Client', function () {
      var testClient = new AutoRestSwaggerBATFileService(baseUri, clientOptions);

      if (msRest.isNode) {
        it('nodejs should correctly deserialize binary streams', async function () {
          const result = await testClient.files.getFileWithHttpOperationResponse()
          const buf = await readStreamToBuffer(result.readableStreamBody);
          assert.deepEqual(buf, fs.readFileSync(__dirname + '/sample.png'));
        });
      }

      if (!msRest.isNode) {
        it('browser should correctly deserialize binary streams', async function () {
          const result = await testClient.files.getFileWithHttpOperationResponse();
          should.exist(result);
          should.exist(result.blobBody);
          const body = await result.blobBody();
          const reader = new FileReader();
          const readPromise = new Promise(function (resolve, reject) {
            reader.addEventListener("error", reject);
            reader.addEventListener("abort", reject);
            reader.addEventListener("load", resolve);
          });
          reader.readAsArrayBuffer(body);
          await readPromise;
          const actualBytes: Uint8Array = new Uint8Array(reader.result);
          const expectedBytes: Uint8Array = new Uint8Array(require(`arraybuffer-loader!${__dirname}/sample.png`));
          actualBytes.length.should.equal(expectedBytes.length, "length");
          for (let i = 0; i < actualBytes.length; i++) {
            actualBytes[i].should.equal(expectedBytes[i], `position ${i}`);
          }
        });
      }

      if (msRest.isNode) {
        it('nodejs should correctly deserialize empty streams', async function () {
          const result = await testClient.files.getEmptyFileWithHttpOperationResponse()
          const byteCount = await readStreamCountBytes(result.readableStreamBody as any);
          byteCount.should.equal(0);
        });
      }

      if (!msRest.isNode) {
        it('browser should correctly deserialize empty streams', async function () {
          const result = await testClient.files.getEmptyFileWithHttpOperationResponse();
          const body = await result.blobBody();
          body.size.should.equal(0);
        });
      }

      if (msRest.isNode) {
        it('nodejs should correctly deserialize large streams', async function () {
          const result = await testClient.files.getFileLargeWithHttpOperationResponse();
          const byteCount = await readStreamCountBytes(result.readableStreamBody);
          byteCount.should.equal(3000 * 1024 * 1024);
        });
      }

      if (!msRest.isNode) {
        it('browser should correctly deserialize large streams', async function () {
          this.timeout(1000 * 60 * 10);
          const result = await testClient.files.getFileLargeWithHttpOperationResponse();
          const body = await result.blobBody();
          body.size.should.equal(3000 * 1024 * 1024);
        });
      }
    });

    describe('Form Data Client', function () {
      var testClient = new AutoRestSwaggerBATFormDataService(baseUri, clientOptions);

      if (msRest.isNode) {
        it('nodejs should correctly accept file via form-dat', async function () {
          const result = await testClient.formdata.uploadFileWithHttpOperationResponse(() => fs.createReadStream(__dirname + '/sample.png'), 'sample.png');
          const buff = await readStreamToBuffer(result.readableStreamBody)
          assert.deepEqual(buff, fs.readFileSync(__dirname + '/sample.png'));
        });
      }

      if (!msRest.isNode) {
        it('browser should correctly accept file via form-dat', async function () {
          const content = require(`arraybuffer-loader!${__dirname}/sample.png`);
          const blob = new Blob([content]);
          const response = await testClient.formdata.uploadFileWithHttpOperationResponse(blob, 'sample.png');
          const body = await response.blobBody();
          const reader = new FileReader();
          const readPromise = new Promise(function (resolve, reject) {
            reader.addEventListener("error", reject);
            reader.addEventListener("abort", reject);
            reader.addEventListener("load", resolve);
          });
          reader.readAsArrayBuffer(body);
          await readPromise;
          const actualBytes = new Uint8Array(reader.result);
          const expectedBytes = new Uint8Array(content);
          actualBytes.length.should.equal(expectedBytes.length, 'length');
          for (let i = 0; i < actualBytes.length; i++) {
            actualBytes[i].should.equal(expectedBytes[i], `position ${i}`);
          }
        });
      }

      if (msRest.isNode) {
        it('nodejs should correctly accept file via body', async function () {
          const result = await testClient.formdata.uploadFileViaBodyWithHttpOperationResponse(() => fs.createReadStream(__dirname + '/sample.png'));
          const buff = await readStreamToBuffer(result.readableStreamBody);
          assert.deepEqual(buff, fs.readFileSync(__dirname + '/sample.png'));
        });
      }

      if (!msRest.isNode) {
        it('browser should correctly accept file via body', async function () {
          const content = require(`arraybuffer-loader!${__dirname}/sample.png`);
          const response = await testClient.formdata.uploadFileViaBodyWithHttpOperationResponse(new Blob([content]));
          const reader = new FileReader();
          const readPromise = new Promise((resolve, reject) => {
            reader.addEventListener("abort", reject);
            reader.addEventListener("error", reject);
            reader.addEventListener("load", resolve);
          });
          reader.readAsArrayBuffer(await response.blobBody());
          await readPromise;
          const actual = new Uint8Array(reader.result);
          const expected = new Uint8Array(content);
          actual.length.should.equal(expected.length, "length");
          for (let i = 0; i < actual.length; i++) {
            actual[i].should.equal(expected[i], `position ${i}`);
          }
        });
      }

      if (!msRest.isNode) {
        it('browser should report upload/download progress', async function () {
          const content = new Uint8Array(1024 * 1024 * 1);
          let uploadNotified = false;
          let downloadNotified = false;
          const response = await testClient.formdata.uploadFileViaBodyWithHttpOperationResponse(content, {
            onUploadProgress: ev => {
              uploadNotified = true;
              ev.loadedBytes.should.be.a.Number;
            },
            onDownloadProgress: ev => {
              downloadNotified = true;
              ev.loadedBytes.should.be.a.Number;
            }
          });
          if (response.blobBody) {
            await response.blobBody();
          }
          assert(uploadNotified);
          assert(downloadNotified);
        });
      }
    });

    describe('Url Client', function () {
      var testClient = new AutoRestUrlTestService('globalStringPath', baseUri, clientOptions);
      testClient.globalStringQuery = 'globalStringQuery';
      it('should work when path has null, empty, and multi-byte byte values', function (done) {
        testClient.paths.byteNull(null, function (error, result) {
          should.exist(error);
          should.not.exist(result);
          testClient.paths.byteEmpty(function (error, result) {
            should.not.exist(error);
            testClient.paths.byteMultiByte(stringToByteArray('啊齄丂狛狜隣郎隣兀﨩'), function (error, result) {
              should.not.exist(error);
              done();
            });
          });
        });
      });
      it('should work when path has string', function (done) {
        testClient.paths.stringEmpty(function (error, result) {
          should.not.exist(error);
          testClient.paths.stringNull(null, function (error, result) {
            should.exist(error);
            testClient.paths.stringUrlEncoded(function (error, result) {
              should.not.exist(error);
              done();
            });
          });
        });
      });

      it('should work when path has base64url encoded string', function (done) {
        testClient.paths.base64Url(stringToByteArray('lorem'), function (error, result) {
          should.not.exist(error);
          should.not.exist(result);
          done();
        });
      });

      it('should work when path has a paramaeter in UnixTime format', function (done) {
        testClient.paths.unixTimeUrl(new Date('2016-04-13T00:00:00.000Z'), function (error, result) {
          should.not.exist(error);
          done();
        });
      });

      it('should work when path has datetime', function (done) {
        testClient.paths.dateTimeValid(function (error, result) {
          should.not.exist(error);
          testClient.paths.dateTimeNull(null, function (error, result) {
            should.exist(error);
            done();
          });
        });
      });

      it('should work when path has date', function (done) {
        testClient.paths.dateValid(function (error, result) {
          should.not.exist(error);
          done();
        });
      });

      it('should work when query has date', function (done) {
        testClient.queries.dateValid(function (error, result) {
          should.not.exist(error);
          done();
        });
      });

      it('should work when path has enum', function (done) {
        testClient.paths.enumValid(<AutoRestUrlTestServiceModels.UriColor>'', function (error, result) {
          should.exist(error);
          error.message.should.equal(` is not a valid value for enumPath. The valid values are: ["red color","green color","blue color"].`);
          testClient.paths.enumNull(<AutoRestUrlTestServiceModels.UriColor>null, function (error, result) {
            should.exist(error);
            error.message.should.equal(`enumPath cannot be null or undefined.`);
            testClient.paths.enumValid(AutoRestUrlTestServiceModels.UriColor.Greencolor, function (error, result) {
              should.not.exist(error);
              done();
            });
          });
        });
      });

      it('should work when path has bool', function (done) {
        testClient.paths.getBooleanTrue(function (error, result) {
          should.not.exist(error);
          testClient.paths.getBooleanFalse(function (error, result) {
            should.not.exist(error);
            done();
          });
        });
      });

      it('should work when path has double decimal values', function (done) {
        testClient.paths.doubleDecimalNegative(function (error, result) {
          should.not.exist(error);
          testClient.paths.doubleDecimalPositive(function (error, result) {
            should.not.exist(error);
            done();
          });
        });
      });

      it('should work when path has float values', function (done) {
        testClient.paths.floatScientificNegative(function (error, result) {
          should.not.exist(error);
          testClient.paths.floatScientificPositive(function (error, result) {
            should.not.exist(error);
            done();
          });
        });
      });

      it('should work when path has integer values', function (done) {
        testClient.paths.getIntNegativeOneMillion(function (error, result) {
          should.not.exist(error);
          testClient.paths.getIntOneMillion(function (error, result) {
            should.not.exist(error);
            done();
          });
        });
      });

      it('should work when path has big integer values', function (done) {
        testClient.paths.getNegativeTenBillion(function (error, result) {
          should.not.exist(error);
          testClient.paths.getTenBillion(function (error, result) {
            should.not.exist(error);
            done();
          });
        });
      });

      it('should work when use values in different portion of url', function (done) {
        var optionalParams = { localStringQuery: 'localStringQuery', pathItemStringQuery: 'pathItemStringQuery' };
        testClient.pathItems.getAllWithValues('localStringPath', 'pathItemStringPath', optionalParams, function (error, result) {
          should.not.exist(error);
          done();
        });
      });
      it('should work when use null values in different portion of url', function (done) {
        testClient.globalStringQuery = null;
        var optionalParams = { localStringQuery: <string>null, pathItemStringQuery: 'pathItemStringQuery' };
        testClient.pathItems.getGlobalAndLocalQueryNull('localStringPath', 'pathItemStringPath', optionalParams, function (error, result) {
          should.not.exist(error);
          optionalParams = { localStringQuery: 'localStringQuery', pathItemStringQuery: 'pathItemStringQuery' };
          testClient.pathItems.getGlobalQueryNull('localStringPath', 'pathItemStringPath', optionalParams, function (error, result) {
            should.not.exist(error);
            testClient.globalStringQuery = 'globalStringQuery';
            optionalParams = { localStringQuery: null, pathItemStringQuery: null };
            testClient.pathItems.getLocalPathItemQueryNull('localStringPath', 'pathItemStringPath', optionalParams, function (error, result) {
              should.not.exist(error);
              done();
            });
          });
        });
      });
      it('should work when query has bool', function (done) {
        testClient.queries.getBooleanTrue(function (error, result) {
          should.not.exist(error);
          testClient.queries.getBooleanFalse(function (error, result) {
            should.not.exist(error);
            done();
          });
        });
      });
      it('should work when query has double values', function (done) {
        testClient.queries.doubleDecimalNegative(function (error, result) {
          should.not.exist(error);
          testClient.queries.doubleDecimalPositive(function (error, result) {
            should.not.exist(error);
            done();
          });
        });
      });
      it('should work when query has float values', function (done) {
        testClient.queries.floatScientificNegative(function (error, result) {
          should.not.exist(error);
          testClient.queries.floatScientificPositive(function (error, result) {
            should.not.exist(error);
            done();
          });
        });
      });
      it('should work when query has int values', function (done) {
        testClient.queries.getIntNegativeOneMillion(function (error, result) {
          should.not.exist(error);
          testClient.queries.getIntOneMillion(function (error, result) {
            should.not.exist(error);
            done();
          });
        });
      });
      it('should work when query has billion values', function (done) {
        testClient.queries.getNegativeTenBillion(function (error, result) {
          should.not.exist(error);
          testClient.queries.getTenBillion(function (error, result) {
            should.not.exist(error);
            done();
          });
        });
      });
      it('should work when query has string values', function (done) {
        testClient.queries.stringEmpty(function (error, result) {
          should.not.exist(error);
          testClient.queries.stringUrlEncoded(function (error, result) {
            should.not.exist(error);
            done();
          });
        });
      });
      it('should work when query has datetime', function (done) {
        testClient.queries.dateTimeValid(function (error, result) {
          should.not.exist(error);
          done();
        });
      });
      it('should work when query has byte values', function (done) {
        testClient.queries.byteEmpty(function (error, result) {
          should.not.exist(error);
          testClient.queries.byteMultiByte({ byteQuery: stringToByteArray('啊齄丂狛狜隣郎隣兀﨩') }, function (error, result) {
            should.not.exist(error);
            done();
          });
        });
      });
      it('should work when query has enum values', function (done) {
        testClient.queries.enumValid({ enumQuery: <AutoRestUrlTestServiceModels.UriColor>'' }, function (error, result) {
          should.exist(error);
          testClient.queries.enumNull({ enumQuery: null }, function (error, result) {
            should.not.exist(error);
            testClient.queries.enumValid({ enumQuery: AutoRestUrlTestServiceModels.UriColor.Greencolor }, function (error, result) {
              should.not.exist(error);
              done();
            });
          });
        });
      });
      it('should work when query has string array values', function (done) {
        var testArray = ['ArrayQuery1', 'begin!*\'();:@ &=+$,/?#[]end', null, ''];
        testClient.queries.arrayStringCsvEmpty({ arrayQuery: [] }, function (error, result) {
          should.not.exist(error);
          testClient.queries.arrayStringCsvValid({ arrayQuery: testArray }, function (error, result) {
            should.not.exist(error);
            testClient.queries.arrayStringPipesValid({ arrayQuery: testArray }, function (error, result) {
              should.not.exist(error);
              testClient.queries.arrayStringSsvValid({ arrayQuery: testArray }, function (error, result) {
                should.not.exist(error);
                testClient.queries.arrayStringTsvValid({ arrayQuery: testArray }, function (error, result) {
                  should.not.exist(error);
                  done();
                });
              });
            });
          });
        });
      });
      it('should work when path has string array values', function (done) {
        var testArray = ['ArrayPath1', 'begin!*\'();:@ &=+$,/?#[]end', null, ''];
        testClient.paths.arrayCsvInPath(testArray, function (error, result) {
          should.not.exist(error);
          done();
        });
      });
      it('should work when use null values in url query', function (done) {
        testClient.queries.byteNull({ byteQuery: null }, function (error, result) {
          should.not.exist(error);
          testClient.queries.dateNull({ dateQuery: null }, function (error, result) {
            should.not.exist(error);
            testClient.queries.dateTimeNull({ dateTimeQuery: null }, function (error, result) {
              should.not.exist(error);
              testClient.queries.doubleNull({ doubleQuery: null }, function (error, result) {
                should.not.exist(error);
                testClient.queries.floatNull({ floatQuery: null }, function (error, result) {
                  should.not.exist(error);
                  testClient.queries.getBooleanNull({ boolQuery: null }, function (error, result) {
                    should.not.exist(error);
                    testClient.queries.getIntNull({ intQuery: null }, function (error, result) {
                      should.not.exist(error);
                      testClient.queries.getLongNull({ longQuery: null }, function (error, result) {
                        should.not.exist(error);
                        testClient.queries.stringNull({ stringQuery: null }, function (error, result) {
                          should.not.exist(error);
                          testClient.queries.arrayStringCsvNull({ arrayQuery: null }, function (error, result) {
                            should.not.exist(error);
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
    describe('Http infrastructure Client', function () {
      const serializer = new msRest.Serializer(AutoRestHttpInfrastructureTestServiceMappers);
      var testOptions: msRest.ServiceClientOptions = { ...clientOptions };
      testOptions.requestPolicyCreators = [
        msRest.redirectPolicy(),
        msRest.exponentialRetryPolicy(3, 0, 0, 0),
        msRest.deserializationPolicy()
      ];
      testOptions.noRetryPolicy = true;
      var testClient = new AutoRestHttpInfrastructureTestService(baseUri, testOptions);
      it('should work for all http success status codes with different verbs', function (done) {
        testClient.httpSuccess.head200(function (error, result) {
          should.not.exist(error);
          testClient.httpSuccess.get200(function (error, result) {
            should.not.exist(error);
            testClient.httpSuccess.put200({ booleanValue: true }, function (error, result) {
              should.not.exist(error);
              testClient.httpSuccess.post200({ booleanValue: true }, function (error, result) {
                should.not.exist(error);
                testClient.httpSuccess.patch200({ booleanValue: true }, function (error, result) {
                  should.not.exist(error);
                  testClient.httpSuccess.delete200({ booleanValue: true }, function (error, result) {
                    should.not.exist(error);
                    testClient.httpSuccess.put201({ booleanValue: true }, function (error, result) {
                      should.not.exist(error);
                      testClient.httpSuccess.post201({ booleanValue: true }, function (error, result) {
                        should.not.exist(error);
                        testClient.httpSuccess.put202({ booleanValue: true }, function (error, result) {
                          should.not.exist(error);
                          testClient.httpSuccess.post202({ booleanValue: true }, function (error, result) {
                            should.not.exist(error);
                            testClient.httpSuccess.patch202({ booleanValue: true }, function (error, result) {
                              should.not.exist(error);
                              testClient.httpSuccess.delete202({ booleanValue: true }, function (error, result) {
                                should.not.exist(error);
                                testClient.httpSuccess.head204(function (error, result) {
                                  should.not.exist(error);
                                  testClient.httpSuccess.put204({ booleanValue: true }, function (error, result) {
                                    should.not.exist(error);
                                    testClient.httpSuccess.post204({ booleanValue: true }, function (error, result) {
                                      should.not.exist(error);
                                      testClient.httpSuccess.delete204({ booleanValue: true }, function (error, result) {
                                        should.not.exist(error);
                                        testClient.httpSuccess.patch204({ booleanValue: true }, function (error, result) {
                                          should.not.exist(error);
                                          testClient.httpSuccess.head404(function (error, result) {
                                            should.not.exist(error);
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
      it('should work for all http redirect status codes with different verbs', function (done) {
        // For whatever reason, Chrome's redirect caching seems to break this.
        // Be sure to run tests either with inspector open/cache disabled, or in a fresh incognito window.
        this.timeout(2000);
        testClient.httpRedirects.head300(function (error, result, request, response) {
          should.not.exist(error);
          response.status.should.equal(200);
          testClient.httpRedirects.get300(function (error, result, request, response) {
            should.not.exist(error);
            response.status.should.equal(200);
            testClient.httpRedirects.head301(function (error, result, request, response) {
              should.not.exist(error);
              response.status.should.equal(200);
              testClient.httpRedirects.get301(function (error, result, request, response) {
                should.not.exist(error);
                response.status.should.equal(200);
                // Clients relying on newer version of the HTTP spec redirect a request that
                //received a 301 response if it contains a location header. Older clients did
                //not do that. Our test server is designed to conform to the old behavior
                //hence we are commenting this test.
                //testClient.httpRedirects.put301({ booleanValue: true }, function (error, result, request, response) {
                //  should.not.exist(error);
                //  response.status.should.equal(301);
                testClient.httpRedirects.head302(function (error, result, request, response) {
                  should.not.exist(error);
                  response.status.should.equal(200);
                  testClient.httpRedirects.get302(function (error, result, request, response) {
                    should.not.exist(error);
                    response.status.should.equal(200);
                    // same as put 301
                    //testClient.httpRedirects.patch302({ booleanValue: true }, function (error, result, request, response) {
                    //  should.not.exist(error);
                    //  response.status.should.equal(302);
                    testClient.httpRedirects.post303({ booleanValue: true }, function (error, result, request, response) {
                      should.not.exist(error);
                      response.status.should.equal(200);
                      testClient.httpRedirects.head307(function (error, result, request, response) {
                        should.not.exist(error);
                        response.status.should.equal(200);
                        testClient.httpRedirects.get307(function (error, result, request, response) {
                          should.not.exist(error);
                          response.status.should.equal(200);
                          //TODO, 4042586: Support options operations in swagger modeler
                          //testClient.httpRedirects.options307(function (error, result, request, response) {
                          //  should.not.exist(error);
                          testClient.httpRedirects.put307({ booleanValue: true }, function (error, result, request, response) {
                            should.not.exist(error);
                            response.status.should.equal(200);
                            testClient.httpRedirects.post307({ booleanValue: true }, function (error, result, request, response) {
                              should.not.exist(error);
                              response.status.should.equal(200);
                              testClient.httpRedirects.patch307({ booleanValue: true }, function (error, result, request, response) {
                                should.not.exist(error);
                                response.status.should.equal(200);
                                testClient.httpRedirects.delete307({ booleanValue: true }, function (error, result, request, response) {
                                  should.not.exist(error);
                                  response.status.should.equal(200);
                                  done();
                                });
                              });
                            });
                          });
                        });
                        //});
                      });
                    });
                    //});
                  });
                });
                //});
              });
            });
          });
        });
      });

      it('should work for all client failure status codes (4xx) with different verbs', function (done) {
        this.skip(); // FIXME
        testClient.httpClientFailure.head400(function (error, result) {
          should.exist(error);
          (<msRest.RestError>error).statusCode.should.equal(400);
          testClient.httpClientFailure.get400(function (error, result) {
            should.exist(error);
            (<msRest.RestError>error).statusCode.should.equal(400);
            testClient.httpClientFailure.put400({ booleanValue: true }, function (error, result) {
              should.exist(error);
              (<msRest.RestError>error).statusCode.should.equal(400);
              testClient.httpClientFailure.patch400({ booleanValue: true }, function (error, result) {
                should.exist(error);
                (<msRest.RestError>error).statusCode.should.equal(400);
                testClient.httpClientFailure.post400({ booleanValue: true }, function (error, result) {
                  should.exist(error);
                  (<msRest.RestError>error).statusCode.should.equal(400);
                  testClient.httpClientFailure.delete400({ booleanValue: true }, function (error, result) {
                    should.exist(error);
                    (<msRest.RestError>error).statusCode.should.equal(400);
                    testClient.httpClientFailure.head401(function (error, result) {
                      should.exist(error);
                      (<msRest.RestError>error).statusCode.should.equal(401);
                      testClient.httpClientFailure.get402(function (error, result) {
                        should.exist(error);
                        (<msRest.RestError>error).statusCode.should.equal(402);
                        testClient.httpClientFailure.get403(function (error, result) {
                          should.exist(error);
                          (<msRest.RestError>error).statusCode.should.equal(403);
                          testClient.httpClientFailure.put404({ booleanValue: true }, function (error, result) {
                            should.exist(error);
                            (<msRest.RestError>error).statusCode.should.equal(404);
                            testClient.httpClientFailure.patch405({ booleanValue: true }, function (error, result) {
                              should.exist(error);
                              (<msRest.RestError>error).statusCode.should.equal(405);
                              testClient.httpClientFailure.post406({ booleanValue: true }, function (error, result) {
                                should.exist(error);
                                (<msRest.RestError>error).statusCode.should.equal(406);
                                testClient.httpClientFailure.delete407({ booleanValue: true }, function (error, result) {
                                  should.exist(error);
                                  (<msRest.RestError>error).statusCode.should.equal(407);
                                  testClient.httpClientFailure.put409({ booleanValue: true }, function (error, result) {
                                    should.exist(error);
                                    (<msRest.RestError>error).statusCode.should.equal(409);
                                    testClient.httpClientFailure.head410(function (error, result) {
                                      should.exist(error);
                                      (<msRest.RestError>error).statusCode.should.equal(410);
                                      testClient.httpClientFailure.get411(function (error, result) {
                                        should.exist(error);
                                        (<msRest.RestError>error).statusCode.should.equal(411);
                                        testClient.httpClientFailure.get412(function (error, result) {
                                          should.exist(error);
                                          (<msRest.RestError>error).statusCode.should.equal(412);
                                          testClient.httpClientFailure.put413({ booleanValue: true }, function (error, result) {
                                            should.exist(error);
                                            (<msRest.RestError>error).statusCode.should.equal(413);
                                            testClient.httpClientFailure.patch414({ booleanValue: true }, function (error, result) {
                                              should.exist(error);
                                              (<msRest.RestError>error).statusCode.should.equal(414);
                                              testClient.httpClientFailure.post415({ booleanValue: true }, function (error, result) {
                                                should.exist(error);
                                                (<msRest.RestError>error).statusCode.should.equal(415);
                                                testClient.httpClientFailure.get416(function (error, result) {
                                                  should.exist(error);
                                                  (<msRest.RestError>error).statusCode.should.equal(416);
                                                  testClient.httpClientFailure.delete417({ booleanValue: true }, function (error, result) {
                                                    should.exist(error);
                                                    (<msRest.RestError>error).statusCode.should.equal(417);
                                                    testClient.httpClientFailure.head429(function (error, result) {
                                                      should.exist(error);
                                                      (<msRest.RestError>error).statusCode.should.equal(429);
                                                      testClient.httpFailure.getEmptyError(function (error, result) {
                                                        should.exist(error);
                                                        (<msRest.RestError>error).statusCode.should.equal(400);
                                                        testClient.httpFailure.getNoModelError(function (error, result) {
                                                          should.exist(error);
                                                          (<msRest.RestError>error).statusCode.should.equal(400);
                                                          should.exist(error.message);
                                                          // TODO, 4213049: Better default error message
                                                          //error.message.should.match(/.*unexpected status code: 400.*/);
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
                  });
                });
              });
            });
          });
        });
      });

      it('should work for all server failure status codes (5xx) with different verbs', async () => {
        await msAssert.throwsAsync(testClient.httpServerFailure.head501(),
          (error: msRest.RestError) => {
            error.statusCode.should.equal(501);
          });

        await msAssert.throwsAsync(testClient.httpServerFailure.get501(),
          (error: msRest.RestError) => {
            error.statusCode.should.equal(501);
          });

        await msAssert.throwsAsync(testClient.httpServerFailure.post505({ booleanValue: true }),
          (error: msRest.RestError) => {
            error.statusCode.should.equal(505);
          });

        await msAssert.throwsAsync(testClient.httpServerFailure.delete505({ booleanValue: true }),
          (error: msRest.RestError) => {
            error.statusCode.should.equal(505);
          });
      });

      it('should properly perform the Http retry', function (done) {
        testClient.httpRetry.head408(function (error, result, request, response) {
          should.not.exist(error);
          response.status.should.equal(200);
          testClient.httpRetry.get502(function (error, result, request, response) {
            should.not.exist(error);
            response.status.should.equal(200);
            testClient.httpRetry.put500({ booleanValue: true }, function (error, result, request, response) {
              should.not.exist(error);
              response.status.should.equal(200);
              testClient.httpRetry.patch500({ booleanValue: true }, function (error, result, request, response) {
                should.not.exist(error);
                response.status.should.equal(200);
                testClient.httpRetry.post503({ booleanValue: true }, function (error, result, request, response) {
                  should.not.exist(error);
                  response.status.should.equal(200);
                  testClient.httpRetry.delete503({ booleanValue: true }, function (error, result, request, response) {
                    should.not.exist(error);
                    response.status.should.equal(200);
                    testClient.httpRetry.put504({ booleanValue: true }, function (error, result, request, response) {
                      should.not.exist(error);
                      response.status.should.equal(200);
                      testClient.httpRetry.patch504({ booleanValue: true }, function (error, result, request, response) {
                        should.not.exist(error);
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
        should.exist(result1);
        result1.statusCode.should.equal("200");

        //should use models.Error to deserialize and set it as body of javascript Error object
        await msAssert.throwsAsync(testClient.multipleResponses.get200Model204NoModelDefaultError201Invalid(),
          (error: msRest.RestError) => error.statusCode.should.equal(201));

        await msAssert.throwsAsync(testClient.multipleResponses.get200Model204NoModelDefaultError202None(),
          (error: msRest.RestError) => error.statusCode.should.equal(202));

        //should we set body property of msRest.HttpOperationResponse to {}.
        //C3 does this Assert.Null(client.MultipleResponses.Get200Model204NoModelDefaultError204Valid());
        await testClient.multipleResponses.get200Model204NoModelDefaultError204Valid();

        //{"message":"client error","status":400} shouldn't we set this to error model defined in swagger?
        await msAssert.throwsAsync(testClient.multipleResponses.get200Model204NoModelDefaultError400Valid(),
          (error: msRest.RestError) => error.statusCode.should.equal(400));

        const result2 = await testClient.multipleResponses.get200Model201ModelDefaultError200Valid();
        should.exist(result2);
        result2.statusCode.should.equal("200");

        const result3 = await testClient.multipleResponses.get200Model201ModelDefaultError201Valid();
        should.exist(result3);
        assert.deepEqual(result3, { 'statusCode': '201', 'textStatusCode': 'Created' });

        await msAssert.throwsAsync(testClient.multipleResponses.get200Model201ModelDefaultError400Valid(),
          (error: msRest.RestError) => error.statusCode.should.equal(400));

        const result4 = await testClient.multipleResponses.get200ModelA201ModelC404ModelDDefaultError200Valid();
        should.exist(result4);
        result4.statusCode.should.equal("200");

        const result5 = await testClient.multipleResponses.get200ModelA201ModelC404ModelDDefaultError201Valid();
        should.exist(result5);
        result5.httpCode.should.equal("201");

        const result6 = await testClient.multipleResponses.get200ModelA201ModelC404ModelDDefaultError404Valid();
        should.exist(result6);
        result6.httpStatusCode.should.equal("404");

        await msAssert.throwsAsync(testClient.multipleResponses.get200ModelA201ModelC404ModelDDefaultError400Valid(),
          (error: msRest.RestError) => error.statusCode.should.equal(400));

        await testClient.multipleResponses.get202None204NoneDefaultError202None();

        await testClient.multipleResponses.get202None204NoneDefaultError204None();

        await msAssert.throwsAsync(testClient.multipleResponses.get202None204NoneDefaultError400Valid(),
          (error: msRest.RestError) => error.statusCode.should.equal(400));

        await testClient.multipleResponses.get202None204NoneDefaultNone202Invalid();

        await testClient.multipleResponses.get202None204NoneDefaultNone204None();

        await msAssert.throwsAsync(testClient.multipleResponses.get202None204NoneDefaultNone400None(),
          (error: msRest.RestError) => error.statusCode.should.equal(400));

        await msAssert.throwsAsync(testClient.multipleResponses.get202None204NoneDefaultNone400Invalid(),
          (error: msRest.RestError) => error.statusCode.should.equal(400));

        const result7 = await testClient.multipleResponses.getDefaultModelA200Valid();
        should.exist(result7);
        result7.statusCode.should.equal("200");

        await testClient.multipleResponses.getDefaultModelA200None();

        await msAssert.throwsAsync(testClient.multipleResponses.getDefaultModelA400Valid(),
          (error: msRest.RestError) => error.statusCode.should.equal(400));

        await msAssert.throwsAsync(testClient.multipleResponses.getDefaultModelA400None(),
          (error: msRest.RestError) => error.statusCode.should.equal(400));

        await testClient.multipleResponses.getDefaultNone200Invalid();

        await testClient.multipleResponses.getDefaultNone200None();

        await msAssert.throwsAsync(testClient.multipleResponses.getDefaultNone400Invalid(),
          (error: msRest.RestError) => error.statusCode.should.equal(400));

        await msAssert.throwsAsync(testClient.multipleResponses.getDefaultNone400None(),
          (error: msRest.RestError) => error.statusCode.should.equal(400));

        await testClient.multipleResponses.get200ModelA200None();

        const result8 = await testClient.multipleResponses.get200ModelA200Valid();
        result8.statusCode.should.equal("200");

        await testClient.multipleResponses.get200ModelA200Invalid();

        await msAssert.throwsAsync(testClient.multipleResponses.get200ModelA400None(),
          (error: msRest.RestError) => error.statusCode.should.equal(400));

        await msAssert.throwsAsync(testClient.multipleResponses.get200ModelA400Valid(),
          (error: msRest.RestError) => error.statusCode.should.equal(400));

        await msAssert.throwsAsync(testClient.multipleResponses.get200ModelA400Invalid(),
          (error: msRest.RestError) => error.statusCode.should.equal(400));

        await msAssert.throwsAsync(testClient.multipleResponses.get200ModelA202Valid(),
          (error: msRest.RestError) => error.statusCode.should.equal(202));
      });
    });
  });
});