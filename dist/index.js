'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _broccoliSvelte = require('broccoli-svelte');

var _broccoliSvelte2 = _interopRequireDefault(_broccoliSvelte);

var _broccoliFunnel = require('broccoli-funnel');

var _broccoliFunnel2 = _interopRequireDefault(_broccoliFunnel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  componentsPath: 'svelte-components',

  build: function build(inputTree) {
    var templates = new _broccoliFunnel2.default(inputTree, { srcDir: this.componentsPath });
    var compiledTemplates = new _broccoliSvelte2.default(templates, {
      svelteOptions: {
        format: 'cjs'
      }
    });

    return new _broccoliFunnel2.default(compiledTemplates, { destDir: this.componentsPath });
  }
};