// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using AutoRest.Core.Model;
using AutoRest.TypeScript.DSL;
using AutoRest.TypeScript.Model;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace AutoRest.TypeScript
{
    [TestClass]
    public class ClientModelExtensionsTests
    {
        [TestMethod]
        public void ConstructMapperWithXMLNameParameterEqualToSerializedNameParameter()
        {
            TSBuilder builder = new TSBuilder();
            IModelType type = Models.CompositeType();
            ClientModelExtensions.ConstructMapper(builder, type, "fakeSerializedName", null, false, false, true, xmlName: "fakeSerializedName");
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
        public void ConstructMapperWithXMLNameParameterEqualToSerializedNameParameterWithTypeXMLPrefix()
        {
            TSBuilder builder = new TSBuilder();
            IModelType type = Models.CompositeType(xmlPrefix: "apples");
            ClientModelExtensions.ConstructMapper(builder, type, "fakeSerializedName", null, false, false, true, xmlName: "fakeSerializedName");
            AssertEx.EqualLines(
                new[]
                {
                    "{",
                    "  serializedName: \"apples:fakeSerializedName\",",
                    "  type: {",
                    "    name: \"Composite\",",
                    "    className: \"\"",
                    "  }",
                    "}"
                },
                builder);
        }

        [TestMethod]
        public void ConstructMapperWithXMLNameParameterEqualToSerializedNameParameterWithParameterXMLPrefix()
        {
            TSBuilder builder = new TSBuilder();
            IModelType type = Models.CompositeType();
            Property parameter = Models.Property(type: type, xmlPrefix: "oranges");
            ClientModelExtensions.ConstructMapper(builder, type, "fakeSerializedName", parameter, false, false, true, xmlName: "fakeSerializedName");
            AssertEx.EqualLines(
                new[]
                {
                    "{",
                    "  serializedName: \"oranges:fakeSerializedName\",",
                    "  type: {",
                    "    name: \"Composite\",",
                    "    className: \"\"",
                    "  }",
                    "}"
                },
                builder);
        }

        [TestMethod]
        public void ConstructMapperWithXMLNameParameterEqualToSerializedNameParameterWithTypeAndParameterXMLPrefix()
        {
            TSBuilder builder = new TSBuilder();
            IModelType type = Models.CompositeType(xmlPrefix: "bananas");
            Property parameter = Models.Property(type: type, xmlPrefix: "mangos");
            ClientModelExtensions.ConstructMapper(builder, type, "fakeSerializedName", parameter, false, false, true, xmlName: "fakeSerializedName");
            AssertEx.EqualLines(
                new[]
                {
                    "{",
                    "  serializedName: \"mangos:fakeSerializedName\",",
                    "  type: {",
                    "    name: \"Composite\",",
                    "    className: \"\"",
                    "  }",
                    "}"
                },
                builder);
        }

        [TestMethod]
        public void ConstructMapperWithXMLNameParameterDifferentThanSerializedNameParameter()
        {
            TSBuilder builder = new TSBuilder();
            IModelType type = Models.CompositeType();
            ClientModelExtensions.ConstructMapper(builder, type, "fakeSerializedName", null, false, false, true, xmlName: "fakeXMLSerializedName");
            AssertEx.EqualLines(
                new[]
                {
                    "{",
                    "  xmlName: \"fakeXMLSerializedName\",",
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
        public void ConstructMapperWithXMLNameParameterDifferentThanSerializedNameParameterWithTypeXMLPrefix()
        {
            TSBuilder builder = new TSBuilder();
            IModelType type = Models.CompositeType(xmlPrefix: "apples");
            ClientModelExtensions.ConstructMapper(builder, type, "fakeSerializedName", null, false, false, true, xmlName: "fakeXMLSerializedName");
            AssertEx.EqualLines(
                new[]
                {
                    "{",
                    "  xmlName: \"apples:fakeXMLSerializedName\",",
                    "  serializedName: \"apples:fakeSerializedName\",",
                    "  type: {",
                    "    name: \"Composite\",",
                    "    className: \"\"",
                    "  }",
                    "}"
                },
                builder);
        }

        [TestMethod]
        public void ConstructMapperWithXMLNameParameterDifferentThanSerializedNameParameterWithParameterXMLPrefix()
        {
            TSBuilder builder = new TSBuilder();
            IModelType type = Models.CompositeType();
            Property parameter = Models.Property(type: type, xmlPrefix: "oranges");
            ClientModelExtensions.ConstructMapper(builder, type, "fakeSerializedName", parameter, false, false, true, xmlName: "fakeXMLSerializedName");
            AssertEx.EqualLines(
                new[]
                {
                    "{",
                    "  xmlName: \"oranges:fakeXMLSerializedName\",",
                    "  serializedName: \"oranges:fakeSerializedName\",",
                    "  type: {",
                    "    name: \"Composite\",",
                    "    className: \"\"",
                    "  }",
                    "}"
                },
                builder);
        }

        [TestMethod]
        public void ConstructMapperWithXMLNameParameterDifferentThanSerializedNameParameterWithTypeAndParameterXMLPrefix()
        {
            TSBuilder builder = new TSBuilder();
            IModelType type = Models.CompositeType(xmlPrefix: "bananas");
            Property parameter = Models.Property(type: type, xmlPrefix: "mangos");
            ClientModelExtensions.ConstructMapper(builder, type, "fakeSerializedName", parameter, false, false, true, xmlName: "fakeXMLSerializedName");
            AssertEx.EqualLines(
                new[]
                {
                    "{",
                    "  xmlName: \"mangos:fakeXMLSerializedName\",",
                    "  serializedName: \"mangos:fakeSerializedName\",",
                    "  type: {",
                    "    name: \"Composite\",",
                    "    className: \"\"",
                    "  }",
                    "}"
                },
                builder);
        }

        [TestMethod]
        public void ConstructMapperWithPropertyXMLNameEqualToSerializedNameParameter()
        {
            TSBuilder builder = new TSBuilder();
            IModelType type = Models.CompositeType();
            IVariable parameter = Models.Property(type: type, xmlName: "fakeSerializedName");
            ClientModelExtensions.ConstructMapper(builder, type, "fakeSerializedName", parameter, false, false, true);
            AssertEx.EqualLines(
                new[]
                {
                    "{",
                    "  xmlName: \"fakeSerializedName\",",
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
        public void ConstructMapperWithPropertyXMLNameEqualToSerializedNameParameterWithTypeXMLPrefix()
        {
            TSBuilder builder = new TSBuilder();
            IModelType type = Models.CompositeType(xmlPrefix: "apples");
            IVariable parameter = Models.Property(type: type, xmlName: "fakeSerializedName");
            ClientModelExtensions.ConstructMapper(builder, type, "fakeSerializedName", parameter, false, false, true);
            AssertEx.EqualLines(
                new[]
                {
                    "{",
                    "  xmlName: \"apples:fakeSerializedName\",",
                    "  serializedName: \"apples:fakeSerializedName\",",
                    "  type: {",
                    "    name: \"Composite\",",
                    "    className: \"\"",
                    "  }",
                    "}"
                },
                builder);
        }

        [TestMethod]
        public void ConstructMapperWithPropertyXMLNameEqualToSerializedNameParameterWithParameterXMLPrefix()
        {
            TSBuilder builder = new TSBuilder();
            IModelType type = Models.CompositeType();
            Property parameter = Models.Property(type: type, xmlPrefix: "oranges", xmlName: "fakeSerializedName");
            ClientModelExtensions.ConstructMapper(builder, type, "fakeSerializedName", parameter, false, false, true);
            AssertEx.EqualLines(
                new[]
                {
                    "{",
                    "  xmlName: \"oranges:fakeSerializedName\",",
                    "  serializedName: \"oranges:fakeSerializedName\",",
                    "  type: {",
                    "    name: \"Composite\",",
                    "    className: \"\"",
                    "  }",
                    "}"
                },
                builder);
        }

        [TestMethod]
        public void ConstructMapperWithPropertyXMLNameEqualToSerializedNameParameterWithTypeAndParameterXMLPrefix()
        {
            TSBuilder builder = new TSBuilder();
            IModelType type = Models.CompositeType(xmlPrefix: "bananas");
            Property parameter = Models.Property(type: type, xmlPrefix: "mangos", xmlName: "fakeSerializedName");
            ClientModelExtensions.ConstructMapper(builder, type, "fakeSerializedName", parameter, false, false, true);
            AssertEx.EqualLines(
                new[]
                {
                    "{",
                    "  xmlName: \"mangos:fakeSerializedName\",",
                    "  serializedName: \"mangos:fakeSerializedName\",",
                    "  type: {",
                    "    name: \"Composite\",",
                    "    className: \"\"",
                    "  }",
                    "}"
                },
                builder);
        }

        [TestMethod]
        public void ConstructMapperWithPropertyXMLNameDifferentThanSerializedNameParameter()
        {
            TSBuilder builder = new TSBuilder();
            IModelType type = Models.CompositeType();
            IVariable parameter = Models.Property(type: type, xmlName: "fakeXMLSerializedName");
            ClientModelExtensions.ConstructMapper(builder, type, "fakeSerializedName", parameter, false, false, true);
            AssertEx.EqualLines(
                new[]
                {
                    "{",
                    "  xmlName: \"fakeXMLSerializedName\",",
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
        public void ConstructMapperWithPropertyXMLNameDifferentThanSerializedNameParameterWithTypeXMLPrefix()
        {
            TSBuilder builder = new TSBuilder();
            IModelType type = Models.CompositeType(xmlPrefix: "apples");
            IVariable parameter = Models.Property(type: type, xmlName: "fakeXMLSerializedName");
            ClientModelExtensions.ConstructMapper(builder, type, "fakeSerializedName", parameter, false, false, true);
            AssertEx.EqualLines(
                new[]
                {
                    "{",
                    "  xmlName: \"apples:fakeXMLSerializedName\",",
                    "  serializedName: \"apples:fakeSerializedName\",",
                    "  type: {",
                    "    name: \"Composite\",",
                    "    className: \"\"",
                    "  }",
                    "}"
                },
                builder);
        }

        [TestMethod]
        public void ConstructMapperWithPropertyXMLNameDifferentThanSerializedNameParameterWithParameterXMLPrefix()
        {
            TSBuilder builder = new TSBuilder();
            IModelType type = Models.CompositeType();
            Property parameter = Models.Property(type: type, xmlPrefix: "oranges", xmlName: "fakeXMLSerializedName");
            ClientModelExtensions.ConstructMapper(builder, type, "fakeSerializedName", parameter, false, false, true);
            AssertEx.EqualLines(
                new[]
                {
                    "{",
                    "  xmlName: \"oranges:fakeXMLSerializedName\",",
                    "  serializedName: \"oranges:fakeSerializedName\",",
                    "  type: {",
                    "    name: \"Composite\",",
                    "    className: \"\"",
                    "  }",
                    "}"
                },
                builder);
        }

        [TestMethod]
        public void ConstructMapperWithPropertyXMLNameDifferentThanSerializedNameParameterWithTypeAndParameterXMLPrefix()
        {
            TSBuilder builder = new TSBuilder();
            IModelType type = Models.CompositeType(xmlPrefix: "bananas");
            Property parameter = Models.Property(type: type, xmlPrefix: "mangos", xmlName: "fakeXMLSerializedName");
            ClientModelExtensions.ConstructMapper(builder, type, "fakeSerializedName", parameter, false, false, true);
            AssertEx.EqualLines(
                new[]
                {
                    "{",
                    "  xmlName: \"mangos:fakeXMLSerializedName\",",
                    "  serializedName: \"mangos:fakeSerializedName\",",
                    "  type: {",
                    "    name: \"Composite\",",
                    "    className: \"\"",
                    "  }",
                    "}"
                },
                builder);
        }

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

        [TestMethod]
        public void CreateRegexPatternConstraintValueWithNull()
        {
            Assert.AreEqual("", ClientModelExtensions.CreateRegexPatternConstraintValue(null));
        }

        [TestMethod]
        public void CreateRegexPatternConstraintValueWithEmpty()
        {
            Assert.AreEqual("", ClientModelExtensions.CreateRegexPatternConstraintValue(""));
        }

        [TestMethod]
        public void CreateRegexPatternConstraintValueWithWhitespace()
        {
            Assert.AreEqual("/ \t /", ClientModelExtensions.CreateRegexPatternConstraintValue(" \t "));
        }

        [TestMethod]
        public void CreateRegexPatternConstraintValueWithUnescapedForwardSlash()
        {
            Assert.AreEqual(
                "/^([0-9]{1,3}\\.){3}[0-9]{1,3}(\\/([0-9]|[1-2][0-9]|3[0-2]))?$/",
                ClientModelExtensions.CreateRegexPatternConstraintValue(
                    "^([0-9]{1,3}\\.){3}[0-9]{1,3}(/([0-9]|[1-2][0-9]|3[0-2]))?$"));
        }

        [TestMethod]
        public void CreateRegexPatternConstraintValueWithEscapedForwardSlash()
        {
            Assert.AreEqual(
                "/^([0-9]{1,3}\\.){3}[0-9]{1,3}(\\/([0-9]|[1-2][0-9]|3[0-2]))?$/",
                ClientModelExtensions.CreateRegexPatternConstraintValue(
                    "^([0-9]{1,3}\\.){3}[0-9]{1,3}(\\/([0-9]|[1-2][0-9]|3[0-2]))?$"));
        }

        [TestMethod]
        public void CreateSerializerExpressionWithNoMappersAndNoXML()
        {
            CodeModelTS codeModel = Models.CodeModel();
            Assert.AreEqual("new coreHttp.Serializer()", ClientModelExtensions.CreateSerializerExpression(codeModel));
        }

        [TestMethod]
        public void CreateSerializerExpressionWithNoMappersAndXML()
        {
            CodeModelTS codeModel = Models.CodeModel(
                modelTypes: new[]
                {
                    Models.CompositeType(name: "FakeModelType")
                });
            Assert.AreEqual("new coreHttp.Serializer(Mappers)", ClientModelExtensions.CreateSerializerExpression(codeModel));
        }
    }
}
