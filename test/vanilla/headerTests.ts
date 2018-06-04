// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

'use strict';

import should = require('should');
import assert = require('assert');
import * as msRest from 'ms-rest-js';
var _ = require('underscore');

import { AutoRestSwaggerBATHeaderService, AutoRestSwaggerBATHeaderServiceModels } from './generated/Header/autoRestSwaggerBATHeaderService';

var dummyToken = 'dummy12321343423';
var credentials = new msRest.TokenCredentials(dummyToken);

var clientOptions = {};
var baseUri = 'http://localhost:3000';

describe('typescript', function () {

  describe('Swagger Header BAT', function () {

    describe('Basic Header Operations', function () {
      var testClient = new AutoRestSwaggerBATHeaderService(baseUri, clientOptions);
      it('should override existing headers (nodejs only)', async function () {
        if (!msRest.isNode) {
          this.skip();
        }

        await testClient.header.paramExistingKey('overwrite');
        const response = await testClient.header.responseExistingKeyWithHttpOperationResponse();
        response.parsedHeaders.userAgent.should.be.exactly('overwrite');
      });

      it('should throw on changing protected headers', async function () {
        await testClient.header.paramProtectedKey('text/html')
        const response = await testClient.header.responseProtectedKeyWithHttpOperationResponse();
        response.parsedHeaders.contentType.should.be.exactly('text/html; charset=utf-8');
      });

      it('should send and receive integer type headers', async function () {
        await testClient.header.paramInteger('positive', 1);
        await testClient.header.paramInteger('negative', -2);

        const response1 = await testClient.header.responseIntegerWithHttpOperationResponse('positive');
        response1.parsedHeaders.value.should.be.exactly(1);

        const response2 = await testClient.header.responseIntegerWithHttpOperationResponse('negative');
        response2.parsedHeaders.value.should.be.exactly(-2);
      });

      it('should send and receive long type headers', async function () {
        await testClient.header.paramLong('positive', 105);
        await testClient.header.paramLong('negative', -2);

        const response1 = await testClient.header.responseLongWithHttpOperationResponse('positive');
        response1.parsedHeaders.value.should.be.exactly(105);

        const response2 = await testClient.header.responseLongWithHttpOperationResponse('negative');
        response2.parsedHeaders.value.should.be.exactly(-2);
      });

      it('should send and receive float type headers', async function () {
        await testClient.header.paramFloat('positive', 0.07);
        await testClient.header.paramFloat('negative', -3.0);

        const response1 = await testClient.header.responseFloatWithHttpOperationResponse('positive');
        response1.parsedHeaders.value.should.be.exactly(0.07);

        const response2 = await testClient.header.responseFloatWithHttpOperationResponse('negative');
        response2.parsedHeaders.value.should.be.exactly(-3.0);
      });

      it('should send and receive double type headers', async function () {
        await testClient.header.paramDouble('positive', 7e120);
        await testClient.header.paramDouble('negative', -3.0);

        const response1 = await testClient.header.responseDoubleWithHttpOperationResponse('positive');
        response1.parsedHeaders.value.should.be.exactly(7e120);

        const response2 = await testClient.header.responseDoubleWithHttpOperationResponse('negative');
        response2.parsedHeaders.value.should.be.exactly(-3.0);
      });

      it('should send and receive boolean type headers', async function () {
        await testClient.header.paramBool('true', true);
        await testClient.header.paramBool('false', false);

        const response1 = await testClient.header.responseBoolWithHttpOperationResponse('true');
        response1.parsedHeaders.value.should.be.exactly(true);

        const response2 = await testClient.header.responseBoolWithHttpOperationResponse('false');
        response2.parsedHeaders.value.should.be.exactly(false);
      });

      it('should send and receive string type headers', async function () {
        await testClient.header.paramString('valid', { value: 'The quick brown fox jumps over the lazy dog' });
        await testClient.header.paramString('null', { value: null });
        await testClient.header.paramString('empty', { value: '' });

        const response1 = await testClient.header.responseStringWithHttpOperationResponse('valid');
        response1.parsedHeaders.value.should.be.exactly('The quick brown fox jumps over the lazy dog');

        // Note: converting the header value "null" to a null literal is not supported.
        // const response2 = await testClient.header.responseStringWithHttpOperationResponse('null');
        // should.not.exist(response2.parsedHeaders.value);

        const response3 = await testClient.header.responseStringWithHttpOperationResponse('empty');
        response3.parsedHeaders.value.should.be.exactly('');
      });

      it('should send and receive enum type headers', async function () {
        await testClient.header.paramEnum('valid', { value: AutoRestSwaggerBATHeaderServiceModels.GreyscaleColors.GREY });
        await testClient.header.paramEnum('null', { value: null });

        const response1 = await testClient.header.responseEnumWithHttpOperationResponse('valid');
        response1.parsedHeaders.value.should.be.exactly(AutoRestSwaggerBATHeaderServiceModels.GreyscaleColors.GREY);

        const response2 = await testClient.header.responseEnumWithHttpOperationResponse('null');
        response2.parsedHeaders.value.should.be.exactly('');
      });

      it('should send and receive date type headers', async function () {
        await testClient.header.paramDate('valid', new Date('2010-01-01'));
        await testClient.header.paramDate('min', new Date('0001-01-01'));

        const response1 = await testClient.header.responseDateWithHttpOperationResponse('valid');
        _.isEqual(new Date(response1.parsedHeaders.value), new Date('2010-01-01')).should.be.exactly(true);

        const response2 = await testClient.header.responseDateWithHttpOperationResponse('min');
        _.isEqual(response2.parsedHeaders.value, new Date('0001-01-01')).should.be.exactly(true);
      });

      it('should send and receive datetime type headers', async function () {
        await testClient.header.paramDatetime('valid', new Date('2010-01-01T12:34:56Z'));
        await testClient.header.paramDatetime('min', new Date('0001-01-01T00:00:00Z'));

        const response1 = await testClient.header.responseDatetimeWithHttpOperationResponse('valid');
        _.isEqual(response1.parsedHeaders.value, new Date('2010-01-01T12:34:56Z')).should.be.exactly(true);

        const response2 = await testClient.header.responseDatetimeWithHttpOperationResponse('min');
        _.isEqual(response2.parsedHeaders.value, new Date('0001-01-01T00:00:00Z')).should.be.exactly(true);
      });

      it('should send and receive datetimerfc1123 type headers', async function () {
        await testClient.header.paramDatetimeRfc1123('valid', { value: new Date('2010-01-01T12:34:56Z') });
        await testClient.header.paramDatetimeRfc1123('min', { value: new Date('0001-01-01T00:00:00Z') });

        const response1 = await testClient.header.responseDatetimeRfc1123WithHttpOperationResponse('valid');
        _.isEqual(response1.parsedHeaders.value, new Date('Fri, 01 Jan 2010 12:34:56 GMT')).should.be.exactly(true);

        const response2 = await testClient.header.responseDatetimeRfc1123WithHttpOperationResponse('min');
        _.isEqual(response2.parsedHeaders.value, new Date('Mon, 01 Jan 0001 00:00:00 GMT')).should.be.exactly(true);
      });

      it('should send and receive duration type headers', async function () {
        const duration = 'P123DT22H14M12.011S';
        await testClient.header.paramDuration('valid', duration);

        const response = await testClient.header.responseDurationWithHttpOperationResponse('valid')
        _.isEqual(response.parsedHeaders.value, 'P123DT22H14M12.011S').should.be.exactly(true);
      });

      it('should send and receive byte array type headers', async function () {
        const value = '啊齄丂狛狜隣郎隣兀﨩';
        const bytes = msRest.isNode
          ? Buffer.from(value, "utf8")
          : new TextEncoder().encode(value);
        await testClient.header.paramByte('valid', bytes);

        const response = await testClient.header.responseByteWithHttpOperationResponse('valid');

        response.parsedHeaders.value.length.should.equal(bytes.length);
        for (let i = 0; i < bytes.length; i++) {
          response.parsedHeaders.value[i].should.equal(bytes[i]);
        }
      });
    });
  });
});