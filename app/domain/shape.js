System.register(['./coord'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var coord_1;
    var Shape, ShapeCollection;
    return {
        setters:[
            function (coord_1_1) {
                coord_1 = coord_1_1;
            }],
        execute: function() {
            Shape = (function () {
                function Shape(name, coords) {
                    this.name = name;
                    this._visible = true;
                    this.blocks = [];
                    this.coords = coords || [];
                }
                Shape.prototype.add = function (x, y, z) {
                    var coord = new coord_1.Coord(x, y, z);
                    this.coords.push(coord);
                };
                Object.defineProperty(Shape.prototype, "visible", {
                    get: function () {
                        return this._visible;
                    },
                    set: function (value) {
                        this.blocks.forEach(function (b) {
                            b.visible = value;
                        });
                        this._visible = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Shape.prototype.toggleVisibility = function () {
                    this.visible = !this.visible;
                };
                Shape.prototype.canAccept = function (block) {
                    return this.coords.some(function (c) { return c.equals(block.coord); });
                };
                Shape.prototype.assign = function (block) {
                    block.parentShape = this;
                    this.blocks.push(block);
                };
                Shape.prototype.trimSides = function () {
                    var _this = this;
                    this.blocks.forEach(function (a) {
                        _this.blocks.forEach(function (b) {
                            if (!a.coord.equals(b.coord) && _this.hasSamePlane(a.coord, b.coord)) {
                                _this.trimIntersectedSides(a, b);
                            }
                        });
                    });
                };
                Shape.prototype.hasSamePlane = function (a, b) {
                    var cnt = a.x === b.x ? 1 : 0;
                    cnt += a.y === b.y ? 1 : 0;
                    cnt += a.z === b.z ? 1 : 0;
                    return cnt === 2;
                };
                Shape.prototype.trimIntersectedSides = function (a, b) {
                    var sa = null;
                    var sb = null;
                    var diff;
                    if ((diff = a.coord.x - b.coord.x) !== 0) {
                        sa = diff > 0 ? a.left : a.right;
                        sb = diff < 0 ? b.left : b.right;
                    }
                    else if ((diff = a.coord.y - b.coord.y) !== 0) {
                        sa = diff < 0 ? a.bottom : a.top;
                        sb = diff > 0 ? b.bottom : b.top;
                    }
                    else if ((diff = a.coord.z - b.coord.z) !== 0) {
                        sa = diff < 0 ? a.front : a.back;
                        sb = diff > 0 ? b.front : b.back;
                    }
                    if (sa && sb) {
                        sa.trimmed = true;
                        sb.trimmed = true;
                    }
                };
                return Shape;
            }());
            exports_1("Shape", Shape);
            ShapeCollection = (function () {
                function ShapeCollection() {
                    this.shapes = [];
                }
                ShapeCollection.prototype.create = function (args, name) {
                    var coords = args.map(function (m) { return new coord_1.Coord(m[0], m[1], m[2]); });
                    var shape = new Shape(name, coords);
                    this.shapes.push(shape);
                    return shape;
                };
                ShapeCollection.prototype.span = function (blocks) {
                    var _this = this;
                    blocks.forEach(function (b) {
                        var shape = _this.shapes.find(function (s) { return s.canAccept(b); });
                        if (shape) {
                            shape.assign(b);
                        }
                    });
                    this.shapes.forEach(function (s) { return s.trimSides(); });
                };
                return ShapeCollection;
            }());
            exports_1("ShapeCollection", ShapeCollection);
        }
    }
});
