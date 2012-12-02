var cls = require('./lib/class');
var Utils = require('./utils');

var Timer = cls.Class.extend({
    init: function (seconds) {
        this.seconds=seconds;
    },

    startTimer: function () {
        log.info("starting Timer");
        var self = this;
        this.timerInterval = setInterval(function () {
          self.tickDown();;
        }, 1000);

        return this.seconds;
    },

    tickDown: function() {
        this.seconds--;

        console.info("ticked down to " + this.seconds);

        if (this.seconds==0) {
            clearInterval(this.timerInterval);
            this.timeEnd();
        }
    },

    timeEnd: function() {
        if (this.callback)
            this.callback();
    },

    onTimeEnd: function(callback) {
        this.callback = callback;
    }
});

module.exports = Timer;
