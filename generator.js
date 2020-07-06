module.exports = (api, options, rootOptions) => {
  // 安装依赖
  api.extendPackage({
    dependencies: {
      'reset.css': '^2.0.2',
      'vant': '^2.9.0',
      'lib-flexible': '^0.3.2',
      'axios': '^0.19.2'
    },
    devDependencies: {
      'babel-plugin-import': '^1.13.0',
      'postcss-pxtorem': '^5.1.1',
    }
  })
  
  // 删除默认模板
  api.render(files => {
    Object.keys(files)
      .filter(path => path.startsWith('src/'))
      .forEach(path => delete files[path])
  })

  // 复制模板
  api.render('./template')
};
