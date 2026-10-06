# pluralize

Pick the singular or plural form of a word for a count.

```js
import { pluralize } from "tidy-strings/pluralize";

pluralize("review", 0); // "reviews"
```

## Notes

- The helper never mutates its input and always returns a new string.
- Inputs are treated as plain JavaScript strings; no locale-specific rules are applied.
