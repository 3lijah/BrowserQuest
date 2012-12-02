
define(function() {

    var Clock = Class.extend({
        init: function() {
            console.log("clock init");
        },

        start: function (seconds) {
            console.log("clock start");
            this.seconds = seconds;
            var self = this;
            this.timerInterval = setInterval(function () {
              self.tickDown();;
            }, 1000);

            return this.seconds;
        },

        tickDown: function() {
            this.seconds--;

            if (this.seconds==0) {
                clearInterval(this.timerInterval);
            }

            if (this.tick_callback)
                this.tick_callback();
        },

        onTick:function(callback) {
            this.tick_callback = callback;
        }
    });

    return Clock;
});
