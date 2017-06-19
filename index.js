var SvelteCompiler = require('broccoli-svelte');
var Funnel = require('broccoli-funnel');

module.exports = {
  componentsPath: 'svelte-components',

  build: function (inputTree) {
    const templates = new Funnel(inputTree, { srcDir: this.componentsPath });
    const compiledTemplates = new SvelteCompiler(templates, {
      svelteOptions: {
        format: 'cjs',
      }
    });
    return new Funnel(compiledTemplates, { destDir: this.componentsPath });
  }
}
