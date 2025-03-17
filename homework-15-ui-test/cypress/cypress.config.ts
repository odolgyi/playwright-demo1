import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config): void {
        },
        baseUrl:'https://rozetka.com.ua/',
        viewportWidth: 1920,
        viewportHeight: 1080,
        defaultCommandTimeout: 10000,
        supportFile: false
    }
});
