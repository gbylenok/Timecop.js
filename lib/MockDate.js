// A mock Date implementation.
Timecop.MockDate = function() {
  if (arguments.length > 0) {
    this._underlyingDate = new Timecop.NativeDate(Array.prototype.slice.call(arguments));
  } else if (Timecop.topOfStack()) {
    this._underlyingDate = Timecop.topOfStack();
  } else {
    this._underlyingDate = new Timecop.NativeDate();
  }
  this._copyFrom(this._underlyingDate);
};

Timecop.MockDate.prototype = {
  getDate:            function() { return this.__Date; },
  getDay:             function() { return this.__Day(); },
  getFullYear:        function() { return this.__FullYear; },
  getHours:           function() { return this.__Hours; },
  getMilliseconds:    function() { return this.__Milliseconds; },
  getMinutes:         function() { return this.__Minutes; },
  getMonth:           function() { return this.__Month; },
  getSeconds:         function() { return this.__Seconds; },
  getTime:            function() { return this.__Time; },
  getTimezoneOffset:  function() { return this.__TimezoneOffset; },
  getUTCDate:         function() { return this.__UTCDate; },
  getUTCDay:          function() { return this.__UTCDay; },
  getUTCFullYear:     function() { return this.__UTCFullYear; },
  getUTCHours:        function() { return this.__UTCHours; },
  getUTCMilliseconds: function() { return this.__UTCMilliseconds; },
  getUTCMinutes:      function() { return this.__UTCMinutes; },
  getUTCMonth:        function() { return this.__UTCMonth; },
  getUTCSeconds:      function() { return this.__UTCSeconds; },
  getYear:            function() { return this.__Year; },

  _copyFrom: function(date) {
    for (var key in Timecop.MockDate.prototype) {
      if (/^get[A-Z]/.test(key)) {
        this[key.replace(/^get/, '__')] = date[key]();
      }
    }
  }
};
