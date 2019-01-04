﻿// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

'use strict';

import { should } from "chai";
import "chai/register-should";

import { AutoRestRequiredOptionalTestService } from './generated/RequiredOptional/autoRestRequiredOptionalTestService';

var clientOptions = {
  baseUri: 'http://localhost:3000'
};


describe('typescript', function () {

  describe('Swagger Required Optional BAT', function () {

    describe('Basic Required Optional Operations', function () {
      var testClient = new AutoRestRequiredOptionalTestService('', '', clientOptions);

      it('should throw error on null path parameter', async function () {
        try {
          await testClient.implicit.getRequiredPath(null);
        } catch (error) {
          error.should.exist;
          error.message.should.equal('pathParameter cannot be null or undefined.');
        };
      });

      it('should accept null values for query parameters', async function () {
        const response = await testClient.implicit.putOptionalQuery({ queryParameter: null });
        response._response.status.should.equal(200);
      });

      it('should accept null values for optional header parameters', async function () {
        const response = await testClient.implicit.putOptionalHeader({ queryParameter: null });
        response._response.status.should.equal(200);
      });

      it('should accept null values for optional body parameters', async function () {
        const response = await testClient.implicit.putOptionalBody({ bodyParameter: null });
        response._response.status.should.equal(200);
      });

      it('should throw error on null values for required integer parameters', function (done) {
        testClient.explicit.postRequiredIntegerParameter(null, function (error, result) {
          error.should.exist;
          error.message.should.equal(`bodyParameter cannot be null or undefined.`);
          done();
        });
      });
      it('should accept null values for optional integer parameters', function (done) {
        testClient.explicit.postOptionalIntegerParameter({ bodyParameter: null }, function (error, result, request, response) {
          should().not.exist(error);
          response.status.should.equal(200);
          done();
        });
      });
      it('should throw error on null values for required integer properties', function (done) {
        testClient.explicit.postRequiredIntegerProperty(null, function (error, result) {
          error.should.exist;
          error.message.should.contains('value');
          error.message.should.contains('cannot be null or undefined');
          done();
        });
      });
      it('should accept null values for optional integer properties', function (done) {
        testClient.explicit.postOptionalIntegerProperty({ value: null }, function (error, result, request, response) {
          should().not.exist(error);
          response.status.should.equal(200);
          done();
        });
      });
      it('should throw error on null values for required integer header', function (done) {
        testClient.explicit.postRequiredIntegerHeader(null, function (error, result) {
          error.should.exist;
          error.message.should.equal('headerParameter cannot be null or undefined.');
          done();
        });
      });
      it('should accept null values for optional integer header', function (done) {
        testClient.explicit.postOptionalIntegerHeader({ headerParameter: null }, function (error, result, request, response) {
          should().not.exist(error);
          response.status.should.equal(200);
          done();
        });
      });
      it('should throw error on null values for required string parameters', function (done) {
        testClient.explicit.postRequiredStringParameter(null, function (error, result) {
          error.should.exist;
          error.message.should.equal('bodyParameter cannot be null or undefined.');
          done();
        });
      });
      it('should accept null values for optional string parameters', function (done) {
        testClient.explicit.postOptionalStringParameter({ bodyParameter: null }, function (error, result, request, response) {
          should().not.exist(error);
          response.status.should.equal(200);
          done();
        });
      });
      it('should throw error on null values for required string properties', function (done) {
        testClient.explicit.postRequiredStringProperty(null, function (error, result) {
          error.should.exist;
          error.message.should.equal('value cannot be null or undefined.');
          done();
        });
      });
      it('should accept null values for optional string properties', function (done) {
        testClient.explicit.postOptionalStringProperty({ value: null }, function (error, result, request, response) {
          should().not.exist(error);
          response.status.should.equal(200);
          done();
        });
      });
      it('should throw error on null values for required string header', function (done) {
        testClient.explicit.postRequiredStringHeader(null, function (error, result) {
          error.should.exist;
          error.message.should.contains('headerParameter cannot be null or undefined.');
          done();
        });
      });
      it('should accept null values for optional string header', function (done) {
        testClient.explicit.postOptionalStringHeader({ bodyParameter: null }, function (error, result, request, response) {
          should().not.exist(error);
          response.status.should.equal(200);
          done();
        });
      });
      it('should throw error on null values for required class parameters', function (done) {
        testClient.explicit.postRequiredClassParameter(null, function (error, result) {
          error.should.exist;
          error.message.should.equal('bodyParameter cannot be null or undefined.');
          done();
        });
      });
      it('should accept null values for optional class parameters', function (done) {
        testClient.explicit.postOptionalClassParameter({ bodyParameter: null }, function (error, result, request, response) {
          should().not.exist(error);
          response.status.should.equal(200);
          done();
        });
      });
      it('should throw error on null values for required class properties', function (done) {
        testClient.explicit.postRequiredClassProperty(null, function (error, result) {
          error.should.exist;
          error.message.should.equal('value cannot be null or undefined.');
          done();
        });
      });
      it('should accept null values for optional class properties', function (done) {
        testClient.explicit.postOptionalClassProperty({ value: null }, function (error, result, request, response) {
          should().not.exist(error);
          response.status.should.equal(200);
          done();
        });
      });
      it('should throw error on null values for required array parameters', function (done) {
        testClient.explicit.postRequiredArrayParameter(null, function (error, result) {
          error.should.exist;
          error.message.should.equal('bodyParameter cannot be null or undefined.');
          done();
        });
      });
      it('should accept null values for optional array parameters', function (done) {
        testClient.explicit.postOptionalArrayParameter({ bodyParameter: null }, function (error, result, request, response) {
          should().not.exist(error);
          response.status.should.equal(200);
          done();
        });
      });
      it('should throw error on null values for required array properties', function (done) {
        testClient.explicit.postRequiredArrayProperty(null, function (error, result) {
          error.should.exist;
          error.message.should.equal('value cannot be null or undefined.');
          done();
        });
      });
      it('should accept null values for optional array properties', function (done) {
        testClient.explicit.postOptionalArrayProperty({ value: null }, function (error, result, request, response) {
          should().not.exist(error);
          response.status.should.equal(200);
          done();
        });
      });
      it('should throw error on null values for required array header', function (done) {
        testClient.explicit.postRequiredArrayHeader(null, function (error, result) {
          error.should.exist;
          error.message.should.contains('headerParameter cannot be null or undefined.');
          done();
        });
      });
      it('should accept null values for optional array header', function (done) {
        testClient.explicit.postOptionalArrayHeader({ headerParameter: null }, function (error, result, request, response) {
          should().not.exist(error);
          response.status.should.equal(200);
          done();
        });
      });
      it('should throw error on null global property in path', function (done) {
        testClient.requiredGlobalPath = null;
        testClient.implicit.getRequiredGlobalPath(function (error, result) {
          error.should.exist;
          error.message.should.contains('requiredGlobalPath cannot be null or undefined.');
          done();
        });
      });
      it('should throw error on null global property in query', function (done) {
        testClient.requiredGlobalQuery = null;
        testClient.implicit.getRequiredGlobalQuery(function (error, result) {
          error.should.exist;
          error.message.should.contains('requiredGlobalQuery cannot be null or undefined.');
          done();
        });
      });
      it('should accept null values for optional global property in query', function (done) {
        testClient.implicit.getOptionalGlobalQuery(function (error, result, request, response) {
          should().not.exist(error);
          response.status.should.equal(200);
          done();
        });
      });
    });
  });
});
