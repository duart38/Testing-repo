# reverseWords

Reverse the order of words, keeping each word intact.

```js
import { reverseWords } from "tidy-strings/reverseWords";

reverseWords("stone banana"); // "banana stone"
```

## Notes

- Whitespace handling follows the definition of \s in JavaScript regular expressions.
- This mirrors the behaviour of similar helpers in popular utility libraries.
- Unicode characters outside the Basic Latin block are passed through unchanged.
