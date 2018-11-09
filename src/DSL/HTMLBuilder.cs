// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using System;

namespace AutoRest.TypeScript.DSL
{
    public class HTMLBuilder : IBuilder
    {
        private readonly IBuilder builder;

        public HTMLBuilder()
            : this(new Builder())
        {
        }

        public HTMLBuilder(IBuilder builder)
        {
            this.builder = builder;
        }

        public bool WriteNewLineBeforeNextText { get => builder.WriteNewLineBeforeNextText; set => builder.WriteNewLineBeforeNextText = value; }
        public int? WordWrapWidth { get => builder.WordWrapWidth; set => builder.WordWrapWidth = value; }

        public void AddIndentToLinesAfter(int index)
        {
            builder.AddIndentToLinesAfter(index);
        }

        public void AddToPrefix(string toAdd)
        {
            builder.AddToPrefix(toAdd);
        }

        public BuilderPosition CreatePosition()
        {
            return builder.CreatePosition();
        }

        public void DecreaseIndent()
        {
            builder.DecreaseIndent();
        }

        public bool HasChangedLinesSince(int index)
        {
            return builder.HasChangedLinesSince(index);
        }

        public void IncreaseIndent()
        {
            builder.IncreaseIndent();
        }

        public void Indent(Action action)
        {
            builder.Indent(action);
        }

        public void Insert(int index, string text)
        {
            builder.Insert(index, text);
        }

        public void InsertNewLine(int index)
        {
            builder.InsertNewLine(index);
        }

        public void Line(string text = "", params object[] formattedArguments)
        {
            builder.Line(text, formattedArguments);
        }

        public void RemoveFromPrefix(string toRemove)
        {
            builder.RemoveFromPrefix(toRemove);
        }

        public void Text(string text, params object[] formattedArguments)
        {
            builder.Text(text, formattedArguments);
        }

        public void WithAddedPrefix(string toAdd, Action action)
        {
            builder.WithAddedPrefix(toAdd, action);
        }

        public override string ToString()
        {
            return builder.ToString();
        }

        public void DOCTYPE()
        {
            Line("<!DOCTYPE html>");
        }

        public void Element(string elementName, bool canBeEmptyElement)
        {
            Element(elementName, canBeEmptyElement, element =>
            {
            });
        }

        public void Element(string elementName, string elementValue)
        {
            Element(elementName, childElement =>
            {
                childElement.Text(elementValue);
            });
        }

        public void Element(string elementName, Action<HTMLElement> elementAction)
        {
            Element(elementName, true, elementAction);
        }

        public void Element(string elementName, bool canBeEmptyElement, Action<HTMLElement> elementAction)
        {
            using (HTMLElement element = new HTMLElement(this, elementName, canBeEmptyElement))
            {
                elementAction?.Invoke(element);
            }
        }

        public void Html(Action<HTMLElement> action)
        {
            Element("html", html =>
            {
                html.Attribute("lang", "en");
                action.Invoke(html);
            });
        }

        public void Head(Action<HTMLElement> action = null)
        {
            Element("head", action);
        }

        public void Title(string title)
        {
            Element("title", title);
        }

        public void Script(string src)
        {
            Element("script", false, script => script.Attribute("src", src));
        }

        public void Script(Action<JSBuilder> action)
        {
            Element("script", false, script =>
            {
                script.Attribute("type", "text/javascript");
                script.JavaScript(action);
            });
        }

        public void Body()
        {
            Element("body", false);
        }

        public void JavaScript(Action<JSBuilder> action)
        {
            action.Invoke(new JSBuilder(this));
        }
    }
}
