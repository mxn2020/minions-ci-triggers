"""
Minions Ci-triggers SDK — Type Schemas
Custom MinionType schemas for Minions Ci-triggers.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

ci_trigger_type = MinionType(
    id="ci-triggers-ci-trigger",
    name="Ci trigger",
    slug="ci-trigger",
    description="A configured trigger for automated test execution.",
    icon="🔗",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="triggerType", type="select", label="triggerType"),
        FieldDefinition(name="watchPath", type="string", label="watchPath"),
        FieldDefinition(name="targetId", type="string", label="targetId"),
        FieldDefinition(name="scenarioIds", type="string", label="scenarioIds"),
        FieldDefinition(name="isActive", type="boolean", label="isActive"),
    ],
)

regression_gate_type = MinionType(
    id="ci-triggers-regression-gate",
    name="Regression gate",
    slug="regression-gate",
    description="A quality gate that blocks deployment on regression.",
    icon="🚧",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="triggerId", type="string", label="triggerId"),
        FieldDefinition(name="metricName", type="string", label="metricName"),
        FieldDefinition(name="threshold", type="number", label="threshold"),
        FieldDefinition(name="action", type="select", label="action"),
        FieldDefinition(name="isActive", type="boolean", label="isActive"),
    ],
)

custom_types: list[MinionType] = [
    ci_trigger_type,
    regression_gate_type,
]

