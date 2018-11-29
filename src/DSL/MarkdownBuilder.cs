// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
//

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AutoRest.TypeScript.DSL
{
    /// <summary>
    /// A builder class that can be used to generate Markdown text.
    /// </summary>
    public class MarkdownBuilder : IBuilder
    {
        private readonly IBuilder builder;
        private int currentHeaderLevel;

        public MarkdownBuilder()
            : this(new Builder())
        {
        }

        public MarkdownBuilder(IBuilder builder)
        {
            this.builder = builder;
            this.currentHeaderLevel = 0;
        }

        /// <summary>
        /// Whether or not a newline will be written before the next text.
        /// </summary>
        public bool WriteNewLineBeforeNextText { get => builder.WriteNewLineBeforeNextText; set => builder.WriteNewLineBeforeNextText = value; }

        /// <summary>
        /// The word wrap width. A null wordWrapWidth indicates that no word wrapping should take place.
        /// </summary>
        public int? WordWrapWidth { get => builder.WordWrapWidth; set => builder.WordWrapWidth = value; }

        /// <summary>
        /// Create a position object that will track a certain position within the TSBuilder's content.
        /// </summary>
        /// <returns></returns>
        public BuilderPosition CreatePosition()
        {
            return builder.CreatePosition();
        }

        /// <summary>
        /// Get whether or not a new line character has been added to this TSBuilder since the provided character index.
        /// </summary>
        /// <param name="index">The character index to begin the search at.</param>
        /// <returns></returns>
        public bool HasChangedLinesSince(int index)
        {
            return builder.HasChangedLinesSince(index);
        }

        public void Insert(int index, string text)
        {
            builder.Insert(index, text);
        }

        public void InsertNewLine(int index)
        {
            builder.InsertNewLine(index);
        }

        public void AddIndentToLinesAfter(int index)
        {
            builder.AddIndentToLinesAfter(index);
        }

        /// <summary>
        /// Add the provided value to end of the line prefix.
        /// </summary>
        /// <param name="toAdd">The value to add to the line prefix.</param>
        public void AddToPrefix(string toAdd)
        {
            builder.AddToPrefix(toAdd);
        }

        /// <summary>
        /// Remove the provided value from the end of the line prefix.
        /// </summary>
        /// <param name="toRemove">The value to remove from the end of the line prefix.</param>
        public void RemoveFromPrefix(string toRemove)
        {
            builder.RemoveFromPrefix(toRemove);
        }

        /// <summary>
        /// Invoke the provided action with the provided additional prefix.
        /// </summary>
        /// <param name="toAdd">The additional text to add to the line prefix for the duration of the provided action.</param>
        /// <param name="action">The action to invoke with the provided additional line prefix text.</param>
        public void WithAddedPrefix(string toAdd, Action action)
        {
            builder.WithAddedPrefix(toAdd, action);
        }

        /// <summary>
        /// Add a single indentation for the context of the provided action.
        /// </summary>
        /// <param name="action">The action to invoke with an extra level of indentation.</param>
        public void Indent(Action action)
        {
            builder.Indent(action);
        }

        /// <summary>
        /// Add a new level of indentation to the line prefix.
        /// </summary>
        public void IncreaseIndent()
        {
            builder.IncreaseIndent();
        }

        /// <summary>
        /// Remove a level of indentation from the line prefix.
        /// </summary>
        public void DecreaseIndent()
        {
            builder.DecreaseIndent();
        }

        /// <summary>
        /// Add the provided text to this TSBuilder.
        /// </summary>
        /// <param name="text">The text to add.</param>
        public void Text(string text, params object[] formattedArguments)
        {
            builder.Text(text, formattedArguments);
        }

        /// <summary>
        /// Add the provided line of the text to this TSBuilder.
        /// </summary>
        /// <param name="text">The line of text to add to this TSBuilder.</param>
        /// <param name="formattedArguments">Any optional formatted arguments that will be inserted into the text if provided.</param>
        public void Line(string text = "", params object[] formattedArguments)
        {
            builder.Line(text, formattedArguments);
        }

        public override string ToString()
        {
            return builder.ToString();
        }

        /// <summary>
        /// Create a new header.
        /// </summary>
        /// <param name="level">The level of the header (the number of # sounds).</param>
        /// <param name="text"></param>
        public void Header(int level, string text)
        {
            if (level >= 1 && !string.IsNullOrEmpty(text))
            {
                Line($"{Repeat("#", level)} {text}");
            }
        }

        /// <summary>
        /// Add a bullet point list.
        /// </summary>
        /// <param name="items">The items that will be added.</param>
        public void List(params string[] items)
        {
            List((IEnumerable<string>)items);
        }

        /// <summary>
        /// Add a bullet point list.
        /// </summary>
        /// <param name="items">The items that will be added.</param>
        public void List(IEnumerable<string> items)
        {
            if (items != null)
            {
                foreach (string item in items)
                {
                    Line($"- {item}");
                }
            }
        }

        public void IncreaseCurrentHeaderLevel()
        {
            ++currentHeaderLevel;
        }

        public void DecreaseCurrentHeaderLevel()
        {
            --currentHeaderLevel;
        }

        /// <summary>
        /// Create a new section with the provided section header.
        /// </summary>
        /// <param name="headerText">The text that will be put in the section's header.</param>
        /// <param name="action">The code that populates the section.</param>
        public void Section(string headerText, Action action = null)
        {
            IncreaseCurrentHeaderLevel();
            Header(currentHeaderLevel, headerText);
            try
            {
                if (action != null)
                {
                    Line();
                    action.Invoke();
                }
            }
            finally
            {
                DecreaseCurrentHeaderLevel();
            }
        }

        /// <summary>
        /// Add a console section.
        /// </summary>
        /// <param name="commands">The commands that will be output as individual lines within the console section.</param>
        public void Console(params string[] commands)
        {
            Console((IEnumerable<string>)commands);
        }

        /// <summary>
        /// Add a console section.
        /// </summary>
        /// <param name="commands">The commands that will be output as individual lines within the console section.</param>
        public void Console(IEnumerable<string> commands)
        {
            Block("bash", commands);
        }

        public void HTML(params string[] lines)
        {
            HTML((IEnumerable<string>)lines);
        }

        public void HTML(IEnumerable<string> lines)
        {
            Block("html", lines);
        }

        public void HTML(Action<HTMLBuilder> action)
        {
            Line("```html");
            action.Invoke(new HTMLBuilder(this));
            Line("```");
        }

        /// <summary>
        /// Create a new JavaScript code block in the Markdown text.
        /// </summary>
        /// <param name="action">The action that will generate the JavaScript code.</param>
        public void JavaScript(Action<JSBuilder> action)
        {
            Line("```javascript");
            action.Invoke(new JSBuilder(this));
            Line("```");
        }

        /// <summary>
        /// Create a new TypeScript code block in the Markdown text.
        /// </summary>
        /// <param name="action">The action that will generate the TypeScript code.</param>
        public void TypeScript(Action<TSBuilder> action)
        {
            Line("```typescript");
            action.Invoke(new TSBuilder(this));
            Line("```");
        }

        private void Block(IEnumerable<string> lines)
        {
            Block("", lines);
        }

        private void Block(string blockLanguage, IEnumerable<string> lines)
        {
            if (lines != null && lines.Any((string line) => !string.IsNullOrEmpty(line)))
            {
                if (blockLanguage == null)
                {
                    blockLanguage = "";
                }

                Line($"```{blockLanguage}");
                foreach (string line in lines)
                {
                    Line(line);
                }
                Line("```");
            }
        }

        private static string Repeat(string text, int count)
        {
            StringBuilder builder = new StringBuilder();
            for (int i = 0; i < count; ++i)
            {
                builder.Append(text);
            }
            return builder.ToString();
        }
    }
}
