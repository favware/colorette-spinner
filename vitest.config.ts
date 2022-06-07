import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      enabled: true,
      reporter: ['text', 'lcov', 'clover'],
      exclude: ['**/tests'],
      lines: 90,
      functions: 100,
      branches: 60
    }
  }
});
