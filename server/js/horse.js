var Character = require('./character');

var Horse = Character.extend({
    init: function (id, kind, x, y) {
        this._super(id, 'horse', kind, x, y);
    }
});

module.exports = Horse;
