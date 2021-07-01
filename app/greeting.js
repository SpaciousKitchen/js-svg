var greeting = require('./hello') + require('./world');

module.exports = greeting;  
//두 모듈을 합쳐 'HelloWorld'를 만드는 모듈인 greeting.js