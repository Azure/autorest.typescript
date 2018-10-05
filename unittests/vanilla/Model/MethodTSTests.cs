// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
// 

using AutoRest.Core.Model;
using AutoRest.TypeScript.DSL;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace AutoRest.TypeScript.Model
{
    [TestClass]
    public class MethodTSTests
    {
        [TestMethod]
        public void GenerateOperationSpecWithMinimalGetMethod()
        {
            MethodTS method = Models.Method();

            TSBuilder builder = GenerateOperationSpec(method);

            AssertEx.EqualLines(
                new[]
                {
                    "{",
                    "  httpMethod: \"GET\",",
                    "  responses: {",
                    "    default: {}",
                    "  },",
                    "  serializer",
                    "}"
                },
                builder);
        }

        [TestMethod]
        public void GenerateOperationSpecWithMinimalPostMethod()
        {
            MethodTS method = Models.Method(httpMethod: HttpMethod.Post);

            TSBuilder builder = GenerateOperationSpec(method);

            AssertEx.EqualLines(
                new[]
                {
                    "{",
                    "  httpMethod: \"POST\",",
                    "  responses: {",
                    "    default: {}",
                    "  },",
                    "  serializer",
                    "}"
                },
                builder);
        }

        [TestMethod]
        public void GenerateOperationSpecWithSameRequestContentTypeAsCodeModel()
        {
            CodeModelTS codeModel = Models.CodeModel();
            MethodTS method = Models.Method(codeModel: codeModel, requestContentType: "application/json");
            Assert.AreEqual(method.RequestContentType, codeModel.RequestContentType);

            TSBuilder builder = GenerateOperationSpec(method);

            AssertEx.EqualLines(
                new[]
                {
                    "{",
                    "  httpMethod: \"GET\",",
                    "  responses: {",
                    "    default: {}",
                    "  },",
                    "  serializer",
                    "}"
                },
                builder);
        }

        [TestMethod]
        public void GenerateOperationSpecWithDifferentRequestContentTypeThanCodeModel()
        {
            CodeModelTS codeModel = Models.CodeModel();
            Models.Method(codeModel: codeModel, requestContentType: "application/json");
            MethodTS method = Models.Method(codeModel: codeModel, requestContentType: "blah");
            Assert.AreNotEqual(method.RequestContentType, codeModel.RequestContentType);

            TSBuilder builder = GenerateOperationSpec(method);

            AssertEx.EqualLines(
                new[]
                {
                    "{",
                    "  httpMethod: \"GET\",",
                    "  contentType: \"blah\",",
                    "  responses: {",
                    "    default: {}",
                    "  },",
                    "  serializer",
                    "}"
                },
                builder);
        }

        [TestMethod]
        public void GenerateOperationSpecWithHeaderParameter()
        {
            CodeModelTS codeModel = Models.CodeModel();
            MethodTS method = Models.Method(
                codeModel: codeModel,
                requestContentType: "fake-content-type",
                parameters: new[] { Models.Parameter(name: "fakeParameterName", location: ParameterLocation.Header) });

            TSBuilder builder = GenerateOperationSpec(method);

            AssertEx.EqualLines(
                new[]
                {
                    "{",
                    "  httpMethod: \"GET\",",
                    "  headerParameters: [",
                    "    Parameters.fakeParameterName",
                    "  ],",
                    "  responses: {",
                    "    default: {}",
                    "  },",
                    "  serializer",
                    "}"
                },
                builder);
        }

        [TestMethod]
        public void GenerateOperationSpecWithFormDataParameter()
        {
            CodeModelTS codeModel = Models.CodeModel();
            MethodTS method = Models.Method(
                codeModel: codeModel,
                requestContentType: "fake-content-type",
                parameters: new[] { Models.Parameter(name: "fakeParameterName", location: ParameterLocation.FormData) });
            
            TSBuilder builder = GenerateOperationSpec(method);

            AssertEx.EqualLines(
                new[]
                {
                    "{",
                    "  httpMethod: \"GET\",",
                    "  formDataParameters: [",
                    "    Parameters.fakeParameterName",
                    "  ],",
                    "  contentType: \"fake-content-type\",",
                    "  responses: {",
                    "    default: {}",
                    "  },",
                    "  serializer",
                    "}"
                },
                builder);
        }

        [TestMethod]
        public void GenerateOperationSpecWithFormDataParameterAndDifferentRequestContentTypeThanCodeModel()
        {
            CodeModelTS codeModel = Models.CodeModel();
            Models.Method(codeModel: codeModel, requestContentType: "application/json");
            MethodTS method = Models.Method(
                codeModel: codeModel,
                requestContentType: "fake-content-type",
                parameters: new[] { Models.Parameter(name: "fakeParameterName", location: ParameterLocation.FormData) });

            TSBuilder builder = GenerateOperationSpec(method);

            AssertEx.EqualLines(
                new[]
                {
                    "{",
                    "  httpMethod: \"GET\",",
                    "  formDataParameters: [",
                    "    Parameters.fakeParameterName",
                    "  ],",
                    "  contentType: \"fake-content-type\",",
                    "  responses: {",
                    "    default: {}",
                    "  },",
                    "  serializer",
                    "}"
                },
                builder);
        }

        private static TSBuilder GenerateOperationSpec(MethodTS method)
        {
            TSBuilder builder = new TSBuilder();
            builder.Object(tsObject =>
            {
                method.GenerateOperationSpec(tsObject);
            });
            return builder;
        }
    }
}
