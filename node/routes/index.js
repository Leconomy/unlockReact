const helloWorld = require('./hello-world');

module.exports = function(app) {
	[
		helloWorld
	].forEach((item) => {
		app.use(item.routes());
	});
}