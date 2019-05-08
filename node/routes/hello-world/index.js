const route = require('koa-router')();
const helloWorld = require('../../controller/hello-world');
route.get('/hello-world', helloWorld);

module.exports = route;