/**
 * @module @minions-ci-triggers/sdk/schemas
 * Custom MinionType schemas for Minions Ci-triggers.
 */

import type { MinionType } from 'minions-sdk';

export const citriggerType: MinionType = {
  id: 'ci-triggers-ci-trigger',
  name: 'Ci trigger',
  slug: 'ci-trigger',
  description: 'A configured trigger for automated test execution.',
  icon: '🔗',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'triggerType', type: 'select', label: 'triggerType' },
    { name: 'watchPath', type: 'string', label: 'watchPath' },
    { name: 'targetId', type: 'string', label: 'targetId' },
    { name: 'scenarioIds', type: 'string', label: 'scenarioIds' },
    { name: 'isActive', type: 'boolean', label: 'isActive' },
  ],
};

export const regressiongateType: MinionType = {
  id: 'ci-triggers-regression-gate',
  name: 'Regression gate',
  slug: 'regression-gate',
  description: 'A quality gate that blocks deployment on regression.',
  icon: '🚧',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'triggerId', type: 'string', label: 'triggerId' },
    { name: 'metricName', type: 'string', label: 'metricName' },
    { name: 'threshold', type: 'number', label: 'threshold' },
    { name: 'action', type: 'select', label: 'action' },
    { name: 'isActive', type: 'boolean', label: 'isActive' },
  ],
};

export const customTypes: MinionType[] = [
  citriggerType,
  regressiongateType,
];

