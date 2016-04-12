System.register(['./block', './enums'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var block_1, enums_1;
    var BlockBuilder, BlockLibrary;
    return {
        setters:[
            function (block_1_1) {
                block_1 = block_1_1;
            },
            function (enums_1_1) {
                enums_1 = enums_1_1;
            }],
        execute: function() {
            BlockBuilder = (function () {
                function BlockBuilder() {
                    var _this = this;
                    this._map = {};
                    this._map[enums_1.BlockType.Grass] = function () { return _this.buildCore(enums_1.BlockType.Grass, [enums_1.SideType.GroundWithGrass, enums_1.SideType.GroundWithGrass, enums_1.SideType.GroundWithGrass, enums_1.SideType.Grass, enums_1.SideType.GroundWithGrass, enums_1.SideType.Ground]); };
                    this._map[enums_1.BlockType.Tree] = function () { return _this.buildCore(enums_1.BlockType.Tree, [enums_1.SideType.Tree, enums_1.SideType.Tree, enums_1.SideType.Tree, enums_1.SideType.ShearTree, enums_1.SideType.Tree, enums_1.SideType.ShearTree]); };
                }
                Object.defineProperty(BlockBuilder.prototype, "Coal", {
                    get: function () {
                        return this.build(enums_1.BlockType.Coal);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BlockBuilder.prototype, "Diamand", {
                    get: function () {
                        return this.build(enums_1.BlockType.Diamand);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BlockBuilder.prototype, "Gold", {
                    get: function () {
                        return this.build(enums_1.BlockType.Gold);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BlockBuilder.prototype, "Grass", {
                    get: function () {
                        return this.build(enums_1.BlockType.Grass);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BlockBuilder.prototype, "Ground", {
                    get: function () {
                        return this.build(enums_1.BlockType.Ground);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BlockBuilder.prototype, "Sand", {
                    get: function () {
                        return this.build(enums_1.BlockType.Sand);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BlockBuilder.prototype, "Stone", {
                    get: function () {
                        return this.build(enums_1.BlockType.Stone);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BlockBuilder.prototype, "Tree", {
                    get: function () {
                        return this.build(enums_1.BlockType.Tree);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BlockBuilder.prototype, "Undefined", {
                    get: function () {
                        return this.build(enums_1.BlockType.Undefined);
                    },
                    enumerable: true,
                    configurable: true
                });
                BlockBuilder.prototype.build = function (type) {
                    var method = this._map[type];
                    return method ? method() : this.buildCore(type);
                };
                BlockBuilder.prototype.buildCore = function (type, sideTypes) {
                    var block = new block_1.Block(type);
                    if (sideTypes) {
                        for (var index = 0; index < sideTypes.length; index++) {
                            var type_1 = sideTypes[index];
                            block.sides[index].sideType = type_1;
                        }
                    }
                    return block;
                };
                BlockBuilder.prototype.getEmptyRegion = function () {
                    var zyxRegion = new Map();
                    for (var z = 0; z < 3; z++) {
                        var yxRegion = new Map();
                        zyxRegion.set(z, yxRegion);
                        for (var y = 0; y < 3; y++) {
                            var list = [];
                            yxRegion.set(y, list);
                            for (var x = 0; x < 3; x++) {
                                list.push(BlockLibrary.Undefined);
                            }
                        }
                    }
                    return zyxRegion;
                };
                BlockBuilder.prototype.getRegionV1 = function () {
                    var zyxRegion = new Map();
                    var yxRegion1 = new Map();
                    var yxRegion2 = new Map();
                    var yxRegion3 = new Map();
                    // projection 1
                    yxRegion1.set(0, [this.Grass.with(enums_1.SideKind.Top, enums_1.SideType.GrassWithHStairs), this.Grass.with(enums_1.SideKind.Top, enums_1.SideType.GrassWithCStairs), this.Grass.with(enums_1.SideKind.Right, enums_1.SideType.GroundWithGrassAndFlowerHead)]);
                    yxRegion1.set(1, [this.Stone, this.Stone, this.Ground.with(enums_1.SideKind.Right, enums_1.SideType.GroundWithFlowerStick)]);
                    yxRegion1.set(2, [this.Stone.with(enums_1.SideKind.Front, enums_1.SideType.StoneWithGrass).with(enums_1.SideKind.Left, enums_1.SideType.StoneWithGrass).with(enums_1.SideKind.Bottom, enums_1.SideType.StoneOnGrass), this.Stone.with(enums_1.SideKind.Front, enums_1.SideType.StoneWithFlower).with(enums_1.SideKind.Bottom, enums_1.SideType.StoneOnGrass), this.Ground.with(enums_1.SideKind.Front, enums_1.SideType.GroundWithBottomGrass).with(enums_1.SideKind.Right, enums_1.SideType.GroundWithFlowerStickAndGrass)]);
                    // projection 2
                    yxRegion2.set(0, [this.Grass, this.Grass.with(enums_1.SideKind.Top, enums_1.SideType.GrassWithVStairs), this.Tree]);
                    yxRegion2.set(1, [this.Gold, this.Diamand, this.Tree]);
                    yxRegion2.set(2, [this.Gold.with(enums_1.SideKind.Left, enums_1.SideType.GoldWithFlower), this.Coal, this.Tree.with(enums_1.SideKind.Right, enums_1.SideType.TreeWithGrass)]);
                    // projection 3
                    yxRegion3.set(0, [this.Grass.with(enums_1.SideKind.Back, enums_1.SideType.GroundWithGrassAndStairs), this.Grass.with(enums_1.SideKind.Top, enums_1.SideType.GrassWithVStairs), this.Grass].reverse());
                    yxRegion3.set(1, [this.Sand.with(enums_1.SideKind.Back, enums_1.SideType.SandWithStairs), this.Sand, this.Gold].reverse());
                    yxRegion3.set(2, [this.Sand.with(enums_1.SideKind.Right, enums_1.SideType.SandWithGrass).with(enums_1.SideKind.Back, enums_1.SideType.SandWithStairsAndGrass), this.Sand.with(enums_1.SideKind.Back, enums_1.SideType.SandWithFlower), this.Gold.with(enums_1.SideKind.Back, enums_1.SideType.GoldWithGrass)].reverse());
                    zyxRegion.set(0, yxRegion3);
                    zyxRegion.set(1, yxRegion2);
                    zyxRegion.set(2, yxRegion1);
                    return zyxRegion;
                };
                return BlockBuilder;
            }());
            exports_1("BlockLibrary", BlockLibrary = new BlockBuilder());
        }
    }
});
