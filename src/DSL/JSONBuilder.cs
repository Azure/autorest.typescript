using System;

namespace AutoRest.TypeScript.DSL
{
    /// <summary>
    /// A StringBuilder that has helper methods for building JSON documents.
    /// </summary>
    public class JSONBuilder : IBuilder
    {
        private readonly JSBuilder builder;

        public JSONBuilder()
            : this(new JSBuilder())
        {
        }

        public JSONBuilder(IBuilder builder)
            : this(new JSBuilder(builder))
        {
        }

        public JSONBuilder(JSBuilder builder)
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

        public void Object(Action<JSONObject> objectAction)
        {
            builder.Object(jsObject =>
            {
                objectAction.Invoke(new JSONObject(jsObject));
            });
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
    }
}
