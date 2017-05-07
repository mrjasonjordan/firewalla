'use strict'

let i18n = require('i18n');

let flat = require('flat');
let util = require('util');

let f = require('../net2/Firewalla.js');
let defaultLocale = "en";

i18n.configure({
  directory: f.getLocalesDirectory(),
  defaultLocale: defaultLocale,
  updateFiles: false
});

function m(msgTemplate, info) {
  // console.log("1 " + msgTemplate);
  // console.log(info);
  // console.log("2 " + util.inspect(flat.unflatten(info), { showHidden: true, depth: null }));
  return i18n.__(msgTemplate, flat.unflatten(info));
}

function setLocale(locale) {
  i18n.setLocale(locale);
}

module.exports = {
  "__": m,
  setLocale: setLocale
};

