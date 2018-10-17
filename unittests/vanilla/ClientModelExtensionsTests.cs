// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using AutoRest.Core.Model;
using AutoRest.TypeScript.DSL;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace AutoRest.TypeScript
{
    [TestClass]
    public class ClientModelExtensionsTests
    {
        [TestMethod]
        public void ConstructMapperWithNoXMLPrefix()
        {
            TSBuilder builder = new TSBuilder();
            IModelType type = Models.CompositeType();
            ClientModelExtensions.ConstructMapper(builder, type, "fakeSerializedName", null, false, false, true);
            AssertEx.EqualLines(
                new[]
                {
                    "{",
                    "  serializedName: \"fakeSerializedName\",",
                    "  type: {",
                    "    name: \"Composite\",",
                    "    className: \"\"",
                    "  }",
                    "}"
                },
                builder);
        }

        [TestMethod]
        public void ConstructMapperWithTypeXMLPrefix()
        {
            TSBuilder builder = new TSBuilder();
            IModelType type = Models.CompositeType(xmlPrefix: "blah");
            ClientModelExtensions.ConstructMapper(builder, type, "fakeSerializedName", null, false, false, true);
            AssertEx.EqualLines(
                new[]
                {
                    "{",
                    "  serializedName: \"blah:fakeSerializedName\",",
                    "  type: {",
                    "    name: \"Composite\",",
                    "    className: \"\"",
                    "  }",
                    "}"
                },
                builder);
        }

        [TestMethod]
        public void ConstructMapperWithParameterXMLPrefix()
        {
            TSBuilder builder = new TSBuilder();
            CompositeType type = Models.CompositeType();
            Property parameter = Models.Property(type: type, xmlPrefix: "anotherBlah");
            ClientModelExtensions.ConstructMapper(builder, type, "fakeSerializedName", parameter, false, false, true);
            AssertEx.EqualLines(
                new[]
                {
                    "{",
                    "  serializedName: \"anotherBlah:fakeSerializedName\",",
                    "  type: {",
                    "    name: \"Composite\",",
                    "    className: \"\"",
                    "  }",
                    "}"
                },
                builder);
        }

        [TestMethod]
        public void ConstructMapperWithTypeAndParameterXMLPrefix()
        {
            TSBuilder builder = new TSBuilder();
            CompositeType type = Models.CompositeType(xmlPrefix: "a");
            Property parameter = Models.Property(type: type, xmlPrefix: "b");
            ClientModelExtensions.ConstructMapper(builder, type, "fakeSerializedName", parameter, false, false, true);
            AssertEx.EqualLines(
                new[]
                {
                    "{",
                    "  serializedName: \"b:fakeSerializedName\",",
                    "  type: {",
                    "    name: \"Composite\",",
                    "    className: \"\"",
                    "  }",
                    "}"
                },
                builder);
        }

        [TestMethod]
        public void ConstructMapperWithTypeAndParameterXMLPrefixWithFalseIsXML()
        {
            TSBuilder builder = new TSBuilder();
            CompositeType type = Models.CompositeType(xmlPrefix: "a");
            Property parameter = Models.Property(type: type, xmlPrefix: "b");
            ClientModelExtensions.ConstructMapper(builder, type, "fakeSerializedName", parameter, false, false, false);
            AssertEx.EqualLines(
                new[]
                {
                    "{",
                    "  serializedName: \"fakeSerializedName\",",
                    "  type: {",
                    "    name: \"Composite\",",
                    "    className: \"\"",
                    "  }",
                    "}"
                },
                builder);
        }
    }
}
