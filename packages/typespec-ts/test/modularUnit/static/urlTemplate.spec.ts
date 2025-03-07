import { assert } from "chai";
import {
  expandUrlTemplate,
  UrlTemplateOptions
} from "../../../static/static-helpers/urlTemplate.js";

function createAssertion(
  context: Record<string, any>,
  option?: UrlTemplateOptions
) {
  return (template: string, expected: string) => {
    assert.equal(expandUrlTemplate(template, context, option), expected);
  };
}
describe("url-template", () => {
  describe("Cases from RFC Spec Examples", () => {
    describe("Level 1", () => {
      const assert = createAssertion({
        var: "value",
        "some.value": "some",
        some_value: "value",
        "Some%20Thing": "hello",
        foo: "bar",
        hello: "Hello World!",
        bool: false,
        toString: "string",
        number: 42,
        float: 3.14,
        undef: undefined,
        null: null,
        chars: "šöäŸœñê€£¥‡ÑÒÓÔÕÖ×ØÙÚàáâãäåæçÿü",
        chinese: "中文",
        surrogatepairs: "\uD834\uDF06"
      });
      it("should be empty string", () => {
        assert("", "");
      });
      it("should be plain url", () => {
        assert("hello/world/five#5", "hello/world/five#5");
      });
      it("should encodes non-alphanumeric chars", () => {
        assert(":/?#@!$&()*+,;='", ":/?#@!$&()*+,;='");
      });
      it("should encode [] correctly", () => {
        assert("[0-9]:[1-8]", "%5B0-9%5D:%5B1-8%5D");
      });
      it("should not double encoded values", () => {
        assert("%20", "%20");
        assert("%xyz", "%25xyz");
        assert("%", "%25");
      });
      it("should encode space by default", () => {
        assert("Hello World!/{foo}", "Hello%20World!/bar");
      });
      it("should expand plain ASCII strings", () => {
        assert("{var}", "value");
      });

      it("should expand non-ASCII strings", () => {
        assert(
          "{chars}",
          "%C5%A1%C3%B6%C3%A4%C5%B8%C5%93%C3%B1%C3%AA%E2%82%AC%C2%A3%C2%A5%E2%80%A1%C3%91%C3%92%C3%93%C3%94%C3%95%C3%96%C3%97%C3%98%C3%99%C3%9A%C3%A0%C3%A1%C3%A2%C3%A3%C3%A4%C3%A5%C3%A6%C3%A7%C3%BF%C3%BC"
        );
        assert("{chinese}", "%E4%B8%AD%E6%96%87");
      });

      it("should expand and encode surrogate pairs correctly", () => {
        assert("{surrogatepairs}", "%F0%9D%8C%86");
      });

      it("should expand expressions with dot and underscore", () => {
        assert("{some.value}", "some");
        assert("{some_value}", "value");
      });

      it("should expand expressions with encoding", () => {
        assert("{Some%20Thing}", "hello");
      });

      it("should expand expressions with reserved JavaScript names", () => {
        assert("{toString}", "string");
      });

      it("should expand variables that are not strings", () => {
        assert("{number}", "42");
        assert("{float}", "3.14");
        assert("{bool}", "false");
      });

      it("should expand variables that are undefined", () => {
        assert("{undef}", "");
      });
      it("should expand variables that are null", () => {
        assert("{null}", "");
      });
      it("should expand multiple values", () => {
        assert("{var}/{foo}", "value/bar");
      });
      it("should escape invalid characters correctly", () => {
        assert("{hello}", "Hello%20World%21");
      });
    });

    describe("Level 2", () => {
      const assert = createAssertion({
        var: "value",
        hello: "Hello World!",
        path: "/foo/bar"
      });

      it("reserved expansion of basic strings", () => {
        assert("{+var}", "value");
        assert("{+hello}", "Hello%20World!");
      });

      it("preserves paths", () => {
        assert("{+path}/here", "/foo/bar/here");
        assert("here?ref={+path}", "here?ref=/foo/bar");
      });
    });

    describe("Level 3", () => {
      const assert = createAssertion({
        var: "value",
        hello: "Hello World!",
        empty: "",
        path: "/foo/bar",
        x: "1024",
        y: "768"
      });

      it("variables without an operator", () => {
        assert("map?{x,y}", "map?1024,768");
      });

      it("should encode !", () => {
        assert("{x,hello,y}", "1024,Hello%20World%21,768");
        assert("{#x,hello,y}", "#1024,Hello%20World!,768");
      });

      it("variables with the reserved expansion operator", () => {
        assert("{+path,x}/here", "/foo/bar,1024/here");
        assert("{+x,hello,y}", "1024,Hello%20World!,768");
      });

      it("variables with the fragment expansion operator", () => {
        assert("{#path,x}/here", "#/foo/bar,1024/here");
      });

      it("variables with the dot operator", () => {
        assert("X{.var}", "X.value");
        assert("X{.x,y}", "X.1024.768");
      });

      it("variables with the path operator", () => {
        assert("{/var}", "/value");
        assert("{/var,x}/here", "/value/1024/here");
      });

      it("variables with the parameter operator", () => {
        assert("{;x,y}", ";x=1024;y=768");
        assert("{;x,y,empty}", ";x=1024;y=768;empty");
      });

      it("variables with the query operator", () => {
        assert("{?x,y}", "?x=1024&y=768");
        assert("{?x,y,empty}", "?x=1024&y=768&empty=");
      });

      it("variables with the query continuation operator", () => {
        assert("?fixed=yes{&x}", "?fixed=yes&x=1024");
        assert("{&x,y,empty}", "&x=1024&y=768&empty=");
      });
    });

    describe("Level 4", () => {
      const assert = createAssertion({
        var: "value",
        hello: "Hello World!",
        path: "/foo/bar",
        list: ["red", "green", "blue"],
        keys: {
          semi: ";",
          dot: ".",
          comma: ","
        },
        chars: {
          ü: "ü"
        },
        number: 2133,
        emptystring: "",
        emptylist: [],
        emptyobject: {},
        undefinedlistitem: [1, , 2],
        undefinedobjectitem: {
          key: null,
          hello: "world",
          empty: "",
          "": "nothing"
        }
      });

      it("variable empty list", () => {
        assert("{/emptylist}", "");
        assert("{/emptylist*}", "");
        assert("{?emptylist*}", "");
        assert("{?emptylist}", "?emptylist=");
      });

      it("variable empty object", () => {
        assert("{/emptyobject}", "");
        assert("{/emptyobject*}", "");
        assert("{?emptyobject*}", "");
        assert("{?emptyobject}", "?emptyobject=");
      });

      it("variable undefined list item", () => {
        assert("{undefinedlistitem}", "1,2");
        assert("{undefinedlistitem*}", "1,2");
        assert(
          "{?undefinedlistitem*}",
          "?undefinedlistitem=1&undefinedlistitem=2"
        );
      });

      it("variable undefined object item", () => {
        assert("{undefinedobjectitem}", "hello,world,empty,,,nothing");
        assert("{undefinedobjectitem*}", "hello=world,empty=,nothing");
      });

      it("variable empty string", () => {
        assert("{emptystring}", "");
        assert("{+emptystring}", "");
        assert("{#emptystring}", "#");
        assert("{.emptystring}", ".");
        assert("{/emptystring}", "/");
        assert("{;emptystring}", ";emptystring");
        assert("{?emptystring}", "?emptystring=");
        assert("{&emptystring}", "&emptystring=");
      });

      it("variable modifiers prefix", () => {
        assert("{var:3}", "val");
        assert("{var:30}", "value");
        assert("{+path:6}/here", "/foo/b/here");
        assert("{#path:6}/here", "#/foo/b/here");
        assert("X{.var:3}", "X.val");
        assert("{/var:1,var}", "/v/value");
        assert("{;hello:5}", ";hello=Hello");
        assert("{?var:3}", "?var=val");
        assert("{&var:3}", "&var=val");
      });

      it("variable modifier prefix converted to string", () => {
        assert("{number:3}", "213");
        assert("{/list*,path:4}", "/red/green/blue/%2Ffoo");
      });

      it("variable list expansion", () => {
        assert("{list}", "red,green,blue");
        assert("{+list}", "red,green,blue");
        assert("{#list}", "#red,green,blue");
        assert("{/list}", "/red,green,blue");
        assert("{;list}", ";list=red,green,blue");
        assert("{.list}", ".red,green,blue");
        assert("{?list}", "?list=red,green,blue");
        assert("{&list}", "&list=red,green,blue");
      });

      it("variable associative array expansion", () => {
        assert("{keys}", "semi,%3B,dot,.,comma,%2C");
        assert("{keys*}", "semi=%3B,dot=.,comma=%2C");
        assert("{+keys}", "semi,;,dot,.,comma,,");
        assert("{#keys}", "#semi,;,dot,.,comma,,");
        assert("{.keys}", ".semi,%3B,dot,.,comma,%2C");
        assert("{/keys}", "/semi,%3B,dot,.,comma,%2C");
        assert("{;keys}", ";keys=semi,%3B,dot,.,comma,%2C");
        assert("{?keys}", "?keys=semi,%3B,dot,.,comma,%2C");
        assert("{&keys}", "&keys=semi,%3B,dot,.,comma,%2C");
      });

      it("variable list explode", () => {
        assert("{list*}", "red,green,blue");
        assert("{+list*}", "red,green,blue");
        assert("{#list*}", "#red,green,blue");
        assert("{/list*}", "/red/green/blue");
        assert("{;list*}", ";list=red;list=green;list=blue");
        assert("{.list*}", ".red.green.blue");
        assert("{?list*}", "?list=red&list=green&list=blue");
        assert("{&list*}", "&list=red&list=green&list=blue");
      });

      it("variable associative array explode", () => {
        assert("{+keys*}", "semi=;,dot=.,comma=,");
        assert("{#keys*}", "#semi=;,dot=.,comma=,");
        assert("{/keys*}", "/semi=%3B/dot=./comma=%2C");
        assert("{;keys*}", ";semi=%3B;dot=.;comma=%2C");
        assert("{?keys*}", "?semi=%3B&dot=.&comma=%2C");
        assert("{&keys*}", "&semi=%3B&dot=.&comma=%2C");
      });

      it("encodes associative arrays correctly", () => {
        assert("{chars*}", "%C3%BC=%C3%BC");
      });
    });
  });

  describe("apiVersion", () => {
    it("should expand apiVersion", () => {
      const assert = createAssertion({
        "api-version": "2023-05-01.17.0",
        timeOut: undefined
      });
      assert(
        "/pools{?api-version,timeOut}",
        "/pools?api-version=2023-05-01.17.0"
      );
    });
  });

  describe("allowReserved option", () => {
    describe("normal path", () => {
      it("should not encode reserved characters if enable allowReserved", () => {
        const assert = createAssertion(
          {
            path: "/foo/bar",
            query: "bar,baz"
          },
          { allowReserved: true }
        );
        assert("{path}/here{?query}", "/foo/bar/here?query=bar,baz");
      });

      it("should encode reserved characters if disable allowReserved", () => {
        const assert = createAssertion(
          {
            path: "/foo/bar",
            query: "bar,baz"
          },
          { allowReserved: false }
        );
        assert("{path}/here{?query}", "%2Ffoo%2Fbar/here?query=bar%2Cbaz");
      });
    });
    describe("reserved path", () => {
      it("should not encode reserved characters if enable allowReserved", () => {
        const assert = createAssertion(
          {
            path: "/foo/bar",
            query: "bar,baz"
          },
          { allowReserved: true }
        );
        assert("{+path}/here{?query}", "/foo/bar/here?query=bar,baz");
      });

      it("should encode reserved characters if disable allowReserved", () => {
        const assert = createAssertion(
          {
            path: "/foo/bar",
            query: "bar,baz"
          },
          { allowReserved: false }
        );
        assert("{+path}/here{?query}", "%2Ffoo%2Fbar/here?query=bar%2Cbaz");
      });
    });
  });

  describe("path parameters", () => {
    describe("simple expansion", () => {
      it("should resolve primitive parameter", () => {
        const assert = createAssertion({
          param: "a"
        });
        assert("/primitive{param}", "/primitivea");
      });
      it("should resolve array parameter", () => {
        const assert = createAssertion({
          param: ["a", "b"]
        });
        assert("/array{param}", "/arraya,b");
      });

      it("should resolve object parameter", () => {
        const assert = createAssertion({
          param: { a: 1, b: 2 }
        });
        assert("/record{param}", "/recorda,1,b,2");
      });
    });

    describe("simple expansion with explode modifier*", () => {
      it("should resolve primitive parameter", () => {
        const assert = createAssertion({
          param: "a"
        });
        assert("/primitive{param*}", "/primitivea");
      });
      it("should resolve array parameter", () => {
        const assert = createAssertion({
          param: ["a", "b"]
        });
        assert("/array{param*}", "/arraya,b");
      });

      it("should resolve object parameter", () => {
        const assert = createAssertion({
          param: { a: 1, b: 2 }
        });
        assert("/record{param*}", "/recorda=1,b=2");
      });
    });

    describe("path expansion", () => {
      it("should resolve primitive parameter", () => {
        const assert = createAssertion({
          param: "a"
        });
        assert("/primitive{/param}", "/primitive/a");
      });
      it("should resolve array parameter", () => {
        const assert = createAssertion({
          param: ["a", "b"]
        });
        assert("/array{/param}", "/array/a,b");
      });

      it("should resolve object parameter", () => {
        const assert = createAssertion({
          param: { a: 1, b: 2 }
        });
        assert("/record{/param}", "/record/a,1,b,2");
      });
    });

    describe("path expansion with explode modifier*", () => {
      it("should resolve primitive parameter", () => {
        const assert = createAssertion({
          param: "a"
        });
        assert("/primitive{/param*}", "/primitive/a");
      });
      it("should resolve array parameter", () => {
        const assert = createAssertion({
          param: ["a", "b"]
        });
        assert("/array{/param*}", "/array/a/b");
      });

      it("should resolve object parameter", () => {
        const assert = createAssertion({
          param: { a: 1, b: 2 }
        });
        assert("/record{/param*}", "/record/a=1/b=2");
      });
    });
  });

  describe("Advanced cases", () => {
    it("should not double encode values", () => {
      const assert = createAssertion({
        bar: "bar/hello%20world"
      });
      assert("/foo/{+bar}", "/foo/bar/hello%20world");
    });
    it("should encode spaces", () => {
      const assert = createAssertion({
        bar: "bar/hello world"
      });
      assert("/foo/{+bar}", "/foo/bar/hello%20world");
    });
  });
});
