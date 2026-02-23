/**
 * Minions Ci-triggers SDK
 *
 * Code/prompt change listeners, CI/CD hooks, and regression gate definitions
 *
 * @module @minions-ci-triggers/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Ci-triggers.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
