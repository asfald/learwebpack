import Logger from './module.js';

Logger.log("hello modules");

const Logger2 = require('./module.js');

Logger.log2('hello require');