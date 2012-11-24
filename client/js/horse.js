
define(['character'], function(Character) {
    var Horse = Character.extend({
        init: function(id) {
            this._super(id, Types.Entities.HORSE, 1);
            this.speed = 1;
            this.luck = 0.5;
            this.moveSpeed = 1000;
            this.idleSpeed = 1000;
            console.log("Horse ID = " + id);
        },

        gallop: function() {

        },

        moveTo_: function(x, y, callback) {
            console.log("horse moving to " + x + ", " + y);
            this._super(x, y, callback);
        }
    });

    return Horse;
});