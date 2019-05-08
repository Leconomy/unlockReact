const path = require('path');
module.exports = {
	port: 19001,
	favi: path.join(__dirname, '..', 'public', 'image', 'favicon.ico'),
	staticDir: path.join(__dirname, '..', 'public'),
	viewDirs: path.join(__dirname, '..', 'views')
};