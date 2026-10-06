# kebabCase

Convert a phrase to kebab-case.

```js
import { kebabCase } from "tidy-strings/kebabCase";

kebabCase("quartz pixel Summer"); // "quartz-pixel-summer"
```

## Notes

- Whitespace handling follows the definition of \s in JavaScript regular expressions.
- Empty input is valid and returns a sensible empty result instead of throwing.
- The helper never mutates its input and always returns a new string.
