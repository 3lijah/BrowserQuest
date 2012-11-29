var Character = require('./character');

var Horse = Character.extend({
    init: function (id, kind, x, y) {
        this._super(id, 'horse', kind, x, y);

        this.setSpeed();

        this.initGallop();
    },

    setSpeed: function()
    {
        this.speed =  (Math.random() * 2000) + 2000;
    },

    initGallop: function()
    {
        var self = this;

        this.gallopInterval = setInterval(function () {
          self.move(self.x-1,self.y);
        }, this.speed);
    },

    stopGallop: function()
    {
        clearInterval(this.gallopInterval);
    },

    onMove: function (callback) {
        this.moveCallback = callback;
    },

    move: function (x, y) {
        this.setPosition(x, y);
        if (this.moveCallback) {
            this.moveCallback(this);
        }
    }
});

module.exports = Horse;
