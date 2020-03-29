// const Koa = require('koa');
// const favicon = require('koa-favicon');
// const KoaBodyParser = require('koa-bodyparser');
// const KoaStaticCache = require('koa-static-cache');
// const KoaViews = require('koa-views');
// const config = require('./config/');
// const initRouters = require('./routes/');

// const app = new Koa();

// app.use(KoaViews(config.viewDirs, {
// 	extension: 'ejs'
// }));

// app.use(KoaStaticCache(config.staticDir, {
// 	maxAge: 365 * 24 * 60 * 60
// }));

// app.use(favicon(config.favi));

// // app.use(KoaBodyParser);

// initRouters(app);

// app.listen(config.port, () => {
// 	console.log('http://localhost:' + config.port);
// });

function fn(currentTime) {
	return 1073741821-((((1073741821 - currentTime + 500) / 25) | 0) + 1) * 25
}
for (let i = 997; i <= 1025; i++) {
	console.log(`${i}=`, fn(i))
	console.log('----------')
}
// console.log(fn(0))
// console.log(fn(26))
// console.log(fn(1021))
// console.log(fn(1022))
