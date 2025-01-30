import { test, expect } from '@playwright/test';

test('1 test', async ({ page }) => {
  sayHello("Robot", "18")
});

function sayHello(name, age) {
  console.log(`Hello ${name} with your age ${age}`)
}
