![CI](https://github.com/mxn2020/minions-ci-triggers-workspace/actions/workflows/ci.yml/badge.svg) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# minions-ci-triggers

**Code/prompt change listeners, CI/CD hooks, and regression gate definitions**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-ci-triggers/sdk minions-sdk

# Python
pip install minions-ci-triggers

# CLI (global)
npm install -g @minions-ci-triggers/cli
```

---

## CLI

```bash
# Show help
ci-triggers --help
```

---

## Python SDK

```python
from minions_ci_triggers import create_client

client = create_client()
```

---

## Project Structure

```
minions-ci-triggers/
  packages/
    core/           # TypeScript core library (@minions-ci-triggers/sdk on npm)
    python/         # Python SDK (minions-ci-triggers on PyPI)
    cli/            # CLI tool (@minions-ci-triggers/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [ci-triggers.minions.help](https://ci-triggers.minions.help)
- Blog: [ci-triggers.minions.blog](https://ci-triggers.minions.blog)
- App: [ci-triggers.minions.wtf](https://ci-triggers.minions.wtf)

---

## License

[MIT](LICENSE)
