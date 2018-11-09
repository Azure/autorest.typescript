// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
// 

using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace AutoRest.TypeScript.DSL
{
    [TestClass]
    public class MarkdownBuilderTests
    {
        [TestMethod]
        public void Constructor()
        {
            MarkdownBuilder builder = new MarkdownBuilder();
            AssertEx.EqualLines("", builder.ToString());
        }

        [TestMethod]
        public void HeaderWithNegativeLevel()
        {
            MarkdownBuilder builder = new MarkdownBuilder();
            builder.Header(-1, "Nope");
            AssertEx.EqualLines("", builder);
        }

        [TestMethod]
        public void HeaderWithZeroLevel()
        {
            MarkdownBuilder builder = new MarkdownBuilder();
            builder.Header(0, "Nope");
            AssertEx.EqualLines("", builder);
        }

        [TestMethod]
        public void HeaderWithNullText()
        {
            MarkdownBuilder builder = new MarkdownBuilder();
            builder.Header(1, null);
            AssertEx.EqualLines("", builder);
        }

        [TestMethod]
        public void HeaderWithEmptyText()
        {
            MarkdownBuilder builder = new MarkdownBuilder();
            builder.Header(1, null);
            AssertEx.EqualLines("", builder);
        }

        [TestMethod]
        public void HeaderWithOneLevel()
        {
            MarkdownBuilder builder = new MarkdownBuilder();
            builder.Header(1, "ABC");
            AssertEx.EqualLines("# ABC", builder);
        }

        [TestMethod]
        public void HeaderWithTwoLevel()
        {
            MarkdownBuilder builder = new MarkdownBuilder();
            builder.Header(2, "DEFG");
            AssertEx.EqualLines("## DEFG", builder);
        }

        [TestMethod]
        public void ListWithNull()
        {
            MarkdownBuilder builder = new MarkdownBuilder();
            builder.List(null);
            AssertEx.EqualLines("", builder);
        }

        [TestMethod]
        public void ListWithNoItems()
        {
            MarkdownBuilder builder = new MarkdownBuilder();
            builder.List(new string[0]);
            AssertEx.EqualLines("", builder);
        }

        [TestMethod]
        public void ListWithOneItem()
        {
            MarkdownBuilder builder = new MarkdownBuilder();
            builder.List(new[] { "a" });
            AssertEx.EqualLines("- a", builder);
        }

        [TestMethod]
        public void ListWithTwoItems()
        {
            MarkdownBuilder builder = new MarkdownBuilder();
            builder.List(new[] { "a", "b" });
            AssertEx.EqualLines(new[]
                {
                    "- a",
                    "- b",
                },
                builder);
        }
    }
}
