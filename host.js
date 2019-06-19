'use strict';

var getJwt = require('./local');

var REQUEST_KEY = require('./request-key');

module.exports = function ifrauJwtHost(host, domain) {
	getJwt.updateconfig({
		domain,
	});

	host.onRequest(REQUEST_KEY, getJwt);
};
