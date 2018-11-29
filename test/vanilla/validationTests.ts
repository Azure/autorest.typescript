// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

'use strict';

import { should } from 'chai';
import { AutoRestValidationTest } from './generated/Validation/autoRestValidationTest';

var clientOptions = {
  baseUri: 'http://localhost:3000'
};
describe('typescript', function () {
  describe('Swagger BAT Validation', function () {
    var testClient = new AutoRestValidationTest("abc123", "12-34-5678", clientOptions);
    describe('Of Method Parameters', function () {
      it('should test the minimum length constraint on resourceGroupName', async function () {
        try {
          await testClient.validationOfMethodParameters("1", 100);
          throw new Error("validation did not fail as expected");
        } catch (err) {
          err.message.should.match(/.*resourceGroupName.*constraint.*MinLength.*3/ig);
        }
      });

      it('should test the maximum length constraint on resourceGroupName', function (done) {
        testClient.validationOfMethodParameters("1234567890A", 100, function (err, result) {
          err.should.exist
          err.message.should.match(/.*resourceGroupName.*constraint.*MaxLength.*10/ig);
          done();
        });
      });

      it('should test the pattern length constraint on resourceGroupName', function (done) {
        testClient.validationOfMethodParameters("!@#$", 100, function (err, result) {
          err.should.exist
          err.message.should.match(/.*resourceGroupName.*constraint.*Pattern.*/ig);
          done();
        });
      });

      it('should test the multipleof constraint on id', function (done) {
        testClient.validationOfMethodParameters("123", 105, function (err, result) {
          err.should.exist
          err.message.should.match(/.*id.*constraint.*MultipleOf.*10/ig);
          done();
        });
      });

      it('should test the InclusiveMinimum constraint on id', function (done) {
        testClient.validationOfMethodParameters("123", 0, function (err, result) {
          err.should.exist
          err.message.should.match(/.*id.*constraint.*InclusiveMinimum.*100/ig);
          done();
        });
      });

      it('should test the InclusiveMaximum constraint on id', function (done) {
        testClient.validationOfMethodParameters("123", 2000, function (err, result) {
          err.should.exist
          err.message.should.match(/.*id.*constraint.*InclusiveMaximum.*1000/ig);
          done();
        });
      });

      it('should test the pattern constraint on apiVersion', function (done) {
        var testClient2 = new AutoRestValidationTest("abc123", "12345", clientOptions);
        testClient2.validationOfMethodParameters("123", 150, function (err, result) {
          err.should.exist
          err.message.should.match(/.*apiVersion.*constraint.*Pattern.*/ig);
          done();
        });
      });
    });

    describe('Of Body Parameters', function () {
      it('should test the ExclusiveMinimum constraint on capacity', function (done) {
        testClient.validationOfBody("123", 150, { body: { capacity: 0, child: {} } }, function (err, result) {
          err.should.exist
          err.message.should.match(/.*capacity.*constraint.*ExclusiveMinimum.*0.*/ig);
          done();
        });
      });

      it('should test the ExclusiveMaximum constraint on capacity', function (done) {
        testClient.validationOfBody("123", 150, { body: { capacity: 2000, child: {} } }, function (err, result) {
          err.should.exist
          err.message.should.match(/.*capacity.*constraint.*ExclusiveMaximum.*100.*/ig);
          done();
        });
      });

      it('should test the MaxItems constraint on displayNames', function (done) {
        testClient.validationOfBody("123", 150, { body: { displayNames: ["item1", "item2", "item3", "item4", "item5", "item6", "item7"], child: {} } }, function (err, result) {
          err.should.exist
          err.message.should.match(/.*display_names.*constraint.*MaxItems.*6.*/ig);
          done();
        });
      });
    });

    describe('Constants', function () {
      it('should work in path', function (done) {
        testClient.getWithConstantInPath(function (err, result) {
          err.should.not.exist
          done();
        });
      });

      it('should work in body', function (done) {
        testClient.postWithConstantInBody({ body: { child: {} } }, function (err, result) {
          err.should.not.exist
          done();
        });
      });
    });
  });
});