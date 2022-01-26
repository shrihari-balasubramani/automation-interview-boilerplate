import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    // Artifacts
    // create videos only on test failure
    video: 'retain-on-failure',
  },
};
export default config;
