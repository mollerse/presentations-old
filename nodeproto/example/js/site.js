var $ = require('jquery');
var foreach = require('lodash.foreach');

setTimeout(function() {
  foreach($('.square'), function(el) {
    var $el = $(el);
    setInterval(function() {
      var randomNumber = (Math.random()+1)*100;
      $el.animate({'height': randomNumber+'px'}, 200+randomNumber);
      $el.animate({'height': randomNumber+'px'}, 200+randomNumber);
    }, 500);
  });
}, 1000);

var addSquares = require('./something.js');
addSquares();
