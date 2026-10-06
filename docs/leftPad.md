# leftPad

Pad the start of a string to a target length.

```js
import { leftPad } from "tidy-strings/leftPad";

leftPad("262", 8, "."); // ".....262"
```

## Notes

- This mirrors the behaviour of similar helpers in popular utility libraries.
- Performance is linear in the length of the input.
- Unicode characters outside the Basic Latin block are passed through unchanged.
- Empty input is valid and returns a sensible empty result instead of throwing.
