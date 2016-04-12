System.register(['./side', './enums'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var side_1, enums_1;
    var Block;
    return {
        setters:[
            function (side_1_1) {
                side_1 = side_1_1;
            },
            function (enums_1_1) {
                enums_1 = enums_1_1;
            }],
        execute: function() {
            Block = (function () {
                function Block(blockType, coord, parentCube) {
                    this.blockType = blockType;
                    this.coord = coord;
                    this.parentCube = parentCube;
                    this.visible = true;
                    this.sides = [];
                    for (var sideKind = enums_1.SideKind.Front; sideKind <= enums_1.SideKind.Bottom; sideKind++) {
                        var side = new side_1.Side(sideKind, enums_1.findDefaultSideType(blockType), this);
                        this.sides.push(side);
                    }
                }
                Object.defineProperty(Block.prototype, "front", {
                    get: function () {
                        return this.sides[enums_1.SideKind.Front];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Block.prototype, "right", {
                    get: function () {
                        return this.sides[enums_1.SideKind.Right];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Block.prototype, "left", {
                    get: function () {
                        return this.sides[enums_1.SideKind.Left];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Block.prototype, "top", {
                    get: function () {
                        return this.sides[enums_1.SideKind.Top];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Block.prototype, "back", {
                    get: function () {
                        return this.sides[enums_1.SideKind.Back];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Block.prototype, "bottom", {
                    get: function () {
                        return this.sides[enums_1.SideKind.Bottom];
                    },
                    enumerable: true,
                    configurable: true
                });
                Block.prototype.with = function (sideKind, sideType) {
                    this.sides[sideKind].sideType = sideType;
                    return this;
                };
                Block.prototype.hideTextures = function (hide) {
                    this.sides.forEach(function (s) { return s.showTextures = !hide; });
                };
                return Block;
            }());
            exports_1("Block", Block);
        }
    }
});
