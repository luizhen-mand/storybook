import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/components/index.ts'], // seu ponto de entrada
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true
})
