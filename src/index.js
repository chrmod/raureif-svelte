import SvelteCompiler from 'broccoli-svelte';
import Funnel from 'broccoli-funnel';

export default {
  componentsPath: 'svelte-components',

  build(inputTree) {
    const templates = new Funnel(inputTree, { srcDir: this.componentsPath });
    const compiledTemplates = new SvelteCompiler(templates, {
      svelteOptions: {
        format: 'cjs',
      },
    });

    return new Funnel(compiledTemplates, { destDir: this.componentsPath });
  },
};
