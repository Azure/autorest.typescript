// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
// 

using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace AutoRest.TypeScript.DSL
{
    [TestClass]
    public class HTMLBuilderTests
    {
        [TestMethod]
        public void Constructor()
        {
            HTMLBuilder builder = new HTMLBuilder();
            AssertEx.EqualLines("", builder);
        }

        [TestMethod]
        public void DOCTYPE()
        {
            HTMLBuilder builder = new HTMLBuilder();
            builder.DOCTYPE();
            AssertEx.EqualLines("<!DOCTYPE html>", builder);
        }

        [TestMethod]
        public void ElementWithNameAndCanBeEmptyElementSetToFalse()
        {
            HTMLBuilder builder = new HTMLBuilder();
            builder.Element("a", false);
            AssertEx.EqualLines("<a></a>", builder);
        }

        [TestMethod]
        public void ElementWithNameAndCanBeEmptyElementSetToTrue()
        {
            HTMLBuilder builder = new HTMLBuilder();
            builder.Element("a", true);
            AssertEx.EqualLines("<a/>", builder);
        }

        [TestMethod]
        public void ElementWithNameAndNullValue()
        {
            HTMLBuilder builder = new HTMLBuilder();
            builder.Element("a", (string)null);
            AssertEx.EqualLines("<a/>", builder);
        }

        [TestMethod]
        public void ElementWithNameAndEmptyValue()
        {
            HTMLBuilder builder = new HTMLBuilder();
            builder.Element("a", "");
            AssertEx.EqualLines("<a/>", builder);
        }

        [TestMethod]
        public void ElementWithNameAndNonEmptyValue()
        {
            HTMLBuilder builder = new HTMLBuilder();
            builder.Element("a", "bcd");
            AssertEx.EqualLines("<a>bcd</a>", builder);
        }

        [TestMethod]
        public void ElementWithOneAttributeAndNoChildren()
        {
            HTMLBuilder builder = new HTMLBuilder();
            builder.Element("a", a =>
            {
                a.Attribute("b", "c");
            });
            AssertEx.EqualLines("<a b=\"c\"/>", builder);
        }

        [TestMethod]
        public void ElementWithTwoAttributesAndNoChildren()
        {
            HTMLBuilder builder = new HTMLBuilder();
            builder.Element("a", a =>
            {
                a.Attribute("b", "c");
                a.Attribute("d", "e");
            });
            AssertEx.EqualLines("<a b=\"c\" d=\"e\"/>", builder);
        }

        [TestMethod]
        public void ElementWithNoAttributesAndOneChildText()
        {
            HTMLBuilder builder = new HTMLBuilder();
            builder.Element("a", a =>
            {
                a.Text("b");
            });
            AssertEx.EqualLines("<a>b</a>", builder);
        }

        [TestMethod]
        public void ElementWithNoAttributesAndTwoChildTexts()
        {
            HTMLBuilder builder = new HTMLBuilder();
            builder.Element("a", a =>
            {
                a.Text("b");
                a.Text("c");
            });
            AssertEx.EqualLines("<a>bc</a>", builder);
        }

        [TestMethod]
        public void ElementWithNoAttributesAndOneChildElement()
        {
            HTMLBuilder builder = new HTMLBuilder();
            builder.Element("a", a =>
            {
                a.ChildElement("b");
            });
            AssertEx.EqualLines(new[]
            {
                "<a>",
                "  <b/>",
                "</a>"
            },
            builder);
        }

        [TestMethod]
        public void DoctypeHtmlAndHeadElements()
        {
            HTMLBuilder builder = new HTMLBuilder();
            builder.DOCTYPE();
            builder.Html(html =>
            {
                html.Head();
            });
            AssertEx.EqualLines(new[]
            {
                "<!DOCTYPE html>",
                "<html lang=\"en\">",
                "  <head/>",
                "</html>"
            },
            builder);
        }

        [TestMethod]
        public void ScriptWithTSBuilderAction()
        {
            HTMLBuilder builder = new HTMLBuilder();
            builder.Script(tsBuilder =>
            {
                tsBuilder.ConstQuotedStringVariable("x", "my special text");
            });
            AssertEx.EqualLines(new[]
            {
                "<script type=\"text/javascript\">",
                "  const x = \"my special text\";",
                "</script>"
            },
            builder);
        }
    }
}
