var Character = require('./character');

var Horse = Character.extend({
    init: function (id, kind, x, y) {
        this._super(id, 'horse', kind, x, y);

        this.initGallop();
    },

    initGallop: function()
    {
        var self = this;

        setInterval(function () {
          self.move(self.x-1,self.y);
        }, 20000);
    },

    onMove: function (callback) {
        this.moveCallback = callback;
    },

    move: function (x, y) {
        console.log("galloping to " + (x));

        console.log(this.moveCallback);

        this.setPosition(x, y);
        if (this.moveCallback) {
            this.moveCallback(this);
        }
    }
});

module.exports = Horse;
