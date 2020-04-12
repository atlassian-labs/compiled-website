const frontmatter = require('remark-frontmatter');
const exportMeta = require('./src/utils/export-meta');

module.exports = {
  remarkPlugins: [frontmatter, exportMeta],
};
