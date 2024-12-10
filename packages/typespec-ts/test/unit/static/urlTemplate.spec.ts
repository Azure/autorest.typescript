import { assert } from "chai";
import { parseTemplate } from "../../../static/static-helpers/urlTemplate.js";

function createTestContext(context: any) {
    return (template: string, result: string) => {
        assert.equal(parseTemplate(template).expand(context), result);
    };
}
describe("url-template", () => {
    describe("Level 1", () => {
        const assert = createTestContext({
            'var': 'value',
            'some.value': 'some',
            'some_value': 'value',
            'Some%20Thing': 'hello',
            'foo': 'bar',
            'hello': 'Hello World!',
            'bool': false,
            'toString': 'string',
            'number': 42,
            'float': 3.14,
            'undef': undefined,
            'null': null,
            'chars': 'šöäŸœñê€£¥‡ÑÒÓÔÕÖ×ØÙÚàáâãäåæçÿü',
            'surrogatepairs': '\uD834\uDF06'
        });
        it("empty string", () => {
            assert('', '');
        });
        it("encodes non expressions correctly", () => {
            assert('hello/world', 'hello/world');
            assert('Hello World!/{foo}', 'Hello%20World!/bar');
            assert(':/?#[]@!$&()*+,;=\'', ':/?#[]@!$&()*+,;=\'');
            assert('%20', '%20');
            assert('%xyz', '%25xyz');
            assert('%', '%25');
        });
        it('expand plain ASCII strings', () => {
            assert('{var}', 'value');
        });

        it('expand non-ASCII strings', () => {
            assert('{chars}', '%C5%A1%C3%B6%C3%A4%C5%B8%C5%93%C3%B1%C3%AA%E2%82%AC%C2%A3%C2%A5%E2%80%A1%C3%91%C3%92%C3%93%C3%94%C3%95%C3%96%C3%97%C3%98%C3%99%C3%9A%C3%A0%C3%A1%C3%A2%C3%A3%C3%A4%C3%A5%C3%A6%C3%A7%C3%BF%C3%BC');
        });

        it('expands and encodes surrogate pairs correctly', () => {
            assert('{surrogatepairs}', '%F0%9D%8C%86');
        });

        it('expand expressions with dot and underscore', () => {
            assert('{some.value}', 'some');
            assert('{some_value}', 'value');
        });

        it('expand expressions with encoding', () => {
            assert('{Some%20Thing}', 'hello');
        });

        it('expand expressions with reserved JavaScript names', () => {
            assert('{toString}', 'string');
        });

        it('expand variables that are not strings', () => {
            assert('{number}', '42');
            assert('{float}', '3.14');
            assert('{bool}', 'false');
        });

        it('expand variables that are undefined or null', () => {
            assert('{undef}', '');
            assert('{null}', '');
        });

        it('expand multiple values', () => {
            assert('{var}/{foo}', 'value/bar');
        });

        it('escape invalid characters correctly', () => {
            assert('{hello}', 'Hello%20World%21');
        });
    });
});
