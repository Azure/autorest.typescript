using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace AutoRest.TypeScript.DSL
{
    [TestClass]

    public class TSParameterTests
    {
        [TestMethod]
        public void ConstructorShouldSetSingleTypeProperly()
        {
            TSParameter parameter = new TSParameter("parameterName", new[] { "MyType" }, "description");

            Assert.AreEqual("MyType", parameter.Type);
        }

        [TestMethod]
        public void ConstructorShouldUnionizeTypesProperly()
        {
            TSParameter parameter = new TSParameter("parameterName", new[] { "MyType", "AnotherType", "OneMoreType" }, "description");

            Assert.AreEqual("MyType | AnotherType | OneMoreType", parameter.Type);
        }

        [TestMethod]
        public void UnionThrowsIfNoElementsPassed()
        {
            Assert.ThrowsException<ArgumentException>(() => TSParameter.Union(new TSParameter[] { }));
        }

        [TestMethod]
        public void UnionThrowsIfOneElementPassed()
        {
            Assert.ThrowsException<ArgumentException>(() => TSParameter.Union(new TSParameter("name", "type", "description")));
        }

        [TestMethod]
        public void UnionGeneratesCorrectName()
        {
            TSParameter firstParameter = new TSParameter("Name", "Type", "description");
            TSParameter secondParameter = new TSParameter("otherName", "Type", "description");
            TSParameter thirdParameter = new TSParameter("moreComplicatedName", "Type", "description");

            TSParameter union = TSParameter.Union(firstParameter, secondParameter, thirdParameter);

            Assert.AreEqual("NameOrOtherNameOrMoreComplicatedName", union.Name);
        }

        [TestMethod]
        public void UnionGeneratesCorrectType()
        {
            TSParameter firstParameter = new TSParameter("Name", "Type", "description");
            TSParameter secondParameter = new TSParameter("Name", "OtherType", "description");
            TSParameter thirdParameter = new TSParameter("Name", "Type", "description");

            TSParameter union = TSParameter.Union(firstParameter, secondParameter, thirdParameter);

            Assert.AreEqual("Type | OtherType", union.Type);
        }


        [TestMethod]
        public void UnionGeneratesCorrectDescription()
        {
            TSParameter firstParameter = new TSParameter("Name", "Type", "The description");
            TSParameter secondParameter = new TSParameter("Name", "Type", "Some other Description");
            TSParameter thirdParameter = new TSParameter("Name", "Type", "Third description");

            TSParameter union = TSParameter.Union(firstParameter, secondParameter, thirdParameter);

            Assert.AreEqual("The description or some other Description or third description", union.Description);
        }
    }
}
