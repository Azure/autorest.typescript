// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
//

using AutoRest.Core.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AutoRest.TypeScript.DSL
{
    public class Builder : IBuilder
    {
        private const string newLine = "\n";
        private const string singleIndent = "  ";

        private readonly StringBuilder contents = new StringBuilder();
        private readonly StringBuilder linePrefix = new StringBuilder();
        private readonly List<BuilderPosition> positions = new List<BuilderPosition>();

        /// <summary>
        /// Whether or not a newline will be written before the next text.
        /// </summary>
        public bool WriteNewLineBeforeNextText { get; set; }

        /// <summary>
        /// The word wrap width. A null wordWrapWidth indicates that no word wrapping should take place.
        /// </summary>
        public int? WordWrapWidth { get; set; }

        /// <summary>
        /// Create a position object that will track a certain position within the TSBuilder's content.
        /// </summary>
        /// <returns></returns>
        public BuilderPosition CreatePosition()
        {
            BuilderPosition position;
            int contentLength = contents.Length;
            if (!positions.Any())
            {
                position = new BuilderPosition(null, contentLength);
                positions.Add(position);
            }
            else
            {
                position = positions.Last();
                int lastPositionIndexInBuilder = position.GetIndexInBuilder();
                if (lastPositionIndexInBuilder != contentLength)
                {
                    position = new BuilderPosition(position, contentLength - lastPositionIndexInBuilder);
                    positions.Add(position);
                }
            }
            return position;
        }

        /// <summary>
        /// Get whether or not a new line character has been added to this TSBuilder since the provided character index.
        /// </summary>
        /// <param name="index">The character index to begin the search at.</param>
        /// <returns></returns>
        public bool HasChangedLinesSince(int index)
        {
            bool result = false;
            for (int i = index; i < contents.Length; ++i)
            {
                if (contents[i] == '\n')
                {
                    result = true;
                    break;
                }
            }
            return result;
        }

        public void Insert(int index, string text)
        {
            if (positions.Any())
            {
                int positionIndex = 0;
                foreach (BuilderPosition position in positions)
                {
                    if (index <= positionIndex + position.CharactersAfterPreviousPosition)
                    {
                        position.CharactersAfterPreviousPosition += text.Length;
                        break;
                    }
                    else
                    {
                        positionIndex += position.CharactersAfterPreviousPosition;
                    }
                }
            }
            contents.Insert(index, text);
        }

        public void InsertNewLine(int index)
        {
            Insert(index, newLine + linePrefix);
        }

        public void AddIndentToLinesAfter(int index)
        {
            for (int i = index; i < contents.Length; ++i)
            {
                if (contents[i] == '\n' && i + 1 < contents.Length && contents[i + 1] != '\n')
                {
                    contents.Insert(i + 1, singleIndent);
                }
            }
        }

        /// <summary>
        /// Get the text that has been added to this TSBuilder.
        /// </summary>
        /// <returns>The text that has been added to this TSBuilder.</returns>
        public override string ToString()
        {
            return contents.ToString();
        }

        /// <summary>
        /// Add the provided value to end of the line prefix.
        /// </summary>
        /// <param name="toAdd">The value to add to the line prefix.</param>
        public void AddToPrefix(string toAdd)
        {
            linePrefix.Append(toAdd);
        }

        /// <summary>
        /// Remove the provided value from the end of the line prefix.
        /// </summary>
        /// <param name="toRemove">The value to remove from the end of the line prefix.</param>
        public void RemoveFromPrefix(string toRemove)
        {
            int toRemoveLength = toRemove.Length;
            if (linePrefix.Length <= toRemoveLength)
            {
                linePrefix.Clear();
            }
            else
            {
                linePrefix.Remove(linePrefix.Length - toRemoveLength, toRemoveLength);
            }
        }

        /// <summary>
        /// Invoke the provided action with the provided additional prefix.
        /// </summary>
        /// <param name="toAdd">The additional text to add to the line prefix for the duration of the provided action.</param>
        /// <param name="action">The action to invoke with the provided additional line prefix text.</param>
        public void WithAddedPrefix(string toAdd, Action action)
        {
            AddToPrefix(toAdd);
            try
            {
                action.Invoke();
            }
            finally
            {
                RemoveFromPrefix(toAdd);
            }
        }

        /// <summary>
        /// Add a single indentation for the context of the provided action.
        /// </summary>
        /// <param name="action">The action to invoke with an extra level of indentation.</param>
        public void Indent(Action action)
        {
            IncreaseIndent();
            try
            {
                action.Invoke();
            }
            finally
            {
                DecreaseIndent();
            }
        }

        /// <summary>
        /// Add a new level of indentation to the line prefix.
        /// </summary>
        public void IncreaseIndent()
            => AddToPrefix(singleIndent);

        /// <summary>
        /// Remove a level of indentation from the line prefix.
        /// </summary>
        public void DecreaseIndent()
            => RemoveFromPrefix(singleIndent);

        /// <summary>
        /// Wrap the provided line using the existing wordWrapWidth.
        /// </summary>
        /// <param name="line">The line to wrap.</param>
        /// <param name="addPrefix">Whether or not to add the line prefix to the wrapped lines.</param>
        /// <returns>The wrapped lines.</returns>
        internal IEnumerable<string> WordWrap(string line, bool addPrefix)
        {
            List<string> lines = new List<string>();

            if (!string.IsNullOrEmpty(line))
            {
                if (WordWrapWidth == null)
                {
                    lines.Add(line);
                }
                else
                {
                    // Subtract an extra column from the word wrap width because columns generally are
                    // 1 -based instead of 0-based.
                    int wordWrapIndexMinusLinePrefixLength = WordWrapWidth.Value - (addPrefix ? linePrefix.Length : 0) - 1;

                    IEnumerable<string> wrappedLines = line.WordWrap(wordWrapIndexMinusLinePrefixLength);
                    foreach (string wrappedLine in wrappedLines.SkipLast(1))
                    {
                        lines.Add(wrappedLine + newLine);
                    }

                    string lastWrappedLine = wrappedLines.Last();
                    if (!string.IsNullOrEmpty(lastWrappedLine))
                    {
                        lines.Add(lastWrappedLine);
                    }
                }
            }
            return lines;
        }

        /// <summary>
        /// Add the provided text to this TSBuilder.
        /// </summary>
        /// <param name="text">The text to add.</param>
        public void Text(string text, params object[] formattedArguments)
        {
            if (!string.IsNullOrEmpty(text) && formattedArguments != null && formattedArguments.Length > 0)
            {
                text = string.Format(text, formattedArguments);
            }

            bool addPrefix = WriteNewLineBeforeNextText;

            List<string> lines = new List<string>();

            if (WriteNewLineBeforeNextText)
            {
                WriteNewLineBeforeNextText = false;
                contents.Append(newLine);
            }

            if (string.IsNullOrEmpty(text))
            {
                lines.Add("");
            }
            else
            {
                int lineStartIndex = 0;
                int textLength = text.Length;
                while (lineStartIndex < textLength)
                {
                    int newLineCharacterIndex = text.IndexOf(newLine, lineStartIndex);
                    if (newLineCharacterIndex == -1)
                    {
                        string line = text.Substring(lineStartIndex);
                        IEnumerable<string> wrappedLines = WordWrap(line, addPrefix);
                        lines.AddRange(wrappedLines);
                        lineStartIndex = textLength;
                    }
                    else
                    {
                        int nextLineStartIndex = newLineCharacterIndex + 1;
                        string line = text.Substring(lineStartIndex, nextLineStartIndex - lineStartIndex);
                        IEnumerable<string> wrappedLines = WordWrap(line, addPrefix);
                        lines.AddRange(wrappedLines);
                        lineStartIndex = nextLineStartIndex;
                    }
                }
            }

            string prefix = addPrefix ? linePrefix.ToString() : null;
            foreach (string line in lines)
            {
                if (addPrefix && !string.IsNullOrWhiteSpace(prefix) || (!string.IsNullOrEmpty(prefix) && !string.IsNullOrWhiteSpace(line)))
                {
                    contents.Append(prefix);
                }

                contents.Append(line);
            }
        }

        /// <summary>
        /// Add the provided line of the text to this TSBuilder.
        /// </summary>
        /// <param name="text">The line of text to add to this TSBuilder.</param>
        /// <param name="formattedArguments">Any optional formatted arguments that will be inserted into the text if provided.</param>
        public void Line(string text = "", params object[] formattedArguments)
        {
            Text(text, formattedArguments);
            WriteNewLineBeforeNextText = true;
        }
    }
}
