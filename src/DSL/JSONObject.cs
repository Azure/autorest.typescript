using System;
using System.Collections.Generic;

namespace AutoRest.TypeScript.DSL
{
    public class JSONObject
    {
        private readonly JSObject jsObject;

        public JSONObject(JSObject jsObject)
        {
            this.jsObject = jsObject;
        }

        public void StringProperty(string propertyName, string propertyValue)
        {
            propertyName = JSBuilder.Quote(propertyName);
            propertyValue = JSBuilder.Quote(propertyValue);
            jsObject.TextProperty(propertyName, propertyValue);
        }

        public void ObjectProperty(string propertyName, Action<JSONObject> propertyValueAction)
        {
            propertyName = JSBuilder.Quote(propertyName);
            jsObject.ObjectProperty(propertyName, (JSObject jsObject) =>
            {
                propertyValueAction.Invoke(new JSONObject(jsObject));
            });
        }

        public void StringArrayProperty(string propertyName, IEnumerable<string> arrayElements)
        {
            propertyName = JSBuilder.Quote(propertyName);
            jsObject.QuotedStringArrayProperty(propertyName, arrayElements);
        }

        public void BooleanProperty(string propertyName, bool propertyValue)
        {
            propertyName = JSBuilder.Quote(propertyName);
            jsObject.BooleanProperty(propertyName, propertyValue);
        }
    }
}
