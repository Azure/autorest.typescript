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
    public class BuilderTests
    {
        [TestMethod]
        public void Constructor()
        {
            Builder builder = new Builder();
            Assert.AreEqual("", builder.ToString());
            Assert.IsFalse(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void CreatePositionWithEmptyBuilder()
        {
            Builder builder = new Builder();
            BuilderPosition p = builder.CreatePosition();
            Assert.AreEqual(0, p.CharactersAfterPreviousPosition);
            Assert.AreEqual(0, p.GetIndexInBuilder());
            Assert.AreSame(p, builder.CreatePosition());
        }

        [TestMethod]
        public void CreatePositionWithNonEmptyBuilder()
        {
            Builder builder = new Builder();
            builder.Text("abcd");
            BuilderPosition p = builder.CreatePosition();
            Assert.AreEqual(4, p.CharactersAfterPreviousPosition);
            Assert.AreEqual(4, p.GetIndexInBuilder());
            Assert.AreSame(p, builder.CreatePosition());
        }

        [TestMethod]
        public void CreatePositionWhenAnotherPositionAlreadyExists()
        {
            Builder builder = new Builder();
            BuilderPosition p1 = builder.CreatePosition();
            builder.Text("abcd");
            BuilderPosition p2 = builder.CreatePosition();
            Assert.AreEqual(0, p1.CharactersAfterPreviousPosition);
            Assert.AreEqual(0, p1.GetIndexInBuilder());
            Assert.AreEqual(4, p2.CharactersAfterPreviousPosition);
            Assert.AreEqual(4, p2.GetIndexInBuilder());
        }

        [TestMethod]
        public void HasChangedLinesSinceWithNegativeIndexAndEmptyBuilder()
        {
            Builder builder = new Builder();
            Assert.ThrowsException<IndexOutOfRangeException>(() => builder.HasChangedLinesSince(-1));
        }

        [TestMethod]
        public void HasChangedLinesSinceWithNegativeIndexAndSingleLine()
        {
            Builder builder = new Builder();
            builder.Text("abc");
            Assert.ThrowsException<IndexOutOfRangeException>(() => builder.HasChangedLinesSince(-1));
        }

        [TestMethod]
        public void HasChangedLinesSinceWithNegativeIndexAndMultipleLines()
        {
            Builder builder = new Builder();
            builder.Text("a\nb\nc");
            Assert.ThrowsException<IndexOutOfRangeException>(() => builder.HasChangedLinesSince(-1));
        }

        [TestMethod]
        public void HasChangedLinesSinceWithZeroIndexAndEmptyBuilder()
        {
            Builder builder = new Builder();
            Assert.IsFalse(builder.HasChangedLinesSince(0));
        }

        [TestMethod]
        public void HasChangedLinesSinceWithZeroIndexAndSingleLine()
        {
            Builder builder = new Builder();
            builder.Text("abc");
            Assert.IsFalse(builder.HasChangedLinesSince(0));
        }

        [TestMethod]
        public void HasChangedLinesSinceWithZeroIndexAndMultipleLines()
        {
            Builder builder = new Builder();
            builder.Text("a\nb\nc");
            Assert.IsTrue(builder.HasChangedLinesSince(0));
        }

        [TestMethod]
        public void InsertWithNoPositions()
        {
            Builder builder = new Builder();
            builder.Insert(0, "abcd");
            Assert.AreEqual("abcd", builder.ToString());
        }

        [TestMethod]
        public void InsertAtAnExistingPosition()
        {
            Builder builder = new Builder();
            BuilderPosition p = builder.CreatePosition();
            builder.Insert(0, "abcd");
            Assert.AreEqual("abcd", builder.ToString());
            Assert.AreEqual(4, p.CharactersAfterPreviousPosition);
            Assert.AreEqual(4, p.GetIndexInBuilder());
        }

        [TestMethod]
        public void InsertBeforeAnExistingPosition()
        {
            Builder builder = new Builder();
            builder.Text("abd");
            BuilderPosition p = builder.CreatePosition();
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
            Builder builder = new Builder();
            builder.Text("abc");
            BuilderPosition p = builder.CreatePosition();
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
            Builder builder = new Builder();
            builder.Text("ab");
            BuilderPosition p1 = builder.CreatePosition();
            builder.Text("cd");
            BuilderPosition p2 = builder.CreatePosition();
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
            Builder builder = new Builder();
            builder.InsertNewLine(0);
            Assert.AreEqual("\n", builder.ToString());
        }

        [TestMethod]
        public void LineWithNoArguments()
        {
            Builder builder = new Builder();
            builder.Line();
            Assert.AreEqual("", builder.ToString());
            Assert.IsTrue(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void LineWithNoArgumentsTwice()
        {
            Builder builder = new Builder();
            builder.Line();
            builder.Line();
            Assert.AreEqual("\n", builder.ToString());
            Assert.IsTrue(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void LineWithNull()
        {
            Builder builder = new Builder();
            builder.Line(null);
            Assert.AreEqual("", builder.ToString());
            Assert.IsTrue(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void LineWithNullTwice()
        {
            Builder builder = new Builder();
            builder.Line(null);
            builder.Line(null);
            Assert.AreEqual("\n", builder.ToString());
            Assert.IsTrue(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void LineWithEmpty()
        {
            Builder builder = new Builder();
            builder.Line("");
            Assert.AreEqual("", builder.ToString());
            Assert.IsTrue(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void LineWithEmptyTwice()
        {
            Builder builder = new Builder();
            builder.Line("");
            builder.Line("");
            Assert.AreEqual("\n", builder.ToString());
            Assert.IsTrue(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void LineWithText()
        {
            Builder builder = new Builder();
            builder.Line("Hello");
            Assert.AreEqual("Hello", builder.ToString());
            Assert.IsTrue(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void LineWithTextTwice()
        {
            Builder builder = new Builder();
            builder.Line("Hello");
            builder.Line("World");
            Assert.AreEqual("Hello\nWorld", builder.ToString());
            Assert.IsTrue(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void TextWithNull()
        {
            Builder builder = new Builder();
            builder.Text(null);
            Assert.AreEqual("", builder.ToString());
            Assert.IsFalse(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void TextWithNullTwice()
        {
            Builder builder = new Builder();
            builder.Text(null);
            builder.Text(null);
            Assert.AreEqual("", builder.ToString());
            Assert.IsFalse(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void TextWithEmpty()
        {
            Builder builder = new Builder();
            builder.Text("");
            Assert.AreEqual("", builder.ToString());
            Assert.IsFalse(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void TextWithEmptyTwice()
        {
            Builder builder = new Builder();
            builder.Text("");
            builder.Text("");
            Assert.AreEqual("", builder.ToString());
            Assert.IsFalse(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void TextWithText()
        {
            Builder builder = new Builder();
            builder.Text("a");
            Assert.AreEqual("a", builder.ToString());
            Assert.IsFalse(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void TextWithTextTwice()
        {
            Builder builder = new Builder();
            builder.Text("a");
            builder.Text("b");
            Assert.AreEqual("ab", builder.ToString());
            Assert.IsFalse(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void TextWithNewLine()
        {
            Builder builder = new Builder();
            builder.Text("\n");
            Assert.AreEqual("\n", builder.ToString());
            Assert.IsFalse(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void TextWithNewLineTwice()
        {
            Builder builder = new Builder();
            builder.Text("\n");
            builder.Text("\n");
            Assert.AreEqual("\n\n", builder.ToString());
            Assert.IsFalse(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void WordWrapWithNullLine()
        {
            Builder builder = new Builder();
            IEnumerable<string> wrappedLines = builder.WordWrap(null, false);
            Assert.IsFalse(wrappedLines.Any());
        }

        [TestMethod]
        public void WordWrapWithEmptyLine()
        {
            Builder builder = new Builder();
            IEnumerable<string> wrappedLines = builder.WordWrap("", false);
            Assert.IsFalse(wrappedLines.Any());
        }

        [TestMethod]
        public void WordWrapWithNonEmptyLineShorterThanWordWrapWidth()
        {
            Builder builder = new Builder();
            builder.WordWrapWidth = 20;
            IEnumerable<string> wrappedLines = builder.WordWrap("abcd", false);
            AssertEx.EqualLines(
                "abcd",
                wrappedLines);
        }

        [TestMethod]
        public void WordWrapWithNonEmptyLineWithNoWhitespaceLongerThanWordWrapWidth()
        {
            Builder builder = new Builder();
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
            Builder builder = new Builder();
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
    }
}
