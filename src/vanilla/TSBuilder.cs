// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
// 

using AutoRest.Core.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AutoRest.TypeScript
{
    /// <summary>
    /// A StringBuilder that has helper methods for building TypeScript code.
    /// </summary>
    public class TSBuilder
    {
        private const string singleIndent = "  ";

        private readonly StringBuilder contents = new StringBuilder();
        private readonly StringBuilder linePrefix = new StringBuilder();

        private int? wordWrapWidth;

        private const int multiLineCommentWordWrapWidth = 100;

        private State currentState;

        private enum State
        {
            EmptyLine,
            LineWithText,
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
        /// Set the word wrap width. A null wordWrapWidth indicates that no word wrapping should take place.
        /// </summary>
        /// <param name="wordWrapWidth">The new word wrap width.</param>
        public void SetWordWrapWidth(int? wordWrapWidth)
        {
            this.wordWrapWidth = wordWrapWidth;
        }

        /// <summary>
        /// Invoke the provided action with the provided word wrap width.
        /// </summary>
        /// <param name="wordWrapWidth">The word wrap width to apply to the provided action.</param>
        /// <param name="action">The action to invoke with the provided word wrap width.</param>
        private void WithWordWrap(int wordWrapWidth, Action action)
        {
            int? previousWordWrapWidth = this.wordWrapWidth;
            SetWordWrapWidth(wordWrapWidth);
            try
            {
                action.Invoke();
            }
            finally
            {
                SetWordWrapWidth(previousWordWrapWidth);
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
        private IEnumerable<string> WordWrap(string line, bool addPrefix)
        {
            List<string> lines = new List<string>();

            if (wordWrapWidth == null)
            {
                lines.Add(line);
            }
            else
            {
                // Subtract an extra column from the word wrap width because columns generally are
                // 1 -based instead of 0-based.
                int wordWrapIndexMinusLinePrefixLength = wordWrapWidth.Value - (addPrefix ? linePrefix.Length : 0) - 1;
                IEnumerable<string> wrappedLines = line.WordWrap(wordWrapIndexMinusLinePrefixLength);
                foreach (string wrappedLine in wrappedLines.SkipLast(1))
                {
                    lines.Add(wrappedLine + "\n");
                }

                string lastWrappedLine = wrappedLines.Last();
                if (!string.IsNullOrEmpty(lastWrappedLine))
                {
                    lines.Add(lastWrappedLine);
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

            bool addPrefix = (currentState == State.EmptyLine);

            List<string> lines = new List<string>();

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
                    int newLineCharacterIndex = text.IndexOf('\n', lineStartIndex);
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

            currentState = text.EndsWith('\n') ? State.EmptyLine : State.LineWithText;
        }

        /// <summary>
        /// Add the provided line of the text to this TSBuilder.
        /// </summary>
        /// <param name="text">The line of text to add to this TSBuilder.</param>
        /// <param name="formattedArguments">Any optional formatted arguments that will be inserted into the text if provided.</param>
        public void Line(string text = "", params object[] formattedArguments)
        {
            Text(text + Environment.NewLine, formattedArguments);
        }

        /// <summary>
        /// Get whether or not the provided lines has any lines that are not null and not whitespace.
        /// </summary>
        /// <param name="lines">The lines to check.</param>
        /// <returns>Whether or not the provided lines has any lines that are not null and not whitespace.</returns>
        public bool AnyCommentLines(IEnumerable<string> lines)
        {
            return lines != null && lines.Any((string line) => !string.IsNullOrWhiteSpace(line));
        }

        private void Comment(string commentHeader, IEnumerable<string> lines)
        {
            if (AnyCommentLines(lines))
            {
                Line(commentHeader);
                WithAddedPrefix(" * ", () =>
                WithWordWrap(multiLineCommentWordWrapWidth, () =>
                {
                    foreach (string line in lines)
                    {
                        if (line != null)
                        {
                            Line(line);
                        }
                    }
                }));
                Line(" */");
            }
        }

        /// <summary>
        /// Add a /* */ comment to this TSBuilder. If no non-null and non-empty lines are provided, then nothing will be added.
        /// </summary>
        /// <param name="lines">The lines to add. Null lines will be ignored.</param>
        public void Comment(params string[] lines)
        {
            Comment("/*", lines);
        }

        /// <summary>
        /// Add a /** */ comment to this TSBuilder. If no non-null and non-empty lines are provided, then nothing will be added.
        /// </summary>
        /// <param name="lines">The lines to add. Null lines will be ignored.</param>
        public void DocumentationComment(params string[] lines)
        {
            Comment("/**", lines);
        }

        /// <summary>
        /// Add a JSON array to this TSBuilder that uses the provided action to add the array's elements.
        /// </summary>
        /// <param name="action">The action that will be invoked to add the array's elements.</param>
        public void Array(Action<TSArray> action)
        {
            Text("[");
            Indent(() =>
            {
                using (TSArray tsArray = new TSArray(this))
                {
                    action.Invoke(tsArray);
                }
            });
            Text("]");
        }

        /// <summary>
        /// Add a JSON object to this TSBuilder that uses the provided action to add the object's properties.
        /// </summary>
        /// <param name="action">The action that will be invoked to add the object's properties.</param>
        public void Object(Action<TSObject> action)
        {
            Text($"{{");
            Indent(() =>
            {
                using (TSObject tsObject = new TSObject(this))
                {
                    action.Invoke(tsObject);
                }
            });
            Text($"}}");
        }

        /// <summary>
        /// Surround the provided text with double-quotes and add it to this TSBuilder.
        /// </summary>
        /// <param name="text">The text to double-quote and add to this TSBuilder.</param>
        public void QuotedString(string text)
        {
            Text($"\"{text}\"");
        }

        /// <summary>
        /// Add the provided boolean value to this TSBuilder.
        /// </summary>
        /// <param name="value"></param>
        public void Boolean(bool value)
        {
            Text(value ? "true" : "false");
        }

        /// <summary>
        /// Add a function call with the provided functionName to this TSBuilder. The provided
        /// action will be used to create the arguments for the function call.
        /// </summary>
        /// <param name="functionName">The name of the function to invoke.</param>
        /// <param name="argumentListAction">The action to invoke to populate the arguments of the function.</param>
        public void FunctionCall(string functionName, Action<TSArgumentList> argumentListAction)
        {
            Text($"{functionName}(");
            argumentListAction.Invoke(new TSArgumentList(this));
            Text(")");
        }
    }
}