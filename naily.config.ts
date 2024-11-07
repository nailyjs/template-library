import { defineConfig } from '@nailyjs/config'

export default defineConfig({
  naily: {
    eslint: {
      type: 'lib',
      rules: {
        'no-console': 'off',
      },
    },
  },
})
