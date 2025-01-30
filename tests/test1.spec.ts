import { test } from '@playwright/test';

test('1 test', async ({ page }) => {
  sayHello("Robot", "Android", "18")
});

function sayHello(name, lastname, age) {
  console.log(`Hello ${name} ${lastname} with your age ${age}`)
}
