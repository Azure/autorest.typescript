using Microsoft.VisualStudio.TestTools.UnitTesting;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
// 

namespace AutoRest.TypeScript.DSL
{
    [TestClass]
    public class TSDocumentationCommentTests
    {
        [TestMethod]
        public void DeprecatedWithNull()
        {
            TSBuilder builder = new TSBuilder();
            builder.DocumentationComment(comment =>
            {
                comment.Deprecated(null);
            });
            AssertEx.EqualLines("", builder);
        }

        [TestMethod]
        public void DeprecatedWithEmpty()
        {
            TSBuilder builder = new TSBuilder();
            builder.DocumentationComment(comment =>
            {
                comment.Deprecated("");
            });
            AssertEx.EqualLines(
                new[]
                {
                    "/**",
                    " * @deprecated",
                    " */",
                },
                builder);
        }

        [TestMethod]
        public void DeprecatedWithWhitespace()
        {
            TSBuilder builder = new TSBuilder();
            builder.DocumentationComment(comment =>
            {
                comment.Deprecated("\t  ");
            });
            AssertEx.EqualLines(
                new[]
                {
                    "/**",
                    " * @deprecated",
                    " */",
                },
                builder);
        }

        [TestMethod]
        public void DeprecatedWithNonEmpty()
        {
            TSBuilder builder = new TSBuilder();
            builder.DocumentationComment(comment =>
            {
                comment.Deprecated("abc");
            });
            AssertEx.EqualLines(
                new[]
                {
                    "/**",
                    " * @deprecated abc",
                    " */",
                },
                builder);
        }
    }
}
