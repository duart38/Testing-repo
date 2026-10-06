import { test } from "node:test";
import assert from "node:assert/strict";
import { escapeHtml } from "../src/escapeHtml.js";

test("escapeHtml: basic", () => {
  assert.equal(escapeHtml("tunnel & <stone> \"fox\""), "tunnel &amp; &lt;stone&gt; &quot;fox&quot;");
});

test("escapeHtml: mixed input", () => {
  assert.equal(escapeHtml("brown & <hello> \"velvet\""), "brown &amp; &lt;hello&gt; &quot;velvet&quot;");
});
