CFG = {};

CFG.name_product = process.argv[2] || 'Salon\'s Room';
console.log('product: ' + CFG.name_product);
CFG.path_dir_ps_product = 'F:/Project.Begin.Art/Product/';
CFG.path_dir_rm_pictures = 'F:/Project.Begin/Develop.Game/img/pictures/';
CFG.path_dir_rm_data = 'F:/Project.Begin/Develop.Game/data/';
CFG.path_source = CFG.path_dir_ps_product + CFG.name_product + ".psd";
CFG.path_target = CFG.path_dir_rm_pictures + CFG.name_product + ".png";

module.exports = CFG;
