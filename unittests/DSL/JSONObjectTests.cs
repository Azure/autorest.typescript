using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace AutoRest.TypeScript.DSL
{
    [TestClass]
    public class JSONObjectTests
    {
        [TestMethod]
        public void StringPropertyWithNullPropertyName()
        {
            JSONBuilder builder = new JSONBuilder();
            builder.Object(jsonObject =>
            {
                jsonObject.StringProperty(null, "apples");
            });
            AssertEx.EqualLines(new[]
                {
                    "{",
                    "  \"\": \"apples\"",
                    "}"
                },
                builder);
        }

        [TestMethod]
        public void StringPropertyWithEmptyPropertyName()
        {
            JSONBuilder builder = new JSONBuilder();
            builder.Object(jsonObject =>
            {
                jsonObject.StringProperty("", "apples");
            });
            AssertEx.EqualLines(new[]
                {
                    "{",
                    "  \"\": \"apples\"",
                    "}"
                },
                builder);
        }

        [TestMethod]
        public void StringPropertyWithNullPropertyValue()
        {
            JSONBuilder builder = new JSONBuilder();
            builder.Object(jsonObject =>
            {
                jsonObject.StringProperty("bananas", null);
            });
            AssertEx.EqualLines(new[]
                {
                    "{",
                    "  \"bananas\": \"\"",
                    "}"
                },
                builder);
        }

        [TestMethod]
        public void StringPropertyWithEmptyPropertyValue()
        {
            JSONBuilder builder = new JSONBuilder();
            builder.Object(jsonObject =>
            {
                jsonObject.StringProperty("bananas", "");
            });
            AssertEx.EqualLines(new[]
                {
                    "{",
                    "  \"bananas\": \"\"",
                    "}"
                },
                builder);
        }

        [TestMethod]
        public void StringPropertyWithNonEmptyPropertyNameAndValue()
        {
            JSONBuilder builder = new JSONBuilder();
            builder.Object(jsonObject =>
            {
                jsonObject.StringProperty("bananas", "apples");
            });
            AssertEx.EqualLines(new[]
                {
                    "{",
                    "  \"bananas\": \"apples\"",
                    "}"
                },
                builder);
        }

        [TestMethod]
        public void StringPropertyWithSingleQuotedPropertyName()
        {
            JSONBuilder builder = new JSONBuilder();
            builder.Object(jsonObject =>
            {
                jsonObject.StringProperty("'bananas'", "apples");
            });
            AssertEx.EqualLines(new[]
                {
                    "{",
                    "  'bananas': \"apples\"",
                    "}"
                },
                builder);
        }

        [TestMethod]
        public void StringPropertyWithDoubleQuotedPropertyName()
        {
            JSONBuilder builder = new JSONBuilder();
            builder.Object(jsonObject =>
            {
                jsonObject.StringProperty("\"bananas\"", "apples");
            });
            AssertEx.EqualLines(new[]
                {
                    "{",
                    "  \"bananas\": \"apples\"",
                    "}"
                },
                builder);
        }

        [TestMethod]
        public void StringPropertyWithSingleQuotedPropertyValue()
        {
            JSONBuilder builder = new JSONBuilder();
            builder.Object(jsonObject =>
            {
                jsonObject.StringProperty("bananas", "'apples'");
            });
            AssertEx.EqualLines(new[]
                {
                    "{",
                    "  \"bananas\": 'apples'",
                    "}"
                },
                builder);
        }

        [TestMethod]
        public void StringPropertyWithDoubleQuotedPropertyValue()
        {
            JSONBuilder builder = new JSONBuilder();
            builder.Object(jsonObject =>
            {
                jsonObject.StringProperty("bananas", "\"apples\"");
            });
            AssertEx.EqualLines(new[]
                {
                    "{",
                    "  \"bananas\": \"apples\"",
                    "}"
                },
                builder);
        }

        [TestMethod]
        public void StringPropertyWithForwardSlashInPropertyName()
        {
            JSONBuilder builder = new JSONBuilder();
            builder.Object(jsonObject =>
            {
                jsonObject.StringProperty("ban/anas", "'apples'");
            });
            AssertEx.EqualLines(new[]
                {
                    "{",
                    "  \"ban/anas\": 'apples'",
                    "}"
                },
                builder);
        }

        [TestMethod]
        public void StringPropertyWithForwardSlashInPropertyValue()
        {
            JSONBuilder builder = new JSONBuilder();
            builder.Object(jsonObject =>
            {
                jsonObject.StringProperty("bananas", "\"app/les\"");
            });
            AssertEx.EqualLines(new[]
                {
                    "{",
                    "  \"bananas\": \"app/les\"",
                    "}"
                },
                builder);
        }

        [TestMethod]
        public void StringPropertyWithDoubleQuotedPropertyNameWithForwardSlash()
        {
            JSONBuilder builder = new JSONBuilder();
            builder.Object(jsonObject =>
            {
                jsonObject.StringProperty("\"ban/anas\"", "'apples'");
            });
            AssertEx.EqualLines(new[]
                {
                    "{",
                    "  \"ban/anas\": 'apples'",
                    "}"
                },
                builder);
        }

        [TestMethod]
        public void StringPropertyWithDoubleQuotedPropertyValueWithForwardSlash()
        {
            JSONBuilder builder = new JSONBuilder();
            builder.Object(jsonObject =>
            {
                jsonObject.StringProperty("bananas", "\"app/les\"");
            });
            AssertEx.EqualLines(new[]
                {
                    "{",
                    "  \"bananas\": \"app/les\"",
                    "}"
                },
                builder);
        }
    }
}
