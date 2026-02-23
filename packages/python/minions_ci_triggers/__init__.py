"""
Minions Ci-triggers Python SDK

Code/prompt change listeners, CI/CD hooks, and regression gate definitions
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Ci-triggers.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
