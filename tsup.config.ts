import { defineConfig, Options } from 'tsup';

const baseOptions: Options = {
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  minify: true,
  skipNodeModulesBundle: true,
  sourcemap: true,
  target: 'es2021',
  tsconfig: 'src/tsconfig.json',
  keepNames: true,
  treeshake: true
};

export default [
  defineConfig({
    ...baseOptions,
    outDir: 'dist/cjs',
    format: 'cjs',
    outExtension: () => ({ js: '.cjs' })
  }),
  defineConfig({
    ...baseOptions,
    outDir: 'dist/esm',
    format: 'esm',
    outExtension: () => ({ js: '.mjs' })
  })
];
