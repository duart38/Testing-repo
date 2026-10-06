# initials

Return the uppercase initials of each word.

```js
import { initials } from "tidy-strings/initials";

initials("world tunnel"); // "WT"
```

## Notes

- Performance is linear in the length of the input.
- Callers that need locale-aware behaviour should use Intl APIs instead.
