# <img align="center" src="./images/logo.png">  Troubleshooting

## Generation Errors

There are two broad kinds of errors you can run into when generating: one kind is thrown earlier in the AutoRest pipeline and has to do with malformed swaggers (see [our main docs][main_docs] for more information). The other kind is thrown by the Typescript generator itself.

The general AutoRest errors are thrown like this

```
FATAL: Error: Enum types of 'object' and format 'undefined' are not supported. Correct your input (HdiNodeTypes).
  Error: Plugin modelerfour reported failure.
```

While the Typescript generator throws Typescript errors, such as:

```
ERROR: [main.Process:52] Typescript generator raised an exception
Traceback (most recent call last):
  ...
Unexpected value type: FakeValueType
  Error: Plugin codegen reported failure.
```

Both of these issues should give you enough information to fix the error. If not, please let us know in either the [main repo][autorest_issues], or in the [Typescript repo][autorest_typescript_issues]. Also let us know if you believe
there are erroneous errors being thrown.

## Debugging

Our [main docs][main_debugging] show you how to pass in flags (`--verbose` / `--debug`) to get more debugging logs for your AutoRest calls.

If you'd like to actually debug through our code, you need to first clone the `v6` branch of our [repo][repo], then include flag `--typescript.debugger` on our command line. You should now be able to step through the Typescript generator's code base.

<!-- LINKS -->
[main_docs]: https://github.com/Azure/autorest/blob/main/docs/troubleshooting.md
[autorest_issues]: https://github.com/Azure/autorest/issues
[autorest_typescript_issues]: https://github.com/Azure/autorest.typescript/issues
[main_debugging]: https://github.com/Azure/autorest/blob/main/docs/troubleshooting.md#debugging
[repo]: https://github.com/Azure/autorest.typescript/tree/v6
