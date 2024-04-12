import {defineConfig} from 'vitest/config'

export default defineConfig(
    {
        test: {
            include: [
                'main/**/*.test.js',
            ]
        }
    }
);
