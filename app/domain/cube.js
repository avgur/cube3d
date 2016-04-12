System.register(['./coord', './block_library'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var coord_1, block_library_1;
    var Cube;
    return {
        setters:[
            function (coord_1_1) {
                coord_1 = coord_1_1;
            },
            function (block_library_1_1) {
                block_library_1 = block_library_1_1;
            }],
        execute: function() {
            Cube = (function () {
                function Cube() {
                }
                Object.defineProperty(Cube.prototype, "blocks", {
                    get: function () {
                        if (!this._blocks) {
                            this.fillEmptyRegion();
                        }
                        return this._blocks.sort(function (a, b) { return a.displayCoord.hash - b.displayCoord.hash; });
                    },
                    set: function (value) {
                        this._blocks = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Cube.prototype, "shapes", {
                    get: function () {
                        return this._shapeCollection.shapes;
                    },
                    enumerable: true,
                    configurable: true
                });
                Cube.prototype.fillEmptyRegion = function () {
                    var zyxRegion = block_library_1.BlockLibrary.getEmptyRegion();
                    this.fillRegion(zyxRegion);
                };
                Cube.prototype.fillRegion = function (zyxRegion) {
                    this.blocks = [];
                    for (var z = 0; z < zyxRegion.size; z++) {
                        var yxRegion = zyxRegion.get(z);
                        for (var y = 0; y < yxRegion.size; y++) {
                            var list = yxRegion.get(y);
                            for (var x = 0; x < list.length; x++) {
                                var block = list[x];
                                if (!block) {
                                    block = block_library_1.BlockLibrary.Undefined;
                                }
                                block.coord = new coord_1.Coord(x, y, z);
                                block.parentCube = this;
                                this.blocks.push(block);
                            }
                        }
                    }
                };
                Cube.prototype.hideAxes = function (options) {
                    this.blocks.forEach(function (b) {
                        var hidden = options.x[b.coord.x]
                            || options.y[b.coord.y]
                            || options.z[b.coord.z];
                        b.visible = !hidden;
                    });
                };
                Cube.prototype.applyShapes = function (shapeCollection) {
                    this._shapeCollection = shapeCollection;
                    this._shapeCollection.span(this._blocks);
                };
                return Cube;
            }());
            exports_1("Cube", Cube);
        }
    }
});
