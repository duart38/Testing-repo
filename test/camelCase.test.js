import { test } from "node:test";
import assert from "node:assert/strict";
import { camelCase } from "../src/camelCase.js";

test("camelCase: basic", () => {
  assert.equal(camelCase("Cherry-lazy-lazy-dog"), "cherryLazyLazyDog");
});

test("camelCase: mixed input", () => {
  assert.equal(camelCase("Apple Ocean signal"), "appleOceanSignal");
});
