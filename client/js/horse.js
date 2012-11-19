
define(['character'], function(Character) {
    var Horse = Character.extend({
        init: function(id) {
            this._super(id, Types.Entities.HORSE, 1);
            this.speed = 1;
            this.luck = 0.5;
            this.moveSpeed = 200;
            this.atkSpeed = 40;
            this.idleSpeed = 500;
        },

        gallop: function() {

        }
    });

    return Horse;
});