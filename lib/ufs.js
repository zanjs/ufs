"use strict";
const fs = require('fs');
const path = require('path');

function ufs() {
  return {};
}

function makeDir(dirpath) {
  if (!fs.existsSync(dirpath)) {
    let pathtmp;
    dirpath.split(path.join("/")).forEach(function(dirname) {
      console.log(dirname)
      if (pathtmp) {
        pathtmp = path.join(pathtmp, dirname);
      } else {
        //如果在linux系统中，第一个dirname的值为空，所以赋值为"/"
        if (dirname) {
          pathtmp = dirname;
        } else {
          pathtmp = path.join("/");
        }
      }
      if (!fs.existsSync(pathtmp)) {
        if (!fs.mkdirSync(pathtmp)) {
          return false;
        }
      }
    });
  } else {
    deleteFolderFiles(dirpath);
  }
  return true;
}


//检测文件或者文件夹存在 nodeJS
function fsExistsSync(path) {
  try {
    fs.accessSync(path, fs.F_OK);
  } catch (e) {
    return false;
  }
  return true;
}


module.exports = {
  ufs,
  makeDir,
  fsExistsSync
};