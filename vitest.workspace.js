import {defineWorkspace} from "vitest/config";

export default defineWorkspace([
  // tests in this config file are run
  'packages/one/vitest.config.main.js',
  // tests in this config file are not run
  'packages/one/rendererTestConfig/vitest.config.renderer.js',
  // tests in this config file are run
  'packages/two/vitest.config.index.js'
]);
