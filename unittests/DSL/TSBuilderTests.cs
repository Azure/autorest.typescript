// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
// 

using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace AutoRest.TypeScript.DSL
{
    [TestClass]
    public class TSBuilderTests
    {
        [TestMethod]
        public void Constructor()
        {
            TSBuilder builder = new TSBuilder();
            Assert.AreEqual("", builder.ToString());
        }

        [TestMethod]
        public void CreatePositionWithEmptyBuilder()
        {
            TSBuilder builder = new TSBuilder();
            TSPosition p = builder.CreatePosition();
            Assert.AreEqual(0, p.CharactersAfterPreviousPosition);
            Assert.AreEqual(0, p.GetIndexInBuilder());
            Assert.AreSame(p, builder.CreatePosition());
        }

        [TestMethod]
        public void CreatePositionWithNonEmptyBuilder()
        {
            TSBuilder builder = new TSBuilder();
            builder.Text("abcd");
            TSPosition p = builder.CreatePosition();
            Assert.AreEqual(4, p.CharactersAfterPreviousPosition);
            Assert.AreEqual(4, p.GetIndexInBuilder());
            Assert.AreSame(p, builder.CreatePosition());
        }

        [TestMethod]
        public void CreatePositionWhenAnotherPositionAlreadyExists()
        {
            TSBuilder builder = new TSBuilder();
            TSPosition p1 = builder.CreatePosition();
            builder.Text("abcd");
            TSPosition p2 = builder.CreatePosition();
            Assert.AreEqual(0, p1.CharactersAfterPreviousPosition);
            Assert.AreEqual(0, p1.GetIndexInBuilder());
            Assert.AreEqual(4, p2.CharactersAfterPreviousPosition);
            Assert.AreEqual(4, p2.GetIndexInBuilder());
        }

        [TestMethod]
        public void HasChangedLinesSinceWithNegativeIndexAndEmptyBuilder()
        {
            TSBuilder builder = new TSBuilder();
            Assert.ThrowsException<IndexOutOfRangeException>(() => builder.HasChangedLinesSince(-1));
        }

        [TestMethod]
        public void HasChangedLinesSinceWithNegativeIndexAndSingleLine()
        {
            TSBuilder builder = new TSBuilder();
            builder.Text("abc");
            Assert.ThrowsException<IndexOutOfRangeException>(() => builder.HasChangedLinesSince(-1));
        }

        [TestMethod]
        public void HasChangedLinesSinceWithNegativeIndexAndMultipleLines()
        {
            TSBuilder builder = new TSBuilder();
            builder.Text("a\nb\nc");
            Assert.ThrowsException<IndexOutOfRangeException>(() => builder.HasChangedLinesSince(-1));
        }

        [TestMethod]
        public void HasChangedLinesSinceWithZeroIndexAndEmptyBuilder()
        {
            TSBuilder builder = new TSBuilder();
            Assert.IsFalse(builder.HasChangedLinesSince(0));
        }

        [TestMethod]
        public void HasChangedLinesSinceWithZeroIndexAndSingleLine()
        {
            TSBuilder builder = new TSBuilder();
            builder.Text("abc");
            Assert.IsFalse(builder.HasChangedLinesSince(0));
        }

        [TestMethod]
        public void HasChangedLinesSinceWithZeroIndexAndMultipleLines()
        {
            TSBuilder builder = new TSBuilder();
            builder.Text("a\nb\nc");
            Assert.IsTrue(builder.HasChangedLinesSince(0));
        }

        [TestMethod]
        public void InsertWithNoPositions()
        {
            TSBuilder builder = new TSBuilder();
            builder.Insert(0, "abcd");
            Assert.AreEqual("abcd", builder.ToString());
        }

        [TestMethod]
        public void InsertAtAnExistingPosition()
        {
            TSBuilder builder = new TSBuilder();
            TSPosition p = builder.CreatePosition();
            builder.Insert(0, "abcd");
            Assert.AreEqual("abcd", builder.ToString());
            Assert.AreEqual(4, p.CharactersAfterPreviousPosition);
            Assert.AreEqual(4, p.GetIndexInBuilder());
        }

        [TestMethod]
        public void InsertBeforeAnExistingPosition()
        {
            TSBuilder builder = new TSBuilder();
            builder.Text("abd");
            TSPosition p = builder.CreatePosition();
            builder.Text("ef");

            Assert.AreEqual(3, p.CharactersAfterPreviousPosition);
            Assert.AreEqual(3, p.GetIndexInBuilder());

            builder.Insert(2, "c");

            Assert.AreEqual(4, p.CharactersAfterPreviousPosition);
            Assert.AreEqual(4, p.GetIndexInBuilder());
        }

        [TestMethod]
        public void InsertAfterAnExistingPosition()
        {
            TSBuilder builder = new TSBuilder();
            builder.Text("abc");
            TSPosition p = builder.CreatePosition();
            builder.Text("df");

            Assert.AreEqual(3, p.CharactersAfterPreviousPosition);
            Assert.AreEqual(3, p.GetIndexInBuilder());

            builder.Insert(4, "e");

            Assert.AreEqual(3, p.CharactersAfterPreviousPosition);
            Assert.AreEqual(3, p.GetIndexInBuilder());
        }

        [TestMethod]
        public void InsertBetweenExistingPositions()
        {
            TSBuilder builder = new TSBuilder();
            builder.Text("ab");
            TSPosition p1 = builder.CreatePosition();
            builder.Text("cd");
            TSPosition p2 = builder.CreatePosition();
            builder.Text("ef");

            Assert.AreEqual(2, p1.CharactersAfterPreviousPosition);
            Assert.AreEqual(2, p1.GetIndexInBuilder());
            Assert.AreEqual(2, p2.CharactersAfterPreviousPosition);
            Assert.AreEqual(4, p2.GetIndexInBuilder());

            builder.Insert(3, "Z");
            Assert.AreEqual("abcZdef", builder.ToString());

            Assert.AreEqual(2, p1.CharactersAfterPreviousPosition);
            Assert.AreEqual(2, p1.GetIndexInBuilder());
            Assert.AreEqual(3, p2.CharactersAfterPreviousPosition);
            Assert.AreEqual(5, p2.GetIndexInBuilder());
        }

        [TestMethod]
        public void InsertNewLine()
        {
            TSBuilder builder = new TSBuilder();
            builder.InsertNewLine(0);
            Assert.AreEqual("\n", builder.ToString());
        }

        [TestMethod]
        public void AddPropertyToParentObjectWhileBuildingChildObject()
        {
            TSBuilder builder = new TSBuilder();
            InvalidOperationException exception = Assert.ThrowsException<InvalidOperationException>(() =>
            {
                builder.Object((TSObject parentObject) =>
                {
                    parentObject.ObjectProperty("child", (TSObject childObject) =>
                    {
                        childObject.TextProperty("a", "A");
                        parentObject.TextProperty("b", "B");
                    });
                });
            });
            Assert.AreEqual("Cannot add a property to a TSObject while constructing its child property (\"child\").", exception.Message);
        }

        [TestMethod]
        public void NestedTryBlocks()
        {
            TSBuilder builder = new TSBuilder();
            builder.Try(tryBlock1 =>
            {
                tryBlock1.Try(tryBlock2 =>
                {
                })
                .Catch("error1", catchBlock2 =>
                {
                });
            })
            .Catch("error2", catchBlock1 =>
            {
            });
            AssertEx.EqualLines(
                new[]
                {
                    "try {",
                    "  try {",
                    "  } catch (error1) {",
                    "  }",
                    "} catch (error2) {",
                    "}"
                },
                builder);
        }

        [TestMethod]
        public void NestedIfBlocks()
        {
            TSBuilder builder = new TSBuilder();
            builder.If("a", ifBlock1 =>
            {
                ifBlock1.If("b", ifBlock2 =>
                {
                });
            });
            AssertEx.EqualLines(
                new[]
                {
                    "if (a) {",
                    "  if (b) {",
                    "  }",
                    "}"
                },
                builder);
        }

        [TestMethod]
        public void NestedElseBlocks()
        {
            TSBuilder builder = new TSBuilder();
            builder.If("a", ifBlock1 =>
            {
                ifBlock1.If("b", ifBlock2 =>
                {
                })
                .Else(elseBlock2 =>
                {
                });
            })
            .Else(elseBlock1 =>
            {
            }); ;
            AssertEx.EqualLines(
                new[]
                {
                    "if (a) {",
                    "  if (b) {",
                    "  } else {",
                    "  }",
                    "} else {",
                    "}",
                },
                builder.ToString());
        }

        [TestMethod]
        public void NestedElseIfBlocks()
        {
            TSBuilder builder = new TSBuilder();
            builder.If("a1", ifBlock1 =>
            {
                ifBlock1.If("b1", ifBlock2 =>
                {
                })
                .ElseIf("b2", elseIfBlock2 =>
                {
                });
            })
            .ElseIf("a2", elseIfBlock1 =>
            {
            }); ;
            AssertEx.EqualLines(
                new[]
                {
                    "if (a1) {",
                    "  if (b1) {",
                    "  } else if (b2) {",
                    "  }",
                    "} else if (a2) {",
                    "}",
                },
                builder.ToString());
        }

        [TestMethod]
        public void TryBlockInIfBlock()
        {
            TSBuilder builder = new TSBuilder();
            builder.If("true", ifBlock =>
            {
                ifBlock.Try(tryBlock =>
                {
                })
                .Catch("error", catchBlock2 =>
                {
                });
            });
            AssertEx.EqualLines(
                "if (true) {" + Environment.NewLine +
                "  try {" + Environment.NewLine +
                "  } catch (error) {" + Environment.NewLine +
                "  }" + Environment.NewLine +
                "}",
                builder.ToString());
        }

        [TestMethod]
        public void IfBlockInTryBlock()
        {
            TSBuilder builder = new TSBuilder();
            builder.Try(tryBlock =>
            {
                tryBlock.If("true", ifBlock =>
                {
                });
            })
            .Catch("error", catchBlock1 =>
            {
            });
            AssertEx.EqualLines(
                "try {" + Environment.NewLine +
                "  if (true) {" + Environment.NewLine +
                "  }" + Environment.NewLine +
                "} catch (error) {" + Environment.NewLine +
                "}",
                builder.ToString());
        }

        [TestMethod]
        public void IfBlockWithSurroundingLines()
        {
            TSBuilder builder = new TSBuilder();
            builder.Line("const x = 5;");
            builder.If("true", ifBlock =>
            {
            });
            builder.Line("const y = 6;");
            AssertEx.EqualLines(
                new[]
                {
                    "const x = 5;",
                    "if (true) {",
                    "}",
                    "const y = 6;"
                },
                builder.ToString());
        }

        [TestMethod]
        public void WordWrapWithNullLine()
        {
            TSBuilder builder = new TSBuilder();
            IEnumerable<string> wrappedLines = builder.WordWrap(null, false);
            Assert.IsFalse(wrappedLines.Any());
        }

        [TestMethod]
        public void WordWrapWithEmptyLine()
        {
            TSBuilder builder = new TSBuilder();
            IEnumerable<string> wrappedLines = builder.WordWrap("", false);
            Assert.IsFalse(wrappedLines.Any());
        }

        [TestMethod]
        public void WordWrapWithNonEmptyLineShorterThanWordWrapWidth()
        {
            TSBuilder builder = new TSBuilder();
            builder.WordWrapWidth = 20;
            IEnumerable<string> wrappedLines = builder.WordWrap("abcd", false);
            AssertEx.EqualLines(
                "abcd",
                wrappedLines);
        }

        [TestMethod]
        public void WordWrapWithNonEmptyLineWithNoWhitespaceLongerThanWordWrapWidth()
        {
            TSBuilder builder = new TSBuilder();
            builder.WordWrapWidth = 5;
            IEnumerable<string> wrappedLines = builder.WordWrap("abcdefghij", false);
            AssertEx.EqualLines(
                new[]
                {
                    "abcdefghij"
                },
                wrappedLines);
        }

        [TestMethod]
        public void WordWrapWithNonEmptyLineWithWhitespaceLongerThanWordWrapWidth()
        {
            TSBuilder builder = new TSBuilder();
            builder.WordWrapWidth = 5;
            IEnumerable<string> wrappedLines = builder.WordWrap("abc def ghij", false);
            AssertEx.EqualLines(
                new[]
                {
                    "abc\n",
                    "def\n",
                    "ghij"
                },
                wrappedLines);
        }

        [TestMethod]
        public void DocumentCommentWithNoContents()
        {
            TSBuilder builder = new TSBuilder();
            builder.DocumentationComment(comment => { });
            Assert.AreEqual("", builder.ToString());
        }

        [TestMethod]
        public void DocumentationCommentWithDescription()
        {
            TSBuilder builder = new TSBuilder();
            builder.DocumentationComment(comment =>
            {
                comment.Description("Hello");
            });
            AssertEx.EqualLines(
                "/**\n" +
                " * Hello\n" +
                " */\n",
                builder);
        }

        [TestMethod]
        public void DocumentationCommentWithDescriptionAndParameter()
        {
            TSBuilder builder = new TSBuilder();
            builder.DocumentationComment(comment =>
            {
                comment.Description("This is my description.");
                comment.Parameter("parameterName", "This is my parameter description.");
            });
            AssertEx.EqualLines(
                "/**\n" +
                " * This is my description.\n" +
                " * @param parameterName This is my parameter description.\n" +
                " */\n",
                builder);
        }

        [TestMethod]
        public void DocumentationCommentWithLeadingWhitespaceInDescription()
        {
            TSBuilder builder = new TSBuilder();
            builder.DocumentationComment(comment =>
            {
                comment.Description("This\n  is\n\tmy\ndescription.");
            });
            // The leading whitespace in the description should be preserved, but the AutoRest
            // WordWrap() trims away leading whitespace.
            AssertEx.EqualLines(
                "/**\n" +
                " * This\n" +
                " * is\n" +
                " * my\n" +
                " * description.\n" +
                " */\n",
                builder);
        }

        [TestMethod]
        public void DocumentationCommentWithWrappedDescription()
        {
            TSBuilder builder = new TSBuilder(10);
            builder.DocumentationComment(comment =>
            {
                comment.Description("This is my long description that will get wrapped.");
            });
            // The AutoRest WordWrap() function seems to include the trailing newline character in
            // its wordwrap algorithm. " * This is" is 10 characters long, so it shouldn't get
            // wrapped, but AutoRest WordWrap() wraps it.
            AssertEx.EqualLines(
                "/**\n" +
                " * This\n" +
                " * is my\n" +
                " * long\n" +
                " * description\n" +
                " * that\n" +
                " * will\n" +
                " * get\n" +
                " * wrapped.\n" +
                " */\n",
                builder);
        }
    }
}
