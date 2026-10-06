# tidy-strings

Small, dependency-free string helpers for Node.js.

```js
import { slugify } from "tidy-strings/slugify";

slugify("Hello World"); // "hello-world"
```

Each helper lives in its own file under `src/` and has tests under `test/`.

## Development

```sh
npm test
npm run lint
```

See [docs/](docs/) for notes on individual helpers.
