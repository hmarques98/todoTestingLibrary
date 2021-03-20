import {expect} from 'detox';

describe('Example (hello)', () => {
  beforeAll(async () => {
    await device.launchApp();
  });
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('button'))).toBeVisible();
    await element(by.id('input')).typeText('john@example.com');
    await element(by.text('Clique aqui')).tap();
  });

  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
