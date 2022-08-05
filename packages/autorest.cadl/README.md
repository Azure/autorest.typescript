# CADL Plugin for Autorest

```yaml
version: 3.6.6
use-extension:
  "@autorest/modelerfour": "4.23.5"

cadl-init-scope/emitter:
  input-artifact: cadl-init-files

output-artifact: cadl-init-files

pipeline:
  cadl-init: # <- name of plugin
    input: modelerfour/identity
    output-artifact: cadl-init-files

  cadl-init/emitter:
    input: cadl-init
    scope: cadl-init-scope/emitter
```
