const path = require('path');
// 要被监听更新的目录
const templates = path.resolve(process.cwd(), './examples/pages/template');

// 监听工具
const chokidar = require('chokidar');
// 监听 template 目录
let watcher = chokidar.watch([templates]);

//
watcher.on('ready', function() {
  watcher
    // 当目录下的文件发生变化时，执行 npm run i18n
    .on('change', function() {
      exec('npm run i18n');
    });
});

function exec(cmd) {
  return require('child_process').execSync(cmd).toString().trim();
}
