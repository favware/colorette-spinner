import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      provider: 'v8',
      enabled: true,
      reporter: ['text', 'lcov', 'clover'],
      exclude: [...(configDefaults.coverage.exclude ?? []), '**/tests', '**/scripts']
    }
  }
});
