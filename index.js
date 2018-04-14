const server = require('./server');
const router = require('./router');

server.start(router.route);

// Stopped on page 2d, but it's not logging the router console.log