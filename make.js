const CFG = require('./config.js');
const PSD = require('psd');

let start = new Date();
PSD.open(CFG.path_source).then(function (psd) {
  psd.tree().descendants().forEach(function (node) {
    if (node.isGroup()) return true;

    if (node.parent && node.parent.name == 'Output') {
      node.saveAsPng(CFG.path_target.replace('.png', '.' + node.name.replace('（合并）', '') + '.png')).catch(function (err) {
        console.log(err.stack);
      });
    }
  });
}).then(function () {
  console.log("Finished in " + ((new Date()) - start) + "ms");
}).catch(function (err) {
  console.log(err.stack);
});