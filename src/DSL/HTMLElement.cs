// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using System;

namespace AutoRest.TypeScript.DSL
{
    public class HTMLElement : IDisposable
    {
        private readonly HTMLBuilder builder;
        private readonly string elementName;
        private readonly bool canBeEmptyElement;

        public enum State
        {
            Start,
            Attributes,
            ChildElements,
            ChildText,
            End
        }

        public HTMLElement(HTMLBuilder builder, string elementName, bool canBeEmptyElement)
        {
            this.builder = builder;
            this.elementName = elementName;
            this.canBeEmptyElement = canBeEmptyElement;
            this.CurrentState = State.Start;
            builder.Text($"<{elementName}");
        }

        public State CurrentState { get; private set; }


        private void SetCurrentState(State newState)
        {
            switch (newState)
            {
                case State.Attributes:
                    switch (CurrentState)
                    {
                        case State.ChildElements:
                            throw new Exception("Can't add HTML element attributes after a child element has been added.");

                        case State.ChildText:
                            throw new Exception("Can't add HTML element attributes after element text has been added.");

                        case State.End:
                            throw new Exception("Can't add HTML element attributes after the element has been closed.");
                    }
                    break;

                case State.ChildElements:
                    switch (CurrentState)
                    {
                        case State.Start:
                        case State.Attributes:
                            builder.Line(">");
                            break;

                        case State.End:
                            throw new Exception("Can't add HTML child elements after the element has been closed.");
                    }
                    break;

                case State.ChildText:
                    switch (CurrentState)
                    {
                        case State.Start:
                        case State.Attributes:
                            builder.Text(">");
                            break;

                        case State.End:
                            throw new Exception("Can't add HTML child elements after the element has been closed.");
                    }
                    break;

                case State.End:
                    switch (CurrentState)
                    {
                        case State.Start:
                        case State.Attributes:
                            if (canBeEmptyElement)
                            {
                                builder.Line("/>");
                            }
                            else
                            {
                                builder.Line($"></{elementName}>");
                            }
                            break;

                        case State.ChildElements:
                        case State.ChildText:
                            builder.Line($"</{elementName}>");
                            break;
                    }
                    break;
            }
            CurrentState = newState;
        }

        public void Attribute(string attributeName, string attributeValue)
        {
            SetCurrentState(State.Attributes);
            builder.Text($" {attributeName}=\"{attributeValue}\"");
        }

        public void Text(string text)
        {
            if (!string.IsNullOrEmpty(text))
            {
                SetCurrentState(State.ChildText);
                builder.Text(text);
            }
        }

        public void ChildElement(string elementName, bool canBeEmptyElement = true)
        {
            ChildElement(elementName, canBeEmptyElement, element =>
            {
            });
        }

        public void ChildElement(string elementName, string elementValue)
        {
            ChildElement(elementName, childElement =>
            {
                childElement.Text(elementValue);
            });
        }

        public void ChildElement(string elementName, Action<HTMLElement> childElementAction)
        {
            SetCurrentState(State.ChildElements);
            builder.Indent(() =>
            {
                builder.Element(elementName, childElementAction);
            });
        }

        public void ChildElement(string elementName, bool canBeEmptyElement, Action<HTMLElement> childElementAction)
        {
            SetCurrentState(State.ChildElements);
            builder.Indent(() =>
            {
                builder.Element(elementName, canBeEmptyElement, childElementAction);
            });
        }

        public void Head(Action<HTMLElement> action = null)
        {
            SetCurrentState(State.ChildElements);
            builder.Indent(() =>
            {
                builder.Head(action);
            });
        }

        public void Title(string title)
        {
            SetCurrentState(State.ChildElements);
            builder.Indent(() =>
            {
                builder.Title(title);
            });
        }

        public void Script(string src)
        {
            SetCurrentState(State.ChildElements);
            builder.Indent(() =>
            {
                builder.Script(src);
            });
        }

        public void Script(Action<JSBuilder> action)
        {
            SetCurrentState(State.ChildElements);
            builder.Indent(() =>
            {
                builder.Script(action);
            });
        }

        public void JavaScript(Action<JSBuilder> action)
        {
            SetCurrentState(State.ChildText);
            builder.Indent(() =>
            {
                builder.Line();
                builder.JavaScript(action);
            });
        }

        public void Body()
        {
            SetCurrentState(State.ChildElements);
            builder.Indent(() =>
            {
                builder.Body();
            });
        }

        public void Dispose()
        {
            SetCurrentState(State.End);
        }
    }
}
