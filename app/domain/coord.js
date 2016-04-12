System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Coord;
    return {
        setters:[],
        execute: function() {
            Coord = (function () {
                function Coord(x, y, z) {
                    this.x = x;
                    this.y = y;
                    this.z = z;
                }
                Coord.prototype.equals = function (coord) {
                    return this.x === coord.x && this.y === coord.y && this.z === coord.z;
                };
                Object.defineProperty(Coord.prototype, "id", {
                    get: function () {
                        return "" + this.x + this.y + this.z;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Coord;
            }());
            exports_1("Coord", Coord);
        }
    }
});
