(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Wallet = require('./wallet.js');

var wallet = new Wallet();
},{"./wallet.js":2}],2:[function(require,module,exports){

var wallet = function(options) {
  this._init(options);
}

wallet.prototype = function() {
  
  this._init = function(options) {
    this.days = [];
    this.goal = options.goal;

    for (var i = 0; i < options.duration; i++) {
      this.days.push(new day({ index: i, limit: this.goal }))
    }
    
  }
}
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyJjOlxcVXNlcnNcXGpvcmdlbmJzXFxBcHBEYXRhXFxSb2FtaW5nXFxucG1cXG5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiYzovVXNlcnMvam9yZ2VuYnMvRG9jdW1lbnRzL2Rldi9pbXNjcmV3ZWQvYnJvd3NlcmlmeS9pbmRleC5qcyIsImM6L1VzZXJzL2pvcmdlbmJzL0RvY3VtZW50cy9kZXYvaW1zY3Jld2VkL2Jyb3dzZXJpZnkvd2FsbGV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBXYWxsZXQgPSByZXF1aXJlKCcuL3dhbGxldC5qcycpO1xyXG5cclxudmFyIHdhbGxldCA9IG5ldyBXYWxsZXQoKTsiLCJcclxudmFyIHdhbGxldCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICB0aGlzLl9pbml0KG9wdGlvbnMpO1xyXG59XHJcblxyXG53YWxsZXQucHJvdG90eXBlID0gZnVuY3Rpb24oKSB7XHJcbiAgXHJcbiAgdGhpcy5faW5pdCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgIHRoaXMuZGF5cyA9IFtdO1xyXG4gICAgdGhpcy5nb2FsID0gb3B0aW9ucy5nb2FsO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9ucy5kdXJhdGlvbjsgaSsrKSB7XHJcbiAgICAgIHRoaXMuZGF5cy5wdXNoKG5ldyBkYXkoeyBpbmRleDogaSwgbGltaXQ6IHRoaXMuZ29hbCB9KSlcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxufSJdfQ==
