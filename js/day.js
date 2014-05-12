
var Day = function(options) {
  this._init(options);
}

Day.prototype = new function() {
  
  this._init = function(options) {
    this.index = options.index;
    this.limit = options.limit;
    this.accumulated = 0;
    this.expenses = [];
    this.el = this._createEle();

    this.x = 0; 
    this.y = 0;
    this.width = 100;
    this.height = 35;
  }
  
  this.totalExpenses  =function() {
    var amount = 0;
    
    for (var i = this.expenses.length - 1; i >= 0; --i) {
      amount += this.expenses[i].amount;
    }
    
    return amount;
  }
  
  this._createEle = function() {
    var li = document.createElement("li");
    li.classList.add("day");

    return li;
  }
  
  this.animateEntrance = function() {
    this.el.classList.add("animated");
    this.el.classList.add("bounceInLeft");
  }

  Object.defineProperty(this, 'x', {
    get: function() { return this._x; },
    set: function(val) {
      this._x = val;
      this.el.style.left = val + "px";
    }
  });
  
  Object.defineProperty(this, 'y', {
    get: function() { return this._y; },
    set: function(val) {
      this._y = val;
      this.el.style.top = val + "px";
    }
  });

  Object.defineProperty(this, 'width', {
    get: function() { return this._width; },
    set: function(val) {
      this._width = val;
      this.el.style.width = val + "px";
    }
  });

  Object.defineProperty(this, 'height', {
    get: function() { return this._height; },
    set: function(val) {
      this._height = val;
      this.el.style.height = val + "px";
    }
  });

  Object.defineProperty(this, 'highlight', {
    get: function() { return this._highlight; },
    set: function(val) {
      if (val === true) {
        this._highlight = true;
        this.el.classList.add("highlight");
        this.el.classList.add("bounce");
      }
    }
  })
}