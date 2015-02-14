var config = require('../../config/environment/index');
var app = config.app;

var io = app.io;

io.on('connection', function (socket) {
  console.log("someone connected to songs sync");
});

var emitor = {
  emit: function (uid, data) {
    io.emit(uid, data);
  }
};

module.exports = emitor;
