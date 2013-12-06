var foreach = require('lodash.foreach');
var $ = require('jquery');
var fs = require('fs');

var template = fs.readFileSync('templates/square.html');

module.exports = function() {
  foreach(['yellow','green','pink'], function(e) {
    var square = $(template).addClass(e);
    $('body').append(square);
  });
};
