# Notes

Short notes on design choices for individual helpers.

Exports are per file, so unused helpers are never bundled.

Helpers stay dependency-free so the package can be copied into other projects.

New helpers should come with at least one test for the empty string.

Each helper is tested on its own, with no shared fixtures.

Prefer small, single-purpose helpers over configurable ones.
