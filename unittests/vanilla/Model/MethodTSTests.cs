// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
// 

using AutoRest.Core.Model;
using AutoRest.Core.Utilities;
using AutoRest.TypeScript.DSL;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;

namespace AutoRest.TypeScript.Model
{
    [TestClass]
    public class MethodTSTests
    {
        [TestMethod]
        public void GenerateOperationSpecWithMinimalGetMethod()
        {
            MethodTS method = CreateMethod();

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
            MethodTS method = CreateMethod(httpMethod: HttpMethod.Post);

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
            CodeModelTS codeModel = CreateCodeModel();
            MethodTS method = CreateMethod(codeModel: codeModel, requestContentType: "application/json");
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
            CodeModelTS codeModel = CreateCodeModel();
            CreateMethod(codeModel: codeModel, requestContentType: "application/json");
            MethodTS method = CreateMethod(codeModel: codeModel, requestContentType: "blah");
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
            CodeModelTS codeModel = CreateCodeModel();
            MethodTS method = CreateMethod(
                codeModel: codeModel,
                requestContentType: "fake-content-type",
                parameters: new[] { CreateParameter(location: ParameterLocation.Header) });

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
            CodeModelTS codeModel = CreateCodeModel();
            MethodTS method = CreateMethod(
                codeModel: codeModel,
                requestContentType: "fake-content-type",
                parameters: new[] { CreateParameter(location: ParameterLocation.FormData) });
            
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

        private static CodeModelTS CreateCodeModel()
        {
            return DependencyInjection.New<CodeModelTS>();
        }

        private static MethodGroupTS CreateMethodGroup(CodeModelTS codeModel = null)
        {
            if (codeModel == null)
            {
                codeModel = CreateCodeModel();
            }

            MethodGroupTS methodGroup = DependencyInjection.New<MethodGroupTS>();
            codeModel.Add(methodGroup);

            return methodGroup;
        }

        private static MethodTS CreateMethod(
            HttpMethod httpMethod = HttpMethod.Get,
            string requestContentType = null,
            CodeModelTS codeModel = null,
            MethodGroupTS methodGroup = null,
            IEnumerable<ParameterTS> parameters = null)
        {
            if (codeModel == null)
            {
                codeModel = CreateCodeModel();
            }

            MethodTS method = DependencyInjection.New<MethodTS>();
            if (methodGroup == null)
            {
                methodGroup = CreateMethodGroup(codeModel);
            }
            method.MethodGroup = methodGroup;

            codeModel.Add(method);

            method.HttpMethod = httpMethod;
            method.RequestContentType = requestContentType;

            if (parameters != null)
            {
                foreach (ParameterTS parameter in parameters)
                {
                    method.Add(parameter);
                }
            }

            return method;
        }

        private static ParameterTS CreateParameter(string name = "fakeParameterName", ParameterLocation location = ParameterLocation.None)
        {
            ParameterTS parameter = DependencyInjection.New<ParameterTS>();

            parameter.Name = name;
            parameter.Location = location;

            return parameter;
        }
    }
}
