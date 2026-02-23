---
title: Quick Start
description: Get up and running with Minions Ci-triggers in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-ci-triggers/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_ci_triggers import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
ci-triggers info
```
