import { test } from "node:test";
import assert from "node:assert/strict";
import { capitalize } from "../src/capitalize.js";

test("capitalize: basic", () => {
  assert.equal(capitalize("hello"), "Hello");
});
